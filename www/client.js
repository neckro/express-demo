;(function () {

  const appMount = document.getElementById('app');
  const button = document.getElementById('interface');
  button.onclick = updateCounter;

  function updateCounter() {
    fetch('/api/counter', { method: 'GET' })
      .then(response => {
        if (response.ok) {
          response.text()
            .then(body => {
              appMount.innerHTML = `You have clicked the button ${body} times.`;
            })
        }
      })
  }

  updateCounter();

})();
