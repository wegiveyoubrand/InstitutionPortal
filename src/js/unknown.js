const searchBar = document.querySelector("#search");
const freshers = [];
console.log(searchBar);

// Search UNN-Admission-List-2020 and Filter it...

const FreshersList = async (searchText) => {
  const res = await fetch(
    "../data/admissionLists/2020/UNN-Admission-list-2020.json"
  );

  const Freshers = await res.json();

  // Get matches to current test input
  
  let matches = Freshers.filter((Fresher) => {
    const regex = new RegExp(`^${searchText}`, "gi");
    return Fresher.JAMBRegNumber.match(regex) || Fresher.Surname.match(regex);
  });

  if (searchText.length === 0) {
    matches = [];
    confirmationStatus.innerHTML = "Invalid input";
  } else if (searchText.length) {
    const outputHtml = (matches) => {
      if (matches.length > 0) {
        const html = matches
          .map((match) => {
            if (search.value === match.JAMBRegNumber) {
              return `<div class='result'><h4>${search.value}</h4>  </div>
              <div>Admitted ❣❣</div>`;
            } else {
              return `<div class='result'><h4>${search.value}</h4>  </div>
              <div>nOT Admitted ❣❣</div>`;
            }
          })
          .join("");

        confirmationStatus.innerHTML = html;
      }
    };
  }

  outputHtml(matches);
};

let userInput = searchText.target.value;
console.log(userInput);

// Show results in HTML ...

searchBar.addEventListener("keyup", () => {
  const searchText = e.target.value;
  Freshers.filter((character) => {
    character.n;
  });
});



const confirmationStatus = document.querySelector(".confirmationStatus");
const modalResponse = document.querySelector(".modalResponse");
const activateModal = document.querySelector("#activateModal");
const closeModal = document.querySelector(".close-modal");

activateModal.addEventListener("click", (e) => {
  e.preventDefault;
  modalResponse.classList.add("open");
});
closeModal.addEventListener("click", (e) => {
  e.preventDefault;
  modalResponse.classList.remove("open");
  document.forms[0].reset();
});