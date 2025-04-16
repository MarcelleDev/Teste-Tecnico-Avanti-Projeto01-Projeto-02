document.addEventListener('DOMContentLoaded', () => {
    const btnBusca = document.getElementById('btnBusca');
    const campoBusca = document.getElementById('campoBusca');
    const mensagemBusca = document.getElementById('mensagemBusca');
  
    btnBusca.addEventListener('click', () => {
      const termo = campoBusca.value.trim();
      if (termo !== "") {
        mensagemBusca.textContent = `Você buscou por: '${termo}'`;
      } else {
        mensagemBusca.textContent = "";
      }
    });
  });
  