let nom = [];
let email = [];

let btnajt = document.getElementById("btnajt");

btnajt.addEventListener("click", function () {
  let ajoutNom = document.getElementById("nm").value;
  let ajoutEmail = document.getElementById("em").value;

  if ((ajoutNom != "") & (ajoutEmail != "")) {
    alert("Bravo !");
    nom.push(ajoutNom);
    document.getElementById("nm").value = "";
    email.push(ajoutEmail);
    document.getElementById("em").value = "";

    ///document.getElementById("participants").innerHTML +=
    ///nom.at(-1) + "   " + email.at(-1) + "\n";

    let nouvPart = document.createElement("pre");
    nouvPart.innerHTML = nom.at(-1) + "   " + email.at(-1);
    document.getElementById("col1").appendChild(nouvPart);
    nouvPart.addEventListener("click", function () {
      alert("Supprimer !");
      nom.push(document.getElementById("nm").value);
      document.getElementById("nm").value = "";
      email.push(document.getElementById("em").value);
      document.getElementById("em").value = "";
    });
  }
});

let pre = document.querySelector("pre");

pre.addEventListener("click", function () {
  alert("Bravo !");
  nom.push(document.getElementById("nm").value);
  document.getElementById("nm").value = "";
  email.push(document.getElementById("em").value);
  document.getElementById("em").value = "";
});

env = document.getElementById("btnenv");
env.addEventListener("click", function () {
  alert("envoyer")
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "https://serveur-8nsb.onrender.com");
  xhr.send();
})
