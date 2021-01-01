
const g = 9.8
var x, 
    y,
    x1,
    y1, 
    A, 
    B, 
    C,
    trail, 
    t;
    x1 =0;
    y1 = 0;
    trail = [];
    class Particle{
        constructor(x=0, y=0, r=10, m=1, c=255){
            this.x = x 
            this.y = y
            this.r = r 
            this.m = m 
            this.c = c
        }
     make = ()=>{
        fill(this.c)
        circle(this.x, this.y-this.r, this.r*2)
    
    }
    }


function setup() {
    createCanvas(windowWidth, windowHeight);
    x = 0;
    y = 0;
    A = createVector(0, 0)
    B = createVector(0, 200)
    C = createVector(400, 200)
    t = 0
    t1= 0
   

    
}

function draw(){
    background(0)
    stroke(255)
    translate(100, 100)
    line(A.x, A.y, B.x, B.y)
    line(B.x, B.y, C.x, C.y)
    line(A.x, A.y, C.x, C.y)
    let particle = new Particle(x, y, 10);
    let tFinal = sqrt(2*(C.y/g));
    let constant = C.x / tFinal;
    particle.make()
    let secondPrticle = new Particle(x1, y1, 10, 1, "red")
    secondPrticle.make()
    
    // x = constant * t 
    y = 0.5 * g * t * t;
    x = 2 * y 
    x1 =104*(t - sin(t))
    y1=104*(1-cos(t))
    v = createVector(x1, y1)
    trail.push(v)
    if(trail.length > 50){
      trail.splice(0, 1);
    }

    for(let i=0; i< trail.length; i++){
        fill('red')
        ellipse(trail[i].x, trail[i].y, 1, 1)
      }

    if(x > C.x && y > C.y + particle.r)
    {
        t = 0
    }else{
            t += 0.05   
            fill("white")
            text(`time:${t.toFixed(1)} s `, 0, -40)       
    }
  
    
   

   



 
    
}

