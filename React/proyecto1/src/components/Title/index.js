export { default } from "./Title";
// Cuando nuestro app viene a importar a la carpeta Title, lo primero que busca es el archivo index
// de ésta forma, si tenemos varios componentes en la misma carpeta, al ir haciendo un "export" en este archivo
// de todos los componentes de la carpeta, en nuestro app.js sólo tenemos que hacer un import y cortito
// no doscientos imports uno por cada componente 
// O si nuestro componente tiene a su vez más componentes, nuestro import no va a ser super largo