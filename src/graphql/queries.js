/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const listUsers = `query ListUsers(
  $filter: ModelUserFilterInput
  $limit: Int
  $nextToken: String
) {
  listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      username
      email
      owner
      name
      bio
      createdAt
      updatedAt
      mapstories {
        nextToken
      }
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
    owner
    name
    bio
    createdAt
    updatedAt
    mapstories {
      items {
        id
        userId
        owner
        title
        description
        createdAt
        updatedAt
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
      userId
      owner
      title
      description
      createdAt
      updatedAt
      user {
        id
        username
        email
        owner
        name
        bio
        createdAt
        updatedAt
      }
      locations {
        nextToken
      }
    }
    nextToken
  }
}
`;
export const getMapstory = `query GetMapstory($id: ID!) {
  getMapstory(id: $id) {
    id
    userId
    owner
    title
    description
    createdAt
    updatedAt
    user {
      id
      username
      email
      owner
      name
      bio
      createdAt
      updatedAt
      mapstories {
        nextToken
      }
    }
    locations {
      items {
        id
        owner
        mapstoryId
        title
        description
        latitude
        longitude
        createdAt
        updatedAt
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
      mapstoryId
      title
      description
      latitude
      longitude
      createdAt
      updatedAt
      mapstory {
        id
        userId
        owner
        title
        description
        createdAt
        updatedAt
      }
      contents {
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
    mapstoryId
    title
    description
    latitude
    longitude
    createdAt
    updatedAt
    mapstory {
      id
      userId
      owner
      title
      description
      createdAt
      updatedAt
      user {
        id
        username
        email
        owner
        name
        bio
        createdAt
        updatedAt
      }
      locations {
        nextToken
      }
    }
    contents {
      items {
        id
        owner
        locationId
        title
        description
        url
        createdAt
        updatedAt
      }
      nextToken
    }
  }
}
`;
export const getContent = `query GetContent($id: ID!) {
  getContent(id: $id) {
    id
    owner
    locationId
    title
    description
    file {
      bucket
      region
      key
    }
    url
    createdAt
    updatedAt
    location {
      id
      owner
      mapstoryId
      title
      description
      latitude
      longitude
      createdAt
      updatedAt
      mapstory {
        id
        userId
        owner
        title
        description
        createdAt
        updatedAt
      }
      contents {
        nextToken
      }
    }
  }
}
`;
export const listContents = `query ListContents(
  $filter: ModelContentFilterInput
  $limit: Int
  $nextToken: String
) {
  listContents(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      owner
      locationId
      title
      description
      file {
        bucket
        region
        key
      }
      url
      createdAt
      updatedAt
      location {
        id
        owner
        mapstoryId
        title
        description
        latitude
        longitude
        createdAt
        updatedAt
      }
    }
    nextToken
  }
}
`;
