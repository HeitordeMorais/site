document.addEventListener("DOMContentLoaded", function () {
   

    // Lógica para o carrossel de imagens
    const image = [
        "image/IMG-20240420-WA0039.jpg",
        "image/IMG-20240420-WA0040.jpg",
        "image/IMG-20240421-WA0020.jpg",
        "image/IMG-20240421-WA0021 (1).jpg",
        "image/IMG-20240421-WA0021.jpg",
        "image/IMG-20240504-WA0097.jpg",
        "image/IMG-20240514-WA0018.jpg",
        "image/IMG-20240619-WA0018(1).jpg",
        "image/IMG-20240714-WA0003.jpg",
        "image/IMG-20240825-WA0015.jpg",
        "image/Screenshot_20240619_141551_Instagram.jpg",
        "image/Screenshot_20240625_001821_WhatsApp.jpg",
        "image/20240420_110342.jpg",
        "image/20240501_223739.jpg",
        "image/20240501_223744(0).jpg",
        "image/20240507_174102 (1).jpg",
        "image/20240507_174107.jpg",
        "image/20240524_222145.jpg",
        "image/20240816_090445.jpg",
        "image/20240816_221019.jpg",
        "image/20240816_221021.jpg",
        "image/20240816_221029.jpg",
        "image/20240816_221031.jpg",
        "image/20240816_221041.jpg",
        "image/20240816_221044.jpg",
        "image/20240816_221045.jpg",
        "image/20240816_225432.jpg",
        "image/20240816_232310.jpg",
        "image/20240816_232312.jpg",
        "image/20240816_232313.jpg",
        "image/20240816_232317.jpg",
        "image/20240816_232321.jpg",
        "image/20240816_232333.jpg",
        "image/20240816_232348.jpg",
        "image/20240817_125502.jpg",
        "image/20240817_125510.jpg",
        "image/20240817_125521.jpg",
        "image/20240817_125535.jpg",
        "image/20240817_125551.jpg",
        "image/20240817_125554.jpg",
        "image/20240817_133335.jpg",
        "image/20240817_205422.jpg",
        "image/20240818_175107.jpg",
        "image/20240818_182936.jpg",
        "image/IMG_20240714_152753_918.jpg",
        "image/IMG_20240714_152753_985.jpg",
        "image/IMG_20240820_085408_326.jpg",
        "image/IMG_20240820_090010_857 (1).jpg",
        "image/IMG_20240820_090010_857.jpg",
        "image/IMG_20240820_090011_033.jpg"
    ];

    let currentImageIndex = 0; // Índice da imagem atual

    // Garantir que os elementos de imagem e botões existam antes de tentar manipular
    const imageElement = document.getElementById("carousel-image"); // Referência ao elemento da imagem
    const prevButton = document.getElementById("prev"); // Botão de navegação para a imagem anterior
    const nextButton = document.getElementById("next"); // Botão de navegação para a imagem próxima

    if (imageElement && prevButton && nextButton) {
        // Função para atualizar a imagem do carrossel
        function updateImage() {
            imageElement.src = images[currentImageIndex]; // Atualiza a imagem exibida
        }

        // Lógica para navegar para a imagem anterior
        prevButton.addEventListener("click", function () {
            currentImageIndex = (currentImageIndex === 0) ? images.length - 1 : currentImageIndex - 1; // Vai para a última imagem se estiver na primeira
            updateImage(); // Atualiza a imagem exibida
        });

        // Lógica para navegar para a imagem seguinte
        nextButton.addEventListener("click", function () {
            currentImageIndex = (currentImageIndex === images.length - 1) ? 0 : currentImageIndex + 1; // Vai para a primeira imagem se estiver na última
            updateImage(); // Atualiza a imagem exibida
        });

        // Inicializa a imagem ao carregar a página
        updateImage();
    } else {
        console.error("Erro: Elementos de carrossel não encontrados.");
    }

    // Lógica para mostrar o tempo desde 26 de março de 2024
    const startDate = new Date("March 26, 2024 00:00:00").getTime(); // Data de início

    // Atualiza o contador a cada 1 segundo
    const timerInterval = setInterval(function () {
        const now = new Date().getTime(); // Obtém a data e hora atual
        const distance = now - startDate; // Calcula o tempo passado desde 26 de março de 2024

        // Calcula o tempo em dias, horas, minutos e segundos
        const dias = Math.floor(distance / (1000 * 60 * 60 * 24)); // dias
        const horas = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)); // horas
        const minutos = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)); // minutos
        const segundos = Math.floor((distance % (1000 * 60)) / 1000); // segundos

        // Exibe o tempo passado no HTML
        document.getElementById("dias").innerHTML = dias;
        document.getElementById("horas").innerHTML = horas;
        document.getElementById("minutos").innerHTML = minutos;
        document.getElementById("segundos").innerHTML = segundos;
    }, 1000); // Atualiza a cada 1 segundo
});
