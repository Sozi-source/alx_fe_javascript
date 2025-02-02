document.addEventListener("DOMContentLoaded", function(){


// Quotes Array
// Load quotes from localStorage or use default quotes

const storeQuotes = JSON.parse(localStorage.getItem("quotes"))
const quotes =  storeQuotes || [
    { text: "The only way to do great work is to love what you do.", category: "Motivation" },
    { text: "Success is not final, failure is not fatal: it is the courage to continue that counts.", category: "Success" },
    { text: "Happiness depends upon ourselves.", category: "Happiness" },
    { text: "Believe you can and you're halfway there.", category: "Inspiration" },
    { text: "Do what you can, with what you have, where you are.", category: "Perseverance" },
    { text: "The best way to predict the future is to create it.", category: "Future" },
    { text: "Act as if what you do makes a difference. It does.", category: "Impact" },
    { text: "Keep your face always toward the sunshine—and shadows will fall behind you.", category: "Positivity" },
    { text: "The purpose of our lives is to be happy.", category: "Life" },
    { text: "Don't watch the clock; do what it does. Keep going.", category: "Hard Work" }
];
// Function to Show a Random Quote
function showRandomQuote(){
const displayRandomQuotes = document.getElementById("quoteDisplay")

const randomIndex = Math.floor(Math.random()* quotes.length)
const randomQuotes = quotes[randomIndex];


    // Update the quote display

    displayRandomQuotes.innerHTML = `"${randomQuotes.text}" - ${randomQuotes.category} `
}

// Function to Save Quotes to Local Storage
function saveQuotesToLocalStorage (){
    localStorage.setItem("quotes", JSON.stringify(quotes))
}

 // Show a random quote when the page loads
 showRandomQuote();

 // Add new quote functionality
 const newQuoteText = document.getElementById("newQuoteText");
 const newQuoteCategory = document.getElementById("newQuoteCategory");
 const addQuoteButton = document.getElementById("addQuote");
 const newQuoteBtn = document.getElementById("newQuote")


 function addNewQuote() {
     const newQuote = newQuoteText.value.trim();
     const newCategory = newQuoteCategory.value.trim();

     if (newQuote !== "" && newCategory !== "") {
         const newQuoteObj = { text: newQuote, category: newCategory };

         // Add the new quote to the quotes array and update local storage
         quotes.push(newQuoteObj);
         saveQuotesToLocalStorage();
    
     // Clear input fields
    newQuoteText.value = "";
    newQuoteCategory.value = "";

    alert("Quote added successfully")

    showRandomQuote()
}
else {
    alert("Please fill in both fields")
}

}
// Add event listiner for adding a new quote
addQuoteButton.addEventListener("click", addNewQuote)

 // Add event listener for showing a new random quote

newQuoteBtn.addEventListener("click", showRandomQuote)


//  JSON Data Import and Export

function importFromJsonFile(event) {
    const fileReader = new FileReader();
    fileReader.onload = function(event) {
      const importedQuotes = JSON.parse(event.target.result);
      quotes.push(...importedQuotes);
      saveQuotesToLocalStorage();
      alert('Quotes imported successfully!');
    };
    fileReader.readAsText(event.target.files[0]);
  }

  
  function exportToJsonFile() {
    const quotes = JSON.parse(localStorage.getItem("quotes")) || []; // Get stored quotes

    if (quotes.length === 0) {
        alert("No quotes to export!");
        return;
    }

    const jsonString = JSON.stringify(quotes, null, 2); // Pretty format JSON
    const blob = new Blob([jsonString], { type: "application/json" }); // Creates a JSON Blob
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = "quotes.json"; // Set the file name
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}

// Import and export event listiner
const exportButton = document.getElementById ("exportBtn")
exportButton.addEventListener("click", exportToJsonFile)


// quote filtering system
function populateCategories (){

}

// Simulate Server Interaction

const apiUrl = "https://jsonplaceholder.typicode.com/posts"

// Function to fetch quotes from the server
// Function to fetch quotes from the server
async function fetchQuotesFromServer() {
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        console.log("Fetched Quotes:", data.results.slice(0, 5)); // API returns an array under `results`
        localStorage.setItem("quotes", JSON.stringify(data.results)); // Save in local storage
        return data.results;
    } catch (error) {
        console.error("Error fetching quotes:", error);
    }
}

// Post new quote to server
async function postQuote(quote, category) {
    try {
        const response = await fetch(apiUrl, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ text: quote, category: category })
        });
        const data = await response.json();
        console.log("Quote posted successfully:", data);
        return data;
    } catch (error) {
        console.error("Error posting quote:", error);
    }
}

// Periodic data syncing
let syncInterval;

function startQuoteSync(interval = 10000) { // Default: 10 seconds
    if (syncInterval) clearInterval(syncInterval); // Prevent multiple intervals
    fetchQuotesFromServer(); // Fetch immediately
    syncInterval = setInterval(fetchQuotesFromServer, interval); // Fetch every interval
}

// Handle conflict resolution during sync
async function syncQuotes() {
    const localQuotes = JSON.parse(localStorage.getItem("quotes")) || [];
    
    try {
        const serverQuotes = await fetchQuotesFromServer();
        if (!serverQuotes) return; // Prevent sync if fetch failed

        // Merge quotes: Keep local quotes not found on server
        const mergedQuotes = [
            ...localQuotes.filter(lq => !serverQuotes.some(sq => sq.text === lq.text)), 
            ...serverQuotes
        ];

        console.log("Merged Quotes:", mergedQuotes);
        localStorage.setItem("quotes", JSON.stringify(mergedQuotes));
        
        console.log("Quotes synced with server!")
        
    } catch (error) {
        console.error("Error syncing quotes:", error);
    }
    
}



// Creat add quote form
function createAddQuoteForm (){

    const formContainer = document.createElement ("div");

    // quote input
    const quoteInput = document.createElement ("input")
    quoteInput.setAttribute ("id", "newQuoteText")
    quoteInput.setAttribute ("name", "newQuoteText")
    quoteInput.setAttribute ("placeholder", "enter a new quote")

    // quote category
    const quoteCategory = document.createElement ("input")
    quoteCategory.setAttribute ("id", "newQuoteCategory")
    quoteCategory.setAttribute ("name", "newQuoteCategory")
    quoteCategory.setAttribute ("placeholder", "enter quote categoty")

      // Add Quote Button
      const newQuoteButton = document.createElement ("button")
      newQuoteButton.textContent = "Add Quote"
      newQuoteButton.addEventListener = ("click", addQuote)

       // Append Elements to Form Container
       formContainer.appendChild(quoteInput)
       formContainer.appendChild(quoteCategory)
       formContainer.appendChild(newQuoteButton)
       
        // Add Form to Body (or another container)
 const formbody =document.createElement("body")
 formbody.appendChild(formContainer)
}






})


