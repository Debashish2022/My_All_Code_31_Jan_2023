import axios from "axios";

// export const API = "http://localhost:8000/api/";
export const API = "https://game-pts.onrender.com/api/v1/";

export const apicaller = (uri, data = null, method, Token) => {
  // console.log(`Api Caller Data  of ${uri}`, data);
  return new Promise((resolve, reject) => {
    var config = {
      method: method,
      url: `https://game-pts.onrender.com/api/v1/${uri}`,
      headers: {
        Authorization: "Bearer "+ Token,
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        console.log(`api caller response of ${uri} `, response?.data);
        resolve(response);
      })
      .catch(function (error) {
        console.log(`api caller Error of ${uri} `, error);
        reject(error);
      });
  });
};
