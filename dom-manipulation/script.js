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


const newQuoteText = document.getElementById("newQuoteText")
const newQuoteCategory = document.getElementById ("newQuoteCategory")
const addQuote = document.getElementById("addQuote")
const quoteDisplay = document.getElementById ("quoteDisplay")
const newQuotes = document.getElementById ("newQuote")


// add new quotes
function addNewQuotes (){
    const newQuote = newQuoteText.value.trim()
    const newCategory = newQuoteCategory.value.trim()

if (newQuote !== "" && newCategory !==""){
   const newQuoteObj = {text: newQuote, category:newCategory}

   // Add quote to the array and update local storage

    quotes.push(newQuoteObj)
    saveQuotesToLocalStorage ()
    
     // Clear input fields
    newQuoteText.value = "";
    newQuoteCategory.value = "";

    alert("Quote added successfully")

    // display new quotes
    showRandomQuote()

}
else {
    alert("please fill in the right content")
}

}

// add event listiner
addQuote.addEventListener("click", showRandomQuote)

addQuote.addEventListener("click", addNewQuotes)
 newQuotes.addEventListener ("click", showRandomQuote)


//  JSON Data Import and Export

function importFromJsonFile(event) {
    const fileReader = new FileReader();
    fileReader.onload = function(event) {
      const importedQuotes = JSON.parse(event.target.result);
      quotes.push(...importedQuotes);
      saveQuotes();
      alert('Quotes imported successfully!');
    };
    fileReader.readAsText(event.target.files[0]);
  }






















// // Creat add quote form
// function createAddQuoteForm (){

//     const formContainer = document.createElement ("div");

//     // quote input
//     const quoteInput = document.createElement ("input")
//     quoteInput.setAttribute ("id", "newQuoteText")
//     quoteInput.setAttribute ("name", "newQuoteText")
//     quoteInput.setAttribute ("placeholder", "enter a new quote")

//     // quote category
//     const quoteCategory = document.createElement ("input")
//     quoteCategory.setAttribute ("id", "newQuoteCategory")
//     quoteCategory.setAttribute ("name", "newQuoteCategory")
//     quoteCategory.setAttribute ("placeholder", "enter quote categoty")

//       // Add Quote Button
//       const newQuoteButton = document.createElement ("button")
//       newQuoteButton.textContent = "Add Quote"
//       newQuoteButton.addEventListener = ("click", addQuote)

//        // Append Elements to Form Container
//        formContainer.appendChild(quoteInput)
//        formContainer.appendChild(quoteCategory)
//        formContainer.appendChild(newQuoteButton)
       
//         // Add Form to Body (or another container)
//  const formbody =document.createElement("body")
//  formbody.appendChild(formContainer)
// }


// // Event Listeners
// addQuote.addEventListener("click", addNewQuotes)
// addQuote.addEventListener("click", showRandomQuote)


// Implementing Web Storage and JSON Handling

})
