console.log("loaded")


console.log("loaded3")

//chrome.runtime.onMessage.addListener(function (re, sender, sendResponse) {
//    if (request.action === "setContent") {

//        console.log("recieved message 45");
//        console.log(request)
//    }
//});


//const response = await chrome.runtime.sendMessage({ action: "getContent" });
chrome.runtime.sendMessage({ action: "getContent" }).then(response => {
    console.log("loaded5")
    //console.log(response); // This code runs after the promise resolves

    const div_content = document.querySelector('#contentPlaceHolder');
    if (div_content) {
        console.log("loaded6")
        console.log(response)
        document.head.innerHTML = response['page_content_head']
        document.body.innerHTML = response['page_content']
    }

    // You can chain more .then() blocks here if needed
})
//console.log("loaded4")
//if (response) {
console.log("loaded7")

//}


console.log("loaded0")
