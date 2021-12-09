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
var arregloCiudades = ['Medellín', 'Abejorral', 'Abriaquí', 'Alejandría', 'Amagá', 'Amalfi', 'Andes', 'Angelópolis', 'Angostura', 'Anorí', 'Chimá', 'Anza', 'Apartadó', 'Arboletes', 'Argelia', 'Armenia', 'Barbosa', 'Bello', 'Betania', 'Betulia', 'Ciudad Bolívar', 'Briceño', 'Buriticá', 'Cáceres', 'Caicedo', 'Caldas', 'Campamento', 'Cañasgordas', 'Caracolí', 'Caramanta', 'Carepa', 'Sampués', 'Carolina', 'Caucasia', 'Chigorodó', 'Cisneros', 'Cocorná', 'Concepción', 'Concordia', 'Copacabana', 'Dabeiba', 'Don Matías', 'Ebéjico', 'El Bagre', 'Entrerrios', 'Envigado', 'Fredonia', 'Giraldo', 'Girardota', 'Gómez Plata', 'Nunchía', 'Guadalupe', 'Guarne', 'Guatapé', 'Heliconia', 'Hispania', 'Itagui', 'Ituango', 'Pamplona', 'Jericó', 'La Ceja', 'La Estrella', 'La Pintada', 'La Unión', 'Liborina', 'Maceo', 'Marinilla', 'Montebello', 'Murindó', 'Mutatá', 'Nariño', 'Necoclí', 'Nechí', 'Olaya', 'Peñol', 'Peque', 'Pueblorrico', 'Puerto Berrío', 'Puerto Nare', 'Puerto Triunfo', 'Remedios', 'Retiro', 'Rionegro', 'Sabanalarga', 'Sabaneta', 'Salgar', 'Albán', 'Yavaraté', 'San Francisco', 'San Jerónimo', 'Montelíbano', 'Puerto Asís', 'San Luis', 'San Pedro', 'Corozal', 'San Rafael', 'San Roque', 'San Vicente', 'Santa Bárbara', 'Buesaco', 'Santo Domingo', 'El Santuario', 'Segovia', 'Sopetrán', 'Támesis', 'Tarazá', 'Tarso', 'Titiribí', 'Toledo', 'Turbo', 'Uramita', 'Urrao', 'Valdivia', 'Valparaíso', 'Vegachí', 'Venecia', 'Maní', 'Yalí', 'Yarumal', 'Yolombó', 'Yondó', 'Zaragoza', 'Barranquilla', 'Baranoa', 'El Peñón', 'Candelaria', 'Galapa', 'Tuluá', 'Casabianca', 'Luruaco', 'Malambo', 'Manatí', 'Anolaima', 'Piojó', 'Polonuevo', 'Chía', 'San Andrés de Tumaco', 'Sabanagrande', 'Sabanalarga', 'Santa Lucía', 'Santo Tomás', 'Soledad', 'Suan', 'Tubará', 'Usiacurí', 'Milán', 'Capitanejo', 'Achí', 'Anzoátegui', 'Arenal', 'Arjona', 'Arroyohondo', 'Florida', 'Calamar', 'Cantagallo', 'Cicuco', 'Córdoba', 'Clemencia', 'Repelón', 'El Guamo', 'Frontino', 'Magangué', 'Mahates', 'Margarita', 'Montecristo', 'Mompós', 'Morales', 'Norosí', 'Pinillos', 'Regidor', 'Río Viejo', 'San Estanislao', 'San Fernando', 'El Peñón', 'Pamplonita', 'San Juan Nepomuceno', 'Miriti Paraná', 'Támara', 'Santa Catalina', 'Santa Rosa', 'Tibasosa', 'Simití', 'Soplaviento', 'Talaigua Nuevo', 'Tiquisio', 'Turbaco', 'Turbaná', 'Villanueva', 'Páez', 'Tunja', 'Almeida', 'Aquitania', 'Arcabuco', 'Ibagué', 'Berbeo', 'Betéitiva', 'Boavita', 'Boyacá', 'Briceño', 'Buena Vista', 'Busbanzá', 'Caldas', 'Campohermoso', 'Cerinza', 'Chinavita', 'Chiquinquirá', 'Chiscas', 'Chita', 'Chitaraque', 'Chivatá', 'Cómbita', 'Coper', 'Corrales', 'Covarachía', 'Cubará', 'Cucaita', 'Cuítiva', 'Chíquiza', 'Chivor', 'Duitama', 'El Cocuy', 'El Espino', 'Firavitoba', 'Floresta', 'Gachantivá', 'Gameza', 'Garagoa', 'Guacamayas', 'Guateque', 'Guayatá', 'Güicán', 'Iza', 'Jenesano', 'Jericó', 'Labranzagrande', 'La Capilla', 'La Victoria', 'Puerto Colombia', 'Belén', 'Macanal', 'Maripí', 'Miraflores', 'Mongua', 'Monguí', 'Moniquirá', 'Muzo', 'Nobsa', 'Nuevo Colón', 'Oicatá', 'Otanche', 'Pachavita', 'Páez', 'Paipa', 'Pajarito', 'Panqueba', 'Pauna', 'Paya', 'Sopó', 'Pesca', 'Pisba', 'Puerto Boyacá', 'Quípama', 'Ramiriquí', 'Ráquira', 'Rondón', 'Saboyá', 'Sáchica', 'Samacá', 'San Eduardo', 'Carmen del Darien', 'Gama', 'San Mateo', 'Sasaima', 'Chachagüí', 'Santana', 'Santa María', 'Cúcuta', 'Santa Sofía', 'Sativanorte', 'Sativasur', 'Siachoque', 'Soatá', 'Socotá', 'Socha', 'Sogamoso', 'Somondoco', 'Sora', 'Sotaquirá', 'Soracá', 'Susacón', 'Sutamarchán', 'Sutatenza', 'Tasco', 'Tenza', 'Tibaná', 'Tinjacá', 'Tipacoque', 'Toca', 'Cartagena', 'Tópaga', 'Tota', 'Turmequé', 'Granada', 'Tutazá', 'Umbita', 'Ventaquemada', 'Viracachá', 'Zetaquira', 'Manizales', 'Aguadas', 'Anserma', 'Aranzazu', 'Belalcázar', 'Chinchiná', 'Filadelfia', 'La Dorada', 'La Merced', 'Manzanares', 'Marmato', 'Marulanda', 'Neira', 'Norcasia', 'Pácora', 'Palestina', 'Pensilvania', 'Riosucio', 'Risaralda', 'Salamina', 'Samaná', 'San José', 'Supía', 'Victoria', 'Villamaría', 'Viterbo', 'Florencia', 'Albania', 'Santa Bárbara de Pinto', 'María la Baja', 'Curillo', 'El Doncello', 'El Paujil', 'Morelia', 'Puerto Rico', 'La Montañita', 'San Vicente del Caguán', 'Solano', 'Solita', 'Valparaíso', 'Popayán', 'Almaguer', 'Argelia', 'Balboa', 'Bolívar', 'Buenos Aires', 'Cajibío', 'Caldono', 'Caloto', 'Corinto', 'El Tambo', 'Florencia', 'Guachené', 'Guapi', 'Inzá', 'Jambaló', 'La Sierra', 'La Vega', 'López', 'Mercaderes', 'Miranda', 'Morales', 'Padilla', 'Patía', 'Piamonte', 'Piendamó', 'Puerto Tejada', 'Puracé', 'Rosas', 'El Peñón', 'Jardín', 'Santa Rosa', 'Silvia', 'Sotara', 'Suárez', 'Sucre', 'Timbío', 'Timbiquí', 'Toribio', 'Totoró', 'Villa Rica', 'Valledupar', 'Aguachica', 'Agustín Codazzi', 'Astrea', 'Becerril', 'Bosconia', 'Chimichagua', 'Chiriguaná', 'Curumaní', 'El Copey', 'El Paso', 'Gamarra', 'González', 'La Gloria', 'Jamundí', 'Manaure', 'Pailitas', 'Pelaya', 'Pueblo Bello', 'Tadó', 'La Paz', 'San Alberto', 'San Diego', 'San Martín', 'Tamalameque', 'Montería', 'Ayapel', 'Buenavista', 'Canalete', 'Cereté', 'Chimá', 'Chinú', 'Orocué', 'Cotorra', 'Líbano', 'Lorica', 'Los Córdobas', 'Momil', 'Moñitos', 'Planeta Rica', 'Pueblo Nuevo', 'Puerto Escondido', 'Yacopí', 'Purísima', 'Sahagún', 'San Andrés Sotavento', 'San Antero', 'Calarcá', 'Sonsón', 'El Carmen', 'San Pelayo', 'Tierralta', 'Tuchín', 'Valencia', 'Lérida', 'Anapoima', 'Arbeláez', 'Beltrán', 'Bituima', 'Bojacá', 'Cabrera', 'Cachipay', 'Cajicá', 'Caparrapí', 'Caqueza', 'La Apartada', 'Chaguaní', 'Chipaque', 'Choachí', 'Chocontá', 'Cogua', 'Cota', 'Cucunubá', 'El Colegio', 'El Rosal', 'Fomeque', 'Fosca', 'Funza', 'Fúquene', 'Gachala', 'Gachancipá', 'Gachetá', 'San Cristóbal', 'Girardot', 'Granada', 'Guachetá', 'Guaduas', 'Guasca', 'Guataquí', 'Guatavita', 'Fusagasugá', 'Guayabetal', 'Gutiérrez', 'Jerusalén', 'Junín', 'La Calera', 'La Mesa', 'La Palma', 'La Peña', 'La Vega', 'Lenguazaque', 'Macheta', 'Madrid', 'Manta', 'Medina', 'Mosquera', 'Nariño', 'Nemocón', 'Nilo', 'Nimaima', 'Nocaima', 'Venecia', 'Pacho', 'Paime', 'Pandi', 'Paratebueno', 'Pasca', 'Puerto Salgar', 'Pulí', 'Quebradanegra', 'Quetame', 'Quipile', 'Apulo', 'Ricaurte', 'Zambrano', 'San Bernardo', 'San Cayetano', 'San Francisco', 'La Uvita', 'Zipaquirá', 'Sesquilé', 'Sibaté', 'Silvania', 'Simijaca', 'Soacha', 'Subachoque', 'Suesca', 'Supatá', 'Susa', 'Sutatausa', 'Tabio', 'Génova', 'Tausa', 'Tena', 'Tenjo', 'Tibacuy', 'Tibirita', 'Tocaima', 'Tocancipá', 'Topaipí', 'Ubalá', 'Ubaque', 'Suárez', 'Une', 'Útica', 'Castilla la Nueva', 'Vianí', 'Villagómez', 'Villapinzón', 'Villeta', 'Viotá', 'Zipacón', 'Quibdó', 'Acandí', 'Alto Baudo', 'Atrato', 'Bagadó', 'Bahía Solano', 'Bajo Baudó', 'Belén', 'Bojaya', 'Unión Panamericana', 'Pueblo Viejo', 'Cértegui', 'Condoto', 'Villagarzón', 'Facatativá', 'Juradó', 'Lloró', 'Medio Atrato', 'Medio Baudó', 'Medio San Juan', 'Nóvita', 'Nuquí', 'Río Iro', 'Río Quito', 'Riosucio', 'Puerto Libertador', 'Sipí', 'Unguía', 'Neiva', 'Acevedo', 'Agrado', 'Aipe', 'Algeciras', 'Altamira', 'Baraya', 'Campoalegre', 'Colombia', 'Elías', 'Garzón', 'Gigante', 'Guadalupe', 'Hobo', 'Iquira', 'Isnos', 'La Argentina', 'La Plata', 'Marquetalia', 'Nátaga', 'Oporapa', 'Paicol', 'Palermo', 'Palestina', 'Pital', 'Pitalito', 'Rivera', 'Saladoblanco', 'Arboleda', 'Santa María', 'Suaza', 'Tarqui', 'Tesalia', 'Tello', 'Teruel', 'Timaná', 'Villavieja', 'Yaguará', 'Riohacha', 'Albania', 'Barrancas', 'Dibula', 'Distracción', 'El Molino', 'Fonseca', 'Hatonuevo', 'Maicao', 'Manaure', 'Uribia', 'Urumita', 'Villanueva', 'Santa Marta', 'Algarrobo', 'Aracataca', 'Ariguaní', 'Cerro San Antonio', 'Chivolo', 'Concordia', 'El Banco', 'El Piñon', 'El Retén', 'Fundación', 'Guamal', 'Nueva Granada', 'Pedraza', 'Pivijay', 'Plato', 'Remolino',
    'Salamina', 'San Zenón', 'Santa Ana', 'Sitionuevo', 'Tenerife', 'Zapayán', 'Zona Bananera', 'Villavicencio', 'Acacias', 'Cabuyaro', 'Cubarral', 'Cumaral', 'El Calvario', 'El Castillo', 'El Dorado', 'Buenaventura', 'Granada', 'Guamal', 'Mapiripán', 'Mesetas', 'La Macarena', 'Uribe', 'Lejanías', 'Puerto Concordia', 'Puerto Gaitán', 'Puerto López', 'Puerto Lleras', 'Puerto Rico', 'Restrepo', 'Ciénaga', 'Ponedera', 'San Juanito', 'San Martín', 'Vista Hermosa', 'Pasto', 'Albán', 'Aldana', 'Ancuyá', 'Tununguá', 'Barbacoas', 'Motavita', 'San Bernardo del Viento', 'Colón', 'Consaca', 'Contadero', 'Córdoba', 'Cuaspud', 'Cumbal', 'Cumbitara', 'El Charco', 'El Peñol', 'El Rosario', 'Istmina', 'El Tambo', 'Funes', 'Guachucal', 'Guaitarilla', 'Gualmatán', 'Iles', 'Imués', 'Ipiales', 'La Cruz', 'La Florida', 'La Llanada', 'La Tola', 'La Unión', 'Leiva', 'Linares', 'Los Andes', 'Magüí', 'Mallama', 'Mosquera', 'Nariño', 'Olaya Herrera', 'Ospina', 'Francisco Pizarro', 'Policarpa', 'Potosí', 'Providencia', 'Puerres', 'Pupiales', 'Ricaurte', 'Roberto Payán', 'Samaniego', 'Sandoná', 'San Bernardo', 'San Lorenzo', 'San Pablo', 'Belmira', 'Ciénega', 'Santa Bárbara', 'Sapuyes', 'Taminango', 'Tangua', 'Santacruz', 'Túquerres', 'Yacuanquer', 'Puerto Wilches', 'Puerto Parra', 'Armenia', 'Buenavista', 'Circasia', 'Córdoba', 'Filandia', 'La Tebaida', 'Montenegro', 'Pijao', 'Quimbaya', 'Salento', 'Pereira', 'Apía', 'Balboa', 'Dosquebradas', 'Guática', 'La Celia', 'La Virginia', 'Marsella', 'Mistrató', 'Pueblo Rico', 'Quinchía', 'Santuario', 'Bucaramanga', 'Aguada', 'Albania', 'Aratoca', 'Barbosa', 'Barichara', 'Barrancabermeja', 'Betulia', 'Bolívar', 'Cabrera', 'California', 'Carcasí', 'Cepitá', 'Cerrito', 'Charalá', 'Charta', 'Chipatá', 'Cimitarra', 'Concepción', 'Confines', 'Contratación', 'Coromoro', 'Curití', 'El Guacamayo', 'El Playón', 'Encino', 'Enciso', 'Florián', 'Floridablanca', 'Galán', 'Gambita', 'Girón', 'Guaca', 'Guadalupe', 'Guapotá', 'Guavatá', 'Güepsa', 'Jesús María', 'Jordán', 'La Belleza', 'Landázuri', 'La Paz', 'Lebríja', 'Los Santos', 'Macaravita', 'Málaga', 'Matanza', 'Mogotes', 'Molagavita', 'Ocamonte', 'Oiba', 'Onzaga', 'Palmar', 'Páramo', 'Piedecuesta', 'Pinchote', 'Puente Nacional', 'Rionegro', 'San Andrés', 'San Gil', 'San Joaquín', 'San Miguel', 'Santa Bárbara', 'Simacota', 'Socorro', 'Suaita', 'Sucre', 'Suratá', 'Tona', 'Vélez', 'Vetas', 'Villanueva', 'Zapatoca', 'Sincelejo', 'Buenavista', 'Caimito', 'Coloso', 'Coveñas', 'Chalán', 'El Roble', 'Galeras', 'Guaranda', 'La Unión', 'Los Palmitos', 'Majagual', 'Morroa', 'Ovejas', 'Palmito', 'San Benito Abad', 'San Marcos', 'San Onofre', 'San Pedro', 'Sucre', 'Tolú Viejo', 'Alpujarra', 'Alvarado', 'Ambalema', 'Armero', 'Ataco', 'Cajamarca', 'Chaparral', 'Coello', 'Coyaima', 'Cunday', 'Dolores', 'Espinal', 'Falan', 'Flandes', 'Fresno', 'Guamo', 'Herveo', 'Honda', 'Icononzo', 'Mariquita', 'Melgar', 'Murillo', 'Natagaima', 'Ortega', 'Palocabildo', 'Piedras', 'Planadas', 'Prado', 'Purificación', 'Rio Blanco', 'Roncesvalles', 'Rovira', 'Saldaña', 'Santa Isabel', 'Venadillo', 'Villahermosa', 'Villarrica', 'Arauquita', 'Cravo Norte', 'Fortul', 'Puerto Rondón', 'Saravena', 'Tame', 'Arauca', 'Yopal', 'Aguazul', 'Chámeza', 'Hato Corozal', 'La Salina', 'Monterrey', 'Pore', 'Recetor', 'Sabanalarga', 'Sácama', 'Tauramena', 'Trinidad', 'Villanueva', 'Mocoa', 'Colón', 'Orito', 'Puerto Caicedo', 'Puerto Guzmán', 'Leguízamo', 'Sibundoy', 'San Francisco', 'San Miguel', 'Santiago', 'Leticia', 'El Encanto', 'La Chorrera', 'La Pedrera', 'La Victoria', 'Puerto Arica', 'Puerto Nariño', 'Puerto Santander', 'Tarapacá', 'Inírida', 'Barranco Minas', 'Mapiripana', 'San Felipe', 'Puerto Colombia', 'La Guadalupe', 'Cacahual', 'Pana Pana', 'Morichal', 'Mitú', 'Caruru', 'Pacoa', 'Taraira', 'Papunaua', 'Puerto Carreño', 'La Primavera', 'Santa Rosalía', 'Cumaribo', 'San José del Fragua', 'Barranca de Upía', 'Palmas del Socorro', 'San Juan de Río Seco', 'Juan de Acosta', 'Fuente de Oro', 'San Luis de Gaceno', 'El Litoral del San Juan', 'Villa de San Diego de Ubate', 'Barranco de Loba', 'Togüí', 'Santa Rosa del Sur', 'El Cantón del San Pablo', 'Villa de Leyva', 'San Sebastián de Buenavista', 'Paz de Río', 'Hatillo de Loba', 'Sabanas de San Angel', 'Calamar', 'Río de Oro', 'San Pedro de Uraba', 'San José del Guaviare', 'Santa Rosa de Viterbo', 'Santander de Quilichao', 'Miraflores', 'Santafé de Antioquia', 'San Carlos de Guaroa', 'Palmar de Varela', 'Santa Rosa de Osos', 'San Andrés de Cuerquía', 'Valle de San Juan', 'San Vicente de Chucurí', 'San José de Miranda', 'Providencia', 'Santa Rosa de Cabal', 'Guayabal de Siquima', 'Belén de Los Andaquies', 'Paz de Ariporo', 'Santa Helena del Opón', 'San Pablo de Borbur', 'La Jagua del Pilar', 'La Jagua de Ibirico', 'San Luis de Sincé', 'San Luis de Gaceno', 'El Carmen de Bolívar', 'El Carmen de Atrato', 'San Juan de Betulia', 'Pijiño del Carmen', 'Vigía del Fuerte', 'San Martín de Loba', 'Altos del Rosario', 'Carmen de Apicala', 'San Antonio del Tequendama', 'Sabana de Torres', 'El Retorno', 'San José de Uré', 'San Pedro de Cartago', 'Campo de La Cruz', 'San Juan de Arama', 'San José de La Montaña', 'Cartagena del Chairá', 'San José del Palmar', 'Agua de Dios', 'San Jacinto del Cauca', 'San Agustín', 'El Tablón de Gómez', 'San Andrés', 'San José de Pare', 'Valle de Guamez', 'San Pablo de Borbur', 'Santiago de Tolú', 'Bogotá D.C.', 'Carmen de Carupa', 'Ciénaga de Oro', 'San Juan de Urabá', 'San Juan del Cesar', 'El Carmen de Chucurí', 'El Carmen de Viboral', 'Belén de Umbría', 'Belén de Bajira', 'Valle de San José', 'San Luis', 'San Miguel de Sema', 'San Antonio', 'San Benito', 'Vergara', 'San Carlos', 'Puerto Alegría', 'Hato', 'San Jacinto', 'San Sebastián', 'San Carlos', 'Tuta', 'Silos', 'Cácota', 'El Dovio', 'Toledo', 'Roldanillo', 'Mutiscua', 'Argelia', 'El Zulia', 'Salazar', 'Sevilla', 'Zarzal', 'Cucutilla', 'El Cerrito', 'Cartago', 'Caicedonia', 'Puerto Santander', 'Gramalote', 'El Cairo', 'El Tarra', 'La Unión', 'Restrepo', 'Teorama', 'Dagua', 'Arboledas', 'Guacarí', 'Lourdes', 'Ansermanuevo', 'Bochalema', 'Bugalagrande', 'Convención', 'Hacarí', 'La Victoria', 'Herrán', 'Ginebra', 'Yumbo', 'Obando', 'Tibú', 'San Cayetano', 'San Calixto', 'Bolívar', 'La Playa', 'Cali', 'San Pedro', 'Guadalajara de Buga', 'Chinácota', 'Ragonvalia', 'La Esperanza', 'Villa del Rosario', 'Chitagá', 'Calima', 'Sardinata', 'Andalucía', 'Pradera', 'Abrego', 'Los Patios', 'Ocaña', 'Bucarasica', 'Yotoco', 'Palmira', 'Riofrío', 'Santiago', 'Alcalá', 'Versalles', 'Labateca', 'Cachirá', 'Villa Caro', 'Durania', 'El Águila', 'Toro', 'Candelaria', 'La Cumbre', 'Ulloa', 'Trujillo', 'Vijes']

var arregloNit = ['Banco Davivienda - 860034313-7', 'David Tobares SAS - 8787467399-0']
var actividades = ['1081 Elaboración de productos', '1082 Elaboración de cacao', '1040 Elaboración de productos', '1051 Elaboración de productos' ];

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
        text.innerHTML = "Ver más"
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

// Funcion para cambiar los estilos de las pestañas de un contenedor
const changeTab = (element) => {
    document.querySelector('.tabsContainer__item').classList.replace("tabsContainer__item", "tabsContainer__item--inactive")
    element.classList.replace("tabsContainer__item--inactive", "tabsContainer__item")
    if (element.children[0].classList.contains('active') == false) {
        document.querySelector('.active').classList.remove('active')
        element.children[0].classList.add('active')
    }
}

// Funcion para cambiar el contenido de los contenedores que tienen varias pestañas
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
