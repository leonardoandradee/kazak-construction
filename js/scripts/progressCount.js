document.addEventListener('DOMContentLoaded', () => {
    const percentText = document.querySelector('.s-hero .percent h3');
    
    if (percentText) {
        percentText.innerHTML = "0%..."; // Começa visualmente em 0%
        
        const endPercent = 87; // O número que queremos alcançar
        const duration = 2500; // Tempo em ms (equivalente aos 2.5s do SCSS)
        const delay = 300;     // Tempo em ms igual ao delay da animação do CSS
        
        setTimeout(() => {
            const startTime = performance.now();
            
            function updateCounter(currentTime) {
                const elapsedTime = currentTime - startTime;
                
                // Calcula o percentual de tempo entre 0 e 1 (não passa de 1)
                const progress = Math.min(elapsedTime / duration, 1);
                
                // Curva de Euler (ease-out) para sincronizar o contador de texto com a suavidade ease-out das keyframes do css
                const easeOutProgress = 1 - Math.pow(1 - progress, 3);
                
                // Calcula qual é o numero atual
                const currentVal = Math.floor(easeOutProgress * endPercent);
                percentText.innerHTML = `${currentVal}%...`;
                
                if (progress < 1) {
                    requestAnimationFrame(updateCounter);
                } else {
                    percentText.innerHTML = `${endPercent}%...`; // Garante o 67% certinho no fim!
                }
            }
            
            requestAnimationFrame(updateCounter);
        }, delay);
    }
});
