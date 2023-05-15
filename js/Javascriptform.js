//lisätään napin kuuntelijafunktio
document.querySelector("#note").addEventListener("click", addNote);

let body = document.querySelector(".lomake");
let checkbox = document.getElementById("important");

//luodaan funktio addNote
function addNote() {
    let h3 = document.createElement("h3");
    let p = document.createElement("p");
    let h5 = document.createElement("h5");
    p.textContent = viesti.value;
    h5.textContent = nimi.value;
    if (checkbox.checked) {

        h3.classList.add("important");
        p.classList.add("important");
        h5.classList.add("important");

    }

    //kaikki elementit bodyn sisään
    body.append(h3, h5, p, document.createElement("hr"));
} 
