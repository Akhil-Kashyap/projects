let q=["Winter is coming...","What do we say to the Lord of Death: Not today","The things I do for love.","Valar morghulis!","Duty is the death of love!","The night is dark and full of terrors.","You know nothing, Jon Snow.","That’s what I do: I drink and I know things.","Chaos isn’t a pit. Chaos is a ladder."]


var pos = 0;
var correct = 0;
var quiz, quiz_status, question, choice, choices, chA, chB, chC, chD;
var ans=[];

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

var king=["Jon Snow","Bran Stark","Robert Baratheon","Stannis Baratheon","Rob Stark","Cercie Lanister","Sansa Stark","Daenerys Targaryen"];

var king_image= new Array();
king_image[0] = new Image();
king_image[0].src = 'king/jon.jpeg';
king_image[1] = new Image();
king_image[1].src = 'king/bran.jpeg';
king_image[2] = new Image();
king_image[2].src = 'king/robert.jpg';
king_image[3] = new Image();
king_image[3].src = 'king/stannis.jpeg';
king_image[4] = new Image();
king_image[4].src = 'king/rob.jpg';
king_image[5] = new Image();
king_image[5].src = 'king/cercie.jpg';
king_image[6] = new Image();
king_image[6].src = 'king/sansa.jpg';
king_image[7] = new Image();
king_image[7].src = 'king/dany.jpeg';




var hand=["Tywin Lannister","Tyrion Lannister","Ser Davos Seaworth","Ned Stark","Petyr Baelish","Ser Jorah Mormont","Qyburn","Lyanna Mormont",""];
var hand=["Tywin Lannister","Tyrion Lannister","Ser Davos Seaworth","Ned Stark","Petyr Baelish","Ser Jorah Mormont","Qyburn","Lyanna Mormont","Daario Naharis"];

var hand_image= new Array();
hand_image[0] = new Image();
hand_image[0].src = 'hand/tywin.jpg';
hand_image[1] = new Image();
hand_image[1].src = 'hand/tyrion.jpg';
hand_image[2] = new Image();
hand_image[2].src = 'hand/davos.jpg';
hand_image[3] = new Image();
hand_image[3].src = 'hand/ned.jpeg';
hand_image[4] = new Image();
hand_image[4].src = 'hand/petyr.jpg';
hand_image[5] = new Image();
hand_image[5].src = 'hand/jorah.jpeg';
hand_image[6] = new Image();
hand_image[6].src = 'hand/qyburn.jpg';
hand_image[7] = new Image();
hand_image[7].src = 'hand/lyanna.jpg';
hand_image[8] = new Image();
hand_image[8].src = 'hand/daario.jpg';

