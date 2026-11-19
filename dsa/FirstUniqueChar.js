// First Unique Character in a String

var firstUniqChar = function(s) {
   let freq={};

   for(let i=0;i<s.length;i++){
    
    let char=s.charAt(i);
    if(freq[char]){
        freq[char]++;
    }
    else{
        freq[char]=1;
    }
   }

   for(let i=0;i<s.length;i++){
    let char=s.charAt(i);
    if(freq[char]===1){
        return i;
    }
   }


   
   return -1;
};

console.log("firstUniqChar",firstUniqChar("aasswe"))