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
    note
    location {
      id
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
    note
    location {
      id
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
    note
    location {
      id
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
