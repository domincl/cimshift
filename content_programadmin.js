console.log("moreinfo" + window.location.href)

const response = await fetch(chrome.runtime.getURL("predefined_searches.json"))

const json = await response.json();

console.log("This is a popup1=34!")
console.log(json)

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





const predefined_searches_v = {
  "Predefined Searches...": "",
  "ST CIS BS": "ST-CSCI-BS, ST-CYBR-BS, ST-IST-BS, ST-DTSC-BS",
  "ST CIS BA": "ST-CSCI-BA, ST-IST-BA, ST-DTSC-BA",
  "ST CIS MINOR": "ST-CSCI-MINOR, ST-IST-MINOR, ST-DSCA-MINOR",
  "ST CIS CERTIF": "ST-CSDF-CERTIF, ST-FPRG-CERTIF, ST-MAPD-CERTIF",
  "ST CIS all UG ": "ST-CSCI-B*, ST-CSCI-MINOR, ST-CYBR-B*, ST-IST-B*, ST-IST-MINOR, ST-DTSC-BS, ST-DSCA-*, ST-CSDF-CERTIF, ST-FPRG-CERTIF, ST-MAPD-CERTIF",
}

function  searches_json(){}
   fetch(chrome.runtime.getURL("predefined_searches.json"))
       .then(response => response.json())
       .then(data => console.log(data))
       .catch(error => console.error('Error:', error));
    
}

async function getData(url) {

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const json = await response.json();
    console.log(json);
  } catch (error) {
    console.error(error.message);
  }
  return 
}


function create_predefined_select(predefined_searches) {
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
  return predefined_select;
}


waitForElm('#content').then((elm) => {
  // console.log('*** Element is ready');
  // console.log(elm.textContent);


  console.log("This is a popup1=14!")
  const topaction = document.querySelector('#topactions');
  console.log("This is a popup1=15!")
  if (topaction) {
    console.log("This is a popup1=16!")





    // Add Predefined Search dropdown select element
    const t = chrome.runtime.getURL("predefined_searches.json")
    console.log(t)

    // fetch(chrome.runtime.getURL("predefined_searches.json"))
    //   .then(response => response.text())
    //   .then(text => console.log(text))

    console.log("This is a popup1=33!")
    // const w = fetch(chrome.runtime.getURL("predefined_searches.json"))
    const data = 'cccc'
    console.log(data)
    // fetch(chrome.runtime.getURL("predefined_searches.json"))
    //   .then(response => response.json())
    //   .then(data => console.log(data))
    //   .catch(error => console.error('Error:', error));



    const predefined_select = create_predefined_select(predefined_searches_v)
    const div = document.createElement('div');
    div.insertAdjacentElement('beforeend', predefined_select);
    topaction.insertAdjacentElement('beforeend', div);

    // Add listener when Predefined Search are selected
    const myElement = document.querySelector('#moreinfoPredifnedSearch');
    if (myElement) {
      myElement.addEventListener('change', (event) => {
        const search_field = document.querySelector('#search_field');
        const search_button = document.querySelector('#search_button');

        if (search_field && search_form) {
          const search_text = predefined_searches_v[event.target.value];
          search_field.value = search_text;
          search_button.click()
        }
      });
    }


  }

});
