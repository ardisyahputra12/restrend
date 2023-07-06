const DrawerInitiator = {
  init({ button, drawer, content }) {
    button.addEventListener('click', (event) => {
      this._toggleDrawer(event, drawer);
      this._changeIconButton(button, drawer);
    });

    content.addEventListener('click', (event) => {
      this._closeDrawer(event, drawer);
      this._changeIconButton(button, drawer);
    });
  },

  _toggleDrawer(event, drawer) {
    event.preventDefault();
    event.stopPropagation();
    drawer.classList.toggle('open');
  },

  _closeDrawer(event, drawer) {
    event.stopPropagation();
    drawer.classList.remove('open');
  },

  _changeIconButton(button, drawer) {
    const buttonMenu = button;
    buttonMenu.innerHTML = drawer.classList.contains('open')
      ? '<img src="./icons/close-icon.svg" alt="close menu" tabindex="0">'
      : '<img src="./icons/hamburger-icon.svg" alt="open menu" tabindex="0">';
  },
};

export default DrawerInitiator;
