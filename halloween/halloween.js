/* Parque Central · decoración de Halloween (capa aparte; para quitarla, borra las líneas de halloween.css y halloween.js en index.html).
   NIVEL: 1 sutil (telarañas + lámpara calabaza) · 2 media (+ murciélagos) · 3 completa (+ telaraña y arañita en la cabecera). */
(function () {
  var NIVEL = 3;   /* elegido por Paula: completa */
  /* Se apaga sola: desde el 1 de noviembre de 2026 (hora de Colombia) no se pone nada. */
  var HASTA = '2026-11-01';
  var hoy = new Intl.DateTimeFormat('en-CA', { timeZone: 'America/Bogota' }).format(new Date());   /* AAAA-MM-DD */
  if (hoy >= HASTA) return;
  document.documentElement.classList.add('hw-' + NIVEL);
  /* murciélago dibujado: alas arriba y alas abajo (la mitad derecha es el espejo de la izquierda) */
  var ARRIBA = 'M60 26 L57.5 17 L55 25 C51 24 47 20 43 12 L36 3 C33 9 26 12 18 10 L5 5 C9 12 9 19 5 25 C11 23 16 25 19 31 C23 27 29 27 32 33 C36 29 42 29 46 35 C50 33 54 35 56 41 L60 43 Z';
  var ABAJO = 'M60 26 L57.5 17 L55 25 C50 26 44 29 38 33 L24 40 L5 50 C11 47 15 46 18 47 C20 43 26 42 30 43 C32 39 38 38 42 40 C45 36 51 36 55 39 L60 42 Z';
  function espejo(d) { return d.replace(/(-?\d+(?:\.\d+)?) (-?\d+(?:\.\d+)?)/g, function (m, x, y) { return (120 - x) + ' ' + y; }); }
  function ala(d, c) { return '<svg class="' + c + '" viewBox="0 0 120 60"><path d="' + d + '"/><path d="' + espejo(d) + '"/></svg>'; }
  function murcielago() { return '<span class="hw-bat">' + ala(ARRIBA, 'ar') + ala(ABAJO, 'ab') + '</span>'; }
  function poner() {
    var hero = document.getElementById('hero');
    if (hero && !hero.querySelector('.hw-tela')) {
      hero.insertAdjacentHTML('beforeend',
        '<span class="hw-tela hw-tela--izq" aria-hidden="true"></span><span class="hw-tela hw-tela--der" aria-hidden="true"></span>' +
        '<span class="hw-murcielagos" aria-hidden="true">' + murcielago() + murcielago() + murcielago() + '</span>');
    }
    var cab = document.querySelector('#locales .b-cabeza');
    if (cab && !cab.querySelector('.hw-arana')) cab.insertAdjacentHTML('beforeend', '<span class="hw-arana" aria-hidden="true"><i></i></span>');
  }
  document.readyState === 'loading' ? document.addEventListener('DOMContentLoaded', poner) : poner();
})();
