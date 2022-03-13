$(document).ready(function () {
  $("#designImage").click(function () {               // toggle what we do
    $("#designImage").hide();                       // target design
    $("#designText").show();
    $("#designText h2").css("fontSize","16px");     //target text css
  });
  $("#designText").click(function () {               
    $("#designText").hide();                       
    $("#designImage").show();
  });


  });