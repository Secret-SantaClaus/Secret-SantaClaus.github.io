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
    });
  }
});

env = document.getElementById("btnenv");
env.addEventListener("click", function () {
  alert("envoyer")
        
  let urln = "nom=["
  for (let i in nom){
    urln += nom[i] + ","
  }
  urln += "]"

  let urle = "email=["
  for (let i in email){
    urle += email[i] + ","
  }
  urle += "]"

  let url = urln + "&" + urle

  alert(url)
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "https://serveur-8nsb.onrender.com/?"+url);
  xhr.send();
})
