let counter = 0;

chrome.webRequest.onBeforeSendHeaders.addListener(
    function (details) {
        loadDetails(details);
    },
    {
        urls: [
            "<all_urls>"
        ]
    },
    [
        "blocking",
        "requestHeaders"
    ]
);

function conver2str(counter) {
    var text;
    if (counter + 1 > 1000 * 1000) {
        text = parseInt(counter / 100000) / 10 + 'M';
    } else if (counter + 1 > 1000) {
        text = parseInt(counter / 100) / 10 + 'M';
    } else {
        text = counter;
    }
    return text;
}

function loadDetails(details) {
    if (counter++ > 1) {
        var text = conver2str(counter);
        chrome.browserAction.setBadgeText({ text: text.toString() });
    }
}