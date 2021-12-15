var menu = 
'<ul>' + 
'   <li><a class=href="index.html">Pagină principală</a></li>' +
'   <li><a href="about.html">Despre</a></li>' +
'   <li><a href="#">Zodiac European</a>' +
'       <ul>' +
'           <li><a href="astro-map.html">Hartă astrologică</a></li>' +
'           <li><a href="ascendant.html">Ascendent</a></li>' +
'           <li><a href="planets.html">Planete</a></li>' +
'           <li><a href="houses.html">Case</a></li>' +
'           <li><a href="zodiac-signs.html">Zodii</a></li>' +
'       </ul>' +
'   </li>' +
'   <li><a href="#">Zodiac Chinezesc</a>' +
'   <ul>' +
'       <li><a href="chinease-legend.html">Legenda</a></li>' +
'       <li><a href="chinease-zodiac.html">Zodii</a></li>' +
'       <li><a href="calendar.html">Calendarul Chinezesc</a></li>' +
'       <li><a href="chinease-compatibilities.html">Compatibilitate</a></li>' +
'       <li><a href="four-columns.html">Cei Patru Stâlpi ai Destinului</a></li>' +
'   </ul>' +
'</li>' +
'<li><a href="floral-zodiac.html">Zodiac Românesc</a></li></ul>';

(function(window, document, undefined){
    window.onload = init;
      function init(){
        var nav = document.getElementById('main-nav');
        nav.innerHTML = menu;
      }
    
})(window, document, undefined);

