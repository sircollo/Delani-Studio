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

  // portfolio works
  $("#work4").mouseover(function () {
    $("#work4Text h3").show();
    $("#work4Text h3").css("background","transparent");
    $("#work4Text h3").css("paddingTop","35%");
  });
  $("#work4Text h3").mouseleave(function () {
    $("#work4Text h3").hide();
  });
  ////////////////////////////////
  $("#work3").mouseover(function () {
    $("#work3Text h3").show();
    $("#work3Text h3").css("background","transparent");
    $("#work3Text h3").css("paddingTop","35%");
  });
  $("#work3Text h3").mouseleave(function () {
    $("#work3Text h3").hide();
  });
  


  });