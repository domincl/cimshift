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


function predefinedChanged() {
  console.log("This is a popup1=226!")
}



function predifinedSearch2() {
  const x = `
<div id="id">
    <label for="moreinfoPredifnedSearch" class="hide">Predefined Searches</label>
    <select id="moreinfoPredifnedSearch" tabindex="0" ">
        <option value="">Predefined Searches...</option>
        <option value="ST-M*-BS">ST-M*-BS</option>
        <option value="ST-C*-BS">ST-C*-BS</option>
        <option value="ST-C*-BA">ST-C*-BA</option>
    </select>
</div>  
`
  return x
}




const predefined_searches = {
  "Predefined Searches...": "",
  "ST CIS BA/BS": "ST-CSCI-BS, ST-CSCI-BA, ST-CYBR-BS, ST-IST-BS, ST-IST-BA, ST-DTSC-BS",
  "ST-M*-BS": "ST-M*-BS",
  "ST CIS ALL": "ST-CSCI-*, ST-CYBR-*, ST-IST-*, ST-IST-*, ST-DTSC-*",
}

function predifinedSearch() {
  const x = `
    <select id="moreinfoPredifnedSearch" tabindex="0" ">
        <option value="">Predefined Searches...</option>
        <option value="ST-M*-BS">ST-M*-BS</option>
        <option value="ST-C*-BS">ST-C*-BS</option>
        <option value="ST-C*-BA">ST-C*-BA</option>
    </select>`
  return x
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
  console.log("This is a popup1=14!")
  const topaction = document.querySelector('#topactions');
  console.log("This is a popup1=15!")
  if (topaction) {
    console.log("This is a popup1=16!")

    const predefined_select = document.createElement('select');
    predefined_select.id = "moreinfoPredifnedSearch"
    console.log("This is a popup1=17!")
    for (var key in predefined_searches) {
      console.log("This is a popup1=19!")
      const option = document.createElement('option');
      option.value = key;
      option.innerText = key;
      predefined_select.insertAdjacentElement('beforeend', option);
    }

    //predefined_div.innerHTML = predifinedSearch();
    const div = document.createElement('div');
    div.insertAdjacentElement('beforeend', predefined_select);
    topaction.insertAdjacentElement('beforeend', div);

    const myElement = document.querySelector('#moreinfoPredifnedSearch');
    console.log("This is a popup1=16!")
    if (myElement) {
      myElement.addEventListener('change', (event) => {
        //Write the definition of your function
        //It will be executed when change event will be fired
        console.log("This is a popup1=1161!")

        const search_field = document.querySelector('#search_field');
        const search_button = document.querySelector('#search_button');

        if (search_field && search_form) {

          console.log(event.target.value)
          const search_text = predefined_searches[event.target.value];
          search_field.value = search_text;
          search_button.click()
        }


      });


    }


  }

});
