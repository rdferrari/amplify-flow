/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getMapstory = `query GetMapstory($id: ID!) {
  getMapstory(id: $id) {
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
export const listMapstorys = `query ListMapstorys(
  $filter: ModelMapstoryFilterInput
  $limit: Int
  $nextToken: String
) {
  listMapstorys(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      owner
      title
      description
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
export const listLocations = `query ListLocations(
  $filter: ModelLocationFilterInput
  $limit: Int
  $nextToken: String
) {
  listLocations(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      owner
      mapstoryID
      title
      mapstory {
        id
        owner
        title
        description
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
      owner
      title
      description
      locations {
        nextToken
      }
    }
    nextToken
    total
  }
}
`;
export const searchLocations = `query SearchLocations(
  $filter: SearchableLocationFilterInput
  $sort: SearchableLocationSortInput
  $limit: Int
  $nextToken: String
) {
  searchLocations(
    filter: $filter
    sort: $sort
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      owner
      mapstoryID
      title
      mapstory {
        id
        owner
        title
        description
      }
    }
    nextToken
    total
  }
}
`;
