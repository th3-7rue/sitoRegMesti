let nome = document.getElementById("nome")
let cognome = document.getElementById("cognome")
let sesso = document.getElementById("sesso")
let dataNascita = document.getElementById("dataNascita")
let email = document.getElementById("email")
let password = document.getElementById("password")
let btnRegistrati = document.getElementById("btnRegistrati")
let btnConferma = document.getElementById("btnConferma")
let myAlert = document.getElementById("my-modal")
let myForm = document.getElementsByTagName("form")

btnRegistrati.onclick = function () {
    if (myForm.checkValidity()) {
        myAlert.removeAttribute("disabled")
    }
}