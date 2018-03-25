const getCurrentTabInfo = callBack => {
	chrome.tabs.query({ 'active': true, 'lastFocusedWindow': true }, tabs => callBack(tabs))
}

const getCurrentLocalStorage = (tabId, callBack) => {
	let codeString = `
		var l_stg = window.localStorage;
		var ta_bdata = {};
		Object.keys(l_stg).forEach(function(key){
				ta_bdata[key] = l_stg[key];
		});
		chrome.storage.local.set({${tabId}: ta_bdata});`

	chrome.tabs.executeScript(tabId, {
		code: codeString.replace(/\r?\n|\r|\t/g, ''),
		runAt: 'document_end'
	}, () => {
		chrome.storage.local.get(null, storage => callBack(storage))
	})
}

export {
	getCurrentLocalStorage,
	getCurrentTabInfo
}
