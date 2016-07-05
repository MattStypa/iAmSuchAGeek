var tweets = document.querySelectorAll('.tweet[data-user-id="14280918"] > .content > .js-tweet-text-container > .tweet-text');

Object.keys(tweets).forEach(function(key) {
    tweets[key].innerHTML = 'I am such a geek!';
});
