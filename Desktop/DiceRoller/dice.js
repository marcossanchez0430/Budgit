$(document).ready(function() {
  var die1 = 1;
  var die2 = 2;
  var die3 = 3;
  var die4 = 4;
  var die5 = 5;
  var die6 = 6;
  var d1;
  var d2;
  var total;
  $("#dice3").click(function(){
    d1 = Math.floor(Math.random() * 6) + 1;
    d2 = Math.floor(Math.random() * 6) + 1;
    total = d1 + d2;
    alert('You rolled'  + " " + total + '.');
    result();
  });

function result() {
    if (die1 == d1) {
      $("#die1").show(1000);
      $("#die2").hide(1000);
      $("#die3").hide(1000);
      $("#die4").hide(1000);
      $("#die5").hide(1000);
      $("#die6").hide(1000);
    }
    if (die1 == d2) {
      $("#die10").show(1000);
      $("#die20").hide(1000);
      $("#die30").hide(1000);
      $("#die40").hide(1000);
      $("#die50").hide(1000);
      $("#die60").hide(1000);
    }
    if (die2 == d1) {
      $("#die2").show(1000);
      $("#die1").hide(1000);
      $("#die3").hide(1000);
      $("#die4").hide(1000);
      $("#die5").hide(1000);
      $("#die6").hide(1000);
    }
    if (die2 == d2) {
      $("#die20").show(1000);
      $("#die10").hide(1000);
      $("#die30").hide(1000);
      $("#die40").hide(1000);
      $("#die50").hide(1000);
      $("#die60").hide(1000);
    }
    if (die3 == d1) {
      $("#die3").show(1000);
      $("#die2").hide(1000);
      $("#die1").hide(1000);
      $("#die4").hide(1000);
      $("#die5").hide(1000);
      $("#die6").hide(1000);
    }
    if (die3 == d2) {
      $("#die30").show(1000);
      $("#die20").hide(1000);
      $("#die10").hide(1000);
      $("#die40").hide(1000);
      $("#die50").hide(1000);
      $("#die60").hide(1000);
    }
    if (die4 == d1) {
      $("#die4").show(1000);
      $("#die2").hide(1000);
      $("#die3").hide(1000);
      $("#die1").hide(1000);
      $("#die5").hide(1000);
      $("#die6").hide(1000);
    }
    if (die4 == d2) {
      $("#die40").show(1000);
      $("#die20").hide(1000);
      $("#die30").hide(1000);
      $("#die10").hide(1000);
      $("#die50").hide(1000);
      $("#die60").hide(1000);
    }
    if (die5 == d1) {
      $("#die5").show(1000);
      $("#die2").hide(1000);
      $("#die3").hide(1000);
      $("#die4").hide(1000);
      $("#die1").hide(1000);
      $("#die6").hide(1000);
    }
    if (die5 == d2) {
      $("#die50").show(1000);
      $("#die20").hide(1000);
      $("#die30").hide(1000);
      $("#die40").hide(1000);
      $("#die10").hide(1000);
      $("#die60").hide(1000);
    }
    if (die6 == d1) {
      $("#die6").show(1000);
      $("#die2").hide(1000);
      $("#die3").hide(1000);
      $("#die4").hide(1000);
      $("#die5").hide(1000);
      $("#die1").hide(1000);
    }
    if (die6 == d2) {
      $("#die60").show(1000);
      $("#die20").hide(1000);
      $("#die30").hide(1000);
      $("#die40").hide(1000);
      $("#die50").hide(1000);
      $("#die10").hide(1000);
  }

}
});
