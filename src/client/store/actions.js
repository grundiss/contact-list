export const ON_DELETE = "@@app:contact-list/ON_DELETE";
export function onDelete(id) {
  return {
    type: ON_DELETE,
    payload: { id }
  };
}

export const ON_EDIT = "@@app:contact-list/ON_EDIT";
export function onEdit(id) {
  return {
    type: ON_EDIT,
    payload: { id }
  };
}

export const ON_EDIT_FIELD = "@@app:contact-list/ON_EDIT_FIELD";
export function onEditField(fieldName, value) {
  return {
    type: ON_EDIT_FIELD,
    payload: { fieldName, value }
  };
}

export const ON_CLOSE_EDITTING_MODAL =
  "@@app:contact-list/ON_CLOSE_EDITTING_MODAL";
export function onCloseEdittingModal() {
  return {
    type: ON_CLOSE_EDITTING_MODAL
  };
}

export const ON_SAVE = "@@app:contact-list/ON_SAVE";
export function onSave() {
  return { type: ON_SAVE };
}
