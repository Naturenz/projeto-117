var randomNumber = Math.floor((Math.random()*quickDrawDataset.length)+1)
console.log(quickDrawDataset[randomNumber])

var sketch = quickDrawDataset[randomNumber]
document.getElementById("esbocoSD").innerHTML= "Esboço a Ser Desenhado:" + sketch

var timerCounter = 0
var timerCheck = ""
var drawSketch = ""
var answerHolder = ""
var score = 0