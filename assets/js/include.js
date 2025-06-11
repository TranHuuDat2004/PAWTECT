function includeHTML(callback) {
    const elements = document.querySelectorAll('[data-include]');
    let loadedCount = 0;
  
    elements.forEach(el => {
      const file = el.getAttribute('data-include');
      fetch(file)
        .then(response => {
          if (!response.ok) throw new Error(`Error loading ${file}`);
          return response.text();
        })
        .then(data => {
          el.innerHTML = data;
          loadedCount++;
          if (loadedCount === elements.length && callback) {
            callback();
          }
        })
        .catch(err => {
          el.innerHTML = `<p style="color:red">${err}</p>`;
          loadedCount++;
          if (loadedCount === elements.length && callback) {
            callback();
          }
        });
    });
}
  