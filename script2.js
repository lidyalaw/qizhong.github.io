/* eslint-disable max-len */
// eslint-disable-next-line no-unused-vars
const projectName = 'random-quote-machine';
let quotesData;
let i=0;

var currentQuote  = '',
    currentAuthor = '',
    currentColor  = '';

function getQuotes() {
  return $.ajax({
    headers: {
      Accept: 'application/json'
    },
    url: 'https://gist.githubusercontent.com/lidyalaw/6ff2e5fcbacaafebfced5c30445eb43b/raw/777d69e59055254dc60c161ccd05738343f94c8a/quotes.json',
    success: function (jsonQuotes) {
      if (typeof jsonQuotes === 'string') {
        quotesData = JSON.parse(jsonQuotes);
        console.log('quotesData');
        console.log(quotesData);
      }
    }
  });
}

function getRandomQuote() {
  i=i+1;
  if(i===quotesData.quotes.length){
      i=0;
  }
  return quotesData.quotes[i];
}

function getQuote() {
  let randomQuote = getRandomQuote();
    
  currentQuote = randomQuote.quote;
  currentAuthor = randomQuote.author;
  currentColor = randomQuote.color;

  $('.quote-text').animate({ opacity: 0 }, 500, function () {
    $(this).animate({ opacity: 1 }, 500);
    $('#text').text(randomQuote.quote);
  });

  $('.quote-author').animate({ opacity: 0 }, 500, function () {
    $(this).animate({ opacity: 1 }, 500);
    $('#author').html(randomQuote.author);
  });

  $('html body').animate(
    {
      backgroundColor: currentColor,
      color: currentColor
    },
    1000
  );
  $('.button').animate(
    {
      backgroundColor: currentColor
    },
    1000
  );
}

$(document).ready(function () {
  getQuotes().then(() => {
    getQuote();
  });

  $('#new-quote').on('click', getQuote);
});
