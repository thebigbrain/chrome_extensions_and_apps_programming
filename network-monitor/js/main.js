chrome.runtime.onMessage.addListener(echo);

Parse.initialize("chrome-plugin-network-monitor");
Parse.serverURL = 'http://localhost/parse';

class PageTextContent extends Parse.Object {
    constructor() {
        super('PageTextContent');
    }
}

function echo(message, sender, sendResponse) {
    checkIfNotExists(message).then(success => {
        if (success) {
            var pg = new PageTextContent();
            pg
                .save(message)
                .then(obj => {
                    sendResponse(obj);
                }, err => {
                    sendResponse(err);
                });
        }
    })
}

function checkIfNotExists(message) {
    var query = new Parse.Query(PageTextContent);
    return query
        .equalTo('url', message.url)
        .equalTo('pg', message.pg)
        .count()
        .then(results => {
            return results < 1;
        })
}
