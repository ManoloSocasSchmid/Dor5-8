var arrayPeliculas = [];
var arrayVotantes = [];
var descripcionGrafico = "";
var hello;
  var data;
  var options;
  var chart;

function Votante(config){
  this.peli = config.peli;
  this.nombre = config.nombre || "noName";
  this.email = config.email || "example@mail.com";
  this.numero = config.numero || 000000000;
}

function cargarPelis() {
  hello = {
    "Nombre": "Star Wars - La amenaza fantasma",
    "Imagen": "img/sw-1",
    "Anio": "1999",
    "Sinopsis": "La República Galáctica está sumida en el caos.Los impuestos de las rutas comerciales a los sistemas estelares exteriores están en disputa. Esperando resolver el asunto con un bloqueo de poderosas naves de guerra, la codiciosa Federación de Comercio hadetenido todos los envíos al pequeño planeta de Naboo. Mientras el Congreso de la República debate interminablemente esta alarmante cadena de acontecimientos, el Canciller Supremo ha enviado en secreto a dos Caballeros Jedi, guardianes de la paz y la justicia en la galaxia, para resolver el conflicto...."
  };
  arrayPeliculas.push(hello);
  hello = {
    "Nombre": "Star Wars - El ataque de los clones",
    "Imagen": "img/sw-2",
    "Anioo": "2002",
    "Sinopsis": "En el Senado Galactico. reina la inquietud.Variosmiles de sistemas solareshan declarado su intención de abandonar la República. Este movimiento separatista, liderado por el misteriosoConde Dooku, ha provocado que al limitado número de    Caballeros Jedi les resulte  difícil mantener la paz y el  orden en la galaxia.  La senadora Amidala,    la    antigua reina de Naboo, regresa al Senado Galácticopara dar su voto en la crítica cuestión de crear un EJÉRCITO DE LA REPÚBLICA que ayude a los desbordados    Jedi… "
  };
  arrayPeliculas.push(hello);
  hello = {
    "Nombre": "Star Wars - La venganza de los Sith",
    "Imagen": "img/sw-3",
    "Anio": "2005",
    "Sinopsis": "¡Guerra! La República se    desmorona bajo los ataques del    despiadado Lord Sith,    el Conde    Dooku.Hay héroes en ambos    bandos.El mal está por doquier.    En una contundente jugada,    el    diabólico líder droide,    el General    Grievous,    ha irrumpido en la    capital de la República y ha    secuestrado al Canciller    Palpatine,    líder del Senado    Galáctico.    Mientras el ejército droide    separatista trata de huir de la    capital sitiada con su valioso rehén dos Caballeros Jedi    lideran una misión desesperada    para rescatar al Canciller    cautivo...."
  };
  arrayPeliculas.push(hello);
  hello = {
    "Nombre": "Star Wars - Una nueva esperanza",
    "Imagen": "img/sw-4",
    "Anio": "1977",
    "Sinopsis": "Nos encontramos en un    periodo de guerra civil.Las    naves espaciales rebeldes,    atacando desde una base    oculta,    han logrado su    primera victoria contra    el malvado Imperio    Galáctico.    Durante la batalla,    los    espías rebeldes han    conseguido apoderarse de    los planos secretos del    arma total y definitiva del    Imperio,    la ESTRELLA    DE LA MUERTE,    una estación espacial    acorazada,    llevando en sí    potencia suficiente para    destruira un planeta    entero.    Perseguida por los    siniestros agentes del    Imperio,    la Princesa Leia    vuela hacia su patria,    a    bordo de su nave espacial,    llevando consigo los    planos robados,    que    pueden salvar a su puebloy devolver la libertad a la  galaxia..."
  };
  arrayPeliculas.push(hello);
  hello = {
    "Nombre": "Star Wars - El imperio contraataca",
    "Imagen": "img/sw-5",
    "Anio": "1980",
    "Sinopsis": "Son tiempos adversos para la    rebelión.Aunque la Estrella de    la Muerte ha sido destruida,    las tropas imperiales han    hecho salir a las fuerzas    rebeldes de sus bases ocultas    y las han persiguen a través de    la galaxia.    Tras escapar de la terrible    Flota Imperial,    un grupo de    guerreros de la libertad,    encabezados por Luke    Skywalker,    ha establecido    una nueva base secreta    en el remoto mundo helado    de Hoth.    El malvado Lord Darth Vader,obsesionado por encontrar al    joven skywalker,    ha eviado    miles de sondas espaciales    hacía las infinitas distancias    del espacio....    "
  };
  arrayPeliculas.push(hello);
  hello = {
    "Nombre": "Star Wars - El retorno del Jedi",
    "Imagen": "img/sw-6",
    "Anio": "1983",
    "Sinopsis": "Luke Skywalker ha regresado a    Tatooine,    su planeta de origen,    para intentar rescatar a su    amigo Han Solo de las garras    del malvado Jabba,    el Hutt.    Pero Luke ignora que el IMPERIO    GALÁCTICO ha comenzado en    secreto la construcción de una    nueva estación espacial armada,    más poderosa que la temida    Estrella de la Muerte.    Una vez terminada,  este    arma suprema significará la    aniquilación del pequeño grupo    de rebeldes que lucha para    restaurar la libertad en la    galaxia....    "
  };
  arrayPeliculas.push(hello);
  hello = {
    "Nombre": "Star Wars - El despertar de la fuerza",
    "Imagen": "img/sw-7",
    "Anio": "2014",
    "Sinopsis": "Luke Skywalker ha desaparecido.    En su ausencia,    la siniestra    PRIMERA ORDEN ha surgido de    las cenizas del Imperio y no    descansará hasta que Skywalker,    el último Jedi,    haya sido    destruido.    Con el apoyo de la REPÚBLICA,    la General Leia Organa dirige    una valiente RESISTENCIA.    Desesperadamente busca    a su hermano Luke con el fin    de obtener su ayuda para    restaurar la paz y la justicia    en la galaxia.    Leia ha enviado a su piloto    más audaz en una misión secreta    a Jakku,    donde un viejo aliado    ha descubierto una pista  del paradero de Luke....    "
  };
  arrayPeliculas.push(hello);
  hello = {
    "Nombre": "Star Wars - Los ultimos jedis",
    "Imagen": "img/sw-8",
    "Anio": "2017",
    "Sinopsis": "Hace mucho tiempo en una galaxia muy, muy lejana [...] La PRIMERA ORDEN impera. Luego de diezmar a la pacífica República, el Líder Supremo Snoke ahora envía a sus despiadadas legiones a asumir el control militar de la galaxia. [...] Sólo la general Leia Organa y su grupo de combatientes de la RESISTENCIA se oponen a la creciente tiranía, convencidos de que el Maestro Jedi Luke Skywalker regresará y restaurará la chispa de esperanza en la lucha. [...] Pero la Resistencia ha sido expuesta. Mientras la Primera Orden se dirige hacia la base rebelde, los valientes héroes organizan un desesperado escape...."
  };
  arrayPeliculas.push(hello);
  hello = {
    "Nombre": "Star Wars - The clone wars(Pelicula)",
    "Imagen": "img/sw-cw",
    "Anio": "2008",
    "Sinopsis": "Hace mucho tiempo, en una galaxia muy, muy lejana [...] Una Galaxia dividida! Después de obtener la victoria en la Batalla de Geonosis, el ejército de droides del Conde Dooku ha tomado el control de las principales rutas del hiperespacio, aislando a la República de gran parte de su ejército de clones. Con pocos clones disponibles, los generales Jedi no pueden controlar el Borde Exterior conforme más y más planetas se unen a los Separatistas de Dooku. Mientras los Jedi están ocupados con una Guerra, no queda nadie para resguardar la paz. El caos y el crimen se extienden, y los inocentes se vuelven víctimas en una galaxia sin ley. El hijo de Jabba el Hutt ha sido secuestrado por una banda de piratas rivales. Desesperado por salvar a su hijo, Jabba envía una señal de auxilio, una señal que los Jedi responden con cautela......"
  };
  arrayPeliculas.push(hello);
  hello = {
    "Nombre": "Harry Potter & Der Stein des weissen",
    "Imagen": "img/potter",
    "Anio": "2001",
    "Sinopsis": "Harry Potter es un niño huérfano que vive con sus únicos parientes vivos, la familia Dursley, en un barrio residencial inglés. En su cumpleaños número 11, Harry es visitado por un misterioso individuo llamado Rubeus Hagrid, quien le revela que realmente él es un mago bastante popular en el mundo mágico por haber sobrevivido al ataque mortal de Lord Voldemort cuando sólo tenía un año de edad. Tras haber asesinado a sus padres (James y Lily Potter), Voldemort intentó atacar a Harry pero no consiguió matarlo, dejándole solamente una cicatriz en forma de rayo sobre su frente. Sabiendo esto, Hagrid acompaña a Harry para comprar lo necesario con tal de comenzar su formación en el Colegio Hogwarts de Magia y Hechicería. Sin el consentimiento de sus tíos  "
  };
  arrayPeliculas.push(hello);
}

