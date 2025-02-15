console.log("moreinfo" + window.location.href)

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

function summaryOfChanges() {

  var num_changeblock = document.getElementsByClassName('diffchangeblock').length;
  var num_added = document.getElementsByClassName('diffadded').length;
  var num_deleted = document.getElementsByClassName('diffdeleted').length;
  var num_contenterror = document.getElementsByClassName('structuredcontenterror').length;
  console.log(num_changeblock)

  const summary_hmtl =
    `<table id="my-table" class="moreinfotable">
    <caption>added by <a href="https://github.com/domincl/cimshift">moreinfo</a></caption>
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
      summary_div.className = "moreinfogrid";
      summary_div.innerHTML = summaryOfChanges();

      const content_div = document.querySelector('#content');
      content_div.insertAdjacentElement('afterbegin', summary_div);

    }
  }


  const caption = document.querySelector('caption');
  if (caption) {
    if (caption.innerText === "Plan of Study Grid") {
      const summary_div = document.createElement('div');
      summary_div.className = "moreinfogrid";
      summary_div.innerHTML = summaryOfChanges();

      const content_div = document.querySelector('#content');
      content_div.insertAdjacentElement('afterbegin', summary_div);
    }
  }


});
