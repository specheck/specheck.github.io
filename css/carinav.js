const searchForm = document.getElementById('search-form');
searchForm.addEventListener('submit', function(event) {
  // Block form submission
  event.preventDefault();

  // Ambil nilai dari input pencarian
  const searchTerm = event.target.elements.namedItem('input').value;

  // Lakukan proses pencarian (misalnya, panggil API atau filter data)
  search(searchTerm);
});
function search(term) {
    // Ganti URL yang sedang ditampilkan dengan URL file HTML yang ingin dibuka
    window.location.assign(`/search/${term}.html`);
  }
  