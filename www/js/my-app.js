// Initialize app
var myApp = new Framework7();


// If we need to use custom DOM library, let's save it to $$ variable:
var $$ = Dom7;

// Add view
var mainView = myApp.addView('.view-main', {
    // Because we want to use dynamic navbar, we need to enable it for this view:
    dynamicNavbar: true
});

// Handle Cordova Device Ready Event
$$(document).on('deviceready', function() {
    console.log("Device is ready!");
    $('.col-50').css('background', '#4bbb3b');   
});

/*----------------------------- onPageInit function -----------------------------------*/
myApp.onPageInit('movies', function (page) {
  $$('ul li:nth-child(1)').on('click', function(){
      myApp.popup('#m1');
      $$('#j-frame').attr('src', 'https://www.youtube.com/embed/WcXt9aUMbBk');
          });
      
    
      $$('ul li:nth-child(2)').on('click', function(){
            myApp.popup('#m1');
         $$('#j-frame').attr('src', 'https://www.youtube.com/embed/DLbLyEBist8');
          });
    
          $$('ul li:nth-child(3)').on('click', function(){
                myApp.popup('#m1');
      $$('#j-frame').attr('src', 'https://www.youtube.com/embed/3KQX2sIhQJY');
  });
    
    $$('ul li:nth-child(4)').on('click', function(){
                myApp.popup('#m1');
      $$('#j-frame').attr('src', 'https://www.youtube.com/embed/Eh-p2kJsiNc');
  });
    
}); /*-------------- end of onPageInit function ------------------------*/



       
