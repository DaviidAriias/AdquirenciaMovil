//fucniona para mostra los helper de resultados
const actionHelper = elemento => {


    //debugger
    let arregloHijos = elemento.children;
    let moreHelper = document.querySelectorAll('.resultItem--helper, .resultItem--helperB');
    for (let i = 0; i < moreHelper.length; i++) {
        if (elemento != moreHelper[i]) {
            let arregloHijosMore = moreHelper[i].children;
            for (let j = 0; j < arregloHijosMore.length; j++) {
                if (arregloHijosMore[j].classList.contains('helper--type2') || arregloHijosMore[j].classList.contains('helper--type3') || arregloHijosMore[j].classList.contains('helper')) {
                    arregloHijosMore[j].classList.add('hidden');
                    moreHelper[i].classList.remove('show');
                }
            }
        }

    }
    for (let i = 0; i < arregloHijos.length; i++) {
        if (arregloHijos[i].classList.contains('helper--type2') || arregloHijos[i].classList.contains('helper--type3') || arregloHijos[i].classList.contains('helper')) {
            if (arregloHijos[i].classList.contains('hidden')) {
                arregloHijos[i].classList.remove('hidden');
                elemento.classList.add('show');
            }
            else {
                arregloHijos[i].classList.add('hidden');
                elemento.classList.remove('show');
            }
        }
    }
}

const actionResHelper = elemento => {


    //debugger
    let arregloHijos = elemento.children;
    let moreHelper = document.querySelectorAll('.resultItem--wHelper');
    for (let i = 0; i < moreHelper.length; i++) {
        if (elemento != moreHelper[i]) {
            let arregloHijosMore = moreHelper[i].children;
            for (let j = 0; j < arregloHijosMore.length; j++) {
                if (arregloHijosMore[j].classList.contains('helper--type2') || arregloHijosMore[j].classList.contains('helper--type3') || arregloHijosMore[j].classList.contains('helper')) {
                    arregloHijosMore[j].classList.add('hidden');
                    moreHelper[i].children[0].classList.remove('show');
                }
            }
        }

    }
    for (let i = 0; i < arregloHijos.length; i++) {
        if (arregloHijos[i].classList.contains('helper--type2') || arregloHijos[i].classList.contains('helper--type3') || arregloHijos[i].classList.contains('helper')) {
            if (arregloHijos[i].classList.contains('hidden')) {
                arregloHijos[i].classList.remove('hidden');
                elemento.children[0].classList.add('show');
            }
            else {
                arregloHijos[i].classList.add('hidden');
                elemento.children[0].classList.remove('show');
            }
        }
    }
}

//#region pop Up
//funcion para mostrat pop Up - resive como parametro el id del pop Up
const showModal = idModal => {
    let modal = document.getElementById(idModal);
    let cuerpo = document.body;
    modal.classList.add('contModal--isShow');
    cuerpo.classList.add('is--scrollLocked');

}

//funcion para ocultar pop Up - resive como parametro el id del pop Up
const hideModal = idModal => {
    let modal = document.getElementById(idModal);
    let cuerpo = document.body;
    modal.classList.remove('contModal--isShow');
    cuerpo.classList.remove('is--scrollLocked');
}
//#endregion pop Up


