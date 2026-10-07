const progress = document.querySelector('.scroll-progress span');
const updateProgress = () => {
  const total = document.documentElement.scrollHeight - window.innerHeight;
  progress.style.width = `${total ? (window.scrollY / total) * 100 : 0}%`;
};
window.addEventListener('scroll', updateProgress, { passive: true });
updateProgress();
