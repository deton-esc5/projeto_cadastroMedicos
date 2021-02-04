function mascara(i,t){
   
    var v = i.value;
    
    if(isNaN(v[v.length-1])){
       i.value = v.substring(0, v.length-1);
       return;
    }
    
    if(t == "crm"){
       i.setAttribute("maxlength", "9");
       if (v.length == 2 || v.length == 6) i.value += ".";
    }

    if(t === "telefone"){
        if (v.length == 1) i.value = "(" + i.value;
        if (v.length == 3) i.value += ") ";
        if(v[5] == 9){
           i.setAttribute("maxlength", "15");
           if (v.length == 10) i.value += "-";
        }else{
           i.setAttribute("maxlength", "14");
           if (v.length == 9) i.value += "-";
        }
      }
      if(t == "celular"){
        if (v.length == 1) i.value = "(" + i.value;
        if (v.length == 3) i.value += ") ";
        if(v[5] == 9){
           i.setAttribute("maxlength", "16");
           if (v.length == 11) i.value += "-";
        }else{
           i.setAttribute("maxlength", "15");
           if (v.length == 10) i.value += "-";
        }
      }
      
    if(t == "cep"){
        i.setAttribute("maxlength", "9");
        if (v.length == 5) i.value += "-";
     }
  

}