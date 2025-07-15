  function showMenu(menuId) {
    document.querySelectorAll('.menu').forEach(menu => {
      menu.classList.remove('active');
    });
    document.getElementById(menuId).classList.add('active');
  }