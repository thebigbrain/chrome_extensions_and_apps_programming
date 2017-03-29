chrome.runtime.sendMessage('Hello', function (response) {
    console.log(response)
});

var CommentBox = React.createClass({
    displayName: 'CommentBox',
    render: function () {
        return (
            React.createElement('div', { className: "commentBox" },
                "Hello, world! I am a CommentBox."
            )
        );
    }
});
ReactDOM.render(
    React.createElement(CommentBox, null),
    document.getElementById('app-container')
);

console.log(React)