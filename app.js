// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import {getDatabase,ref,set,} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA2-Dk63g5hFrDWU1-5NPuQBVvlQ7M_bhE",
  authDomain: "quiz-app-327ec.firebaseapp.com",
  databaseURL: "https://quiz-app-327ec-default-rtdb.firebaseio.com",
  projectId: "quiz-app-327ec",
  storageBucket: "quiz-app-327ec.appspot.com",
  messagingSenderId: "559709199716",
  appId: "1:559709199716:web:1235f773ddf332687c2e71"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase();

var a = document.getElementById("quiz");
var b = document.getElementById("st");


a.className += " dis";
b.className += " ss";
var questions = [
  {
    ques: "2+2 = ?",
    corect: "4",
    opt: [
      "2",
      "3",
      "4",
      "5",
    ],
  },
  {
    ques: "Orange is = ",
    corect: "both a and b",
    opt: [
      "color",
      "fruit",
      "both a and b",
      "none",
    ],
  },
  {
    ques: "HTML stand for ?",
    corect: "HyperText Markup Language",
    opt: ["HyperText Markup Language", "HyperText oriented Language", "HyperText Markup ", "none"],
  },
  {
    ques: "What is full form of MAJU?",
    corect: "Muhammad Ali Jinnah University",
    opt: [
      "Muhammad Ali Jinnah University",
      "Muhammad Ahmed Jatai Univiersity",
      "Mujtaba Ali University",
      "All Option",
    ],
  },
  {
    ques: "What is AdamJee?",
    corect: "College and Institute",
    opt: [
      "Institute",
      "University",
      "College",
      "College and Institute",
    ],
  },
  {
    ques: "Java is short for JS",
    corect: "Java Script",
    opt: ["Java Structure", "Java Script", "Java Simple", "None"],
  },
  {
    ques: "How do you insert COMMENTS in Java code?",
    corect: "//",
    opt: ["//", "/", "\\", "all"],
  },
  {
    ques: "How do you create a variable with the numeric value 5?",
    corect: "var num = 5",
    opt: [
      "float  num = 5",
      "num = 5",
      "var num = 5",
      "long n= 5",
    ],
  },
  {
    ques: "Which operator is used to add together two values?",
    corect: "+",
    opt: ["+", "-", "*", "&"],
  },
  {
    ques: "C for ?",
    corect: "cat",
    opt: ["cat", "dog", "fish", "nones"],
  },
];

var quesNo = document.getElementById("questionNo");
var ansParent = document.getElementById("Answers");
var questionShow = document.getElementById("dummyquestion");
var score = document.getElementById("marks");
var percentage = document.getElementById("percentage");
var indexNum = 0;
var marks = 0;
function renderQuestion() {
  var currentQue = questions[indexNum];
  quesNo.innerHTML = "QUESTION:" + (indexNum + 1) + "/" + questions.length;
  questionShow.innerHTML = currentQue.ques;
  ansParent.innerHTML = " ";

  for (var i = 0; i < currentQue.opt.length; i++) {
    var obj = {
      question: currentQue.ques,
      CorrectAns: currentQue.corect,
      OptionSelected: currentQue.opt[i],
    };
    ansParent.innerHTML += `<div class="col-md-6 py-2  mx-auto">
        <button type="button" class="btn btn-success  w-75" onclick="checkQuestion('${currentQue.opt[i]}','${currentQue.corect}')">${currentQue.opt[i]}</button>
    </div>`;
  }
  obj.id = Math.random().toString().slice(2);
  let reference = ref(database, `Answers/QuestionNo${obj.id}/`);
  set(reference, obj);
  console.log(obj);
}

renderQuestion();
window.checkQuestion = function (a, b) {
  nextQuestion();

  if (a == b) {
    marks++;

    score.innerHTML = marks;
    percentage.innerHTML = (marks / 10) * 100 + "%";
  }
};

window.nextQuestion = function () {
  indexNum++;
  if (indexNum == questions.length) {
    var display1 = document.getElementById("main");
    display1.style.display += " none";
  }
  renderQuestion();
};


