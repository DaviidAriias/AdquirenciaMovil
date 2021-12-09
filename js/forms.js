//#region declaracion de variables
//#region funciones controlador de input ===============================================================================

window.addEventListener('click', function(e){ 

    //click fuera de los search
    let outInputSearh = document.getElementsByClassName('contentSearch');

    for(let i = 0; i < outInputSearh.length; i++){
        let elementList = outInputSearh[i].lastElementChild;

        if (outInputSearh[i].contains(e.target)){ 
        } else{ 
            deleteChildren(elementList);
            fControlador(elementList.previousElementSibling);
        } 
    }

    //click fuera de los dropDown o select
    let outOptions = document.getElementsByClassName('options')

    for(let i = 0; i < outOptions.length; i++){


        

        if (outOptions[i].contains(e.target)){ 
        } else{ 
            //outOptions[i].firstElementChild.firstElementChild.firstElementChild.checked;

            if(outOptions[i].parentElement.classList.contains('dropdown--mostrar')){
                for(let j = 0; j < outOptions[i].children.length; j++){
                    let inputRadio = outOptions[i].children[j].firstElementChild.firstElementChild;
                    if(inputRadio.checked){
                        inputRadio.parentElement.classList.add('checked')
                    }
                }
                outOptions[i].parentElement.classList.remove('dropdown--mostrar');
            }
        } 
    }
    
}); 


//cambia el estilo si el campo esta lleno
const fInputTextbox = elemento => {
    if(elemento.value == ''){
        elemento.classList.remove('filledOut');
    }
    else{
        elemento.classList.add('filledOut');
    }
}

// funcion para poner formato de moneda
const fMoney = elemento => { //function to add puntos to textboxes
    let Num = elemento.value
    Num += '';
    Num = Num.replace('$ ', ''); Num = Num.replace('$', '')
    Num = Num.replace('.', ''); Num = Num.replace('.', ''); Num = Num.replace('.', '');
    Num = Num.replace('.', ''); Num = Num.replace('.', ''); Num = Num.replace('.', '');
    x = Num.split('.');
    x1 = x[0];
    x2 = x.length > 1 ? '.' + x[1] : '';
    let rgx = /(\d+)(\d{3})/;
    while (rgx.test(x1))
        x1 = x1.replace(rgx, '$1' + '.' + '$2');
    let numCompleto =  x1 + x2;
    if(numCompleto == ''){
        elemento.value = '';
    }
    else{
        elemento.value = `$${numCompleto}`
    }
}

// funcion para poner formato de porsentje
const fPorcentaje = elemento => {
    let Num = elemento.value
    Num += '';
    Num = Num.replace('% ', ''); Num = Num.replace('%', '')
    elemento.value = Num;
    elemento.value = `${elemento.value}%`

    // si esta con algun valor calcula la cantidad de caracteres
    if(elemento.value != '%'){
        let inicio = elemento.value.length
        let fin = elemento.value.length - 1;
        // me reposicion el cursor
        sel(inicio, fin, elemento)
    }
    // si esta vacio deja el campo vacio
    else{
       elemento.value = '';
    }
    
}

// me reposicion el cursor segun la cantidad de caracteres
function sel(inicio,fin, elemento){
    elemento
    if(typeof document.selection != 'undefined' && document.selection){
        tex=elemento.value;
        elemento.value='';
        elemento.focus();
        var str = document.selection.createRange();
        elemento.value=tex;
        str.move('character', inicio);
        str.moveEnd("character", fin-inicio);
        str.select();
    }
    else if(typeof elemento.selectionStart != 'undefined'){
        elemento.setSelectionRange(inicio,fin);
        elemento.focus();
    }
}

//funcion para editar campo
const changeInput = elemento =>{
    let input = elemento.nextSibling;
    let parent = input.parentElement;

    //console.log(input);
    elemento.classList.add('hidden');
    parent.querySelector('input').disabled = false;
    parent.querySelector('input').focus();
    parent.querySelector('input').select();
}

//Funcion para seleccionar texto del input
const selectContent = element =>{
    element.select()
}

//funcion para editar direccion
const changeAddress = elemento =>{
    let input = elemento.nextSibling;
    //console.log(input);
    elemento.classList.add('hidden');
    elemento.nextElementSibling.classList.remove('hidden');
    elemento.previousElementSibling.classList.add('hidden');
}

//funcion para ver contrasenia
const viewPassword = elemento =>{
    let inputPass = elemento.previousElementSibling;

    if(inputPass.type === 'password'){
        inputPass.type = 'text';
        inputPass.classList.add('input__textBoxPassword--view');
        inputPass.classList.remove('input__textBoxPassword');
        elemento.setAttribute("title", "Ocultar");
    }
    else{
        inputPass.type = 'password';
        elemento.setAttribute("title", "Mostrar");
        inputPass.classList.remove('input__textBoxPassword--view');
        inputPass.classList.add('input__textBoxPassword');
    }
    inputPass.focus();
}

