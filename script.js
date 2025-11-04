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
        'hero-subtitle': 'Veri Analisti',
        'hero-description': 'Küçük adımlar, büyük ilerlemeler.',
        'hero-btn-projects': 'Projelerimi Gör',
        'hero-btn-contact': 'İletişime Geç',
        'section-about': 'Hakkımda',
        'about-text1': 'Merhaba! Ben İrem İnce. Veri analitiği ve iş zekası alanında kendimi geliştiren bir analistim. Verileri yalnızca raporlamak değil, içgörüye dönüştürmek ve bu içgörülerle daha akıllı kararlar alabilmek beni motive ediyor. Şu anda kendi işimi kurma sürecindeyim ve bu süreçte veriyle düşünmeyi, karar süreçlerini şekillendirmeyi ve verimliliği artıran çözümler üretmeyi hedefliyorum.',
        'about-text2': 'Python, SQL, Tableau ve Excel gibi araçlarla veri hikayeleri oluşturmayı seviyorum. Öğrenme ve üretme sürecinde her proje, kendimi ve işimi büyütmem için yeni bir fırsat benim için.',
        'info-education': 'Eğitim',
        'info-education-detail': 'Yaşar Üniversitesi Grafik Tasarım',
        'info-location': 'Konum',
        'info-location-detail': 'Türkiye',
        'info-focus': 'Yetkinlikler',
        'info-focus-detail': 'Veri Analizi & Dashboard Tasarımı',
        'section-skills': 'Yetenekler & Araçlar',
        'section-projects': 'Projelerim',
        'project1-title': 'Maaş Analizi Genel Bakış',
        'project1-desc': 'Kaggle’dan bir maaş veri seti indirdim ve Excel’de keşifsel bir analiz yaptım.Yaş dağılımını, maaş dağılımını, deneyim ile maaş arasındaki ilişkiyi ve cinsiyet ile eğitim seviyesine göre ortalama maaşları görselleştirdim.',
        'project2-title': 'Sipariş ve Üyelik Analizi - Vaka Çalışması',
        'project2-desc': 'Siparişler, ürünler ve üyelik bilgilerini içeren bir veri setini analiz ettim. İlk satın alınan ve en popüler ürünler, katılmadan önce toplam harcama ve farklı kurallar altında kazanılan ödül puanları gibi içgörüleri inceledim. Bu çalışma, SQL, veri toplama (agregasyon) ve veri yorumlama becerilerimi güçlendirmeme yardımcı oldu.',
        'project3-title': 'Uyku Sağlığı ve Yaşam Tarzı',
        'project3-desc': 'Tableau ile uyku kalitesi, stres seviyesi ve yaşam tarzı faktörleri arasındaki ilişkileri analiz eden etkileşimli dashboard. Uyku alışkanlıklarının sağlığa etkisini görselleştirerek veri odaklı içgörüler sunar.',
        'project-link': 'Detaylar',
        'section-contact': 'İletişim',
        'contact-title': 'Benimle İletişime Geçin',
        'contact-desc': 'Veri analizi projeleri, danışmanlık veya iş birliği fırsatları için benimle iletişime geçebilirsiniz!',
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
        'hero-subtitle': 'Data Analyst',
        'hero-description': 'Small steps, big progress.',
        'hero-btn-projects': 'View Projects',
        'hero-btn-contact': 'Get in Touch',
        'section-about': 'About Me',
        'about-text1': 'Hello! I’m İrem İnce. I’m an analyst developing my skills in data analytics and business intelligence. What motivates me is not just reporting data, but transforming it into insights that enable smarter decisions.I’m currently in the process of building my own business, where I aim to think with data, shape decision-making processes, and create solutions that enhance efficiency.',
        'about-text2': 'I enjoy crafting data stories using tools like Python, SQL, Tableau, and Excel. For me, every project in the learning and creation process is a new opportunity to grow both personally and professionally.',
        'info-education': 'Education',
        'info-education-detail': 'Yaşar University Graphic Design',
        'info-location': 'Location',
        'info-location-detail': 'Turkey',
        'info-focus': 'Skills',
        'info-focus-detail': 'Data Analysis & Dashboard Design',
        'section-skills': 'Skills & Tools',
        'section-projects': 'My Projects',
        'project1-title': 'Salary Analysis Overview ',
        'project1-desc': 'I downloaded a salary dataset from Kaggle and performed an exploratory analysis in Excel. I visualized age distribution, salary distribution, the relationship between experience and salary, and average salaries by gender and education level.',
        'project2-title': 'Orders & Membership Analysis - Case Study',
        'project2-desc': 'Analyzed a dataset containing Orders, Items, and Membership information. Explored insights such as the first and most popular items purchased, total spending before joining, and reward points earned under different rules. This exercise helped me strengthen my SQL, aggregation, and data interpretation skills.',
        'project3-title': 'Sleep Health and Lifestyle',
        'project3-desc': 'An interactive Tableau dashboard analyzing the relationships between sleep quality, stress levels, and lifestyle factors. It visualizes the impact of sleep habits on health and provides data-driven insights.',
        'project-link': 'Details',
        'section-contact': 'Contact',
        'contact-title': 'Get in Touch with Me',
        'contact-desc': 'Feel free to reach out for data analysis projects, consulting, or collaboration opportunities!',
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
        'hero-subtitle': 'Analista de Datos',
        'hero-description': 'Pequeños pasos, grandes avances.',
        'hero-btn-projects': 'Ver Proyectos',
        'hero-btn-contact': 'Contactar',
        'section-about': 'Sobre Mí',
        'about-text1': '¡Hola! Soy İrem İnce. Soy una analista que está desarrollando sus habilidades en análisis de datos e inteligencia empresarial. Lo que me motiva no es solo informar datos, sino transformarlos en ideas que permitan tomar decisiones más inteligentes. Actualmente estoy en el proceso de crear mi propio negocio, donde busco pensar con los datos, dar forma a los procesos de decisión y generar soluciones que aumenten la eficiencia.',
        'about-text2': 'Disfruto contar historias con datos utilizando herramientas como Python, SQL, Tableau y Excel. Para mí, cada proyecto en el proceso de aprendizaje y creación es una nueva oportunidad para crecer, tanto personal como profesionalmente.',
        'info-education': 'Educación',
        'info-education-detail': 'Universidad Yaşar Diseño Gráfico',
        'info-location': 'Ubicación',
        'info-location-detail': 'Turquía',
        'info-focus': 'Habilidades',
        'info-focus-detail': 'Análisis de Datos y Diseño de Dashboards',
        'section-skills': 'Habilidades y Herramientas',
        'section-projects': 'Mis Proyectos',
        'project1-title': 'Resumen del Análisis Salarial',
        'project1-desc': 'Descargué un conjunto de datos de salarios de Kaggle y realicé un análisis exploratorio en Excel. Visualicé la distribución por edad, la distribución de los salarios, la relación entre la experiencia y el salario, y los salarios promedio según el género y el nivel educativo.',
        'project2-title': 'Análisis de Pedidos y Membresías - Estudio de Caso',
        'project2-desc': 'Analicé un conjunto de datos que contenía información sobre Pedidos, Productos y Membresías. Exploré insights como los primeros y los productos más populares comprados, el gasto total antes de unirse y los puntos de recompensa obtenidos bajo diferentes reglas. Este ejercicio me ayudó a fortalecer mis habilidades en SQL, agregación e interpretación de datos.',
        'project3-title': 'Salud del Sueño y Estilo de Vida',
        'project3-desc': 'Un panel interactivo de Tableau que analiza las relaciones entre la calidad del sueño, los niveles de estrés y los factores del estilo de vida. Visualiza el impacto de los hábitos de sueño en la salud y ofrece información basada en datos.',
        'project-link': 'Detalles',
        'section-contact': 'Contacto',
        'contact-title': 'Ponte en Contacto Conmigo',
        'contact-desc': '¡No dudes en contactarme para proyectos de análisis de datos, consultoría u oportunidades de colaboración!',
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