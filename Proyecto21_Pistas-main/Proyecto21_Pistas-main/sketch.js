
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

//2. crea una nueva variable llamada ball
var ball;
//6. crea las variables para el suelo y el bote de basura 
var groundObj, rightSide, leftSide;
//lee la pista 6 fijate cuantas variables se estan mandando a llamar y cuales son los nombres
//pista extra (son tres variables)

function preload()
{
	
}

function setup() {
	//1. cambia el tamaño del lienzo, hazlo mas grande
	createCanvas(1500, 800);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	//3. crea las opciones para que la pelota tenga rebote (paso 3)
	var ball_options={
		isStatic:false,
		restitution:0.3,
		friction:0,
		density:1.2
	}
	//4. crea un cuerpo circular usando la libreria de matter y agregalo a un mundo
	//usa la variable que acabas de crear ball 
	ball=Bodies.circle(200,100,20,ball_options);
  	World.add(world,ball);
	//7. crea los objetos para la clase Ground, te ayudare con uno de los objetos
	//recuerda crear la variable 
	rightSide = new ground(1350,600,20,120);
	leftSide = new ground(1100,600,20,120);
	groundObj=new ground (width/2,670,width,20);

	//copia el codigo que viene en el paso 6. de esta manera tendras formados todos los objetos
	//que se te piden

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  //5. dibuja el cuerpo ball, recuerda que como es un circulo debes de usar ellipse 
	ellipse(ball.position.x, ball.position.y, 30);

  //8. manda a llamar el metodo display de la clase Ground para los tres objetos que creaste
	groundObj.display();
	leftSide.display();
	rightSide.display();
  
  drawSprites();
 
}

//ADICIONAL: crea una funcion llamada keyPressed (Pista 2 al final del pdf)
//el codigo que te pide en esa pista es usando la funcion Matter.Body.applyForce
//este codigo se vio en la actividad de la clase

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(ball,{x:0,y:0},{x:85,y:-85});
	}
}


/*NOTA: TIENES QUE CREAR UNA CLASE LLAMADA Ground (TAL Y COMO LO VIMOS EN CLASE,
	BASICAMENTE ES IGUAL), ESTA CLASE LA LLAMARAS EN EL INDEX COMO ground.js,*/