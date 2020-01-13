document.addEventListener("DOMContentLoaded",(event) => {
let myOr = Number(0); // on déclare la var et on lui met 100000 or pour que le développeur peut tester le jeu
                   // on met la var à 0 si on donne le jeu à un joueur
let bonus = true;            
document.getElementById('saveBtn').addEventListener('click', function() {
	// récupération de l'or stockée dans le navigateur
	myOr = JSON.parse(localStorage.getItem("Or"));
	affGold.innerHTML= myOr;
	// récupération du paysan
	let recPaysan = JSON.parse(localStorage.getItem("Paysan"));
	paysanSerpette.prix = recPaysan.prix;
	paysanSerpette.nombre = recPaysan.nombre;
	paysanSerpette.production = recPaysan.production;
	paysanSerpette.decrire();
	// récupération du soldat à épée
	let recSoldatEpee = JSON.parse(localStorage.getItem("SoldatEpee"));
	soldatEpee.prix = recSoldatEpee.prix;
	soldatEpee.nombre = recSoldatEpee.nombre;
	soldatEpee.production = recSoldatEpee.production;
	soldatEpee.decrire();
    // récupération de l'archer
    let recArcher = JSON.parse(localStorage.getItem("Archer"));
    archer.prix = recArcher.prix;
    archer.nombre = recArcher.nombre;
    archer.production = recArcher.production;
    archer.decrire();
    // récupération du lanceur de pierre
    let recLanceur = JSON.parse(localStorage.getItem("Lanceur"));
    lanceur.prix = recLanceur.prix;
    lanceur.nombre = recLanceur.nombre;
    lanceur.production = recLanceur.production;
    lanceur.decrire();
    // récupération du soldat à lance 
    let recSoldatLance = JSON.parse(localStorage.getItem("SoldatLance"));
    soldatLance.prix = recSoldatLance.prix;
    soldatLance.nombre = recSoldatLance.nombre;
    soldatLance.production = recSoldatLance.production;
    soldatLance.decrire();
    // récupération du soldat à épée et casque 
    let recSoldatEpeeCasque = JSON.parse(localStorage.getItem("SoldatEpeeCasque"));
    soldatEpeeCasque.prix = recSoldatEpeeCasque.prix;
    soldatEpeeCasque.nombre = recSoldatEpeeCasque.nombre;
    soldatEpeeCasque.production = recSoldatEpeeCasque.production;
    soldatEpeeCasque.decrire();
    // récupération des items
    // récupération du multiplicateur de production
    let recMultiplicateur = JSON.parse(localStorage.getItem("MultiplicateurProduction"));
    multiplicateur.prix = recMultiplicateur.prix;
    multiplicateur.effet = recMultiplicateur.effet;
    multiplicateur.decrire();
    // mettre les stats à jour
    stats();

    });
    let timer = 0;
    var myInterv 
document.getElementById('adBtn').addEventListener('click', () => {
    timer = 30;
    console.log('ok')
    console.log(myInterv)
    const adBonus=() => {
        if (timer > 0) {
            timer -= 1;
            bonus = false;
            stats();
        } else if (timer === 0) {
            bonus = true;
            timer = 0;
            stats();
        }
    }
    if (myInterv === undefined) { myInterv = setInterval(adBonus, 1000)};
    });
document.getElementById('or').addEventListener('click', function() {   // on incrémente de 1 quand on clique sur l'image or          
    myOr++;
    affGold.innerHTML = myOr;
    affGoldTitle.innerHTML = myOr + " Or - Pixel Kingdom Cliker"; 
    }); 
  // fonction fléchée qui permet d'afficher les stats dans la page
  const stats=() =>{         
 document.getElementById('prodTotale').innerHTML = (soldatEpee.production + paysanSerpette.production+ archer.production+ lanceur.production+ soldatLance.production+ soldatEpeeCasque.production)*multiplicateur.effet;    
 document.getElementById('persoTotale').innerHTML =(paysanSerpette.nombre + soldatEpee.nombre + archer.nombre + lanceur.nombre + soldatLance.nombre + soldatEpeeCasque.nombre);
 if (bonus === true) {
    document.getElementById('statBonusPub').innerHTML ='Désactivé';  
 }
 if (bonus === false) {
    document.getElementById('statBonusPub').innerHTML ='Activé'; 
 }
}
// inclure les descriptions dans la page html
//decrire les items
multiplicateur.decrire();
// decrire les personnages
paysanSerpette.decrire();
soldatEpee.decrire();
archer.decrire();
lanceur.decrire();
soldatLance.decrire();
soldatEpeeCasque.decrire();
// affichage des stats dans la page
stats();
															// acheter des personnages
// acheter un paysan
const eltPayImg = document.getElementById('paysanImg');
eltPayImg.addEventListener('click', function() {             
    if (myOr >= paysanSerpette.prix ) {
    	myOr -= paysanSerpette.prix;
		paysanSerpette.prix += 150;
		//paysanSerpette.prix = Math.round(paysanSerpette.prix)*1.25;
		//paysanSerpette.prix = 100 *(1.25*paysanSerpette.nombre);
    	paysanSerpette.nombre += 1;
    	paysanSerpette.production += 1;
    	affGold.innerHTML = myOr;
		paysanSerpette.decrire();

		stats();
    }
    });
// acheter un soldat à épée
const eltSEPImg = document.getElementById('SoldatEpeeImg');
eltSEPImg.addEventListener('click', function() {             
    if (myOr >= soldatEpee.prix ) {
    	myOr -= soldatEpee.prix;
    	soldatEpee.prix += 840;
    	soldatEpee.nombre += 1;
    	soldatEpee.production += 8;
    	affGold.innerHTML = myOr;
    	soldatEpee.decrire();

		stats();
    }
    });
// acheter un archer
const eltArcherImg = document.getElementById('ArcherImg');
eltArcherImg.addEventListener('click', function() {             
    if (myOr >= archer.prix ) {
    	myOr -= archer.prix;
    	archer.prix += 2100;
    	archer.nombre += 1;
    	archer.production += 30;
    	affGold.innerHTML = myOr;	
    	archer.decrire();

		stats();
    }
    });
//acheter un lanceur de pierre
const eltLanceurImg = document.getElementById('LanceurPImg');
eltLanceurImg.addEventListener('click', function() {             
    if (myOr >= lanceur.prix ) {
    	myOr -= lanceur.prix;
    	lanceur.prix += 7300;
    	lanceur.nombre += 1;
    	lanceur.production += 100;
    	affGold.innerHTML = myOr;	
    	lanceur.decrire();

		stats();
    }
	});
//acheter un soldat à lance
const eltSoldatLanceImg = document.getElementById('SoldatLanceImg');
eltSoldatLanceImg.addEventListener('click', function() {             
    if (myOr >= soldatLance.prix ) {
    	myOr -= soldatLance.prix;
    	soldatLance.prix += 26000;
    	soldatLance.nombre += 1;
    	soldatLance.production += 240;
    	affGold.innerHTML = myOr;	
    	soldatLance.decrire();

		stats();
    }
	});
//acheter un soldat à épée et casque
const eltSoldatEpeeCasqueImg = document.getElementById('SoldatEpeeCasqueImg');
eltSoldatEpeeCasqueImg.addEventListener('click', function() {             
    if (myOr >= soldatEpeeCasque.prix ) {
    	myOr -= soldatEpeeCasque.prix;
    	soldatEpeeCasque.prix += 150000;
    	soldatEpeeCasque.nombre += 1;
    	soldatEpeeCasque.production += 1000;
    	affGold.innerHTML = myOr;	
    	soldatEpeeCasque.decrire();

		stats();
    }
	});			
																	//acheter des items
// acheter un multiplicateur de production																	
const eltMultiImg = document.getElementById('multipliProdImg');
eltMultiImg.addEventListener('click', function() {             
	if (myOr >= multiplicateur.prix ) {
		myOr -= multiplicateur.prix;
		multiplicateur.prix *= 15;
		affGold.innerHTML = myOr;
		multiplicateur.effet += 1;	
		multiplicateur.decrire();	
		stats();
	}
	});																															
    const travailPersonnages=() =>{         // les personnages produisent de l'or

    if (bonus === true) {
        console.log('x1')
        myOr += paysanSerpette.production*multiplicateur.effet;
        myOr += soldatEpee.production*multiplicateur.effet;
        myOr += archer.production*multiplicateur.effet;
        myOr += lanceur.production*multiplicateur.effet;
        myOr += soldatLance.production*multiplicateur.effet;
        myOr += soldatEpeeCasque.production*multiplicateur.effet;
    }
    else if (bonus === false) {
        console.log('x2')
        myOr += paysanSerpette.production*multiplicateur.effet*2;
        myOr += soldatEpee.production*multiplicateur.effet*2;
        myOr += archer.production*multiplicateur.effet*2;
        myOr += lanceur.production*multiplicateur.effet*2;
        myOr += soldatLance.production*multiplicateur.effet*2;
        myOr += soldatEpeeCasque.production*multiplicateur.effet*2;
    }
    affGold.innerHTML = Math.round(myOr);
    affGoldTitle.innerHTML = Math.round(myOr) + " Or - Pixel Kingdom Cliker";    
}
// Gestion de la fermeture ou du refresh de la page web
window.addEventListener("beforeunload", function () {
	// sauvegarder dans le localstorage la variable myOr
	localStorage.setItem("Or", JSON.stringify(myOr));
	// sauvegarder les personnages
	//sauvegarder le paysan
	localStorage.setItem("Paysan", JSON.stringify(paysanSerpette));
	//sauvegarder le soldat à épée
	localStorage.setItem("SoldatEpee", JSON.stringify(soldatEpee));
    //sauvegarder l'archer
    localStorage.setItem("Archer", JSON.stringify(archer));
    //sauvegarder le lanceur de pierre
    localStorage.setItem("Lanceur", JSON.stringify(lanceur));
    //sauvegarde du soldat à lance 
    localStorage.setItem("SoldatLance", JSON.stringify(soldatLance));
    // sauvegarde du soldat à épée et casque
    localStorage.setItem("SoldatEpeeCasque", JSON.stringify(soldatEpeeCasque));
    // sauvegarder les items
    localStorage.setItem("MultiplicateurProduction", JSON.stringify(multiplicateur));
});    
setInterval(travailPersonnages, 1000);     // code asynchrone pour dire que la function      
});                                   // est répétée toute les secondes


   







