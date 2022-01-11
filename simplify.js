/* permet de convertir un nombre
Par exemple 100 000 devient 1 α
*/

const simplify = (e) => {
  let or = 0
  if (Math.round(e) >= 100000 && Math.round(e) <= 100000000)
    or = Math.round(e/100000)+' α';
  else if (Math.round(e) >= 100000000000 && Math.round(e) <= 100000000000000)
    or = Math.round(e/100000000000)+' β';
  else if (Math.round(e) >= 100000000000000)
    or = Math.round(e/100000000000000)+' γ';
  else
    or = Math.round(e);

  return or
}
