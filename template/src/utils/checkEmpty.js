export const isEmpty = (obj) => {
  if (obj) {
    return Object.keys(obj).length === 0;
  } else return false;
};
