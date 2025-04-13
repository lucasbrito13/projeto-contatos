document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('contatoForm');
    const mensagemStatus = document.getElementById('mensagemStatus');
  
    form.addEventListener('submit', function (event) {
      event.preventDefault();
  
      const nome = document.getElementById('nome').value.trim();
      const email = document.getElementById('email').value.trim();
      const mensagem = document.getElementById('mensagem').value.trim();
  
      if (!nome || !email || !mensagem) {
        mensagemStatus.textContent = 'Por favor, preencha todos os campos.';
        mensagemStatus.style.color = 'red';
        return;
      }
  
     
      mensagemStatus.textContent = 'Enviando...';
      mensagemStatus.style.color = '#102a43';
  
      setTimeout(() => {
        mensagemStatus.textContent = 'Mensagem enviada com sucesso!';
        mensagemStatus.style.color = 'green';
        form.reset();
      }, 1000);
    });
  });
  