$(document).ready(function() {
  cargarPelis()
  createDatas();
});

function createDatas(){
  var menu = $("<div id='menu' tabindex='0'></div>");
  var cabecera = $("<h3>Si desea participar en el sorteo de dos entradas del cine rellene los campos a continuacion.</h3>");
  var campo1 = $("<div><label for='nombre' value='Nombre:'> <input type='text' id='nombre' placeholder='Introduce tu nombre'/></div> ");
  var campo2 = $("<div><label for='email' value='Email:'> <input type='text' id='email' placeholder='Introduce tu email'/></div> ");
  var campo3 = $("<div><label for='telef' value='Telefono:'> <input type='text' id='telef' placeholder='Introduce tu telefono'/> </div>");
  var button1 = $("<div><button type='button' class='btn btn-success' id='boton1' onclick='votacionCompleta(true)' aria-label='Pulse enter sus datos y participar en el sorteo'>Aceptar </button><button id='button2' type='button' class='btn btn-danger' aria-label='Pulse enter para saltar el sorteo y acceder directamente a los resultados' onclick='votacionCompleta(false)'>Cancelar </button></div>");
  menu.append(cabecera,campo1,campo2,campo3,button1);
  $("#contenedor").append(menu);

}
function votacionCompleta(participar){
 var nombre;
 var telefono;
 var email;
 var votante;
 var peli = load("peliculaVotada");

  if(participar == true){
      nombre = $("#nombre").val();
      email = $("#email").val();
      telefono = $("#telefono").val();
      votante = new Votante({
        peli:peli,
        nombre:nombre,
        email:email,
        numero:telefono
      });
  }
  else{
     votante = new Votante({
       peli:peli
     });
  }
  addVotante(votante);
  borrarInterfaz();
  crearSegundoInterfaz();
  //llamar ultima votacion añadir a "JSON" + toda la pesca nombre etc ;
  // llamar la api de google
}

