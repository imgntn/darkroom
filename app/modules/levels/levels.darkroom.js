define(function(require, exports, module) {
	"use strict";

	var $ = require("jquery");
	var _ = require("underscore");
	var Backbone = require("backbone");
	var THREE = require('three');

	var app = require("app");
	var keyboard = require('modules/controllers/controllers.first_person');


	// var bazar= require('bazar');


	var player = require('../meshes/meshes.player')
	player.position.y = 240;
	// player.position.x=-2500;
	player.position.z = 750;
	player.visible = false;


	var floor = require('../meshes/meshes.darkroom.floor');
	floor.rotation.x = Math.PI / 2;
	floor.position.y = -20;

	var cubeMesh = require('../meshes/meshes.cube_basic');
	cubeMesh.position.y = 200


	var chamber = require('../meshes/meshes.darkroom.chamber');
	chamber.position.y = 250;

	var makeDoor = require('../meshes/meshes.darkroom.door');
	var door1 = makeDoor();
	var door2 = makeDoor();
	var door3 = makeDoor();
	var door4 = makeDoor();

	var scene = new THREE.Scene();
	scene.add(player);
	scene.add(cubeMesh);
	scene.add(floor);
	scene.add(chamber);

	scene.add(door1);
	scene.add(door2);
	scene.add(door3);
	scene.add(door4);


	keyboard.addToCollideableObjects(chamber)
	keyboard.addToCollideableObjects(door1)

	door1.position.z = 500;
	door1.position.y = 175;

	door2.position.x = 500;
	door2.position.y = 175;
	door2.rotation.y = Math.PI / 2;


	door3.position.z = -500;
	door3.position.y = 175;

	door4.position.x = -500;
	door4.position.y = 175;
	door4.rotation.y = Math.PI / 2

	//setup burning box level
	var burningBoxFloor = require('../meshes/meshes.burningbox.floor');
	burningBoxFloor.position.x = 4000;
	burningBoxFloor.rotation.x = Math.PI / 2;
	burningBoxFloor.position.y = -20;

	scene.add(burningBoxFloor)
	var burningbox = require('modules/levels/levels.burningbox');
	var textHandler = require('../handlers/handlers.text_in_space');

	var singlebed1 = textHandler.makeText(burningbox.staticObjects[0][0])
	var singlebed2 = textHandler.makeText(burningbox.staticObjects[0][1])

	var doublebed1 = textHandler.makeText(burningbox.staticObjects[1][0]);

	var mirror1 = textHandler.makeText(burningbox.staticObjects[2][0]);
	var mirror2 = textHandler.makeText(burningbox.staticObjects[2][1]);
	var mirror3 = textHandler.makeText(burningbox.staticObjects[2][2]);

	var smalltable1=textHandler.makeText(burningbox.staticObjects[3][0]);
	var smalltable2=textHandler.makeText(burningbox.staticObjects[3][1]);

console.log('tables',burningbox.staticObjects[3][0])
	var dresser1 = textHandler.makeText(burningbox.staticObjects[4][0]);
	var dresser2 = textHandler.makeText(burningbox.staticObjects[4][1]);

	var wall1 = textHandler.makeText(burningbox.staticObjects[5][0]);
	var wall2 = textHandler.makeText(burningbox.staticObjects[5][1]);
	var wall3 = textHandler.makeText(burningbox.staticObjects[5][2]);
	var wall4 = textHandler.makeText(burningbox.staticObjects[5][3]);
	var wall5 = textHandler.makeText(burningbox.staticObjects[5][4]);
	var wall6 = textHandler.makeText(burningbox.staticObjects[5][5]);
	var wall7 = textHandler.makeText(burningbox.staticObjects[5][6]);
	var wall8 = textHandler.makeText(burningbox.staticObjects[5][7]);
	var wall9 = textHandler.makeText(burningbox.staticObjects[5][8]);
	var wall10 = textHandler.makeText(burningbox.staticObjects[5][9]);
	var wall11 = textHandler.makeText(burningbox.staticObjects[5][10]);

	var window1 = textHandler.makeText(burningbox.staticObjects[6][0]);
	var window2 = textHandler.makeText(burningbox.staticObjects[6][1]);
	var window3 = textHandler.makeText(burningbox.staticObjects[6][2]);
	var window4 = textHandler.makeText(burningbox.staticObjects[6][3]);

	var stairs1 = textHandler.makeText(burningbox.staticObjects[7][0]);

	var bannister1 = textHandler.makeText(burningbox.staticObjects[8][0]);

	var painting1 = textHandler.makeText(burningbox.staticObjects[9][0]);
	var painting2 = textHandler.makeText(burningbox.staticObjects[9][1]);
	var painting3 = textHandler.makeText(burningbox.staticObjects[9][2]);
	var painting4 = textHandler.makeText(burningbox.staticObjects[9][3]);
	var painting5 = textHandler.makeText(burningbox.staticObjects[9][4]);
	var painting6 = textHandler.makeText(burningbox.staticObjects[9][5]);

	var fire1 = textHandler.makeText(burningbox.staticObjects[10][0]);
	var fire2 = textHandler.makeText(burningbox.staticObjects[10][1]);
	var fire3 = textHandler.makeText(burningbox.staticObjects[10][2]);
	var fire4 = textHandler.makeText(burningbox.staticObjects[10][3]);
	var fire5 = textHandler.makeText(burningbox.staticObjects[10][4]);
	var fire6 = textHandler.makeText(burningbox.staticObjects[10][5]);
	var fire7 = textHandler.makeText(burningbox.staticObjects[10][6]);
	var fire8 = textHandler.makeText(burningbox.staticObjects[10][7]);
	var fire9 = textHandler.makeText(burningbox.staticObjects[10][8]);
	var fire10 = textHandler.makeText(burningbox.staticObjects[10][9]);

	var jewelrybox1 = textHandler.makeText(burningbox.staticObjects[11][0]);

	var clothes1 = textHandler.makeText(burningbox.staticObjects[12][0]);
	var clothes2 = textHandler.makeText(burningbox.staticObjects[12][1]);
	var clothes3 = textHandler.makeText(burningbox.staticObjects[12][2]);
	var clothes4 = textHandler.makeText(burningbox.staticObjects[12][3]);

	var pillow1 = textHandler.makeText(burningbox.staticObjects[13][0]);
	var pillow2 = textHandler.makeText(burningbox.staticObjects[13][1]);
	var pillow3 = textHandler.makeText(burningbox.staticObjects[13][2]);
	var pillow4 = textHandler.makeText(burningbox.staticObjects[13][3]);



	var singlebeds = [singlebed1, singlebed2];
	var doublebeds = [doublebed1];
	var mirrors = [mirror1, mirror2, mirror3];
	var dressers = [dresser1, dresser2];
	var smalltables=[smalltable1,smalltable2]
	var walls = [wall1, wall2, wall3, wall4, wall5, wall6, wall7, wall8, wall9, wall10, wall11];
	var windows = [window1, window2, window3, window4];
	var stairs = [stairs1];
	var bannisters = [bannister1];
	var paintings = [painting1, painting2, painting3, painting4, painting5, painting6];
	var fires = [fire1, fire2, fire3, fire4, fire5, fire6, fire7, fire8, fire9, fire10];
	var jewelryboxes = [jewelrybox1];
	var clothes = [clothes1, clothes2, clothes3, clothes4];
	var pillows = [pillow1, pillow2, pillow3, pillow4]

	singlebed1.position.set(2300,0,-1000); 
	singlebed1.rotateOnAxis(new THREE.Vector3( 1, 0, 0 ), -Math.PI/2);
	singlebed1.rotateOnAxis(new THREE.Vector3( 0, 0, 1 ), Math.PI/2);
	singlebed1.scale=new THREE.Vector3(1,4,10);

	singlebed2.position.set(4350,0,-1300);
	singlebed2.rotateOnAxis(new THREE.Vector3( 1, 0, 0 ), -Math.PI/2);
	singlebed2.rotateOnAxis(new THREE.Vector3( 0, 0, 1 ), -Math.PI/2);
	singlebed2.scale=new THREE.Vector3(1,4,10);

	doublebed1.position.set();
	doublebed1.position.set(5600,0,700);
	doublebed1.rotateOnAxis(new THREE.Vector3( 1, 0, 0 ), -Math.PI/2);
	doublebed1.rotateOnAxis(new THREE.Vector3( 0, 0, 1 ), -Math.PI);
	doublebed1.scale=new THREE.Vector3(2,14,8);

	mirror1.position.set(4500,300,-525);
	mirror1.scale=new THREE.Vector3(4,4,4);
	mirror1.rotateOnAxis(new THREE.Vector3( 0, 1, 0 ), Math.PI);
	mirror2.position.set();
	mirror3.position.set();


	dresser1.position.set(2450,0,-1400);
	dresser1.scale=new THREE.Vector3(2,4,4);


	dresser2.position.set(3325,0,-740);
	dresser2.scale=new THREE.Vector3(2,4,4);
    dresser2.rotateOnAxis(new THREE.Vector3(0, 1, 0), Math.PI/2);

	smalltable1.position.set(4750,0,-700);
    smalltable1.rotateOnAxis(new THREE.Vector3(0, 1, 0), Math.PI/2);
	smalltable1.scale=new THREE.Vector3(2,4,10);

	// smalltable2.position.set();

	wall1.position.set(1800,0,1500);
	wall1.rotateOnAxis(new THREE.Vector3(0, 1, 0), Math.PI/2);
	wall1.scale=new THREE.Vector3(20,20,10);
	//near bannister
	wall2.position.set(5600,0,1500);
	wall2.rotateOnAxis(new THREE.Vector3(0, 1, 0), Math.PI);
	wall2.scale=new THREE.Vector3(25,20,10);

	//back
	wall3.position.set(2100,0,-1500);
	wall3.scale=new THREE.Vector3(28,20,10);

	wall4.position.set(6100,0,-1500);
	wall4.rotateOnAxis(new THREE.Vector3(0, 1, 0), -Math.PI/2);
	wall4.scale=new THREE.Vector3(22,20,10);

	wall5.position.set(3300,0,-1300);
    wall5.rotateOnAxis(new THREE.Vector3(0, 1, 0), -Math.PI/2);
	wall5.scale=new THREE.Vector3(7,20,10);

	wall6.position.set(1950,0,-550);
	wall6.scale=new THREE.Vector3(7,20,10);
	
	wall7.position.set(3600,0,-500);
	wall7.scale=new THREE.Vector3(7,20,10);

	wall8.position.set(4700,0,-1300);
    wall8.rotateOnAxis(new THREE.Vector3(0, 1, 0), -Math.PI/2);
	wall8.scale=new THREE.Vector3(7,20,10);


	wall9.position.set(4700,0,300);
    wall9.rotateOnAxis(new THREE.Vector3(0, 1, 0), -Math.PI/2);
	wall9.scale=new THREE.Vector3(7,20,10);

	wall10.position.set(4750,0,-500);
	wall10.scale=new THREE.Vector3(6,20,10);

	wall11.position.set();

	window1.position.set(6000,400,500);
	window1.rotateOnAxis(new THREE.Vector3(0, 1, 0), -Math.PI/2);
	window1.scale=new THREE.Vector3( 2, 4, 1 );

	window2.position.set(6000,400,-700);
	window2.rotateOnAxis(new THREE.Vector3(0, 1, 0), -Math.PI/2);
	window2.scale=new THREE.Vector3( 2, 4, 1 );

	window3.position.set(3500,300,-1350);
	window3.scale= new THREE.Vector3(2,4,1)


	window4.position.set();


	stairs1.position.set(3500,-45,800);
	stairs1.scale=new THREE.Vector3(8,8,8);
	stairs1.rotateOnAxis(new THREE.Vector3(1, 0, 0), Math.PI/2);
	stairs1.rotateOnAxis(new THREE.Vector3(0, 1, 0), Math.PI);
	stairs1.rotateOnAxis(new THREE.Vector3(0, 1, 0), 0.025);

	

	bannister1.position.set(3400,0,775);
	bannister1.scale=new THREE.Vector3(5,8,2);
	bannister1.rotateOnAxis(new THREE.Vector3(0, 1, 0), -Math.PI);
	// bannister1.rotateOnAxis(new THREE.Vector3(0, 0, 1), -0.075);

	painting1.position.set(2200,300,-450);
	painting1.scale=new THREE.Vector3(2,4,2);

	painting2.position.set(2900,400,1350);
	painting2.scale=new THREE.Vector3(2,4,2);
	painting2.rotateOnAxis(new THREE.Vector3(0, 1, 0), -Math.PI);
	

	painting3.position.set(4700,400,1000);
    painting3.rotateOnAxis(new THREE.Vector3(0, 1, 0), Math.PI/2);
	painting3.scale=new THREE.Vector3(2,6,2);


	// painting5.position.set();
	// painting6.position.set();


	fire1.position.set(2850,0,-1300);
	fire1.scale=new THREE.Vector3(2,8,4);

	fire2.position.set(2200,200,-700);
	fire2.scale=new THREE.Vector3(4,8,4);
    fire2.rotateOnAxis(new THREE.Vector3(0, 1, 0), Math.PI/2);


	fire3.position.set(3500,100,1350);
	fire3.scale=new THREE.Vector3(3,5,1)
	fire3.rotateOnAxis(new THREE.Vector3(0, 1, 0), Math.PI/2);

	fire4.position.set(3500,100,1000);
	fire4.scale=new THREE.Vector3(3,5,1)
	fire4.rotateOnAxis(new THREE.Vector3(0, 1, 0), Math.PI/2);

	fire5.position.set(4250,200,-1300);
	fire5.scale=new THREE.Vector3(4,8,4);
    fire5.rotateOnAxis(new THREE.Vector3(0, 1, 0), -Math.PI/2);

    fire6.position.set(4150,0,-800);
	fire6.scale=new THREE.Vector3(2,6,2);
    fire6.rotateOnAxis(new THREE.Vector3(0, 1, 0), -Math.PI/2);
 
	fire7.position.set();
	fire7.position.set(5500,200,900);
	fire7.rotateOnAxis(new THREE.Vector3( 0, 1, 0 ), Math.PI);
	// fire7.rotateOnAxis(new THREE.Vector3( 0, 0, 1 ), -Math.PI);
	fire7.scale=new THREE.Vector3(4,14,8);

	// fire8.position.set();
	// fire9.position.set();
	// fire10.position.set();



	jewelrybox1.position.set(4850,225,-850);
    jewelrybox1.rotateOnAxis(new THREE.Vector3(0, 1, 0), Math.PI/2);
	jewelrybox1.scale=new THREE.Vector3(1,1,2);


	clothes1.position.set(5700,700,-1200);
	clothes1.scale=new THREE.Vector3(3,2,2);
	clothes1.rotateOnAxis(new THREE.Vector3( 0, 0, 1 ), -Math.PI/2);

	clothes2.position.set(5600,700,-1200);
	clothes2.scale=new THREE.Vector3(3,2,2);
	clothes2.rotateOnAxis(new THREE.Vector3( 0, 0, 1 ), -Math.PI/2);

	clothes3.position.set(5500,700,-1200);
	clothes3.scale=new THREE.Vector3(3,2,2);
	clothes3.rotateOnAxis(new THREE.Vector3( 0, 0, 1 ), -Math.PI/2);

	clothes4.position.set(5400,700,-1200);
	clothes4.scale=new THREE.Vector3(3,2,2);
	clothes4.rotateOnAxis(new THREE.Vector3( 0, 0, 1 ), -Math.PI/2);



	pillow1.position.set(2150,120,-1400);
	pillow1.scale=new THREE.Vector3(1,2,6);
	pillow2.position.set(4350,120,-1300);
	pillow2.scale=new THREE.Vector3(1,2,6);


	
	// pillow3.position.set();
	// pillow4.position.set();




var objectArrays=[singlebeds,doublebeds,smalltables,mirrors,dressers,walls,windows,stairs,bannisters,paintings,fires,jewelryboxes,clothes,pillows]
	_.each(objectArrays,function(oa){
		_.each(oa,function(obj){
			scene.add(obj)
		})
	})


//To Catch a Train
var train_material = new THREE.MeshBasicMaterial( { color: 0xffff00, wireframe: false } );
var train_geometry = new THREE.CubeGeometry(14000, 13000, 20);
var train_floor_mesh = new THREE.Mesh(train_geometry,train_material);

	train_floor_mesh.position.x = -9000;
	train_floor_mesh.rotation.x = Math.PI / 2;
 	train_floor_mesh.position.y = -20;
	scene.add(train_floor_mesh);


var train_objects=[];

//per object flow
var house1 = textHandler.easyText('House');
	house1.position.set(-2100,0,-6300);
	house1.rotateOnAxis(new THREE.Vector3(0, 1, 0), -Math.PI/2);
	house1.scale=new THREE.Vector3(10,20,30);

train_objects.push(house1);

var house2 = textHandler.easyText('House');
	house2.position.set(-2100,0,-4000);
	house2.rotateOnAxis(new THREE.Vector3(0, 1, 0), -Math.PI/2);
	house2.scale=new THREE.Vector3(10,20,30);

train_objects.push(house2);

var house3 = textHandler.easyText('House');
	house3.position.set(-2100,0,1000);
	house3.rotateOnAxis(new THREE.Vector3(0, 1, 0), -Math.PI/2);
	house3.scale=new THREE.Vector3(10,20,30);

train_objects.push(house3);

var house4 = textHandler.easyText('House');
	house4.position.set(-2100,0, 3500);
	house4.rotateOnAxis(new THREE.Vector3(0, 1, 0), -Math.PI/2);
	house4.scale=new THREE.Vector3(10,20,30);

train_objects.push(house4);

var garage1 = textHandler.easyText('GaraGe');
	garage1.position.set(-2100,0,-2500);
	garage1.rotateOnAxis(new THREE.Vector3(0, 1, 0), -Math.PI/2);
	garage1.scale=new THREE.Vector3(8,15,70);

train_objects.push(garage1);

var garage2 = textHandler.easyText('GaraGe');
	garage2.position.set(-2100,0,-500);
	garage2.rotateOnAxis(new THREE.Vector3(0, 1, 0), -Math.PI/2);
	garage2.scale=new THREE.Vector3(8,15,70);

train_objects.push(garage2);

var mailbox1 = textHandler.easyText('Mailbox');
	mailbox1.position.set(-3100,225,-4500);
	mailbox1.rotateOnAxis(new THREE.Vector3(0, 1, 0), -Math.PI/2);
	mailbox1.rotateOnAxis(new THREE.Vector3(0, 0, 1), -Math.PI/2);
	mailbox1.scale=new THREE.Vector3(1,1,1);

train_objects.push(mailbox1);

var train_person1 = textHandler.easyText('Person');
	train_person1.position.set(-3100,0,-4900);
	train_person1.rotateOnAxis(new THREE.Vector3(0, 1, 0), -Math.PI/2);
	train_person1.rotateOnAxis(new THREE.Vector3(0, 0, 1), Math.PI/2);
	train_person1.scale=new THREE.Vector3(1.5,1,1);

train_objects.push(train_person1);

var mailbox2 = textHandler.easyText('Mailbox');
	mailbox2.position.set(-3100,225,-2500);
	mailbox2.rotateOnAxis(new THREE.Vector3(0, 1, 0), -Math.PI/2);
	mailbox2.rotateOnAxis(new THREE.Vector3(0, 0, 1), -Math.PI/2);
	mailbox2.scale=new THREE.Vector3(1,1,1);

train_objects.push(mailbox2);

var mailbox3 = textHandler.easyText('Mailbox');
	mailbox3.position.set(-3100,225,1500);
	mailbox3.rotateOnAxis(new THREE.Vector3(0, 1, 0), -Math.PI/2);
	mailbox3.rotateOnAxis(new THREE.Vector3(0, 0, 1), -Math.PI/2);
	mailbox3.scale=new THREE.Vector3(1,1,1);

train_objects.push(mailbox3);

var train_person2 = textHandler.easyText('Person');
	train_person2.position.set(-3100,0,1900);
	train_person2.rotateOnAxis(new THREE.Vector3(0, 1, 0), -Math.PI/2);
	train_person2.rotateOnAxis(new THREE.Vector3(0, 0, 1), Math.PI/2);
	train_person2.scale=new THREE.Vector3(1.5,1,1);

train_objects.push(train_person2);

var mailbox4 = textHandler.easyText('Mailbox');
	mailbox4.position.set(-3100,225,3500);
	mailbox4.rotateOnAxis(new THREE.Vector3(0, 1, 0), -Math.PI/2);
	mailbox4.rotateOnAxis(new THREE.Vector3(0, 0, 1), -Math.PI/2);
	mailbox4.scale=new THREE.Vector3(1,1,1);

train_objects.push(mailbox4);

var sidewalk1 = textHandler.easyText('Sidewalk');
	sidewalk1.position.set(-3800,0,-5800);
	sidewalk1.rotateOnAxis(new THREE.Vector3(0, 1, 0), -Math.PI/2);
	sidewalk1.rotateOnAxis(new THREE.Vector3(1, 0, 0), -Math.PI/2);
	sidewalk1.scale=new THREE.Vector3(38,10,2);

train_objects.push(sidewalk1);

var street1 = textHandler.easyText('Street');
	street1.position.set(-4850,0,-5800);
	street1.rotateOnAxis(new THREE.Vector3(0, 1, 0), -Math.PI/2);
	street1.rotateOnAxis(new THREE.Vector3(1, 0, 0), -Math.PI/2);
	street1.scale=new THREE.Vector3(55,20,2);

train_objects.push(street1);

var sidewalk2 = textHandler.easyText('Sidewalk');
	sidewalk2.position.set(-5100,0,5000);
	sidewalk2.rotateOnAxis(new THREE.Vector3(0, 1, 0), Math.PI/2);
	sidewalk2.rotateOnAxis(new THREE.Vector3(1, 0, 0), -Math.PI/2);
	sidewalk2.scale=new THREE.Vector3(38,10,2);

train_objects.push(sidewalk2);

var street2 = textHandler.easyText('Street');
	street2.position.set(-3850,0,5100);
	street2.rotateOnAxis(new THREE.Vector3(0, 1, 0), Math.PI);
	street2.rotateOnAxis(new THREE.Vector3(1, 0, 0), -Math.PI/2);
	street2.scale=new THREE.Vector3(55,20,2);

train_objects.push(street2);

var house5 = textHandler.easyText('House');
	house5.position.set(-7100,0,-4200);
	house5.rotateOnAxis(new THREE.Vector3(0, 1, 0), Math.PI/2);
	house5.scale=new THREE.Vector3(10,20,30);

train_objects.push(house5);

var house6 = textHandler.easyText('House');
	house6.position.set(-7100,0,-2000);
	house6.rotateOnAxis(new THREE.Vector3(0, 1, 0), Math.PI/2);
	house6.scale=new THREE.Vector3(10,20,30);

train_objects.push(house6);

var house7 = textHandler.easyText('House');
	house7.position.set(-7100,0,1400);
	house7.rotateOnAxis(new THREE.Vector3(0, 1, 0), Math.PI/2);
	house7.scale=new THREE.Vector3(10,20,30);

train_objects.push(house7);

var house8 = textHandler.easyText('House');
	house8.position.set(-7100,0, 5000);
	house8.rotateOnAxis(new THREE.Vector3(0, 1, 0), Math.PI/2);
	house8.scale=new THREE.Vector3(10,20,30);

train_objects.push(house8);

var garage3 = textHandler.easyText('GaraGe');
	garage3.position.set(-7100,0,3500);
	garage3.rotateOnAxis(new THREE.Vector3(0, 1, 0), Math.PI/2);
	garage3.scale=new THREE.Vector3(8,15,70);

train_objects.push(garage3);

var garage4 = textHandler.easyText('GaraGe');
	garage4.position.set(-7100,0,0);
	garage4.rotateOnAxis(new THREE.Vector3(0, 1, 0), Math.PI/2);
	garage4.scale=new THREE.Vector3(8,15,70);

train_objects.push(garage4);

var mailbox5 = textHandler.easyText('Mailbox');
	mailbox5.position.set(-6100,225,-4500);
	mailbox5.rotateOnAxis(new THREE.Vector3(0, 1, 0), Math.PI/2);
	mailbox5.rotateOnAxis(new THREE.Vector3(0, 0, 1), -Math.PI/2);
	mailbox5.scale=new THREE.Vector3(1,1,1);

train_objects.push(mailbox5);

var train_person3 = textHandler.easyText('Person');
	train_person3.position.set(-6100,0,1900);
	train_person3.rotateOnAxis(new THREE.Vector3(0, 1, 0), Math.PI/2);
	train_person3.rotateOnAxis(new THREE.Vector3(0, 0, 1), Math.PI/2);
	train_person3.scale=new THREE.Vector3(1.5,1,1);

train_objects.push(train_person3);

var mailbox6 = textHandler.easyText('Mailbox');
	mailbox6.position.set(-6100,225,-2500);
	mailbox6.rotateOnAxis(new THREE.Vector3(0, 1, 0), Math.PI/2);
	mailbox6.rotateOnAxis(new THREE.Vector3(0, 0, 1), -Math.PI/2);
	mailbox6.scale=new THREE.Vector3(1,1,1);

train_objects.push(mailbox6);

var mailbox7 = textHandler.easyText('Mailbox');
	mailbox7.position.set(-6100,225,1500);
	mailbox7.rotateOnAxis(new THREE.Vector3(0, 1, 0), Math.PI/2);
	mailbox7.rotateOnAxis(new THREE.Vector3(0, 0, 1), -Math.PI/2);
	mailbox7.scale=new THREE.Vector3(1,1,1);

train_objects.push(mailbox7);

var mailbox8 = textHandler.easyText('Mailbox');
	mailbox8.position.set(-6100,225,3500);
	mailbox8.rotateOnAxis(new THREE.Vector3(0, 1, 0), Math.PI/2);
	mailbox8.rotateOnAxis(new THREE.Vector3(0, 0, 1), -Math.PI/2);
	mailbox8.scale=new THREE.Vector3(1,1,1);

train_objects.push(mailbox8);

var train_person4 = textHandler.easyText('Person');
	train_person4.position.set(-6100,0,-3000);
	train_person4.rotateOnAxis(new THREE.Vector3(0, 1, 0), Math.PI/2);
	train_person4.rotateOnAxis(new THREE.Vector3(0, 0, 1), Math.PI/2);
	train_person4.scale=new THREE.Vector3(1.5,1,1);

train_objects.push(train_person4);

var house9 = textHandler.easyText('House');
	house9.position.set(-8100,0,-6300);
	house9.rotateOnAxis(new THREE.Vector3(0, 1, 0), -Math.PI/2);
	house9.scale=new THREE.Vector3(10,20,30);

train_objects.push(house9);

var house10 = textHandler.easyText('House');
	house10.position.set(-8100,0,-4000);
	house10.rotateOnAxis(new THREE.Vector3(0, 1, 0), -Math.PI/2);
	house10.scale=new THREE.Vector3(10,20,30);

train_objects.push(house10);

var house11 = textHandler.easyText('House');
	house11.position.set(-8100,0,1000);
	house11.rotateOnAxis(new THREE.Vector3(0, 1, 0), -Math.PI/2);
	house11.scale=new THREE.Vector3(10,20,30);

train_objects.push(house11);

var train_person5 = textHandler.easyText('Person');
	train_person5.position.set(-9100,0,-4900);
	train_person5.rotateOnAxis(new THREE.Vector3(0, 1, 0), -Math.PI/2);
	train_person5.rotateOnAxis(new THREE.Vector3(0, 0, 1), Math.PI/2);
	train_person5.scale=new THREE.Vector3(1.5,1,1);

train_objects.push(train_person5);

var house12 = textHandler.easyText('House');
	house12.position.set(-8100,0, 3000);
	house12.rotateOnAxis(new THREE.Vector3(0, 1, 0), -Math.PI/2);
	house12.scale=new THREE.Vector3(10,20,30);

train_objects.push(house12);

var garage5 = textHandler.easyText('GaraGe');
	garage5.position.set(-8100,0,-2500);
	garage5.rotateOnAxis(new THREE.Vector3(0, 1, 0), -Math.PI/2);
	garage5.scale=new THREE.Vector3(8,15,70);

train_objects.push(garage5);

var garage6 = textHandler.easyText('GaraGe');
	garage6.position.set(-8100,0,-500);
	garage6.rotateOnAxis(new THREE.Vector3(0, 1, 0), -Math.PI/2);
	garage6.scale=new THREE.Vector3(8,15,70);

train_objects.push(garage6);

var train_person6 = textHandler.easyText('Person');
	train_person6.position.set(-9100,0,3000);
	train_person6.rotateOnAxis(new THREE.Vector3(0, 1, 0), -Math.PI/2);
	train_person6.rotateOnAxis(new THREE.Vector3(0, 0, 1), Math.PI/2);
	train_person6.scale=new THREE.Vector3(1.5,1,1);

train_objects.push(train_person6);


var sidewalk3 = textHandler.easyText('Sidewalk');
	sidewalk3.position.set(-9500,0,5000);
	sidewalk3.rotateOnAxis(new THREE.Vector3(0, 1, 0), Math.PI/2);
	sidewalk3.rotateOnAxis(new THREE.Vector3(1, 0, 0), -Math.PI/2);
	sidewalk3.scale=new THREE.Vector3(38,10,2);

train_objects.push(sidewalk3);

var street3 = textHandler.easyText('Street');
	street3.position.set(-10100,0,5000);
	street3.rotateOnAxis(new THREE.Vector3(0, 1, 0), Math.PI/2);
	street3.rotateOnAxis(new THREE.Vector3(1, 0, 0), -Math.PI/2);
	street3.scale=new THREE.Vector3(55,20,2);

train_objects.push(street3);

var mailbox9 = textHandler.easyText('Mailbox');
	mailbox9.position.set(-9100,225,-4500);
	mailbox9.rotateOnAxis(new THREE.Vector3(0, 1, 0), -Math.PI/2);
	mailbox9.rotateOnAxis(new THREE.Vector3(0, 0, 1), -Math.PI/2);
	mailbox9.scale=new THREE.Vector3(1,1,1);

train_objects.push(mailbox9);

var mailbox10 = textHandler.easyText('Mailbox');
	mailbox10.position.set(-9100,225,-2500);
	mailbox10.rotateOnAxis(new THREE.Vector3(0, 1, 0), -Math.PI/2);
	mailbox10.rotateOnAxis(new THREE.Vector3(0, 0, 1), -Math.PI/2);
	mailbox10.scale=new THREE.Vector3(1,1,1);

train_objects.push(mailbox10);

var mailbox11 = textHandler.easyText('Mailbox');
	mailbox11.position.set(-9100,225,1500);
	mailbox11.rotateOnAxis(new THREE.Vector3(0, 1, 0), -Math.PI/2);
	mailbox11.rotateOnAxis(new THREE.Vector3(0, 0, 1), -Math.PI/2);
	mailbox11.scale=new THREE.Vector3(1,1,1);

train_objects.push(mailbox11);

var mailbox12 = textHandler.easyText('Mailbox');
	mailbox12.position.set(-9100,225,3500);
	mailbox12.rotateOnAxis(new THREE.Vector3(0, 1, 0), -Math.PI/2);
	mailbox12.rotateOnAxis(new THREE.Vector3(0, 0, 1), -Math.PI/2);
	mailbox12.scale=new THREE.Vector3(1,1,1);

train_objects.push(mailbox12);

var train_tree1 = textHandler.easyText('Tree');
	train_tree1.position.set(-12100,0,3500);
	train_tree1.rotateOnAxis(new THREE.Vector3(0, 1, 0), -Math.PI/.056);
	train_tree1.rotateOnAxis(new THREE.Vector3(0, 0, 1), Math.PI/2);
	train_tree1.scale=new THREE.Vector3(10,4,2);

train_objects.push(train_tree1);

var train_tree2 = textHandler.easyText('Tree');
	train_tree2.position.set(-13100,0,1200);
	train_tree2.rotateOnAxis(new THREE.Vector3(0, 1, 0), -Math.PI/.056);
	train_tree2.rotateOnAxis(new THREE.Vector3(0, 0, 1), Math.PI/2);
	train_tree2.scale=new THREE.Vector3(10,4,2);

train_objects.push(train_tree2);

var train_tree3 = textHandler.easyText('Tree');
	train_tree3.position.set(-12700,0,-2700);
	train_tree3.rotateOnAxis(new THREE.Vector3(0, 1, 0), -Math.PI/.056);
	train_tree3.rotateOnAxis(new THREE.Vector3(0, 0, 1), Math.PI/2);
	train_tree3.scale=new THREE.Vector3(10,4,2);

train_objects.push(train_tree3);

var train_tree4 = textHandler.easyText('Tree');
	train_tree4.position.set(-14000,0,800);
	train_tree4.rotateOnAxis(new THREE.Vector3(0, 1, 0), -Math.PI/.056);
	train_tree4.rotateOnAxis(new THREE.Vector3(0, 0, 1), Math.PI/2);
	train_tree4.scale=new THREE.Vector3(10,4,2);

train_objects.push(train_tree4);

var forest = textHandler.easyText('Forest');
	forest.position.set(-16000,0,-5500);
	forest.rotateOnAxis(new THREE.Vector3( 0, 1, 0 ), -Math.PI/.056);
	forest.scale=new THREE.Vector3( 20, 30, 100 );

train_objects.push(forest);

var train_person6 = textHandler.easyText('Person');
	train_person6.position.set(-15100,0,-4500);
	train_person6.rotateOnAxis(new THREE.Vector3(0, 1, 0), -Math.PI/.056);
	train_person6.rotateOnAxis(new THREE.Vector3(0, 0, 1), Math.PI/2);
	train_person6.scale=new THREE.Vector3(1.5,1,1);

train_objects.push(train_person6);

//A Procession of Lizards
var lizards_material = new THREE.MeshBasicMaterial( { color: 0xffff00, wireframe: false } );
var lizards_geometry = new THREE.CubeGeometry(3000, 6000, 20);
var lizards_floor_mesh = new THREE.Mesh(lizards_geometry,lizards_material);

	lizards_floor_mesh.position.z = -5000;
	lizards_floor_mesh.rotation.x = Math.PI / 2;
 	lizards_floor_mesh.position.y = -20;
	scene.add(lizards_floor_mesh);

var lizards_objects=[];

var lizard1 = textHandler.easyText('Lizard');
	lizard1.position.set(12,0,-5057);
	lizard1.rotateOnAxis(new THREE.Vector3(0, 1, 0), -Math.PI/6);
	//lizard1.rotateOnAxis(new THREE.Vector3(0, 0, 1), Math.PI/2);
	lizard1.scale=new THREE.Vector3(1.5,1,1);

lizards_objects.push(lizard1);

var lizard2 = textHandler.easyText('Lizard');
	lizard2.position.set(500,0,-5200);
	lizard2.rotateOnAxis(new THREE.Vector3(0, 1, 0), Math.PI/16);
	//lizard2.rotateOnAxis(new THREE.Vector3(0, 0, 1), Math.PI/2);
	lizard2.scale=new THREE.Vector3(1.5,1,1);

lizards_objects.push(lizard2);

var lizard3 = textHandler.easyText('Lizard');
	lizard3.position.set(320,0,-4770);
	lizard3.rotateOnAxis(new THREE.Vector3(0, 1, 0), -Math.PI/.056);
	//lizard3.rotateOnAxis(new THREE.Vector3(0, 0, 1), Math.PI/2);
	lizard3.scale=new THREE.Vector3(1.5,1,1);

lizards_objects.push(lizard3);

var lizard4 = textHandler.easyText('Lizard');
	lizard4.position.set(157,0,-3600);
	lizard4.rotateOnAxis(new THREE.Vector3(0, 1, 0), Math.PI/42);
	//lizard4.rotateOnAxis(new THREE.Vector3(0, 0, 1), Math.PI/2);
	lizard4.scale=new THREE.Vector3(1.5,1,1);

lizards_objects.push(lizard4);

var lizard5 = textHandler.easyText('Lizard');
	lizard5.position.set(300,0,-6110);
	lizard5.rotateOnAxis(new THREE.Vector3(0, 1, 0), -Math.PI/118);
	//lizard5.rotateOnAxis(new THREE.Vector3(0, 0, 1), Math.PI/2);
	lizard5.scale=new THREE.Vector3(1.5,1,1);

lizards_objects.push(lizard5);

var lizard6 = textHandler.easyText('Lizard');
	lizard6.position.set(206,0,-4290);
	lizard6.rotateOnAxis(new THREE.Vector3(0, 1, 0), Math.PI/56);
	//lizard6.rotateOnAxis(new THREE.Vector3(0, 0, 1), Math.PI/2);
	lizard6.scale=new THREE.Vector3(1.5,1,1);

lizards_objects.push(lizard6);

var lizard7 = textHandler.easyText('Lizard');
	lizard7.position.set(867,0,-5467);
	lizard7.rotateOnAxis(new THREE.Vector3(0, 1, 0), -Math.PI/4);
	//lizard7.rotateOnAxis(new THREE.Vector3(0, 0, 1), Math.PI/2);
	lizard7.scale=new THREE.Vector3(1.5,1,1);

lizards_objects.push(lizard7);

var lizard8 = textHandler.easyText('Lizard');
	lizard8.position.set(980,0,-3692);
	lizard8.rotateOnAxis(new THREE.Vector3(0, 1, 0), -Math.PI/19);
	//lizard8.rotateOnAxis(new THREE.Vector3(0, 0, 1), Math.PI/2);
	lizard8.scale=new THREE.Vector3(1.5,1,1);

lizards_objects.push(lizard8);

var lizard9 = textHandler.easyText('Lizard');
	lizard9.position.set(-250,0,-7400);
	lizard9.rotateOnAxis(new THREE.Vector3(0, 1, 0), Math.PI/.856);
	//lizard9.rotateOnAxis(new THREE.Vector3(0, 0, 1), Math.PI/2);
	lizard9.scale=new THREE.Vector3(1.5,1,1);

lizards_objects.push(lizard9);

var lizard10 = textHandler.easyText('Lizard');
	lizard10.position.set(-1100,0,-7000);
	lizard10.rotateOnAxis(new THREE.Vector3(0, 1, 0), -Math.PI);
	//lizard10.rotateOnAxis(new THREE.Vector3(0, 0, 1), Math.PI/2);
	lizard10.scale=new THREE.Vector3(1.5,1,1);

lizards_objects.push(lizard10);

var lizard11 = textHandler.easyText('Lizard');
	lizard11.position.set(-780,0,-3089);
	lizard11.rotateOnAxis(new THREE.Vector3(0, 1, 0), Math.PI/100);
	//lizard11.rotateOnAxis(new THREE.Vector3(0, 0, 1), Math.PI/2);
	lizard11.scale=new THREE.Vector3(1.5,1,1);

lizards_objects.push(lizard11);

var greenlizard1 = textHandler.easyText('Lizard');
	greenlizard1.position.set(-1100,0,-7500);
	greenlizard1.rotateOnAxis(new THREE.Vector3(0, 1, 0), -Math.PI/26);
	//greenlizard1.rotateOnAxis(new THREE.Vector3(0, 0, 1), Math.PI/2);
	greenlizard1.scale=new THREE.Vector3(1.5,1,1);

lizards_objects.push(greenlizard1);

var greenlizard2 = textHandler.easyText('Lizard');
	greenlizard2.position.set(-560,0,-7000);
	greenlizard2.rotateOnAxis(new THREE.Vector3(0, 1, 0), Math.PI/.056);
	//greenlizard2.rotateOnAxis(new THREE.Vector3(0, 0, 1), Math.PI/2);
	greenlizard2.scale=new THREE.Vector3(1.5,1,1);

lizards_objects.push(greenlizard2);

var lizards_tree1 = textHandler.easyText('Tree');
	lizards_tree1.position.set(-800,0,-5000);
	lizards_tree1.rotateOnAxis(new THREE.Vector3(0, 1, 0), -Math.PI/.056);
	lizards_tree1.rotateOnAxis(new THREE.Vector3(0, 0, 1), Math.PI/2);
	lizards_tree1.scale=new THREE.Vector3(10,4,2);

lizards_objects.push(lizards_tree1);

var lizards_tree2 = textHandler.easyText('Tree');
	lizards_tree2.position.set(-800,0,-3000);
	lizards_tree2.rotateOnAxis(new THREE.Vector3(0, 1, 0), -Math.PI/.3);
	lizards_tree2.rotateOnAxis(new THREE.Vector3(0, 0, 1), Math.PI/2);
	lizards_tree2.scale=new THREE.Vector3(10,4,2);

lizards_objects.push(lizards_tree2);

var lizards_tree3 = textHandler.easyText('Tree');
	lizards_tree3.position.set(-900,0,-7000);
	lizards_tree3.rotateOnAxis(new THREE.Vector3(0, 1, 0), Math.PI/.278);
	lizards_tree3.rotateOnAxis(new THREE.Vector3(0, 0, 1), Math.PI/2);
	lizards_tree3.scale=new THREE.Vector3(10,4,2);

lizards_objects.push(lizards_tree3);

var lizards_tree4 = textHandler.easyText('Tree');
	lizards_tree4.position.set(-260,0,-3500);
	lizards_tree4.rotateOnAxis(new THREE.Vector3(0, 1, 0), Math.PI/.056);
	lizards_tree4.rotateOnAxis(new THREE.Vector3(0, 0, 1), Math.PI/2);
	lizards_tree4.scale=new THREE.Vector3(10,4,2);

lizards_objects.push(lizards_tree4);

var lizards_tree5 = textHandler.easyText('Tree');
	lizards_tree5.position.set(-0,0,-5000);
	lizards_tree5.rotateOnAxis(new THREE.Vector3(0, 1, 0), -Math.PI);
	lizards_tree5.rotateOnAxis(new THREE.Vector3(0, 0, 1), Math.PI/2);
	lizards_tree5.scale=new THREE.Vector3(10,4,2);

lizards_objects.push(lizards_tree5);

var bush1 = textHandler.easyText('Bush');
	bush1.position.set(-0,0,-5000);
	bush1.rotateOnAxis(new THREE.Vector3(0, 1, 0), -Math.PI/.46);
	//bush1.rotateOnAxis(new THREE.Vector3(0, 0, 1), Math.PI/2);
	bush1.scale=new THREE.Vector3(2,4,2);

lizards_objects.push(bush1);

var bush2 = textHandler.easyText('Bush');
	bush2.position.set(-980,0,-3000);
	bush2.rotateOnAxis(new THREE.Vector3(0, 1, 0), -Math.PI/.086);
	//bush2.rotateOnAxis(new THREE.Vector3(0, 0, 1), Math.PI/2);
	bush2.scale=new THREE.Vector3(2,4,2);

lizards_objects.push(bush2);

var bush3 = textHandler.easyText('Bush');
	bush3.position.set(450,0,-7000);
	bush3.rotateOnAxis(new THREE.Vector3(0, 1, 0), -Math.PI/.96);
	//bush3.rotateOnAxis(new THREE.Vector3(0, 0, 1), Math.PI/2);
	bush3.scale=new THREE.Vector3(2,4,2);

lizards_objects.push(bush3);

var bush4 = textHandler.easyText('Bush');
	bush4.position.set(800,0,-6000);
	bush4.rotateOnAxis(new THREE.Vector3(0, 1, 0), -Math.PI/.056);
	//bush4.rotateOnAxis(new THREE.Vector3(0, 0, 1), Math.PI/2);
	bush4.scale=new THREE.Vector3(2,4,2);

lizards_objects.push(bush4);

var bench = textHandler.easyText('Bench');
	bench.position.set(-700,0,-3000);
	bench.rotateOnAxis(new THREE.Vector3(0, 1, 0), -Math.PI/.02);
	//bench.rotateOnAxis(new THREE.Vector3(0, 0, 1), Math.PI/2);
	bench.scale=new THREE.Vector3(2,4,2);

lizards_objects.push(bench);

var rottenlog = textHandler.easyText('Rotten Log');
	rottenlog.position.set(-860,0,-7000);
	rottenlog.rotateOnAxis(new THREE.Vector3(0, 1, 0), -Math.PI/.056);
	//rottenlog.rotateOnAxis(new THREE.Vector3(0, 0, 1), Math.PI/2);
	rottenlog.scale=new THREE.Vector3(2,4,2);

lizards_objects.push(rottenlog);

var hole1 = textHandler.easyText('Hole');
	hole1.position.set(-1100,0,-5000);
	hole1.rotateOnAxis(new THREE.Vector3(0, 1, 0), -Math.PI/.256);
	//hole1.rotateOnAxis(new THREE.Vector3(0, 0, 1), Math.PI/2);
	hole1.scale=new THREE.Vector3(1.5,1,1);

lizards_objects.push(hole1);

var hole2 = textHandler.easyText('Hole');
	hole2.position.set(1100,0,-5000);
	hole2.rotateOnAxis(new THREE.Vector3(0, 1, 0), -Math.PI/.56);
	//hole2.rotateOnAxis(new THREE.Vector3(0, 0, 1), Math.PI/2);
	hole2.scale=new THREE.Vector3(1.5,1,1);

lizards_objects.push(hole2);

//The Dinner Party
var dinner_material = new THREE.MeshBasicMaterial( { color: 0xffff00, wireframe: false } );
var dinner_geometry = new THREE.CubeGeometry(3000, 6000, 20);
var dinner_floor_mesh = new THREE.Mesh(dinner_geometry,dinner_material);

	dinner_floor_mesh.position.z = 5000;
	dinner_floor_mesh.rotation.x = Math.PI / 2;
 	dinner_floor_mesh.position.y = -20;
	scene.add(dinner_floor_mesh);

var dinner_objects=[];

var dinner_wall1 = textHandler.easyText('Wall');
	dinner_wall1.position.set(1300,0,8000);
	dinner_wall1.rotateOnAxis(new THREE.Vector3(0, 1, 0), -Math.PI);
	dinner_wall1.scale=new THREE.Vector3(20,20,10);

dinner_objects.push(dinner_wall1);

var dinner_wall2 = textHandler.easyText('Wall');
	dinner_wall2.position.set(-1300,0,2000);
	dinner_wall2.rotateOnAxis(new THREE.Vector3(0, 1, 0), Math.PI *2);
	dinner_wall2.scale=new THREE.Vector3(20,20,10);

dinner_objects.push(dinner_wall2);

var dinner_wall3 = textHandler.easyText('Wall');
	dinner_wall3.position.set(-1500,0,8000);
	dinner_wall3.rotateOnAxis(new THREE.Vector3(0, 1, 0), Math.PI/2);
	dinner_wall3.scale=new THREE.Vector3(45,20,10);

dinner_objects.push(dinner_wall3);

var dinner_wall4 = textHandler.easyText('Wall');
	dinner_wall4.position.set(1500,0,2000);
	dinner_wall4.rotateOnAxis(new THREE.Vector3(0, 1, 0), -Math.PI/2);
	dinner_wall4.scale=new THREE.Vector3(45,20,10);

dinner_objects.push(dinner_wall4);

var dinner_table = textHandler.easyText('Table');
	dinner_table.position.set(250,0,5000);
	dinner_table.rotateOnAxis(new THREE.Vector3(0, 1, 0), -Math.PI/2);
	dinner_table.rotateOnAxis(new THREE.Vector3(1, 0, 0), -Math.PI/2);
	dinner_table.scale=new THREE.Vector3(10,6,12);

dinner_objects.push(dinner_table);

var chair1 = textHandler.easyText('Chair');
	chair1.position.set(200,0,5450);
	chair1.rotateOnAxis(new THREE.Vector3(0, 1, 0), -Math.PI/2);
	//chair1.rotateOnAxis(new THREE.Vector3(0, 0, 1), Math.PI/2);
	chair1.scale=new THREE.Vector3(1,4,1);

dinner_objects.push(chair1);

var chair2 = textHandler.easyText('Chair');
	chair2.position.set(200,0,5700);
	chair2.rotateOnAxis(new THREE.Vector3(0, 1, 0), -Math.PI/2);
	//chair2.rotateOnAxis(new THREE.Vector3(0, 0, 1), Math.PI/2);
	chair2.scale=new THREE.Vector3(1,4,1);

dinner_objects.push(chair2);

var chair3 = textHandler.easyText('Chair');
	chair3.position.set(200,0,5950);
	chair3.rotateOnAxis(new THREE.Vector3(0, 1, 0), -Math.PI/2);
	//chair3.rotateOnAxis(new THREE.Vector3(0, 0, 1), Math.PI/2);
	chair3.scale=new THREE.Vector3(1,4,1);

dinner_objects.push(chair3);

var chair4 = textHandler.easyText('Chair');
	chair4.position.set(200,0,6200);
	chair4.rotateOnAxis(new THREE.Vector3(0, 1, 0), -Math.PI/2);
	//chair4.rotateOnAxis(new THREE.Vector3(0, 0, 1), Math.PI/2);
	chair4.scale=new THREE.Vector3(1,4,1);

dinner_objects.push(chair4);

var chair5 = textHandler.easyText('Chair');
	chair5.position.set(640,0,5450);
	chair5.rotateOnAxis(new THREE.Vector3(0, 1, 0), -Math.PI/2);
	//chair5.rotateOnAxis(new THREE.Vector3(0, 0, 1), Math.PI/2);
	chair5.scale=new THREE.Vector3(1,4,1);

dinner_objects.push(chair5);

var chair6 = textHandler.easyText('Chair');
	chair6.position.set(640,0,5700);
	chair6.rotateOnAxis(new THREE.Vector3(0, 1, 0), -Math.PI/2);
	//chair6.rotateOnAxis(new THREE.Vector3(0, 0, 1), Math.PI/2);
	chair6.scale=new THREE.Vector3(1,4,1);

dinner_objects.push(chair6);

var chair7 = textHandler.easyText('Chair');
	chair7.position.set(640,0,5950);
	chair7.rotateOnAxis(new THREE.Vector3(0, 1, 0), -Math.PI/2);
	//chair7.rotateOnAxis(new THREE.Vector3(0, 0, 1), Math.PI/2);
	chair7.scale=new THREE.Vector3(1,4,1);

dinner_objects.push(chair7);

var chair8 = textHandler.easyText('Chair');
	chair8.position.set(640,0,6200);
	chair8.rotateOnAxis(new THREE.Vector3(0, 1, 0), -Math.PI/2);
	//chair8.rotateOnAxis(new THREE.Vector3(0, 0, 1), Math.PI/2);
	chair8.scale=new THREE.Vector3(1,4,1);

dinner_objects.push(chair8);

var dinner_person1 = textHandler.easyText('Person');
	dinner_person1.position.set(400,0,7000);
	dinner_person1.rotateOnAxis(new THREE.Vector3(0, 1, 0), -Math.PI);
	dinner_person1.rotateOnAxis(new THREE.Vector3(0, 0, 1), Math.PI/2);
	dinner_person1.scale=new THREE.Vector3(1.5,1,1);

dinner_objects.push(dinner_person1);

var dinner_person2 = textHandler.easyText('Person');
	dinner_person2.position.set(-200,0,6000);
	dinner_person2.rotateOnAxis(new THREE.Vector3(0, 1, 0), -Math.PI);
	dinner_person2.rotateOnAxis(new THREE.Vector3(0, 0, 1), Math.PI/2);
	dinner_person2.scale=new THREE.Vector3(1.5,1,1);

dinner_objects.push(dinner_person2);

var dinner_person3 = textHandler.easyText('Person');
	dinner_person3.position.set(-40,0,5000);
	dinner_person3.rotateOnAxis(new THREE.Vector3(0, 1, 0), -Math.PI);
	dinner_person3.rotateOnAxis(new THREE.Vector3(0, 0, 1), Math.PI/2);
	dinner_person3.scale=new THREE.Vector3(1.5,1,1);

dinner_objects.push(dinner_person3);

var dinner_person4 = textHandler.easyText('Person');
	dinner_person4.position.set(130,0,3000);
	dinner_person4.rotateOnAxis(new THREE.Vector3(0, 1, 0), -Math.PI);
	dinner_person4.rotateOnAxis(new THREE.Vector3(0, 0, 1), Math.PI/2);
	dinner_person4.scale=new THREE.Vector3(1.5,1,1);

dinner_objects.push(dinner_person4);

var dinner_person5 = textHandler.easyText('Person');
	dinner_person5.position.set(-400,0,5000);
	dinner_person5.rotateOnAxis(new THREE.Vector3(0, 1, 0), -Math.PI);
	dinner_person5.rotateOnAxis(new THREE.Vector3(0, 0, 1), Math.PI/2);
	dinner_person5.scale=new THREE.Vector3(1.5,1,1);

dinner_objects.push(dinner_person5);

var dinner_person6 = textHandler.easyText('Person');
	dinner_person6.position.set(480,0,3000);
	dinner_person6.rotateOnAxis(new THREE.Vector3(0, 1, 0), -Math.PI);
	dinner_person6.rotateOnAxis(new THREE.Vector3(0, 0, 1), Math.PI/2);
	dinner_person6.scale=new THREE.Vector3(1.5,1,1);

dinner_objects.push(dinner_person6);

var dinner_person7 = textHandler.easyText('Person');
	dinner_person7.position.set(400,0,3200);
	dinner_person7.rotateOnAxis(new THREE.Vector3(0, 1, 0), -Math.PI);
	dinner_person7.rotateOnAxis(new THREE.Vector3(0, 0, 1), Math.PI/2);
	dinner_person7.scale=new THREE.Vector3(1.5,1,1);

dinner_objects.push(dinner_person7);


//add all to scene
_.each(train_objects,function(o){
	scene.add(o)
})

_.each(lizards_objects,function(o){
	scene.add(o)
})

_.each(dinner_objects,function(o){
	scene.add(o)
})


	scene.player = player;
	scene.objectsToAnimate = [];
	scene.objectsToAnimate.push(cubeMesh);



	module.exports = scene;
});



