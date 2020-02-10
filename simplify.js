const simplify = (e,id)=>Math.round(e) >= 100000 ? id.innerHTML = Math.round(e/100000)+' α': id.innerHTML = Math.round(e);         
