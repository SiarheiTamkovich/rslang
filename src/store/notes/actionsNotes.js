let nextNoteId = 4;
export const addNotesAction = text => ({
  type: 'ADD_NOTES', 
  id: nextNoteId++,
  text,
});

export const toggleAction = (id) => ({
  type: 'TOGGLE_NOTES',
  id,
});

export const editAction = (id) => ({
  type: 'EDIT_NOTES',
  id,
})

export const delateAction = (id) => ({
  type: 'DELATE_NOTES',
  id,
})

export const loadAction = (payload) => ({
  type: 'LOAD_NOTES',
  payload,
})
