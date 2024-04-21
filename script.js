const hamburger = document.querySelector(".nav-hamburger");
const navList = document.querySelector(".nav-list");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navList.classList.toggle("active");
}
)

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () =>
{
    hamburger.classList.remove("active");
    navList.classList.remove("active");
}
)
)

// Define an array of quotes
const quotes = [
  "The only way to do great work is to love what you do. - Steve Jobs",
  "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
  "It does not matter how slowly you go as long as you do not stop. - Confucius",
  "Hardships often prepare ordinary people for an extraordinary destiny. - C.S. Lewis",
  "Believe you can and you're halfway there. - Theodore Roosevelt"
];

// Function to generate a random quote
function generateQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const quoteElement = document.getElementById("quote");
  quoteElement.textContent = quotes[randomIndex];
}
