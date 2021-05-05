window.onscroll = function() {myFunction()};
            
function myFunction() {
  if (document.documentElement.scrollTop > 5 && document.documentElement.scrollTop < 500)  {
    document.getElementById("feature-image").style.cssText = "background-image: url('images/ezgif.com-gif-maker.jpg')";
  }
  else if (document.documentElement.scrollTop > 500 && document.documentElement.scrollTop < 1000)  {
    document.getElementById("feature-image").style.cssText = "background-image: url('images/ezgif.com-gif-maker (1).jpg')";
  }
   else if (document.documentElement.scrollTop > 1000 && document.documentElement.scrollTop < 1500)  {
    document.getElementById("feature-image").style.cssText = "background-image: url('images/ezgif.com-gif-maker (2).jpg')";

  }
  else if (document.documentElement.scrollTop > 1500 && document.documentElement.scrollTop < 2000)  {
    document.getElementById("feature-image").style.cssText = "background-image: url('images/ezgif.com-1.jpg')";
  }
   else if (document.documentElement.scrollTop > 2000 && document.documentElement.scrollTop < 2500)  {
    document.getElementById("feature-image").style.cssText = "background-image: url('images/ezgif.com-2.jpg')";

  }
  else if (document.documentElement.scrollTop > 2500 && document.documentElement.scrollTop < 3000)  {
    document.getElementById("feature-image").style.cssText = "background-image: url('images/ezgif.com-3.jpg')";
  }
   else if (document.documentElement.scrollTop > 3000 && document.documentElement.scrollTop < 3500)  {
    document.getElementById("feature-image").style.cssText = "background-image: url('images/ezgif.com-4.jpg')";

  }
  else if (document.documentElement.scrollTop > 3500 && document.documentElement.scrollTop < 4000)  {
    document.getElementById("feature-image").style.cssText = "background-image: url('images/ezgif.com-5.jpg')";

  }
   else {
    document.getElementById("feature-image").className = "";
  }
}