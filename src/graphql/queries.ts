import { gql } from 'graphql-request';

export const mainQuery = gql`
  query Categories {
    categories {
      id
      title
      nominees {
        ... on Movie {
          id
          name
          producers
          isWinner
        }
        ... on Actor {
          id
          name
          movie
          isWinner
        }
      }
    }
  }
`;

export const featureFilmQuery = gql`
  query Categories {
    categories(where: { title_contains: "Feature Film" }) {
      id
      title
      nominees {
        ... on Movie {
          id
          name
          producers
          isWinner
        }
      }
    }
  }
`;

export const visualEffectsQuery = gql`
  query Categories {
    categories(where: { title_contains: "Visual Effects" }) {
      id
      title
      nominees {
        ... on Movie {
          id
          name
          producers
          isWinner
        }
      }
    }
  }
`;

export const originalSongQuery = gql`
  query Categories {
    categories(where: { title_contains: "Original Song" }) {
      id
      title
      nominees {
        ... on Song {
          id
          title
          movie
          from
        }
      }
    }
  }
`;
