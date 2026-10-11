const HEIGHT = 360;
const WIDTH = 480;
let draw = SVG().addTo('.game').size(WIDTH, HEIGHT);
let background = draw.rect(WIDTH, HEIGHT).fill('#dde3e1');
let border_left = draw.line(30,0,30,HEIGHT).stroke({width: 10, color: "black"});
let border_right = draw.line(450,0,450,HEIGHT).stroke({width: 10, color: "black"});
let border_center = draw.line(240,0,240,HEIGHT).stroke({width: 5, color: "black", dasharray: [10, 10]});
let text = draw.text("0").move(400, 30).font({size: 40}).fill("white");
let car = draw.image('./car.png').size(30, 60).move(260, 300);
let car_speed = 0;
let border = draw.image('./racingtrack.png').size(106, 20).move(getRandomInt(70, 390), 50);
let points = 0;
function mechanics(){
    if(border_center.y() == 0){
        border_center.dy(10);
    }
    else{
        border_center.dy(-10);                                                                                       
    }
    car.dx(car_speed);
    border.dy(3);
    if(border.y() >= HEIGHT){
        border.y(0);
        border.x(getRandomInt(70, 390)); 
        points = points + 1;
        text.text("" + points);
    }
    let calizi = car.x() + car.width() > border.x() && car.x() < border.x() + border.width() && car.y() < border.y() + border.height();
    // console.log(calizi)
    if(calizi){
        clearInterval(interval);
    }
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
  }

let interval = setInterval(mechanics, 10);

document.addEventListener("keypress", function(event){
    console.log(event);
    if(event.key == "a"){
        car_speed = -2;
    }
    else if(event.key == "d"){
        car_speed = 2;
    }
    else{
        car_speed = 0;
    }
})

function car_stuff(){}

