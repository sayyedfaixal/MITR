
fetch('data.json')
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonData) {
    appendData(jsonData);
  })
  .catch(function (err) {
    console.log('error: ' + err);
  });

function appendData(jsonData) {

  var container = document.getElementsByClassName("container");
  container[0].innerHTML = ""

  for (var i = 0; i < jsonData.length; i++) {

    var div = document.createElement("div");
    var newSrDiv = document.createElement("div");
    var newQuestionDiv = document.createElement("div");
    var newAnswerDiv = document.createElement("div");
    var choiceAnswerDiv = document.createElement("div");

    div.classList.add("data");
    newSrDiv.classList.add("srData");
    newQuestionDiv.classList.add("questionData");
    newAnswerDiv.classList.add("answerData");
    choiceAnswerDiv.classList.add("choiceData");
    choiceAnswerDiv.setAttribute("draggable", true);

    newSrDiv.appendChild(document.createTextNode(jsonData[i].id));
    newQuestionDiv.appendChild(document.createTextNode(jsonData[i].ques));
    choiceAnswerDiv.appendChild(document.createTextNode(jsonData[i].ans));

    div.appendChild(newSrDiv);
    div.appendChild(newQuestionDiv);
    div.appendChild(newAnswerDiv);
    div.appendChild(choiceAnswerDiv);
    container[0].appendChild(div);
  }
  init();
}
function init() {
  var choiceBoxes = document.getElementsByClassName('choiceData');
  var answerBoxes = document.getElementsByClassName('answerData');
  for (item of choiceBoxes) {

    item.addEventListener('dragstart', (e) => {
      console.log('Drag Start');
      e.target.className += ' hold';
    })
    item.addEventListener('dragend', (e) => {
      e.target.className = 'item';
      console.log('Drag End');
    });

    for (box of answerBoxes) {
      box.addEventListener('dragover', (e) => {
        e.preventDefault();
      console.log('Drag Over');

      });
      box.addEventListener('dragenter', () => {
        console.log('Drag Enter');

      });
      box.addEventListener('dragleave', () => {
        console.log('Drag Leave');

      });
      box.addEventListener('drop', (e) => {
        e.target.append(item);
        console.log('Drop');

      });

    }
  }
}