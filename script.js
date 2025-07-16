function toggleMenus() {
    if(document.getElementById('menuA').classList.contains('hidden')){
      document.getElementById('menuA').classList.remove('hidden');
      document.getElementById('menuB').classList.add('hidden');
      icon.className = 'fa-solid fa-arrow-right icon';

    }else{
      document.getElementById('menuA').classList.add('hidden');
      document.getElementById('menuB').classList.remove('hidden');
      icon.className = 'fa-solid fa-arrow-left icon';
    }
}