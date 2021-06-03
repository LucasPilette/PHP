const cleanSpan = (
  nom,
  prenom,
  sexe,
  date,
  codePostal,
  adresse,
  email,
  sujet,
  question,
  accord
) => {
  nom.textContent = "";
  prenom.textContent = "";
  sexe.textContent = "";
  date.textContent = "";
  codePostal.textContent = "";
  adresse.textContent = "";
  email.textContent = "";
  sujet.textContent = "";
  question.textContent = "";
  accord.textContent = "";
};
const checkNom = (nom) => {
  var filtre = new RegExp("^[^0-9]+$");
  if (!nom.value) {
    return "Veuillez renseigner un nom";
  } else if (!filtre.test(nom.value)) {
    return "Pas de chiffres dans le nom";
  }
};
const checkPrenom = (prenom) => {
  var filtre = new RegExp("^[^0-9]+$");
  if (!prenom.value) {
    return "Veuillez renseigner un prénom";
  } else if (!filtre.test(prenom.value)) {
    return "Pas de chiffres dans le prénom";
  }
};
const checkSexe = (feminin, masculin, neutre) => {
  if (!(feminin.checked || masculin.checked || neutre.checked)) {
    return "Veuillez sélectionnez un sexe";
  }
};
const checkDate = (date) => {
  if (!date.value) {
    return "Veuillez entrer une date";
  }
  var today = Date.now();
  var entree = new Date(date.value);
  if (today < entree.getTime()) {
    return " Veuillez entrer une date valide";
  }
};
const checkCodePostal = (codePostal) => {
  var filtre = new RegExp("^[^0-9]+$");
  if (!codePostal.value) {
    return "Veuillez entrer votre code postal";
  } else if (filtre.test(codePostal.value)) {
    return "Veuillez entrer un code postal valide";
  }
};
const checkAdresse = (adresse) => {
  if (!adresse.value) {
    return "Veuillez entrer votre adresse";
  }
};
const checkEmail = (email) => {
  var filtre = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if (!email.value) {
    return "Veuillez entrer votre adresse mail";
  } else if (!filtre.test(email.value)) {
    return "Veuillez entrer une adresse mail valide";
  }
};
const checkSujet = (sujet) => {
  if (sujet.value === document.getElementById("choixUn").value) {
    return "Veuillez choisir un sujet";
  }
};
const checkQuestion = (question) => {
  if (document.getElementById("question").value === "") {
    return "Veuillez poser votre question";
  }
};
const checkAccord = (accord) => {
  if (!accord.checked) {
    return "Veuillez accepter le traitement informatique de ce formulaire";
  }
};
document.getElementById("form1").addEventListener("submit", (e) => {
  e.preventDefault();
  var erreurNomElement = document.getElementById("erreurNom");
  var erreurPrenomElement = document.getElementById("erreurPrenom");
  var erreurSexeElement = document.getElementById("erreurSexe");
  var erreurDateElement = document.getElementById("erreurDate");
  var erreurCodePostalElement = document.getElementById("erreurCodePostal");
  var erreurAdresseElement = document.getElementById("erreurAdresse");
  var erreurEmailElement = document.getElementById("erreurEmail");
  var erreurSujetElement = document.getElementById("erreurSujet");
  var erreurQuestionElement = document.getElementById("erreurQuestion");
  var erreurAccordElement = document.getElementById("erreurAccord");
  cleanSpan(
    erreurNomElement,
    erreurPrenomElement,
    erreurSexeElement,
    erreurDateElement,
    erreurCodePostalElement,
    erreurAdresseElement,
    erreurEmailElement,
    erreurSujetElement,
    erreurQuestionElement,
    erreurAccordElement
  );
  var nom = document.getElementById("nom");
  var prenom = document.getElementById("prenom");
  var feminin = document.getElementById("feminin");
  var masculin = document.getElementById("masculin");
  var neutre = document.getElementById("neutre");
  var date = document.getElementById("date");
  var codePostal = document.getElementById("codePostal");
  var adresse = document.getElementById("adresse");
  var email = document.getElementById("email");
  var sujet = document.getElementById("sujet");
  var question = document.getElementById("question");
  var accord = document.getElementById("accord");
  var erreurNom;
  var erreurPrenom;
  var erreurSexe;
  var erreurDate;
  var erreurCodePostal;
  var erreurAdresse;
  var erreurEmail;
  var erreurSujet;
  var erreurQuestion;
  var erreurAccord;
  erreurNom = checkNom(nom);
  if (erreurNom) {
    erreurNomElement.textContent = erreurNom;
  }
  erreurPrenom = checkPrenom(prenom);
  if (erreurPrenom) {
    erreurPrenomElement.textContent = erreurPrenom;
  }
  erreurSexe = checkSexe(feminin, masculin, neutre);
  if (erreurSexe) {
    erreurSexeElement.textContent = erreurSexe;
  }
  erreurDate = checkDate(date);
  if (erreurDate) {
    erreurDateElement.textContent = erreurDate;
  }
  erreurCodePostal = checkCodePostal(codePostal);
  if (erreurCodePostal) {
    erreurCodePostalElement.textContent = erreurCodePostal;
  }
  erreurAdresse = checkAdresse(adresse);
  if (erreurAdresse) {
    erreurAdresseElement.textContent = erreurAdresse;
  }
  erreurEmail = checkEmail(email);
  if (erreurEmail) {
    erreurEmailElement.textContent = erreurEmail;
  }
  erreurSujet = checkSujet(sujet);
  if (erreurSujet) {
    erreurSujetElement.textContent = erreurSujet;
  }
  erreurQuestion = checkQuestion(question);
  if (erreurQuestion) {
    erreurQuestionElement.textContent = erreurQuestion;
  }
  erreurAccord = checkAccord(accord);
  if (erreurAccord) {
    erreurAccordElement.textContent = erreurAccord;
  }
  if (
    erreurNom ||
    erreurPrenom ||
    erreurSexe ||
    erreurDate ||
    erreurAdresse ||
    erreurEmail
  ) {
    return false;
  } else {
    return true;
  }
});
