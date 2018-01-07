$(function(){
	
    $("#load_home").click(function(){
    	
    	readHTMLFile("assets/content/home.html");
        $("#features").load("assets/content/home.html");
    });
    
    $("#load_panchayati").click(function(){
        $("#features").load("assets/content/panchayati_info.html");
    });
    
    $("#load_community").click(function(){
        $("#features").load("assets/content/community.html");
    });
    
    $("#load_developments").click(function(){
        $("#features").load("assets/content/developments.html");
    });
    
    $("#load_agriculture").click(function(){
        $("#features").load("assets/content/agriculture.html");
    });
    
    $("#load_events").click(function(){
        $("#features").load("assets/content/events.html");
    });
    
    $("#load_temples").click(function(){
        $("#features").load("assets/content/temples.html");
    });
    
    $("#load_education").click(function(){
        $("#features").load("assets/content/education.html");
    });
    
    $("#load_support").click(function(){
        $("#features").load("assets/content/support.html");
    });
});


function readHTMLFile(file)
{
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, false);
    rawFile.onreadystatechange = function ()
    {
        if(rawFile.readyState === 4)
        {
            if(rawFile.status === 200 || rawFile.status == 0)
            {
                var allText = rawFile.responseText;
                alert(allText);
            }
        }
    }
    rawFile.send(null);
}