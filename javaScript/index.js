document.write("texto qualquer");
console.log("Hello Word!");

setTimeout(function() {
    console.log("passou 1 segundo")
}, 1000);

setTimeout(function() {
    console.log("passou 2 segundo")
    // document.write("texto qualquer");
}, 2000);