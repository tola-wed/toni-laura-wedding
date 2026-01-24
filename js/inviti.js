async function verificaCodice() {
    const codice = document.getElementById("codice").value.trim();
    const response = await fetch("data/inviti.json");
    const inviti = await response.json();

    if (inviti[codice]) {
        document.getElementById("invito").classList.remove("hidden");
        document.getElementById("nome").textContent = inviti[codice].nome;
        document.getElementById("posti").textContent = inviti[codice].posti;
        document.getElementById("messaggio").textContent = inviti[codice].messaggio;
    } else {
        alert("Codice non valido 😢");
    }
}
