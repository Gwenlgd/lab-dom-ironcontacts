// HTML ELEMENTS

const buttonAddRandom = document.querySelector("#btn-add-random");
const tableBody = document.querySelector("tbody#contacts");
const colorLike = document.querySelector(".btn-like")

// ITERATION 0 | Example Row
// Splice 1 element from the contacts array at the random index
// const randomIndex = Math.floor(Math.random() * contacts.length);
// const splicedArr = contacts.splice(randomIndex, 1);

// Get the element from the spliced array
// const randomContact = splicedArr[0];

// const exampleRow = document.createElement("tr");
// exampleRow.innerHTML = `
//   <td>
//     <img src="${randomContact.pictureUrl}" />
//   </td>
//   <td> ${randomContact.name} </td>
//   <td> ${randomContact.popularity.toFixed(2)} </td>
//   <td>
//     <button class="btn-delete">Delete</button>
//   </td>
//   <td>
//     <button class="btn-like">
//       <img src="./images/icon.png" alt="like" />
//     </button>
//   </td>
// `;

// tableBody.appendChild(exampleRow);


// ITERATION 1 - Display 3 contacts
// Get the first 3 contacts from the 'contacts' array.
const threeContacts = contacts.splice(0, 6);

// Your code goes here ...
function getContact() {
  const randomIndex = Math.floor(Math.random() * contacts.length);
  const splicedArr = contacts.splice(randomIndex, 1);
  const randomContact = splicedArr[0];

  const createNewRow = document.createElement("tr");
  createNewRow.innerHTML = `
  <td>
    <img src="${randomContact.pictureUrl}" />
  </td>
  <td> ${randomContact.name} </td>
  <td> ${randomContact.popularity.toFixed(2)} </td>
  <td>
    <button class="btn-delete">Delete</button>
  </td>
  <td>
    <button class="btn-like">
      <img src="./images/icon.png" alt="like" class="icon-like"/>
    </button>
  </td>
`;

  tableBody.appendChild(createNewRow);
}

threeContacts.forEach((contact) => {
  getContact(contact);
})

// ITERATION 2 - Delete Buttons

// Your code goes here ...

tableBody.addEventListener("click", (event) => {
  if (event.target.classList.contains("btn-delete")) {
    const row = event.target.closest("tr");
    row.remove();
  }
});


// ITERATION 3 - Like Buttons

// Your code goes here ...
tableBody.addEventListener("click", (event) => {
  const target = event.target;

  if (target.classList.contains("btn-like") ||
    target.closest(".btn-like") ||
    target.classList.contains("icon-like") ||
    target.closest(".icon-like")) {
    const likeButton = target.closest(".btn-like") || target.closest(".icon-like");
    likeButton.classList.toggle("selected");
  }
});




// Bonus: ITERATION 4 - Add Random Contacts

// Your code goes here ...
