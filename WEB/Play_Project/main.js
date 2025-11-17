document.getElementById('surprise-btn').addEventListener('click', function() {
    const surpriseDiv = document.getElementById('surprise');
    surpriseDiv.classList.remove('hidden');
    document.getElementById('more-btn').classList.remove('hidden');
    this.style.display = 'none'; // Hide the button after click
});

document.getElementById('more-btn').addEventListener('click', function() {
    const extraSurprise = document.getElementById('extra-surprise');
    extraSurprise.classList.remove('hidden');
    this.style.display = 'none'; // Hide the more button after click
});
