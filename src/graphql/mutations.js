/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUser = `mutation CreateUser($input: CreateUserInput!) {
  createUser(input: $input) {
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
export const updateUser = `mutation UpdateUser($input: UpdateUserInput!) {
  updateUser(input: $input) {
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
export const deleteUser = `mutation DeleteUser($input: DeleteUserInput!) {
  deleteUser(input: $input) {
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
export const createMapstory = `mutation CreateMapstory($input: CreateMapstoryInput!) {
  createMapstory(input: $input) {
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
export const updateMapstory = `mutation UpdateMapstory($input: UpdateMapstoryInput!) {
  updateMapstory(input: $input) {
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
export const deleteMapstory = `mutation DeleteMapstory($input: DeleteMapstoryInput!) {
  deleteMapstory(input: $input) {
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
export const createLocation = `mutation CreateLocation($input: CreateLocationInput!) {
  createLocation(input: $input) {
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
        mediaType
        createdAt
        updatedAt
      }
      nextToken
    }
  }
}
`;
export const updateLocation = `mutation UpdateLocation($input: UpdateLocationInput!) {
  updateLocation(input: $input) {
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
        mediaType
        createdAt
        updatedAt
      }
      nextToken
    }
  }
}
`;
export const deleteLocation = `mutation DeleteLocation($input: DeleteLocationInput!) {
  deleteLocation(input: $input) {
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
        mediaType
        createdAt
        updatedAt
      }
      nextToken
    }
  }
}
`;
export const createContent = `mutation CreateContent($input: CreateContentInput!) {
  createContent(input: $input) {
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
    mediaType
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
export const updateContent = `mutation UpdateContent($input: UpdateContentInput!) {
  updateContent(input: $input) {
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
    mediaType
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
export const deleteContent = `mutation DeleteContent($input: DeleteContentInput!) {
  deleteContent(input: $input) {
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
    mediaType
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
