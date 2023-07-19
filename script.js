const OPTIONS = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'b31870c63dmshbcb61169370ca60p16c293jsn42fa3f8cea03',
      'X-RapidAPI-Host': 'ip-reputation-geoip-and-detect-vpn.p.rapidapi.com'
    }
  };
  
  const fetchIpInfo = async (ip) => {
    const url = `https://ip-reputation-geoip-and-detect-vpn.p.rapidapi.com/?ip=${ip}`;
  
    try {
      const response = await fetch(url, OPTIONS);
      const result = await response.text();
      return result;
    } catch (error) {
      console.error(error);
      return null;
    }
  };
  
  const $form = document.querySelector('#form');
  const $input = document.querySelector("input[type='text']");
  const $submit = document.querySelector("#submit");
  const $results = document.querySelector("#results");
  $results.classList.add('hidden');
  
  $form.addEventListener("submit", async (event) => {
    event.preventDefault();
    const { value } = $input;
    if (!value) return;
  
    $submit.setAttribute('disabled', '');
    $submit.setAttribute('aria-busy', 'true');
  
    const ipInfo = await fetchIpInfo(value);
  
    if (ipInfo) {
        $results.innerHTML = ipInfo;
        // Si hay resultados, eliminamos la clase .hidden para mostrarlos
        $results.classList.remove('hidden');
      } else {
        // Si no hay resultados, agregamos la clase .hidden para ocultarlos
        $results.classList.add('hidden');
      }
    
  
    $submit.removeAttribute('disabled');
    $submit.removeAttribute('aria-busy');
  });