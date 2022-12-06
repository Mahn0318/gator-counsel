var faq = document.getElementsByClassName("faq-page");
  var i;
  
  for (i = 0; i < faq.length; i++) {
      faq[i].addEventListener("click", function () {
          /* Toggle between adding and removing the "active" class,
          to highlight the button that controls the panel */
          this.classList.toggle("active");
  
          /* Toggle between hiding and showing the active panel */
          var body = this.nextElementSibling;
          if (body.style.display === "block") {
              body.style.display = "none";
          } else {
              body.style.display = "block";
          }
      });
  }


  $("#submit").click(function() {
    $(".inbox").each(function() {
        if ($(this).attr("id") == $("#search").val()) {
           $('html,body').animate({
               scrollTop: $(this).offset().top
           });
        }
    });
});

$("#submit").click(function() {
    $(".faq-one").each(function() {
        if ($(this).attr("id") == $("#search").val()) {
           $('html,body').animate({
               scrollTop: $(this).offset().top
           });
        }
    });
});
  

//ACCOUNT ----------------------------------------------------------------------------------------------

function toggleAccountMenu(){
    $(document).ready(function(){
        $(".button-pre-header").toggle();
    });
  }

  function showAlert() {
    var myText = "App downloaded succesfully!";
    alert (myText);
  }
  
  function toggleProfileMenu(){
  $(document).ready(function(){
    $(".profile-menu").toggle();
  });
  }
  
  function openLogIn(){
  $(document).ready(function(){
      $(".mask").fadeIn(700);
      $(".logIn-menu").fadeIn(700);
      $(".logIn-menu").show();
      $(".mask").show();
    });
  }
  
  function closeLogIn(){
  $(document).ready(function(){
      $(".logIn-menu").hide();
      $(".mask").hide();
    });
  }
  
  function openProfile(){
  $(document).ready(function(){
      showProfileInfo();
      $(".mask").fadeIn(700);
      $(".profile").fadeIn(700);
      $(".profile").show();
      $(".mask").show();
    });
  }
  
  function closeProfile(){
  $(document).ready(function(){
      $(".profile").hide();
      $(".mask").hide();
    });
  }
  
  function openSignUp(){
  $(document).ready(function(){
      $(".mask").fadeIn(700);
      $(".signUp-menu").fadeIn(700);
      $(".signUp-menu").show();
      $(".mask").show();
    });
  }
  
  function closeSignUp(){
  $(document).ready(function(){
      $(".signUp-menu").hide();
      $(".mask").hide();
    });
  }
  
  function sureLogOut(){
  $(document).ready(function(){
    $(".logout-menu").toggle();
  });
  }
  
  function logOut(){
  $(document).ready(function(){
    $(".pre-header-login").show();
    $(".button-pre-header").hide();
    $(".pre-header-profile").hide(); 
    $(".profile-menu").hide(); 
    $("#user").hide();
    $(".mask-users").show();
  });
  }
  
  function noLogOut(){
  $(document).ready(function(){
    $(".logout-menu").hide();
  });
  }
  
  function modifyProfile(){
  $(document).ready(function(){
    $(".modification").show();
    $(".mask2").show();
  });
  }
  
  function closeModify(){
  $(document).ready(function(){
    let decodedCookie = decodeURIComponent(document.cookie);
    decodedCookie = decodedCookie.replace(/=/g,",");
    let whole = decodedCookie.split(',');
    document.getElementById("user").innerHTML = whole[3];
    document.getElementById("profile-info1").innerHTML = "Name and surname: "+ whole[2];
    document.getElementById("profile-info2").innerHTML = "Username: "+ whole[3];
    document.getElementById("profile-info3").innerHTML = "Date of birth: "+ whole[4];
    document.getElementById("profile-info4").innerHTML = "Interests: "+ whole[5];
    $(".modification").hide();
    $(".mask2").hide();
  });
  }
  
  function showProfileInfo(){
  $(document).ready(function(){
    let decodedCookie = decodeURIComponent(document.cookie);
    decodedCookie = decodedCookie.replace(/=/g,",");
    let whole = decodedCookie.split(',');
    
    document.getElementById("profile-info1").innerHTML = "Name and surname: "+ whole[2];
    document.getElementById("profile-info2").innerHTML = "Username: "+ whole[3];
    document.getElementById("profile-info3").innerHTML = "Date of birth: "+ whole[4];
    document.getElementById("profile-info4").innerHTML = "Interests: "+ whole[5];
  });
  }
  
  
  document.getElementById("random1").innerHTML = "Number of likes (received): "+ getRandomArbitrary();
  document.getElementById("random2").innerHTML = "Number of likes (given): "+ getRandomArbitrary();
  document.getElementById("random3").innerHTML = "Number of shared experiences: "+ getRandomArbitrary();
  
  
  function getRandomArbitrary() {
  return Math.floor( Math.random() * (999 - 1) + 1) ;
  }
  
  
  
  //COOKIES ----------------------------------------------------------------------------------------------
  function setCookieFirst(cvalue, exdays) {
    let cname =[];
    cname.push(document.getElementById("form1-signUp").value);
    cname.push(document.getElementById("form2-signUp").value);
    cvalue.push(document.getElementById("form3-signUp").value);
    cvalue.push(document.getElementById("form4-signUp").value);
    cvalue.push(document.getElementById("form5-signUp").value);
    cvalue.push(document.getElementById("form6-signUp").value);
  
    $(document).ready(function(){
        const d = new Date();
        d.setTime(d.getTime() + (exdays*24*60*60*1000));
        let expires = "expires="+ d.toUTCString();
        document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
        });
  }
  
  function modCookie(cvalue, exdays) {
    let cname = [];
    cname.push(document.getElementById("form1-logIn").value);
    cname.push(document.getElementById("form2-logIn").value);
    $(document).ready(function(){
        cvalue.push(document.getElementById("form1-profile").value); 
        cvalue.push(document.getElementById("form2-profile").value);
        cvalue.push(document.getElementById("form3-profile").value);
        cvalue.push(document.getElementById("form4-profile").value);
  
        const d = new Date();
        d.setTime(d.getTime() + (exdays*24*60*60*1000));
        let expires = "expires="+ d.toUTCString();
        document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
        });
  }
  
  function checkCookie(){
        if(getCookie()!="no"){
            $(".pre-header-login").hide();
            $(".button-pre-header").hide();
            $(".pre-header-profile").show();
            let decodedCookie = decodeURIComponent(document.cookie);
            decodedCookie = decodedCookie.replace(/=/g,",");
            let whole = decodedCookie.split(',');
        
            document.getElementById("user").innerHTML = whole[3];
            $("#user").show();
            $(".mask-users").hide();
  
            closeLogIn();
  
        }
        else {
            alert("Email/password are wrong");
        }
  }
  
  function getCookie() {
    let cname = [];
    cname.push(document.getElementById("form1-logIn").value);
    cname.push(document.getElementById("form2-logIn").value);    
    let decodedCookie = decodeURIComponent(document.cookie);
    decodedCookie = decodedCookie.replace(/=/g,",");
    let whole = decodedCookie.split(',');
  
    if(whole[0]==cname[0] && whole[1]==cname[1]){
      return "yes";
    }
    else{
      return "no";
    }
  }
  
  
  function checkCookieFirst(){
    if(getCookieFirst()!="yes"){
        setCookieFirst([],7);
        $(".pre-header-login").hide();
        $(".button-pre-header").hide();
        $(".pre-header-profile").show();
        document.getElementById("user").innerHTML = document.getElementById("form4-signUp").value;
        $("#user").show();
        $(".mask-users").hide();
        closeSignUp();
    }
    else {
        alert("Email already created");
    }
  }
  
  
  
  function getCookieFirst() {
    let cname = [];
    cname.push(document.getElementById("form1-signUp").value);
    cname.push(document.getElementById("form2-signUp").value);   
  
    let decodedCookie = decodeURIComponent(document.cookie);
    decodedCookie = decodedCookie.replace(/=/g,",");
    let whole = decodedCookie.split(',');
  
    if(whole[0]==cname[0] && whole[1]==cname[1]){
      return "yes";
    }
    else{
      return "no";
    }
  }
  
  