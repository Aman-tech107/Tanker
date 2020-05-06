class Tanker {
  constructor(x, y, width, height, angle) {
      var options = {
      isStatic: false
     }
     //this.rect = rectangle(100,200,5,10);
     this.body = Bodies.rectangle(x, y, width, height);
     this.width = width;
     this.height = height;
    };

    display(){
      // Draw the tanker the way you like.
      // You could also use an image if you want a specific look
      arc(60,300, 100, 100, 0, 0);
      var angle = this.body.angle;
      push();
      //angleMode(RADIANS);
      translate(this.body.position.x , this.body.position.y);
      rotate(angle);
      rectMode(CENTER);
      rect(0, 0, this.width, this.height);
      pop();
      rectMode(CENTER);
      rect(60,352,80,5);
      push();
      strokeWeight(20);
      strokeCap(ROUND);
      line(20,365,100,365);
      pop();
      rect(60,324,100,50);
      
      
    };
}
