let countfreaqunecy=function(){
    let array=[1,1,2,2,4,3,5];
    let freq={};
    for(let i=0;i<array.length;i++){
    let num=array[i];
      if(freq[num]){
        freq[num]++;
      }
      else{
             freq[num]=1;
      }
    }
    return freq;
}

console.log(countfreaqunecy())