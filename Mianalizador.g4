grammar Mianalizador;

dsl:regla+ accion+;

regla: REGLA ID ABRE_LLAVE SI condicion ENTONCES comando CIERRA_LLAVE PUNTO_Y_COMA;
condicion:accesoNoAutorizado|multiplesIntentosFallidos|actividadSospechosa;
accesoNoAutorizado:INTENTO_ACCESO;
multiplesIntentosFallidos:INTENTOS_FALLIDOS MAYOR NUMERO;
actividadSospechosa:ACCESO_RECURSOS Y NO_ES_ADMIN;
comando:AGREGAR_USUARIO| AGREGAR_IP | ACTIVAR_MONITOREO;   
accion: ACCION tiposaccion ABRE_LLAVE CIERRA_LLAVE;
tiposaccion: comando | ID;

//Palabras clave
REGLA: 'regla';
ACCION:'accion';
SI: 'cuando';
ENTONCES: 'entonces';

INTENTO_ACCESO: 'intentoAccesoFueraHorario';
INTENTOS_FALLIDOS: 'intentosFallidos';
ACCESO_RECURSOS: 'accesoARecursosSensibles';
NO_ES_ADMIN: 'noEsAdministrador';
AGREGAR_USUARIO:'agregarUsuarioAListaNegra';
AGREGAR_IP:'agregarIPAListaNegra';
ACTIVAR_MONITOREO:'activarMonitoreoDetallado';

//Operadores 
GUION_BAJO:'_';
GUION_MEDIO:'-';
BARRA_DIAGONAL:'/';
ABRE_LLAVE: '{';
CIERRA_LLAVE: '}';
MAYOR:'>';
Y: 'y';
PUNTO_Y_COMA: ';';
//Identificadores
ID:'\'' ( ~['\r\n] )* '\''| [a-zA-Z][a-zA-Z0-9_/-]*;
NUMERO:[0-9]+;
WS : [ \t\r\n]+ -> skip;