//funcion para construirUnInputSearh
// arreglo para ejemplo
var arregloCiudades = ['Medell??n', 'Abejorral', 'Abriaqu??', 'Alejandr??a', 'Amag??', 'Amalfi', 'Andes', 'Angel??polis', 'Angostura', 'Anor??', 'Chim??', 'Anza', 'Apartad??', 'Arboletes', 'Argelia', 'Armenia', 'Barbosa', 'Bello', 'Betania', 'Betulia', 'Ciudad Bol??var', 'Brice??o', 'Buritic??', 'C??ceres', 'Caicedo', 'Caldas', 'Campamento', 'Ca??asgordas', 'Caracol??', 'Caramanta', 'Carepa', 'Sampu??s', 'Carolina', 'Caucasia', 'Chigorod??', 'Cisneros', 'Cocorn??', 'Concepci??n', 'Concordia', 'Copacabana', 'Dabeiba', 'Don Mat??as', 'Eb??jico', 'El Bagre', 'Entrerrios', 'Envigado', 'Fredonia', 'Giraldo', 'Girardota', 'G??mez Plata', 'Nunch??a', 'Guadalupe', 'Guarne', 'Guatap??', 'Heliconia', 'Hispania', 'Itagui', 'Ituango', 'Pamplona', 'Jeric??', 'La Ceja', 'La Estrella', 'La Pintada', 'La Uni??n', 'Liborina', 'Maceo', 'Marinilla', 'Montebello', 'Murind??', 'Mutat??', 'Nari??o', 'Necocl??', 'Nech??', 'Olaya', 'Pe??ol', 'Peque', 'Pueblorrico', 'Puerto Berr??o', 'Puerto Nare', 'Puerto Triunfo', 'Remedios', 'Retiro', 'Rionegro', 'Sabanalarga', 'Sabaneta', 'Salgar', 'Alb??n', 'Yavarat??', 'San Francisco', 'San Jer??nimo', 'Montel??bano', 'Puerto As??s', 'San Luis', 'San Pedro', 'Corozal', 'San Rafael', 'San Roque', 'San Vicente', 'Santa B??rbara', 'Buesaco', 'Santo Domingo', 'El Santuario', 'Segovia', 'Sopetr??n', 'T??mesis', 'Taraz??', 'Tarso', 'Titirib??', 'Toledo', 'Turbo', 'Uramita', 'Urrao', 'Valdivia', 'Valpara??so', 'Vegach??', 'Venecia', 'Man??', 'Yal??', 'Yarumal', 'Yolomb??', 'Yond??', 'Zaragoza', 'Barranquilla', 'Baranoa', 'El Pe????n', 'Candelaria', 'Galapa', 'Tulu??', 'Casabianca', 'Luruaco', 'Malambo', 'Manat??', 'Anolaima', 'Pioj??', 'Polonuevo', 'Ch??a', 'San Andr??s de Tumaco', 'Sabanagrande', 'Sabanalarga', 'Santa Luc??a', 'Santo Tom??s', 'Soledad', 'Suan', 'Tubar??', 'Usiacur??', 'Mil??n', 'Capitanejo', 'Ach??', 'Anzo??tegui', 'Arenal', 'Arjona', 'Arroyohondo', 'Florida', 'Calamar', 'Cantagallo', 'Cicuco', 'C??rdoba', 'Clemencia', 'Repel??n', 'El Guamo', 'Frontino', 'Magangu??', 'Mahates', 'Margarita', 'Montecristo', 'Momp??s', 'Morales', 'Noros??', 'Pinillos', 'Regidor', 'R??o Viejo', 'San Estanislao', 'San Fernando', 'El Pe????n', 'Pamplonita', 'San Juan Nepomuceno', 'Miriti Paran??', 'T??mara', 'Santa Catalina', 'Santa Rosa', 'Tibasosa', 'Simit??', 'Soplaviento', 'Talaigua Nuevo', 'Tiquisio', 'Turbaco', 'Turban??', 'Villanueva', 'P??ez', 'Tunja', 'Almeida', 'Aquitania', 'Arcabuco', 'Ibagu??', 'Berbeo', 'Bet??itiva', 'Boavita', 'Boyac??', 'Brice??o', 'Buena Vista', 'Busbanz??', 'Caldas', 'Campohermoso', 'Cerinza', 'Chinavita', 'Chiquinquir??', 'Chiscas', 'Chita', 'Chitaraque', 'Chivat??', 'C??mbita', 'Coper', 'Corrales', 'Covarach??a', 'Cubar??', 'Cucaita', 'Cu??tiva', 'Ch??quiza', 'Chivor', 'Duitama', 'El Cocuy', 'El Espino', 'Firavitoba', 'Floresta', 'Gachantiv??', 'Gameza', 'Garagoa', 'Guacamayas', 'Guateque', 'Guayat??', 'G??ic??n', 'Iza', 'Jenesano', 'Jeric??', 'Labranzagrande', 'La Capilla', 'La Victoria', 'Puerto Colombia', 'Bel??n', 'Macanal', 'Marip??', 'Miraflores', 'Mongua', 'Mongu??', 'Moniquir??', 'Muzo', 'Nobsa', 'Nuevo Col??n', 'Oicat??', 'Otanche', 'Pachavita', 'P??ez', 'Paipa', 'Pajarito', 'Panqueba', 'Pauna', 'Paya', 'Sop??', 'Pesca', 'Pisba', 'Puerto Boyac??', 'Qu??pama', 'Ramiriqu??', 'R??quira', 'Rond??n', 'Saboy??', 'S??chica', 'Samac??', 'San Eduardo', 'Carmen del Darien', 'Gama', 'San Mateo', 'Sasaima', 'Chachag????', 'Santana', 'Santa Mar??a', 'C??cuta', 'Santa Sof??a', 'Sativanorte', 'Sativasur', 'Siachoque', 'Soat??', 'Socot??', 'Socha', 'Sogamoso', 'Somondoco', 'Sora', 'Sotaquir??', 'Sorac??', 'Susac??n', 'Sutamarch??n', 'Sutatenza', 'Tasco', 'Tenza', 'Tiban??', 'Tinjac??', 'Tipacoque', 'Toca', 'Cartagena', 'T??paga', 'Tota', 'Turmequ??', 'Granada', 'Tutaz??', 'Umbita', 'Ventaquemada', 'Viracach??', 'Zetaquira', 'Manizales', 'Aguadas', 'Anserma', 'Aranzazu', 'Belalc??zar', 'Chinchin??', 'Filadelfia', 'La Dorada', 'La Merced', 'Manzanares', 'Marmato', 'Marulanda', 'Neira', 'Norcasia', 'P??cora', 'Palestina', 'Pensilvania', 'Riosucio', 'Risaralda', 'Salamina', 'Saman??', 'San Jos??', 'Sup??a', 'Victoria', 'Villamar??a', 'Viterbo', 'Florencia', 'Albania', 'Santa B??rbara de Pinto', 'Mar??a la Baja', 'Curillo', 'El Doncello', 'El Paujil', 'Morelia', 'Puerto Rico', 'La Monta??ita', 'San Vicente del Cagu??n', 'Solano', 'Solita', 'Valpara??so', 'Popay??n', 'Almaguer', 'Argelia', 'Balboa', 'Bol??var', 'Buenos Aires', 'Cajib??o', 'Caldono', 'Caloto', 'Corinto', 'El Tambo', 'Florencia', 'Guachen??', 'Guapi', 'Inz??', 'Jambal??', 'La Sierra', 'La Vega', 'L??pez', 'Mercaderes', 'Miranda', 'Morales', 'Padilla', 'Pat??a', 'Piamonte', 'Piendam??', 'Puerto Tejada', 'Purac??', 'Rosas', 'El Pe????n', 'Jard??n', 'Santa Rosa', 'Silvia', 'Sotara', 'Su??rez', 'Sucre', 'Timb??o', 'Timbiqu??', 'Toribio', 'Totor??', 'Villa Rica', 'Valledupar', 'Aguachica', 'Agust??n Codazzi', 'Astrea', 'Becerril', 'Bosconia', 'Chimichagua', 'Chiriguan??', 'Curuman??', 'El Copey', 'El Paso', 'Gamarra', 'Gonz??lez', 'La Gloria', 'Jamund??', 'Manaure', 'Pailitas', 'Pelaya', 'Pueblo Bello', 'Tad??', 'La Paz', 'San Alberto', 'San Diego', 'San Mart??n', 'Tamalameque', 'Monter??a', 'Ayapel', 'Buenavista', 'Canalete', 'Ceret??', 'Chim??', 'Chin??', 'Orocu??', 'Cotorra', 'L??bano', 'Lorica', 'Los C??rdobas', 'Momil', 'Mo??itos', 'Planeta Rica', 'Pueblo Nuevo', 'Puerto Escondido', 'Yacop??', 'Pur??sima', 'Sahag??n', 'San Andr??s Sotavento', 'San Antero', 'Calarc??', 'Sons??n', 'El Carmen', 'San Pelayo', 'Tierralta', 'Tuch??n', 'Valencia', 'L??rida', 'Anapoima', 'Arbel??ez', 'Beltr??n', 'Bituima', 'Bojac??', 'Cabrera', 'Cachipay', 'Cajic??', 'Caparrap??', 'Caqueza', 'La Apartada', 'Chaguan??', 'Chipaque', 'Choach??', 'Chocont??', 'Cogua', 'Cota', 'Cucunub??', 'El Colegio', 'El Rosal', 'Fomeque', 'Fosca', 'Funza', 'F??quene', 'Gachala', 'Gachancip??', 'Gachet??', 'San Crist??bal', 'Girardot', 'Granada', 'Guachet??', 'Guaduas', 'Guasca', 'Guataqu??', 'Guatavita', 'Fusagasug??', 'Guayabetal', 'Guti??rrez', 'Jerusal??n', 'Jun??n', 'La Calera', 'La Mesa', 'La Palma', 'La Pe??a', 'La Vega', 'Lenguazaque', 'Macheta', 'Madrid', 'Manta', 'Medina', 'Mosquera', 'Nari??o', 'Nemoc??n', 'Nilo', 'Nimaima', 'Nocaima', 'Venecia', 'Pacho', 'Paime', 'Pandi', 'Paratebueno', 'Pasca', 'Puerto Salgar', 'Pul??', 'Quebradanegra', 'Quetame', 'Quipile', 'Apulo', 'Ricaurte', 'Zambrano', 'San Bernardo', 'San Cayetano', 'San Francisco', 'La Uvita', 'Zipaquir??', 'Sesquil??', 'Sibat??', 'Silvania', 'Simijaca', 'Soacha', 'Subachoque', 'Suesca', 'Supat??', 'Susa', 'Sutatausa', 'Tabio', 'G??nova', 'Tausa', 'Tena', 'Tenjo', 'Tibacuy', 'Tibirita', 'Tocaima', 'Tocancip??', 'Topaip??', 'Ubal??', 'Ubaque', 'Su??rez', 'Une', '??tica', 'Castilla la Nueva', 'Vian??', 'Villag??mez', 'Villapinz??n', 'Villeta', 'Viot??', 'Zipac??n', 'Quibd??', 'Acand??', 'Alto Baudo', 'Atrato', 'Bagad??', 'Bah??a Solano', 'Bajo Baud??', 'Bel??n', 'Bojaya', 'Uni??n Panamericana', 'Pueblo Viejo', 'C??rtegui', 'Condoto', 'Villagarz??n', 'Facatativ??', 'Jurad??', 'Llor??', 'Medio Atrato', 'Medio Baud??', 'Medio San Juan', 'N??vita', 'Nuqu??', 'R??o Iro', 'R??o Quito', 'Riosucio', 'Puerto Libertador', 'Sip??', 'Ungu??a', 'Neiva', 'Acevedo', 'Agrado', 'Aipe', 'Algeciras', 'Altamira', 'Baraya', 'Campoalegre', 'Colombia', 'El??as', 'Garz??n', 'Gigante', 'Guadalupe', 'Hobo', 'Iquira', 'Isnos', 'La Argentina', 'La Plata', 'Marquetalia', 'N??taga', 'Oporapa', 'Paicol', 'Palermo', 'Palestina', 'Pital', 'Pitalito', 'Rivera', 'Saladoblanco', 'Arboleda', 'Santa Mar??a', 'Suaza', 'Tarqui', 'Tesalia', 'Tello', 'Teruel', 'Timan??', 'Villavieja', 'Yaguar??', 'Riohacha', 'Albania', 'Barrancas', 'Dibula', 'Distracci??n', 'El Molino', 'Fonseca', 'Hatonuevo', 'Maicao', 'Manaure', 'Uribia', 'Urumita', 'Villanueva', 'Santa Marta', 'Algarrobo', 'Aracataca', 'Ariguan??', 'Cerro San Antonio', 'Chivolo', 'Concordia', 'El Banco', 'El Pi??on', 'El Ret??n', 'Fundaci??n', 'Guamal', 'Nueva Granada', 'Pedraza', 'Pivijay', 'Plato', 'Remolino',
    'Salamina', 'San Zen??n', 'Santa Ana', 'Sitionuevo', 'Tenerife', 'Zapay??n', 'Zona Bananera', 'Villavicencio', 'Acacias', 'Cabuyaro', 'Cubarral', 'Cumaral', 'El Calvario', 'El Castillo', 'El Dorado', 'Buenaventura', 'Granada', 'Guamal', 'Mapirip??n', 'Mesetas', 'La Macarena', 'Uribe', 'Lejan??as', 'Puerto Concordia', 'Puerto Gait??n', 'Puerto L??pez', 'Puerto Lleras', 'Puerto Rico', 'Restrepo', 'Ci??naga', 'Ponedera', 'San Juanito', 'San Mart??n', 'Vista Hermosa', 'Pasto', 'Alb??n', 'Aldana', 'Ancuy??', 'Tunungu??', 'Barbacoas', 'Motavita', 'San Bernardo del Viento', 'Col??n', 'Consaca', 'Contadero', 'C??rdoba', 'Cuaspud', 'Cumbal', 'Cumbitara', 'El Charco', 'El Pe??ol', 'El Rosario', 'Istmina', 'El Tambo', 'Funes', 'Guachucal', 'Guaitarilla', 'Gualmat??n', 'Iles', 'Imu??s', 'Ipiales', 'La Cruz', 'La Florida', 'La Llanada', 'La Tola', 'La Uni??n', 'Leiva', 'Linares', 'Los Andes', 'Mag????', 'Mallama', 'Mosquera', 'Nari??o', 'Olaya Herrera', 'Ospina', 'Francisco Pizarro', 'Policarpa', 'Potos??', 'Providencia', 'Puerres', 'Pupiales', 'Ricaurte', 'Roberto Pay??n', 'Samaniego', 'Sandon??', 'San Bernardo', 'San Lorenzo', 'San Pablo', 'Belmira', 'Ci??nega', 'Santa B??rbara', 'Sapuyes', 'Taminango', 'Tangua', 'Santacruz', 'T??querres', 'Yacuanquer', 'Puerto Wilches', 'Puerto Parra', 'Armenia', 'Buenavista', 'Circasia', 'C??rdoba', 'Filandia', 'La Tebaida', 'Montenegro', 'Pijao', 'Quimbaya', 'Salento', 'Pereira', 'Ap??a', 'Balboa', 'Dosquebradas', 'Gu??tica', 'La Celia', 'La Virginia', 'Marsella', 'Mistrat??', 'Pueblo Rico', 'Quinch??a', 'Santuario', 'Bucaramanga', 'Aguada', 'Albania', 'Aratoca', 'Barbosa', 'Barichara', 'Barrancabermeja', 'Betulia', 'Bol??var', 'Cabrera', 'California', 'Carcas??', 'Cepit??', 'Cerrito', 'Charal??', 'Charta', 'Chipat??', 'Cimitarra', 'Concepci??n', 'Confines', 'Contrataci??n', 'Coromoro', 'Curit??', 'El Guacamayo', 'El Play??n', 'Encino', 'Enciso', 'Flori??n', 'Floridablanca', 'Gal??n', 'Gambita', 'Gir??n', 'Guaca', 'Guadalupe', 'Guapot??', 'Guavat??', 'G??epsa', 'Jes??s Mar??a', 'Jord??n', 'La Belleza', 'Land??zuri', 'La Paz', 'Lebr??ja', 'Los Santos', 'Macaravita', 'M??laga', 'Matanza', 'Mogotes', 'Molagavita', 'Ocamonte', 'Oiba', 'Onzaga', 'Palmar', 'P??ramo', 'Piedecuesta', 'Pinchote', 'Puente Nacional', 'Rionegro', 'San Andr??s', 'San Gil', 'San Joaqu??n', 'San Miguel', 'Santa B??rbara', 'Simacota', 'Socorro', 'Suaita', 'Sucre', 'Surat??', 'Tona', 'V??lez', 'Vetas', 'Villanueva', 'Zapatoca', 'Sincelejo', 'Buenavista', 'Caimito', 'Coloso', 'Cove??as', 'Chal??n', 'El Roble', 'Galeras', 'Guaranda', 'La Uni??n', 'Los Palmitos', 'Majagual', 'Morroa', 'Ovejas', 'Palmito', 'San Benito Abad', 'San Marcos', 'San Onofre', 'San Pedro', 'Sucre', 'Tol?? Viejo', 'Alpujarra', 'Alvarado', 'Ambalema', 'Armero', 'Ataco', 'Cajamarca', 'Chaparral', 'Coello', 'Coyaima', 'Cunday', 'Dolores', 'Espinal', 'Falan', 'Flandes', 'Fresno', 'Guamo', 'Herveo', 'Honda', 'Icononzo', 'Mariquita', 'Melgar', 'Murillo', 'Natagaima', 'Ortega', 'Palocabildo', 'Piedras', 'Planadas', 'Prado', 'Purificaci??n', 'Rio Blanco', 'Roncesvalles', 'Rovira', 'Salda??a', 'Santa Isabel', 'Venadillo', 'Villahermosa', 'Villarrica', 'Arauquita', 'Cravo Norte', 'Fortul', 'Puerto Rond??n', 'Saravena', 'Tame', 'Arauca', 'Yopal', 'Aguazul', 'Ch??meza', 'Hato Corozal', 'La Salina', 'Monterrey', 'Pore', 'Recetor', 'Sabanalarga', 'S??cama', 'Tauramena', 'Trinidad', 'Villanueva', 'Mocoa', 'Col??n', 'Orito', 'Puerto Caicedo', 'Puerto Guzm??n', 'Legu??zamo', 'Sibundoy', 'San Francisco', 'San Miguel', 'Santiago', 'Leticia', 'El Encanto', 'La Chorrera', 'La Pedrera', 'La Victoria', 'Puerto Arica', 'Puerto Nari??o', 'Puerto Santander', 'Tarapac??', 'In??rida', 'Barranco Minas', 'Mapiripana', 'San Felipe', 'Puerto Colombia', 'La Guadalupe', 'Cacahual', 'Pana Pana', 'Morichal', 'Mit??', 'Caruru', 'Pacoa', 'Taraira', 'Papunaua', 'Puerto Carre??o', 'La Primavera', 'Santa Rosal??a', 'Cumaribo', 'San Jos?? del Fragua', 'Barranca de Up??a', 'Palmas del Socorro', 'San Juan de R??o Seco', 'Juan de Acosta', 'Fuente de Oro', 'San Luis de Gaceno', 'El Litoral del San Juan', 'Villa de San Diego de Ubate', 'Barranco de Loba', 'Tog????', 'Santa Rosa del Sur', 'El Cant??n del San Pablo', 'Villa de Leyva', 'San Sebasti??n de Buenavista', 'Paz de R??o', 'Hatillo de Loba', 'Sabanas de San Angel', 'Calamar', 'R??o de Oro', 'San Pedro de Uraba', 'San Jos?? del Guaviare', 'Santa Rosa de Viterbo', 'Santander de Quilichao', 'Miraflores', 'Santaf?? de Antioquia', 'San Carlos de Guaroa', 'Palmar de Varela', 'Santa Rosa de Osos', 'San Andr??s de Cuerqu??a', 'Valle de San Juan', 'San Vicente de Chucur??', 'San Jos?? de Miranda', 'Providencia', 'Santa Rosa de Cabal', 'Guayabal de Siquima', 'Bel??n de Los Andaquies', 'Paz de Ariporo', 'Santa Helena del Op??n', 'San Pablo de Borbur', 'La Jagua del Pilar', 'La Jagua de Ibirico', 'San Luis de Sinc??', 'San Luis de Gaceno', 'El Carmen de Bol??var', 'El Carmen de Atrato', 'San Juan de Betulia', 'Piji??o del Carmen', 'Vig??a del Fuerte', 'San Mart??n de Loba', 'Altos del Rosario', 'Carmen de Apicala', 'San Antonio del Tequendama', 'Sabana de Torres', 'El Retorno', 'San Jos?? de Ur??', 'San Pedro de Cartago', 'Campo de La Cruz', 'San Juan de Arama', 'San Jos?? de La Monta??a', 'Cartagena del Chair??', 'San Jos?? del Palmar', 'Agua de Dios', 'San Jacinto del Cauca', 'San Agust??n', 'El Tabl??n de G??mez', 'San Andr??s', 'San Jos?? de Pare', 'Valle de Guamez', 'San Pablo de Borbur', 'Santiago de Tol??', 'Bogot?? D.C.', 'Carmen de Carupa', 'Ci??naga de Oro', 'San Juan de Urab??', 'San Juan del Cesar', 'El Carmen de Chucur??', 'El Carmen de Viboral', 'Bel??n de Umbr??a', 'Bel??n de Bajira', 'Valle de San Jos??', 'San Luis', 'San Miguel de Sema', 'San Antonio', 'San Benito', 'Vergara', 'San Carlos', 'Puerto Alegr??a', 'Hato', 'San Jacinto', 'San Sebasti??n', 'San Carlos', 'Tuta', 'Silos', 'C??cota', 'El Dovio', 'Toledo', 'Roldanillo', 'Mutiscua', 'Argelia', 'El Zulia', 'Salazar', 'Sevilla', 'Zarzal', 'Cucutilla', 'El Cerrito', 'Cartago', 'Caicedonia', 'Puerto Santander', 'Gramalote', 'El Cairo', 'El Tarra', 'La Uni??n', 'Restrepo', 'Teorama', 'Dagua', 'Arboledas', 'Guacar??', 'Lourdes', 'Ansermanuevo', 'Bochalema', 'Bugalagrande', 'Convenci??n', 'Hacar??', 'La Victoria', 'Herr??n', 'Ginebra', 'Yumbo', 'Obando', 'Tib??', 'San Cayetano', 'San Calixto', 'Bol??var', 'La Playa', 'Cali', 'San Pedro', 'Guadalajara de Buga', 'Chin??cota', 'Ragonvalia', 'La Esperanza', 'Villa del Rosario', 'Chitag??', 'Calima', 'Sardinata', 'Andaluc??a', 'Pradera', 'Abrego', 'Los Patios', 'Oca??a', 'Bucarasica', 'Yotoco', 'Palmira', 'Riofr??o', 'Santiago', 'Alcal??', 'Versalles', 'Labateca', 'Cachir??', 'Villa Caro', 'Durania', 'El ??guila', 'Toro', 'Candelaria', 'La Cumbre', 'Ulloa', 'Trujillo', 'Vijes']

