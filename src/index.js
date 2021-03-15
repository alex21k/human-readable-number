var one = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
var ten = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
var teen = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];

function millions(num) {
  if (num >= 1000000) {
    return millions(Math.floor(num / 1000000)) + " million " + thousands(num % 1000000);
  } else {
    return thousands(num);
  }
}

function thousands(num) {
  if (num >= 1000) {
    return hundreds(Math.floor(num / 1000)) + " thousand " + hundreds(num % 1000);
  } else {
    return hundreds(num);
  }
}

function hundreds(num) {
  if (num > 99) {
    return one[Math.floor(num / 100)] + " hundred " + tens(num % 100);
  } else {
    return tens(num);
  }
}

function tens(num) {
  if (num < 10) return one[num];
  else if (num >= 10 && num < 20) return teen[num - 10];
  else {
    return ten[Math.floor(num / 10)] + " " + one[num % 10];
  }
}

function convert(num) {
  if (num == 0) return "zero";
  else return millions(num);
}

module.exports = function toReadable (num) {
var cases=[num];

  for (var i = 0; i < cases.length; i++) {
    return(convert(cases[i]));
  }
}






