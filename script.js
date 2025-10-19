let currentPage = 1;
const totalPages = 2;

function showPage(pageNumber) {
    for (let i = 1; i <= totalPages; i++) {
        const page = document.getElementById(`page${i}`);
        const audio = page.querySelector('audio');

        if (i === pageNumber) {
            page.style.display = 'block';
            // Reproducir audio automáticamente
            if (audio) {
                audio.currentTime = 0;
                audio.play();
            }
        } else {
            page.style.display = 'none';
            if (audio) audio.pause();
        }
    }
}

document.getElementById('prevBtn').addEventListener('click', () => {
    if (currentPage > 1) {
        currentPage--;
        showPage(currentPage);
    }
});

document.getElementById('nextBtn').addEventListener('click', () => {
    if (currentPage < totalPages) {
        currentPage++;
        showPage(currentPage);
    }
});

// Inicializar mostrando la primera página
showPage(currentPage);
