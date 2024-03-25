//Selecting popup box, popup overlay, button

var popupoverlay = document.querySelector(".popup-overlay")
var popupbox = document.querySelector(".popup-box")
var addpopupbutton = document.getElementById("add-popup-button")

addpopupbutton.addEventListener("click",function(){
    popupoverlay.style.display="block"
    popupbox.style.display = "block"

})

//Select cancel button

var cancelbutton = document.getElementById("cancel-popup")
var addbutton = document.getElementById("add-book")

cancelbutton.addEventListener("click", function(event){
    event.preventDefault()
    popupoverlay.style.display="none"
    popupbox.style.display = "none"
})

addbutton = addEventListener("click",function(event){
         event.preventDefault()
})

//select container ,add-book,book-title-input,book-author-input,book-description-input

var container = document.querySelector(".container")
var bookcontainer = document.querySelector(".book-container")
var addbook = document.getElementById("add-book")
var bookauthorinput = document.getElementById("book-author-input")
var booktitleinput = document.getElementById("book-title-input") 
var bookdescriptioninput = document.getElementById("book-description-input")




addbook.addEventListener("click",function(event){
    event.preventDefault()
    var div = document.createElement("div")
    
    div.setAttribute("class","book-container")
    div.innerHTML = `<h2>${booktitleinput.value}</h2> 
    <h5>${bookauthorinput.value}</h5> 
     <p>${bookdescriptioninput.value}</p>   
    <button onClick="deleteBook(event)">Delete</button> `
    container.append(div)
    popupbox.style.display = "none"
    popupoverlay.style.display="none"
   
})


function deleteBook(event)
{
    event.target.parentElement.remove()
}
  





