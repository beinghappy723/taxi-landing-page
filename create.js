//here we go
let contact = document.querySelector(".contact")
let booknow = document.querySelector(".main button")
contact.addEventListener("click", function (dets) {
    console.log(dets)
    
    dets.preventDefault()
    let contact = +918115945464
    let url = `https://api.whatsapp.com/send?phone=${+918115945464}`
    window.open(url, "_blank");
})
