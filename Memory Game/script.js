      const galery=[
    {
      
        image:"img/agentSmith.jpg"
    },
    {
      
        image: "img/alexDeLarge.jpg"

    },
    {
       
        image:"img/amongoeth.jpg"
                       

    },
    {
    
        image:"img/download.jpg"

    },
    {

      
        image:"img/agentSmith.jpg"
    },
    {
      
        image: "img/alexDeLarge.jpg"

    },
    {
       
        image:"img/amongoeth.jpg"
                       

    },
    {
    
        image:"img/download.jpg"

    },
    { 

      
        image:"img/antonchigurh.jpg"
    },
    {
      
        image: "img/jigsaw.jpg"

    },
    {
       
        image:"img/lordvoldemort.jpg"
                       

    },
    {
    
        image:"img/godfather.jpg"

    },
    {

      
        image:"img/antonchigurh.jpg"
    },
    {
      
        image: "img/jigsaw.jpg"

    },
    {
       
        image:"img/lordvoldemort.jpg"
                       

    },
    {
    
        image:"img/godfather.jpg"

    }


        ];
const row=document.querySelectorAll(".row");
const card=document.querySelectorAll(".card-body");
const buton=document.querySelector(".btn-danger");
const buton2=document.querySelector(".btn-primary");
const timer=document.querySelector("span");

init();

buton2.addEventListener("click",function(){
    buton2.disabled=true;
     
   go(); 
});

function go(){
   
    setTimeout(function(){
         if(timer.textContent>0){
            go(); 
        }
   
       
        else if(timer.textContent==0){
            alert("Time is up!Try again");
         
            timer.textContent=59;
            buton2.disabled=false;
            return;
        }
         timer.textContent-=1;
       
    },1000);
}
function init(){
var j=0;
  var count=0;
    
    var num=random();
    var k=0;
for(j=0;j<4;j++){
     const div=document.createElement("div");
     div.className="ekle";
     
    var html="";
    var i=0;   
    
      while(i<4){
          div.innerHTML+=`<img class="col-3 z2"src=${galery[num[k]].image}>`;
         div.innerHTML+=`<img id="${String(count)}"class="col-3 hide z" src="img/soru.jpg">`;
        
       k++;
          i++;
          count++;
            
      
      }
    row[j].appendChild(div);
     
};
   
}
function random(){
    let i=0;
    let ar=[];
   let sayi;
    while(i<16){
         sayi= Math.floor(Math.random()*16);
        if(!(ar.includes(sayi))){
             ar.push(sayi);
            i++;
        }
          
    }
   
    return ar;
}
const hadd=document.querySelectorAll(".ekle");
var say2=0;
var arr=[];
var oz=[];


var say=0;

const container=document.querySelector(".container").addEventListener("click",function(e){
    if(buton2.disabled==true){
    e.target.style.zIndex=0;
  
   if(say2<2){
       oz.push(e.target);
       arr.push(e.target.previousSibling.src);
        
       if(arr[0]===arr[1]){
           
        oz[0].src=arr[0];
        e.target.src=e.target.previousSibling.src;
       say++;
           if(say==8){
              
               timer.textContent=0;
                
               say=0;
               if(confirm("YOU WON THE GAME!DO you want TO PLAY AGAİN?")){
                hadd.forEach(function(a){
                      a.remove();
                   })
               }
               init();
               buton.disabled=false;
               return;
           }
        }
        
     }say2++;
     if(say2>=2){
        say2=0;
        arr.pop();
        arr.pop();
         oz.pop();
         oz.pop();
    }
    setTimeout(function(){
 
           e.target.style.zIndex=1;
       
      
        say3=0;
          },1500);
        
      
}});
    
const hide=document.querySelectorAll(".hide");
buton.addEventListener("click",function(){
    buton.disabled=true;
    let i;
   
    for(i=0;i<hide.length;i++){
       
        hide[i].style.zIndex=0;
    }
    setTimeout(function(){
        for(i=0;i<hide.length;i++){
       hide[i].style.zIndex=1;
    } 
    },3000);
    
});


