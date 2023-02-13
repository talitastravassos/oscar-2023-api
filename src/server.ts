import * as dotenv from 'dotenv';
import express from 'express';
import { client } from './graphql/client';
import {
  featureFilmQuery,
  mainQuery,
  originalSongQuery,
  visualEffectsQuery,
} from './graphql/queries';
const app = express();

dotenv.config();

const port = 3333;

app.get('/', (request, response) => {
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
});

app.listen(port, () => {
  console.log(`⚡ Server running on port ${port} ⚡`);
});
