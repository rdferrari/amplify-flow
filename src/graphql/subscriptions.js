/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateMapstory = `subscription OnCreateMapstory {
  onCreateMapstory {
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
export const onUpdateMapstory = `subscription OnUpdateMapstory {
  onUpdateMapstory {
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
export const onDeleteMapstory = `subscription OnDeleteMapstory {
  onDeleteMapstory {
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
export const onCreateLocation = `subscription OnCreateLocation {
  onCreateLocation {
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
export const onUpdateLocation = `subscription OnUpdateLocation {
  onUpdateLocation {
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
export const onDeleteLocation = `subscription OnDeleteLocation {
  onDeleteLocation {
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
