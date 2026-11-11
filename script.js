// Toggle Language Functionality between English and Khmer
let currentLang = 'en';

function toggleLanguage() {
    const enElements = document.querySelectorAll('.en-text');
    const khElements = document.querySelectorAll('.kh-text');
    const langBtn = document.getElementById('lang-btn');

    if (currentLang === 'en') {
        enElements.forEach(el => el.style.display = 'none');
        khElements.forEach(el => el.style.display = 'block');
        langBtn.innerHTML = '🇬🇧 English';
        currentLang = 'kh';
    } else {
        enElements.forEach(el => el.style.display = 'block');
        khElements.forEach(el => el.style.display = 'none');
        langBtn.innerHTML = '🇰🇭 ខ្មែរ';
        currentLang = 'en';
    }
}

// Handle Inquiry Form Submission
function handleFormSubmit(event) {
    event.preventDefault();
    const form = document.getElementById('contactForm');
    const successMsg = document.getElementById('formSuccess');
    
    // Hide form and display success feedback
    form.style.display = 'none';
    successMsg.style.display = 'block';
}
