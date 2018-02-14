const getCurrentTabInfo = callBack => {
  chrome.tabs.query({ 'active': true, 'lastFocusedWindow': true }, tabs => callBack(tabs))
}

const getCurrentLocalStorage = (tabId, callBack) => {
  chrome.tabs.executeScript(tabId, {
    code: 'var lstg = window.localStorage;Object.keys(lstg).forEach(function(key){chrome.storage.local.set({[key]: lstg[key]});})',
    runAt: 'document_end'
  }, () => {
    // chrome.storage.local.get(null, storage => alert(JSON.stringify(storage)))
  })
}

export {
  getCurrentLocalStorage,
  getCurrentTabInfo
}
