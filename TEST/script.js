'use strict!';
const jsonData = [
    {
        id: 1,
        ques: "Means that the probability that a relationship between two variables is NOT a coincidence.",
        ans: "p=0.03"
    },
    {
        id: 2,
        ques: "To visualize a process over time.",
        ans: "run chart"
    },
    {
        id: 3,
        ques: "Means that a variable shows a high correlation with another variable.",
        ans: "R<sup>2<sup> = 0.87"
    },
    {
        id: 4,
        ques: "To visualize a possible correlation between variable.",
        ans: "scatter plot"
    },
    {
        id: 5,
        ques: "Means that the correlation between several variable is weak.",
        ans: "R<sup>2</sup> = 0.38"
    },
    {
        id: 6,
        ques: "Means that the probability that a relationship between two variables may be a coincidence.",
        ans: "p = 0.13"
    }
];
document.getElementById("app").innerHTML = `
    <div class = head>
        <span id = head1><b>Six Sigma IV - DMAIC - Go!</b></span>
        <br>
        <span id = head2>Analyze</span>
    </div>
    <hr>
    <div class = section2>
        <p id = cyk><b>Check Your Knowledge</b></p>
    </div>
    <div id = section3>
        <p>Match the relevent area to its characteristics feature.</p>
        <p id = link1>When you're done, click <b>Submit</b></p>
    </div>
    <div class = mainContainer>
        <div class = container>
            ${jsonData.map(function (dis1) {
    return `
                <div class="content">
                        <div class = idlist><b>${dis1.id}.</b></div>
                        <div class = idques>${dis1.ques}</div>
                    </div>
                    `
}).join(' ')}
        </div>
        <div class = container>
            <div class = box1 id = bx1></div>
            <div class = box1 id = bx2></div>
            <div class = box1 id = bx3></div>
            <div class = box1 id = bx4></div>
            <div class = box1 id = bx5></div>
            <div class = box1 id = bx6></div>
        </div>
        <div class = container1>
            <div class = text1 id = trgt1 draggable = "true">
                scatter plot
            </div>
            <div class = text1 id = trgt2 draggable = "true">
                R<sup>2</sup> = 0.38
            </div>
            <div class = text1 id = trgt3 draggable = "true">
                pi = 0.13
            </div>
            <div class = text1 id = trgt4 draggable = "true">
                run chart
            </div>
            <div class = text1 id = trgt5 draggable = "true">
                pi = 0.03
            </div>
            <div class = text1 id = trgt6 draggable = "true">
                R<sup>2</sup> = 0.87
            </div>
        </div>
    </div>
    <div class = btns>
        <img onclick="reload()" style="width: 150px; height: 50px;" src="./resetBtn_en.png">
        <img style="width: 150px; height: 50px;" src ="D:\SVN\I100014_GET_Training_2021\Nassignment\images\submitBtn_en.png">
        <img onclick = "submitbtn()" style="width: 150px; height: 50px; margin-left: 450px" src="./submitBtn_en.png">
    </div>


`;
let a1 = document.getElementById('trgt1');
let a2 = document.getElementById('trgt2');
let a3 = document.getElementById('trgt3');
let a4 = document.getElementById('trgt4');
let a5 = document.getElementById('trgt5');
let a6 = document.getElementById('trgt6');
// let text = document.querySelectorAll('text1')
let Boxes = document.querySelectorAll('.box1');


a1.addEventListener('dragstart', (e) => {
    e.dataTransfer.setData('Text', e.target.id)
});
a1.addEventListener('dragend', (e) => {
    e.target.className = 'a1';
});
a2.addEventListener('dragstart', (e) => {
    e.dataTransfer.setData('Text', e.target.id)
});
a2.addEventListener('dragend', (e) => {
    e.target.className = 'a2';
});
a3.addEventListener('dragstart', (e) => {
    e.dataTransfer.setData('Text', e.target.id)
});
a3.addEventListener('dragend', (e) => {
    e.target.className = 'a3';
});
a4.addEventListener('dragstart', (e) => {
    e.dataTransfer.setData('Text', e.target.id)
});
a4.addEventListener('dragend', (e) => {
    e.target.className = 'a4';
});
a5.addEventListener('dragstart', (e) => {
    e.dataTransfer.setData('Text', e.target.id)
});
a5.addEventListener('dragend', (e) => {
    e.target.className = 'a5';
});
a6.addEventListener('dragstart', (e) => {
    e.dataTransfer.setData('Text', e.target.id)
});
a6.addEventListener('dragend', (e) => {
    e.target.className = 'a6';
});


// text.forEach((txt) => {
//     txt.addEventListener('dragstart',(e) => {
//         e.dataTransfer.setData('Text',e.target.id)
//         e.target.className = 'display';
//     });
//     txt.addEventListener('dragend',(e) => {
//         e.target.className = 'txt';
//     });

// });

Boxes.forEach((box) => {
    box.addEventListener('dragover', (e) => {
        e.preventDefault();
    });
    box.addEventListener('drop', (e) => {
        let data = e.dataTransfer.getData("Text");
        e.target.appendChild(document.getElementById(data));
    });
});

//  Reload the page part 
function reload() {
    reload = location.reload();
};


//  value check part



// let a = jsonData.ans(3);


setTimeout(() => {
    let a = document.getElementById('bx1').innerText;
}, 0);


//let ansa1 = document.getElementById('trgt1').innerHTML;
let a = document.getElementById('bx1').innerText;

function submitbtn() {
    if(a == jsonData.ans[0]){
        alert('right');
    }else{
        alert('wrong');
    }
}

// function submitbtn() {

//     setTimeout(() => {
//         if (a == ansa1) {
//             alert('right');
//         } else {
//             alert('wrong');
//         }
//     }, 2000);
// }
