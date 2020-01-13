// définition de la classe personnage
class Personnage {
    constructor(prix, nombre, production,description,divPrix,divNb,divProd,divDesc) {
      this.prix = prix;
      this.nombre = nombre;
      this.production = production;
      this.description = description;
      this.divPrix = divPrix;
      this.divNb = divNb;
      this.divProd = divProd;
      this.divDesc = divDesc;
  }
       decrire() {  // on décrit le personnage dans le code html	
          document.getElementById(this.divPrix).innerHTML = this.prix;
          document.getElementById(this.divNb).innerHTML = this.nombre;
          document.getElementById(this.divProd).innerHTML = this.production; 
          document.getElementById(this.divDesc).innerHTML = this.description;
      }
    }
 // création des personnages 
 const paysanSerpette = new Personnage(100, 0, 0,"Un simple paysan",'prixPaysan','nbPaysan','productionPaysan','descPaysan');
 const soldatEpee = new Personnage(11050, 0, 0,"Un soldat qui se bat à l'épée",'prixSEpee','nbSEpee','productionSEpee','descSEpee');
 const archer = new Personnage(46000, 0, 0,"Un archer qui tire à distance",'prixArcher','nbArcher','productionArcher','descArcher');
 const lanceur = new Personnage(100000, 0, 0,"Un lanceur de pierre",'prixLP','nbLP','productionLP','descLP');
 const soldatLance = new Personnage(421000, 0, 0,"Un soldat à lance",'prixSLance','nbSLance','productionSLance','descSLance');
 const soldatEpeeCasque = new Personnage(1000000, 0, 0,"Un soldat à épée et casque",'prixSCEpee','nbSCEpee','productionSCEpee','descSCEpee');    