// creating a clock element in the header section of the page

// updating time in 1000 millisecond increments
setInterval(showTime, 1000);
function showTime() {
  let date = new Date();
  let time = date.toLocaleTimeString();
  document.querySelector("#clock-section").innerHTML = time;
}

// tiem is an inbuilt variable in javasript
// then I post it to the header section using querySelector
