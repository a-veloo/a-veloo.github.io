window.addEventListener("load",function(){
    GetBookings();
});

function GetBookings(){
    //Wwhile let can be only available inside the scope it's declared, like in for loop, var can be //accessed outside the loop for example.
      let url = 'https://api.sheety.co/785e504f8ad8792780687397b8ec927c/bookingApp/bookings';
      fetch(url)
      
      .then((response) => response.json())
      .then(json => {
        // Do something with the data
        //console.log(json.bookings);
        var bookings = document.getElementById("booking-list");
        var bookingIds = [];
        
        for(i=0; i<json.bookings.length; i++){
          var aName = json.bookings[i].name;
          var aEmail = json.bookings[i].email;
          var aPax = json.bookings[i].pax;
          var aId = json.bookings[i].id;
          var aRemarks = json.bookings[i].remarks;
          // new variable
          var buttonId = "delete" +aId;

          let row = bookings.insertRow(bookings.rows.length);
          row.insertCell(0).innerHTML = aId;
          row.insertCell(1).innerHTML = aName;
          row.insertCell(2).innerHTML = aEmail;
          row.insertCell(3).innerHTML = aPax;
          row.insertCell(4).innerHTML = aRemarks; //Remarks
          row.insertCell(5).innerHTML = "<button id='" +buttonId +"' class='btn btn-danger'>Delete</button><br />";
          
          bookingIds.push(buttonId);
          //console.log(buttonId);  
        }
        for(let j=0; j<bookingIds.length; j++){
          let el = document.getElementById(bookingIds[j]);
          
          el.addEventListener("click",function(){
            let theId = bookingIds[j].replace("delete","");
            DeleteBooking(theId);
          });
        }
      });
}

function DeleteBooking(id){
    if(confirm("Are you sure you want to delete?")){
        let url = 'https://api.sheety.co/785e504f8ad8792780687397b8ec927c/bookingApp/bookings/' + id;

        fetch(url, {
            method: 'DELETE',
            })
            .then((response) => {
                location.reload();
            });
    }else{
        alert("Delete cancelled");
    }
}