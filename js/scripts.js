var result = "";
var add = "";
var counter = 12;
var increment = 6;
var newArray = [];
var firstArray = [];

//back-end logic
var convert = function(data)
{
  firstArray = data.split("");

  for(var i = 0; i < firstArray.length ; i ++)
  {
    if(firstArray[i] !== " ")
    {
      newArray.push(firstArray[i]);
    }
  }
};

//User interface Logic
$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    var data = $("#number").val();
    console.log(data);
    convert(data);
    console.log(result);

    if(newArray.length >= 48)
    {
      increment = 1.8;
    }
    else if(newArray.length >= 35)
    {
      increment = 2;
    }
    else if(newArray.length >= 24)
    {
      increment = 2.5;
    }
    else if(newArray.length >= 15)
    {
      increment = 3;
    }
    else if(newArray.length >= 9)
    {
      increment = 4;
    }
    else
    {
      increment = 6;
    }

    for(var i = 0; i < newArray.length; i ++)
    {
      counter += increment;

      if(counter > 11)
      {
        counter = 0;
        $("#output").append("<div class=\"row\">");
      }
        $("#output").append("<div class=\"col-md-1\">" + newArray[i] + "</div>");

    }
  });
});