var arregloNit = ['Banco Davivienda - 860034313-7', 'David Tobares SAS - 8787467399-0']
var actividades = ['1081 Elaboraci??n de productos', '1082 Elaboraci??n de cacao', '1040 Elaboraci??n de productos', '1051 Elaboraci??n de productos' ];

const searchCiudades = elemento => {
    fInputTextbox(elemento);
    // esta funcion se usa solo como ejemplo para buscar ciudades
    fllenarLista(elemento, arregloCiudades);
    fControlador(elemento);
}

const searchActivity = elemento =>{
    fInputTextbox(elemento);
    fllenarLista(elemento, actividades);
    fControlador(elemento);
}

//#region funciones ocultar o mostrar
//recibe como parametro el id del elemento
const showItem = idElemento => {
    let elemento = document.getElementById(idElemento);
    elemento.classList.remove('hidden');
}
//muestra el elemento oculto y borra el boton desplegable
const showAndRemove = (button, idElemento) => {
    let elemento = document.getElementById(idElemento);
    elemento.classList.remove('hidden');
    button.remove();
}
//recibe como parametro el id del elemento
const hiddenItem = idElemento => {
    let elemento = document.getElementById(idElemento);
    elemento.classList.add('hidden');
}
//#endregion funciones ocultar o mostrar

