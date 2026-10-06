"use strict";
/*
 * Laboration 5 - Studentkortsgenerator
 * Namn: Eva Bergström
 */

// Hämta element från DOM
const form = document.querySelector("#studentform");
const clearButton = document.querySelector("#clear");

const fullnameInput = document.querySelector("#fullname");
const emailInput = document.querySelector("#email");
const phoneInput = document.querySelector("#phone");
const fontSelect = document.querySelector("#font");

const previewFullname = document.querySelector("#previewfullname");
const previewEmail = document.querySelector("#previewemail");
const previewPhone = document.querySelector("#previewphone");

const errorList = document.querySelector("#errorlist");
const historySection = document.querySelector("#history");
const deleteHistoryButton = document.querySelector("#delete");

// Array som används för felmeddelanden
let errors = [];

// Array som innehåller sparade studentkort
let history = [];


/**
 * Validerar formulärets inmatning.
 * @returns {boolean}
 */
function validateForm() {
  //Tömmer arrayen på fel när de är korrigerade
  errors = [];

  // Kontrollera formulärets obligatoriska fält
  //lägger till de tre felen till arrayen med push samt anger felmeddelande
  if (fullnameInput.value === "") {
    errors.push("Namn måste anges!");
  }
  if (emailInput.value === "") {
    errors.push("E-post måste anges!");
  }
  if (phoneInput.value === "") {
    errors.push("Telefonnummer måste anges!");
  }
  // Visa eventuella felmeddelanden
  displayErrors();

  // Returnera resultatet (true eller false) av valideringen
  if (errors.length === 0) {
    return true;
  } else {
    return false;
  }
}

/**
 * Visar felmeddelanden på sidan.
 */
function displayErrors() {
  // Rensa tidigare felmeddelanden
  errorList.innerHTML = "";

  // Skriv ut aktuella felmeddelanden till DOM
  errors.forEach(function (error) {
    const errorItem = document.createElement("li");
    errorItem.textContent = error;
    errorList.appendChild(errorItem);
  });
}

/**
 * Skapar ett studentkort och visar det på sidan.
 */
function createStudentCard() {
  // Hämta information från formuläret
  const fullname = fullnameInput.value;
  const email = emailInput.value;
  const phone = phoneInput.value;
  const font = fontSelect.value;
  


  // Uppdatera studentkortet
  previewFullname.textContent = fullname;
  previewEmail.textContent = email;
  previewPhone.textContent = phone;

  //Val av font-family
  const card = document.querySelector(".card");
  card.style.fontFamily = font

  // Lägg till studentkortet i historiken
const student = {
    fullname: fullname,
    email: email,
    phone: phone,
    font:font
  };
  // Spara och uppdatera historiken
  history.push(student)
  saveHistory();
  console.log(history);
}
/**
 * Sparar historiken i localStorage. */
//Omvandlar JavaScript till JSON
function saveHistory() {
  
  localStorage.setItem("studentHistory", JSON.stringify(history));
}

/**
 * Läser in tidigare historik från localStorage.
 */
function loadHistory() {
  // Hämta eventuell sparad historik
const savedHistory= localStorage.getItem("studentHistory");
  // Uppdatera history
  history=JSON.parse(savedHistory);
  console.log(history);
}

/**
 * Visar historiken på sidan.
 */
function renderHistory() {
  // Rensa tidigare visad historik
  // Skriv ut innehållet i history till DOM
}

/**
 * Rensar formulär, aktuellt studentkort och felmeddelanden.
 */
function clearForm() {
  // Återställ formulär och studentkort
  // Rensa eventuella felmeddelanden
}

/**
 * Raderar hela historiken.
 */
function deleteHistory() {
  // Radera sparad historik
  // Uppdatera history och visningen på sidan
}

// Eventlyssnare

// När formuläret skickas:

//Stoppar webbläsarens naturliga beteende (default)
form.addEventListener("submit", function (event) {
  event.preventDefault();

  // - validera inmatningen
  if (validateForm()) {
    // - skapa studentkort om valideringen lyckas
    createStudentCard();
  }
});

// När användaren klickar på "Rensa"

// När användaren klickar på "Radera historik"

// När sidan laddas:
loadHistory();
// - läs in och visa eventuell tidigare historik
