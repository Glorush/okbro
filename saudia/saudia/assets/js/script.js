jQuery(document).ready(function(){

  // start hover menu
  $('ul.custom-hover li.dropdown').hover(function() {
      $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeIn(500);
    }, function() {
      $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeOut(500);
    });
  




  //start slick slider
    
      $('.home-slick-slider').slick({
          slidesToShow: 1,
          dots: true,
          infinite: true,
          speed: 700,
          fade: true,
          cssEase: 'linear',
          autoplay: true,
          autoplaySpeed: 5000
      });


      
      // tab menu active

      let bookingTabHeaderCol = document.getElementsByClassName("bookingTabHeaderCol");
      console.log(bookingTabHeaderCol)
      for(let i = 0; i<bookingTabHeaderCol.length; i++){
        bookingTabHeaderCol[i].addEventListener('click', function(){
          for(let j = 0; j<bookingTabHeaderCol.length; j++){
            bookingTabHeaderCol[j].classList.remove("activeTabNav");
          }
        })
      }

      for(let i = 0; i<bookingTabHeaderCol.length; i++){
        bookingTabHeaderCol[i].addEventListener('click', function(){
            bookingTabHeaderCol[i].classList.add("activeTabNav");
        })
      }
      
      // tab body
       let tabItem = document.getElementsByClassName("tabItem");
       for(let i = 0; i<tabItem.length; i++){
        bookingTabHeaderCol[i].addEventListener("click", function(){
          for(let j = 0; j<tabItem.length; j++){
            tabItem[j].classList.remove("showTabBody");
          }
        })
       }

       for(let i = 0; i<tabItem.length; i++){
        bookingTabHeaderCol[i].addEventListener('click', function(){
          tabItem[i].classList.add("showTabBody");
         })
       }

       $('.slider-from-wrapper').owlCarousel({
        items:1,
        loop:true,
        autoplay:true,
        autoplayTimeout:3000,
        smartSpeed:1500
      });

});


     // console.log(test)
    //  let test = document.getElementsByClassName("bookingTabHeaderCol");

    //  for (let i = 0; i < test.length; i++) {
    //    test[i].addEventListener('click', function () {
    //      for (let j = 0; j < test.length; j++) {
    //        test[j].classList.remove("active")
    //      }
    //    })
    //  }
    //  for (let i = 0; i < test.length; i++) {
    //    test[i].addEventListener('click', function () {
    //      test[i].classList.add("activeTabNav")
    //    })
    //  }


    $('#sk-travl-id').click(function(){
      $('.sk-travelar-popup').slideToggle(); 
    })