const searchNIT = elemento => {
    fInputTextbox(elemento);
    // esta funcion se usa solo como ejemplo para buscar ciudades
    fllenarListaIncluyente(elemento, arregloNit);
    fControlador(elemento);
}

//Funcion para habilitar boton de "Continuar"
const buttonCheck = (e, idBtn) => {
    var btn = document.getElementById(idBtn);
    if (e.value != '') {
        btn.classList.remove('button--disabled');
        btn.disabled = false;
    }
    else {
        btn.classList.add('button--disabled');
        btn.disabled = true;
    }
}
//funcion para verificar un checbox y habilitar boton

const checkBullet = (element, buttonId) => {
    const button = document.getElementById(buttonId)
    console.log(element.value)
    if (element.checked == true) {
        button.classList.remove('button--disabled')
        button.disabled = false;
    }
    else {
        button.classList.add('button--disabled')
        button.disabled = true;
    }
}

const checkRadioBtn = (name, buttonId) => {
    const button = document.getElementById(buttonId)
    const radioBtn = document.querySelector(`input[name="${name}"]`);
    if (radioBtn.checked == false) {
        button.classList.remove('button--disabled')
        button.disabled = false;
    }
    else {
        button.classList.add('button--disabled')
        button.disabled = true;
    }
}

const buttonOn = (buttonId) => {
    const button = document.getElementById(buttonId)
    button.classList.remove('button--disabled')
    button.disabled = false;
}

