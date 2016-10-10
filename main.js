$(document).ready(function(){
  //create an array to push to and a string to present to
  //the output screen.
  var outputArr = [];
  var outputStr = "";

  //event listener for click of 'a' elements.
  $('a').on('click', function(){

    if(this.id === 'C') {
      outputArr = [];
      outputStr = outputArr.join('');
      update();
    } else if (this.id === '=') {
      outputStr = eval(outputStr);
      update();
    } else {
      outputArr.push(this.id);
      outputStr = outputArr.join('');
      update();
    }
  });

  function update(){
    $('#screen').text(outputStr);
  }

});
