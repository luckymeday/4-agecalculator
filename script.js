// function dateChanged() {
//   //   console.log("hey, the date changed!");
//   const yearInputElement = document.getElementById("yearInput");
//   //   console.log("hey the value of year in now " + yearInput.value);
//   const year = yearInputElement.value;
//   //   console.log(year);
//   const todayYear = new Date().getFullYear();
//   console.log(todayYear);
//   console.log(todayYear - year);
// }

function age() {
  var d1 = document.getElementById("dayInput").value;
  var m1 = document.getElementById("monthInput").value;
  var y1 = document.getElementById("yearInput").value;

  var date = new Date();

  var d2 = date.getDate();
  var m2 = 1 + date.getMonth();
  var y2 = date.getFullYear();

  var month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  if (d1 > d2) {
    d2 = d2 + month[m2 - 1];
    m2 = m2 - 1;
  }
  if (m1 > m2) {
    m2 = m2 + 12;
    y2 = y2 - 1;
  }
  var d = d2 - d1;
  var m = m2 - m1;
  var y = y2 - y1;

  document.getElementById("age").innerHTML =
    +y + "Years" + m + "Months" + d + "Days";
}

// const todayMonth = newDate.getMonth();

// newDate.getDate(); // 9

// let options = {
//   year: "numeric",
//   month: "long",
//   day: "long",
// };
// Intl.DateTimeFormat("en-US", options).format(newDate);
