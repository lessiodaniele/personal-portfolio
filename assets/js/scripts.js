// Ottieni il riferimento al bottone
const darkModeButton = document.getElementById('dark-mode-button');

// Aggiungi un gestore di eventi per il clic sul bottone
darkModeButton.addEventListener('click', () => {
    // Inverti la modalità scura
    document.body.classList.toggle('dark-mode');
});