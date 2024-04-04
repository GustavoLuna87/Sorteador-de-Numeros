const button = document.querySelector(".buttonResult");
const input = document.querySelector(".input-result");

button.addEventListener('click', function() {
    
    const min = Math.ceil(document.querySelector(".input-min").value)
    const max = Math.floor(document.querySelector(".input-max").value)
  
    const result = Math.floor(Math.random() * (max - min + 1)) + min;

  input.value = result
})
