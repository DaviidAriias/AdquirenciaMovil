# Super app

## Indicaciones para el manejo y comportamiento de los componentes


### Archivos necesarios
* JS

    * En JS se está usando ECMAScript 6.
    * El archivo **main.js** contiene las funcionalidades generales del proyecto como desplegar contenido oculto, mostrar popUp, loaders y demás a manera de ejemplo para simular acciones.
        ```html
        <script src="../js/main.js"></script>
        ```

    * Si el HTML contiene un formulario es importante incluir el archivo **form.js** al final del documento, con él se crean los controladores para los componentes input, los dropdown, los textbox tipo moneda, los campos de dirección editables, etc...
        ```html
        <script src="../js/forms.js"></script>
        ```


* Imágenes
    * Se usan muchos formatos dependiendo el propósito de la imagen.
    * La carpeta **media** contiene todos los recursos de ilustraciones que contiene el proyecto.
    * La carpeta **_defaultIcons** contiene los iconos esenciales del proyecto esta carpeta no debería sufrir modificaciones.


* Estilo CSS
    * Se usa CSS3
    * La carpeta **css** contiene el archivo **style.css** el cual contiene todos los estilos necesarios para el proyecto y deberá ser llamado en todos los html.


* Vistas
    * Se usa HTML5.
    * Los html o vistas se encuentran en la carpeta **views**.


* Plugins
    * Los plugins usados se encuentran en la carpeta **plugins** con su respectivo nombre.


## SASS

* Se usa el procesador de sass por medio de archivos .scss
* Carptea base:
    * Contiene los reset.
    * Se crean las varaibles necesarias.    
    * Contiene mixing o funciones necesarias.
* Carpeta layout:
    * Contiene el contrainer de los html.
    * Contiene los media query.
    * Contiene los properties o clases que cambian pequeñas propiedades pero se usan de manera reptitiva como margenes, padings, tamaño de fuentes...
* Carpeta modules:
    * Contiene los estilos de lo modulos principales y se crean los nuevos modulos para el proyecto.
* En cada carpeta esta el archivo principal para realizar el import de los archivos creados, cada archivo deberá ser creado con un guion bajo antes del nombre EJ: (_archivo_.scss).
* A la hora de compilar los estilos se hace por medio del archivo styles.scss, se recomienda usar el siguiente comando en consola para su compilacion (sass --watch styles.scss:../css/styles.css --style compact).

### BEM
* En la mayoria de los estilos aplicados se usa la metodologia BEM (Bloque, Elemento, Modificador) y para la escritura de clases camel case, a la hora de aplicarlos en el sass (.scss) se debería aplicar de la siguiente manera:
    ```css
        .bloqueCamelCase{
            position: relative;
            &__elementoCamelCase{
                color: red;
                &--modificador{
                    @extend .bloqueCamelCase--modificador;
                    color: blue;
                }
            }
        }
    ```
    Los modificadores deberían tener el @extend de la clase principal para una mejor optimización a la hora de aplicarlas en el html
    EJ:
    ```html
        <div class="bloqueCamelCase">
            <p class="bloqueCamelCase__elementoCamelCase">elemento</p>
            <p class="bloqueCamelCase__elementoCamelCase--modificador">elemento con modificador</p>
        </div>
    ```
    Esto nos permite, no sobre cargar los html con clases o modificadores

### Fuentes
* Se usa roboto traida desde google fonts
* Menejo de fuentes en el sass:
    * Para agregar fuetes se recomienda usar el mixing "@include defaultFont(1);"
    el mixing me trae las fuentes por defecto en caso de requerir algun cambio se manda como parámetro
        EJ:
        ```css
            .clase{
                @include defaultFont(1, $fz: 20px);
            }
        ```
        La salida sería
        ```css
            .clase{
                font-family: "Roboto", sans-serif;
                font-size: 20px; // por defecto seria 14px
                line-height: initial;
                font-weight: 400;
                text-align: left;
                font-style: normal;
                color: #404040;
            }
        ```
        En caso de mandar como primer parámetro el 0, no dará como salida todas las propiedades de las fuentes si no las de los parámetros establecidos
        EJ:
        ```css
            .clase{
                @include defaultFont(0, $fz: 20px, $fw: medium);
            }
        ```
        La salida sería
        ```css
            .clase{
                font-size: 20px;
                font-weight: 500;
            }
        ```
    * los parámetros que recibe son los siguientes:
        * (0) or (1) -> el primer parámetro es obligatorio, me indica si trae todas las propiedades o no.
        * $ff -> font-family: -> string -> EJ:  $ff: 'Roboto', $ff: $roboto-condensed
        * $fz -> font-size: -> valor -> EJ: $fz: 14px, $fz: 1em, $fz: $font-h
        * $lh -> line-height: -> valor -> EJ: $lh: 4px, $lh: inherit
        * $fw -> font-weight: -> valor de la matriz $mapFW o valor -> EJ: $fw: medium, $fw: light, $fw: bold
        * $ta -> text-align: -> valor -> EJ: $ta: center, $ta: left 
        * $ts -> font-style: -> valor -> EJ: $ts: italic
        * $c -> color: -> valor -> EJ: $c: #ffffff, $c: rgba(0,0,0,1) $c: $text-enable

