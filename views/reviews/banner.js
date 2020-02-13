let arr = ['red','blueviolet','yellow'];
let index = 0,auto = true, 
    colorIndex1= 0,
    colorIndex2= 1,
    colorIndex3= 2;
let left = document.getElementById(`banner_image${colorIndex1}`);
let mid = document.getElementById(`banner_image${colorIndex2}`);
let right = document.getElementById(`banner_image${colorIndex3}`);

    left.style.backgroundColor = arr[colorIndex1];
    mid.style.backgroundColor = arr[colorIndex2];
    right.style.backgroundColor = arr[colorIndex3];
    left.classList.add("return-left");
    right.classList.add("return-right");
    

    
function bannerAuto(){
    if(auto) setTimeout(autoLeft(3000), 3000);
          
        
} 
   
    

function scrollLeft(x){
    if(auto){
        mid.classList.add("move-left");
        if(auto){
            setTimeout(function(){
                mid.classList.add("return-left");
                mid.classList.remove("move-left");
            },x)
        }
    right.classList.add("move-left");
    left.classList.remove("return-left");
    left.classList.add("return-right");
    }
    
}
function autoLeft(x){
    if(auto) scrollLeft(x);
    if(auto){
        setTimeout(function(){
            colorIndex1 ++;
            colorIndex2 ++;
            colorIndex3 ++;
            if(auto){
                if(colorIndex1>2){
                    colorIndex1 = index;
                    left = document.getElementById(`banner_image${colorIndex1}`);
                    
        
                }else{
                    
                    left = document.getElementById(`banner_image${colorIndex1}`);
                    
                    
                }
                if(colorIndex2>2){
                    colorIndex2 = index;
                   
                    mid = document.getElementById(`banner_image${colorIndex2}`);
                    mid.classList.remove("return-right");
                    mid.classList.remove("move-left");
                }else{
                   
                    mid = document.getElementById(`banner_image${colorIndex2}`);
                    mid.classList.remove("return-right");
                    mid.classList.remove("move-left");
                }
                if(colorIndex3>2){
   
                    colorIndex3 = index;
                    right = document.getElementById(`banner_image${colorIndex3}`);
                    
                }else{
                    
                    right = document.getElementById(`banner_image${colorIndex3}`);
                    
                }
            }
           
           // console.log(left);
           
           // console.log(mid);
   
           
           // console.log(right);
           if(auto) {
               setTimeout(function(){
                   if(auto) bannerAuto();
               },x);
           }
       }, x);
    } 
    
    
// console.log(colorIndex1);
// console.log(left);
     
    // bannerAuto();
}
function forceLeft(){
    console.log(left);
    console.log(mid);
    console.log(right);
    auto= !auto;
    console.log("------------");
    if(left.className.includes("return-right")){
        left.classList.add("move-left");
        setTimeout(function(){
            left.classList.remove("return-right");
            right.classList.add("return-right");
        },1000)
        mid.classList.add("move-left");
        right.classList.remove("move-left");
    }
    console.log("------------");
    console.log(left);
    console.log(mid);
    console.log(right);
}
   bannerAuto();
