async function postData(selectedMethod, selectedAdjective, selectedAnimal) {
    let response = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: "POST",
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
        body: JSON.stringify({
          adjective: selectedAdjective,
          animal: selectedAnimal
        })
    });
    let text = await response.text();

    document.getElementById("output1").innerHTML = "<strong>Title</strong>: " + JSON.parse(text).adjective + " " + JSON.parse(text).animal;
    document.getElementById("output2").innerHTML = "";
    document.getElementById("output3").innerHTML = "";
    document.getElementById("output4").innerHTML = "";
}

async function getData() {
    let response = await fetch('https://jsonplaceholder.typicode.com/posts');
    let text = await response.text();
    let index = Math.floor(Math.random()*100);

    document.getElementById("output1").innerHTML = "<strong>Title</strong>: " + JSON.parse(text)[index].title;
    document.getElementById("output2").innerHTML = "<strong>Body</strong>: " + JSON.parse(text)[index].body;
}

async function processData() {
    let selectedMethod = "";
    let selectedAdjective = "";
    let selectedAnimal = "";

    document.querySelectorAll("input[name='method']").forEach(method => {
        if(method.checked) selectedMethod = method.value
    });

    document.querySelectorAll("input[name='adjective']").forEach(adjective => {
        if(adjective.checked) selectedAdjective = adjective.value
    });

    document.querySelectorAll("input[name='animal']").forEach(animal => {
        if(animal.checked) selectedAnimal = animal.value
    });

    if(selectedMethod == "POST") await postData(selectedMethod, selectedAdjective, selectedAnimal);
    else await getData();
}