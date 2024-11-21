let index = 0;

// Função para mover o carrossel
function moveSlide(direction) {
    const images = document.querySelector('.carousel-images');
    const totalImages = document.querySelectorAll('.carousel-images img').length;
    index = (index + direction + totalImages) % totalImages;  // Garante que o índice fique dentro do intervalo de imagens
    images.style.transform = `translateX(-${index * 100}%)`;
}

// Adiciona navegação automática
setInterval(() => {
    moveSlide(1);
}, 4000); // Troca de imagem a cada 4 segundos
