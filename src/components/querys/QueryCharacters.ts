import { gql } from "@apollo/client";

const GET_CHARACTER = gql`
  query getCharacter($id: ID!) {
    character(id: $id) {
      image
      name
      id
      status
      species
      type
      gender
      origin {
        name
      }
      created
      location {
        name
      }
    }
  }
`;

export default GET_CHARACTER;
