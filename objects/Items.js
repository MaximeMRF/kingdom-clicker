// définition de la classe item
class Item {
	constructor(prix,effet,divPrix,divEffet) {
		this.prix = prix;
		this.effet = effet;
		this.divPrix = divPrix;
		this.divEffet = divEffet;
	}
		decrire() {
			document.getElementById(this.divPrix).innerHTML = this.prix;
			document.getElementById(this.divEffet).innerHTML = this.effet;
		}
}
// création des items
const multiplicateur = new Item(400000,1,'prixMultiProd','effetMultiProd');