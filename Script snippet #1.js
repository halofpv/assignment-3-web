const name = prompt("What is your name?");
const standardized_name = name.slice(0,1).toUpperCase() + name.slice(1).toLowerCase();
alert(`Hello ${standardized_name}`);