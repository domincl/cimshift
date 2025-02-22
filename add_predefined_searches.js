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

function create_select_elem(id, predef_searches) {
  const select = document.createElement('select');
  select.id = id

  const option = document.createElement('option');
  option.setAttribute("value", "")
  option.textContent = "Predefined Searches..."
  select.append(option)

  for (var predif_id in predef_searches) {
    const option2 = document.createElement('option');
    option2.setAttribute("value", predif_id)
    option2.textContent = predif_id
    select.append(option2)
  }

  return select
}

function insert_predef_search_select(options) {
  waitForElm('#topactions').then((topactions) => {
    const select = create_select_elem("moreinfoPredifnedSearch", options)
    const div_select = document.createElement('div');
    div_select.append(select)
    topactions.insertAdjacentElement('beforeend', div_select);

    select.addEventListener('change', (event) => {
      const search_field = document.querySelector('#search_field');
      const search_button = document.querySelector('#search_button');

      if (search_field && search_button) {
        const search_text = options[event.target.value];
        search_field.value = search_text;
        search_button.click()
      }
    });

  })
}

function load_and_create_predef_serch(predef_json_url) {
  fetch(chrome.runtime.getURL(predef_json_url))
    .then(response => response.json())
    .then(data => insert_predef_search_select(data))
    .catch(error => console.error('Error:', error));

}

load_and_create_predef_serch("predefined_searches.json")
