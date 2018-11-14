export default json => Object.keys(json).map(key => `${key}=${json[key]}`).join('&');
