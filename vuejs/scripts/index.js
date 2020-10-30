//create a new Vue object
var app = new Vue({ 
    el: "#app", 
    data: { 
        message: "Hello Vue!!"
    }
});

var app2 = new Vue({
el:"#app-2",
    data: {
        message:"You've loaded this page on " +new Date().toLocaleString() 
    }
});