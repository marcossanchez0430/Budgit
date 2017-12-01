var x = function(element) {
    if (element.charAt(0) === "#") {
      return document.querySelector(element);
    }

    return document.querySelectorAll(element);
  };

  var viewer = x("#display");
  var equals = x("#answer");
  var number = x(".number");
  var operation = x(".operation");
  var negative = x("#negative");
  var period = x("#period");
  var current = "";
  var old = "";
  var result;
  var operator;

  var set = function() {
    if (result) {
      current = this.getAttribute("value");
      result = "";
      }
    else {
      current = current + this.getAttribute("value");
    }
    viewer.innerHTML = current;
  }

var setAgain = function() {
    old = current;
    current = "";
    operator = this.getAttribute("valuex");

    equals.setAttribute("valuey", "");
}

var show = function() {
  old = parseFloat(old);
    current = parseFloat(current);

    switch (operator) {
      case "plus":
        result = old + current;
        old += current;
        break;

      case "minus":
        result = old - current;
        old -= current;
        break;

      case "times":
        result = old * current;
        old *= current;
        break;

      case "divide":
        result = old / current;
        old /= current;
        break;

       case "%":
        result = old % current;
        break;

}
    viewer.innerHTML = result;
    equals.setAttribute("valuey", result);

}

  var clear = function() {
    old = "";
    current = "";
    viewer.innerHTML = "0";
    equals.setAttribute("valuey", "");
  }

for (var i = 0, j = number.length; i < j; i++) {
    number[i].onclick = set;
  }

for (var i = 0, j = operation.length; i < j; i++) {
    operation[i].onclick = setAgain;
  }
  negative.onclick = function() {
    if (result) {
      xy = this.getAttribute("value") + result;
      current = xy;
      viewer.innerHTML = current;
    }
    else {
    current = this.getAttribute("value") + current;
    viewer.innerHTML = current;
    }
  }
  period.onclick = function() {
    if (result) {
      current = result;
      result = "";
      current += this.getAttribute("value");
      viewer.innerHTML = current;
    }
    else {
    current = current + this.getAttribute("value");
    viewer.innerHTML = current;
    }
  }
  equals.onclick = show;
  x("#clear").onclick = clear;
