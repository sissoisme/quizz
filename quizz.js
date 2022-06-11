confirm("Hello And Wellcome To My Quiz \n  \n You Got 2 Minuts To Solve 10 Question. Each Right Ansewer Will Grand You 10 Point. \n \n Get 80 Point Or More To Get 20% copun.\n If You Got 100 Point You Got  FREE MEAL Copun! \n \n You Only Have 3 Lives. Use Them Carfuly.")
let questionBank = [{
        name: 'Question Number 1',
        content: 'What does "Mardi Gras" mean in French?',
        answers: ['Welcome Spring Tuesday', 'Fat Tuesday', 'Jazz Tuesday', 'My Flower Tuesday'],
        rightAns: 'Fat Tuesday'
    },
    {
        name: 'Question Number 2',
        content: 'When was the earliest known carnival celebration?',
        answers: ['1821', '1404', '1294', '1615'],
        rightAns: '1294',
    },
    {
        name: 'Question Number 3',
        content: 'What city is famous for its Mardi Gras celebrations?',
        answers: ['New Orleans', 'Rio de Janeiro, Brazil', 'Binche, Belgium', 'All of the Above'],
        rightAns: 'All of the Above',
    },
    {
        name: 'Question Number 4',
        content: 'What food is associated with Shrove Tuesday?',
        answers: ['Waffles', 'French toast', 'Pancakes', 'Biscuits'],
        rightAns: 'Pancakes',
    },
    {
        name: 'Question Number 5',
        content: 'Mardi Gras marks the last day of what celebration?',
        answers: ['Carnival', 'Lent', 'Christmas', 'Easter'],
        rightAns: 'Carnival',
    },
    {
        name: 'Question Number 6',
        content: 'What is Ash Wednesday?',
        answers: ['First day of Carnival', 'Last day of Carnival', 'First day of Lent', 'Last day of Lent'],
        rightAns: 'First day of Lent',
    },
    {
        name: 'Question Number 7',
        content: 'Mardi Gras is on the day before Ash Wednesday, the first day of Lent. Pope Gregory XIII (1582) helped place Mardi Gras on the day before Lent so that all the debauchery would be finished when it came time to fast and pray.',
        answers: ['1699', '1711', '1840', '1905'],
        rightAns: '1699',
    },
    {
        name: 'Question Number 8',
        content: 'What year did Mardi Gras parades start?',
        answers: ['1788', '1838', '1900', '1922'],
        rightAns: '1838',
    },
    {
        name: 'Question Number 9',
        content: 'What member of royalty reenergized Mardi Gras in the late 19th century?',
        answers: ['Queen Alexandra of Denmark', 'Russian grand duke Alexis Romanoff',
            'Edward, Prince of Wales', 'Lord John Russell'
        ],
        rightAns: 'Russian grand duke Alexis Romanoff',
    },
    {
        name: 'Question Number 10',
        content: 'What is the purpose of Lent in the Christian faith?',
        answers: ['Taking a mini-vacation from work', 'Preparation of the believer before Easter',
            'Being good after the excesses of Mardi Gras', 'All of the Above'
        ],
        rightAns: 'Preparation of the believer before Easter',
    },
    {
        name: 'Question Number 10',
        content: 'What is the purpose of Lent in the Christian faith?',
        answers: ['Taking a mini-vacation from work', 'Preparation of the believer before Easter',
            'Being good after the excesses of Mardi Gras', 'All of the Above'
        ],
        rightAns: 'Preparation of the believer before Easter',
    },
]

let i = 0;
let uscore = 0;
let lives = 3;


