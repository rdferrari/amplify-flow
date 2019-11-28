/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateMapstory = `subscription OnCreateMapstory {
  onCreateMapstory {
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
export const onUpdateMapstory = `subscription OnUpdateMapstory {
  onUpdateMapstory {
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
export const onDeleteMapstory = `subscription OnDeleteMapstory {
  onDeleteMapstory {
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
export const onCreateLocation = `subscription OnCreateLocation {
  onCreateLocation {
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
export const onUpdateLocation = `subscription OnUpdateLocation {
  onUpdateLocation {
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
export const onDeleteLocation = `subscription OnDeleteLocation {
  onDeleteLocation {
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
export const onCreateNote = `subscription OnCreateNote {
  onCreateNote {
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
export const onUpdateNote = `subscription OnUpdateNote {
  onUpdateNote {
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
export const onDeleteNote = `subscription OnDeleteNote {
  onDeleteNote {
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
