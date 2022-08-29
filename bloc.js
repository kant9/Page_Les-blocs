function Mafonction()
{
   /*DECLARATION DES VARIABLES POUR LES PARAGRAPHES DANS LES 4 BLOCS*/
    var para1=document.querySelector("#blc1");
    var para2=document.querySelector("#blc2");
    var para3=document.querySelector("#blc3");
    var para4=document.querySelector("#blc4");
 /*DECLARATION DES VARIABLES POUR LES 4 BLOCS et du conteneur*/
    var blocx1=document.querySelector("#x1");
    var blocx2=document.querySelector("#x2");
    var blocx3=document.querySelector("#x3");
    var blocx4=document.querySelector("#x4");
    var conteneur=document.querySelector("#contener");


 /*DECLARATION des COULEUR DE POLICE ET DE FOND DES PARAGRAPHES ET DES BLOCS ET DU CONTENEUR*/
    para1.style.color="red";
    para2.style.color="blue";
    para3.style.color="white";/* 70*2 800 000  ciment 70 000*7 sable 70 000*2 */
    para4.style.color="orange";

    blocx1.style.backgroundColor="blue";
    blocx2.style.backgroundColor="red";
    blocx3.style.backgroundColor="black"; 
    blocx4.style.backgroundColor="green";
    conteneur.style.backgroundColor="#40E0D0";



}

function formulaire()
{
    var preNom=document.monForm.firstname.value;
    document.getElementById("Np").innerHTML=preNom;

    var dat=document.monForm.maDate.value;
    document.getElementById("Dn").innerHTML=dat;

    var samaTel=document.monForm.tel.value;
    document.getElementById("num").innerHTML=samaTel;

    var emai=document.monForm.email.value;
    document.getElementById("Em").innerHTML=emai;

    var messag=document.monForm.MonMess.value;
    document.getElementById("Mess").innerHTML=messag;
}
/*document.querySelector("#btn").addEventListener("click", Mafonction);*/