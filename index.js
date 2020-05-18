const canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const c = canvas.getContext('2d');

const mouse = {
    x: undefined,
    y: undefined
}

const colorArray = [
    '#ffaa33',
    '#99ffaa',
    '#00ff00',
    '#4411aa',
    '#ff1100'
]

class Circle {
    constructor(
        radius = 30,
        x = Math.round(Math.random()*window.innerWidth), 
        y = Math.round(Math.random()*window.innerHeight), 
        dx = ((Math.random() - 0.5) * 2), 
        dy = ((Math.random() - 0.5) * 2)
    ) 
    {
        this.radius = radius;
        this.x = x;
        this.y = y;
        this.dx = dx;
        this.dy = dy;
        this.color = 'white';
        //this.color = colorArray[Math.floor(Math.random()*colorArray.length)];
    }

    draw() {
        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        c.stroke();   
        c.fillStyle = this.color;
        c.fill();
               
    }
    
    fill() {
         c.fill()
    }

    move() {
        if(this.x + this.radius > innerWidth || this.x - this.radius < 0) {
            this.dx = -this.dx;
        }
        if(this.y + this.radius > innerHeight || this.y - this.radius < 0) {
            this.dy = -this.dy;
        }
        this.x += this.dx;
        this.y += this.dy;

        // Interactivity
        if (mouse.x - this.x < 50 
            && mouse.x - this.x > -50
            && mouse.y - this.y < 50 
            && mouse.y - this.y > -50) {
            if (this.radius < 100) {
                this.radius += 2;
                this.color = 'black';
            }      
            
        } else if (this.radius > 30) {
            this.radius -= 2;
            //if (this.radius === 30 || this.radius < 30) this.color = 'white';
            //this.color = 'white';
        }

        this.draw();
    }
}

const circleArr = []
for(let i = 0; i < 2000; i++) {
    const circle = new Circle();
    circleArr.push(circle);
}

const animate = () => {
    c.clearRect(0, 0, innerWidth, innerHeight);
    requestAnimationFrame(animate);
    
    circleArr.forEach(el => el.move());
}


animate(); 

window.addEventListener('mousemove', e => {
    mouse.x = e.x;
    mouse.y = e.y;
    console.log(mouse)
});


window.addEventListener('keypress', e => {
    if(e.key === 'Enter') {
        circleArr.forEach(el => el.color = 'white');
    }
});

window.addEventListener('resize', e => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
});







/* c.fillStyle = 'blue';
c.fillRect(100, 100, 100, 100);
c.fillStyle = 'green';
c.fillRect(300, 100, 100, 100);
c.fillStyle = 'yellow';
c.fillRect(600, 100, 100, 100);
 */

// LINE
/* c.beginPath();
c.moveTo(50, 300);
c.lineTo(300, 100);
c.lineTo(550, 300);
c.strokeStyle = '#ffffff';
c.stroke(); */

// ARC or CIRCLE
/* for(let i = 0; i < 1000; i++) {
    c.beginPath();
    c.strokeStyle = `rgba(${Math.random()*255}, ${Math.random()*255}, ${Math.random()*255}, 1)`;
    c.arc(Math.random()*window.innerWidth, Math.random()*window.innerHeight, 30, 0, Math.PI * 2, false);
    c.stroke();
} */