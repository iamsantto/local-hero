const getCurrentTabInfo = callBack => {
  chrome.tabs.query({ 'active': true, 'lastFocusedWindow': true }, tabs => callBack(tabs))
}

export {
  getCurrentTabInfo
}
