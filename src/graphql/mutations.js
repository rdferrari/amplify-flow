/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createMapstory = `mutation CreateMapstory($input: CreateMapstoryInput!) {
  createMapstory(input: $input) {
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
export const updateMapstory = `mutation UpdateMapstory($input: UpdateMapstoryInput!) {
  updateMapstory(input: $input) {
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
export const deleteMapstory = `mutation DeleteMapstory($input: DeleteMapstoryInput!) {
  deleteMapstory(input: $input) {
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
export const createLocation = `mutation CreateLocation($input: CreateLocationInput!) {
  createLocation(input: $input) {
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
export const updateLocation = `mutation UpdateLocation($input: UpdateLocationInput!) {
  updateLocation(input: $input) {
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
export const deleteLocation = `mutation DeleteLocation($input: DeleteLocationInput!) {
  deleteLocation(input: $input) {
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
export const createNote = `mutation CreateNote($input: CreateNoteInput!) {
  createNote(input: $input) {
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
export const updateNote = `mutation UpdateNote($input: UpdateNoteInput!) {
  updateNote(input: $input) {
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
export const deleteNote = `mutation DeleteNote($input: DeleteNoteInput!) {
  deleteNote(input: $input) {
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
