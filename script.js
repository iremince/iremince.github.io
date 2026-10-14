// Hamburger Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

// Language Translations
const translations = {
    tr: {
        'hero-greeting': 'Merhaba, Ben',
        'nav-home': 'Ana Sayfa',
        'nav-about': 'Hakkımda',
        'nav-skills': 'Yetenekler',
        'nav-projects': 'Projeler',
        'nav-contact': 'İletişim',
        'hero-description': 'Küçük adımlar, büyük ilerlemeler.',
        'hero-btn-projects': 'Projelerimi Gör',
        'hero-btn-contact': 'İletişime Geç',
        'section-about': 'Hakkımda',
        'about-text1': 'Merhaba, ben İrem. Yapay zeka alanında kendimi geliştirmeye odaklanmış birisiyim. Bir yandan makine öğrenimi temelleri üzerine çalışıyor, diğer yandan büyük dil modellerini (LLM) kullanarak pratik projeler üretiyorum. Amacım; yapay zeka teknolojilerini daha yakından tanımak, somut uygulamalar geliştirmek ve kariyerimi bu alanda güçlendirmek.',
        'about-text2': 'Python ve yapay zeka araçlarıyla çalışırken; teknik yetkinliklerimi derinleştiren, üretme kapasitemi artıran projeler geliştirmeyi önemsiyorum. Öğrendiğim her yeni yöntem, model ve teknoloji, yapay zeka alanında oluşturmak istediğim değerler için güçlü bir temel niteliğinde.',
        'info-education': 'Eğitim',
        'info-education-detail': 'Yaşar Üniversitesi Grafik Tasarım',
        'info-location': 'Konum',
        'info-location-detail': 'Türkiye',
        'section-skills': 'Yetenekler & Araçlar',
        'section-projects': 'Projelerim',
        'project1-title': 'CV Analiz Aracı',
        'project1-desc': "PDF CV'ni yükle, iş ilanını yapıştır, AI senin için analiz etsin.",
        'project2-title': 'Biyobozunurluk Tahmini',
        'project2-desc': "Kimyasal moleküllerin 41 atomik özelliğini ve katsayısını kullanarak doğada biyobozunurluk (güvenli/riskli) durumlarını %86.0 doğrulukla tahmin eden uçtan uca bir Random Forest sınıflandırma modeli geliştirdim.</p>",
        'project-link': 'Detaylar',
        'section-contact': 'İletişim',
        'contact-title': 'Benimle İletişime Geçin',
        'contact-desc': 'Yapay zeka alanındaki çalışmalarım veya olası projeler için bana her zaman ulaşabilirsiniz.',
        'form-name': 'Adınız',
        'form-email': 'Email Adresiniz',
        'form-message': 'Mesajınız',
        'form-submit': 'Gönder',
        'footer-text': '© 2025 İrem İnce. Tüm hakları saklıdır.'
    },
    en: {
        'hero-greeting': 'Hello, I\'m',
        'nav-home': 'Home',
        'nav-about': 'About',
        'nav-skills': 'Skills',
        'nav-projects': 'Projects',
        'nav-contact': 'Contact',
        'hero-description': 'Small steps, big progress.',
        'hero-btn-projects': 'View Projects',
        'hero-btn-contact': 'Get in Touch',
        'section-about': 'About Me',
        'about-text1': "Hi, I’m İrem. I’m fully focused on developing myself in the field of artificial intelligence. While studying the fundamentals of machine learning, I also build practical projects using Large Language Models (LLMs). My goal is to gain a deeper understanding of AI technologies, create real-world applications, and build a strong career in this space.",
        'about-text2': 'When working with Python and AI tools, I focus on building projects that deepen my technical skills and enhance my productive capacity. Every new method, model, and technology I learn serves as a solid foundation for the value I aim to create in the AI field.',
        'info-education': 'Education',
        'info-education-detail': 'Yaşar University Graphic Design',
        'info-location': 'Location',
        'info-location-detail': 'Turkey',
        'section-skills': 'Skills & Tools',
        'section-projects': 'My Projects',
        'project1-title': 'AI CV Analysis Tool',
        'project1-desc': 'Upload your PDF resume, paste the job description, and let AI analyze it for you',
        'project2-title': 'Chemical Molecule Biodegradability Prediction',
        'project2-desc': 'Developed an end-to-end Random Forest model predicting chemical biodegradability with 86.0% accuracy using 41 atomic features.',
        'project-link': 'Details',
        'section-contact': 'Contact',
        'contact-title': 'Get in Touch with Me',
        'contact-desc': 'You can always contact me about my AI projects or any potential collaborations.',
        'form-name': 'Your Name',
        'form-email': 'Your Email',
        'form-message': 'Your Message',
        'form-submit': 'Send',
        'footer-text': '© 2025 İrem İnce. All rights reserved.'
    },
    es: {
        'hero-greeting': 'Hola, Soy',
        'nav-home': 'Inicio',
        'nav-about': 'Sobre Mí',
        'nav-skills': 'Habilidades',
        'nav-projects': 'Proyectos',
        'nav-contact': 'Contacto',
        'hero-description': 'Pequeños pasos, grandes avances.',
        'hero-btn-projects': 'Ver Proyectos',
        'hero-btn-contact': 'Contactar',
        'section-about': 'Sobre Mí',
        'about-text1': '¡Hola, soy İrem. Estoy totalmente enfocada en desarrollarme en el campo de la inteligencia artificial. Mientras estudio los fundamentos del aprendizaje automático (machine learning), también creo proyectos prácticos utilizando grandes modelos de lenguaje (LLM). Mi objetivo es comprender mejor las tecnologías de IA, desarrollar aplicaciones concretas y consolidar mi carrera en este sector.',
        'about-text2': 'Al trabajar con Python y herramientas de inteligencia artificial, me enfoco en desarrollar proyectos que profundicen mis habilidades técnicas y aumenten mi capacidad de creación. Cada nuevo método, modelo y tecnología que aprendo sirve como una base sólida para el valor que busco generar en el campo de la IA.',
        'info-education': 'Educación',
        'info-education-detail': 'Universidad Yaşar Diseño Gráfico',
        'info-location': 'Ubicación',
        'info-location-detail': 'Turquía',
        'section-skills': 'Habilidades y Herramientas',
        'section-projects': 'Mis Proyectos',
        'project1-title': 'Analizador de CV con AI',
        'project1-desc': 'Sube tu CV en PDF, pega la descripción del puesto y deja que la AI lo analice por ti.',
        'project2-title': 'Predicción de Biodegradabilidad',
        'project2-desc': 'Desarrollé un modelo de Random Forest de extremo a extremo que predice la biodegradabilidad química con una precisión del 86.0% utilizando 41 características atómicas.',
        'project-link': 'Detalles',
        'section-contact': 'Contacto',
        'contact-title': 'Ponte en Contacto Conmigo',
        'contact-desc': 'Ponte en contacto conmigo para proyectos de AI y posibles colaboraciones',
        'form-name': 'Tu Nombre',
        'form-email': 'Tu Email',
        'form-message': 'Tu Mensaje',
        'form-submit': 'Enviar',
        'footer-text': '© 2025 İrem İnce. Todos los derechos reservados.'
    }
};

