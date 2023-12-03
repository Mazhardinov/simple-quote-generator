var data; 

// Getting the author 
const author = document.querySelector(".quote_author"); 
  
// Getting the text
const text = document.querySelector(".quote_text"); 
  
// Getting the button
const button = document.querySelector(".new-btn"); 

  
const displayQuote = () =>{ 
  
    // Generates a random number between 0  
    // and the length of the dataset 
    let index = Math.floor(Math.random()*data.length); 
  
    // Stores the quote present at the randomly generated index 
    let quote = data[index].text; 
  
    // Stores the author of the respective quote 
    let quoteAuthor = data[index].author; 
  
    // Making the author anonymous if no author is present 
    let authors = quoteAuthor.split(",");
    if(authors[0] === "type.fit"){ 
        authors[0] = "Anonymous"
    } 
    text.innerHTML = quote;
    author.innerHTML = "- "+authors[0];
}


// Fetching the quotes from the type.fit API using promises 
fetch("https://type.fit/api/quotes") 
    .then(function(response) { 
        return response.json();  
    }) // Getting the raw JSON data 
    .then(function(data) { 
  
        // Storing the quotes internally upon  
        // successful completion of request 
        this.data = data;  
  
        // Displaying the quote When the Webpage loads 
        displayQuote()  
}); 

