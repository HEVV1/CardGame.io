let GameManager  = {

   setGameStart: function(mainClassType, mainSkill1) {

    this.resetPlayer(mainClassType , mainSkill1);
    this.setPreFight();

  },
//classType, health, mana, strength, agility, speed
  resetPlayer: function(mainClassType, mainSkill1) {
    switch (mainClassType) {
      case 'Saber':
         player = new Player(mainClassType, 10000, 400, 100, 70, 15, mainSkill1);
      break;
      case 'Archer':
         player = new Player(mainClassType, 10000, 1000, 80, 60, 10, mainSkill1);
      break;
      case 'Lancer':
         player = new Player(mainClassType, 10000, 20, 80, 100, 25);
      break;
      case 'Rider':
        player = new Player(mainClassType, 10000, 0, 60, 90, 20);
      break;
      case 'Assassin':
         player = new Player(mainClassType, 10000, 0, 60, 70, 10);
      break;
      case 'Berserker':
        player = new Player(mainClassType, 10000, 0, 200, 40, 10);
      break;
      case 'Caster':
         player = new Player(mainClassType, 10000, 1000, 15, 10, 3);
      break;
    }


      let getInterface = document.getElementById("Interface");
      getInterface.innerHTML = '<div class='+ player.mainClassType +'></div><div class="WTF"><div class="Box4"><h3 class="Header1">' + player.mainClassType + '</h3><p class="Text1" id="health-player">Health: ' + player.mainHealth + '</p><p id="mana-player" class="Text1">Mana: ' + player.mainMana + '</p><p class="Text1">Strength: ' + player.mainStrength + '</p><p class="Text1">Agility: ' + player.mainAgility + '</p><p class="Text1">Speed: ' + player.mainSpeed + '</p></div><div class="Skills"><a id="clicker" onclick=Skills.skillsFunctionContainer("'+ player.mainSkill1 +'") href="#"><div id="skillsBase" class='+ player.mainSkill1 +'><span class="AbilityText">' + player.mainSkill1 + '<span></div></a> <div>3</div> <div>3</div><div>4</div></div></div>';
       
  },
  setPreFight: function() {

    let getHeader = document.getElementById("Header");
    let getActions = document.getElementById("Actions");

    getHeader.innerHTML = '<p class="Text2">Task: Find an enemy!<p>';
    //Shows button to find an enemy
    getActions.style.display = "block";
    //Add to button function set:fight which is below
    getActions.innerHTML = '<a href="#" class="btn-prefight" onclick="GameManager.setFight()">Enemy</a>';

  },
  setFight: function() {
    let getHeader = document.getElementById("Header");
    let getActions = document.getElementById("Actions");
    let getEnemy = document.getElementById("Enemy");
    let getArena = document.getElementById("Arena");
    //Create enemy!
    let scatach  = new Enemy("Scatach", 10000, 100, 75, 110, 25);
    let atillia  = new Enemy("Atillia", 10000, 0, 120, 90, 20);
    let okito  = new Enemy("Okito", 10000, 0, 90, 80, 18);
    let mash  = new Enemy("Mash", 30000, 0, 300, 60, 15);
    let semiramida  = new Enemy("Semiramida", 10000, 1000, 50, 40, 10);
    let diarmaid  = new Enemy("Diarmaid", 10000, 0, 100, 80, 18);
    let gilgamesh  = new Enemy("Gilgamesh", 100000, 100, 100, 100, 1);
    let kirei  = new Enemy("Kirei", 10000, 100, 130, 80, 13);
    let shirou  = new Enemy("Shirou", 10000, 200, 90, 100, 20);
    let atalanta  = new Enemy("Atalanta", 10000, 0, 80, 60, 10);
    //Random
    let chooseRandomEnemy = Math.floor(Math.random() * Math.floor(9));

    switch (chooseRandomEnemy) {
      case 0:
      enemy = scatach;
      break;
      case 1:
      enemy = atillia;
      break;
      case 2:
      enemy = okito;
      break;
      case 3:
      enemy = mash;
      break;
      case 4:
      enemy = semiramida;
      break;
      case 5:
      enemy = diarmaid;
      break;
      case 6:
      enemy = gilgamesh;
      break;
      case 7:
      enemy = kirei;
      break;
      case 8:
      enemy = shirou;
      break;
      case 9:
      enemy = atalanta;
      break;
    }
    // Show arena
    getArena.style.display = "block";
    // Hide the header when fight is started
    getHeader.style.display = "none";
    // Set button Attack with function PlayerMoves.CalcAttack
    getActions.innerHTML = '<a id="attackClicker" href="#" class="btn-prefight1" onclick="PlayerMoves.calcAttack()"><span>A</span><span>T</span><span>T</span><span>A</span><span>C</span><span>K</span></a>';
    //After generating random enemy set all his proproties below on the screen
    getEnemy.innerHTML = '<div class='+ enemy.mainEnemyType +'></div><div class="Box5"><h3 class="Header1">' + enemy.mainEnemyType + '</h3><p class="Text1" id="health-enemy">Health: ' + enemy.mainHealth + '</p><p class="Text1">Mana: ' + enemy.mainMana + '</p><p class="Text1">Strength: ' + enemy.mainStrength + '</p><p class="Text1">Agility: ' + enemy.mainAgility + '</p><p class="Text1">Speed: ' + enemy.mainSpeed + '</p></div>';

    //Some style shit here, that fight scene looks more compactly
    $(function() {
        let arenaAndActionHolder = document.getElementById('ArenaAndAction');
        let getInterface=document.getElementById("Interface");
        let stuff = document.getElementsByClassName('FightSpace')[0];
        stuff.appendChild(getInterface);
        stuff.appendChild(getEnemy);
        stuff.appendChild(arenaAndActionHolder);
    });
  }
}
