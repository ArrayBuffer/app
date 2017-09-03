export default class Request {

  /**
   * get request
   * @param url
   * @returns {Promise}
   */
  static get (url) {
    return new Promise((resolve, reject) => {
      fetch(url)
        .then(res => res.json())
        .then(res => {
          resolve(res)
        })
        .catch(err => {
          reject(err)
        })
    })
  }

  /**
   * POST request
   * @param url
   * @param data
   * @returns {Promise}
   */
  static post(url, data) {
    return new Promise((resolve, reject) => {
      fetch(url, {
        method: 'POST',
        header: {
          'Accept': 'application/json',
          'Content-type': 'application/json'
        },
        body: JSON.stringify(data)
      })
        .then(res => res.json())
        .then(res => {
          resolve(res)
        })
        .catch(err => {
          reject(err)
        })
    })
  }
}