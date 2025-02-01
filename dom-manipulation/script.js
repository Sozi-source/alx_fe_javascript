document.addEventListener("DOMContentLoaded", function(){


const quotes = [
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


const randomIndex = Math.floor(Math.random()* quotes.length)
console.log(quotes[randomIndex])



const newQuoteText = document.getElementById("newQuoteText")
const newQuoteCategory = document.getElementById ("newQuoteCategory")
const addQuote = document.getElementById("addQuote")





})

