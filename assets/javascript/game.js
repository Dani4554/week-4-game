

  var targetNumber = 53;

  $("#number-to-guess").text(targetNumber);

  var counter = 0;

  // Now for the hard part. Creating multiple crystals each with their own unique number value.

  // We begin by expanding our array to include four options.
    randomCrystalVal();

  // This time, our click event applies to every single crystal on the page. Not just one.
  $(".crystal-image").on("click", function() {

    // Determining the crystal's value requires us to extract the value from the data attribute.
    // Using the $(this) keyword specifies that we should be extracting the crystal value of the clicked crystal.
    // Using the .attr("data-crystalvalue") allows us to grab the value out of the "data-crystalvalue" attribute.
    // Since attributes on HTML elements are strings, we must convert it to an integer before adding to the counter
    
    var crystalValue = ($(this).attr("data-crystalvalue"));
    crystalValue = parseInt(crystalValue);
    // We then add the crystalValue to the user's "counter" which is a global variable.
    // Every click, from every crystal adds to the global counter.
    counter += crystalValue;

    // All of the same game win-lose logic applies. So the rest remains unchanged.
    alert("New score: " + counter);

    if (counter === targetNumber) {
      alert("You win!");
      
      if(confirm("Would you like to play again?")) {
        randomCrystalVal();
        counter = 0;
        targetNumber = Math.floor((Math.random() *60) +1);
        $("#number-to-guess").text(targetNumber);
      }
    }

    else if (counter >= targetNumber) {
      alert("You lose!!");

      if(confirm("Would you like to play again?")) {
        randomCrystalVal();
        counter = 0;
        targetNumber = Math.floor((Math.random() *60) +1);
        $("#number-to-guess").text(targetNumber);
      }

    }

  });




function randomCrystalVal(){

  $("#image1").attr("data-crystalvalue", Math.floor((Math.random() *10) +1))
  $("#image2").attr("data-crystalvalue", Math.floor((Math.random() *10) +1))
  $("#image3").attr("data-crystalvalue", Math.floor((Math.random() *10) +1))
  $("#image4").attr("data-crystalvalue", Math.floor((Math.random() *10) +1))

};
