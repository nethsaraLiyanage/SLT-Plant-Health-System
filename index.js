var connected_flag=0	
var mqtt;
var reconnectTimeout = 2000;
var host="broker.hivemq.com";
var port=8000;

	
function onConnectionLost(){
	console.log("connection lost");
	document.getElementById("status").innerHTML = "Connection Lost";
	document.getElementById("messages").innerHTML ="Connection Lost";
	connected_flag=0;
}

function onFailure(message) {
    console.log("Failed");
	document.getElementById("messages").innerHTML = "Connection Failed- Retrying";
    setTimeout(MQTTconnect, reconnectTimeout);
}

function onMessageArrived(r_message){
	out_msg="Message received "+r_message.payloadString+"<br>";
	out_msg=out_msg+"Message received Topic "+r_message.destinationName;

    //console.log("Message received ",r_message.payloadString);
	console.log(out_msg);
	document.getElementById("messages").innerHTML =out_msg;
	var topic=r_message.destinationName;

    if(topic=="slt_agro21/mois")
	{
		document.getElementById("mois").innerHTML =r_message.payloadString;
        
	}
	if(topic=="slt_agro21/temp")
	{
	    document.getElementById("temp").innerHTML =r_message.payloadString;
	}
	if(topic=="slt_agro21/hum")
	{
	    document.getElementById("hum").innerHTML =r_message.payloadString;
	}
	if(topic=="slt_agro21/lux")
	{
	    document.getElementById("lux").innerHTML =r_message.payloadString;
	}
		
	if(topic=="slt_agro21/Amois")
	{
		document.getElementById("Amois").innerHTML =r_message.payloadString;
	}
	if(topic=="slt_agro21/Atemp")
	{
		document.getElementById("Atemp").innerHTML =r_message.payloadString;
	}
	if(topic=="slt_agro21/Ahum")
	{
		document.getElementById("Ahum").innerHTML =r_message.payloadString;
	}
	if(topic=="slt_agro21/Alux")
	{
		document.getElementById("Alux").innerHTML =r_message.payloadString;
	}
	if(topic=="slt_agro21/ntime")
	{
		document.getElementById("ntime").innerHTML =r_message.payloadString;
	}
		
}

function onConnected(recon,url){
    console.log(" in onConnected " +reconn);
}
	
function onConnect() {
  	// Once a connection has been made, make a subscription and send a message.
	document.getElementById("messages").innerHTML ="Connected to "+host +"on port "+port;
	connected_flag=1
	document.getElementById("status").innerHTML = "Connected";
	console.log("on Connect "+connected_flag);
	mqtt.subscribe("slt_agro21/mois");
	mqtt.subscribe("slt_agro21/temp");
	mqtt.subscribe("slt_agro21/hum");
	mqtt.subscribe("slt_agro21/lux");
	mqtt.subscribe("slt_agro21/Amois");
	mqtt.subscribe("slt_agro21/Atemp");
	mqtt.subscribe("slt_agro21/Ahum");
	mqtt.subscribe("slt_agro21/Alux");
	mqtt.subscribe("slt_agro21/ntime");
	
}

function MQTTconnect() {

	console.log("connecting to "+ host +" "+ port);
	var x=Math.floor(Math.random() * 10000); 
	var cname="controlform-"+x;
	mqtt = new Paho.MQTT.Client(host,port,cname);
	//document.write("connecting to "+ host);
	var options = {
        timeout: 3,
		onSuccess: onConnect,
		onFailure: onFailure,
      
    };
	
    mqtt.onConnectionLost = onConnectionLost;
    mqtt.onMessageArrived = onMessageArrived;
	//mqtt.onConnected = onConnected;

	mqtt.connect(options);
	return false;
}

function send_message(msg,topic){
	if (connected_flag==0){
		out_msg="<b>Not Connected so can't send</b>"
		console.log(out_msg);
		document.getElementById("messages").innerHTML = out_msg;
		return false;
	}

    var value=msg.value;
	console.log("value= "+value);
	console.log("topic= "+topic);
	message = new Paho.MQTT.Message(value);
	message.destinationName = topic;

	mqtt.send(message);
	return false;
}


// Optional
Prism.plugins.NormalizeWhitespace.setDefaults({
    'remove-trailing': true,
    'remove-indent': true,
    'left-trim': true,
    'right-trim': true,
});

// handle links with @href started with '#' only
$(document).on('click', 'a[href^="#"]', function(e) {
    // target element id
    var id = $(this).attr('href');

    // target element
    var $id = $(id);
    if ($id.length === 0) {
        return;
    }

    // prevent standard hash navigation (avoid blinking in IE)
    e.preventDefault();

    // top position relative to the document
    var pos = $id.offset().top - 80;

    // animated top scrolling
    $('body, html').animate({scrollTop: pos});
});

// Cicle Chart
Circles.create({
    id:           'task-complete',
    radius:       75,
    value:        50,
    maxValue:     100,
    width:        7,
    text:         function(value){return value + '%';},
    colors:       ['#eee', '#177dff'],
    duration:     400,
    wrpClass:     'circles-wrp',
    textClass:    'circles-text',
    styleWrapper: true,
    styleText:    true
})

// Cicle Chart
Circles.create({
    id:           'task-complete2',
    radius:       75,
    value:        30,
    maxValue:     100,
    width:        7,
    text:         function(value){return value + '%';},
    colors:       ['#eee', '#177dff'],
    duration:     400,
    wrpClass:     'circles-wrp',
    textClass:    'circles-text',
    styleWrapper: true,
    styleText:    true
})

// Cicle Chart
Circles.create({
    id:           'task-complete3',
    radius:       75,
    value:        80,
    maxValue:     100,
    width:        7,
    text:         function(value){return value + '%';},
    colors:       ['#eee', '#177dff'],
    duration:     400,
    wrpClass:     'circles-wrp',
    textClass:    'circles-text',
    styleWrapper: true,
    styleText:    true
})

// Cicle Chart
Circles.create({
    id:           'task-complete4',
    radius:       75,
    value:        10,
    maxValue:     100,
    width:        7,
    text:         function(value){return value + '%';},
    colors:       ['#eee', '#177dff'],
    duration:     400,
    wrpClass:     'circles-wrp',
    textClass:    'circles-text',
    styleWrapper: true,
    styleText:    true
})

google.charts.load('current', {'packages':['gauge']});
      google.charts.setOnLoadCallback(drawChart);

      function drawChart() {

        var data = google.visualization.arrayToDataTable([
          ['Label', 'Value'],
          ['Temprature', 80]
        ]);

        var options = {
          width: 500, height: 160,
          redFrom: 90, redTo: 100,
          yellowFrom:75, yellowTo: 90,
          minorTicks: 5
        };

        var chart = new google.visualization.Gauge(document.getElementById('chart_div'));

        chart.draw(data, options);

        setInterval(function() {
          data.setValue(0, 1, 40 + Math.round(60 * Math.random()));
          chart.draw(data, options);
        }, 13000);
        setInterval(function() {
          data.setValue(1, 1, 40 + Math.round(60 * Math.random()));
          chart.draw(data, options);
        }, 5000);
        setInterval(function() {
          data.setValue(2, 1, 60 + Math.round(20 * Math.random()));
          chart.draw(data, options);
        }, 26000);
      }