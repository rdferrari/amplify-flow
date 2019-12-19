/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = `subscription OnCreateUser {
  onCreateUser {
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
export const onUpdateUser = `subscription OnUpdateUser {
  onUpdateUser {
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
export const onDeleteUser = `subscription OnDeleteUser {
  onDeleteUser {
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
export const onCreateMapstory = `subscription OnCreateMapstory {
  onCreateMapstory {
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
export const onUpdateMapstory = `subscription OnUpdateMapstory {
  onUpdateMapstory {
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
export const onDeleteMapstory = `subscription OnDeleteMapstory {
  onDeleteMapstory {
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
export const onCreateLocation = `subscription OnCreateLocation {
  onCreateLocation {
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
export const onUpdateLocation = `subscription OnUpdateLocation {
  onUpdateLocation {
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
export const onDeleteLocation = `subscription OnDeleteLocation {
  onDeleteLocation {
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
export const onCreateContent = `subscription OnCreateContent {
  onCreateContent {
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
export const onUpdateContent = `subscription OnUpdateContent {
  onUpdateContent {
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
export const onDeleteContent = `subscription OnDeleteContent {
  onDeleteContent {
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
