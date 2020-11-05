function BookNow(guestName,guestEmail,guestPax,guestRemarks){
    let url = 'https://api.sheety.co/785e504f8ad8792780687397b8ec927c/bookingApp/bookings';
    
    let body = {
      //data object to send to the server
      booking: {
        //key:value pairs
        name:guestName,
        email:guestEmail,
        pax:guestPax,
        remarks:guestRemarks
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
      alert(json.booking.name +" successfully added!");
    });
}

window.addEventListener("load", function(){
    document.getElementById("bookNow").addEventListener("click", function(){
        let name = document.getElementById("guestName").value;
        let email = document.getElementById("guestEmail").value;
        let pax = document.getElementById("guestPax").value;
        let remarks = document.getElementById("guestRemarks").value;
    
        BookNow(name,email,pax,remarks);
    });
});

