document.addEventListener("DOMContentLoaded", function () {
   

    // Lógica para o carrossel de imagens
    const image = [
        "imagens/IMG-20240420-WA0039.jpg",
        "imagens/IMG-20240420-WA0040.jpg",
        "imagens/IMG-20240421-WA0020.jpg",
        "imagens/IMG-20240421-WA0021 (1).jpg",
        "imagens/IMG-20240421-WA0021.jpg",
        "imagens/IMG-20240504-WA0097.jpg",
        "imagens/IMG-20240514-WA0018.jpg",
        "imagens/IMG-20240619-WA0018(1).jpg",
        "imagens/IMG-20240714-WA0003.jpg",
        "imagens/IMG-20240825-WA0015.jpg",
        "imagens/Screenshot_20240619_141551_Instagram.jpg",
        "imagens/Screenshot_20240625_001821_WhatsApp.jpg",
        "imagens/20240420_110342.jpg",
        "imagens/20240501_223739.jpg",
        "imagens/20240501_223744(0).jpg",
        "imagens/20240507_174102 (1).jpg",
        "imagens/20240507_174107.jpg",
        "imagens/20240524_222145.jpg",
        "imagens/20240816_090445.jpg",
        "imagens/20240816_221019.jpg",
        "imagens/20240816_221021.jpg",
        "imagens/20240816_221029.jpg",
        "imagens/20240816_221031.jpg",
        "imagens/20240816_221041.jpg",
        "imagens/20240816_221044.jpg",
        "imagens/20240816_221045.jpg",
        "imagens/20240816_225432.jpg",
        "imagens/20240816_232310.jpg",
        "imagens/20240816_232312.jpg",
        "imagens/20240816_232313.jpg",
        "imagens/20240816_232317.jpg",
        "imagens/20240816_232321.jpg",
        "imagens/20240816_232333.jpg",
        "imagens/20240816_232348.jpg",
        "imagens/20240817_125502.jpg",
        "imagens/20240817_125510.jpg",
        "imagens/20240817_125521.jpg",
        "imagens/20240817_125535.jpg",
        "imagens/20240817_125551.jpg",
        "imagens/20240817_125554.jpg",
        "imagens/20240817_133335.jpg",
        "imagens/20240817_205422.jpg",
        "imagens/20240818_175107.jpg",
        "imagens/20240818_182936.jpg",
        "imagens/IMG_20240714_152753_918.jpg",
        "imagens/IMG_20240714_152753_985.jpg",
        "imagens/IMG_20240820_085408_326.jpg",
        "imagens/IMG_20240820_090010_857 (1).jpg",
        "imagens/IMG_20240820_090010_857.jpg",
        "imagens/IMG_20240820_090011_033.jpg"
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
