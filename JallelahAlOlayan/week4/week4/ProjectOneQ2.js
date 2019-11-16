
//Q2. Write a function that takes two integers (hours, minutes) and converts them to seconds.
//convertToSeconds(1h, 3m) ➞ 3780
//convertToSeconds(2, 0) ➞ 7200
//convertToSeconds(0, 0) ➞ 0


function toSeconds(h,m) {
  
  var secondsInH = h*3600
  var secondsInM = m*60
  return secondsInH+secondsInM;
  
  
}
console.log(toSeconds(1,3))