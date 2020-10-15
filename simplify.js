/* permet de convertir un nombre
Par exemple 100 000 devient 1 α
Cette fonction prend deux arguments le nombre à convertir (e)
Et l'(id) qui définit l'id html dans lequel ce résultat va être rendu
*/
//const simplify = (e,id)=> Math.round(e) >= 100000 ? id.innerHTML = Math.round(e/100000)+' α': id.innerHTML = Math.round(e); 

const simplify = (e, id) => {

  if (Math.round(e) >= 100000 && Math.round(e) <= 100000000)
    id.innerHTML = Math.round(e/100000)+' α';
  else if (Math.round(e) >= 100000000 && Math.round(e) <= 100000000000)
    id.innerHTML = Math.round(e/100000000)+' β';
  else if (Math.round(e) >= 100000000000)
    id.innerHTML = Math.round(e/100000000000)+' γ';
  else
    id.innerHTML = Math.round(e);
}




