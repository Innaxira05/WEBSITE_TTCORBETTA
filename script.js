// ============================================================
// ASD TENNISTAVOLO CORBETTA - script del sito
// Il file è caricato con "defer": parte dopo che la pagina è pronta.
// ============================================================


// ---------- MENU MOBILE ----------
const mobileBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

mobileBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});

// Chiude il menu quando si clicca su una voce
document.querySelectorAll('.mobile-link').forEach(link => {
    link.addEventListener('click', () => mobileMenu.classList.add('hidden'));
});


// ---------- TAB QUOTE (semestre / anno intero) ----------
const TAB_ATTIVO = "px-5 py-2.5 rounded-xl font-bold text-sm transition-all text-white bg-brand-blue shadow-sm";
const TAB_SPENTO = "px-5 py-2.5 rounded-xl font-bold text-sm text-slate-600 hover:text-brand-blue transition-all";

function switchTab(tab) {
    const mostraSemestre = (tab === 'semestre');

    document.getElementById('tab-semestre-btn').className = mostraSemestre ? TAB_ATTIVO : TAB_SPENTO;
    document.getElementById('tab-annuale-btn').className = mostraSemestre ? TAB_SPENTO : TAB_ATTIVO;

    document.getElementById('content-semestre').classList.toggle('hidden', !mostraSemestre);
    document.getElementById('content-annuale').classList.toggle('hidden', mostraSemestre);
}


// ---------- COPIA IBAN ----------
// L'IBAN viene letto direttamente dalla pagina (elemento #iban-text),
// così se lo cambi nell'HTML non devi toccare questo file.
function copyIBAN() {
    const iban = document.getElementById('iban-text').textContent.trim();

    navigator.clipboard.writeText(iban)
        .then(() => {
            const label = document.getElementById('copy-text');
            label.textContent = 'Copiato!';
            setTimeout(() => { label.textContent = 'Copia IBAN'; }, 2500);
            showToast('IBAN copiato negli appunti!');
        })
        .catch(() => {
            showToast('Copia non riuscita: seleziona e copia l\'IBAN a mano.');
        });
}


// ---------- NOTIFICA (TOAST) ----------
function showToast(msg) {
    const toast = document.getElementById('toast');
    document.getElementById('toast-message').textContent = msg;
    toast.classList.remove('translate-y-20', 'opacity-0');

    setTimeout(() => {
        toast.classList.add('translate-y-20', 'opacity-0');
    }, 3000);
}


// ---------- CAROSELLO GALLERIA ----------
const slidesContainer = document.getElementById('carousel-slides');
const dots = document.querySelectorAll('.carousel-dot');
const totalSlides = dots.length;   // un pallino per ogni foto
let currentSlide = 0;

function updateCarousel() {
    slidesContainer.style.transform = `translateX(-${currentSlide * 100}%)`;

    dots.forEach((dot, i) => {
        dot.className = (i === currentSlide)
            ? "carousel-dot w-6 h-3 rounded-full bg-brand-yellow transition-all"
            : "carousel-dot w-3 h-3 rounded-full bg-white/40 transition-all";
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    updateCarousel();
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    updateCarousel();
}

function goToSlide(index) {
    currentSlide = index;
    updateCarousel();
}

updateCarousel();                    // stato iniziale dei pallini
setInterval(nextSlide, 7000);        // scorrimento automatico ogni 7 secondi