### properties
* En el scss _properties se crean clases para modificaiones que se suelen ser muy repetitivas, como poner márgenes, padings, tamaño de fuentes, peso de la fuente, etc...
 
    Algunos ejemplos:
    ```html
        <div class="mb-8px"></div> <!--Me crea una margen bottom de 8px-->
        <div class="pH-16px"></div> <!--Me crea padign a la derecha e izquierda de 16px-->
        <span class="fw-medium"></span> <!--Me pone la fuentes en medium-->
    ```


## Explicación de algunos componentes

### Botones:
* Para deshabilitar los **botones** existen 2 formas:

	1. Poniendo el atributo **disabled** en el botón, este no permite dar click al botón.
	    ```html
        <button type="button" class="button--primary" disabled>Aceptar</button>
        ```
	2. Agregando la clase **button--disabled** al botón, esta sí permite dar click al botón.
	    ```html
        <button type="button" class="button--primary button--disabled">Aceptar</button>
        ```
    Al remover la propiedad **disabled** o la clase **button--disabled** el botón queda activado.

### Helper:
* Se crea una etiqueta div que maneja 3 clases diferentes (**"helper"**, **"helper--long"**, **"helper--longDesktop"**)
    * **"helper"** me crea un helper normal.
    * **"helper--long"** cuando el texto es muy largo la clase me genera un **"leer más"** en móvil.
    * **"helper--longDesktop"** Cuando el texto es muy grande me genera un **"leer más"** en móvil y en desktop.

    ```html
        <div class="helper--long">
            <p class="helper__text">
                texto
            </p>
        </div>
    ```
    en los casos que tenga la clase **"helper--long"**, **"helper--longDesktop"** el JS genera una etiqueta **"a"** para crear el **"leer más"**.

### Input password:

* Hay 3 tipos de input para contraseñas:
    * El primero me permite ver y ocultar la contraseña al dar click en el icono adyacente al input con forma de ojo.
    * El segundo me permite ver el último campo digitado, en este campo a nivel de Js no se esta guardando el valor de la contraseña en ninguna variable, lo cual es importante tomar en cuenta para su desarrollo para enviar el parámetro al backEnd, "Este campo es el predeterminado para la OTP".
    * El tercero no me permite ver ningun carácter digitado.


### Dropdown o Select:

* Para agregar una nueva opción dentro del componente:

    * Dentro del div con la clase **options**
        ```html
        <div class="option">
        </div>
        ```

        Se agregan las opciones correspondientes a ese dropDown de la siguiente manera:

        En este ejemplo se agregarón 2 opciones al dropDown
         ```html
        <div class="option">
            <div class="option">
                <label class="clickDropdown">
                    <input type="radio" name="nombreDelSelect" value="opt1"> opcion 1
                </label>
            </div>
            <div class="option">
                <label class="clickDropdown">
                    <input type="radio" name="nombreDelSelect" value="opt2"> opcion 2
                </label>
            </div>
        </div>
        ```
    * Cada input debería tener en el atributo **name=""** el nombre característico del dropdown, si todos pertenecen al mismo dropDown deberían tener el mismo nombre para luego extraer su valor como se ve en el ejemplo de arriba.
    * Si hay varios dropDown los input de cada uno deberían tener en su atributo **name=""** valores diferentes como se muestra en el siguiente ejemplo:
        ```html
        <!--Dropdown 1-->
        <div class="input">
            <label for="" class="input__label">dropdown 1</label>
            <div class="dropdown">
                <div class="options">
                    <div class="option">
                        <label class="clickDropdown checked disable">
                            <!--Con su nombre en los input-->
                            <input type="radio" name="nombreDropDown1" value="0" checked=""> Seleccione una opción
                        </label>
                    </div>
                </div>
            </div>
        </div>

        <!--Dropdown 2-->
        <div class="input">
            <label for="" class="input__label">dropdown 2</label>
            <div class="dropdown">
                <div class="options">
                    <div class="option">
                        <label class="clickDropdown checked">
                            <!--Con su nombre en los input-->
                            <input type="radio" name="nombreDropDown2" value="0" checked=""> Seleccione una opción
                        </label>
                    </div>
                </div>
            </div>
        </div>
        ```

    * Si algún campo va disable se agrega la clase **disable** en el label como se muestra en el ejemplo anterior en el primer dropDown.

