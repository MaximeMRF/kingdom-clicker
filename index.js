document.addEventListener("DOMContentLoaded",() => {
let Or = 0; // initialisation de l'or 
const allObjects = [multiplicateur,paysanSerpette,soldatEpee,archer,lanceur,soldatLance,soldatEpeeCasque,arbaletrier];                   
// On met tout les personnages dans un tableau qui nous permettra de mieux les manipuler 
// notamment avec un forEach
let bonus = true;  // bonus fonctionne avec la fonction pub
document.body.style.backgroundColor = "#bce7fd"; // pour gérer le darktheme          
document.getElementById('saveBtn').addEventListener('click', ()=> {
	// récupération de l'or stockée dans le navigateur
	Or = JSON.parse(localStorage.getItem("Or"));
    affGold.innerHTML= Or;
    // récupération de tout les objects de la classe Personnage sauvegardés dans le nav
    allObjects.forEach((e)=> {
        let recObj = JSON.parse(localStorage.getItem(e.key));
        e.prix = recObj.prix;
        e.nombre = recObj.nombre;
        e.production = recObj.production; 
    });

    allObjects.forEach((e)=>e.decrire()); 
    // mettre les stats à jour
    stats();

    });
    document.getElementById('darkBtn').addEventListener('click', ()=> {
        if (document.body.style.backgroundColor === "rgb(188, 231, 253)") {
            document.body.style.backgroundColor = "#121212";
            document.body.style.color = "#BB86FC";
            document.getElementById('PxKingdom').style.color = "#03DAC5";
            //document.getElementById('PaysanImg').style.opacity = "0.7"; 
            document.getElementById('darkBtn').innerHTML = "Theme clair";
        }
        else  {
            document.body.style.backgroundColor = "#bce7fd";
            document.body.style.color = "black";
            document.getElementById('PxKingdom').style.color = "#052f33";
            document.getElementById('darkBtn').innerHTML = "Theme sombre";
        }
    });
    // voir une pub, fonction enlevée à cause de problèmes dû aux pubs
    /*
    let timer = 0;
    var myInterv 
document.getElementById('adBtn').addEventListener('click', () => {
    timer = 30;
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
    */
document.getElementById('or').addEventListener('click', function() {   // on incrémente de 1 quand on clique sur l'image or          
    Or++;
    affGold.innerHTML = Or +' α';
    affGoldTitle.innerHTML = Or + " Or - Pixel Kingdom Cliker"; 
    }); 
  // fonction fléchée qui permet d'afficher les stats dans la page
  const stats=() =>{         
 document.getElementById('prodTotale').innerHTML = (soldatEpee.production + paysanSerpette.production+ archer.production+ lanceur.production+ soldatLance.production+ soldatEpeeCasque.production+ arbaletrier.production)*multiplicateur.production;    
 document.getElementById('persoTotale').innerHTML =(paysanSerpette.nombre + soldatEpee.nombre + archer.nombre + lanceur.nombre + soldatLance.nombre + soldatEpeeCasque.nombre+ arbaletrier.nombre);
 /*if (bonus === true) {
    document.getElementById('statBonusPub').innerHTML ='Désactivé';  
 }
 if (bonus === false) {
    document.getElementById('statBonusPub').innerHTML ='Activé'; 
 }*/
}
// inclure les descriptions dans la page html
//decrire les personnages et items avec forEach
allObjects.forEach((e)=>e.decrire()); 
// affichage des stats dans la page
stats();
															// acheter des personnages
// acheter un paysan
document.getElementById('PaysanImg').addEventListener('click', acheterPaysan=()=> {             
    if (Or >= paysanSerpette.prix ) {
    	Or -= paysanSerpette.prix;
        paysanSerpette.prix = Math.round(paysanSerpette.prix*1.15);
    	paysanSerpette.nombre += 1;
    	paysanSerpette.production += 1;
    	affGold.innerHTML = Or;
		paysanSerpette.decrire();
		stats();
    }
    });
// acheter un soldat à épée
document.getElementById('SoldatEpeeImg').addEventListener('click', acheterSoldatEpee=()=> {             
    if (Or >= soldatEpee.prix ) {
    	Or -= soldatEpee.prix;
    	soldatEpee.prix = Math.round(soldatEpee.prix*1.15);
    	soldatEpee.nombre += 1;
    	soldatEpee.production += 8;
    	affGold.innerHTML = Or;
    	soldatEpee.decrire();
		stats();
    }
    });
// acheter un archer
document.getElementById('ArcherImg').addEventListener('click', acheterArcher=()=> {             
    if (Or >= archer.prix ) {
    	Or -= archer.prix;
    	archer.prix = Math.round(archer.prix*1.15);
    	archer.nombre += 1;
    	archer.production += 30;
    	affGold.innerHTML = Or;	
    	archer.decrire();
		stats();
    }
    });
//acheter un lanceur de pierre
document.getElementById('LanceurPImg').addEventListener('click', acheterLanceur=()=> {             
    if (Or >= lanceur.prix ) {
    	Or -= lanceur.prix;
    	lanceur.prix = Math.round(lanceur.prix*1.15);
    	lanceur.nombre += 1;
    	lanceur.production += 100;
    	affGold.innerHTML = Or;	
    	lanceur.decrire();
		stats();
    }
	});
//acheter un soldat à lance
document.getElementById('SoldatLanceImg').addEventListener('click', acheterSoldatLance=()=> {             
    if (Or >= soldatLance.prix ) {
    	Or -= soldatLance.prix;
    	soldatLance.prix = Math.round(soldatLance.prix*1.15);
    	soldatLance.nombre += 1;
    	soldatLance.production += 240;
    	affGold.innerHTML = Or;	
    	soldatLance.decrire();
		stats();
    }
	});
//acheter un soldat à épée et casque
document.getElementById('SoldatEpeeCasqueImg').addEventListener('click', acheterSoldatEpeeCasque=()=> {             
    if (Or >= soldatEpeeCasque.prix ) {
    	Or -= soldatEpeeCasque.prix;
    	soldatEpeeCasque.prix = Math.round(soldatEpeeCasque.prix*1.15)
    	soldatEpeeCasque.nombre += 1;
    	soldatEpeeCasque.production += 1000;
    	affGold.innerHTML = Or;	
    	soldatEpeeCasque.decrire();
		stats();
    }
    });
//acheter un arbalétrier
document.getElementById('ArbaletrierImg').addEventListener('click', acheterArbaletrier=()=> {             
    if (Or >= arbaletrier.prix ) {
    	Or -= arbaletrier.prix;
    	arbaletrier.prix = Math.round(arbaletrier.prix*1.15);
    	arbaletrier.nombre += 1;
    	arbaletrier.production += 5200;
    	affGold.innerHTML = Or;	
    	arbaletrier.decrire();
		stats();
    }
	});				
																	//acheter des items
// acheter un multiplicateur de production																	
document.getElementById('multipliProdImg').addEventListener('click', acheterMultiplicateur=()=> {             
	if (Or >= multiplicateur.prix ) {
		Or -= multiplicateur.prix;
        multiplicateur.prix *= 15;
        multiplicateur.nombre += 1;
		affGold.innerHTML = Or;
		multiplicateur.production += 1;	
		multiplicateur.decrire();	
		stats();
	}
	});																															
    const travailPersonnages=() =>{         // les personnages produisent de l'or
    //allObjects.forEach((e)=>console.log(e));
    if (bonus === true) {
        Or += paysanSerpette.production*multiplicateur.production;
        Or += soldatEpee.production*multiplicateur.production;
        Or += archer.production*multiplicateur.production;
        Or += lanceur.production*multiplicateur.production;
        Or += soldatLance.production*multiplicateur.production;
        Or += soldatEpeeCasque.production*multiplicateur.production;
        Or += arbaletrier.production*multiplicateur.production;
    }
    else if (bonus === false) {
        Or += paysanSerpette.production*multiplicateur.production*2;
        Or += soldatEpee.production*multiplicateur.production*2;
        Or += archer.production*multiplicateur.production*2;
        Or += lanceur.production*multiplicateur.production*2;
        Or += soldatLance.production*multiplicateur.production*2;
        Or += soldatEpeeCasque.production*multiplicateur.production*2;
        Or += arbaletrier.production*multiplicateur.production*2;
    }
    affGold.innerHTML = Math.round(Or)+' α';
    affGoldTitle.innerHTML = Math.round(Or) + " Or - Pixel Kingdom Cliker";    
}
// Gestion de la fermeture ou du refresh de la page web
window.addEventListener("beforeunload", function () {
	// sauvegarder dans le localstorage la variable Or
	localStorage.setItem("Or", JSON.stringify(Or));
	// sauvegarder les personnages et items
    allObjects.forEach((e)=>localStorage.setItem(e.key, JSON.stringify(e)));
});    
setInterval(travailPersonnages, 1000);     // code asynchrone pour dire que la function      
});                                   // est répétée toute les secondes


   







