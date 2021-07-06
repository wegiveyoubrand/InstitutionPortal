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

fetch(myRequest).then((res) => {
  return res.json().then((data) => {
    console.log(data);
    if (data.length > 0) {
      var temp = "";

      //   start for loop

      data.forEach((u) => {
        temp += ` 
            <div class="university">
                <div class="university__image">
                    <img src="${u.logo}" alt="" />
                </div>
                <div class="university__name">${u.name}</div>
            </div>
        `;
      });

      //   close for loop

      document.querySelector("#FederalUniversities").innerHTML = temp;
    }
  });
});