//Funcion para mostrar y ocultar info

const showUserInfo = (visible, hidden) => {
    let showThis = document.querySelector(`.${hidden}`)
    let hideThis = document.querySelector(`.${visible}`)
    showThis.classList.remove('hidden')
    hideThis.classList.add('hidden')
    backButton.classList.toggle('hidden');
}

const showUserInfoBtnBack = (visible, hidden) => {
    let showThis = document.querySelector(`.${hidden}`)
    let hideThis = document.querySelector(`.${visible}`)
    showThis.classList.add('hidden')
    hideThis.classList.remove('hidden')
    backButton.classList.toggle('hidden');
    console.log(showThis);
    console.log(hiddenItem);
}


//Funcion para menu colapsable 

const collapse = (element) => {
    const hiddenContent = element.nextElementSibling;
    const activeElement = document.querySelectorAll('.cardContainer');
    const shownContent = document.querySelectorAll('.cardContent:not(.hidden)');

    if (shownContent.length > 0 && (shownContent[0] != hiddenContent)) {
        shownContent[0].classList.add('hidden')
        activeElement[0].classList.replace('cardContainer', 'cardContainer--inactive')
    }

    hiddenContent.classList.toggle('hidden')

    if (element.parentElement.classList.contains('cardContainer--inactive'))
        element.parentElement.classList.replace('cardContainer--inactive', 'cardContainer')
    else
        element.parentElement.classList.replace('cardContainer', 'cardContainer--inactive')

}

