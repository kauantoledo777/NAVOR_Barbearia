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





