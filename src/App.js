import React, {Component} from 'react'
import QuoteAndAuthor from './components/QuoteAndAuthor';
import {quotes,colors }from './QuoteDB';

export default class App extends Component {
 // state
 state={
   quote:quotes[0].quote,
   bgColor: colors[0],
   textColor: colors[0],
   author: quotes[0].author
 }
 //generate diffrent quote function
 generateRandomQuote = (quotes,colors) =>{
   let col=Math.floor(Math.random()*colors.length)
   let num = Math.floor(Math.random()*quotes.length)
   let newQuote=quotes[num]
   this.setState({
     quote: newQuote.quote,
     bgColor: colors[col],
     textColor: colors[col],
     author: newQuote.author
   })
   this.shuffleQuotes(quotes)
   this.shuffleColors(colors)
 }
   //shuufle quotes function
   shuffleQuotes = (arr) => {
    return arr.sort(function () { return 0.5 - Math.random() });
  }
  shuffleColors = (arr) => {
    return arr.sort(function () { return 0.5 - Math.random() });
  }
  render() {
    return (
      <div className="container">
        <div class="row py-5">
        <div class='col-sm-5 col-sm-offset-2 col-md-8 offset-md-2'>
        <QuoteAndAuthor
          generateRandomQuote={this.generateRandomQuote}
          quote={this.state}
        />
        </div>
        </div>
      </div>
    )
  }
}
