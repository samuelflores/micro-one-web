const button = document.querySelector('.menu-toggle');
const nav = document.querySelector('#navigation');
if (button && nav) {
  button.hidden = false;
  const close = () => { button.setAttribute('aria-expanded', 'false'); nav.classList.remove('is-open'); };
  button.addEventListener('click', () => {
    const open = button.getAttribute('aria-expanded') !== 'true';
    button.setAttribute('aria-expanded', String(open));
    nav.classList.toggle('is-open', open);
  });
  document.addEventListener('keydown', e => { if (e.key === 'Escape' && nav.classList.contains('is-open')) { close(); button.focus(); } });
  nav.addEventListener('click', e => { if (e.target.closest('a')) close(); });
  window.matchMedia('(min-width: 801px)').addEventListener('change', close);
}