/*
        const galery=[
    {
      
        image:"img/agentSmith.jpg"
    },
    {
      
        image: "img/alexDeLarge.jpg"

    },
    {
       
        image:"img/amongoeth.jpg"
                       

    },
    {
    
        image:"img/download.jpg"

    },
    {

      
        image:"img/agentSmith.jpg"
    },
    {
      
        image: "img/alexDeLarge.jpg"

    },
    {
       
        image:"img/amongoeth.jpg"
                       

    },
    {
    
        image:"img/download.jpg"

    },
    { 

      
        image:"img/antonchigurh.jpg"
    },
    {
      
        image: "img/jigsaw.jpg"

    },
    {
       
        image:"img/lordvoldemort.jpg"
                       

    },
    {
    
        image:"img/godfather.jpg"

    },
    {

      
        image:"img/antonchigurh.jpg"
    },
    {
      
        image: "img/jigsaw.jpg"

    },
    {
       
        image:"img/lordvoldemort.jpg"
                       

    },
    {
    
        image:"img/godfather.jpg"

    }


        ];
const row=document.querySelectorAll(".row");
const card=document.querySelectorAll(".card-body");
const buton=document.querySelector(".btn-danger");
const buton2=document.querySelector(".btn-primary");
const timer=document.querySelector("span");

init();

buton2.addEventListener("click",function(){
    buton2.disabled=true;
     
   go(); 
});

function go(){
   
    setTimeout(function(){
         if(timer.textContent>0){
            go(); 
        }
   
       
        else if(timer.textContent==0){
            alert("Time is up!Try again");
         
            timer.textContent=59;
            buton2.disabled=false;
           
        }
         timer.textContent-=1;
       
    },1000);
}
function init(){
var j=0;
  var count=0;
    
    var num=random();
    var k=0;
for(j=0;j<4;j++){
     const div=document.createElement("div");
     div.className="ekle";
     
    var html="";
    var i=0;   
    
      while(i<4){
          div.innerHTML+=`<img class="col-3 z2"src=${galery[num[k]].image}>`;
         div.innerHTML+=`<img id="${String(count)}"class="col-3 hide z" src="img/soru.jpg">`;
        
       k++;
          i++;
          count++;
            
      
      }
    row[j].appendChild(div);
     
};
   
}
function random(){
    let i=0;
    let ar=[];
   let sayi;
    while(i<16){
         sayi= Math.floor(Math.random()*16);
        if(!(ar.includes(sayi))){
             ar.push(sayi);
            i++;
        }
          
    }
   
    return ar;
}
const hadd=document.querySelectorAll(".ekle");
var say2=0;
var arr=[];
var oz=[];


var say=0;

const container=document.querySelector(".container").addEventListener("click",function(e){
    if(buton2.disabled==true){
    e.target.style.zIndex=0;
  
   if(say2<2){
       oz.push(e.target);
       arr.push(e.target.previousSibling.src);
        
       if(arr[0]===arr[1]){
           
        oz[0].src=arr[0];
        e.target.src=e.target.previousSibling.src;
       say++;
           if(say==8){
              
               timer.textContent=0;
                
               say=0;
               if(confirm("YOU WON THE GAME!DO you want TO PLAY AGAİN?")){
                hadd.forEach(function(a){
                      a.remove();
                   })
               }
               init();
              
               return;
           }
        }
        
     }say2++;
     if(say2>=2){
        say2=0;
        arr.pop();
        arr.pop();
         oz.pop();
         oz.pop();
    }
    setTimeout(function(){
 
           e.target.style.zIndex=1;
       
      
        say3=0;
          },1500);
        
      
}});
    

buton.addEventListener("click",function(){
   const hide=document.querySelectorAll(".hide");
    let i;
   
    for(i=0;i<hide.length;i++){
       
        hide[i].style.zIndex=0;
    }
    setTimeout(function(){
        for(i=0;i<hide.length;i++){
       hide[i].style.zIndex=1;
    } 
    },3000);
    
});
*/