const seeLastCharacter = elemento =>{

    let inputValue = elemento.value;
    let ultimaLetra = inputValue.charAt(inputValue.length-1);

    elemento.value = ''
    for (let i = 0; i < inputValue.length-1; i++) {
        //debugger
        elemento.value += '•'
    }
    elemento.value += ultimaLetra;

}
const seeLastCharacterBlur = elemento =>{
    let inputValue = elemento.value;
    elemento.value=''
    for (let i = 0; i < inputValue.length; i++) {
        elemento.value += '•'
    }
}

//funcion para controlar select
const controladorDropdown = elemento => {
    let divDropdown = elemento.parentNode.parentNode.parentNode;
    //let nameInput = elemento.firstElementChild.name;

    // ocultar o mostrar Desplegable
    if (divDropdown.classList.contains('dropdown--mostrar')){
        divDropdown.classList.remove('dropdown--mostrar');
    }
    else{
        divDropdown.classList.add('dropdown--mostrar');
    }

    //implemetar clase para poner de primeras el seleccionado
    if(elemento.classList.contains('checked')){
        elemento.classList.remove('checked');
    }
    else{
        elemento.classList.add('checked');
    }

    //cambiar estilo del select
    if(!elemento.classList.contains('disabled')){
        divDropdown.classList.add('filledOut');
    }
    else{
        divDropdown.classList.remove('filledOut');
    }

    //Identificar seleccionado por medio del input tipo radio
    elemento.firstElementChild.checked = true
}


//#region ==================== controladores input Search ====================
//funcion para controlar texbox con buscador
const fControlador = elemento =>{
    let searchElement = elemento.nextElementSibling;
    if(elemento.value != ""){
        elemento.classList.add();
    }

    if(searchElement.children.length > 0){
        elemento.classList.add('input__textBoxSearch--filledOut');
        searchElement.classList.remove('hidden');
    }
    else{
        searchElement.classList.add('hidden');
        elemento.classList.remove('input__textBoxSearch--filledOut');
    }
}

//funcion para llenar elementos hijos
const fllenarLista = (elemento, arreglo) =>{

    let strBuscar = elemento.value;
    strBuscar = strBuscar.toLowerCase();
    let longStr = strBuscar.length;
    let searchElement = elemento.nextElementSibling

    deleteChildren(searchElement);
    

    //recorre arreglo para buscar coincidencias
    for(let i = 0; i < arreglo.length; i++){
        let ValorArreglo = arreglo[i].toLowerCase();

        if(strBuscar == ValorArreglo.substring(0 , longStr) && strBuscar != ""){

            
            let midiv = document.createElement("li");
            midiv.setAttribute("class", "listSearch__option");
            midiv.setAttribute("onclick", "fillOutSearch(this)");
            midiv.innerHTML = `${arreglo[i]}`;
            searchElement.appendChild(midiv);
        }
    }

}

//destruye los hijos de elemento
const deleteChildren = elemento =>{
    let child = elemento.lastElementChild;
    while (child) { 
        elemento.removeChild(child); 
        child = elemento.lastElementChild; 
    }
}

// llena el input search al pinchar uno de sus hijos
const fillOutSearch = elemento =>{
    let input = elemento.parentNode.previousElementSibling;
    input.value = elemento.innerText;
    deleteChildren(elemento.parentNode);
    fControlador(input);
}

//#endregion ==================== controladores input Search ====================

//#region ==================== controladores input Key Flex ====================
// contolador par avazar
const controladorKey = elemento => {
    if(elemento.value != ""){
        if(elemento.nextElementSibling){
            elemento.nextElementSibling.focus();
        }
    }
}

// controlador para borrar
const borrarAnterior = (elemento, e) => {
    let key = window.event ? e.which : e.keyCode;
    if((e.code == "Backspace" || key == 8) && (elemento.value == "")){
        if(elemento.previousElementSibling){
            elemento.previousElementSibling.value = "";
            elemento.previousElementSibling.focus();
        }
    }
}
//#endregion ==================== controladores input Key Flex ====================


//#region ==================== controladores helper ====================
// contolador para desplegar helper
const controladorHelper = elemento => {
    let texto = elemento.previousElementSibling;
    if(!texto.classList.contains('viewContent')){
        texto.classList.add('viewContent');
        elemento.innerHTML = 'Leer menos';
    }
    else{
        texto.classList.remove('viewContent');
        elemento.innerHTML = 'Leer más';
    }
    //debugger
}
//#endregion ==================== controladores helper ====================


