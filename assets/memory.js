var count = 0;
var counter = $("#counter");
var clock = $(".time");
var time = 0;
var lives = $(".lives").children().length;


function funcTimer() {

  time++;

  clock.text(time);
}


var timer = setInterval(function () {
  funcTimer()
},1000);



$("td").click(function(){
    count++
    console.log(count);
    if (count % 2 != 0){
       $(this).addClass("flipped");
       $(this).children().css("opacity","1");
       console.log("poop");
       //count =0;
    }
    else if(count% 2 ===0 && $(this).attr("id") === $(".flipped").attr("id")) {
      console.log("why you click on the same card fool!");
      count=1;
    }

    else if (count % 2 ===0 && $(this).attr("value") === $(".flipped").attr("value")) {
      $(this).addClass("flipped");
      $(this).children().css("opacity", "1");
      $(this).addClass("perm");
      $(this).removeClass("flipped");
      $(".flipped").addClass("perm");
      $("td").removeClass("flipped");

      console.log("Hey");
      count=0;
    }
    else if (count % 2=== 0 &&  $(this).attr("value")!= $(".flipped").attr("value")){
      $(this).addClass("flipped");
      $(this).children().css("opacity", "1");
      lives= lives - 1;
      if (lives === 0){
        $(".wrapper").html("You Lost!");
      }

      else {
        console.log("Not dead yet NOT APPROPRIATE WORDS");
      };
      console.log(lives + "lives");
      $(".lives").html(lives + " Lives Remaining!");
      setTimeout(function (){
        $(".flipped").children().css("opacity","0");
        $("td").removeClass("flipped");


        // count=0;

      }, 750)
      // $("td").removeClass("flipped");
      count=0;

    }




//THIS IS THE BEGININING OG STUF THAT ALMOST WORKS
    // else if ($(this).attr("value") === $(this).prev(".flipped").attr("value")){
    //   $(this).removeClass("flipped");
    //   $(this).addClass("perm");
    //   $(this).prev(".flipped").addClass("perm");
    //   $(this).prev(".flipped").removeClass("flipped");
    //   count = 0;
    //
    // }
    // else if ($(this).attr("value") === $(this).next(".flipped").attr("value")){
    //   $(this).removeClass("flipped");
    //   $(this).addClass("perm");
    //
    //   $(this).next(".flipped").addClass("perm");
    //   $(this).next(".flipped").removeClass("flipped");
    //   count = 0;
    // }
    // else if ($(this).attr("value") !== $(this).prev(".flipped").attr("value")){
    //   $(this).toggleClass("flipped");
    //   $(this).prev(".flipped").removeClass("flipped");
    //   $(this).removeClass("flipped");
    //   count = 0;
    //
    //   //do something
    // }
    // else if ($(this).attr("value") !== $(this).next(".flipped").attr("value")){
    //   $(this).toggleClass("flipped");
    //   $(this).next(".flipped").removeClass("flipped");
    //   $(this).removeClass("flipped");
    //   count=0;

      //do the same something
    //}
//****** THIS IS THE END OF THE STUFF THAT WORKSS




//     else if (count % 2 === 0 && $(this).attr("value") != $(this).prev(".flipped").attr("value") || $(this).next(".flipped").attr("value") ){
//
//       console.log("Hi");
// //});
// }




        //setTimeout(function(){})


    // else if (count % 2 === 0)  {
    //   // $(this).addClass("perm");
    //   $(this).toggleClass("flipped");
    //     if ($(this)){
    //       $(this).addClass("perm");
    //       $("#anchors").addClass("perm");
    //     }
    //     else {
    //       $(this).removeClass("flipped");
    //       console.log("yousuck");
    //     }
    //
    //   // $(this).removeClass("flipped");
    //   // console.log("hello");
    //   // // $(this).toggleClass("flipped");
    // }
    // else {
    //   console.log("You Cant CODE FOR $***")
    //
    // }
//     else if (count % 2 ===0 && $(this).attr("value") === $(this).prev(".flipped").attr("value")){
//     $(this).toggleClass("flipped");
//     $(this).prev(".flipped").toggleClass("flipped")
// }
//     else {
//     $(this).removeClass("flipped");
//
//   }
});
