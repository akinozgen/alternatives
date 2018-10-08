export default jsonObj => {
  const keys = Object.keys(jsonObj);
  const values = Object.keys(jsonObj).map(key => jsonObj[key]);

  return keys
    .map((key, index) => {
      return `${key}=${values[index]}`;
    })
    .join("&");
};
