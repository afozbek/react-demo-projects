export const keyCodes = {
  enter: 13,
  space: 32,
  esc: 27,
  left: 37,
  up: 38,
  right: 39,
  down: 40,
  delete: 46,
};

export const FILTER_TYPES = {
  MOST_VOTED: 'MOST_VOTED',
  LESS_VOTED: 'LESS_VOTED',
};

export const isValidURL = (str) => {
  const pattern = new RegExp(
    '(?:(?:https?|ftp|file)://|www.|ftp.)(?:([-A-Z0-9+&@#/%=~_|$?!:,.]*)|[-A-Z0-9+&@#/%=~_|$?!:,.])*(?:([-A-Z0-9+&@#/%=~_|$?!:,.]*)|[A-Z0-9+&@#/%=~_|$])'
  );
  return pattern.test(str);
};

export const haveEnoughCharacters = (str) => {
  return /.{5,}/.test(str);
};
