let slideAtual = 0;
const slides = document.getElementById("slides");
const imagens = slides.querySelectorAll("img");
// seleciona o id do formulario
const formulario = document.getElementById("form-agendamento");
formulario.addEventListener('submit', async (event) => {
   // prevenção de envio de formulario
   event.preventDefault();
   // 3. Captura os valores digitados
   const dadosAgendamentos = {
      especialista: document.getElementById('especialista').value,
      escolhaData: document.getElementById('selecionar-data').value,
      nome: document.getElementById('nome').value,
      servico: document.getElementById('servico').value,
      escolhaHora: document.getElementById('selecionar-horario').value,
      telefone: document.getElementById('telefone').value
   }
   console.log('dados ok: ', dadosAgendamentos);
});
function mudarSlide(direcao) {
    slideAtual += direcao;
    // Se passar da última imagem, volta para a primeira
    if (slideAtual >= imagens.length) {
        slideAtual = 0;
    }
    // Se voltar antes da primeira, vai para a última
    if (slideAtual < 0) {
        slideAtual = imagens.length - 1;
    }
    // Move as imagens horizontalmente
    slides.style.transform = `translateX(-${slideAtual * 100}%)`;
}
function mostrarAlerta() {
    alert("Agendamento realizado com sucesso!");
    window.location.reload();
    document.getElementById('especialista').value = '';
    document.getElementById('selecionar-data').value = '';
    document.getElementById('nome').value = '';
    document.getElementById('servico').value = '';
    document.getElementById('selecionar-horario').value = '';
    document.getElementById('telefone').value = '';
}