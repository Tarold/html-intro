import CONFIGS from './../configs';
import RandomSentence from 'random-sentence';

function getCaption(isFact) {
  if (isFact) {
    const { API_KEY, BASE_URL, METHOD } = CONFIGS.FACTS;
    const options = {
      method: METHOD,
      headers: { 'X-Api-Key': API_KEY },
    };

    const url = BASE_URL + '?limit=1';

    return fetch(url, options)
      .then((response) => response.json())
      .catch((err) => {
        console.log(`error ${err}`);
      });
  }
  return RandomSentence({ min: 10, max: 20 });
}

function getDog() {
  const { BASE_URL } = CONFIGS.DOG;

  return fetch(`${BASE_URL}`)
    .then((response) => response.json())
    .then((data) => data.message)
    .catch((err) => {
      console.log('err', err);
      return 'https://images.dog.ceo/breeds/sharpei/noel.jpg';
    });
}

function getData(isFact) {
  return Promise.all([getDog(), getCaption(isFact)]);
}

export default getData;
