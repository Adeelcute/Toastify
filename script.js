function test(){
  let toasti = prompt('what is your name')
  if(!toasti){
    document.getElementById('song').play() 
    Toastify({
      text: "Please Enter Some Text",
      duration: 1000,
      // destination: "https://github.com/apvarun/toastify-js",
      // newWindow: true,
      close: true,
      gravity: "bottom", // `top` or `bottom`
      position: "center", // `left`, `center` or `right`
      stopOnFocus: true, // Prevents dismissing of toast on hover
      
      style: {
        borderRadius : "30px" ,
        // color : black ,
        background: "linear-gradient(to right, #00b09b, #96c93d);",
      },
      onClick: function(){} // Callback after click
    }).showToast();

}

}