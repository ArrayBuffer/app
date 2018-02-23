export default class RepositoryData {
  getRepository(url) {
    return new Promise( (resolve, reject) => {
      fetch(url)
        .then( res => res.json())
        .then( res => {
          resolve(res)
        })
        .catch( err => {
          reject(err)
        })
    })
  }
}