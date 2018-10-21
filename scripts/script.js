/*
Author: Ahmad Hassan
Email:  ahmad.pgu1@hotmail.com
Fiverr: https://www.fiverr.com/ahmadhassanawan
*/

(function () {
    chrome.runtime.sendMessage({ method: 'status' }, function (response) {
        console.log(response);
        let allTabs = (response.localStorage["allTabs"] == "true");
        let selectedTabs = (response.localStorage["selectedTabs"] == "true");
        console.log("All Tabs", allTabs);
        console.log("Selected Tabs", selectedTabs);

        if (allTabs) {
            let body = document.getElementsByTagName("body")[0];
            body.click();
            window.onbeforeunload = function (e) {
                var e = e || window.event;
                if (e.target && e.target.activeElement && e.target.activeElement.tagName == "A") {
                    return;
                }
                if (e) {
                    e.returnValue = 'You turned me on.';
                } return 'You turned me on.';
            };

        }
    });

})();