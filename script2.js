let myinput=document.getElementById('pass');

function afisare(){
    var elems = document.getElementsByClassName('req');
for (var i=0;i<elems.length;i+=1){
  elems[i].style.display = 'block';
}
}


function stergere(){
    var elems = document.getElementsByClassName('req');
for (var i=0;i<elems.length;i+=1){
  elems[i].style.display = 'none';
}
}

function validarelungime(){
    let pass = document.getElementById('pass').value;
    if(pass.length<8 || pass.length>20){
        document.getElementById("req1").style.color="red";
        document.getElementById("req1").innerHTML= "✘ Password length 8-20"
        return false;
    }
    else{
        document.getElementById("req1").style.color="green";
        document.getElementById("req1").innerHTML= "✔ Password length 8-20"
        return true;
    }
}

function validareNr(){
    let pass = document.getElementById('pass').value;
    if(/\d/.test(pass)){
        document.getElementById("req2").style.color="green";
        document.getElementById("req2").innerHTML= "✔ At least one number"
        return true;
    }
    else{
        document.getElementById("req2").style.color="red";
        document.getElementById("req2").innerHTML= "✘ At least one number"
        return false;
    }
}

function validareCapital(){
    let pass = document.getElementById('pass').value;
    if(Boolean(pass.match(/[A-Z]/))){
        document.getElementById("req3").style.color="green";
        document.getElementById("req3").innerHTML= "✔ At least one big letter"
        return true;
    }
    else{
        document.getElementById("req3").style.color="red";
        document.getElementById("req3").innerHTML= "✘ At least one big letter"
        return false;
    }
}

function validareSpecial(){
    const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    let pass = document.getElementById('pass').value;
    if(specialChars.test(pass)){
        document.getElementById("req4").style.color="green";
        document.getElementById("req4").innerHTML= "✔ At least one special character"
        return true;
    }
    else{
        document.getElementById("req4").style.color="red";
        document.getElementById("req4").innerHTML= "✘ At least one special character"
        return false;
    }
}

function validareLitMica(){
    let pass = document.getElementById('pass').value;
    if(Boolean(pass.match(/[a-z]/))){
        document.getElementById("req5").style.color="green";
        document.getElementById("req5").innerHTML= "✔ At least one small character"
        return true;
    }
    else{
        document.getElementById("req5").style.color="red";
        document.getElementById("req5").innerHTML= "✘ At least one small character"
        return false;
    }
}

function validate_password() {
 
    var adv=0;
    validarelungime();
    validareNr();
    validareCapital();
    validareSpecial();
    validareLitMica();
    let pass = document.getElementById('pass').value;
    let confirm_pass = document.getElementById('repass').value;
    if (pass != confirm_pass) {
        document.getElementById('missmatch').style.color = 'red';
        document.getElementById('missmatch').style.height="20px";
        document.getElementById('missmatch').innerHTML = "✘ Passwords don't match";
        document.getElementById('btn').disabled = true;
        document.getElementById('btn').style.marginTop="25px";
        document.getElementById('btn').style.marginTop=(5);
    } else {
        document.getElementById('missmatch').style.color = 'green';
        document.getElementById('missmatch').style.height="20px";
        document.getElementById('missmatch').innerHTML = '✔ Passwords match';
        //document.getElementById('btn').disabled = false;
        adv=1;
        document.getElementById('btn').style.marginTop="25px";
        document.getElementById('btn').style.opacity = (1);
    }
    if(adv && (validareCapital() && validareLitMica() && validareNr() && validareSpecial() && validarelungime())){
        document.getElementById('btn').disabled = false;
    }
    else{
        document.getElementById('btn').disabled = true;
    }
}

