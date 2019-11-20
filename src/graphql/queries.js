/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getMapstory = `query GetMapstory($id: ID!) {
  getMapstory(id: $id) {
    id
    title
    description
    location {
      items {
        id
        title
        description
        latitude
        longitude
        owner
        createdAt
      }
      nextToken
    }
    tags
    owner
    createdAt
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
      location {
        nextToken
      }
      tags
      owner
      createdAt
    }
    nextToken
  }
}
`;
export const getLocation = `query GetLocation($id: ID!) {
  getLocation(id: $id) {
    id
    title
    description
    latitude
    longitude
    notes {
      items {
        id
        title
        note
        owner
        createdAt
      }
      nextToken
    }
    images {
      items {
        id
        title
        owner
        createdAt
      }
      nextToken
    }
    videos {
      items {
        id
        title
        url
        owner
        createdAt
      }
      nextToken
    }
    images360 {
      items {
        id
        title
        owner
        createdAt
      }
      nextToken
    }
    videso360 {
      items {
        id
        title
        url
        owner
        createdAt
      }
      nextToken
    }
    mapstory {
      id
      title
      description
      location {
        nextToken
      }
      tags
      owner
      createdAt
    }
    owner
    createdAt
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
      title
      description
      latitude
      longitude
      notes {
        nextToken
      }
      images {
        nextToken
      }
      videos {
        nextToken
      }
      images360 {
        nextToken
      }
      videso360 {
        nextToken
      }
      mapstory {
        id
        title
        description
        tags
        owner
        createdAt
      }
      owner
      createdAt
    }
    nextToken
  }
}
`;
export const getNote = `query GetNote($id: ID!) {
  getNote(id: $id) {
    id
    title
    note
    location {
      id
      title
      description
      latitude
      longitude
      notes {
        nextToken
      }
      images {
        nextToken
      }
      videos {
        nextToken
      }
      images360 {
        nextToken
      }
      videso360 {
        nextToken
      }
      mapstory {
        id
        title
        description
        tags
        owner
        createdAt
      }
      owner
      createdAt
    }
    owner
    createdAt
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
      title
      note
      location {
        id
        title
        description
        latitude
        longitude
        owner
        createdAt
      }
      owner
      createdAt
    }
    nextToken
  }
}
`;
export const getImage = `query GetImage($id: ID!) {
  getImage(id: $id) {
    id
    title
    file {
      bucket
      region
      key
    }
    location {
      id
      title
      description
      latitude
      longitude
      notes {
        nextToken
      }
      images {
        nextToken
      }
      videos {
        nextToken
      }
      images360 {
        nextToken
      }
      videso360 {
        nextToken
      }
      mapstory {
        id
        title
        description
        tags
        owner
        createdAt
      }
      owner
      createdAt
    }
    owner
    createdAt
  }
}
`;
export const listImages = `query ListImages(
  $filter: ModelImageFilterInput
  $limit: Int
  $nextToken: String
) {
  listImages(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      title
      file {
        bucket
        region
        key
      }
      location {
        id
        title
        description
        latitude
        longitude
        owner
        createdAt
      }
      owner
      createdAt
    }
    nextToken
  }
}
`;
export const getVideo = `query GetVideo($id: ID!) {
  getVideo(id: $id) {
    id
    title
    url
    location {
      id
      title
      description
      latitude
      longitude
      notes {
        nextToken
      }
      images {
        nextToken
      }
      videos {
        nextToken
      }
      images360 {
        nextToken
      }
      videso360 {
        nextToken
      }
      mapstory {
        id
        title
        description
        tags
        owner
        createdAt
      }
      owner
      createdAt
    }
    owner
    createdAt
  }
}
`;
export const listVideos = `query ListVideos(
  $filter: ModelVideoFilterInput
  $limit: Int
  $nextToken: String
) {
  listVideos(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      title
      url
      location {
        id
        title
        description
        latitude
        longitude
        owner
        createdAt
      }
      owner
      createdAt
    }
    nextToken
  }
}
`;
export const getImage360 = `query GetImage360($id: ID!) {
  getImage360(id: $id) {
    id
    title
    file {
      bucket
      region
      key
    }
    location {
      id
      title
      description
      latitude
      longitude
      notes {
        nextToken
      }
      images {
        nextToken
      }
      videos {
        nextToken
      }
      images360 {
        nextToken
      }
      videso360 {
        nextToken
      }
      mapstory {
        id
        title
        description
        tags
        owner
        createdAt
      }
      owner
      createdAt
    }
    owner
    createdAt
  }
}
`;
export const listImage360s = `query ListImage360s(
  $filter: ModelImage360FilterInput
  $limit: Int
  $nextToken: String
) {
  listImage360s(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      title
      file {
        bucket
        region
        key
      }
      location {
        id
        title
        description
        latitude
        longitude
        owner
        createdAt
      }
      owner
      createdAt
    }
    nextToken
  }
}
`;
export const getVideo360 = `query GetVideo360($id: ID!) {
  getVideo360(id: $id) {
    id
    title
    url
    location {
      id
      title
      description
      latitude
      longitude
      notes {
        nextToken
      }
      images {
        nextToken
      }
      videos {
        nextToken
      }
      images360 {
        nextToken
      }
      videso360 {
        nextToken
      }
      mapstory {
        id
        title
        description
        tags
        owner
        createdAt
      }
      owner
      createdAt
    }
    owner
    createdAt
  }
}
`;
export const listVideo360s = `query ListVideo360s(
  $filter: ModelVideo360FilterInput
  $limit: Int
  $nextToken: String
) {
  listVideo360s(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      title
      url
      location {
        id
        title
        description
        latitude
        longitude
        owner
        createdAt
      }
      owner
      createdAt
    }
    nextToken
  }
}
`;
export const getUser = `query GetUser($id: ID!) {
  getUser(id: $id) {
    id
    username
    email
    registered
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
      location {
        nextToken
      }
      tags
      owner
      createdAt
    }
    nextToken
    total
  }
}
`;
