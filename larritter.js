// ==UserScript==
//
// @name Larritter
// @description Removes and changes elements to make Twitter look like the last version before a certain someone bought it.
// @author ariaoblige
//
// @version 0.1.0
// @license MIT
//
// @match https*://www.twitter.com
// @match https*://twitter.com
// @run-at document-start
// ==/UserScript==

var updated = [ false, false ];

function exists(element) {
  if (element!=null && typeof(element)!='undefined') {
    return true;
  }
  else {
    return false;
  }
}

function update_logo() {
  var oldtitle = document.title;
  document.title = oldtitle.replace("/ X", "/ Twitter");
  
  // LARRY THE BIRD
  if (!updated[0]) {
    var el = document.querySelector("#react-root > div > div > div.css-1dbjc4n.r-18u37iz.r-13qz1uu.r-417010 > header > div > div > div > div:nth-child(1) > div.css-1dbjc4n.r-dnmrzs.r-1vvnge1 > h1 > a > div > svg > g > path");
    if (exists(el)) {
      el.setAttribute("d", "M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z")
      updated[0]=true;
    }
  }
  
  // TWITTER INC.
  var twitter_inc = document.querySelector("#react-root > div > div > div.css-1dbjc4n.r-18u37iz.r-13qz1uu.r-417010 > main > div > div > div > div.css-1dbjc4n.r-aqfbo4.r-zso239.r-1hycxz > div > div.css-1dbjc4n.r-gtdqiz.r-1hycxz > div > div > div > div.css-1dbjc4n.r-1niwhzg.r-1kqtdi0.r-1867qdf.r-1phboty.r-1yadl64.r-1ifxtd0.r-1udh08x > nav > div.css-901oao.r-1qd0xha.r-n6v787.r-16dba41.r-1cwl3u0.r-hrzydr.r-bcqeeo.r-j2kj52.r-qvutc0 > span");
  if (exists(twitter_inc)) {
    var target = twitter_inc.innerHTML;
    twitter_inc.innerHTML = target.replace("X Corp.", "Twitter Inc.");
  }

  // REMOVE VERIFIED TAB
  var verified = document.querySelector("#react-root > div > div > div.css-1dbjc4n.r-18u37iz.r-13qz1uu.r-417010 > header > div > div > div > div.css-1dbjc4n.r-1habvwh > div.css-1dbjc4n.r-15zivkp.r-1bymd8e.r-13qz1uu > nav > a:nth-child(6) > div");
  if (exists(verified)) {
    verified.remove();
  }

  // REMOVE TT. BLUE AD
  var twt_blue = document.querySelector("#react-root > div > div > div.css-1dbjc4n.r-18u37iz.r-13qz1uu.r-417010 > main > div > div > div > div.css-1dbjc4n.r-aqfbo4.r-zso239.r-1hycxz > div > div.css-1dbjc4n.r-gtdqiz.r-1hycxz > div > div > div > div:nth-child(3) > aside");
  if (exists(twt_blue)) {
      twt_blue.remove();
  }

  // PINNED
  var pinned = document.querySelector("#react-root > div > div > div.css-1dbjc4n.r-18u37iz.r-13qz1uu.r-417010 > main > div > div > div > div > div > div:nth-child(3) > div > div > section > div > div > div > div > div:nth-child(1) > div > div > article > div > div > div:nth-child(1) > div > div > div > div > div.css-1dbjc4n.r-1iusvr4.r-16y2uox > div > div > div > span");
  console.log(pinned);

  if (exists(pinned)) {
    pinned.innerHTML = "Pinned tweet";
  }
  
  // SEE NEW TWEETS
  var seenewtweets = document.querySelector("#react-root > div > div > div.css-1dbjc4n.r-18u37iz.r-13qz1uu.r-417010 > main > div > div > div > div > div > div.css-1dbjc4n.r-aqfbo4.r-gtdqiz.r-1gn8etr.r-1g40b8q > div.css-1dbjc4n.r-633pao.r-u8s1d.r-dkhcqf.r-axxi2z.r-18jm5s1.r-13qz1uu.r-1wyyakw > div > div > div > div > div.css-901oao.css-1hf3ou5.r-1kihuf0.r-jwli3a.r-1qd0xha.r-a023e6.r-16dba41.r-rjixqe.r-13hce6t.r-bcqeeo.r-qvutc0 > span > span > span");
  if (exists(seenewtweets)) {
    seenewtweets.innerHTML = "See new Tweets";
  }

  // RESTART
  setTimeout(function() {
    update_logo();
  }, 10);
}

update_logo();

