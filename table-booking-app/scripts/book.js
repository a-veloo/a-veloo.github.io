function BookNow(guestName,guestEmail,guestPax){
    let url = 'https://api.sheety.co/785e504f8ad8792780687397b8ec927c/bookingApp/bookings';
    
    let body = {
      //data object to send to the server
      booking: {
        //key:value pairs
        name:guestName,
        email:guestEmail,
        pax:guestPax
      }
    }
    fetch(url, {
      method: 'POST',
      body: JSON.stringify(body),
      //header so server/api knows the content request type is json, in order to add data.
      headers:{
        "Content-Type":"application/json"
      }
    })
    .then((response) => response.json())
    .then(json => {
      // Do something with object
      console.log(json.booking);
      //document.getElementById("bookMsg").innerHTML = json.booking.name +" successfully added!";
      //GetBookings();
    });
}

window.addEventListener("load", function(){
    document.getElementById("bookNow").addEventListener("click", function(){
        let name = document.getElementById("guestName");
        let email = document.getElementById("guestEmail");
        let pax = document.getElementById("guestPax");
        let remarks = document.getElementById("guestRemarks");
    
        console.log(name +"," +email +"," +pax +"," +remarks);
    });
});

