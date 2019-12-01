/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createMapstory = `mutation CreateMapstory($input: CreateMapstoryInput!) {
  createMapstory(input: $input) {
    id
    owner
    title
    description
    locations {
      items {
        id
        owner
        mapstoryID
        title
      }
      nextToken
    }
  }
}
`;
export const updateMapstory = `mutation UpdateMapstory($input: UpdateMapstoryInput!) {
  updateMapstory(input: $input) {
    id
    owner
    title
    description
    locations {
      items {
        id
        owner
        mapstoryID
        title
      }
      nextToken
    }
  }
}
`;
export const deleteMapstory = `mutation DeleteMapstory($input: DeleteMapstoryInput!) {
  deleteMapstory(input: $input) {
    id
    owner
    title
    description
    locations {
      items {
        id
        owner
        mapstoryID
        title
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
    mapstoryID
    title
    mapstory {
      id
      owner
      title
      description
      locations {
        nextToken
      }
    }
  }
}
`;
export const updateLocation = `mutation UpdateLocation($input: UpdateLocationInput!) {
  updateLocation(input: $input) {
    id
    owner
    mapstoryID
    title
    mapstory {
      id
      owner
      title
      description
      locations {
        nextToken
      }
    }
  }
}
`;
export const deleteLocation = `mutation DeleteLocation($input: DeleteLocationInput!) {
  deleteLocation(input: $input) {
    id
    owner
    mapstoryID
    title
    mapstory {
      id
      owner
      title
      description
      locations {
        nextToken
      }
    }
  }
}
`;
