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
        message: "You've loaded this page on " +new Date().toLocaleString(), 
        linkURL: "https://www.google.co.nz",
        linkText: "Go to Google New Zealand"
    }
});

var app3 = new Vue({
    el:"#app-3",
    data:{
        seen:true
    }
});

var app3 = new Vue({
    el:"#app-4",
    data:{
        todos:[
            {text: "Learn HTML - Done"},
            {text: "Learn CSS - Done"},
            {text: "Learn JS - Done"},
            {text: "Learn Vue - In Progress"}
        ]
    }
});