const cardsdescricao = {
    'html':'O HTML5 é a quinta versão da Linguagem de Marcação de Hipertexto (HTML), amplamente utilizada na criação de páginas da web',
    'css':'CSS (Cascading Style Sheets) é uma linguagem de estilo usada para controlar a apresentação e o layout de elementos em páginas da web',
    'js':'JavaScript (JS) é uma linguagem de programação amplamente utilizada para desenvolvimento web. É uma linguagem de script do lado do cliente, o que significa que é executada no navegador da web do usuário',
    'bootstrap':'O Bootstrap é um popular framework de front-end de código aberto desenvolvido pelo Twitter. Ele fornece um conjunto de estilos predefinidos, componentes e scripts JavaScript para simplificar o processo de criação de interfaces web responsivas e atraentes',
    'firebase':' Realtime Database e Authentication. O Firebase é uma plataforma de desenvolvimento de aplicativos móveis e web baseada na nuvem, adquirida pela Google. Ele oferece uma ampla gama de serviços e recursos para simplificar o desenvolvimento, o crescimento e a manutenção de aplicativos',
    // criando variavel do tipo objeto
}

const  cardhabilidades = document.querySelectorAll('.cardsp')

cardhabilidades.forEach(card => {
    card.addEventListener('mouseover',()=>{
        console.log('teste')
        const imgsrc = card.querySelector('.img-card').getAttribute('src')
        const cardname = imgsrc.substring(imgsrc.lastIndexOf('/') +1, imgsrc.lastIndexOf('.'))
        console.log(cardname)
        const descricao = cardsdescricao[cardname] || "descrição não encontrada"
        document.getElementById("p").textContent = descricao
    })

})

document.querySelector(".cardshabilidades").addEventListener("mouseout", ()=> {
    document.getElementById("p").textContent = ""
})