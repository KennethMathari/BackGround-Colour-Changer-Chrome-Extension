// Initialize checkbox with user's preferred color
let CheckColor = document.getElementById("CheckColor");



//Event Listener for CheckBox
CheckColor.addEventListener("change", async()=>{

	if(CheckColor.checked == true) {
        let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: setPageBackgroundColor,
  });
    } else {
        let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: UnsetPageBackgroundColor,
  });
    }

});


chrome.storage.sync.get("color", ({ color }) => {
  CheckColor.style.backgroundColor = color;
});


// The body of this function will be executed as a content script inside the current page
function setPageBackgroundColor() {
  chrome.storage.sync.get("color", ({ color }) => {
    document.body.style.backgroundColor = color;
  });
}

function UnsetPageBackgroundColor() {
  chrome.storage.sync.get("color", ({ color }) => {
    document.body.style.backgroundColor = 'initial';
  });
}


