
	// var connected_flag=0;
	// var mqtt;
    // var reconnectTimeout = 2000;
	// var host="broker.hivemq.com";
	// var port=8000;
    // var mois;

	
	// function onConnectionLost(){
	// console.log("connection lost");
	// document.getElementById("status").innerHTML = "Connection Lost";
	// document.getElementById("messages").innerHTML ="Connection Lost";
	// connected_flag=0;
	// }
	// function onFailure(message) {
	// 	console.log("Failed");
	// 	document.getElementById("messages").innerHTML = "Connection Failed- Retrying";
    //     setTimeout(MQTTconnect, reconnectTimeout);
    // }

	// function onMessageArrived(r_message){
	// 	out_msg="Message received "+r_message.payloadString+"<br>";
	// 	out_msg=out_msg+"Message received Topic "+r_message.destinationName;
	// 	//console.log("Message received ",r_message.payloadString);
	// 	console.log(out_msg);
	// 	document.getElementById("messages").innerHTML =out_msg;
	// 	var topic=r_message.destinationName;
	// 	if(topic!="slt_agro21/data/id_0001")
	// 	{
	// 		const obj = JSON.parse(r_message.payloadString);
	// 		document.getElementById("mois").innerHTML =obj.mois;
    //         mois = 60;
    //         console .log("check", mois);
	// 		document.getElementById("temp").innerHTML =obj.temp;
    //         temp = obj.temp;
	// 		document.getElementById("hum").innerHTML =obj.hum;
    //         hum = obj.hum;
	// 		document.getElementById("lux").innerHTML =obj.lux;
    //         lux = obj.lux;
	// 	}

	// 	if(topic=="slt_agro21/adata/id_0001")
	// 	{
	// 		const obj = JSON.parse(r_message.payloadString);
	// 		document.getElementById("amois").innerHTML =obj.amois;
    //         amois = obj.amois;
	// 		document.getElementById("atemp").innerHTML =obj.atemp;
    //         atemp = obj.atemp;
	// 		document.getElementById("ahum").innerHTML =obj.ahum;
    //         ahum = obj.ahum;
	// 		document.getElementById("alux").innerHTML =obj.alux;
    //         alux = obj.alux;
	// 	}

	// 	if(topic=="slt_agro21/ntime/id_0001")
	// 	{
	// 		const obj = JSON.parse(r_message.payloadString);
	// 		document.getElementById("ntime").innerHTML =obj.ntime;
	// 	}
	// 	}

	// function onConnected(recon,url){
	// console.log(" in onConnected " +reconn);
	// }
	// function onConnect() {
	//   // Once a connection has been made, make a subscription and send a message.
	// document.getElementById("messages").innerHTML ="Connected to "+host +"on port "+port;
	// connected_flag=1
	// document.getElementById("status").innerHTML = "Connected";
	// console.log("on Connect "+connected_flag);
	// mqtt.subscribe("slt_agro21/data/id_0001");
	// mqtt.subscribe("slt_agro21/adata/id_0001");
	// mqtt.subscribe("slt_agro21/ntime/id_0001");
	
	//   }

    // function MQTTconnect() {

	// console.log("connecting to "+ host +" "+ port);
	// var x=Math.floor(Math.random() * 10000); 
	// var cname="controlform-"+x;
	// mqtt = new Paho.MQTT.Client(host,port,cname);
	// //document.write("connecting to "+ host);
	// var options = {
    //     timeout: 3,
	// 	onSuccess: onConnect,
	// 	onFailure: onFailure,
      
    //  };
	
    //     mqtt.onConnectionLost = onConnectionLost;
    //     mqtt.onMessageArrived = onMessageArrived;
	// 	//mqtt.onConnected = onConnected;

	// mqtt.connect(options);
	// return false;
	// };

	// function send_message(msg,topic){
	// 	if (connected_flag==0){
	// 	out_msg="<b>Not Connected so can't send</b>"
	// 	console.log(out_msg);
	// 	document.getElementById("messages").innerHTML = out_msg;
	// 	return false;
	// 	}
	// 	var value=msg.value;
	// 	console.log("value= "+value);
	// 	console.log("topic= "+topic);
	// 	message = new Paho.MQTT.Message(value);
	// 	message.destinationName = topic;

	// 	mqtt.send(message);
	// 	return false;
	// };

    var connected_flag=0	
    var mqtt;
    var reconnectTimeout = 2000;
    var host="broker.hivemq.com";
    var port=8000;
    mois,temp,hum,lux,Amois,Atemp,Anum,Alux = 0;
    
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
                mois = 60;
                //pharseInt(r_message.payloadString);
                // console.log("check", r_message.payloadString);
                // Cicle Chart
                Circles.create({
                    id:           'task-complete',
                    radius:       75,
                    value:        mois,
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
            }
            if(topic=="slt_agro21/temp")
            {
                document.getElementById("temp").innerHTML =r_message.payloadString;
                temp = 80;
                //pharseInt(r_message.payloadString);
                // // console.log("check", r_message.payloadString);
                // Cicle Chart
                Circles.create({
                    id:           'task-complete2',
                    radius:       75,
                    value:        temp,
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
            }
            if(topic=="slt_agro21/hum")
            {
                document.getElementById("hum").innerHTML =r_message.payloadString;
                hum = 50;
                //pharseInt(r_message.payloadString);
                // // console.log("check", r_message.payloadString);
                // // Cicle Chart
                Circles.create({
                    id:           'task-complete3',
                    radius:       75,
                    value:        hum,
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
            }
            if(topic=="slt_agro21/lux")
            {
                document.getElementById("lux").innerHTML =r_message.payloadString;
                lux = 30;
                //pharseInt(r_message.payloadString);
                // // console.log("check", r_message.payloadString);
                // // Cicle Chart
                Circles.create({
                    id:           'task-complete4',
                    radius:       75,
                    value:        lux,
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
            }
            
            if(topic=="slt_agro21/Amois")
            {
                document.getElementById("Amois").innerHTML =r_message.payloadString;
                Amois = 70;
                //pharseInt(r_message.payloadString);
                // // console.log("check", r_message.payloadString);
                // // Cicle Chart
                Circles.create({
                    id:           'task-complete5',
                    radius:       75,
                    value:        Amois,
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
            }
            if(topic=="slt_agro21/Atemp")
            {
                document.getElementById("Atemp").innerHTML =r_message.payloadString;
                Atemp = 10;
                //pharseInt(r_message.payloadString);
                // // console.log("check", r_message.payloadString);
                // // Cicle Chart
                Circles.create({
                    id:           'task-complete6',
                    radius:       75,
                    value:        Atemp,
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
            }
            if(topic=="slt_agro21/Ahum")
            {
                document.getElementById("Ahum").innerHTML =r_message.payloadString;
                Ahum = 90;
                //pharseInt(r_message.payloadString);
                // // console.log("check", r_message.payloadString);
                // // Cicle Chart
                Circles.create({
                    id:           'task-complete7',
                    radius:       75,
                    value:        Ahum,
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
            }
            if(topic=="slt_agro21/Alux")
            {
                document.getElementById("Alux").innerHTML =r_message.payloadString;
                Alux = 55;
                //pharseInt(r_message.payloadString);
                // // console.log("check", r_message.payloadString);
                // // Cicle Chart
                Circles.create({
                    id:           'task-complete8',
                    radius:       75,
                    value:        Alux,
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


    

    // $(document).ready(function() {
    //     $("#accordian a").click(function() {
    //         var link = $(this);
    //         var closest_ul = link.closest("ul");
    //         var parallel_active_links = closest_ul.find(".active")
    //         var closest_li = link.closest("li");
    //         var link_status = closest_li.hasClass("active");
    //         var count = 0;
    
    //         closest_ul.find("ul").slideUp(function() {
    //             if (++count == closest_ul.find("ul").length){
    //                 parallel_active_links.removeClass("active");
    //                 parallel_active_links.children("ul").removeClass("show-dropdown");
    //                 link.not().children("ul").removeClass(".active");
    //             }
    //         });
    
    //         if (!link_status) {
    //                 closest_li.children("ul").slideDown().addClass("show-dropdown");
    //                 closest_li.addClass("active");
    //         }	
    
    //     })
    // });
    
    // // --------for-active-class-on-other-page-----------
    // jQuery(document).ready(function($){
    //       // Get current path and find target link
    //       var path = window.location.pathname.split("/").pop();
      
    //       // Account for home page with empty path
    //       if ( path == '' ) {
    //         path = 'index.html';
    //       }
         
    //       var target = $('#accordian li a[href="'+path+'"]');
    //       // Add active class to target link
    //       target.parents("li").addClass('active');
    //       target.parents("ul").addClass("show-dropdown");
    // });