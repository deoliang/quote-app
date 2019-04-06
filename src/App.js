import React, { useState } from 'react';
import './App.css';
const quotes = require('./Quotes.json')

const App =()=> {
    let rand_ind = Math.floor(Math.random()*quotes.length)
    //hook for managing state of quote
    const [quoteAndAuthor,setQuoteAndAuthor] = useState({quote:quotes[rand_ind].quote,author:quotes[rand_ind].author})
    //method for getting new quote
    const newQuotes = ()=>{
      rand_ind = Math.floor(Math.random()*quotes.length)
      setQuoteAndAuthor({quote:quotes[rand_ind].quote,author:quotes[rand_ind].author})
    }
    return (
      <div id="quote-container">
          <span class="quote-text">
            {quoteAndAuthor.quote}
          </span>   
          <span class="quote-author">
            {quoteAndAuthor.author}
          </span>  
          <button  onClick={newQuotes}>Next Quote</button>        
      </div>
    );
  
}
export default App;
