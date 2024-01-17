
var a = 4;
var b = 2;

    var batan = document.getElementById('circule');
    var back = document.getElementById('background');

    batan.addEventListener('click',function(){

        if (a > b) {

            back.style.backgroundColor='rgba(56, 144, 252, 0.774)';
            batan.style.backgroundColor='rgb(255, 195, 116)';
            document.getElementById('on').style.color='#ff9100'
            document.getElementById('off').style.color='rgba(90, 90, 90, 0.445)'
document.getElementById('body').style.backgroundColor='rgba(255, 218, 139, 0.342)'
            
            back.style.justifyContent='flex-end';
            b=7
            
        } else {

            document.getElementById('off').style.color='black'
            document.getElementById('on').style.color='rgba(90, 90, 90, 0.445)'
            back.style.backgroundColor='rgba(0, 0, 0, 0.664)';
            batan.style.backgroundColor='white';

            
            document.getElementById('body').style.backgroundColor='rgba(0, 0, 0, 0.342)'

            back.style.justifyContent='flex-start';

            b=2
        }
    })













    // ------------------

    
var answer = (function () {
    let privetvalue = 2;

   return {
   // getter ye zad tr compny likhti hy es ka mattlab value ko print karna 
       getter: function(){
        console.log(privetvalue)
       },
       setter: function(value){
           privetvalue = value  // es my jo ham value dally gy vo getter k value k satth plus ho kar ay ge consol my dek lo  
       }
   };
})()

var b1 = new superbeskit();
var b2 = new superbeskit();
var b3 = new superbeskit();

function superbeskit(){
    this.color = 'yello';
    this.height = 2;
    this.width = 2 ;
    this.haldy = 'zara se';
    // ab ham isy new keword my   likhy gy
}

function bikenam(){
    console.log("honda")
    console.log("unique")
    console.log("super")
    console.log("star")
}