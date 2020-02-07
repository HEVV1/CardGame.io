let PlayerMoves ={
  calcAttack: function() {
    //Who attacks first?

    var getPlayerSpeed = player.mainSpeed;
    var getEnemySpeed = enemy.mainSpeed;
    //Set arena to variable
    let getArena = document.getElementById("Arena");
    let getBox2 = document.getElementById("Box2");
    let getBox3 = document.getElementById("Box3");
    // Set Losing and Winning to variable
    let getLosingSpan = document.getElementById('Losing');
    let getWinningSpan = document.getElementById('Winning');
    // Set Attack button to variable
    let getActions = document.getElementById("Actions");
    // Set Enemy and Player Interrfaces to variable
    let getEnemy = document.getElementById("Enemy");
    let getInterface = document.getElementById("Interface");
    let stuff = document.getElementsByClassName('FightSpace')[0];

      //Player attacks
    let playerAttack = function() {
      // Our main damage consider player strenth, agility and mana;
        let calcBaseDamage;
        //Scatter of damage
        let offsetDamage;
        //Final damage
        let calcOtputDamage;
        //Number of hits
        let numberOfHits;

        //Calculating the base the damage including all player characteristics
        calcBaseDamage = player.mainStrength + player.mainAgility + player.mainMana / 100;
        //Calculating scatter of damage
        offsetDamage = Math.floor(Math.random() * Math.floor(10));
        //Sum main damage and scatter offset in one final damage
        calcOtputDamage = calcBaseDamage + offsetDamage;
        //Using agility calculate the
        //       [Round number](returning the less equal number)       (diapozon)       (Start)
        numberOfHits = Math.round(Math.floor(Math.random() * Math.floor(4)) + enemy.mainAgility / 20);

        if (numberOfHits <= 0)
        {
          numberOfHits = Math.floor(Math.random() * Math.floor(2) + 1);
        }
        //Making our attack value as array with total damage and number of it to hit
        let attackValues = [calcOtputDamage, numberOfHits];
        //Returning that array to our function
        return attackValues;
    }

        //Enemy attacks
    let enemyAttack = function() {
        let calcBaseDamage;
        let offsetDamage;
        let calcOtputDamage;
        let numberOfHits;
        let roundedNumbers;

        calcBaseDamage = enemy.mainStrength + enemy.mainAgility + enemy.mainMana / 100;
        offsetDamage =   Math.floor(Math.random() * Math.floor(10));
        calcOtputDamage = calcBaseDamage + offsetDamage;
        numberOfHits = Math.round(Math.floor(Math.random() * Math.floor(4)) + enemy.mainAgility / 20);


        if (numberOfHits <= 0)
        {
         numberOfHits = Math.floor(Math.random() * Math.floor(2) + 1);
        }

        let attackValues = [calcOtputDamage, numberOfHits];
        return attackValues;
    }


    //Get player/enemy health to change later!
    let getPlayerHealth = document.getElementById('health-player');
    let getEnemyHealth = document.getElementById('health-enemy');


    //Initiate attack!
if (getPlayerSpeed >= getEnemySpeed)
  {
            //If the player’s speed is higher than the opponent’s then execute playerAttack() function
            let playerAttackValues = playerAttack();
            //Taking the first value of the returned array of our function whis is damage and multiple it on the second array value which is number of hits
            let totalDamage = playerAttackValues[0] * playerAttackValues[1];
            enemy.mainHealth -= totalDamage;

            //Adding values in the arena player damage and hits
            getBox2.innerHTML = '<span class="Text5">Combat</span><div class="Box2"><span class="Text3">' + player.mainClassType + ' Hit: <span class="Dmg1">' + playerAttackValues[0] + '</span> Dmg</span><span class="Text3"><span class="Times1">' + playerAttackValues[1] + '</span> Times</span></div>';

            if (enemy.mainHealth <= 0)
            {
                getWinningSpan.style.display = 'block';
                getActions.style.display = 'none';
                getArena.style.display = 'none';
                getEnemy.style.display = 'none'
                getPlayerHealth.innerHTML = 'Health: ' + player.mainHealth;
                getEnemyHealth.innerHTML = 'Health: 0';
                stuff.removeAttribute("class");
                setTimeout(function()
                {
                  location.reload(true);
                }, 2000);

            }
            else
            {
                //Changing enemy hp is it's ain't zero
                getEnemyHealth.innerHTML = 'Health: ' + enemy.mainHealth;

                // Enemy Attacks if his health ain't 0
                let enemyAttackValues = enemyAttack();
                let totalDamage = enemyAttackValues[0] * enemyAttackValues[1];
                player.mainHealth = player.mainHealth - totalDamage;

                getBox3.innerHTML = '<div class="Box2"><span class="Text4">' + enemy.mainEnemyType + ' Hit: <span class="Dmg2">' + enemyAttackValues[0] + '</span> Dmg</span><span class="Text4"><span class="Times2">' + enemyAttackValues[1] + '</span> Times</span></div>';

            if (player.mainHealth <= 0)
            {
                getLosingSpan.style.display = 'block';
                getActions.style.display = 'none';
                getArena.style.display = 'none';
                getInterface.style.display = 'none';
                getPlayerHealth.innerHTML = 'Health: 0';
                getEnemyHealth.innerHTML = 'Health: ' + enemy.mainHealth;
                stuff.removeAttribute("class");

                setTimeout(function()
                {
                  location.reload(true);
                }, 2000);
            }
          else
          {
                getPlayerHealth.innerHTML = 'Health: ' + player.mainHealth;
          }
      }

}


//If enemy speed is higer than player
else{
        let enemyAttackValues = enemyAttack();
        let totalDamage = enemyAttackValues[0] * enemyAttackValues[1];

        player.mainHealth = player.mainHealth - totalDamage;

        getBox3.innerHTML = '<div class="Box2"><span class="Text4">' + enemy.mainEnemyType + ' Hit: <span class="Dmg2">' + enemyAttackValues[0] + '</span> Dmg</span><span class="Text4"><span class="Times2">' + enemyAttackValues[1] + '</span> Times</span></div>';

      if (player.mainHealth <= 0)
      {
        getLosingSpan.style.display = 'block';
        getActions.style.display = 'none';
        getArena.style.display = 'none';
        getInterface.style.display = 'none';
        getPlayerHealth.innerHTML = 'Health: 0';
        getEnemyHealth.innerHTML = 'Health: ' + enemy.mainHealth;
        stuff.removeAttribute("class");

        setTimeout("location.reload(true);", 2000);
      }

      else{
        getPlayerHealth.innerHTML = 'Health: ' + player.mainHealth;
        let playerAttackValues = playerAttack();

        let totalDamage = playerAttackValues[0] * playerAttackValues[1];
        enemy.mainHealth = enemy.mainHealth - totalDamage;

        getBox2.innerHTML = '<span class="Text5">Combat</span><div class="Box2"><span class="Text3">' + player.mainClassType + ' Hit: <span class="Dmg1">' + playerAttackValues[0] + '</span> Dmg</span><span class="Text3"><span class="Times1">' + playerAttackValues[1] + '</span> Times</span></div>';

        if (enemy.mainHealth <= 0) {

        getWinningSpan.style.display = 'block';
        getActions.style.display = 'none';
        getArena.style.display = 'none';
        getEnemy.style.display = 'none'
        getPlayerHealth.innerHTML = 'Health: ' + player.mainHealth;
        getEnemyHealth.innerHTML = 'Health: 0';
        stuff.removeAttribute("class");
        setTimeout("location.reload(true);", 2000);
    }
    else{

        getEnemyHealth.innerHTML = 'Health: ' + enemy.mainHealth;

    }

  }

}

//calcAttack
  }
//calcAttack
// PlayerMoves
}
// PlayerMoves
