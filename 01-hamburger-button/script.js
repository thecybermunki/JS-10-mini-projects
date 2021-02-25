const btnNav = document.getElementById('btnNav')
const navBtn = document.getElementById('navBtn')

btnNav.addEventListener('click', () => {
    navBtn.classList.toggle('active');
    btnNav.classList.toggle('active');
});