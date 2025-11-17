document.getElementById("ajouter").onclick = () => {
  const nom = document.getElementById("nom").value;
  const prenom = document.getElementById("prenom").value;
  const date = document.getElementById("dateNaissance").value;
  const adresse = document.getElementById("adresse").value;
  const ville = document.getElementById("ville").value;
  const photo = document.getElementById("photo").value;

  const carte = `
    <div class='carte'>
      <img src='${photo}' alt='Photo'>
      <p class="nom">${nom}</p>
      <p class="prenom">${prenom}</p>
      <p class="date">${date}</p>
      <p class="adresse">${adresse}</p>
      <p class="ville">${ville}</p>
      <button class='modifier'>Modifier</button>
      <button class='supprimer'>Supprimer</button>
    </div>
  `;
  document.getElementById("cartes").innerHTML += carte;
  localStorage.setItem("personnes", document.getElementById("cartes").innerHTML);

  document.querySelectorAll("input").forEach(input => input.value = "");
};
let a = localStorage.getItem("personnes");
if (a) {
  document.getElementById("cartes").innerHTML = a;
}
document.getElementById("cartes").addEventListener("click", (e) => {
  if (e.target.classList.contains("supprimer")) {
    const carte = e.target.parentElement;
    carte.remove();
    localStorage.setItem("personnes", document.getElementById("cartes").innerHTML);
  }
});
