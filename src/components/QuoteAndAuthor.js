import React from 'react'
import tinycolor from "tinycolor2"
import {quotes,colors }from '../QuoteDB'

export default function QuoteAndAuthor(props) {

    const { quote, generateRandomQuote } = props;
   var b= document.body.style;
   b.backgroundColor= tinycolor(quote.bgColor).darken(20).toString();
    return (
        <div className="card" >
            <div class="card-header">
                Random Quote Machine
                </div>
            <div className="card-body" >
                <p className="card-text" style={{color: quote.textColor}}>{quote.quote}</p>
                <h5 className="card-title">- {quote.author}</h5>
                <button className="btn btn-primary"
                    onClick={() => { generateRandomQuote(quotes,colors) }}
                    type="submit">
                    <i class="fas fa-mouse"></i> Generate Quote</button>
                <button 
                    className="ml-3 btn btn-info"
                    onClick={() => {
                        generateRandomQuote(quotes,colors);
                        window.open('https://twitter.com/intent/tweet/?text=' + encodeURIComponent(quote.quote + '--' + quote.author))
                    }}
                    type="submit"><i class="fab fa-twitter"></i> Share Quote</button>
            </div>
        </div>
        );
    }