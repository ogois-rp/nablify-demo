import { graphql } from '../gql'

export const CHARACTERS_QUERY = graphql(`
  query GetCharacters($page: Int, $status: String, $species: String) {
    characters(page: $page, filter: { status: $status, species: $species }) {
      info {
        count
        pages
        next
        prev
      }
      results {
        id
        name
        status
        species
        image
        origin {
          name
        }
      }
    }
  }
`)