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

export const CHARACTER_DETAIL_QUERY = graphql(`
  query GetCharacter($id: ID!) {
    character(id: $id) {
      id
      name
      status
      species
      type
      gender
      image
      origin {
        name
      }
      location {
        name
      }
      episode {
        id
        name
        episode
      }
    }
  }
`)