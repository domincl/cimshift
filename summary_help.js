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




const origText = 'This form is used to establish, revise and terminate programs.\nTo establish a new program, click on the green “Propose New Program” button.\nTo terminate a program, search for the program, click on the program in the grid below, and then click on the red “Terminate Program” button.\nTo revise an existing program, search for it, click on the program in the grid below, and then click the green "Edit Program" button.\nTo search for a program, enter a search term and click the green “Search” button. Use an asterisk (*) in the search box as a wild card. The placement of the wild card will yield different results. For example:\nCHEM* will find everything that starts with “CHEM”.\n*CHEM will find everything that ends with “CHEM”.\n*CHEM* will find everything that contains “CHEM.”\nThe search term is not case-sensitive. The system searches the Program Code, Title, Workflow step and CIM Status.\nQuick Searches offer a predefined list of search categories.'


function help_img_elem() {
  const div = document.createElement('div');
  div.innerHTML = '<img align="texttop" src="/courseleaf/cim/images/help.png" alt="">'
  return div.firstChild
}


function replace_instructiontext(id) {
  waitForElm(id).then((instructiontext) => {

    // Only insert details-summary if  text if it is exactly as expected
    const pageText = instructiontext.innerText
    if (pageText === origText) {

      const details = document.createElement('details');
      const summary = document.createElement('summary');
      summary.appendChild(instructiontext.firstChild)
      summary.appendChild(help_img_elem())
      details.appendChild(summary)
      while (instructiontext.childNodes.length > 0) {
        details.appendChild(instructiontext.childNodes[0]);
      }
      instructiontext.appendChild(details)

      console.log(lines)
    }
    console.log(instructiontext)

  });

}

replace_instructiontext("#instructiontext")
