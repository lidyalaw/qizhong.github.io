// Array of motivational quotes
const quotes = [
    {
        text: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
        author: "Winston Churchill"
    },
    {
        text: "The only way to do great work is to love what you do.",
        author: "Steve Jobs"
    },
    {
        text: "Believe you can and you're halfway there.",
        author: "Theodore Roosevelt"
    }
];

// Function to display a random quote
function displayRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomIndex];
    const quoteContainer = document.getElementById("currentQuote");
    quoteContainer.innerHTML = `
        <blockquote>${randomQuote.text}</blockquote>
        <p>- ${randomQuote.author}</p>
    `;
}

// Event listener for the "Get Random Quote" button
document.getElementById("randomQuoteBtn").addEventListener("click", displayRandomQuote);

// Event listener for the quote submission form
document.getElementById("quoteForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const quoteText = document.getElementById("quoteText").value;
    const quoteAuthor = document.getElementById("quoteAuthor").value;
    if (quoteText && quoteAuthor) {
        quotes.push({ text: quoteText, author: quoteAuthor });
        displayRandomQuote();
        // Reset form fields
        document.getElementById("quoteText").value = "";
        document.getElementById("quoteAuthor").value = "";
    } else {
        alert("Please fill in both fields.");
    }
});
