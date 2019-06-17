let q=["Winter is coming...","What do we say to the Lord of Death: Not today","The things I do for love.","Valar morghulis!","Duty is the death of love!","The night is dark and full of terrors.","You know nothing, Jon Snow.","That’s what I do: I drink and I know things.","Chaos isn’t a pit. Chaos is a ladder."]


var pos = 0;
var correct = 0;
var quiz, quiz_status, question, choice, choices, chA, chB, chC, chD;


var questions=[
    ["Who was responsible for the creation of Night King?","The Lord of Light","The Children of the Forest","The First Men","The Drowned God","B"],
    ["What is the Iron Bank's representative, played by Mark Gatiss, called?","Quorin Halfhand","Xaro Xhoan Daxon","Howard from the Halifax","Tycho Nestoris","D"],
    ["Dany's dragons were called Drogon, Viserion and __?","Dougal","Vhagar","Rhaegal","Balerion","C"],
    ["Who said: I don't plan on knitting by the fire while men fight for me?","Lyanna Mormont","Sansa Stark","Ser Brienne of Tarth","Olenna Tyrell","A"],
    ["What is the name of Dragon-Slaying Crossbow?","Millipede","Mantis","Scorpion","Dragon-slayer","C"],
    ["Where is the House of Black and White?","Qarth","Braavos","Meereen","Westeros","B"],
    ["What is the name of Ser Brienne of Tarth's Sword?","Widows Wail","Ice","Oathkeeper","Longclaw","C"],
    ["Who was Ned Stark's predecessor as Robert Baratheon's Hand?","Jaime Lannister","Ser Jorah Mormont","Tywin Lannister","Jon Arryn","D"],
    ["Whose last words were: Give me something for the pain and let me die.?","Robert Baratheon","Hodor","Stannis Baratheon","Maester Aemon","A"],
    ["What is the go-to anaesthetic for maesters across Westeros called?","Shade of the Evening","Scourleaf","Having another wine","Milk of the poppy","D"]
];

var king=["Jon Snow","Bran Stark","Robert Baratheon","Stannis Baratheon","Rob Stark","Cercie Lanister","Sansa Stark","Joffrey Baratheon"];

var hand=["Tywin Lannister","Tyrion Lannister","Ser Davos Seaworth","Ned Stark","Jon Arryn","Ser Barristan Selmy","Qyburn","Mace Tyrell"]


function display(x){
    if(x>=8)
        {
            var r=Math.floor(Math.random()*8);
            document.getElementById("msg").innerHTML="Woah!!! You could be the true king of Westeros!!! Your Character is "+king[r];
        }
    else if(x>=5 && x<8)
        {
            var r=Math.floor(Math.random()*8);
            document.getElementById("msg").innerHTML="You could be the Hand of the King!!! Your Character is "+hand[r];
        }
    else
        {
            document.getElementById("msg").innerHTML="You are just a common folk of westeros!!!";
        }
}

function quoteschange(){
    let n=Math.floor(Math.random()*9);
    document.getElementById("quote").innerHTML=q[n];
    
}

setInterval(quoteschange,5000);

function get(x){
  return document.getElementById(x);
}

function renderQuestion(){
  quiz = get("quiz");
  if(pos >= questions.length){
    quiz.innerHTML = "<h2>You got "+correct+" of "+questions.length+" questions correct....</h2>";
    get("quiz_status").innerHTML = "Test completed";
      
    display(correct);
      
    pos = 0;
    correct = 0;
      
    return false;
  }
    
    get("quiz_status").innerHTML = "Question "+(pos+1)+" of "+questions.length;
    question = questions[pos][0];
    chA = questions[pos][1];
    chB = questions[pos][2];
    chC = questions[pos][3];
    chD = questions[pos][4];
    
    quiz.innerHTML = "<h4>"+question+"</h4>";
    
    quiz.innerHTML += "<input type='radio' name='choices' value='A'>  "+chA+"<br>";
    quiz.innerHTML += "<input type='radio' name='choices' value='B'>  "+chB+"<br>";
    quiz.innerHTML += "<input type='radio' name='choices' value='C'>  "+chC+"<br>";
    quiz.innerHTML += "<input type='radio' name='choices' value='D'>  "+chD+"<br><br>";
    
    quiz.innerHTML += "<button onclick='checkAnswer()'>Submit </button>";
    
    quiz.setAttribute("style","font-size:20px;font-family: 'Volkhov', serif;font-weight: bold");
    
}


function checkAnswer(){
  
  choices = document.getElementsByName("choices");
  for(var i=0; i<choices.length; i++){
    if(choices[i].checked){
      choice = choices[i].value;
    }
  }
  
  if(choice == questions[pos][5]){

    correct++;
  }
  
  pos++;
  
  renderQuestion();
}