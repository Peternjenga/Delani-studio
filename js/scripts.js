$(document).ready(function(){
    $(".img1").click(function(){
      $(".img1").slideToggle(1500);
    $(".design").slideToggle(1500);
    }); 
    $(".design").click(function(){
        $(".design").slideToggle(1500);
      $(".img1").slideToggle(1500);
    });
  });
  
  $(document).ready(function(){
    $(".img2").click(function(){
       $(".img2").slideToggle(1500);
    $(".dev").slideToggle(1500);
    });
    $(".dev").click(function(){
        $(".dev").slideToggle(1500);
      $(".img2").slideToggle(1500);
    });
  });
  
  $(document).ready(function(){
    $(".img3").click(function(){
       $(".img3").slideToggle(1500);
    $(".product").slideToggle(1500);
    });
     $(".product").click(function(){
        $(".product").slideToggle(1500);
      $(".img3").slideToggle(1500);
    });
  });

  $(document).ready(function(){
    $("#validation").submit(function(){
      var name = $("#name").val();
      var email = $("#email").val();
      var message = $("#comment").val();
      if (name && email){
        alert ("Hello  " + name + ", thank you for reaching out to Delani Studio. We'll get back to you soon");
      }
      else {
        alert("Please enter correct information!");
      }
      
    });
  
  });