
const menuButton=document.querySelector('.menu-button');const nav=document.querySelector('.main-nav');if(menuButton&&nav){const closeMenu=()=>{nav.classList.remove('is-open');menuButton.setAttribute('aria-expanded','false');document.body.classList.remove('menu-open')};menuButton.addEventListener('click',()=>{const open=menuButton.getAttribute('aria-expanded')==='true';menuButton.setAttribute('aria-expanded',String(!open));nav.classList.toggle('is-open',!open);document.body.classList.toggle('menu-open',!open)});nav.querySelectorAll('a').forEach(link=>link.addEventListener('click',closeMenu));document.addEventListener('click',e=>{if(nav.classList.contains('is-open')&&!nav.contains(e.target)&&!menuButton.contains(e.target))closeMenu()});window.addEventListener('resize',()=>{if(window.innerWidth>980)closeMenu()});document.addEventListener('keydown',e=>{if(e.key==='Escape')closeMenu()})}
document.querySelectorAll('.faq-question').forEach(button=>button.addEventListener('click',()=>{const item=button.closest('.faq-item');const open=item.classList.toggle('open');button.setAttribute('aria-expanded',String(open))}));

const dropdown = document.querySelector(".nav-dropdown");
const dropdownToggle = document.querySelector(".nav-dropdown-toggle");

if (dropdown && dropdownToggle) {
  dropdownToggle.addEventListener("click", () => {
    const isOpen = dropdown.classList.toggle("is-open");

    dropdownToggle.setAttribute(
      "aria-expanded",
      isOpen ? "true" : "false"
    );
  });
}