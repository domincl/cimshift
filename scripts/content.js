

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


waitForElm('#bodycontentframe1').then((elm) => {
  console.log('*** Element bodycontentframe1 is ready');
  console.log(elm.textContent);

  const badge = document.createElement('p');
  // Use the same styling as the publish information in an article's header
  badge.textContent = `⏱️⏱️⏱️ `;


  var a = document.createElement('a');
  var linkText = document.createTextNode("open in a new tab");
  a.appendChild(linkText);
  a.title = "open in new page";
  a.href = elm.src;
  document.body.appendChild(a);

  var elm2 = elm.previousElementSibling.previousElementSibling

  elm.insertAdjacentElement('beforebegin', badge);
  elm2.insertAdjacentElement('beforeend', a);
});


function createTable(data, tableId) {
  const table = document.createElement('table');
  table.id = tableId;
  table.classList.add('datatable');

  const thead = table.createTHead();
  const headerRow = thead.insertRow();

  for (const key in data[0]) {
    const th = document.createElement('th');
    th.textContent = key;
    headerRow.appendChild(th);
  }

  const tbody = table.createTBody();

  data.forEach(item => {
    const row = tbody.insertRow();
    for (const key in item) {
      const cell = row.insertCell();
      cell.textContent = item[key];
    }
  });

  return table;
}


function summaryOfChanges() {

  var num_changeblock = document.getElementsByClassName('diffchangeblock').length;
  var num_added = document.getElementsByClassName('diffadded').length;
  var num_deleted = document.getElementsByClassName('diffdeleted').length;
  var num_contenterror = document.getElementsByClassName('structuredcontenterror').length;
  console.log(num_changeblock)

  const summary_hmtl =
    `<table id="my-table" class="datatable">
    <thead>
        <tr>
            <th class="diffchangeblock">changeblock</th>
            <th class="diffadded">added</th>
            <th class="diffdeleted">deleted</th>
            <th class="structuredcontenterror">error</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td >${num_changeblock}</td>
            <td >${num_added}</td>
            <td >${num_deleted}</td>
            <td >${num_contenterror}</td>
        </tr>
    </tbody>
</table>
`;

  return summary_hmtl;
}


waitForElm('#content').then((elm) => {
  // console.log('*** Element is ready');
  // console.log(elm.textContent);

  console.log("This is a popup11!")
  const h3_title = document.querySelector('h3');
  console.log("This is a popup12!")
  if (h3_title) {
    console.log("This is a popup13!")
    if (h3_title.innerText === "Summary of Requirements for the Degree") {
      console.log("This is a popup1=14!")

      const summary_div = document.createElement('div');
      summary_div.className = "grid7";
      summary_div.innerHTML = summaryOfChanges();

      const content_div = document.querySelector('#content');
      content_div.insertAdjacentElement('afterbegin', summary_div);

    }
  }


  const caption = document.querySelector('caption');
  if (caption) {
    if (caption.innerText === "Plan of Study Grid") {
      const summary_div = document.createElement('div');
      summary_div.className = "grid7";
      summary_div.innerHTML = summaryOfChanges();

      const content_div = document.querySelector('#content');
      content_div.insertAdjacentElement('afterbegin', summary_div);
    }
  }




  const courseref = document.querySelector('body');
  if (courseref) {


    console.log("This is a popup4!")
    const text = courseref.textContent;
    // console.log(text)

    var num_changeblock = document.getElementsByClassName('diffchangeblock').length;
    var num_added = document.getElementsByClassName('diffadded').length;
    var num_deleted = document.getElementsByClassName('diffdeleted').length;
    var num_contenterror = document.getElementsByClassName('structuredcontenterror').length;
    console.log(num_changeblock)

    const badge = document.createElement('p');
    badge.className = "cim2";
    // Use the same styling as the publish information in an article's header
    badge.textContent = `⏱️ XX num_changeblock ${num_changeblock} num_added ${num_added} num_deleted ${num_deleted} num_contenterror ${num_contenterror}`;



    const tableData = [
      { name: 'John Doe', age: 30, city: 'New York' },
      { name: 'Jane Smith', age: 25, city: 'Los Angeles' },
      { name: 'Peter Jones', age: 40, city: 'Chicago' }
    ];

    const myTable = createTable(tableData, 'my-table');

    courseref.insertAdjacentElement('afterbegin', badge);







    // iframe_ref = document.getElementById('bodycontentframe1');
    // if( iframe_ref) {
    //  console.log("iframe_ref.src")
    // console.log(iframe_ref.src)
    // }
  }
});
