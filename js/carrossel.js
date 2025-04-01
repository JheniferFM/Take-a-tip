let index = 0;

// Função para mover o carrossel
function moveSlide(direction) {
    const images = document.querySelector('.carousel-images');
    const totalImages = document.querySelectorAll('.carousel-images img').length;
    const visibleImages = 6; // Número de imagens visíveis no carrossel original

    // Atualiza o índice
    index += direction;

    // Lógica de looping
    if (index < 0) {
        index = totalImages - visibleImages; // Moave para o final duplicado
        images.style.transition = "none"; // Remove transição para evitar animação
        images.style.transform = `translateX(-${index * 100}%)`;
        setTimeout(() => {
            index = totalImages - visibleImages - 1;
            images.style.transition = "transform 0.5s ease-in-out"; // Restaura a transição
            images.style.transform = `translateX(-${index * 100}%)`;
        }, 0);
        return;
    }

    if (index >= totalImages - visibleImages) {
        index = 0; // Move para o início duplicado
        images.style.transition = "none"; // Remove transição para evitar animação
        images.style.transform = `translateX(-${index * 100}%)`;
        setTimeout(() => {
            index = 1;
            images.style.transition = "transform 0.5s ease-in-out"; // Restaura a transição
            images.style.transform = `translateX(-${index * 100}%)`;
        }, 0);
        return;
    }

    // Move o carrossel normalmente
    images.style.transform = `translateX(-${index * 100}%)`;
}

// Adiciona navegação automática
setInterval(() => {
    moveSlide(1);
}, 5000); // Troca de imagem a cada 5 segundos

// Função para duplicar as imagens ao carregar
window.onload = function () {
    const imagesContainer = document.querySelector('.carousel-images');
    const images = Array.from(imagesContainer.children);
    // Duplicando as imagens
    images.forEach(image => {
        imagesContainer.appendChild(image.cloneNode(true)); 
    });
}
 