function display(x){
    if(x>=8)
        {
            var r=Math.floor(Math.random()*8);
            document.getElementById("msg").innerHTML="Woah!!! You could be the true king of Westeros!!! Your Character is "+king[r];
            
            var img = document.createElement("img");
            img.src = king_image[r].src;
            
            img.setAttribute("style","height:125px;width:190px;border-radius: 8px;border-style: solid;border-width: 2px;box-shadow: 0 2px 5px 0 rgba(224,224,224,0.19), 0 6px 20px 0 rgba(224,224,224,0.19);");
            var src = document.getElementById("image");
            src.appendChild(img);
        }
    else if(x>=5 && x<8)
        {
            var r=Math.floor(Math.random()*9);
            document.getElementById("msg").innerHTML="You could be the Hand of the King!!! Your Character is "+hand[r];
            
             var img = document.createElement("img");
            img.src = hand_image[r].src;
            
            img.setAttribute("style","height:125px;width:190px;border-radius: 8px;border-style: solid;border-width: 2px;box-shadow: 0 2px 5px 0 rgba(224,224,224,0.19), 0 6px 20px 0 rgba(224,224,224,0.19);");
            var src = document.getElementById("image");
            src.appendChild(img);
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
    
    if(ans[pos]=='A')
        {
           quiz.innerHTML += "<input type='radio' name='choices' value='A' checked>  "+chA+"<br>"; 
            quiz.innerHTML += "<input type='radio' name='choices' value='B'>  "+chB+"<br>";
            quiz.innerHTML += "<input type='radio' name='choices'   value='C'>  "+chC+"<br>";
            quiz.innerHTML += "<input type='radio' name='choices' value='D'>  "+chD+"<br><br>";
        }
    else if(ans[pos]=='B')
        {
            quiz.innerHTML += "<input type='radio' name='choices' value='A'>  "+chA+"<br>";
            quiz.innerHTML += "<input type='radio' name='choices' value='B' checked>  "+chB+"<br>";
            quiz.innerHTML += "<input type='radio' name='choices' value='C'>  "+chC+"<br>";
            quiz.innerHTML += "<input type='radio' name='choices' value='D'>  "+chD+"<br><br>";
        }
    else if(ans[pos]=='C')
        {
            quiz.innerHTML += "<input type='radio' name='choices' value='A'>  "+chA+"<br>";
            quiz.innerHTML += "<input type='radio' name='choices' value='B'>  "+chB+"<br>";
            quiz.innerHTML += "<input type='radio' name='choices' value='C' checked>  "+chC+"<br>";
            quiz.innerHTML += "<input type='radio' name='choices' value='D'>  "+chD+"<br><br>";
        }
    else if(ans[pos]=='D')
        {
            quiz.innerHTML += "<input type='radio' name='choices' value='A'>  "+chA+"<br>";
            quiz.innerHTML += "<input type='radio' name='choices' value='B'>  "+chB+"<br>";
            quiz.innerHTML += "<input type='radio' name='choices' value='C'>  "+chC+"<br>";
            quiz.innerHTML += "<input type='radio' name='choices' value='D' checked>  "+chD+"<br><br>";
        }
    
    
   else
   {
        quiz.innerHTML += "<input type='radio' name='choices' value='A'>  "+chA+"<br>";
        quiz.innerHTML += "<input type='radio' name='choices' value='B'>  "+chB+"<br>";
        quiz.innerHTML += "<input type='radio' name='choices' value='C'>  "+chC+"<br>";
        quiz.innerHTML += "<input type='radio' name='choices' value='D'>  "+chD+"<br><br>";
   }
        
    
    
    if(pos==0){
    quiz.innerHTML += "<button onclick='checkAnswer()'>Next </button>";
    }
    
    else if(pos==9)
    {
         quiz.innerHTML += "<button onclick='back()'>Prev </button> ";
          quiz.innerHTML += " <button onclick='score()'>Submit </button>";  
    }
    
    else{
        quiz.innerHTML += "<button onclick='back()'>Prev </button> ";
        quiz.innerHTML += " <button onclick='checkAnswer()'>Next </button>";
        
    }
    
    
    quiz.setAttribute("style","font-size:20px;font-family: 'Volkhov', serif;font-weight: bold");
    
}


function checkAnswer(){
  var flag=0;
  choices = document.getElementsByName("choices");
  for(var i=0; i<choices.length; i++){
    if(choices[i].checked){
      choice = choices[i].value;
        ans[pos]=choice;
        flag=1;
    }
  }
    if(flag==0)
        {
            alert("Please select an option!!!");
        }
    else{
  
            pos++;
            renderQuestion();
        }
  
}


function back(){
    for(var i=0; i<choices.length; i++){
    if(choices[i].checked)
        {
            choice = choices[i].value;
            ans[pos]=choice;
        }
    }
    
    pos--;
    renderQuestion();
}

function score(){
    for(var i=0; i<choices.length; i++){
    if(choices[i].checked)
        {
            choice = choices[i].value;
            ans[pos]=choice;
        }
    }
    
    for(var i=0;i<10;i++)
        {
            if(ans[i]==questions[i][5])
                correct++;
            console.log(ans[i]);
        }
    pos++;
    renderQuestion();
}