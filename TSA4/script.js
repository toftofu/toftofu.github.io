let users = [];

function saveUser() {
    let idNumber = document.getElementById("idNumber").value;
    let firstName = document.getElementById("firstName").value;
    let middleName = document.getElementById("middleName").value;
    let lastName = document.getElementById("lastName").value;
    let gender = document.getElementById("gender").value;
    let bday = document.getElementById("bday").value;

let user = {
    idNumber,
    firstName,
    middleName,
    lastName,
    gender,
    bday
};

users.push(user);

updateTable();

document.getElementById("form").reset();
}

function updateTable() {
    let tableBody = document.querySelector("#dataTable tbody");
    tableBody.innerHTML = "";

users.forEach((user) => {
    let row = `
        <tr>
            <td>${user.idNumber}</td>
            <td>${user.firstName}</td>
            <td>${user.middleName}</td>
            <td>${user.lastName}</td>
            <td>${user.gender}</td>
            <td>${user.bday}</td>
        </tr>
    `;
    tableBody.innerHTML += row;
    });
}

document.getElementById("saveButton").addEventListener("click", saveUser);

let makeWhite = document.querySelector(".makeWhite");

makeWhite.addEventListener('mouseover', () => {
    makeWhite.style.color = "#49d149ff";
    makeWhite.style.fontSize = "38px";
});

makeWhite.addEventListener('mouseout', () => {
    makeWhite.style.color = "#ffffff";
    makeWhite.style.fontSize = "30px";
});