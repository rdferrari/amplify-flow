/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateMapstory = `subscription OnCreateMapstory($owner: String!) {
  onCreateMapstory(owner: $owner) {
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
export const onUpdateMapstory = `subscription OnUpdateMapstory($owner: String!) {
  onUpdateMapstory(owner: $owner) {
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
export const onDeleteMapstory = `subscription OnDeleteMapstory($owner: String!) {
  onDeleteMapstory(owner: $owner) {
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
export const onCreateLocation = `subscription OnCreateLocation($owner: String!) {
  onCreateLocation(owner: $owner) {
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
export const onUpdateLocation = `subscription OnUpdateLocation($owner: String!) {
  onUpdateLocation(owner: $owner) {
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
export const onDeleteLocation = `subscription OnDeleteLocation($owner: String!) {
  onDeleteLocation(owner: $owner) {
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
export const onCreateNote = `subscription OnCreateNote($owner: String!) {
  onCreateNote(owner: $owner) {
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
export const onUpdateNote = `subscription OnUpdateNote($owner: String!) {
  onUpdateNote(owner: $owner) {
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
export const onDeleteNote = `subscription OnDeleteNote($owner: String!) {
  onDeleteNote(owner: $owner) {
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
export const onCreateImage = `subscription OnCreateImage($owner: String!) {
  onCreateImage(owner: $owner) {
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
export const onUpdateImage = `subscription OnUpdateImage($owner: String!) {
  onUpdateImage(owner: $owner) {
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
export const onDeleteImage = `subscription OnDeleteImage($owner: String!) {
  onDeleteImage(owner: $owner) {
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
export const onCreateVideo = `subscription OnCreateVideo($owner: String!) {
  onCreateVideo(owner: $owner) {
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
export const onUpdateVideo = `subscription OnUpdateVideo($owner: String!) {
  onUpdateVideo(owner: $owner) {
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
export const onDeleteVideo = `subscription OnDeleteVideo($owner: String!) {
  onDeleteVideo(owner: $owner) {
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
export const onCreateImage360 = `subscription OnCreateImage360($owner: String!) {
  onCreateImage360(owner: $owner) {
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
export const onUpdateImage360 = `subscription OnUpdateImage360($owner: String!) {
  onUpdateImage360(owner: $owner) {
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
export const onDeleteImage360 = `subscription OnDeleteImage360($owner: String!) {
  onDeleteImage360(owner: $owner) {
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
export const onCreateVideo360 = `subscription OnCreateVideo360($owner: String!) {
  onCreateVideo360(owner: $owner) {
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
export const onUpdateVideo360 = `subscription OnUpdateVideo360($owner: String!) {
  onUpdateVideo360(owner: $owner) {
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
export const onDeleteVideo360 = `subscription OnDeleteVideo360($owner: String!) {
  onDeleteVideo360(owner: $owner) {
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
