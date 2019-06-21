$('nav li').hover(
    function() {
      $('ul', this).stop().slideDown(200);
    },
    function() {
      $('ul', this).stop().slideUp(200);
    }
  ); 

//   MODAL WINDOW
  //select all the a tag with name equal to modal, add callback that has the property of "e", that stands for "event"
$("a[name|='modal']").on('click', function(e) {

    //Cancel the link behavior
    //👇👇 preventDefault is used a lot! It prevents the default behavior. In this case, it prevents the page going to the link that is attached to it in the html. You can use it for forms, so that the page does not refresh when you press the submit button
    e.preventDefault();

    //Select the modal, and put it into a variable. 
    let id = $(".modalwindow");

    //Get the window height and width, if you get stuck, look up "jquery window", also, if you don't know what is going on with the height() and width(), look it up! ALWAYS KNOW WHAT YOUR CODE IS DOING. 
    const winH = $(window).height();
    const winW = $(window).width();
    console.log(winH);
    console.log(winW);

    //Set the popup window to center, I gave you the following, because it was a bit of a leap. If you have never used .css() before, Please look it up, and see what you can do with it. 
    id.css('top', winH/2-id.height()/2);
    id.css('left', winW/2-id.width()/2);

    //make a transition effect, so that the modal **cough*** fades in...
    
    //your code here...
    $('.modalwindow').fadeIn('fast');

});

//Now, we need to have something happen if the close button is clicked
$('.close').on('click',function (e) {

    //Cancel the link behavior
    e.preventDefault();

    //what you want to happen when the x button is clicked
    //an effect perhaps? 
    $('.modalwindow').fadeOut('fast');

    // Your code here.....
});