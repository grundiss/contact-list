const CONTACTS_LS_KEY = 'contacts'

export function put(data) {
  window.localStorage.setItem(CONTACTS_LS_KEY, JSON.stringify(data));
}

export function read () {
  try {
    return JSON.parse(window.localStorage.getItem(CONTACTS_LS_KEY));
  } catch(e) { // malformed data or some other sad thing
    window.localStorage.removeItem(CONTACTS_LS_KEY)
    return null;
  }
}