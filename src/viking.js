//------------------------------------------------------
// SOLDIER
//------------------------------------------------------



function Soldier (healthArg, strengthArg) {
  this.health = healthArg;
  this.strength = strengthArg;
  // this.attack =  function () {
  //   return this.strength;
  // }
}

Soldier.prototype.attack = function () {
  return this.strength;

};

Soldier.prototype.receiveDamage = function (damage) {
  this.health -= damage;
};


//------------------------------------------------------
// VIKING
//------------------------------------------------------
function Viking (nameArg, healthArg, strengthArg) {
  Soldier.call(this, healthArg, strengthArg);
  this.name = nameArg;
}

Viking.prototype = Object.create(Soldier.prototype);
Viking.prototype.constructor = Viking;

Viking.prototype.receiveDamage = function (damage) {
  this.health -= damage;

  if (this.health > 0) {
    return this.name + " has received " + damage + " points of damage";
  }
  else {
    return this.name + " has died in act of combat";
  }
};

Viking.prototype.battleCry = function () {
  return "Odin Owns You All!";
};
var vikingOne =(100,150);


var vikingOne = (100,150);


var vikingThree=(100,150);

var vikingFour=(100,150);

var vikingFive =(100,150);

// console.log(vikingFive);

//------------------------------------------------------
// SAXON
//------------------------------------------------------
function Saxon (healthArg, strengthArg) {
  Soldier.call(this, healthArg, strengthArg);
}

Saxon.prototype = Object.create(Soldier.prototype);
Saxon.prototype.constructor = Saxon;

Saxon.prototype.receiveDamage = function (damage) {
  this.health -= damage;

  if (this.health > 0) {
    return "A Saxon has received " + damage + " points of damage";
  }
  else {
    return "A Saxon has died in combat";
  }
};


//------------------------------------------------------
// WAR
//------------------------------------------------------
function War () {
  this.vikingArmy = [];
  this.saxonArmy = [];
  // this.addViking = function (viking) {
  //   this.vikingArmy.push(viking);
  // };
}

War.prototype.addViking = function (viking) {
  this.vikingArmy.push(viking);
};

War.prototype.addSaxon = function (saxon) {
  this.saxonArmy.push(saxon);
};

War.prototype.saxonAttack = function () {
  var vikingIndex = Math.floor(Math.random() * this.vikingArmy.length);
  var saxonIndex = Math.floor(Math.random() * this.saxonArmy.length);
  var theViking = this.vikingArmy[vikingIndex];
  var theSaxon = this.saxonArmy[saxonIndex];

  var result = theViking.receiveDamage(theSaxon.attack());

  if (theViking.health <= 0) {
    this.vikingArmy.splice(vikingIndex, 1);
  }

  return result;
};

War.prototype.vikingAttack = function () {
  var vikingIndex = Math.floor(Math.random() * this.vikingArmy.length);
  var saxonIndex = Math.floor(Math.random() * this.saxonArmy.length);
  var theViking = this.vikingArmy[vikingIndex];
  var theSaxon = this.saxonArmy[saxonIndex];

  var result = theSaxon.receiveDamage(theViking.attack());

  if (theSaxon.health <= 0) {
    this.saxonArmy.splice(saxonIndex, 1);
  }

  return result;
};


War.prototype.showStatus = function () {
  if (this.saxonArmy.length === 0) {
    return 'Vikings have won the war of the century!';
  }
  else if (this.vikingArmy.length === 0) {
    return 'Saxons have fought for their lives and survive another day...';
  }
  else {
    return 'Vikings and Saxons are still in the thick of battle.';
  }
};
function attack (){

}
var warFirst = new War ();


var vikingOne = new Viking ("luis",200 ,10);

var vikingTwo = new Viking ("carlo",75 ,100);

var vikingThree = new Viking ("pedro",75 ,100);

var vikingFour = new Viking ("fernando",75 ,100);

var VikingFive= new Viking ("gonzalo",75 ,100);

warFirst.addViking (vikingOne);
warFirst.addViking (vikingTwo);
warFirst.addViking (vikingThree);
warFirst.addViking (vikingFour);
warFirst.addViking (vikingFive);


 var saxonOne = new Saxon (75,100);
 var saxonTwo = new Saxon (75 ,100);
 var saxonThree = new Saxon (75 ,100);
 var saxonFour = new Saxon (75 ,100);
 var saxonFive = new Saxon (75 ,100);
console.log (saxonOne);


warFirst.addSaxon (saxonOne);
warFirst.addSaxon (saxonTwo);
warFirst.addSaxon (saxonThree);
warFirst.addSaxon (saxonFour);
warFirst.addSaxon (saxonFive);


$(document).ready(function() {
var refresh = function(){
 $(".viking-box.1 .health").text("health" + vikingOne.health);
 $(".viking-box.1 .strength").text("strength" + vikingOne.strength);
 $(".viking-box.2 .health").text("health" + vikingTwo.health);
 $(".viking-box.2 .strength").text("strength"+ vikingTwo.strength);
 $(".viking-box.3 .health").text("health"+ vikingThree.health);
 $(".viking-box.3 .strength").text("strength" + vikingThree.strength);
 $(".viking-box.4 .health").text("health"+ vikingFour.health);
 $(".viking-box.4 .strength").text("strength" + vikingFour.strength);
 $(".viking-box.5 .health").text("health" + vikingFive.health);
 $(".viking-box.5 .strength").text("strength"+ vikingFive.strength);

 $(".saxon-box.1 .health").text("health" + saxonOne.health);
 $(".saxon-box.1 .strength").text("strength" + saxonOne.strength);
 $(".saxon-box.2 .health").text("health" + saxonTwo.health);
 $(".saxon-box.2 .strength").text("strength"+ saxonTwo.strength);
 $(".saxon-box.3 .health").text("health"+ saxonThree.health);
 $(".saxon-box.3 .strength").text("strength" + saxonThree.strength);
 $(".saxon-box.4 .health").text("health"+ saxonFour.health);
 $(".saxon-box.4 .strength").text("strength" + saxonFour.strength);
 $(".saxon-box.5 .health").text("health" + saxonFive.health);
 $(".saxon-box.5 .strength").text("strength"+ saxonFive.strength);
};

$(".viking-attack").on("click",function(){
  warFirst.vikingAttack();
  refresh();
});
$(".saxon-attack").on("click", function(){
  warFirst.saxonAttack();
  refresh();
});





});
