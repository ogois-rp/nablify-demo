import { graphql } from '../gql'

export const EPISODES_QUERY = graphql(`
  query GetEpisodes($page: Int) {
    episodes(page: $page) {
      info {
        count
        pages
        next
        prev
      }
      results {
        id
        name
        air_date
        episode
        characters {
          id
        }
      }
    }
  }
`)