const codes = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a"
];

// Keep track of index outside of the event handler.
let i = 0;

function init() {
  // your code here
  document.body.addEventListener('keydown', function(e){
   
    if (e.key === codes[i]){ 
      i++
      if (i == codes.length){
        alert('Hooray!')
      }
    }

  })
}


init()


// var keyStroke = document.body.addEventListener('keydown', (event) => {

//   if (event.key == codes[i]){
//   i++;

//   if (i == codes.length){
//     alert('Hooray!')
//   }
// } else {
// i = 0;
// }
// });


 