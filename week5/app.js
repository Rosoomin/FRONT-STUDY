const root = document.getElementById("root");


fetch('https://jsonplaceholder.typicode.com/users1/1/todos')

 .then((response) => response.json())

 .then((json) => render(json));


function render(data) {

 data.forEach((item) => {

 const h2 = document.createElement("h2");

 h2.textContent = item.title;

 if (item.completed) { h2.classList.add("line"); }


 root.appendChild(h2);

 });

}
