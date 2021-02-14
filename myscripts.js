isPlaying = true; //for pause and resume function purposes
var speed = 4000; //default speed 
var NoExposed = []; 
  function getRandomNumber(min,max){
    let step1 = max-min +1;
    let step2 = Math.random() * step1;
    let result = Math.floor(step2) +min;
    return result;
  }
  function arrayofNumber(start,end){
    let array = [];

    for(let i = start; i<=end; i++){
      array.push(i);
    }
    return array;
  }

  let numbersArray = arrayofNumber(1,90);
  
  //start generate 
  function startFunction() {
	isPlaying = true;
	//start audio
	_start = new Audio('start.mp3');
    _start.play();
	 
	//set speed	of start sentence ***not speed of generating number
	setTimeout(
	function spinFunction() {
	
	document.getElementById("button").style.display = "none";
			
	if(!isPlaying){ //if pause will stop for a while
	setTimeout(spinFunction, 35000000000000000);
	}
	else //else will continue to generate
	{
	setTimeout(spinFunction, speed); // here is setting speed of generating number
	
    if(numbersArray.length == 0){ //return and expose "end" if generating process finished
      document.getElementById("Number").innerHTML = "End";
      return;
    }
    let randomIndex = getRandomNumber(0,numbersArray.length -1);
    let RecentNumber = numbersArray[randomIndex];
	
    numbersArray.splice(randomIndex,1);
    document.getElementById("Number").innerHTML = RecentNumber;
	
	//audio
	if (document.getElementById("Number").innerHTML == 1){
      _1 = new Audio('1.mp3');
      _1.play();
    }
	if (document.getElementById("Number").innerHTML == 2){
      _2 = new Audio('2.mp3');
      _2.play();
    }
	if (document.getElementById("Number").innerHTML == 3){
      _3 = new Audio('3.mp3');
      _3.play();
    }
	if (document.getElementById("Number").innerHTML == 4){
      _4 = new Audio('4.mp3');
      _4.play();
    }
	if (document.getElementById("Number").innerHTML == 5){
      _5 = new Audio('5.mp3');
      _5.play();
    }
	if (document.getElementById("Number").innerHTML == 6){
      _1 = new Audio('6.mp3');
      _1.play();
    }
	if (document.getElementById("Number").innerHTML == 7){
      _1 = new Audio('7.mp3');
      _1.play();
    }
	if (document.getElementById("Number").innerHTML == 8){
      _1 = new Audio('8.mp3');
      _1.play();
    }
	if (document.getElementById("Number").innerHTML == 9){
      _1 = new Audio('9.mp3');
      _1.play();
    }
	if (document.getElementById("Number").innerHTML == 10){
      _1 = new Audio('10.mp3');
      _1.play();
    }
	if (document.getElementById("Number").innerHTML == 11){
      _1 = new Audio('11.mp3');
      _1.play();
    }
	if (document.getElementById("Number").innerHTML == 12){
      _1 = new Audio('12.mp3');
      _1.play();
    }
	if (document.getElementById("Number").innerHTML == 13){
      _1 = new Audio('13.mp3');
      _1.play();
    }
	if (document.getElementById("Number").innerHTML == 14){
      _1 = new Audio('14.mp3');
      _1.play();
    }
	if (document.getElementById("Number").innerHTML == 15){
      _1 = new Audio('15.mp3');
      _1.play();
    }
	if (document.getElementById("Number").innerHTML == 16){
      _1 = new Audio('16.mp3');
      _1.play();
    }
	if (document.getElementById("Number").innerHTML == 17){
      _1 = new Audio('17.mp3');
      _1.play();
    }
	if (document.getElementById("Number").innerHTML == 18){
      _1 = new Audio('18.mp3');
      _1.play();
    }
	if (document.getElementById("Number").innerHTML == 19){
      _1 = new Audio('19.mp3');
      _1.play();
    }
	if (document.getElementById("Number").innerHTML == 20){
      _1 = new Audio('20.mp3');
      _1.play();
    }
	if (document.getElementById("Number").innerHTML == 21){
      _1 = new Audio('21.mp3');
      _1.play();
    }
	if (document.getElementById("Number").innerHTML == 22){
      _1 = new Audio('22.mp3');
      _1.play();
    }
	if (document.getElementById("Number").innerHTML == 23){
      _1 = new Audio('23.mp3');
      _1.play();
    }
	if (document.getElementById("Number").innerHTML == 24){
      _1 = new Audio('24.mp3');
      _1.play();
    }
	if (document.getElementById("Number").innerHTML == 25){
      _1 = new Audio('25.mp3');
      _1.play();
    }
	if (document.getElementById("Number").innerHTML == 26){
      _1 = new Audio('26.mp3');
      _1.play();
    }
	if (document.getElementById("Number").innerHTML == 27){
      _1 = new Audio('27.mp3');
      _1.play();
    }
	if (document.getElementById("Number").innerHTML == 28){
      _1 = new Audio('28.mp3');
      _1.play();
    }
	if (document.getElementById("Number").innerHTML == 29){
      _1 = new Audio('29.mp3');
      _1.play();
    }
	if (document.getElementById("Number").innerHTML == 30){
      _1 = new Audio('30.mp3');
      _1.play();
    }
	if (document.getElementById("Number").innerHTML == 31){
      _1 = new Audio('31.mp3');
      _1.play();
    }
	if (document.getElementById("Number").innerHTML == 32){
      _1 = new Audio('32.mp3');
      _1.play();
    }
	if (document.getElementById("Number").innerHTML == 33){
      _1 = new Audio('33.mp3');
      _1.play();
    }
	if (document.getElementById("Number").innerHTML == 34){
      _1 = new Audio('34.mp3');
      _1.play();
    }
	if (document.getElementById("Number").innerHTML == 35){
      _1 = new Audio('35.mp3');
      _1.play();
    }
	if (document.getElementById("Number").innerHTML == 36){
      _1 = new Audio('36.mp3');
      _1.play();
    }
	if (document.getElementById("Number").innerHTML == 37){
      _1 = new Audio('37.mp3');
      _1.play();
    }
	if (document.getElementById("Number").innerHTML == 38){
      _1 = new Audio('38.mp3');
      _1.play();
    }
	if (document.getElementById("Number").innerHTML == 39){
      _1 = new Audio('39.mp3');
      _1.play();
    }
	if (document.getElementById("Number").innerHTML == 40){
      _1 = new Audio('40.mp3');
      _1.play();
    }
	if (document.getElementById("Number").innerHTML == 41){
      _1 = new Audio('41.mp3');
      _1.play();
    }
	if (document.getElementById("Number").innerHTML == 42){
      _1 = new Audio('42.mp3');
      _1.play();
    }
	if (document.getElementById("Number").innerHTML == 43){
      _1 = new Audio('43.mp3');
      _1.play();
    }
	if (document.getElementById("Number").innerHTML == 44){
      _1 = new Audio('44.mp3');
      _1.play();
    }
	if (document.getElementById("Number").innerHTML == 45){
      _1 = new Audio('45.mp3');
      _1.play();
    }
	if (document.getElementById("Number").innerHTML == 46){
      _1 = new Audio('46.mp3');
      _1.play();
    }
	if (document.getElementById("Number").innerHTML == 47){
      _1 = new Audio('47.mp3');
      _1.play();
    }
	if (document.getElementById("Number").innerHTML == 48){
      _1 = new Audio('48.mp3');
      _1.play();
    }
	if (document.getElementById("Number").innerHTML == 49){
      _1 = new Audio('49.mp3');
      _1.play();
    }
	if (document.getElementById("Number").innerHTML == 50){
      _1 = new Audio('50.mp3');
      _1.play();
    }
	if (document.getElementById("Number").innerHTML == 51){
      _1 = new Audio('51.mp3');
      _1.play();
    }
	if (document.getElementById("Number").innerHTML == 52){
      _1 = new Audio('52.mp3');
      _1.play();
    }
	if (document.getElementById("Number").innerHTML == 53){
      _1 = new Audio('53.mp3');
      _1.play();
    }
	if (document.getElementById("Number").innerHTML == 54){
      _1 = new Audio('54.mp3');
      _1.play();
    }
	if (document.getElementById("Number").innerHTML == 55){
      _1 = new Audio('55.mp3');
      _1.play();
    }
	if (document.getElementById("Number").innerHTML == 56){
      _1 = new Audio('56.mp3');
      _1.play();
    }
	if (document.getElementById("Number").innerHTML == 57){
      _1 = new Audio('57.mp3');
      _1.play();
    }
	if (document.getElementById("Number").innerHTML == 58){
      _1 = new Audio('58.mp3');
      _1.play();
    }
	if (document.getElementById("Number").innerHTML == 59){
      _1 = new Audio('59.mp3');
      _1.play();
    }
	if (document.getElementById("Number").innerHTML == 60){
      _1 = new Audio('60.mp3');
      _1.play();
    }
	if (document.getElementById("Number").innerHTML == 61){
      _1 = new Audio('61.mp3');
      _1.play();
    }
	if (document.getElementById("Number").innerHTML == 62){
      _1 = new Audio('62.mp3');
      _1.play();
    }
	if (document.getElementById("Number").innerHTML == 63){
      _1 = new Audio('63.mp3');
      _1.play();
    }
	if (document.getElementById("Number").innerHTML == 64){
      _1 = new Audio('64.mp3');
      _1.play();
    }
	if (document.getElementById("Number").innerHTML == 65){
      _1 = new Audio('65.mp3');
      _1.play();
    }
	if (document.getElementById("Number").innerHTML == 66){
      _1 = new Audio('66.mp3');
      _1.play();
    }
	if (document.getElementById("Number").innerHTML == 67){
      _1 = new Audio('67.mp3');
      _1.play();
    }
	if (document.getElementById("Number").innerHTML == 68){
      _1 = new Audio('68.mp3');
      _1.play();
    }
	if (document.getElementById("Number").innerHTML == 69){
      _1 = new Audio('69.mp3');
      _1.play();
    }
	if (document.getElementById("Number").innerHTML == 70){
      _1 = new Audio('70.mp3');
      _1.play();
    }
	if (document.getElementById("Number").innerHTML == 71){
      _1 = new Audio('71.mp3');
      _1.play();
    }
	if (document.getElementById("Number").innerHTML == 72){
      _1 = new Audio('72.mp3');
      _1.play();
    }
	if (document.getElementById("Number").innerHTML == 73){
      _1 = new Audio('73.mp3');
      _1.play();
    }
	if (document.getElementById("Number").innerHTML == 74){
      _1 = new Audio('74.mp3');
      _1.play();
    }
	if (document.getElementById("Number").innerHTML == 75){
      _1 = new Audio('75.mp3');
      _1.play();
    }
	if (document.getElementById("Number").innerHTML == 76){
      _1 = new Audio('76.mp3');
      _1.play();
    }
	if (document.getElementById("Number").innerHTML == 77){
      _1 = new Audio('77.mp3');
      _1.play();
    }
	if (document.getElementById("Number").innerHTML == 78){
      _1 = new Audio('78.mp3');
      _1.play();
    }
	if (document.getElementById("Number").innerHTML == 79){
      _1 = new Audio('79.mp3');
      _1.play();
    }
	if (document.getElementById("Number").innerHTML == 80){
      _1 = new Audio('80.mp3');
      _1.play();
    }
	if (document.getElementById("Number").innerHTML == 81){
      _1 = new Audio('81.mp3');
      _1.play();
    }
	if (document.getElementById("Number").innerHTML == 82){
      _1 = new Audio('82.mp3');
      _1.play();
    }
	if (document.getElementById("Number").innerHTML == 83){
      _1 = new Audio('83.mp3');
      _1.play();
    }
	if (document.getElementById("Number").innerHTML == 84){
      _1 = new Audio('84.mp3');
      _1.play();
    }
	if (document.getElementById("Number").innerHTML == 85){
      _1 = new Audio('85.mp3');
      _1.play();
    }
	if (document.getElementById("Number").innerHTML == 86){
      _1 = new Audio('86.mp3');
      _1.play();
    }
	if (document.getElementById("Number").innerHTML == 87){
      _1 = new Audio('87.mp3');
      _1.play();
    }
	if (document.getElementById("Number").innerHTML == 88){
      _1 = new Audio('88.mp3');
      _1.play();
    }
	if (document.getElementById("Number").innerHTML == 89){
      _1 = new Audio('89.mp3');
      _1.play();
    }
	if (document.getElementById("Number").innerHTML == 90){
      _1 = new Audio('90.mp3');
      _1.play();
    }
	// end audio
	
	//push number generated to screen
    NoExposed.push(RecentNumber);
    var text = "<ul>";
    for (i = 0; i < NoExposed.length; i++) {
    text += "<li>" + NoExposed[i] + "</li>";
    }
    text += "</ul>";
	
    document.getElementById("numberExposed").innerHTML = text;

  }}, 3500);}
  
  //pause function 
  function pause(){
	isPlaying = false;
	}
	
  //resume function
  function resume(){
	isPlaying = true;
  }

  //name of winner
  function winFunction(){

    document.getElementById("winner").innerHTML = document.getElementById("Nametext").value;
    document.getElementById("congrat").innerHTML = "Congratulation!!!";
    document.getElementById("winnerdiv").style.visibility="hidden";
  }

//faster function
function faster(){
	speed = speed - 1000;
  }
  
//slower function
function slower(){
	speed = speed + 1000;
  }
