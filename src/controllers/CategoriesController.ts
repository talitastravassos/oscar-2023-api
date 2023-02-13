import { client } from '@graphql/client';
import {
  featureFilmQuery,
  mainQuery,
  originalSongQuery,
  visualEffectsQuery,
} from '@graphql/queries';
import { type Request, type Response } from 'express';

export const getCategoriesController = (
  request: Request,
  response: Response
) => {
  const main = client.request(mainQuery);
  const featureFilm = client.request(featureFilmQuery);
  const visualEffects = client.request(visualEffectsQuery);
  const originalSong = client.request(originalSongQuery);

  Promise.all([main, featureFilm, visualEffects, originalSong])
    .then((result) => {
      const categories = {
        categories: [
          ...result[0].categories,
          ...result[1].categories,
          ...result[2].categories,
          ...result[3].categories,
        ],
      };
      return response.json(categories);
    })
    .catch((error) => console.log(error));
};
