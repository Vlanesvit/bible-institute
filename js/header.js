function menuFunction() {
	const menus = document.querySelectorAll('.header__menu');

	// Бургер-кнопка
	function burger() {
		menus.forEach(menu => {
			const menuBurgerBtns = menu.querySelectorAll('.menu__burger');
			if (menuBurgerBtns) {
				menuBurgerBtns.forEach(btn => {
					// Открываем меню
					btn.addEventListener("click", function (e) {
						e.preventDefault();
						menuToggle("menu-open");
					});
				});
			}
		});
	};
	burger()

	//========================================================================================================================================================
	// Функции открытия меню с блокировкой скролла
	function menuToggle(classes) {
		bodyLockToggle();
		document.documentElement.classList.toggle(classes);
	}
}
menuFunction()
