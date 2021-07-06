"use strict";

var myInit = {
  method: "Get",
  headers: {
    "Content-Type": "application/json",
  },
  mode: "cors",
  cache: "default",
};

let myRequest = new Request("/institutes/data/universities/Federal.json");

fetch(myRequest)
  .then(function (res) {
    return res.json();
  })
  .then(function (data) {
    console.log(data);
  });