const collapseCard = (element) => {
    const activeItem = document.querySelectorAll('.resultContainer:not(.hidden)');
    const itemClicked = element.previousElementSibling;
    itemClicked.classList.toggle('hidden')

    if (activeItem.length > 0 && (itemClicked != activeItem[0])) {
        let activeBtn = activeItem[0].parentElement.lastElementChild;
        activeItem[0].classList.toggle('hidden');
        seeMoreItems(activeBtn)
    }

    seeMoreItems(element)
}

const seeMoreItems = (element) => {
    const previousItem = element.previousElementSibling.previousElementSibling
    const text = element.children[0]
    const icon = element.children[1];

    if (text.innerHTML == 'Ver menos')
        text.innerHTML = "Ver m??s"
    else
        text.innerHTML = "Ver menos"

    icon.classList.toggle('rotateImg')
    previousItem.classList.toggle('resultItemNoBorder')
}

const showHiddenInput = (option, idElement) => {
    const hiddenElement = document.getElementById(idElement);
    if (option.children[0].value == idElement){
        hiddenElement.classList.remove('hidden');
    }else{
        hiddenElement.classList.add('hidden')
    }
}

const showHiddenInput2 = (option, idElement) => {
    const hiddenElement = document.getElementById(idElement);
    const logoGrid = document.getElementById('logoGrid');
    if (option.children[0].value == idElement){
        hiddenElement.classList.remove('hidden');
        logoGrid.style.opacity = "50%";
    }else{
        hiddenElement.classList.add('hidden')
        logoGrid.style.opacity = "";
    }
}

