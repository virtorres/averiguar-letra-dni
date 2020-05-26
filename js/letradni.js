/* Averiguar letra del DNI
----------------------------------------------------------------
Queremos averiguar la letre de un DNI partiendo solo del número del usuario
*/

// Primero le pido al usuario su DNI sin la letra

var numerodni = prompt('Escribe tu número de DNI sin la letra');

// Para averiguar la letra que le corresponde empiezo creando una función



    /*Ahora defino la lista de letras que maneja la Policía.
    Como es una lista que no se puede variar (ni el orden ni las letras) creo una constante en vez de una variable
    */

    const letras = 'TRWAGMYFPDXBNJZSQVHLCKET';

    /* Hay que coger el número de DNI que ha facilitado el usuario y dividirlo entre 23, que es el número de letras que hay sin repetirse
    Para la división creo una variable */

    var division = numerodni%23;

    /*Para averiguar la letra, hay que coger el resto del resultado de la división, y que es lo que nos da el número de posición de la letra correcta
    Utilizo el método 'substring' para indicar que ha de coger ese resto 
    */

    var letradni = letras.substring(division,division+1);

    //Para que se muestre en resultado en pantalla y en consola
    document.write(`Para el DNI ${numerodni} la letra es ${letradni}`);
    console.log(`Para el DNI ${numerodni} la letra es ${letradni}`);

  