function newQ() {

    let newQuestion = questionBank[i].name;
    let newContent = questionBank[i].content;
    let answer1 = questionBank[i].answers[0];
    let answer2 = questionBank[i].answers[1];
    let answer3 = questionBank[i].answers[2];
    let answer4 = questionBank[i].answers[3];
    document.getElementById('head').innerText = newQuestion;
    document.getElementById('content').innerText = newContent;
    document.getElementById('answer1').innerText = answer1;
    document.getElementById('answer2').innerText = answer2;
    document.getElementById('answer3').innerText = answer3;
    document.getElementById('answer4').innerText = answer4;
    document.getElementById('uScore').innerText = uscore;
    i++;
}
newQ();
document.getElementById('selector1').addEventListener('click', function () {
    let correctMsg = 'GRATE';
    let correctMsgh2 = 'You got 10 Points.';
    let wrongMsg = 'SORRY YOU GOT THE WRONG ANSWER ';
    let wrongMsgh2 = ' The Right One Is : ' + questionBank[i - 1].rightAns;
    if (questionBank[i - 1].answers[0] == questionBank[i - 1].rightAns) {
        document.getElementById('lvl' + i).style.backgroundColor = "green";
        uscore = uscore + 10;
        document.getElementById('popup').style.display = 'block';
        document.getElementById('popup').style.background = 'green';
        document.getElementById('popupText').innerText = correctMsg;
        document.getElementById('popupTexth2').innerText = correctMsgh2;
        document.getElementById('selector1').style.display = "none";
        document.getElementById('selector2').style.display = "none";
        document.getElementById('selector3').style.display = "none";
        document.getElementById('selector4').style.display = "none";
        
        newQ();
    } else {
        document.getElementById('lvl' + i).style.backgroundColor = "red";
        var live = document.getElementById('lives');
        live.removeChild(live.lastElementChild);
        document.getElementById('popup').style.display = 'block';
        document.getElementById('popup').style.background = 'red';
        document.getElementById('popupText').innerText = wrongMsg;
        document.getElementById('popupTexth2').innerText = wrongMsgh2;
        document.getElementById('selector1').style.display = "none";
        document.getElementById('selector2').style.display = "none";
        document.getElementById('selector3').style.display = "none";
        document.getElementById('selector4').style.display = "none";
        lives = lives - 1;
        newQ();
    }
    if (i == 11 || lives == 0) {
        let poorMsg = 'SORRY ALL YOUR LIVES IS OUT';
        let poorMsgh2 = 'You Got :' + uscore + " Points . Better Luck Next Time.";
        let goodrMsg = 'Nice Work';
        let goodrMsgh2 = 'You Got :' + uscore + " Points . And You Win A 20% Discount Cupon!.";
        let graterMsg = 'AMAZING !!! ';
        let graterMsgh2 = ' You Got :' + uscore + " POINTS . You Win The Big Prize !!.";
        if (uscore == 100) {
            document.getElementById('selector1').style.display = "none";
            document.getElementById('selector2').style.display = "none";
            document.getElementById('selector3').style.display = "none";
            document.getElementById('selector4').style.display = "none";
            document.getElementById('popupTexth2').innerText = graterMsgh2;
            document.getElementById('popupText').innerText = graterMsg;
            document.getElementById('popup').style.display = "block";
            document.getElementById('popup').style.backgroundColor = "gold";
            document.getElementById('returnBtn').style.display = "none";
            document.getElementById('sendEmail').style.display = "block";
            document.getElementById('sendBtn').addEventListener('click', function () {
                alert('Thank You. We Will Send The Copun To Your Email Soon.');
                                window.close();
                location.href = "index.html";
            })
        } else if (uscore >= 80 && uscore !== 100) {
            document.getElementById('selector1').style.display = "none";
            document.getElementById('selector2').style.display = "none";
            document.getElementById('selector3').style.display = "none";
            document.getElementById('selector4').style.display = "none";
            document.getElementById('popupText').innerText = goodrMsg;
            document.getElementById('popupTexth2').innerText = goodrMsgh2;
            document.getElementById('popup').style.display = "block";
            document.getElementById('popup').style.backgroundColor = "green";
            document.getElementById('returnBtn').style.display = "none";
            document.getElementById('sendEmail').style.display = "block";
            document.getElementById('sendBtn').addEventListener('click', function () {
                alert('Thank You. We Will Send The Copun To Your Email Soon.');
                                window.close();
                location.href = "index.html";
            })
        } else {
            document.getElementById('selector1').style.display = "none";
            document.getElementById('selector2').style.display = "none";
            document.getElementById('selector3').style.display = "none";
            document.getElementById('selector4').style.display = "none";
            document.getElementById('popupText').innerText = poorMsg;
            document.getElementById('popupTexth2').innerText = poorMsgh2;
            document.getElementById('popup').style.display = "block";
            document.getElementById('returnBtn').innerHTML = "colse window";
            document.getElementById('returnBtn').addEventListener('click', function () {
                                window.close();
                location.href = "index.html";
            })
        }
    }

})
document.getElementById('selector2').addEventListener('click', function () {
    let correctMsg = 'GRATE';
    let correctMsgh2 = 'You got 10 Points.';
    let wrongMsg = 'SORRY YOU GOT THE WRONG ANSWER ';
    let wrongMsgh2 = ' The Right One Is : ' + questionBank[i - 1].rightAns;
    if (questionBank[i - 1].answers[1] == questionBank[i - 1].rightAns) {
        document.getElementById('lvl' + i).style.backgroundColor = "green";
        uscore = uscore + 10;
        document.getElementById('popup').style.display = 'block';
        document.getElementById('popup').style.background = 'green';
        document.getElementById('popupText').innerText = correctMsg;
        document.getElementById('popupTexth2').innerText = correctMsgh2;
        document.getElementById('selector1').style.display = "none";
        document.getElementById('selector2').style.display = "none";
        document.getElementById('selector3').style.display = "none";
        document.getElementById('selector4').style.display = "none";
        newQ();
    } else {
        document.getElementById('lvl' + i).style.backgroundColor = "red";
        var live = document.getElementById('lives');
        live.removeChild(live.lastElementChild);
        document.getElementById('popup').style.display = 'block';
        document.getElementById('popup').style.background = 'red';
        document.getElementById('popupText').innerText = wrongMsg;
        document.getElementById('popupTexth2').innerText = wrongMsgh2;
        document.getElementById('selector1').style.display = "none";
        document.getElementById('selector2').style.display = "none";
        document.getElementById('selector3').style.display = "none";
        document.getElementById('selector4').style.display = "none";
        lives = lives - 1;
        newQ();
    }
    if (i == 11 || lives == 0) {
        let poorMsg = 'SORRY ALL YOUR LIVES IS OUT';
        let poorMsgh2 = 'You Got :' + uscore + " Points . Better Luck Next Time.";
        let goodrMsg = 'Nice Work';
        let goodrMsgh2 = 'You Got :' + uscore + " Points . And You Win A 20% Discount Cupon!.";
        let graterMsg = 'AMAZING !!! ';
        let graterMsgh2 = ' You Got :' + uscore + " POINTS . You Win The Big Prize !!.";
        if (uscore == 100) {
            document.getElementById('selector1').style.display = "none";
            document.getElementById('selector2').style.display = "none";
            document.getElementById('selector3').style.display = "none";
            document.getElementById('selector4').style.display = "none";
            document.getElementById('popupTexth2').innerText = graterMsgh2;
            document.getElementById('popupText').innerText = graterMsg;
            document.getElementById('popup').style.display = "block";
            document.getElementById('popup').style.backgroundColor = "gold";
            document.getElementById('returnBtn').style.display = "none";
            document.getElementById('sendEmail').style.display = "block";
            document.getElementById('sendBtn').addEventListener('click', function () {
                alert('Thank You. We Will Send The Copun To Your Email Soon.');
                window.close();
            })
        } else if (uscore >= 80 && uscore !== 100) {
            document.getElementById('selector1').style.display = "none";
            document.getElementById('selector2').style.display = "none";
            document.getElementById('selector3').style.display = "none";
            document.getElementById('selector4').style.display = "none";
            document.getElementById('popupText').innerText = goodrMsg;
            document.getElementById('popupTexth2').innerText = goodrMsgh2;
            document.getElementById('popup').style.display = "block";
            document.getElementById('popup').style.backgroundColor = "green";
            document.getElementById('returnBtn').style.display = "none";
            document.getElementById('sendEmail').style.display = "block";
            document.getElementById('sendBtn').addEventListener('click', function () {
                alert('Thank You. We Will Send The Copun To Your Email Soon.');
                               window.close();
                location.href = "index.html";
            })
        } else {
            document.getElementById('selector1').style.display = "none";
            document.getElementById('selector2').style.display = "none";
            document.getElementById('selector3').style.display = "none";
            document.getElementById('selector4').style.display = "none";
            document.getElementById('popupText').innerText = poorMsg;
            document.getElementById('popupTexth2').innerText = poorMsgh2;
            document.getElementById('popup').style.display = "block";
            document.getElementById('returnBtn').innerHTML = "colse window";
            document.getElementById('returnBtn').addEventListener('click', function () {
                               window.close();
                location.href = "index.html";
            })
        }
    }

})
document.getElementById('selector3').addEventListener('click', function () {
    let correctMsg = 'GRATE';
    let correctMsgh2 = 'You got 10 Points.';
    let wrongMsg = 'SORRY YOU GOT THE WRONG ANSWER ';
    let wrongMsgh2 = ' The Right One Is : ' + questionBank[i - 1].rightAns;
    if (questionBank[i - 1].answers[2] == questionBank[i - 1].rightAns) {
        document.getElementById('lvl' + i).style.backgroundColor = "green";
        uscore = uscore + 10;
        document.getElementById('popup').style.display = 'block';
        document.getElementById('popup').style.background = 'green';
        document.getElementById('popupText').innerText = correctMsg;
        document.getElementById('popupTexth2').innerText = correctMsgh2;
        document.getElementById('selector1').style.display = "none";
        document.getElementById('selector2').style.display = "none";
        document.getElementById('selector3').style.display = "none";
        document.getElementById('selector4').style.display = "none";
        newQ();
    } else {
        document.getElementById('lvl' + i).style.backgroundColor = "red";
        var live = document.getElementById('lives');
        live.removeChild(live.lastElementChild);
        document.getElementById('popup').style.display = 'block';
        document.getElementById('popup').style.background = 'red';
        document.getElementById('popupText').innerText = wrongMsg;
        document.getElementById('popupTexth2').innerText = wrongMsgh2;
        document.getElementById('selector1').style.display = "none";
        document.getElementById('selector2').style.display = "none";
        document.getElementById('selector3').style.display = "none";
        document.getElementById('selector4').style.display = "none";
        lives = lives - 1;
        newQ();
    }
    if (i == 11 || lives == 0) {
        let poorMsg = 'SORRY ALL YOUR LIVES IS OUT';
        let poorMsgh2 = 'You Got :' + uscore + " Points . Better Luck Next Time.";
        let goodrMsg = 'Nice Work';
        let goodrMsgh2 = 'You Got :' + uscore + " Points . And You Win A 20% Discount Cupon!.";
        let graterMsg = 'AMAZING !!! ';
        let graterMsgh2 = ' You Got :' + uscore + " POINTS . You Win The Big Prize !!.";
        if (uscore == 100) {
            document.getElementById('selector1').style.display = "none";
            document.getElementById('selector2').style.display = "none";
            document.getElementById('selector3').style.display = "none";
            document.getElementById('selector4').style.display = "none";
            document.getElementById('popupTexth2').innerText = graterMsgh2;
            document.getElementById('popupText').innerText = graterMsg;
            document.getElementById('popup').style.display = "block";
            document.getElementById('popup').style.backgroundColor = "gold";
            document.getElementById('returnBtn').style.display = "none";
            document.getElementById('sendEmail').style.display = "block";
            document.getElementById('sendBtn').addEventListener('click', function () {
                alert('Thank You. We Will Send The Copun To Your Email Soon.');
                                window.close();
                location.href = "index.html";
            })
        } else if (uscore >= 80 && uscore !== 100) {
            document.getElementById('selector1').style.display = "none";
            document.getElementById('selector2').style.display = "none";
            document.getElementById('selector3').style.display = "none";
            document.getElementById('selector4').style.display = "none";
            document.getElementById('popupText').innerText = goodrMsg;
            document.getElementById('popupTexth2').innerText = goodrMsgh2;
            document.getElementById('popup').style.display = "block";
            document.getElementById('popup').style.backgroundColor = "green";
            document.getElementById('returnBtn').style.display = "none";
            document.getElementById('sendEmail').style.display = "block";
            document.getElementById('sendBtn').addEventListener('click', function () {
                alert('Thank You. We Will Send The Copun To Your Email Soon.');
                               window.close();
                location.href = "index.html";
            })
        } else {
            document.getElementById('selector1').style.display = "none";
            document.getElementById('selector2').style.display = "none";
            document.getElementById('selector3').style.display = "none";
            document.getElementById('selector4').style.display = "none";
            document.getElementById('popupText').innerText = poorMsg;
            document.getElementById('popupTexth2').innerText = poorMsgh2;
            document.getElementById('popup').style.display = "block";
            document.getElementById('returnBtn').innerHTML = "colse window";
            document.getElementById('returnBtn').addEventListener('click', function () {
                                window.close();
                location.href = "index.html";
            })
        }
    }
})
document.getElementById('selector4').addEventListener('click', function () {
    let correctMsg = 'GRATE';
    let correctMsgh2 = 'You got 10 Points.';
    let wrongMsg = 'SORRY YOU GOT THE WRONG ANSWER ';
    let wrongMsgh2 = ' The Right One Is : ' + questionBank[i - 1].rightAns;
    if (questionBank[i - 1].answers[3] == questionBank[i - 1].rightAns) {
        document.getElementById('lvl' + i).style.backgroundColor = "green";
        uscore = uscore + 10;
        document.getElementById('popup').style.display = 'block';
        document.getElementById('popup').style.background = 'green';
        document.getElementById('popupText').innerText = correctMsg;
        document.getElementById('popupTexth2').innerText = correctMsgh2;
        document.getElementById('selector1').style.display = "none";
        document.getElementById('selector2').style.display = "none";
        document.getElementById('selector3').style.display = "none";
        document.getElementById('selector4').style.display = "none";
        newQ();
    } else {
        document.getElementById('lvl' + i).style.backgroundColor = "red";
        var live = document.getElementById('lives');
        live.removeChild(live.lastElementChild);
        document.getElementById('popup').style.display = 'block';
        document.getElementById('popup').style.background = 'red';
        document.getElementById('popupText').innerText = wrongMsg;
        document.getElementById('popupTexth2').innerText = wrongMsgh2;
        document.getElementById('selector1').style.display = "none";
        document.getElementById('selector2').style.display = "none";
        document.getElementById('selector3').style.display = "none";
        document.getElementById('selector4').style.display = "none";
        lives = lives - 1;
        newQ();
    }
    if (i == 11 || lives == 0) {
        let poorMsg = 'SORRY ALL YOUR LIVES IS OUT';
        let poorMsgh2 = 'You Got :' + uscore + " Points . Better Luck Next Time.";
        let goodrMsg = 'Nice Work';
        let goodrMsgh2 = 'You Got :' + uscore + " Points . And You Win A 20% Discount Cupon!.";
        let graterMsg = 'AMAZING !!! ';
        let graterMsgh2 = ' You Got :' + uscore + " POINTS . You Win The Big Prize !!.";
        if (uscore == 100) {
            document.getElementById('selector1').style.display = "none";
            document.getElementById('selector2').style.display = "none";
            document.getElementById('selector3').style.display = "none";
            document.getElementById('selector4').style.display = "none";
            document.getElementById('popupTexth2').innerText = graterMsgh2;
            document.getElementById('popupText').innerText = graterMsg;
            document.getElementById('popup').style.display = "block";
            document.getElementById('popup').style.backgroundColor = "gold";
            document.getElementById('returnBtn').style.display = "none";
            document.getElementById('sendEmail').style.display = "block";
            document.getElementById('sendBtn').addEventListener('click', function () {
                alert('Thank You. We Will Send The Copun To Your Email Soon.');
                                window.close();
                location.href = "index.html";
            })
        } else if (uscore >= 80 && uscore !== 100) {
            document.getElementById('selector1').style.display = "none";
            document.getElementById('selector2').style.display = "none";
            document.getElementById('selector3').style.display = "none";
            document.getElementById('selector4').style.display = "none";
            document.getElementById('popupText').innerText = goodrMsg;
            document.getElementById('popupTexth2').innerText = goodrMsgh2;
            document.getElementById('popup').style.display = "block";
            document.getElementById('popup').style.backgroundColor = "green";
            document.getElementById('returnBtn').style.display = "none";
            document.getElementById('sendEmail').style.display = "block";
            document.getElementById('sendBtn').addEventListener('click', function () {
                alert('Thank You. We Will Send The Copun To Your Email Soon.');
                               window.close();
                location.href = "index.html";
            })
        } else {
            document.getElementById('selector1').style.display = "none";
            document.getElementById('selector2').style.display = "none";
            document.getElementById('selector3').style.display = "none";
            document.getElementById('selector4').style.display = "none";
            document.getElementById('popupText').innerText = poorMsg;
            document.getElementById('popupTexth2').innerText = poorMsgh2;
            document.getElementById('popup').style.display = "block";
            document.getElementById('returnBtn').innerHTML = "colse window";
            document.getElementById('returnBtn').addEventListener('click', function () {
                               window.close();
                location.href = "index.html";
            })
        }
    }



})
document.getElementById('returnBtn').addEventListener('click', function () {
    document.getElementById('popup').style.display = 'none';
    document.getElementById('selector1').style.display = "block";
    document.getElementById('selector2').style.display = "block";
    document.getElementById('selector3').style.display = "block";
    document.getElementById('selector4').style.display = "block";

})
