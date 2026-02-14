let age = 100;
let message = "";

if(age < 0){    
  message = "Please enter a number above 0";
  console.log(message);
}else if(age <= 17){
  message = "You are a teenager";
  console.log(message);
}else if(age <= 49){
  message = "You are an adult";
  console.log(message);
}else if(age <= 60){
  message = "You are a senior adult";
  console.log(message);
}else{
  message = "You are a senior citizen";
  console.log(message);
}