### Input para monedas
* Son creados con input tipo Tel para que salga en teclado numérico y se pueda concatenar con valores como **($)** y **(.)**.
* Validaciones y funcionalidades:
    * la validación para que permita solo números se encuentra en el documento **form.js** y está escrita de la siguiente manera:
        ```javascript
        inputMoney[i].addEventListener('keypress', function (e){
        let key = window.event ? e.which : e.keyCode;
            if (key < 48 || key > 57) {
                e.preventDefault();
            }
        }, false);
        ```
    * La función para que agregue **($)** y **(.)** se llama **fMoney()** se encuentra en el archivo **form.js**.
    * El componente acepta un string de 31 caracteres antes de romperse **($4.000.000.000.000.000.000.000)** la validación al sobrepasar este valor no está realizada.


### Input Search
* Arquitectura
    * El input en el html se encuentra de esta manera:

        ```html
        <div class="input">
            <label for="" class="input__label">Campo ingreso texto con buscador</label>
            <div class="contentSearch">
                <input type="text" class="input__textBoxSearch" value="Bogotá" placeholder="Ingrese un texto" onkeyup="searchCiudades(this)">
                <ul class="listSearch hidden">
                </ul>
            </div>
        </div>
        ```

    * Por medio de funciones al momento de cargar datos se indexa de esta manera al llenar la lista

        ```html
        <div class="input">
            <label for="" class="input__label">Campo ingreso texto con buscador</label>
            <div class="contentSearch">
                <input type="text" class="input__textBoxSearch filledOut input__textBoxSearch--filledOut" value="Bogotá" placeholder="Ingrese un texto" onkeyup="searchCiudades(this)">
                <ul class="listSearch">
                <li class="listSearch__option" onclick="fillOutSearch(this)">Chipaque</li>
                <li class="listSearch__option" onclick="fillOutSearch(this)">Chipatá</li></ul>
            </div>
        </div>
        ```
* Funciones
    * La función **searchCiudades()** se encuentra en el archivo **main.js**, el cual llama la funcion **fllenarLista()** que como segundo parámetro recibe un arreglo con los datos predictivos.
        ```javascript
        const searchCiudades = elemento => {
            // esta funcion me cambia los estilos del borde cuando esta diligenciado el input
            fInputTextbox(elemento);

            // esta funcion primero me borra la lista y luego me pinta una nueva segun lo escrito en el input
            // el segundo parametro es un arreglo con los datos de la lista se puso a manera de ejemplo
            fllenarLista(elemento, arregloCiudades);

            // esta funcion me cambia los estilos del input y de la lista segun si encuentra elemenetos dentro de la lista o no
            fControlador(elemento);
        }
        ```

### Modal o Pop Up
* Abrir y cerrar
    * Para abrir el modal se usa la función **showModal()** que requiere como parámetro el id de contenedor del modal, la función agrega la clase **is--scrollLocked** al body para bloquear scroll, y muestra el modal; esta función está en el archivo **main.js**.
    *  Para cerrar modal se usa la función **hideModal()** que requiere como parámetro el id de contenedor del modal, la función quita la clase **is--scrollLocked** al body para habilitar el scroll, y esconde el modal; esta función está en el archivo **main.js**

### Swiper Beneficios
* Archivos
    * Se encuentra dentro de la carpeta **plugins/swiper**
    * **JS:** el archivo que se llama en los html es el **swiper-bundle.min.js** los otros no son necesarios para la funcionalidad del swiper pero permiten un mejor entendimiento, este archivo se llama al final del html
        ```html
        <script src="../plugins/swiper/js/swiper-bundle.min.js"></script>
        ```
    * Cada html tiene un script al final para controlar el swiper.
        
    *  **CSS:** Se debe llamar los estilos del swiper que están en el archivo **swiper-bundle.min.css**.
        ```html
        <head>
            <link rel="stylesheet" href="../plugins/swiper/css/swiper-bundle.min.css">
        </head>
        ```

* La documentación del swiper se puede encontrar en <a>https://swiperjs.com/</a>
* La **versión** usada para este proyecto es la 6.4.1


### Info Adicional
* Clases útiles
    * **.hideen** esta clase oculta cualquier elemento, tiene una especificidad alta.
    * **.filledOut** esta clase es aplicada a la los input para resaltar que esta diligenciado.
    * **.button--diabled** esta clase pone estilos para un boton deshabilitado pero deja activo los pointer events.
    * **.select--mostrar** esta clase se usa para desplegar el contenedor de las opciones del dropdown.
    * **.is--scrollLocked** esta clase se usa para quitarle el scroll al body, se usa especialmente cuando se abre un modal.
    * **.invalidField** esta clase se usa para poner el borde rojo de cualquier input para asi identificar que existe un error a la hora de diligenciar un campo.

* Para mejorar accesibilidad es bueno mantener los input atados a los label con el for

# FIN