// Language Change Function
function changeLanguage(lang) {
    const langFlags = {
        tr: '🇹🇷 TR',
        en: '🇬🇧 EN',
        es: '🇪🇸 ES'
    };

    // Update all elements with data-lang attribute
    document.querySelectorAll('[data-lang]').forEach(element => {
        const key = element.getAttribute('data-lang');
        if (translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });

    // Update placeholders
    document.querySelectorAll('[data-lang-placeholder]').forEach(element => {
        const key = element.getAttribute('data-lang-placeholder');
        if (translations[lang][key]) {
            element.placeholder = translations[lang][key];
        }
    });

    // Update current language display
    const currentLangSpan = document.querySelector('.current-lang');
    if (currentLangSpan) {
        currentLangSpan.textContent = langFlags[lang];
    }

    // Update active language option
    document.querySelectorAll('.lang-option').forEach(option => {
        option.classList.remove('active');
        if (option.getAttribute('data-lang-code') === lang) {
            option.classList.add('active');
        }
    });

    // Close dropdown
    document.querySelector('.language-selector').classList.remove('active');

    // Save language preference
    localStorage.setItem('preferred-language', lang);
}

// Dropdown toggle
const langDropdownBtn = document.querySelector('.lang-dropdown-btn');
const languageSelector = document.querySelector('.language-selector');

if (langDropdownBtn) {
    langDropdownBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        languageSelector.classList.toggle('active');
    });
}

