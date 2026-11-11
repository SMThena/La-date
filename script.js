// Calcule le numéro du jour dans l'année (1 à 365/366)
function jourDeLAnnee(date) {
  const debut = Date.UTC(date.getFullYear(), 0, 1);
  const aujourdHui = Date.UTC(date.getFullYear(), date.getMonth(), date.getDate());
  return (aujourdHui - debut) / 86400000 + 1;
}

function estBissextile(annee) {
  return (annee % 4 === 0 && annee % 100 !== 0) || annee % 400 === 0;
}

function afficher() {
  const maintenant = new Date();
  const jour = jourDeLAnnee(maintenant);
  const total = estBissextile(maintenant.getFullYear()) ? 366 : 365;
  const dateTexte = maintenant.toLocaleDateString("fr-FR", {
    weekday: "long", day: "numeric", month: "long", year: "numeric",
  });

  document.getElementById("jour").textContent = jour;
  document.getElementById("details").textContent =
    `${dateTexte} — jour ${jour} sur ${total}`;
}

afficher();
// Met à jour chaque minute (utile si la page reste ouverte après minuit)
setInterval(afficher, 60000);
