function doFunction(){
  var year=document.getElementById("year").value;
  var CC=parseInt(year.substring(0,2));
  var YY=parseInt(year.substring(2));
  var MM=parseInt(document.getElementById("month").value);
  var DD=parseInt(document.getElementById("day").value);
  if(DD<=0||DD>31){
    document.getElementById("dayerror").innerHTML="Enter valid date";
    return false;
  }
  //else if(DD==" "){
  //document.getElementById("dayerror").innerHTML="This field cannot be empty";
  //  return false;
  else {
    console.log(DD);
  }
  if(MM<0||MM>12){
    document.getElementById("montherror").innerHTML="Enter valid month";
    return false;
  }
  //else if(MM==" "){
    //document.getElementById("montherror").innerHTML="This field cannot be empty";
    //return false;
  //}
  else{
    console.log(MM);
  }
  var dayNum=Math.trunc(( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD )% 7);
  var days=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']
  var male=['Kwasi','Kwadwo','Kwabena','Kwaku','Yaw','Kofi','Kwame']
  var female=['Akosua','Adwoa','Abenaa','Akua','Yaa','Afua','Ama']
  function execute(){
    let man=document.getElementById("male").checked;
    let woman=document.getElementById("female").checked;
    if (man==true && woman==false){
      if(dayNum==0){
        alert('Your Akan name is '+male[0]);
      } if(dayNum==1){
        alert('Your Akan name is '+male[1]);
      }else if(dayNum==2){
        alert('Your Akan name is '+male[2]);
      }else if(dayNum==3){
        alert('Your Akan name is '+male[3]);
      }else if(dayNum==4){
        alert('Your Akan name is '+male[4]);
      }else if(dayNum==5){
        alert('Your Akan name is '+male[5]);
      }else if(dayNum==6){
        alert('Your Akan name is '+male[6]);
      }else if(dayNum==7){
        alert('Your Akan name is '+male[7]);
      }
    }
    else if(woman==true && man==false){
      for(let i=0;i<=7;i++){
        if(dayNum==i){
          alert('Your Akan name is '+female[i]);
        }
      }
    }
  } 
  execute();    
}


 
  

  
  