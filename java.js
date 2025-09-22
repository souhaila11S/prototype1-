let valeurs=["c1","c3","c2","c1","c8","c1","c2","c5"];
let codes={}
for(let i=0;i<valeurs.length;i++){
let list=valeurs[i];
if(codes[list]){
codes[list]++;



}else{

    codes[list]=1;



}




}


console.log(codes);









