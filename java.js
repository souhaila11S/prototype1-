let c12 = ["c1", "c3", "c2", "c1", "c8", "c1", "c2", "c5" ] ;
let c={} ;
for(let i=0;i<c12.length;i++){
    let a=c12[i] ;
    if(c[a]){
        c[a]++ ;


    }else{

        c[a]=1 ;

    }
}
       


console.log(c);