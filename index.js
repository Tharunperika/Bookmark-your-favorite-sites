let bookmarkFormEl = document.getElementById("bookmarkForm");

let siteNameInputEl = document.getElementById("siteNameInput");
let siteNameErrMsgEL = document.getElementById("siteNameErrMsg");

let siteUrlInputEl = document.getElementById("siteUrlInput");
let siteUrlErrMsgEl = document.getElementById("siteUrlErrMsg");

let bookmarksListEl = document.getElementById("bookmarksList");

let formData = {
    name: "",
    url: ""
};

siteNameInputEl.addEventListener("blur", function(event) {
    if (event.target.value === "") {
        siteNameErrMsgEL.textContent = "Required*";
    } else {
        siteNameErrMsgEL.textContent = "";
    }
});

siteUrlInputEl.addEventListener("blur", function(event) {
    if (event.target.value === "") {
        siteUrlErrMsgEl.textContent = "Required*";
    } else {
        siteUrlErrMsgEl.textContent = "";
    }
});

siteNameInputEl.addEventListener("change", function(event) {
    formData.name = event.target.value;
});

siteUrlInputEl.addEventListener("change", function(event) {
    formData.url = event.target.value;
});

bookmarkFormEl.addEventListener("submit", function(event) {
    event.preventDefault();
    bookmarksListEl.textContent = "";
    let {
        name,
        url
    } = formData;
    if (name === "") {
        siteNameErrMsgEL.textContent = "Required*";
    } else {
        siteNameErrMsgEL.textContent = "";
    }
    if (url === "") {
        siteUrlErrMsgEl.textContent = "Required*";
    } else {
        siteUrlErrMsgEl.textContent = "";
    }
    let listNameEl = document.createElement("li");
    bookmarksListEl.appendChild(listNameEl);

    let siteNameEl = document.createElement("p");
    siteNameEl.textContent = name;
    siteNameEl.classList.add("list-dec");
    listNameEl.appendChild(siteNameEl);


    let anchorEl = document.createElement("a");
    anchorEl.href = url;
    anchorEl.target = "_blank";
    anchorEl.textContent = url;
    listNameEl.appendChild(anchorEl);
    bookmarksListEl.classList.add("unList-dec");
});