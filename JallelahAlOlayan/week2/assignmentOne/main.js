var beer = "bottles";
var numb = 99;

while (numb > 0) {
    if (numb == 1){

    var beer = "bottle"

  }

    console.log(numb + " " + beer + " of beer on the wall");
    console.log(numb + " " + beer + " of beer,");
    console.log("Take one down, pass it around,");
    numb = numb - 1;
    
    if (numb > 0) {
      
        if (numb == 1){
        var word = "bottle"

      }

        console.log(numb + " " + beer + " of beer on the wall.");

    } else {

      if (numb < 1){
        var beer = "bottles"

      }

        console.log("No more " + beer + " of beer on the wall.");
    }
}