function age() {
  // -> putting my dob (should be past)
  var d1 = document.getElementById("dayInput").value;
  var m1 = document.getElementById("monthInput").value;
  var y1 = document.getElementById("yearInput").value;
  // console.log("input " + d1, m1, y1);
  var date = new Date(); // -> pulling today date
  // console.log("pulling today " + date);

  // -> setting today' date def.
  var d2 = date.getDate();
  var m2 = 1 + date.getMonth();
  var y2 = date.getFullYear();
  // console.log("today " + d2, m2, y2);
  var month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  if (d1 > d2) {
    d2 = d2 + month[m2 - 1];
    m2 = m2 - 1;
  } else if (d1 > 31) {
    console.log("Must be a valid day");
    document.getElementById("alertDay").innerHTML = "Must be a valid day";
    // document.getElementById("age").innerHTML = "--";
  }

  if (m1 > m2) {
    m2 = m2 + 12;
    y2 = y2 - 1;
  } else if (m1 > 13);
  {
    console.log("Must be a valid month");
    document.getElementById("alertMonth").innerHTML = "Must be a valid month";
    // document.getElementById("age").innerHTML = "--";
  }

  if (y1 > y2) {
    console.log("Must be in the past");
    document.getElementById("alertYear").innerHTML = "Must be in the past";
    // document.getElementById("age").innerHTML = "--";
  }

  var d = d2 - d1;
  var m = m2 - m1;
  var y = y2 - y1;

  document.getElementById("age").innerHTML =
    y +
    "<span style='font-size 32px ; font-style:italic ;'> Years </span>" +
    "<br />" +
    m +
    "<span style='font-size 32px ; font-style:italic ;'> Months </span>" +
    "<br />";
  d + "<span style='font-size 32px ; font-style:italic ;'> Days </span>";
}
