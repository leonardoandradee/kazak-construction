document.addEventListener('DOMContentLoaded', () => {
    const track = document.querySelector('.carousel-track');
    if (track) {
        // Ao invés de clonar a trilha, clonamos apenas as imagens dentro da MESMA trilha.
        // Isso resolve o problema de sobreposição e garante a mesma velocidade real para todas.
        const images = Array.from(track.children);
        const copies = 4;
        
        for (let i = 0; i < copies; i++) {
            images.forEach(img => {
                track.appendChild(img.cloneNode(true));
            });
        }
        
        // Define o quanto a trilha inteira deve se mover para transacionar 1 conjunto exato
        const totalSets = copies + 1;
        track.style.setProperty('--scroll-amount', `-${100 / totalSets}%`);
    }
});
