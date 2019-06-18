var funnyQuote = ["Before you judge a man, walk a mile in his shoes. After that who cares?... He’s a mile away and you’ve got his shoes!", "Light travels faster than sound. This is why some people appear bright until you hear them speak", "Nobody realizes that some people expend tremendous energy merely to be normal.", "All the things I really like to do are either immoral, illegal or fattening.", "It would be nice to spend billions on schools and roads, but right now that money is desperately needed for political ads."];

var btn = $('.Funny-btn');
btn.on ("Click", funnyQuoteGenerater);

function funnyQuoteGenerater() {
  var random = Math.random() * (funnyQuote.length-1);
  var rounded = Math.floor(random) ;
  var quote = funnyQuote[rounded];
  console.log(quote);
}
funnyQuoteGenerater();
