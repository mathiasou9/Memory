
    //
let temps = 1;
let couleurtemps=["black","white"];
let click = 2;
let a =0;
let b=0;
let id =0;
let anciennb = 0;
let ancienid=0;
let idtrouver = []
let nombre = ["⌹","⌹","⌸","⌸","⍍","⍍","⌻","⌻"];
let nombrehasard = nombre.sort((a, b) => 0.5 - Math.random());
console.log(nombrehasard)

const nul = document.querySelector("#nul");
const nuit =document.querySelector(".nuit");
nul.classList.add("grey");

const idlist = document.querySelectorAll("#memory button:not(#nul)")

function changercouleur(t) {

    document.body.style.backgroundColor =couleurtemps[temps] ;
    document.querySelector("h1").style.color =couleurtemps[1-temps];
    nul.style.backgroundColor = couleurtemps[temps];
    nul.style.borderColor = couleurtemps[1-temps];
    nuit.style.color =couleurtemps[1-temps];
    nuit.style.borderColor =couleurtemps[1-temps];
    
    for (let pas = 0; pas < 8; pas++) {
        idlist[pas].style.color = couleurtemps[1-temps];
        idlist[pas].style.borderColor = couleurtemps[1-temps];
        idlist[pas].style.backgroundColor = couleurtemps[temps];
    }
    
    
}


function programe(idé) {
    
idlist[idé].addEventListener("click",function() {

    id= idé;
    a = nombrehasard[id];
    b= idlist[id];

    if (idtrouver.length === 8){
        nul.classList.add("brille");
        console.log("BRILLE")
        
    }
    else if(idtrouver.length === 0) {
        nul.classList.add("grey");
        console.log("grey")
        
    }
    else {
        nul.classList.remove("brille");
        nul.classList.remove("grey");
        console.log("blanc")
    

    }
    

    if (click === 2) { 
        
        b.innerText = a;
        
        ancienid = id
        anciennb = a
        click= 1;
      

    }
    else if (click === 1) { 

        
        click =0;
        b.innerText = a;
        if (anciennb === a) { 
            if (ancienid === id) {
                click=1;
                console.log("les même")
            }
            console.log("pair")
            idtrouver.push(b, idlist[ancienid])
            console.log( " idtrouver"+ idtrouver)
           // setTimeout(suiteTraitement, 1000) //Attendez 1 secondes avant de continuer dans la fonction suivante
            
        }
        else {


        }
        }
     
    else if (click === 0) {
        
        click =2;
        for (let pas = 0; pas < 8; pas++) {
            idlist[pas].innerText = "⌺";
        }
        
        console.log("all good")
        for (let pas = 0; pas < 8; pas++) {
            for(let pas2 = 0; pas2 < idtrouver.length; pas2++){
                
                if (idlist[pas] === idtrouver[pas2]) {
                    
                    idlist[pas].innerText ="⊠";
                    console.log("GRAND X")
            
                }
            }
            
        }
       


     }
     

})

}
nul.addEventListener("click",function() {
    nul.classList.remove("brille");
    console.log("idtrouver :"+idtrouver.length)
    click=2;
    for (let pas = 0; pas < 8; pas++) {
        idlist[pas].innerText = "⌺";
    }
    let nombrehasard = nombre.sort((a, b) => 0.5 - Math.random());
    id =0;
    anciennb = 0;
    ancienid=0;
    idtrouver = [];
    nul.classList.add("grey");
})

nuit.addEventListener("click",function() {
    
    if (temps === 0) {
        console.log("NUIT")
        nuit.innerText="mode jour";
        temps = 1;
        
        changercouleur(temps)
                     }
    else if (temps === 1) {
        console.log("NUIT")
        temps = 0;
        nuit.innerText="mode nuit";
        changercouleur(temps)
                     }
    })




for (let pas = 0; pas < 8; pas++) {
    programe(pas) 
}








