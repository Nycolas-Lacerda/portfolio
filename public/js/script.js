function showContent(contentId) {
    // Esconde todos os conteúdos
    const contents = document.querySelectorAll('.content');
    contents.forEach(content => content.style.display = 'none');
    
    // Mostra o conteúdo correspondente ao ID clicado
    document.getElementById(contentId).style.display = 'block';
}
