document.addEventListener('DOMContentLoaded', function() {
    // Elementos DOM
    const content = document.getElementById('main-content');
    const body = document.body;
    const popupTrigger = document.getElementById('popup-trigger');
    const popupOptions = document.getElementById('popup-options');
    const btnAdulto = document.getElementById('font-adulto');
    const btnIdoso = document.getElementById('font-idoso');
    const btnContraste = document.getElementById('high-contrast');
    const btnReset = document.getElementById('reset-all');
    const sections = document.querySelectorAll('section');
    
    // Verificar preferências salvas
    const savedFontSize = localStorage.getItem('fontSize');
    const savedContrast = localStorage.getItem('highContrast');
    
    // Aplicar preferências salvas
    if (savedFontSize === 'large') {
        content.classList.add('large-font');
    }
    
    if (savedContrast === 'true') {
        body.classList.add('high-contrast');
    }
    
    // Abrir/fechar pop-up de opções
    popupTrigger.addEventListener('click', function(e) {
        e.stopPropagation();
        popupOptions.classList.toggle('expanded');
        
        // Efeito de balanço no ícone
        this.style.transform = 'rotate(10deg)';
        setTimeout(() => {
            this.style.transform = 'rotate(-10deg)';
            setTimeout(() => {
                this.style.transform = 'rotate(0)';
            }, 150);
        }, 150);
    });
    
    // Fechar pop-up ao clicar fora
    document.addEventListener('click', function() {
        popupOptions.classList.remove('expanded');
    });
    
    // Impedir que clique no pop-up feche o menu
    popupOptions.addEventListener('click', function(e) {
        e.stopPropagation();
    });
    
    // Event listeners para os botões
    btnAdulto.addEventListener('click', function() {
        content.classList.remove('large-font');
        localStorage.setItem('fontSize', 'normal');
        popupOptions.classList.remove('expanded');
    });
    
    btnIdoso.addEventListener('click', function() {
        content.classList.add('large-font');
        localStorage.setItem('fontSize', 'large');
        popupOptions.classList.remove('expanded');
    });
    
    btnContraste.addEventListener('click', function() {
        body.classList.toggle('high-contrast');
        localStorage.setItem('highContrast', body.classList.contains('high-contrast'));
        popupOptions.classList.remove('expanded');
    });
    
    btnReset.addEventListener('click', function() {
        // Resetar tudo
        content.classList.remove('large-font');
        body.classList.remove('high-contrast');
        localStorage.removeItem('fontSize');
        localStorage.removeItem('highContrast');
        popupOptions.classList.remove('expanded');
    });
    
    // Animação de aparecimento das seções
    function checkScroll() {
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (sectionTop < windowHeight * 0.75) {
                section.classList.add('visible');
            }
        });
    }
    
    // Verificar ao carregar e ao rolar
    window.addEventListener('load', checkScroll);
    window.addEventListener('scroll', checkScroll);
    // Botão voltar ao topo
const scrollTopBtn = document.getElementById('scrollTopBtn');

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        scrollTopBtn.style.display = 'block';
    } else {
        scrollTopBtn.style.display = 'none';
    }
});

scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

});