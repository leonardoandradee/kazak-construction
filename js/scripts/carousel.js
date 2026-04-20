document.addEventListener('DOMContentLoaded', () => {
    const track = document.querySelector('.carousel-track');
    if (track) {
        // Clona o HTML inicial do track inteiro
        const trackContent = track.innerHTML;
        // Insere o conteúdo novamente no final para o efeito infinito (50% do tamanho total)
        track.insertAdjacentHTML('beforeend', trackContent);
    }
});
