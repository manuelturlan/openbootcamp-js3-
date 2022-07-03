let myName = "Manuel";

let mySurName = "Turlan";

let estudiante = `${myName} ${mySurName}`;

let estudianteMayus = `${myName.toUpperCase()} ${mySurName.toUpperCase()}`;

let estudianteMinus = `${myName.toLowerCase()} ${mySurName.toLowerCase()}`;

let longitudEstudiante = estudiante.length;

let primeraLetra = myName[0];

let ultimaLetra = mySurName[mySurName.length - 1];

let eliminarEspacios = estudiante.replaceAll(' ','');

let contieneNombre = estudiante.includes(myName);