// Funcion para simular Escaneo de Cedula

const changePicture = (element, pictureSide) => {
    const imgContainer = element.parentElement.previousElementSibling;
    const picture = imgContainer.children[0];

    if (imgContainer.classList.contains('idContainer__image--failed'))
        imgContainer.classList.replace('idContainer__image--failed', 'idContainer__image--checked')
    else
        imgContainer.classList.replace('idContainer__image', 'idContainer__image--checked')

    if (pictureSide == 'backSide')
        picture.src = "../../media/images/image-idBackExample.png"
    if (pictureSide == 'frontSide')
        picture.src = "../../media/images/image-idFrontExample.png"

    let imgChecked = document.querySelectorAll('.idContainer__image--checked')
    if (imgChecked.length > 1) {
        document.getElementById('nextButton').disabled = false;
    }
    element.parentElement.classList.add('hidden')
}

const toggleInput = (elementId) => {
    const input = document.getElementById(elementId);
    if (input.disabled == true) {
        input.disabled = false;
        input.selectionStart = input.selectionEnd = input.value.length;
        input.focus();
    }
    else
        input.disabled = true;
}

// Funcion para cambiar los estilos de las pesta??as de un contenedor
const changeTab = (element) => {
    document.querySelector('.tabsContainer__item').classList.replace("tabsContainer__item", "tabsContainer__item--inactive")
    element.classList.replace("tabsContainer__item--inactive", "tabsContainer__item")
    if (element.children[0].classList.contains('active') == false) {
        document.querySelector('.active').classList.remove('active')
        element.children[0].classList.add('active')
    }
}

