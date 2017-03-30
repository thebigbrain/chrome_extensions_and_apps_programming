let doctype = document.doctype;
doctype = {
    name: doctype.name,
    publicId: doctype.publicId,
    systemId: doctype.systemId
};

let msg = {
    url: location.href,
    doctype,
    dummyObject: {level:1},
    pg: Array
        .prototype
        .map
        .call(document.all, function (e) {
            if (e.tagName == "P") return e.textContent
        })
        .filter(function (p) { 
            return !!p
        })
        .join('\n')
}

if(msg) {
    chrome.runtime.sendMessage(msg, function (response) {
        console.log(response)
    });
}