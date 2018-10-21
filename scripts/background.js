/*
Author: Ahmad Hassan
Email:  ahmad.pgu1@hotmail.com
Fiverr: https://www.fiverr.com/ahmadhassanawan
*/


chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        console.log(sender.tab ?
            'from a content script:' + sender.tab.url :
           'from the extension');
        if (request.method == 'status')
            sendResponse({localStorage});
    });