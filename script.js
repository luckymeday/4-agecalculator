function clearStyles() {
  document.getElementById("dayInput").style.borderColor = "black";
  document.getElementById("titleDay").style.color = "black";
  document.getElementById("alertDay").innerHTML = "";

  document.getElementById("monthInput").style.borderColor = "black";
  document.getElementById("titleMonth").style.color = "black";
  document.getElementById("alertMonth").innerHTML = "";

  document.getElementById("yearInput").style.borderColor = "black";
  document.getElementById("titleYear").style.color = "black";
  document.getElementById("alertYear").innerHTML = "";
}

function age() {
  clearStyles();
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
  }
  if (d1 > 31) {
    // console.log("Must be a valid day");
    document.getElementById("dayInput").style.borderColor = "red";
    document.getElementById("titleDay").style.color = "red";
    document.getElementById("alertDay").innerHTML =
      "<span style='color:red; font-style:italic;'> Must be a valid day</span>";
    // document.getElementById("age").innerHTML = "--";
  }

  if (m1 > m2) {
    m2 = m2 + 12;
    y2 = y2 - 1;
  }
  if (m1 > 12) {
    // console.log("Must be a valid month");
    document.getElementById("monthInput").style.borderColor = "red";
    document.getElementById("titleMonth").style.color = "red";
    document.getElementById("alertMonth").innerHTML =
      "<span style='color:red;  font-style:italic;'> Must be a valid month</span>";
    // document.getElementById("age").innerHTML = "--";
  }

  if (y1 > y2) {
    // console.log("Must be in the past");
    document.getElementById("yearInput").style.borderColor = "red";
    document.getElementById("titleYear").style.color = "red";
    document.getElementById("alertYear").innerHTML =
      "<span style='color:red; font-style:italic;'>Must be in the past</span>";
    // document.getElementById("age").innerHTML = "--";
  }

  var d = d2 - d1;
  var m = m2 - m1;
  var y = y2 - y1;

  document.getElementById("age").innerHTML =
    y +
    "<span style='font-size 32px ; font-style:italic:bold ;'> Years </span>" +
    m +
    "<span style='font-size 32px ; font-style:italic:bold ;'> Months </span>" +
    +d +
    "<span style='font-size 32px ; font-style:italic:bold ;'> Days </span>";

  element.reset();
}
