var select=document.getElementById("jotnar_selector");
var ymir=document.getElementById("ymir_des");
var surtr=document.getElementById("surtr_des");
var thrym=document.getElementById("thrym_des");
var aegir=document.getElementById("aegir_des");

select.addEventListener("change", function(){
    vanitas()
    if(select.value=="ymir"){
        ymir.style.display="block";
    }
    if(select.value=="surtr"){
        surtr.style.display="block";
    }
    if(select.value=="thrym"){
        thrym.style.display="block";
    }
    if(select.value=="aegir"){
        aegir.style.display="block";
    }

});

function vanitas(){
    ymir.style.display="none";
    surtr.style.display="none";
    thrym.style.display="none";
    aegir.style.display="none";
}

