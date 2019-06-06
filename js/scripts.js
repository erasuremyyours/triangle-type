$(document).ready(function() {
console.log('jquery is enabled')


  $('form#got-form').submit(function(event){
    event.preventDefault()
    var sideOne = parseInt($("#side1").val());
    var sideTwo = parseInt($("#side2").val());
    var sideThree = parseInt($("#side3").val());

    console.log(sideOne, sideTwo, sideThree);

    if (sideOne + sideTwo <= sideThree || sideTwo + sideThree <= sideOne || sideThree + sideOne <= sideTwo) {
      console.log('not a triangle');
      $('.result h2').hide();
      $('.result #nottriangle').show();
    } else if (sideOne === sideTwo && sideTwo === sideThree) {
      console.log('equilateral trinagle');
      $('.result h2').hide();
      $('.result #equilateral').show();
    } else if (sideOne === sideTwo || sideTwo === sideThree || sideOne === sideThree) {
      console.log('isosceles triangle');
      $('.result h2').hide();
      $('.result #isosceles').show();
    } else if (sideOne !== sideTwo && sideTwo !== sideThree) {
      console.log('scalene triangle');
      $('.result h2').hide();
      $('.result #scalene').show();
    } else {
      $('$body').hide();
      alert('You broke the Matrix');
    };

  });


});
