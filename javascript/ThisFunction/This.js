const user={
    name:'jui',
    age:'27',
     outer:function(){
        console.log(this.name)
     }
     ,
     
     show: () => {
        console.log(this.name);
    }
}

user.outer();
user.show();//this dont have its own this so it will take this from its parent which is window object and window object dont have name property so it will give undefined