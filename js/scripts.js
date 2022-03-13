$(document).ready(function (event) {
  $("#designImage").click(function () {               // toggle what we do
    $("#designImage").hide();                       // target design
    $("#designText").show();
    $("#designText h2").css("fontSize", "16px");     //target text css
  });
  $("#designText").click(function () {
    $("#designText").hide();
    $("#designImage").show();
  });
  $("#developmentImage").click(function () {
    $("#developmentImage").hide();                       // target development
    $("#developmentText").show();
    $("#developmentText h2").css("fontSize", "16px");
  });
  $("#developmentText").click(function () {
    $("#developmentText").hide();                       // target development
    $("#developmentImage").show();
  });
  $("#productsImage").click(function () {
    $("#productsImage").hide();                       // target products
    $("#productsText").show();
    $("#productsText h2").css("fontSize", "16px");
  });
  $("#productsText").click(function () {
    $("#productsText").hide();                       // target products
    $("#productsImage").show();
  });

  // portfolio works
  $("#work4").mouseover(function () {
    $("#work4Text h3").show();
    $("#work4Text h3").css("background", "transparent");
    $("#work4Text h3").css("paddingTop", "35%");
  });
  $("#work4Text h3").mouseleave(function () {
    $("#work4Text h3").hide();
  });
  ////////////////////////////////
  $("#work3").mouseover(function () {
    $("#work3Text h3").show();
    $("#work3Text h3").css("background", "transparent");
    $("#work3Text h3").css("paddingTop", "35%");
  });
  $("#work3Text h3").mouseleave(function () {
    $("#work3Text h3").hide();
  });
  /////////////////////
  $("#work2").mouseover(function () {
    $("#work2Text h3").show();
    $("#work2Text h3").css("background", "transparent");
    $("#work2Text h3").css("paddingTop", "35%");
  });
  $("#work2Text h3").mouseleave(function () {
    $("#work2Text h3").hide();
  });
  //////////////////////
  $("#work1").mouseover(function () {
    $("#work1Text h3").show();
    $("#work1Text h3").css("background", "transparent");
    $("#work1Text h3").css("paddingTop", "35%");
  });
  $("#work1Text h3").mouseleave(function () {
    $("#work1Text h3").hide();
  });
  //////////////////////
  $("#work5").mouseover(function () {
    $("#work5Text h3").show();
    $("#work5Text h3").css("background", "transparent");
    $("#work5Text h3").css("paddingTop", "35%");
  });
  $("#work5Text h3").mouseleave(function () {
    $("#work5Text h3").hide();
  });
  //////////////////////
  $("#work6").mouseover(function () {
    $("#work6Text h3").show();
    $("#work6Text h3").css("background", "transparent");
    $("#work6Text h3").css("paddingTop", "35%");
  });
  $("#work6Text h3").mouseleave(function () {
    $("#work6Text h3").hide();
  });
  ///////////////////////
  $("#work7").mouseover(function () {
    $("#work7Text h3").show();
    $("#work7Text h3").css("background", "transparent");
    $("#work7Text h3").css("paddingTop", "35%");
  });
  $("#work7Text h3").mouseleave(function () {
    $("#work7Text h3").hide();
  });
  ///////////////////////
  $("#work8").mouseover(function () {
    $("#work8Text h3").show();
    $("#work8Text h3").css("background", "transparent");
    $("#work8Text h3").css("paddingTop", "35%");
  });
  $("#work8Text h3").mouseleave(function () {
    $("#work8Text h3").hide();
  });
  //////////////////// 


  event.preventDefault();
});
function validateForm(event) {
  // event.preventDefault();
  let name = document.forms["contactForm"]["Name"];
  let email = document.forms["contactForm"]["Email"];

  if (name.value == "") {
    alert("Empty Name Field.");
    name.focus();
    return false;
  };


  if (email.value == "") {
    alert("Enter valid email");
    email.focus();
    return false;
  }
  else {
    alert("Thank You for your message")
  }

  event.preventDefault();

};