function borrarInterfaz(){
  $("#contenedor").children().remove();
}

function addVotante(votante){
  arrayVotantes = load("listaVotantes");
  if(arrayVotantes == null){
    arrayVotantes = [];
    arrayVotantes.push(votante);
  }
  else{
    arrayVotantes.push(votante);
  }
    save(arrayVotantes,"listaVotantes");
}

function crearSegundoInterfaz(){

  var dropDown = $("<div class='dropdown'><button class='btn btn-secondary' aria-label='Pulse enter para mostrar un grafico de barras' type='button' id='dropdownMenuButton' onclick='barGraf(),false' >Grafico de Barras</button><button class='btn btn-secondary' type='button'  aria-label='Pulse enter para mostrar un grafico circular ' id='dropdownMenuButton2' onclick='pieGraf(),false' >Grafico de Tartas</button></div>");
  $("#contenedor").append(dropDown);
  google.charts.load('current', {'packages':['corechart']});
  google.charts.setOnLoadCallback(drawChart);
  descripcion();
  var descripPeli = $("<p id='helloGrafic' hidden>Resultado de la votacion : "+descripcionGrafico+"</p>");
  $("#contenedorGrafico").after(descripPeli);
  barGraf();
}

function descripcion(){
  var contador = 0;
    var contadorTotal = 0;
    var descripcion = "";

   for (var i = 0; i < arrayPeliculas.length; i++) {
     for (var j = 0; j < arrayVotantes.length; j++) {
       if(arrayVotantes[j].peli == i){
         contador++;
        contadorTotal ++;
       }
     }
     descripcion = descripcion + "La pelicula : "+arrayPeliculas[i].Nombre+ " ha optenido "+contador+" votos.";
     contador = 0;
   }
   descripcionGrafico = "El total de votos es de "+contadorTotal+" de los cuales " + descripcion;
}

function drawChart() {
    var contador = 0;
      var contadorTotal = 0;
      var descripcion = "";
      // Create the data table.
      data = new google.visualization.DataTable();
      data.addColumn('string', 'Pelicula');
      data.addColumn('number', 'Cantidad de votos');
     for (var i = 0; i < arrayPeliculas.length; i++) {
       for (var j = 0; j < arrayVotantes.length; j++) {
         if(arrayVotantes[j].peli == i){
           contador++;
          contadorTotal ++;
         }
       }

       data.addRow([arrayPeliculas[i].Nombre,contador]);
       descripcion = descripcion + "La pelicula :"+arrayPeliculas[i].Nombre+" ha optenido "+contador+" votos. ";
       contador = 0;
     }
     descripcionGrafico = "El total de votos es de "+contadorTotal+" . De los cuales " + descripcion ;


      // Set chart options
      options = {'title':'Resultado votacion top peliculas'};

      // Instantiate and draw our chart, passing in some options.
      chart = new google.visualization.BarChart(document.getElementById('contenedorGrafico'));
        chart.draw(data, options);
    }

function barGraf(){
  chart = new google.visualization.BarChart(document.getElementById('contenedorGrafico'));
  chart.draw(data, options);
}

function pieGraf(){
  chart = new google.visualization.PieChart(document.getElementById('contenedorGrafico'));
  chart.draw(data, options);
}
