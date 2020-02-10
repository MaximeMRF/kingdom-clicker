// définition de la classe personnage
class Personnage {
    constructor(prix, nombre, production,description,divPrix,divNb,divProd,divDesc,key) {
      this.prix = prix;
      this.nombre = nombre;
      this.production = production;
      this.description = description;
      this.divPrix = divPrix;
      this.divNb = divNb;
      this.divProd = divProd;
      this.divDesc = divDesc;
      this.key = key;
  }
       decrire() {  // on décrit le personnage dans le code html	
          document.getElementById(this.divPrix).innerHTML = simplify(this.prix,this.divPrix);
          document.getElementById(this.divNb).innerHTML = this.nombre;
          document.getElementById(this.divProd).innerHTML = this.production; 
          document.getElementById(this.divDesc).innerHTML = this.description;
      }
    }
 // création des personnages 
 const paysanSerpette = new Personnage(100, 0, 0,"Un simple paysan",'prixPaysan','nbPaysan','productionPaysan','descPaysan','Paysan');
 const soldatEpee = new Personnage(1240, 0, 0,"Un soldat qui se bat à l'épée",'prixSEpee','nbSEpee','productionSEpee','descSEpee','SoldatEpee');
 const archer = new Personnage(11050, 0, 0,"Un archer qui tire à distance",'prixArcher','nbArcher','productionArcher','descArcher','Archer');
 const lanceur = new Personnage(421000, 0, 0,"Un lanceur de pierre",'prixLP','nbLP','productionLP','descLP','Lanceur');
 const soldatLance = new Personnage(1000000, 0, 0,"Un soldat à lance",'prixSLance','nbSLance','productionSLance','descSLance','SoldatLance');
 const soldatEpeeCasque = new Personnage(1000000, 0, 0,"Un soldat à épée et casque",'prixSCEpee','nbSCEpee','productionSCEpee','descSCEpee','SoldatEpeeCasque');
 const arbaletrier = new Personnage(15000000, 0, 0,"Un arbalétrier","prixArbaletrier","nbArbaletrier","productionArbaletrier","descArbaletrier",'Arbaletrier');
 const sorcier = new Personnage(75000000,0,0,"Un puissant mage","prixSorcier","nbSorcier","productionSorcier","descSorcier",'Sorcier');     
 // création des items
 const multiplicateur = new Personnage(400000,0,1,"Multiplie la production",'prixMultiProd','nbMultiProd','effetMultiProd','descMultiProd','MultiplicateurProduction');
 