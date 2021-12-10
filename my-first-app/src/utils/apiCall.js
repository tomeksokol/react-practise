const getData = (url) => {
  return fetch(url).then(d => d.json());
};

export {getData};