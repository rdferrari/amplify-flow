/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createMapstory = `mutation CreateMapstory($input: CreateMapstoryInput!) {
  createMapstory(input: $input) {
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
export const updateMapstory = `mutation UpdateMapstory($input: UpdateMapstoryInput!) {
  updateMapstory(input: $input) {
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
export const deleteMapstory = `mutation DeleteMapstory($input: DeleteMapstoryInput!) {
  deleteMapstory(input: $input) {
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
export const createLocation = `mutation CreateLocation($input: CreateLocationInput!) {
  createLocation(input: $input) {
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
export const updateLocation = `mutation UpdateLocation($input: UpdateLocationInput!) {
  updateLocation(input: $input) {
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
export const deleteLocation = `mutation DeleteLocation($input: DeleteLocationInput!) {
  deleteLocation(input: $input) {
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
export const createNote = `mutation CreateNote($input: CreateNoteInput!) {
  createNote(input: $input) {
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
export const updateNote = `mutation UpdateNote($input: UpdateNoteInput!) {
  updateNote(input: $input) {
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
export const deleteNote = `mutation DeleteNote($input: DeleteNoteInput!) {
  deleteNote(input: $input) {
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
export const createImage = `mutation CreateImage($input: CreateImageInput!) {
  createImage(input: $input) {
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
export const updateImage = `mutation UpdateImage($input: UpdateImageInput!) {
  updateImage(input: $input) {
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
export const deleteImage = `mutation DeleteImage($input: DeleteImageInput!) {
  deleteImage(input: $input) {
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
export const createVideo = `mutation CreateVideo($input: CreateVideoInput!) {
  createVideo(input: $input) {
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
export const updateVideo = `mutation UpdateVideo($input: UpdateVideoInput!) {
  updateVideo(input: $input) {
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
export const deleteVideo = `mutation DeleteVideo($input: DeleteVideoInput!) {
  deleteVideo(input: $input) {
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
export const createImage360 = `mutation CreateImage360($input: CreateImage360Input!) {
  createImage360(input: $input) {
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
export const updateImage360 = `mutation UpdateImage360($input: UpdateImage360Input!) {
  updateImage360(input: $input) {
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
export const deleteImage360 = `mutation DeleteImage360($input: DeleteImage360Input!) {
  deleteImage360(input: $input) {
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
export const createVideo360 = `mutation CreateVideo360($input: CreateVideo360Input!) {
  createVideo360(input: $input) {
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
export const updateVideo360 = `mutation UpdateVideo360($input: UpdateVideo360Input!) {
  updateVideo360(input: $input) {
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
export const deleteVideo360 = `mutation DeleteVideo360($input: DeleteVideo360Input!) {
  deleteVideo360(input: $input) {
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
export const registerUser = `mutation RegisterUser($input: CreateUserInput!) {
  registerUser(input: $input) {
    id
    username
    email
    registered
  }
}
`;
export const updateUser = `mutation UpdateUser($input: UpdateUserInput!) {
  updateUser(input: $input) {
    id
    username
    email
    registered
  }
}
`;
