let list=[{name:"html",codes:"c2" },{name: "javascript",codes:"c3"},{name:"maquettage",codes:"c3"},{name:"interface cmc",codes:"c4"},{name:"css",codes:"c2"}];
let score=0;
for(let i=0;i<list.length;i++){
let question=prompt("quel compétances "+list[i].name);
let reponse = list[i].codes
if (reponse===question){
score++;
}
}alert(score+":"+"5");


