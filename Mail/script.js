// Mail
// Chiedi all’utente la sua email,
// controlla che sia nella lista di chi può accedere,
// stampa un messaggio appropriato sull’esito del controllo.

const listEmail = ["email1@gmail.com", "email2@gmail.com", "email3@gmail.com", "email4@gmail.com"];
// console.log(listEmail);

const myInput = document.querySelector("input");
const myButton = document.querySelector("button");
const myOutput = document.querySelector(".output");

// Chiedi all’utente la sua email

myButton.addEventListener("click", 
    function(){
        let resultEmail = false;
        for (let i = 0; i < listEmail.length; i++){
            if (myInput.value === listEmail[i]) {
                resultEmail = true;
             } 
        }
        if (resultEmail) {
            myOutput.innerHTML = "Complimenti sei in lista!";
        } else {
            myOutput.innerHTML = "Mi dispiace non sei in lista";
        }
    }
);