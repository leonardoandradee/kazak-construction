document.addEventListener('DOMContentLoaded', () => {
    const track = document.querySelector('.carousel-track');
    if (track) {
        // Agora a gente não clona só as imagens. Clonamos a TRILHA inteira!
        // E enfiamos 4 cópias completas dela uma após a outra dentro do footer
        const clone1 = track.cloneNode(true);
        const clone2 = track.cloneNode(true);
        const clone3 = track.cloneNode(true);
        const clone4 = track.cloneNode(true);
        
        const footer = document.querySelector('footer');
        if(footer) {
            footer.appendChild(clone1);
            footer.appendChild(clone2);
            footer.appendChild(clone3);
            footer.appendChild(clone4);
        }
    }
});
