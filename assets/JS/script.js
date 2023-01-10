const header = document.querySelector("header");
window.addEventListener ("scroll", function() {
	header.classList.toggle ("sticky", window.scrollY > 100);
});

let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = () => {
	menu.classList.toggle('bx-x');
	navlist.classList.toggle('open');
};

window.onscroll = () => {
	menu.classList.remove('bx-x');
	navlist.classList.remove('open');
};

/*== Qualification tab ==*/
const tabs = document.querySelectorAll('[data-target]'),
  tabContents = document.querySelectorAll('[data-content]')

  tabs.forEach(tab =>{
    tab.addEventListener('click', () =>{
      const target = document.querySelector(tab.dataset.target)

      tabContents.forEach(tabContent =>{
        tabContent.classList.remove('qualification_active')
      })
      target.classList.add('qualification_active')

      tabs.forEach(tab =>{
        tab.classList.remove('qualification_active')
      })
      tab.classList.add('qualification_active')
    })
  })
