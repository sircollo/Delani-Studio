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
  $("#developmentImage").click(function () {               
    $("#developmentImage").hide();                       // target development
    $("#developmentText").show();
    $("#developmentText h2").css("fontSize","16px");
  });
  $("#developmentText").click(function () {               
    $("#developmentText").hide();                       // target development
    $("#developmentImage").show();
  });
  $("#productsImage").click(function () {              
    $("#productsImage").hide();                       // target products
    $("#productsText").show();
    $("#productsText h2").css("fontSize","16px");
  });
  $("#productsText").click(function () {               
    $("#productsText").hide();                       // target products
    $("#productsImage").show();
  });


  });