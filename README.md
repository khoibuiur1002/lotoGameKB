<!DOCTYPE html>
<html>
<head>
  <title>Loto Game Play</title>
  <link rel="stylesheet" type="text/css" href="lotto.css">

  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
  <!-- Latest compiled and minified CSS -->
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css">
  <!-- jQuery library -->
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
  <!-- Popper JS -->
  <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.6/umd/popper.min.js"></script>
  <!-- Latest compiled JavaScript -->
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.2.1/js/bootstrap.min.js"></script>

</head>
<body>
  <div class = "container">
    <div class = "row">
      <div class = "col-12">
        <h1>Bingo Game</h1>
      </div>
    </div>
    <div class = "row">
      <div class = "col-sm-4">
          <h3>Numbers exposed: </h3>
        <br />
          <p id = "numberExposed"></p><br />
      </div>
      <div class = "col-sm-4 middle">
        <input id="button" type="button" value="SPIN" onclick="spinFunction()"/>
        <br />
        <br />
        <br />
        <h1 id="Number"></h1>
      </div>
      <div class = "col-sm-4">
        <div id="winnerdiv">
          <h3>The Winner:</h3> &nbsp;
          <input class = "name" type="text" name="yourName" id="Nametext" /><br />
          <input type="button" id="winbutton" onclick = "winFunction()" value = "click">
        </div>
        <br />
        <div id="congratulation">
          <h1 id = "congrat"></h1>
          <p class = "theWinnerBox" type="text" id="winner" /><br />
        </div>

      </div>
    </div>


  </div>

<script>


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

  function spinFunction() {
    if(numbersArray.length ==0){
      document.getElementById("Number").innerHTML = "End";
      return;
    }
    let randomIndex = getRandomNumber(0,numbersArray.length -1);
    let RecentNumber = numbersArray[randomIndex];
    numbersArray.splice(randomIndex,1);
    document.getElementById("Number").innerHTML = RecentNumber;
    NoExposed.push(RecentNumber);
    var text = "<ul>";
    for (i = 0; i < NoExposed.length; i++) {
    text += "<li>" + NoExposed[i] + "</li>";
    }
    text += "</ul>";

    document.getElementById("numberExposed").innerHTML = text;




  }

  function winFunction(){

    document.getElementById("winner").innerHTML = document.getElementById("Nametext").value;
    document.getElementById("congrat").innerHTML = "Congratulation!!!";
    document.getElementById("winnerdiv").style.visibility="hidden";
  }


</script>
</body>
</html>
