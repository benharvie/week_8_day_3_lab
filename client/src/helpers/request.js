const Request = function (url) {
  this.url = url;
}

Request.prototype.get = function () {
  return fetch(this.url)
    .then((response) => response.json());
};

module.exports = Request;


// Example use:
// const request = new Request(url);
// request.get()
//   .then((data) => { // if successfull
//     console.log(data.message)
//   })
//   .catch((err) => { // on error
//     console.error(err)
//   });
