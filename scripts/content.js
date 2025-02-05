

function waitForElm(selector) {
  return new Promise(resolve => {
      if (document.querySelector(selector)) {
          return resolve(document.querySelector(selector));
      }

      const observer = new MutationObserver(mutations => {
          if (document.querySelector(selector)) {
              observer.disconnect();
              resolve(document.querySelector(selector));
          }
      });

      // If you get "parameter 1 is not of type 'Node'" error, see https://stackoverflow.com/a/77855838/492336
      observer.observe(document.documentElement, {
          childList: true,
          subtree: true
      });
  });
}



const article = document.querySelector('article');
// `document.querySelector` may return null if the selector doesn't match anything.
if (article) {
    console.log("This is a popup1!")
  const text = article.textContent;
  /**
   * Regular expression to find all "words" in a string.
   *
   * Here, a "word" is a sequence of one or more non-whitespace characters in a row. We don't use the
   * regular expression character class "\w" to match against "word characters" because it only
   * matches against the Latin alphabet. Instead, we match against any sequence of characters that
   * *are not* a whitespace characters. See the below link for more information.
   *
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions
   */
  const wordMatchRegExp = /[^\s]+/g;
  const words = text.matchAll(wordMatchRegExp);
  // matchAll returns an iterator, convert to array to get word count
  const wordCount = [...words].length;
  const readingTime = Math.round(wordCount / 200);
  const badge = document.createElement('p');
  // Use the same styling as the publish information in an article's header
  badge.classList.add('color-secondary-text', 'type--caption');
  badge.textContent = `⏱️ ${readingTime} min 4 read`;

  // Support for API reference docs
  const heading = article.querySelector('h1');
  // Support for article docs with date
  const date = article.querySelector('time')?.parentNode;

  // https://developer.mozilla.org/en-US/docs/Web/API/Element/insertAdjacentElement
  // (date ?? heading).insertAdjacentElement('afterend', badge);
  heading.insertAdjacentElement('afterend', badge);
}


console.log("This is a popup-00")
const currentUrl = window.location.href;
console.log(currentUrl);

// diffchangeblock




console.log('The extension works');



waitForElm('#content').then((elm) => {
  // console.log('*** Element is ready');
  // console.log(elm.textContent);

  const courseref = document.querySelector('body');
  if (courseref) {
    console.log("This is a popup4!")
    const text = courseref.textContent;
    // console.log(text)
  
    var num_changeblock  = document.getElementsByClassName('diffchangeblock').length;
    var num_added  = document.getElementsByClassName('diffadded').length;
    var num_deleted  = document.getElementsByClassName('diffdeleted').length;
    var num_contenterror  = document.getElementsByClassName('structuredcontenterror').length;
    console.log(num_changeblock)

    const badge = document.createElement('p');
    // Use the same styling as the publish information in an article's header
    badge.textContent = `⏱️ num_changeblock ${num_changeblock} num_added ${num_added} num_deleted ${num_deleted} num_contenterror ${num_contenterror}`;
    courseref.insertAdjacentElement('afterbegin', badge);



    // iframe_ref = document.getElementById('bodycontentframe1');
    // if( iframe_ref) {
    //  console.log("iframe_ref.src")
      // console.log(iframe_ref.src)
    // }
  }

 });