function openModal(day) {
  document.getElementById('modal-title').innerText = 'Advent Day ' + day;
  document.getElementById('modal-text').innerHTML = '<h4>Day of Self Care!<br><br> A mani pedi at a place of your choice <br>💅</h4>';
  document.getElementById('modal').style.display = 'block';
}
function closeModal() {
  document.getElementById('modal').style.display = 'none';
}