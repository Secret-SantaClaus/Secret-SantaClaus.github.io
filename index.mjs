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

    let nouvPart = document.createElement("pre");
    nouvPart.innerHTML = nom.at(-1) + "   " + email.at(-1);
    document.getElementById("col1").appendChild(nouvPart);
    
    nouvPart.addEventListener("click", function () {
      alert("Supprimer !");
      nom.splice(nouvPart.value.split(" ")[0], 1)
      mail.splice(nouvPart.value.split(" ")[1], 1)
    });
  }
});

env = document.getElementById("btnenv");
env.addEventListener("click", function () {
  alert("envoyer")
        
  let urln = "?nom=%5B"
  for (let i in nom){
    urln += nom[i] + "%2C"
  }
  urln += "0%5D"

  let urle = "email=%5B"
  for (let i in email){
    urle += email[i] + "%2C"
  }
  urle += "0%5D"

  let url = urln + "&" + urle

  alert(url)
  const xhr = new XMLHttpRequest();
  xhr.open("POST", "https://serveur-8nsb.onrender.com/"+url);
  xhr.send();
})
