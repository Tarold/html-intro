import CONFIGS from './../configs';
const facts = [
  {
    fact: 'In one day, the Tootsie Roll Industry makes over 16 million lollipops',
  },
  {
    fact: 'Most snails are hermaphrodites, meaning they have both female and male reproductive organs',
  },
  { fact: 'Wild turkeys can run at speeds of up to 25 miles per hour' },
  { fact: 'France is known as the perfume capital of the world' },
  { fact: '38% of Americans eat breakfast everyday' },
  { fact: 'Maine is the only state whose name is just one syllable' },
  {
    fact: 'Germany produces more than 5,000 varieties of beer and has about 1,300 breweries in country',
  },
  { fact: 'A giraffe is able to clean its ears with its own tongue' },
  { fact: 'The decomposition point of Olive Oil is 220 degrees Celsius' },
  {
    fact: 'The largest ice cream sundae was made with 4,667 g… it. This was made in Anaheim, California in 1985',
  },
];
function getFacts() {
  const { API_KEY, BASE_URL, METHOD } = CONFIGS.FACTS;
  const options = {
    method: METHOD,
    headers: { 'X-Api-Key': API_KEY },
  };

  const url = BASE_URL + '?limit=1';

  // return fetch(url, options)
  //   .then((response) => response.json())
  //   .catch((err) => {
  //     console.log(`error ${err}`);
  //   });

  return facts[0].fact;
}
function getDog() {
  const { BASE_URL } = CONFIGS.DOG;

  return fetch(`${BASE_URL}`)
    .then((response) => response.json())
    .then((data) => data.message);

  //return 'https://images.dog.ceo/breeds/sharpei/noel.jpg';
}

function getData() {
  return Promise.all([getDog(), getFacts()]).then((data) => {
    console.log('data :>> ', data);
    return data;
  });
}

export default getData;
