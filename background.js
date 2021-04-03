// chrome.tabs.onActivated.addListener(tab=>{
// 	chrome.tabs.get(tab.tabId, current_tab_info=>{
// 		if(/^https:\/\/www\.oaksandpines/.test(current_tab_info.url)){
// 			// chrome.tabs.insertCSS(null, { file: './style.css' });
// 			chrome.tabs.executeScript(null,{file:'./foreground.js'},()=>console.log('I injected'))
// 		}
// 	})
// });

let color = '#3aa757';
let CheckerState="off";

chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({ color });
  console.log('Default background color set to %cgreen', `color: ${color}`);

  chrome.storage.sync.set({ CheckerState });
  console.log('Background Colour Checker State is set to ' + CheckerState);
});