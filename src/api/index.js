import queryString from 'query-string';
import CONFIGS from '../configs';

function getUsers(options) {
  const defaultOptions = {
    page: 1,
    results: CONFIGS.RESULTS_COUNT,
    seed: CONFIGS.RESULTS_ORDER,
    inc: CONFIGS.INCLUDING_RESULTS,
  };

  const excOptions = options.exc > 0 ? { inc: [] } : {};

  const realOptions = {
    ...defaultOptions,
    ...options,
    ...excOptions,
  };

  const queryStringifiedOptions = queryString.stringify(realOptions, {
    arrayFormat: 'comma',
  });

  return fetch(`${CONFIGS.BASE_URL}?${queryStringifiedOptions}`).then(
    (response) => response.json()
  );
}

export default getUsers;