// Funcion para cambiar el contenido de los contenedores que tienen varias pesta??as
const changeContainer = (elementId) => {
    const element = document.getElementById(elementId)
    /* console.log(element.classList.contains('tabContent--inactive')) */
    if (element.classList.contains('tabContent--inactive')) {
        document.querySelector('.tabContent').classList.replace('tabContent', 'tabContent--inactive')
        element.classList.replace('tabContent--inactive', 'tabContent')

        if (document.getElementById('buttonContainer')) {
            const actives = document.querySelectorAll('.circleButton');
            const inactives = document.querySelectorAll('.circleButton--inactive')

            actives.forEach(item => {
                item.classList.replace('circleButton', 'circleButton--inactive')
            })

            inactives.forEach(item => {
                item.classList.replace('circleButton--inactive', 'circleButton')
            })
        }
    }
}

//Funcion para mostrar contenido de ImgHelpers

const showboxHelper = (element) => {
    const hiddenContent = element.nextElementSibling;
    const icon = element.lastElementChild
    hiddenContent.classList.toggle('hidden')
    icon.classList.toggle('rotateImg')
}

//Funcion para mostrar helpers al llenar un input

const showInputInfo = (element, idHiddenElement) => {
    const elementValue = element.value;
    const hiddenElement = document.getElementById(idHiddenElement);
    if (elementValue != '')
        hiddenElement.classList.remove('hidden')
    else
        hiddenElement.classList.add('hidden')
}

// Funcion para mostrar items segun la opcion seleccionada en un checklist

const showSelectedItem = (element) => {
    const elementValue = element.children[0].value;
    const shownElement = document.querySelector('.shownElement')
    const hiddenElement = document.getElementById(elementValue);
    if(shownElement  && shownElement.id != elementValue)
        shownElement.classList.replace('shownElement','hidden')

    if(hiddenElement)
        hiddenElement.classList.replace('hidden', 'shownElement');
    
}




//Funcion para insertar y borrar input antes de un elemento en especifico

let elementosReplicados = 0;
const order = ['Segunda','Tercera','Cuarta','Quinta'] 

const replicate = (idElement) =>{
    
    const element = document.getElementById(idElement);
    const newElement = `
    <div class="input mb-8px">
        <input type="text" class="input__textBox" placeholder="${order[elementosReplicados]} responsabilidad tributaria">
        <a href="javascript:void(0)" title="Editar" class="input__buttonAction" onclick="deleteElement(this)">
            <img class="pl-8px" src="../media/extraIcons/icon-trash.svg" alt="">
        </a>
    </div>
    `
    console.log(elementosReplicados)
    if(elementosReplicados < 4){
        element.insertAdjacentHTML('beforebegin', newElement )
        elementosReplicados++;
    }
}

const deleteElement = (element) => {
    element.parentElement.remove();
    elementosReplicados--;
}

//Funcion para verificar si checkbox estan activos

const checkboxVerify = (nameElement, idElementHidden) =>{
    const checkboxList = document.getElementsByName(nameElement);
    const elementHidden = document.getElementById(idElementHidden);
    let counter = 0;
    checkboxList.forEach(item => {
        if(item.checked){
            elementHidden.classList.remove('hidden');
            counter++;
            return;
        }
    })
    if(counter == 0)
        elementHidden.classList.add('hidden')
}
