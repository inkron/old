$('#messageEnterPlace').keypress(e => {
    const code = e.keyCode || e.which;
    if (code === 13) {
        e.preventDefault();
        $("#sendMessage").click(); /*add this, if you want to submit form by pressing `Enter`*/
        $('#messageEnterPlace').val("");
    }
});


function sendMessage() {
    //Currently here for testing
    addMessage('herohamp', $('#messageEnterPlace').val(), new Date().getTime());
}

function parseDate(time) {
    const t = new Date(time).toString().split(" ");

    //Date formate is Month Day (number) Year, Time H:M
    return `${t[1]} ${t[2]} ${t[3]}, ${t[4].slice(0,-3)}`;
}

function addMessage(user, message, date) {
    //add message to the table
    $('#messageBoard tr:last').after(`<tr><td scope=row>@${user}<td>${message}<td>${parseDate(date)}`);
}
