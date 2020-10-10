var database;
var gameState, playerCount;
var game, player, form;
var allPlayers;
var runner1, runner2, runners;
var ground1, ground2, grounds;

function setup(){
  createCanvas(displayWidth - 30, displayHeight - 100);

  database = firebase.database();
  console.log(database);
  ground1 = createSprite(width/2, height/2, width, 20);
  ground2 = createSprite(width/2, height-50, width, 20);

  grounds = [ground1, ground2];

  game = new Game();
  game.getGameState();

  resetButton = createButton('reset');
}

function draw(){
  background('lightblue');

  if(playerCount == 2){
    gameState = 1;
    game.updateGameState(1);
  }

  if(gameState==1){
    game.play();
  }

  resetButton.mousePressed(function(){
    game.updateGameState(0);
    player.updatePlayerCount(0);

    database.ref('players').remove();
  })

  drawSprites();
}