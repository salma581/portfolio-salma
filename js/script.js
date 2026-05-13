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
      image: "./images/reservia.png",
      technologies: ["HTML", "CSS"],
      links: [
        { url: "https://salma581.github.io/2_bouchemla_salma/", text: "Voir le site", icon: "fa-external-link-alt" },
        { url: "https://github.com/salma581/2_bouchemla_salma.git", text:  "Code", icon: "fab fa-github"}
      ]
    },
    {
      title: "Site qui propose des restaurant avec leur menu",
      description: "Utilisation d'animation",
      image: "./images/ohmyfood.png",
      technologies: ["html", "css", "animation"],
      links: [
        { url: "https://salma581.github.io/3_bouchemla_salma/", text: "Demo", icon: "fa-play" },
        { url: "https://github.com/salma581/3_bouchemla_salma.git", text: "Code", icon: "fab fa-github"}
      ]
    },
    {
      title: "La Chouette Agence",
      description: "Agence qui aide les entreprises a être attractives et visible sur internet",
      image: "./images/chouette.png",
      technologies: ["html" ,"CSS ", "seo"],
      links: [
        { url: "https://salma581.github.io/4_bouchemla_salma/", text: "Demo", icon: "fa-play" },
        { url: "https://github.com/salma581/4_bouchemla_salma.git", text: "Code", icon: "fab fa-github"}
      ]
    },
    {
      title: "Englishjoy",
      description: "Englishjoy - Cours d'anglais pour enfants",
      image: "./images/Englishjoy.png",
      technologies: ["html" ,"CSS ", "seo","javascript"],
      links: [
        { url: "https://salma581.github.io/englishjoy/", text: "Demo", icon: "fa-play" },
        { url: "https://github.com/salma581/englishjoy.git", text: "Code", icon: "fab fa-github"}
      ]
    },
    {
      title: "kanap",
      description: " Site e-commerce dynamique avec gestion des produits via API JavaScript.",
      image: "./images/kanap.png",
      technologies: ["JavaScript", "API"],
      links: [
        { url:"https://five-bouchemla-salma.onrender.com", text: "kanap", icon: "fa-gamepad"  },
        { url: "https://github.com/salma581/5_bouchemla_salma.git", text: "Code", icon: "fab fa-github" }
      ]
    },
    {
      title: "piquente",
      description: "site de création de sauces",
      image:"./images/piquante.png",
      technologies: ["frontend", "backend","mongodb","node.js"],
      links: [
        { url: "https://salma581.github.io/6_bouchemla_salma/", text: "Demo", icon: "fa-play" },
        { url: "https://github.com/salma581/6_bouchemla_salma.git", text: "Code", icon: "fab fa-github"}
      ]
    },
    
    {
      title: "Site E-commerce",
      description: "présentation d’appartements à louer",
      image: "./images/localstorage.png",
      technologies: ["JavaScript", "LocalStorage", "react"],
      links: [
        { url: " https://salma581.github.io/7_bouchemla_salma/", text: "Demo", icon: "fa-play" },
        { url: "https://github.com/salma581/7_bouchemla_salma.git", text: "Code", icon: "fab fa-github"}
      ]
    },
    
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
  // Fermer le menu après clic sur un lien
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    document.querySelector('.nav-links').classList.remove('active');
    document.querySelector('.hamburger').classList.remove('toggle');
  });
});
  // ===== INITIALISATION =====
  document.addEventListener('DOMContentLoaded', () => {
    renderProjects();
    setupScrollAnimations();
    setupMobileMenu();
  });