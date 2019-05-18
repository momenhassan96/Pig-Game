

    var value, curentfirst, curentsecond, currentScore_0, currentScore_1, changeDices, gamePlaying, dices,firstPlayer,secondPlayer;
    var getDices=document.getElementById('dices');

    init();
    function rollDice(){
        if(gamePlaying){
            changeDices=Math.ceil(Math.random()*6);
            dices="images/dice-"+changeDices+".png";
            getDices.style.display="block";
            if(changeDices !== 1 && player_0.classList.contains('active')){
                curentfirst+=changeDices;
                current_0.innerHTML=curentfirst;
            }else if(changeDices !==1 && player_1.classList.contains('active')){
                curentsecond+=changeDices;
                current_1.innerHTML=curentsecond;
            }else{
                curentfirst=0,
                curentsecond=0,
                current_0.innerHTML=curentfirst;
                current_1.innerHTML=curentsecond;
                getDices.style.display="none";
                if(player_0.classList.contains('active')){
                    player_0.classList.remove('active');
                    player_1.classList.add('active');
                }else{
                    player_0.classList.add('active');
                    player_1.classList.remove('active');
                }
            }
        }
        getDices.src=dices;
    }
    document.querySelector('.hold').addEventListener('click',function(){
        if(player_0.classList.contains('active')){
            player_0.classList.remove('active');
            player_1.classList.add('active');
            getDices.style.display="none";
            currentScore_0+=curentfirst;
            score_0.innerHTML=currentScore_0;
            current_0.innerHTML=0;
            curentsecond=0;
        }else{
            player_0.classList.add('active');
            player_1.classList.remove('active');
            getDices.style.display="none";
            currentScore_1+=curentsecond;
            curentfirst=0;
            score_1.innerHTML=currentScore_1;
            current_1.innerHTML=0;
        }
        if(currentScore_0>=10){
            firstPlayer.innerHTML='Winner !!';
            player_0.classList.add('active');
            player_1.classList.remove('active');
            gamePlaying=false;
        }else if(currentScore_1>=10){
            secondPlayer.innerHTML="Winner !!";
            player_0.classList.remove('active');
            player_1.classList.add('active');
            gamePlaying=false;
        }
        
    })
    function newGame(){
    init();
    firstPlayer.innerHTML='Player 1';
    secondPlayer.innerHTML='Player 2';
    player_0.classList.add('active');
    player_1.classList.remove('active');
}

function init(){
    changeDices="";
    gamePlaying=true;
    dices="";
    var player_0=document.getElementById('player_0');
    var player_1=document.getElementById('player_1');
    var current_0=document.getElementById('current_0').innerHTML=0;
    var current_1=document.getElementById('current_1').innerHTML=0;
    var score_0=document.getElementById('score_0').innerHTML=0;
    var score_1=document.getElementById('score_1').innerHTML=0;
    firstPlayer=document.getElementById('name_0');
    secondPlayer=document.getElementById('name_1');
    value=0;
    curentfirst=0;
    curentsecond=0;
    currentScore_0=0;
    currentScore_1=0;
    player_0.classList.add('active');
    getDices.style.display="none";
}