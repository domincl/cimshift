// background.js
console.log("Background active")

var page_content = 'asdf';
var page_content_head = 'asdf';

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === "openNewTab") {
        //chrome.tabs.create({ url: request.url });
        console.log(request);
        const x = chrome.tabs.create({ url: 'page.html' });
        page_content = request.content
        console.log("Background active2")
        page_content_head = request.content_head;
        console.log(request)
    }
    if (request.action === "getContent") {
        sendResponse({ 'page_content': page_content, 'page_content_head': page_content_head })
    }
    //Handle other message types here...
    return true; // Keep the message channel open for asynchronous response
});