// var SOMELEVEL_material = new THREE.MeshBasicMaterial( { color: 0xffff00, wireframe: false } );
// var SOMELEVEL_geometry = new THREE.CubeGeometry(4000, 3000, 20);
// var SOMELEVEL_floor_mesh = new THREE.Mesh(SOMELEVEL_geometry,SOMELEVEL_material);

// 	SOMELEVEL_floor_mesh.position.x = -4000;
// 	SOMELEVEL_floor_mesh.rotation.x = Math.PI / 2;
//  	SOMELEVEL_floor_mesh.position.y = -20;
// 	scene.add(SOMELEVEL_floor_mesh);
	

// var SOMELEVEL_OBJECTS=[]

// //per object flow
// var SOMELEVEL_TEXT_MESH = textHandler.easyText('SOMETEXT');
// 	SOMELEVEL_TEXT_MESH.position.set(-4100,0,-1500);
// 	SOMELEVEL_TEXT_MESH.rotateOnAxis(new THREE.Vector3(0, 1, 0), -Math.PI/2);
// 	SOMELEVEL_TEXT_MESH.scale=new THREE.Vector3(22,20,10);

// SOMELEVEL_OBJECTS.push(SOMELEVEL_TEXT_MESH);



// //add all to scene
// _.each(SOMELEVEL_OBJECTS,function(o){
// 	scene.add(o)
// })

