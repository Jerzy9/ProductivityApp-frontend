var request = new XMLHttpRequest();
request.open('GET', 'localhost:8080/api/v1/task');
request.onload = function() {
    console.log(request.responseText);
};
request.send();