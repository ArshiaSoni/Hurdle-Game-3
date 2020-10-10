class Game{
  constructor(){

  }

  getGameState(){
    database.ref('gameState').on('value', function(data){
      gameState = data.val();
      console.log(gameState);
      if(gameState == 0){
        player = new Player();
        player.getPlayerCount();

        form = new Form();
        form.display();
      }
    })

    runner1 = createSprite(50, 100);
    runner2 = createSprite(50, 300);
    runners= [runner1, runner2];
  }

  updateGameState(state){
    database.ref('/').update({gameState: state})
  }
  
  play(){
    form.hide();
    Player.getPlayerInfo();

    var index = 0;
    var x= 50;
    var y = 100;
    var ySpacing = 200; 
    for(var plr in allPlayers){
       runners[index].collide(grounds[index]);
       runners[index].velocityY += 2;
       runners[index].velocityX += 0.1;
      //  runners[index].x = x
      //  runners[index].y = y
      
      
       player.xPos = runners[index].x
       player.yPos = runners[index].y
       player.updatePlayerInfo();

       if(index + 1 == player.index){
         runners[index].shapeColor = 'red';
         if(keyWentDown('space')){
          runners[index].velocityY -= 10
        }
        //  runners[index].y += 10
       }
       index++
      //  y = y + 200
       text(allPlayers[plr].name + " : " + allPlayers[plr].xPos + " , " + allPlayers[plr].yPos,
        200, ySpacing);
       ySpacing += 50 
    }
    
    // if(keyWentDown('space')){
    //   player.yPos -= 100;  
    // }
    // player.yPos += 0.5
    // player.updatePlayerInfo();
  }
}