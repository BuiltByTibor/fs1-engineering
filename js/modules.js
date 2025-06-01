// Module functionality
document.addEventListener('DOMContentLoaded', () => {
  // Toggle flashcards
  document.querySelectorAll('.toggle-flashcard').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const card = e.target.closest('.module-flashcard');
      const answer = card.querySelector('.flashcard-answer');
      answer.classList.toggle('hidden');
      btn.textContent = answer.classList.contains('hidden') ? 'Show Answer' : 'Hide Answer';
    });
  });

  // Toggle solutions
  document.querySelectorAll('.toggle-solution').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const solution = e.target.previousElementSibling;
      solution.classList.toggle('hidden');
      btn.textContent = solution.classList.contains('hidden') ? 'Show Solution' : 'Hide Solution';
    });
  });

  // Final test submission
  document.querySelectorAll('.final-test button').forEach(btn => {
    btn.addEventListener('click', () => {
      alert('Test submitted! (This would connect to a backend in production)');
    });
  });
});
