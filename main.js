// submit form
document.getElementById("btn").addEventListener("click",()=>{
    alert("Submitted succesfully!!")
})

// clear the form
document.getElementById("clearBtn").addEventListener("click", function () {
  document.querySelector(".contact-form").reset(); 
});
