document.getElementById("myForm").onsubmit = function(event) {
    var dollar = document.getElementById("dollar").value;
    var result=document.getElementById("result");
     
    if(dollar ==""){
        result.innerHTML=" Enter Number ";
    }else if(isNaN(dollar)){
        result.innerHTML=" Enter Number not text ";
    }else if (dollar < 0){
        result.innerHTML=" Enter Positive Number ";
    }else if(dollar == 0){
        result.innerHTML=" Enter Number Rather than 0 ";
    }else{
        result.innerHTML= dollar * 50 + " EGP" ;
        
    }
    return false;

};