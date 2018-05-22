export default (url, customHeaders = {}) => {
  const defaultHeaders = {
    Method: 'GET',
    Accept: 'application/json',
    'Content-type': 'application/json'
  }
  // const headers = Object.assign({}, defaultHeaders, customHeaders)
  const headers = {
    ...defaultHeaders,
    ...customHeaders
  }
  return fetch(url, headers)
  .then(res => {
    if (res.status >= 400) {
      throw response.status
      //Promise.reject(null, res.status);
    }
    return res.json()
  })
  .catch((err, statusCode) => {
    //handling error
  })
}