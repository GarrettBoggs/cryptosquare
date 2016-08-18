var result = "";
var add = "";
var counter = 12;
var increment = 6;
var row = 0;
var col = 0;
var newArray = [];
var message = [];
var fmessage = [];
var tester = /[a-z]/g;
//back-end logic
var convert = function(data)
{
  newArray = [];
  firstArray = [];
  firstArray = data.split("");

  for(var i = 0; i < firstArray.length ; i ++)
  {
    if(firstArray[i] !== " ")
    {
      if(tester.test(firstArray[i]))
      {
        newArray.push(firstArray[i]);
        i -= 1;
      }
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
      increment = 1.5;
      col = 8;
    }
    else if(newArray.length >= 48)
    {
      increment = 1.8;
      col = 7;
    }
    else if(newArray.length >= 35)
    {
      increment = 2;
      col = 6;
    }
    else if(newArray.length >= 24)
    {
      increment = 2.5;
      col = 5;
    }
    else if(newArray.length >= 15)
    {
      increment = 3;
      col = 4;
    }
    else if(newArray.length >= 9)
    {
      increment = 4;
      col = 3;
    }
    else
    {
      increment = 6;
      col = 2;
    }

    for(var i = 0; i < newArray.length; i ++)
    {
      counter += increment;

      if(counter > 11)
      {
        counter = 0;
        $("#output").append("<div class=\"row\">");
        row += 1;
      }
        $("#output").append("<div class=\"col-md-1\">" + newArray[i] + "</div>");
    }

    for(i = 0; i < col; i += 1)
    {
      for(j = i; j < newArray.length; j += col)
      {
          message.push(newArray[j]);
      }
    }

    for(j = 0; j < (col*row) - newArray.length; j++)
    {
      $("#output").append("<div class=\"col-md-1\">" + "&nbsp;" + "</div>");
    }
    console.log(message);
    fmessage = message.join("");

    for(i = 5; i < fmessage.length;i += 6)
    {
      fmessage = fmessage.substring(0,i) + " " + fmessage.substring(i);
    }
    alert(fmessage);
  });
});