//#endregion funciones controlador de input ===============================================================================


//#region lamado a fucniones segun el tipo de input =======================================================================
//texbox
const inputTxt = document.querySelectorAll('.input__textBox');

for (let i = 0; i < inputTxt.length; i++) {
    inputTxt[i].addEventListener('keyup', function(){
        fInputTextbox(this);
    }, false);
}

const inputDate = document.querySelectorAll('.input__textBoxDate');

for (let i = 0; i < inputDate.length; i++) {
    inputDate[i].addEventListener('keyup', function(){
        fInputTextbox(this);
    }, false);
    inputDate[i].addEventListener('blur', function(){
        fInputTextbox(this);
    }, false);
}

//texbox tipo moneda
const inputMoney = document.querySelectorAll('.input__textBoxMoney');

for (let i = 0; i < inputMoney.length; i++) {
    inputMoney[i].addEventListener('keyup', function(){
        fInputTextbox(this);
        fMoney(this);
    }, false);

    // funcion permitir solo numeros select
    inputMoney[i].addEventListener('keypress', function (e){
        let key = window.event ? e.which : e.keyCode;
        if (key < 48 || key > 57) {
          e.preventDefault();
        }
    }, false);
}


//texbox tipo porcentaje
const inputPercentage = document.querySelectorAll('.input__textBoxPercentage');

for (let i = 0; i < inputPercentage.length; i++) {
    inputPercentage[i].addEventListener('keyup', function(){
        fInputTextbox(this);
        fPorcentaje(this);
    }, false);

    // funcion permitir solo numeros select
    inputPercentage[i].addEventListener('keypress', function (e){
        let key = window.event ? e.which : e.keyCode;
        //console.log(key);
        if ((key < 48 || key > 57) && (key != 46) && (key != 190)) {
          e.preventDefault();
        }
    }, false);
}

//Select Dropdown
const inputDropdowm = document.querySelectorAll('.clickDropdown');

for (let i = 0; i < inputDropdowm.length; i++) {
    inputDropdowm[i].firstElementChild.disabled = true;
    inputDropdowm[i].addEventListener('click', function(){
            controladorDropdown(this);
    }, false);
}


// input contraseña
const contentKey = document.querySelectorAll('.input--key');

for (let i = 0; i < contentKey.length; i++) {
    let inputKey = contentKey[i].children;
    for(let j = 0; j < inputKey.length; j++){
        inputKey[j].addEventListener('keyup', function(){
            controladorKey(this);
        }, false);

        inputKey[j].addEventListener('keydown', function(e){
            borrarAnterior(this, e);
        }, false);
    }
    
}

// helper leer mas
const contentHelper = document.querySelectorAll('.helper--long');

for (let i = 0; i < contentHelper.length; i++) {

    if ((window.matchMedia("(max-width: 50em)").matches) && (!contentHelper[i].classList.contains('helper--longDesktop'))) {
        let aLeerMas = document.createElement('a');
        aLeerMas.setAttribute('class', 'helper__more');
        aLeerMas.innerHTML = 'Leer más';
        contentHelper[i].appendChild(aLeerMas);
        let leer = contentHelper[i].lastElementChild;
        leer.addEventListener('click', function(){
            controladorHelper(this)
        }, false);
    }

}

const contentHelperDesktop = document.querySelectorAll('.helper--longDesktop');

for (let i = 0; i < contentHelperDesktop.length; i++) {
//debugger
    let aLeerMas = document.createElement('a');
    aLeerMas.setAttribute('class', 'helper__more');
    aLeerMas.innerHTML = 'Leer más';
    contentHelperDesktop[i].appendChild(aLeerMas);
    let leer = contentHelperDesktop[i].lastElementChild;
    leer.addEventListener('click', function(){
        controladorHelper(this)
    }, false);
    
}

const inputPassOtp = document.querySelectorAll('.input__textBoxPassword');

for (let i = 0; i < inputPassOtp.length; i++) {
//debugger
        inputPassOtp[i].addEventListener('keyup', function(){
        fInputTextbox(this);
    }, false);

    
}


const inputPassLast = document.querySelectorAll('.input__textBoxPasswordLast');

for (let i = 0; i < inputPassLast.length; i++) {
//debugger
    inputPassLast[i].addEventListener('keyup', function(){
        fInputTextbox(this);
        seeLastCharacter(this);
    }, false);

    inputPassLast[i].addEventListener('blur', function(){
        seeLastCharacterBlur(this);
    }, false);

    
}
//#endregion lamado a fucniones segun el tipo de input  =======================================================================