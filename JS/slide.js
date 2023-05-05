

function revealabout() {
    var reveals = document.querySelectorAll(".reveal");
   
  
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) 
      {
        reveals[i].classList.add("active");
       
       
      } else {
        reveals[i].classList.remove("active");
      

      }
    }
  }
  
  function revealpic() {
    // var reveals = document.querySelectorAll(".dp");
    var reveals3 = document.querySelectorAll(".pic");
  
    for (var i = 0; i < reveals3.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals3[i].getBoundingClientRect().top;
      var elementVisible = 2;
    
      if (elementTop < windowHeight - elementVisible ) {
        // reveals[i].classList.add("activephoto");
       
        reveals3[i].classList.add("activephoto");
        
        
       } 
      else {
        
        reveals3[i].classList.remove("activephoto");
      }
     
  }
  }
  
  function revealwork() {
    // var reveals = document.querySelectorAll(".dp");
    var reveals4 = document.querySelectorAll(".line");
    var reveals5 = document.querySelectorAll(".proj_line");
    var content= document.querySelectorAll(".company_logo");
  
    for (var i = 0; i < reveals4.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals4[i].getBoundingClientRect().top;
      var elementVisible = 60;
  
      if (elementTop < windowHeight - elementVisible) {
        // reveals[i].classList.add("activephoto");
        reveals4[i].classList.add("expand");
        content[i].classList.add("up");
      } 
      else {
        // reveals[i].classList.remove("activephoto");
        reveals4[i].classList.remove("expand");
        content[i].classList.remove("up");
      }
    }
    
  }
  function revealproject() {
    // var reveals = document.querySelectorAll(".dp");
  
    var reveals5 = document.querySelectorAll(".proj_line");
    for (var i = 0; i < reveals5.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop1 = reveals5[i].getBoundingClientRect().top;
      var elementVisible = 100;
  
      if (elementTop1 < windowHeight - elementVisible) {
        // reveals[i].classList.add("activephoto");
        reveals5[i].classList.add("expand");
        
      } 
      else {
        // reveals[i].classList.remove("activephoto");
        reveals5[i].classList.remove("expand");
        
      }
    }
  }
  window.addEventListener("scroll", revealabout);
  window.addEventListener("scroll", revealproject);
  window.addEventListener("scroll", revealpic);
  window.addEventListener("scroll", revealwork);