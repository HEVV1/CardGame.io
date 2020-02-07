function AbilitiesProporties(dmg, manaCost)
{
  this.Dmg = dmg;
  this.ManaCost = manaCost;
}

let Skills = {

skillsFunctionContainer: function(mainSkill1) {

this.abilityProperties1(mainSkill1);
this.skillsCalculation(mainSkill1);

  },
  abilityProperties1: function(mainSkill1) {
    switch (mainSkill1) {
      case "Excalibur":
      help = new AbilitiesProporties(5000, 100);
      // alert(help.Dmg + " " + help.ManaCost);
      break;
      case "UBW":
      help = new AbilitiesProporties(1000, 500);
        // alert(help.Dmg + " " + help.ManaCost);
      break;
      default:
    }

  },

  skillsCalculation: function(mainSkill1) {
     let playerMana = document.getElementById('mana-player');
   if (player.mainMana >= help.ManaCost) {
      player.mainMana -= help.ManaCost;
      playerMana.innerHTML = 'Mana ' + player.mainMana;
      enemy.mainHealth -= help.Dmg;
      document.getElementsByClassName(mainSkill1)[0].style.opacity = '1';

    }
    else {
      document.getElementsByClassName(mainSkill1)[0].style.opacity = '0.3';
    }

  }

// SkillsProporties
}
// SkillsProporties


// Fucking plan
//1)Add images and finis the fist skill basic logic
//2)Add strength, agility, inteligent stats and recalculate damage depening of this stats
//3)Add Armor
//4)Make other skills
