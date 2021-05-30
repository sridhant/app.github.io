



const questions = {


    one: "If evolution is true then why pigs do not have wings ?",
    two: "What do you prefer - ordering in or eating out?",
    three: "What is more important to you - truth or happiness?",
    four: "Do you like pets?",
    five: "Do you like using props in the bedroom?",
    six: "Coffee over tea, or tea over coffee?",
    seven: "Do you prefer texts or calls?",
    eight: "Would you rather have no nose, or no arms?",
    nine: "What is your spirit animal?",
    ten: "Which would you prefer to have as your room-mate? A goat or a bird?",
  
  
    eleven: "If you were an artist, what would you paint on your first day?",
    twelve: "If you were a fruit, what fruit would you be?",
    thirteen: "What is the worst song ever?",
    fourteen: "What is the most annoying color?",
    fifteen: "What's the most useless word?",
    sixteen:"What is the coolest sound? You have ever heard in your entite Life",
    seventeen: "What would you rather have; an arm that regenerates every month, or legs that grows back in every month?",
    eighteen: "What body part would you like to remove?",
    nineteen: "What is the most useful invention of all time?",
    twenty: "What's the weirdest thing you've ever eaten?",
  
  
    twentyOne:"Which smells better, fresh cut grass or bread baking in the oven?",
    twentyTwo: "What would be your dream job? ",
    twentyThree:"What celebrity would you most like to switch lives with?",
    twentyFour: "Do you like pineapple on your pizza?",
    twentyFive: "Are chickens considered animals or birds?",
    twentySix: "What happens to the people born on Feb.. 29????? do they celebrate their birthday at every 4 years??",
    twentySeven: "Does looking at a picture of the sun hurt your eyes?",
    twentyEight: "Why doesn’t the Earth fall down?",
    twentyNine: "If batman parents are died, then how was he born?",
    thirty: "Is Disney World a people trap operated by a mouse?",
  
    
    30 : "What is better to learn british , english ?",
  };
  
  const answerStyle = {
    1 : "input",2 : "options",3 : "options",4 : "options",5 : "options",6 : "options",7 : "options",
    8 : "options",9 : "input",10 : "options",11 : "options",12 : "options",13 : "input",14 : "options",
    15 : "input",16 : "input",17 : "options",18 : "options",19 : "options",20 : "input",21 : "options",
    22 : "input",23 : "input",24 : "options",25 : "input",26 : "options",27 : "input",28 : "input",
    29 : "options",30 : "input",  
  }
  
  const yesNoOptions = [4,5,23,26,29]
  const customOptions = {
    2: ["Ordering","Eating Out"],
    3: ["Truth","Happyness"],
    6 : ["Coffee over tea" , "Tea over coffee"],
    7 : ["Text" , "Call"],
    8 : ["No nose" , "No arms"],
    10 : ["Goat" , "Bird"],
    11 : ["Your own face" , "i will quit my passion"],
    12 : ["Banana" , "Coconut"],
    14 : ["Pink" , "Pink only"],
    17 : ["arms" , "legs"],
    18 : ["Kidneys for Iphone" , "Teeth for becoming old"],
    19 : ["Humans" , "AC"],
    21 : ["Grass" , "Bread"],
    24 : ["Animal" , "Birds"],
    30 : ["British" , "English"],
  }
  
  //game
  
  //DOM
  let row = document.querySelector('.btnRowOne')
  let colOne = document.querySelector('#colOne')
  let colTwo = document.querySelector('#colTwo')
  let btnTwo = document.querySelector('#optTwo')
  let btnTwoSpan = document.querySelector('#optTwoSpan')
  let question = document.querySelector('#question')
  let answerInput = document.querySelector('#answerInput')
  
  //game global
  let gameStart = false
  let questionCounter = 0
  const redirect = false
  
  //now game start
  gameStart = true

  if (gameStart == true){
    let QUE = questions
    question.innerHTML = QUE.one
          if(answerInput.length < 3 ){
               alert(` it will be better if u write at least 4 letters insted of ${answerInput.length}`)
          }
  }






/* 
                         <button id="optOne" class="btn btn-primary"> <b> 
                            <span id="optOneSpan"> Option 1 </span>
                         </b> </button>
*/

/* 
    <input class="form-control w-100" id="answerInput"  placeholder="Enter Your Answer">
*/