(function () {



    let allTabs = (localStorage["allTabs"] == "true");
    let selectedTabs = (localStorage["selectedTabs"] == "true");

    if (allTabs) {
        document.getElementById("allTabs").checked = true;
    }

    if (selectedTabs) {
        document.getElementById("selectedTabs").checked = true;
    }

    document.addEventListener('DOMContentLoaded', function () {
        let elems = document.querySelectorAll('input[type="checkbox"]');
        elems.forEach(function (obj) {
            obj.onchange = updateChange;
        })
    }, false);

    var updateChange = function (event) {
        let id = event.target.id;
        if (document.getElementById(id).checked) {
            localStorage[id] = true;
        }
        else {
            localStorage[id] = false;
        }
    }

})();