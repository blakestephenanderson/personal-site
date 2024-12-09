document.addEventListener('DOMContentLoaded', function() {
  const modal = document.getElementById('gallery-modal');
  const modalImg = modal.querySelector('.modal-content-img');
  const modalCaption = modal.querySelector('.modal-caption');
  const closeModal = modal.querySelector('.close-modal');

  document.querySelectorAll('.gallery-thumb').forEach(thumb => {
    thumb.addEventListener('click', () => {
      modal.style.display = 'block';
      modalImg.src = thumb.src;
      modalCaption.textContent = thumb.getAttribute('data-caption');
    });
  });

  closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
  });

  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.style.display = 'none';
    }
  });
});
