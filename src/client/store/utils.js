import moment from 'moment';

const MAX_NAME_LENGTH = 150;
const PHONE_DIGITS_NUMBER = 11;

export function validate(record) {
  const errors = {};

  if(record.name.trim().length === 0) {
    errors.emptyName = true;
  }

  if(record.name.length > MAX_NAME_LENGTH) {
    errors.tooLongName = true;
  }

  if(!moment(record.birthDate, 'YYYY-MM-DD', true).isValid()) {
    errors.invalidDate = true;
  }

  if(record.city.trim().length === 0) {
    errors.emptyCity = true;
  }

  if(record.address.trim().length === 0) {
    errors.emptyAddress = true;
  }

  if(record.phone.replace(/[^0-9]/, "").length !== PHONE_DIGITS_NUMBER) {
    errors.invalidPhone = true;
  }

  return errors;
}