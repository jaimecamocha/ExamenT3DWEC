// JAIME FERNÁNDEZ CALVO
//

//sacamos el ancho y el alto de la pantalla
export const canvas = document.querySelector('canvas');
export const ctx = canvas.getContext('2d');

export const width = canvas.width = window.innerWidth; //FALLO: necesitamos 'innerWidth' para sacar el ancho de la página
export const height = canvas.height = window.innerHeight;
