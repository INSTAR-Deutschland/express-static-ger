var express=require("express"),downloadsRouter=express.Router();downloadsRouter.get("/",function(a,e){e.render("./Downloads/Downloads",{title:"Download Bereich",ampimg:"/images/P_SearchThumb_Products.jpg",uplink:"/Products/",headline:"Download Bereich",breadcrumbs:'<li><a href="/">Home</a></li><li><a href="/Products/">Products</a></li><li><a href="/Downloads/">Downloads</a></li>'})}),downloadsRouter.get("/Indoor_Cameras/",function(a,e){e.render("./Downloads/Indoor_Cameras",{title:"Downloadbereich für Innenkameras",ampimg:"/images/Search/QI_SearchThumb_WebUI.jpg",uplink:"/Downloads",breadcrumbs:'<li class="breadcrumb-item"><a href="/">Home</a></li><li class="breadcrumb-item"><a href="/Downloads/">Downloads</a></li><li class="breadcrumb-item"><a href="/Indoor_Cameras/">Innenkameras</a></li>'})}),downloadsRouter.get("/Outdoor_Cameras/",function(a,e){e.render("./Downloads/Outdoor_Cameras",{title:"Downloadbereich für Außenkameras",ampimg:"/images/Search/QI_SearchThumb_WebUI.jpg",uplink:"/Downloads",breadcrumbs:'<li class="breadcrumb-item"><a href="/">Home</a></li><li class="breadcrumb-item"><a href="/Downloads/">Downloads</a></li><li class="breadcrumb-item"><a href="/Outdoor_Cameras/">Außenkameras</a></li>'})}),downloadsRouter.get("/Accessories/",function(a,e){e.render("./Downloads/Accessories",{title:"Downloadbereich für Allgemeines Zubehör",ampimg:"/images/Search/QI_SearchThumb_WebUI.jpg",uplink:"/Downloads",breadcrumbs:'<li class="breadcrumb-item"><a href="/">Home</a></li><li class="breadcrumb-item"><a href="/Downloads/">Downloads</a></li><li class="breadcrumb-item"><a href="/Accessories/">Allgemeines Zubehör</a></li>'})}),downloadsRouter.get("/Accessories/IN-90x",function(a,e){e.render("./Downloads/Accessories_IN-90x",{title:"Downloadbereich für die Infrarotscheinwerfer",ampimg:"/images/Search/QI_SearchThumb_WebUI.jpg",uplink:"/Downloads",breadcrumbs:'<li class="breadcrumb-item"><a href="/">Home</a></li><li class="breadcrumb-item"><a href="/Downloads/">Downloads</a></li><li class="breadcrumb-item"><a href="/Accessories/">Allgemeines Zubehör</a></li><li class="breadcrumb-item"><a href="/Accessories/IN-90x">IN-903 und IN-905</a></li>'})}),downloadsRouter.get("/Accessories/IN-Mikro380",function(a,e){e.render("./Downloads/Accessories_IN-Mikro380",{title:"Downloadbereich für das IN-Mikro 380",ampimg:"/images/Search/QI_SearchThumb_WebUI.jpg",uplink:"/Downloads",breadcrumbs:'<li class="breadcrumb-item"><a href="/">Home</a></li><li class="breadcrumb-item"><a href="/Downloads/">Downloads</a></li><li class="breadcrumb-item"><a href="/Accessories/">Allgemeines Zubehör</a></li><li class="breadcrumb-item"><a href="/Accessories/IN-90x">IN-Mikro 380</a></li>'})}),downloadsRouter.get("/Accessories/IN-Motion300",function(a,e){e.render("./Downloads/Accessories_IN-Motion300",{title:"Downloadbereich für den IN-Motion 300",ampimg:"/images/Search/QI_SearchThumb_WebUI.jpg",uplink:"/Downloads",breadcrumbs:'<li class="breadcrumb-item"><a href="/">Home</a></li><li class="breadcrumb-item"><a href="/Downloads/">Downloads</a></li><li class="breadcrumb-item"><a href="/Accessories/">Allgemeines Zubehör</a></li><li class="breadcrumb-item"><a href="/Accessories/IN-90x">IN-Motion 300</a></li>'})}),downloadsRouter.get("/Accessories/IN-Motion500",function(a,e){e.render("./Downloads/Accessories_IN-Motion500",{title:"Downloadbereich für den IN-Motion 500",ampimg:"/images/Search/QI_SearchThumb_WebUI.jpg",uplink:"/Downloads",breadcrumbs:'<li class="breadcrumb-item"><a href="/">Home</a></li><li class="breadcrumb-item"><a href="/Downloads/">Downloads</a></li><li class="breadcrumb-item"><a href="/Accessories/">Allgemeines Zubehör</a></li><li class="breadcrumb-item"><a href="/Accessories/IN-90x">IN-Motion 500</a></li>'})}),downloadsRouter.get("/Network_Accessories/",function(a,e){e.render("./Downloads/Network_Accessories",{title:"Downloadbereich für Netzwerkzubehör",ampimg:"/images/Search/QI_SearchThumb_WebUI.jpg",uplink:"/Downloads",breadcrumbs:'<li class="breadcrumb-item"><a href="/">Home</a></li><li class="breadcrumb-item"><a href="/Downloads/">Downloads</a></li><li class="breadcrumb-item"><a href="/Network_Accessories/">Netzwerkzubehör</a></li>'})}),downloadsRouter.get("/Network_Accessories/IN-LAN500",function(a,e){e.render("./Downloads/Network_Accessories_IN-LAN500",{title:"Downloadbereich für den IN-LAN 500",ampimg:"/images/Search/QI_SearchThumb_WebUI.jpg",uplink:"/Downloads/Network_Accessories",breadcrumbs:'<li class="breadcrumb-item"><a href="/">Home</a></li><li class="breadcrumb-item"><a href="/Downloads/">Downloads</a></li><li class="breadcrumb-item"><a href="/Network_Accessories/">Netzwerkzubehör</a></li><li class="breadcrumb-item"><a href="/Network_Accessories/IN-LAN500">IN-LAN 500</a></li>'})}),downloadsRouter.get("/Network_Accessories/IN-PoE1000",function(a,e){e.render("./Downloads/Network_Accessories_IN-PoE1000",{title:"Downloadbereich für den IN-PoE1000",ampimg:"/images/Search/QI_SearchThumb_WebUI.jpg",uplink:"/Downloads/Network_Accessories",breadcrumbs:'<li class="breadcrumb-item"><a href="/">Home</a></li><li class="breadcrumb-item"><a href="/Downloads/">Downloads</a></li><li class="breadcrumb-item"><a href="/Network_Accessories/">Netzwerkzubehör</a></li><li class="breadcrumb-item"><a href="/Network_Accessories/IN-PoE1000">IN-PoE1000</a></li>'})}),downloadsRouter.get("/Mobile_Apps/",function(a,e){e.render("./Downloads/Mobile_Apps",{title:"Downloadbereich unserer Mobilen Apps",ampimg:"/images/Search/QI_SearchThumb_WebUI.jpg",uplink:"/Downloads",breadcrumbs:'<li class="breadcrumb-item"><a href="/">Home</a></li><li class="breadcrumb-item"><a href="/Downloads/">Downloads</a></li><li class="breadcrumb-item"><a href="/Mobile_Apps/">Mobile Apps</a></li>'})}),downloadsRouter.get("/Mobile_Apps/Android_BlackBerry/",function(a,e){e.render("./Downloads/Mobile_Apps_Android_BlackBerry",{title:"Download der INSTAR Vision für Android und BlackBerry",ampimg:"/images/Search/QI_SearchThumb_WebUI.jpg",uplink:"/Downloads/Mobile_Apps",breadcrumbs:'<li class="breadcrumb-item"><a href="/">Home</a></li><li class="breadcrumb-item"><a href="/Downloads/">Downloads</a></li><li class="breadcrumb-item"><a href="/Mobile_Apps/">Mobile Apps</a></li><li class="breadcrumb-item"><a href="/Mobile_Apps/Android_BlackBerry">Mobile Apps</a></li>'})}),downloadsRouter.get("/Desktop_Software/",function(a,e){e.render("./Downloads/Desktop_Software",{title:"Downloadbereich unserer Desktop Software",ampimg:"/images/Search/QI_SearchThumb_WebUI.jpg",uplink:"/Downloads",breadcrumbs:'<li class="breadcrumb-item"><a href="/">Home</a></li><li class="breadcrumb-item"><a href="/Downloads/">Downloads</a></li><li class="breadcrumb-item"><a href="/Desktop_Software/">Desktop-Software</a></li>'})}),downloadsRouter.get("/Desktop_Software/InstarVision",function(a,e){e.render("./Downloads/Desktop_Software_InstarVision",{title:"Downloadbereich der InstarVision Desktop Software",ampimg:"/images/Search/QI_SearchThumb_WebUI.jpg",uplink:"/Downloads/Desktop_Software",breadcrumbs:'<li class="breadcrumb-item"><a href="/">Home</a></li><li class="breadcrumb-item"><a href="/Downloads/">Downloads</a></li><li class="breadcrumb-item"><a href="/Desktop_Software/">Desktop-Software</a></li><li class="breadcrumb-item"><a href="/Desktop_Software/InstarVision">InstarVision</a></li>'})}),downloadsRouter.get("/Desktop_Software/InstarCameraTool",function(a,e){e.render("./Downloads/Desktop_Software_InstarCameraTool",{title:"Download des INSTAR Camera Tools",ampimg:"/images/Search/QI_SearchThumb_WebUI.jpg",uplink:"/Downloads/Desktop_Software",breadcrumbs:'<li class="breadcrumb-item"><a href="/">Home</a></li><li class="breadcrumb-item"><a href="/Downloads/">Downloads</a></li><li class="breadcrumb-item"><a href="/Desktop_Software/">Desktop-Software</a></li><li class="breadcrumb-item"><a href="/Desktop_Software/InstarCameraTool">Camera Tool</a></li>'})}),downloadsRouter.route("/Indoor_Cameras/IN-6014_HD/").get(function(a,e){e.render("./Downloads/Indoor_Cameras_6014",{title:"IN-6014 HD Downloads",uplink:"/Downloads/Indoor_Cameras/",ampimg:"/images/Search/P_SearchThumb_Indoor_Cameras.jpg",headline:"INSTAR Products IN-6014 HD",breadcrumbs:'<li><a href="/Products/">Products</a></li><li><a href="/Downloads/">Downloads</a></li><li><a href="/Downloads/Indoor_Cameras">Innenkameras</a></li><li><a href="/Downloads/Indoor_Cameras/IN-6014_HD">IN-6014 HD</a></li>'})}),downloadsRouter.route("/Indoor_Cameras/IN-6012_HD/").get(function(a,e){e.render("./Downloads/Indoor_Cameras_6012",{title:"IN-6012 HD Downloads",uplink:"/Downloads/Indoor_Cameras/",ampimg:"/images/Search/P_SearchThumb_Indoor_Cameras.jpg",headline:"INSTAR Products IN-6012 HD",breadcrumbs:'<li><a href="/Products/">Products</a></li><li><a href="/Downloads/">Downloads</a></li><li><a href="/Downloads/Indoor_Cameras">Innenkameras</a></li><li><a href="/Downloads/Indoor_Cameras/IN-6012_HD">IN-6012 HD</a></li>'})}),downloadsRouter.route("/Indoor_Cameras/IN-6001_HD/").get(function(a,e){e.render("./Downloads/Indoor_Cameras_6001",{title:"IN-6001 HD Downloads",uplink:"/Downloads/Indoor_Cameras/",ampimg:"/images/Search/P_SearchThumb_Indoor_Cameras.jpg",headline:"INSTAR Products IN-6001 HD",breadcrumbs:'<li><a href="/Products/">Products</a></li><li><a href="/Downloads/">Downloads</a></li><li><a href="/Downloads/Indoor_Cameras">Innenkameras</a></li><li><a href="/Downloads/Indoor_Cameras/IN-6001_HD">IN-6001 HD</a></li>'})}),downloadsRouter.route("/Indoor_Cameras/IN-3011/").get(function(a,e){e.render("./Downloads/Indoor_Cameras_3011",{title:"IN-3011 Downloads",uplink:"/Downloads/Indoor_Cameras/",ampimg:"/images/Search/P_SearchThumb_Indoor_Cameras.jpg",headline:"INSTAR Products IN-3011",breadcrumbs:'<li><a href="/Products/">Products</a></li><li><a href="/Downloads/">Downloads</a></li><li><a href="/Downloads/Indoor_Cameras">Innenkameras</a></li><li><a href="/Downloads/Indoor_Cameras/IN-3011">IN-3011</a></li>'})}),downloadsRouter.route("/Indoor_Cameras/IN-3010/").get(function(a,e){e.render("./Downloads/Indoor_Cameras_3010",{title:"IN-3010 Downloads",uplink:"/Downloads/Indoor_Cameras/",ampimg:"/images/Search/P_SearchThumb_Indoor_Cameras.jpg",headline:"INSTAR Products IN-3010",breadcrumbs:'<li><a href="/Products/">Products</a></li><li><a href="/Downloads/">Downloads</a></li><li><a href="/Downloads/Indoor_Cameras">Innenkameras</a></li><li><a href="/Downloads/Indoor_Cameras/IN-3010">IN-3010</a></li>'})}),downloadsRouter.route("/Indoor_Cameras/IN-3003/").get(function(a,e){e.render("./Downloads/Indoor_Cameras_3003",{title:"IN-3003 Downloads",uplink:"/Downloads/Indoor_Cameras/",ampimg:"/images/Search/P_SearchThumb_Indoor_Cameras.jpg",headline:"INSTAR Products IN-3003",breadcrumbs:'<li><a href="/Products/">Products</a></li><li><a href="/Downloads/">Downloads</a></li><li><a href="/Downloads/Indoor_Cameras">Innenkameras</a></li><li><a href="/Downloads/Indoor_Cameras/IN-3003">IN-3003</a></li>'})}),downloadsRouter.route("/Indoor_Cameras/IN-3001/").get(function(a,e){e.render("./Downloads/Indoor_Cameras_3001",{title:"IN-3001 Downloads",uplink:"/Downloads/Indoor_Cameras/",ampimg:"/images/Search/P_SearchThumb_Indoor_Cameras.jpg",headline:"INSTAR Products IN-3001",breadcrumbs:'<li><a href="/Products/">Products</a></li><li><a href="/Downloads/">Downloads</a></li><li><a href="/Downloads/Indoor_Cameras">Innenkameras</a></li><li><a href="/Downloads/Indoor_Cameras/IN-3001">IN-3001</a></li>'})}),downloadsRouter.route("/Outdoor_Cameras/IN-7011_HD/").get(function(a,e){e.render("./Downloads/Outdoor_Cameras_7011",{title:"IN-7011 HD Downloads",ampimg:"/images/Search/P_SearchThumb_OutdoorCams.jpg",uplink:"/Downloads/Outdoor_Cameras/",headline:"INSTAR Products IN-7011 HD",breadcrumbs:'<li><a href="/Products/">Products</a></li><li><a href="/Downloads/">Downloads</a></li><li><a href="/Downloads/Outdoor_Cameras">Außenkameras</a></li><li><a href="/Downloads/Outdoor_Cameras/IN-7011_HD/">IN-7011 HD</a></li>'})}),downloadsRouter.route("/Outdoor_Cameras/IN-5907_HD/").get(function(a,e){e.render("./Downloads/Outdoor_Cameras_5907",{title:"IN-5907 HD Downloads",ampimg:"/images/Search/P_SearchThumb_OutdoorCams.jpg",uplink:"/Downloads/Outdoor_Cameras/",headline:"INSTAR Products IN-5907 HD",breadcrumbs:'<li><a href="/Products/">Products</a></li><li><a href="/Downloads/">Downloads</a></li><li><a href="/Downloads/Outdoor_Cameras">Außenkameras</a></li><li><a href="/Downloads/Outdoor_Cameras/IN-5907_HD/">IN-5907 HD</a></li>'})}),downloadsRouter.route("/Outdoor_Cameras/IN-5905_HD/").get(function(a,e){e.render("./Downloads/Outdoor_Cameras_5905",{title:"IN-5905 HD Downloads",ampimg:"/images/Search/P_SearchThumb_OutdoorCams.jpg",uplink:"/Downloads/Outdoor_Cameras/",headline:"INSTAR Products IN-5905 HD",breadcrumbs:'<li><a href="/Products/">Products</a></li><li><a href="/Downloads/">Downloads</a></li><li><a href="/Downloads/Outdoor_Cameras">Außenkameras</a></li><li><a href="/Downloads/Outdoor_Cameras/IN-5905_HD/">IN-5905 HD</a></li>'})}),downloadsRouter.route("/Outdoor_Cameras/IN-4011/").get(function(a,e){e.render("./Downloads/Outdoor_Cameras_4011",{title:"IN-4011 Downloads",ampimg:"/images/Search/P_SearchThumb_OutdoorCams.jpg",uplink:"/Downloads/Outdoor_Cameras/",headline:"INSTAR Products IN-4011",breadcrumbs:'<li><a href="/Products/">Products</a></li><li><a href="/Downloads/">Downloads</a></li><li><a href="/Downloads/Outdoor_Cameras">Außenkameras</a></li><li><a href="/Downloads/Outdoor_Cameras/IN-4011/">IN-4011</a></li>'})}),downloadsRouter.route("/Outdoor_Cameras/IN-4010_V2/").get(function(a,e){e.render("./Downloads/Outdoor_Cameras_4010",{title:"IN-4010 V2 Downloads",ampimg:"/images/Search/P_SearchThumb_OutdoorCams.jpg",uplink:"/Downloads/Outdoor_Cameras/",headline:"INSTAR Products IN-4010 V2",breadcrumbs:'<li><a href="/Products/">Products</a></li><li><a href="/Downloads/">Downloads</a></li><li><a href="/Downloads/Outdoor_Cameras">Außenkameras</a></li><li><a href="/Downloads/Outdoor_Cameras/IN-4010_V2/">IN-4010 V2</a></li>'})}),downloadsRouter.route("/Outdoor_Cameras/IN-4009/").get(function(a,e){e.render("./Downloads/Outdoor_Cameras_4009",{title:"IN-4009 Downloads",ampimg:"/images/Search/P_SearchThumb_OutdoorCams.jpg",uplink:"/Downloads/Outdoor_Cameras/",headline:"INSTAR Products IN-4009",breadcrumbs:'<li><a href="/Products/">Products</a></li><li><a href="/Downloads/">Downloads</a></li><li><a href="/Downloads/Outdoor_Cameras">Außenkameras</a></li><li><a href="/Downloads/Outdoor_Cameras/IN-4009/">IN-4009</a></li>'})}),downloadsRouter.route("/Outdoor_Cameras/IN-2908/").get(function(a,e){e.render("./Downloads/Outdoor_Cameras_2908",{title:"IN-2908 Downloads",ampimg:"/images/Search/P_SearchThumb_OutdoorCams.jpg",uplink:"/Downloads/Outdoor_Cameras/",headline:"INSTAR Products IN-2908",breadcrumbs:'<li><a href="/Products/">Products</a></li><li><a href="/Downloads/">Downloads</a></li><li><a href="/Downloads/Outdoor_Cameras">Außenkameras</a></li><li><a href="/Downloads/Outdoor_Cameras/IN-2908/">IN-2908</a></li>'})}),downloadsRouter.route("/Outdoor_Cameras/IN-2905_V2/").get(function(a,e){e.render("./Downloads/Outdoor_Cameras_2905",{title:"IN-2905 V2 Downloads",ampimg:"/images/Search/P_SearchThumb_OutdoorCams.jpg",uplink:"/Downloads/Outdoor_Cameras/",headline:"INSTAR Products IN-2905 V2",breadcrumbs:'<li><a href="/Products/">Products</a></li><li><a href="/Downloads/">Downloads</a></li><li><a href="/Downloads/Outdoor_Cameras">Außenkameras</a></li><li><a href="/Downloads/Outdoor_Cameras/IN-2905_V2/">IN-2905 V2</a></li>'})}),downloadsRouter.route("/Outdoor_Cameras/IN-2904/").get(function(a,e){e.render("./Downloads/Outdoor_Cameras_2904",{title:"IN-2904 Downloads",ampimg:"/images/Search/P_SearchThumb_OutdoorCams.jpg",uplink:"/Downloads/Outdoor_Cameras/",headline:"INSTAR Products IN-2904",breadcrumbs:'<li><a href="/Products/">Products</a></li><li><a href="/Downloads/">Downloads</a></li><li><a href="/Downloads/Outdoor_Cameras">Außenkameras</a></li><li><a href="/Downloads/Outdoor_Cameras/IN-2904/">IN-2904</a></li>'})}),module.exports=downloadsRouter;