// Close dropdown when clicking outside
document.addEventListener('click', (e) => {
    if (!languageSelector.contains(e.target)) {
        languageSelector.classList.remove('active');
    }
});

// Language option event listeners
document.querySelectorAll('.lang-option').forEach(option => {
    option.addEventListener('click', () => {
        const lang = option.getAttribute('data-lang-code');
        changeLanguage(lang);
    });
});

// Load saved language on page load
window.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('preferred-language') || 'tr';
    changeLanguage(savedLang);
});

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// Close menu when clicking on a link
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Navbar Background on Scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(15, 23, 42, 0.98)';
        navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.5)';
    } else {
        navbar.style.background = 'rgba(15, 23, 42, 0.95)';
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.3)';
    }
});

// Intersection Observer for Fade-in Animation
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Apply fade-in to sections
document.querySelectorAll('section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(30px)';
    section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(section);
});

// Skill bars animation
const skillObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const progressBars = entry.target.querySelectorAll('.skill-progress');
            progressBars.forEach(bar => {
                const width = bar.style.width;
                bar.style.width = '0';
                setTimeout(() => {
                    bar.style.width = width;
                }, 100);
            });
            skillObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

const skillsSection = document.querySelector('.skills');
if (skillsSection) {
    skillObserver.observe(skillsSection);
}

// Form Submission Handler (Formspree)
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const submitBtn = contactForm.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        
        // Show loading state
        submitBtn.textContent = 'Gönderiliyor...';
        submitBtn.disabled = true;
        
        try {
            const formData = new FormData(contactForm);
            const response = await fetch(contactForm.action, {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });
            
            if (response.ok) {
                // Success message based on current language
                const lang = localStorage.getItem('preferred-language') || 'tr';
                const successMessages = {
                    tr: 'Mesajınız başarıyla gönderildi! En kısa sürede size dönüş yapacağım.',
                    en: 'Your message has been sent successfully! I will get back to you soon.',
                    es: '¡Tu mensaje ha sido enviado con éxito! Me pondré en contacto contigo pronto.'
                };
                
                alert(successMessages[lang]);
                contactForm.reset();
            } else {
                throw new Error('Form submission failed');
            }
        } catch (error) {
            const lang = localStorage.getItem('preferred-language') || 'tr';
            const errorMessages = {
                tr: 'Mesaj gönderilemedi. Lütfen daha sonra tekrar deneyin.',
                en: 'Message could not be sent. Please try again later.',
                es: 'No se pudo enviar el mensaje. Por favor, inténtalo de nuevo más tarde.'
            };
            
            alert(errorMessages[lang]);
        } finally {
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
        }
    });
}

// Active Navigation Link on Scroll
const sections = document.querySelectorAll('section[id]');

function updateActiveLink() {
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        const navLink = document.querySelector(`.nav-menu a[href="#${sectionId}"]`);

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelectorAll('.nav-menu a').forEach(link => {
                link.classList.remove('active');
            });
            if (navLink) {
                navLink.classList.add('active');
            }
        }
    });
}

window.addEventListener('scroll', updateActiveLink);

// Add hover effect to project cards
const projectCards = document.querySelectorAll('.project-card');
projectCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// Dynamic year in footer
const currentYear = new Date().getFullYear();
const footerText = document.querySelector('.footer p');
if (footerText && footerText.textContent.includes('2025')) {
    footerText.textContent = footerText.textContent.replace('2025', currentYear);
}

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const heroContent = document.querySelector('.hero-content');
    const heroImage = document.querySelector('.hero-image');
    
    if (heroContent && scrolled < 800) {
        heroContent.style.transform = `translateY(${scrolled * 0.3}px)`;
        heroContent.style.opacity = 1 - (scrolled / 600);
    }
    
    if (heroImage && scrolled < 800) {
        heroImage.style.transform = `translateY(${scrolled * 0.2}px)`;
    }
});

console.log('Portfolio website loaded successfully!');
