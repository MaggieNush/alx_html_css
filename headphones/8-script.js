document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.getElementById('hamburger');
  const navList = document.getElementById('nav-list');

  if (hamburger && navList) {
    hamburger.addEventListener('click', () => {
      navList.classList.toggle('active');
    });
  } else {
    console.error('Hamburger or nav-list not found in DOM.');
  }
});
