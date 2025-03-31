// Menu mobile
document.querySelector('.hamburger').addEventListener('click', () => {
    document.querySelector('.nav-links').classList.toggle('active');
});

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Animation au scroll
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop < window.innerHeight - 100) {
            section.style.opacity = '1';
            section.style.transform = 'translateY(0)';
        }
    });
});
// ===== CONFIGURATION DES PROJETS =====
const projects = [
    {
      title: "Reservia,Hébergement pour des vacances.",
      description: "HTML/CSS/responsive",
      image: "./image/reservia.png",
      technologies: ["HTML", "CSS"],
      links: [
        { url: "https://salma581.github.io/2_bouchemla_salma/", text: "Voir le site", icon: "fa-external-link-alt" },
        { url: "https://github.com/salma581/2_bouchemla_salma.git", text:  "Code", icon: "fab fa-github"}
      ]
    },
    {
      title: "Site qui propose des restaurant avec leur menu",
      description: "Utilisation d'animation",
      image: "./image/ohmyfood.png",
      technologies: ["html", "css", "animation"],
      links: [
        { url: "https://salma581.github.io/3_bouchemla_salma/", text: "Demo", icon: "fa-play" },
        { url: "https://github.com/salma581/3_bouchemla_salma.git", text: "Code", icon: "fab fa-github"}
      ]
    },
    {
      title: "Portfolio Photographe",
      description: "Galerie animée avec Lightbox",
      image: "assets/projets/photographe.jpg",
      technologies: ["CSS Grid", "JavaScript"],
      links: [
        { url: "https://portfolio-photo-exemple.com", text: "Visiter", icon: "fa-camera" }
      ]
    },
    {
      title: "Jeu Memory",
      description: "Jeu de cartes avec système de score",
      image: "assets/projets/memory.jpg",
      technologies: ["JavaScript", "Animations CSS"],
      links: [
        { url: "https://ton-jeu-memory.github.io", text: "Jouer", icon: "fa-gamepad" },
        { url: "https://github.com/tonuser/jeu-memory", text: "Code", icon: "fab fa-github" }
      ]
    },
    {
      title: "Blog Personnel",
      description: "Intégration avec système de commentaires",
      image: "assets/projets/blog.jpg",
      technologies: ["HTML", "CSS", "PHP"],
      links: [
        { url: "https://ton-blog-personnel.com", text: "Lire", icon: "fa-book-open" }
      ]
    },
    {
      title: "Calculateur IMC",
      description: "Application santé avec graphiques",
      image: "assets/projets/imc.jpg",
      technologies: ["Chart.js", "JavaScript"],
      links: [
        { url: "https://calcul-imc-exemple.netlify.app", text: "Essayer", icon: "fa-calculator" },
        { url: "https://github.com/tonuser/calculateur-imc", text: "Code", icon: "fab fa-github"}
      ]
    },
    {
      title: "Site E-commerce",
      description: "Panier dynamique en JS",
      image: "assets/projets/ecommerce.jpg",
      technologies: ["JavaScript", "LocalStorage"],
      links: [
        { url: "https://boutique-test.vercel.app", text: "Boutique", icon: "fa-shopping-cart" }
      ]
    },
    {
      title: "CV Interactif",
      description: "Animation timeline et compétences",
      image: "assets/projets/cv.jpg",
      technologies: ["CSS Animations", "GSAP"],
      links: [
        { url: "https://mon-cv-interactif.com", text: "Voir CV", icon: "fa-user-tie" },
        { url: "https://github.com/tonuser/cv-interactif", text: "Code", icon: "fab fa-github"}
      ]
    }
  ];
  
  // ===== FONCTIONS =====
  function renderProjects() {
    const grid = document.querySelector('.projects-grid');
    
    projects.forEach((project, index) => {
      const card = document.createElement('div');
      card.className = 'project-card';
      card.style.animationDelay = `${index * 0.1}s`; // Effet cascade
      
      card.innerHTML = `
        <img src="${project.image}" alt="${project.title}" loading="lazy">
        <div class="project-info">
          <h3>${project.title}</h3>
          <p>${project.description}</p>
          <div class="technologies">
            ${project.technologies.map(tech => `<span>${tech}</span>`).join('')}
          </div>
          <div class="project-links">
            ${project.links.map(link => `
              <a href="${link.url}" target="_blank" class="btn-small">
                <i class="fas ${link.icon}"></i> ${link.text}
              </a>
            `).join('')}
          </div>
        </div>
      `;
      
      grid.appendChild(card);
    });
  }
  
  // Animation au scroll
  function setupScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        }
      });
    }, { threshold: 0.1 });
  
    document.querySelectorAll('section').forEach(section => {
      observer.observe(section);
    });
  }
  
  // Menu mobile
  function setupMobileMenu() {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
  
    hamburger.addEventListener('click', () => {
      navLinks.classList.toggle('active');
      hamburger.classList.toggle('toggle');
    });
  }
  
  // ===== INITIALISATION =====
  document.addEventListener('DOMContentLoaded', () => {
    renderProjects();
    setupScrollAnimations();
    setupMobileMenu();
  });