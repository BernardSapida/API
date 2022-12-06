let firstInput = "";
let secondInput = "";
let methodType = "";

async function postData() {
    let stringObject = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: "POST",
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
        body: JSON.stringify({
          firstInput: firstInput,
          secondInput: secondInput
        })
    })
        .then(response => response.text());
    let obj = JSON.parse(stringObject);

    document.getElementById("result_1").innerHTML = "<strong>Title</strong>: " + obj.firstInput + " " + obj.secondInput;
    document.getElementById("result_2").innerHTML = "";
}

async function getData() {
    let stringObject = await fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.text());
    let index = Math.floor(Math.random()*100);
    let obj = JSON.parse(stringObject);

    document.getElementById("result_1").innerHTML = "<strong>Title</strong>: " + obj[index].title;
    document.getElementById("result_2").innerHTML = "<strong>Body</strong>: " + obj[index].body;
}

async function performOperation() {
    if(methodType == "POST") {
        postData();
    } else {
        getData();
    }
}

function updateMethod(inputMethod) {
    methodType = inputMethod;
}

function updateFirstInput(inputFirst) {
    firstInput = inputFirst;
}

function updateSecondInput(inputSecond) {
    secondInput = inputSecond;
}