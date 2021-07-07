var myInit = {
  method: "Get",
  headers: {
    "Content-Type": "application/json",
  },
  mode: "cors",
  cache: "default",
};

let FederalData = new Request("/institutes/data/universities/Federal.json");
let StateData = new Request("/institutes/data/universities/State.json");
let PrivateData = new Request("/institutes/data/universities/Private.json");

const FederalUniversitiesData = fetch(FederalData).then((res) => {
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

const StateUniversitiesData = fetch(StateData).then((res) => {
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

      document.querySelector("#StateUniversities").innerHTML = temp;
    }
  });
});

const PrivateUniversitiesData = fetch(PrivateData).then((res) => {
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

      document.querySelector("#PrivateUniversities").innerHTML = temp;
    }
  });
});
