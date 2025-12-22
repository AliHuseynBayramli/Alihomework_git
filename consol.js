//first task
let text = prompt("write an text");
for(let i=0;i<text.length;i++){
   if(text[i]>="0" && text[i]<="9"){
      console.log("text has number");
      break;
   }
}