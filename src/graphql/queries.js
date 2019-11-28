/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getMapstory = `query GetMapstory($id: ID!) {
  getMapstory(id: $id) {
    id
    title
    description
    owner
    locations {
      items {
        id
        owner
        title
      }
      nextToken
    }
  }
}
`;
export const listMapstorys = `query ListMapstorys(
  $filter: ModelMapstoryFilterInput
  $limit: Int
  $nextToken: String
) {
  listMapstorys(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      title
      description
      owner
      locations {
        nextToken
      }
    }
    nextToken
  }
}
`;
export const getLocation = `query GetLocation($id: ID!) {
  getLocation(id: $id) {
    id
    owner
    title
    mapstory {
      id
      title
      description
      owner
      locations {
        nextToken
      }
    }
    notes {
      items {
        id
        owner
        note
      }
      nextToken
    }
  }
}
`;
export const listLocations = `query ListLocations(
  $filter: ModelLocationFilterInput
  $limit: Int
  $nextToken: String
) {
  listLocations(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      owner
      title
      mapstory {
        id
        title
        description
        owner
      }
      notes {
        nextToken
      }
    }
    nextToken
  }
}
`;
export const getNote = `query GetNote($id: ID!) {
  getNote(id: $id) {
    id
    owner
    note
    location {
      id
      owner
      title
      mapstory {
        id
        title
        description
        owner
      }
      notes {
        nextToken
      }
    }
  }
}
`;
export const listNotes = `query ListNotes(
  $filter: ModelNoteFilterInput
  $limit: Int
  $nextToken: String
) {
  listNotes(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      owner
      note
      location {
        id
        owner
        title
      }
    }
    nextToken
  }
}
`;
export const searchMapstorys = `query SearchMapstorys(
  $filter: SearchableMapstoryFilterInput
  $sort: SearchableMapstorySortInput
  $limit: Int
  $nextToken: String
) {
  searchMapstorys(
    filter: $filter
    sort: $sort
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      title
      description
      owner
      locations {
        nextToken
      }
    }
    nextToken
    total
  }
}
`;
