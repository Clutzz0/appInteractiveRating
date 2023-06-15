function toggleButtonColor(event) {
  const button = event.target;
  const ratingButtons = document.querySelectorAll('.rating-num')

  ratingButtons.forEach((btn) => {
    if (btn != button) {
      btn.classList.remove('active');
    }
  });

  button.classList.toggle('active');
}

function showSelectedRating() {
  const activeButton = document.querySelector('.rating-num.active')
  const ratingSelected = document.querySelector('.rating-selected-js')

  if (activeButton) {
    const selectedRating = activeButton.innerText;
    ratingSelected.textContent = `You selected ${selectedRating} out of 5.`;
  } else {
    ratingSelected.textContent = 'Oops, looks like you forgot to rate.';
  }

  const ratingComponent = document.querySelector('.rating-component-js')
  const thanksComponent = document.querySelector('.thanks-component-js')

  ratingComponent.style.display = 'none';

  thanksComponent.style.display = 'block'
}