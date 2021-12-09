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

const loader = document.querySelector(".loader");

const FederalUniversitiesData = fetch(FederalData).then((res) => {
  return res.json().then((data) => {
    console.log(data);
    if (data.length > 0) {
      var temp = "";

      //   start for loop
      //
      data.forEach((u) => {
        temp += ` 
          <div class="university">
            <div class="university__image">
              <img src="${u.logo}" alt="" />
            </div>
            <div class="university__name">${u.name}</div>
            <div class="university__name"><span>Location:</span> ${u.state}</div>
            <div class="university__name"><span>Ratings:</span><a href=""> 4.1</a></div>
            
            <div class="university__verified"><i class="material-icons">${u.verified}</i> </div>
           <button>Open</button> </div>
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
            <div class="university__name"><span>Location:</span> ${u.state}</div>
            <div class="university__name"><span>Latest news:</span><a href="">latest news loading...</a></div>
            <div class="university__verified"><i class="material-icons">${u.verified}</i> </div>
           <button>Learn more</button> </div>
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

/* TODO: Enable to save caches for offline mode
 */

document.querySelector(".brand").addEventListener("click", () => {
  loader.classList.remove("hidden");
  location.href = "/";
});

document.querySelector(".search-function").addEventListener("click", () => {
  location.href = "/apps/JAMBCBTCenters.html";
});

setInterval(() => {
  document.querySelectorAll(".container-title > div").forEach((div) => {
    div.classList.toggle("active");
  });
}, 5000);

window.addEventListener("load", function () {
  loader.classList.add("hidden");
});

document.querySelectorAll("header a").forEach((pageRequest) => {
  pageRequest.addEventListener("click", () => {
    loader.classList.remove("hidden");
  });
});
