// script.js - Gestione logica moduli ASD Tennistavolo Corbetta

document.addEventListener("DOMContentLoaded", () => {
  // 1. Modulo Contatti / Richiesta Informazioni
  const contactForm = document.getElementById("contactForm") || document.querySelector("form#form-contatti");
  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const formData = new FormData(contactForm);
      const data = Object.fromEntries(formData.entries());

      // Validazione base
      if (!data.nome || !data.email || !data.messaggio) {
        alert("Per favore, compila tutti i campi obbligatori.");
        return;
      }

      console.log("Dati inviati per contatto:", data);

      // Feedback visivo all'utente
      alert(`Grazie ${data.nome}! Abbiamo ricevuto la tua richiesta. Ti risponderemo a breve all'indirizzo ${data.email}.`);
      contactForm.reset();
    });
  }

  // 2. Modulo Pre-Iscrizione / Adesione
  const iscrizioneForm = document.getElementById("iscrizioneForm") || document.querySelector("form#form-iscrizione");
  if (iscrizioneForm) {
    iscrizioneForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const formData = new FormData(iscrizioneForm);
      const data = Object.fromEntries(formData.entries());

      if (!data.nomeCompleto || !data.opzioneTariffa) {
        alert("Completa i campi anagrafici e seleziona una tipologia di quota.");
        return;
      }

      console.log("Richiesta pre-iscrizione registrata:", data);

      alert("Pre-iscrizione inviata con successo! Ricordati di effettuare il bonifico alle coordinate indicate nella sezione Costi.");
      iscrizioneForm.reset();
    });
  }
});