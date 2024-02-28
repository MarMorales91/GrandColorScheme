let body = document.querySelector('body');
let containerOne = document.querySelector('.containerOne')
let containerTwo = document.querySelector('.containerTwo')
let degrees = [0,90,180,-90]

const makeRandColorOne = () => {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    let hex = "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
    total = (r + g + b);
    let rgb = `rgb(${r}, ${g}, ${b})`
    return [rgb, hex,r , g, b];
}

const makeRandColorTwo = () => {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    let hex = "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
    total = (r + g + b);
    let rgb = `rgb(${r}, ${g}, ${b})`
    return [rgb, hex,r , g, b];
}

function rgb2cmyk (r,g,b) {
    var computedC = 0;
    var computedM = 0;
    var computedY = 0;
    var computedK = 0;
   
    //remove spaces from input RGB values, convert to int
    var r = parseInt( (''+r).replace(/\s/g,''),10 ); 
    var g = parseInt( (''+g).replace(/\s/g,''),10 ); 
    var b = parseInt( (''+b).replace(/\s/g,''),10 ); 
   
    if ( r==null || g==null || b==null ||
        isNaN(r) || isNaN(g)|| isNaN(b) )
    {
      alert ('Please enter numeric RGB values!');
      return;
    }
    if (r<0 || g<0 || b<0 || r>255 || g>255 || b>255) {
      alert ('RGB values must be in the range 0 to 255.');
      return;
    }
   
    // BLACK
    if (r==0 && g==0 && b==0) {
     computedK = 1;
     return [0,0,0,1];
    }
   
    computedC = 1 - (r/255);
    computedM = 1 - (g/255);
    computedY = 1 - (b/255);
   
    var minCMY = Math.min(computedC,
                 Math.min(computedM,computedY));
    computedC = (computedC - minCMY) / (1 - minCMY) ;
    computedM = (computedM - minCMY) / (1 - minCMY) ;
    computedY = (computedY - minCMY) / (1 - minCMY) ;
    computedK = minCMY;
   
    return [computedC,computedM,computedY,computedK];
   }

   






body.addEventListener('click', function(){
    let randomColorOne = makeRandColorOne()
    let randomColorTwo = makeRandColorTwo()
    let rgbTOCmyk = rgb2cmyk(randomColorOne[2],randomColorOne[3],randomColorOne[4])
    // const randomElement = Math.floor(Math.random() * degrees.length);
    containerOne.style.background = `linear-gradient(to right,${randomColorOne[0]} 50%,${randomColorTwo[0]} 50%)`
    containerTwo.style.background = `linear-gradient(to right,${randomColorOne[0]},${randomColorTwo[0]})`;
})






// let degrees = [0,90,180,-90]
// const randomElement = Math.floor(Math.random() * degrees.length);
// console.log(degrees[randomElement])



// for(let i = 0; i < degrees.length; i++){
    
// }