document.addEventListener('DOMContentLoaded', function() {
    // Menu responsivo
    const menuBotao = document.querySelector('.menu-botao');
    const nav = document.querySelector('nav');
    
    if (menuBotao && nav) {
        menuBotao.addEventListener('click', function() {
            nav.classList.toggle('ativo');
            
            // Animação do ícone do menu
            const linhas = menuBotao.querySelectorAll('.linha');
            linhas[0].classList.toggle('rotate-45');
            linhas[1].classList.toggle('opacity-0');
            linhas[2].classList.toggle('rotate-neg-45');
        });
    }
    
    // Scrollspy para navegação
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav a');
    
    window.addEventListener('scroll', function() {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (pageYOffset >= (sectionTop - sectionHeight / 3)) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('ativo');
            if (link.getAttribute('href') === '#' + current) {
                link.classList.add('ativo');
            }
        });
        
        // Efeito de scroll no cabeçalho
        const header = document.querySelector('header');
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
    
    // Animação de entrada para os elementos
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animado');
            }
        });
    }, {
        threshold: 0.1
    });
    
    document.querySelectorAll('.card, .foto-container, .conteudo').forEach(el => {
        el.classList.add('fade-in');
        observer.observe(el);
    });
});

// Adicionar classes CSS para as animações
document.head.insertAdjacentHTML('beforeend', `
<style>
.fade-in {
    opacity: 0;
    transform: translateY(20px);
    transition: opacity 0.6s ease, transform 0.6s ease;
}

.animado {
    opacity: 1;
    transform: translateY(0);
}

.rotate-45 {
    transform: rotate(45deg) translate(5px, 5px);
}

.opacity-0 {
    opacity: 0;
}

.rotate-neg-45 {
    transform: rotate(-45deg) translate(5px, -5px);
}

header.scrolled {
    box-shadow: 0 5px 20px rgba(0,0,0,0.05);
    padding-top: 1rem;
    padding-bottom: 1rem;
}
</style>
`); 