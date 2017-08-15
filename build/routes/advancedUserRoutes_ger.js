var express=require("express"),advancedUserGerRouter=express.Router();advancedUserGerRouter.get("/",function(e,a){a.render("./Advanced_User/Advanced_User",{title:"Themen für Entwickler",ampimg:"/images/Search/AU_SearchThumb_ForDeveloper.jpg",headline:"Webseiteneinbindung, CGI Programmier-Interface und wiederherstellen beschädigter Kamerasoftware",breadcrumbs:'<li><a href="/">Home</a></li><li><a href="/Erweitert/">Erweitert</a></li>',canonical:"/Advanced_User/",description:"Webseiteneinbindung, CGI Programmier-Interface und wiederherstellen beschädigter Kamerasoftware",pacc:"",ptab:"hidden",qiacc:"",qitab:"hidden",mdacc:"",mdtab:"hidden",iaacc:"",iatab:"hidden",auacc:"expanded",autab:"",hdacc:"hidden",hdtab:"hidden",fhdacc:"hidden",fhdtab:"hidden",sacc:"hidden",dlacc:"hidden",dltab:"hidden"})}),advancedUserGerRouter.get("/Webseiten_Einbindung/",function(e,a){a.render("./Advanced_User/Website_Integration",{title:"INSTAR IP Kamera Webseiten Einbindung",ampimg:"/images/Search/AU_SearchThumb_WebsiteIntegration.jpg",headline:"Verwenden Sie Ihre IP Kamera als Webcam und binden Sie Ihre Kamera in Ihre Webseite ein",breadcrumbs:'<li><a href="/">Home</a></li><li><a href="/Erweitert/">Erweitert</a></li><li><a href="/Erweitert/Webseiten_Einbindung/">Webseiten Einbindung</a></li>',canonical:"/Advanced_User/Website_Integration/",description:"Fügen Sie das Live Video Ihrer Kamera in Ihre Webseite ein. Oder laden Sie Einzelbilder auf Ihren Webserver und binden Sie diese auf Ihrer Seite ein.",pacc:"",ptab:"hidden",qiacc:"",qitab:"hidden",mdacc:"",mdtab:"hidden",iaacc:"",iatab:"hidden",auacc:"expanded",autab:"",hdacc:"hidden",hdtab:"hidden",fhdacc:"hidden",fhdtab:"hidden",sacc:"hidden",dlacc:"hidden",dltab:"hidden"})}),advancedUserGerRouter.get("/Webseiten_Einbindung/Cambozola",function(e,a){a.render("./Advanced_User/Cambozola",{title:"Cambozola (JAVA Plugin)",ampimg:"/images/Search/AU_SearchThumb_WebsiteIntegration_Cambozola.jpg",headline:"Webseiten Einbindung mit Cambozola",breadcrumbs:'<li><a href="/">Home</a></li><li><a href="/Erweitert/">Erweitert</a></li><li><a href="/Erweitert/Webseiten_Einbindung/">Webseiten Einbindung</a></li><li><a href="/Erweitert/Webseiten_Einbindung/Cambozola/">Cambozola</a></li>',canonical:"/Advanced_User/Website_Integration/Cambozola/",description:"Fügen Sie das Live Video Ihrer Kamera mit Hilfe des JAVA Plugins Cambozola in Ihre Webseite ein.",pacc:"",ptab:"hidden",qiacc:"",qitab:"hidden",mdacc:"",mdtab:"hidden",iaacc:"",iatab:"hidden",auacc:"expanded",autab:"",hdacc:"hidden",hdtab:"hidden",fhdacc:"hidden",fhdtab:"hidden",sacc:"hidden",dlacc:"hidden",dltab:"hidden"})}),advancedUserGerRouter.get("/Webseiten_Einbindung/Open_IP_Camera_Manager",function(e,a){a.render("./Advanced_User/Open_IP_Camera_Manager",{title:"Open IP Camera Manager (PHP)",ampimg:"/images/Search/AU_SearchThumb_WebsiteIntegration_OIPCM.jpg",headline:"IP Camera Webseiten Einbindung with OICM",breadcrumbs:'<li><a href="/">Home</a></li><li><a href="/Erweitert/">Erweitert</a></li><li><a href="/Erweitert/Webseiten_Einbindung/">Webseiten Einbindung</a></li><li><a href="/Erweitert/Webseiten_Einbindung/Open_IP_Camera_Manager/">OIPCM</a></li>',canonical:"/Advanced_User/Website_Integration/Open_IP_Camera_Manager/",description:"Fügen Sie das Live Video Ihrer Kamera mit Hilfe des PHP Plugins Open IP Camera Manager in Ihre Webseite ein.",pacc:"",ptab:"hidden",qiacc:"",qitab:"hidden",mdacc:"",mdtab:"hidden",iaacc:"",iatab:"hidden",auacc:"expanded",autab:"",hdacc:"hidden",hdtab:"hidden",fhdacc:"hidden",fhdtab:"hidden",sacc:"hidden",dlacc:"hidden",dltab:"hidden"})}),advancedUserGerRouter.get("/Webseiten_Einbindung/HD_Kamera_Einbindung",function(e,a){a.render("./Advanced_User/HD_Camera_Integration",{title:"HD Camera Webseiten Einbindung",ampimg:"/images/Search/AU_SearchThumb_WebsiteIntegration_HD_Cams.jpg",headline:"H.264 IP Camera Webseiten Einbindung",breadcrumbs:'<li><a href="/">Home</a></li><li><a href="/Erweitert/">Erweitert</a></li><li><a href="/Erweitert/Webseiten_Einbindung/">Webseiten Einbindung</a></li><li><a href="/Erweitert/Webseiten_Einbindung/HD_Kamera_Einbindung/">HD Kameras</a></li>',canonical:"/Advanced_User/Website_Integration/HD_Camera_Integration/",description:"Fügen Sie das Live Video Ihrer HD Kamera mit Hilfe unseres HTML Templates in Ihre Webseite ein.",pacc:"",ptab:"hidden",qiacc:"",qitab:"hidden",mdacc:"",mdtab:"hidden",iaacc:"",iatab:"hidden",auacc:"expanded",autab:"",hdacc:"hidden",hdtab:"hidden",fhdacc:"hidden",fhdtab:"hidden",sacc:"hidden",dlacc:"hidden",dltab:"hidden"})}),advancedUserGerRouter.get("/CGI_Befehle/",function(e,a){a.render("./Advanced_User/CGI_Commands",{title:"CGI Befehle für die Steuerung Ihrer INSTAR IP Kamera",ampimg:"/images/Search/AU_SearchThumb_CGICommands.jpg",headline:"Nutzen Sie unsere CGI Programmierschnittstelle um direkt alle Funktionen auf der Kamera anzusprechen.",breadcrumbs:'<li class="breadcrumb-item"><a href="/">Home</a></li><li class="breadcrumb-item"><a href="/Erweitert/">Erweitert</a></li><li class="breadcrumb-item"><a href="/Erweitert/CGI_Befehle/">CGI Befehle</a></li>',canonical:"/Advanced_User/CGI_Commands/",description:"Mit CGI Befehle können Sie direkt über die Addresszeile Ihres Browsers, oder eingebunden in Ihre Webseite, Funktionen auf der Kamera aktivieren und Werte setzen. Alle Funktionen der INSTAR Weboberfläche sind hier in Form von Kommandos verfügbar.",pacc:"",ptab:"hidden",qiacc:"",qitab:"hidden",mdacc:"",mdtab:"hidden",iaacc:"",iatab:"hidden",auacc:"expanded",autab:"",hdacc:"hidden",hdtab:"hidden",fhdacc:"hidden",fhdtab:"hidden",sacc:"hidden",dlacc:"hidden",dltab:"hidden"})}),advancedUserGerRouter.get("/CGI_Befehle/VGA_Serie_CGI_Befehle",function(e,a){a.render("./Advanced_User/VGA_Series_CGI_List",{title:"CGI Befehle für die Steuerung Ihrer INSTAR VGA IP Kamera",ampimg:"/images/Search/AU_SearchThumb_CGICommands_VGA.jpg",headline:"Für Entwickler - CGI Befehle zum Einbinden der INSTAR VGA IP Kamera in Ihre Software",breadcrumbs:'<li class="breadcrumb-item"><a href="/">Home</a></li><li class="breadcrumb-item"><a href="/Erweitert/">Erweitert</a></li><li class="breadcrumb-item"><a href="/Erweitert/CGI_Befehle/">CGI Befehle</a></li><li class="breadcrumb-item"><a href="/Erweitert/CGI_Befehle/VGA_Serie_CGI_Befehle/">VGA Serie</a></li>',canonical:"/Advanced_User/CGI_Commands/VGA_Series_CGI_List/",description:"Mit CGI Befehle können Sie direkt über die Addresszeile Ihres Browsers, oder eingebunden in Ihre Webseite, Funktionen auf der VGA Kamera aktivieren und Werte setzen. Alle Funktionen der INSTAR Weboberfläche sind hier in Form von Kommandos verfügbar.",pacc:"",ptab:"hidden",qiacc:"",qitab:"hidden",mdacc:"",mdtab:"hidden",iaacc:"",iatab:"hidden",auacc:"expanded",autab:"",hdacc:"hidden",hdtab:"hidden",fhdacc:"hidden",fhdtab:"hidden",sacc:"hidden",dlacc:"hidden",dltab:"hidden"})}),advancedUserGerRouter.get("/Tasker/",function(e,a){a.render("./Advanced_User/Tasker",{title:"Tasker Android App",ampimg:"/images/Search/AU_SearchThumb_CGICommands.jpg",headline:"Makro Tools zum Automatisieren der Kamera Funktionen",breadcrumbs:'<li><a href="/">Home</a></li><li><a href="/Erweitert/">Erweitert</a></li><li><a href="/Erweitert/Tasker/">Tasker Android App</a></li>',canonical:"/Advanced_User/Tasker/",description:"Tasker ist eine Android App zum erstellen von Makro Skripten, die zeitgesteuert oder durch Umgebungsvariablen des Handies ausgelöst werden. Dies - in Kombination mit unseren dokumentierten CGI Befehlen - ermöglicht das Automatisieren aller Kamerafunktionen.",pacc:"",ptab:"hidden",qiacc:"",qitab:"hidden",mdacc:"",mdtab:"hidden",iaacc:"",iatab:"hidden",auacc:"expanded",autab:"",hdacc:"hidden",hdtab:"hidden",fhdacc:"hidden",fhdtab:"hidden",sacc:"hidden",dlacc:"hidden",dltab:"hidden"})}),advancedUserGerRouter.get("/Tasker/Bewegungserkennung_Aufgabe_Hinzufuegen/",function(e,a){a.render("./Advanced_User/Tasker_Motion_Detection_Add_Task",{title:"Tasker Android App",ampimg:"/images/Search/AU_SearchThumb_CGICommands.jpg",headline:"Makro Tools zum Automatisieren der Kamera Funktionen",breadcrumbs:'<li><a href="/Erweitert/">Erweitert</a></li><li><a href="/Erweitert/Tasker/">Tasker</a></li><li><a href="/Erweitert/Tasker/Motion_Detection_Add_Task/">Bewegungserkennung - Aufgabe Hinzufügen</a></li>',canonical:"/Advanced_User/Tasker/Motion_Detection_Add_Task/",description:"Tasker ist eine Android App zum erstellen von Makro Skripten, die zeitgesteuert oder durch Umgebungsvariablen des Handies ausgelöst werden. Dies - in Kombination mit unseren dokumentierten CGI Befehlen - ermöglicht das Automatisieren aller Kamerafunktionen.",pacc:"",ptab:"hidden",qiacc:"",qitab:"hidden",mdacc:"",mdtab:"hidden",iaacc:"",iatab:"hidden",auacc:"expanded",autab:"",hdacc:"hidden",hdtab:"hidden",fhdacc:"hidden",fhdtab:"hidden",sacc:"hidden",dlacc:"hidden",dltab:"hidden"})}),advancedUserGerRouter.get("/Tasker/Bewegungserkennung_Profil_Hinzufuegen/",function(e,a){a.render("./Advanced_User/Tasker_Motion_Detection_Add_Profile",{title:"Tasker Android App",ampimg:"/images/Search/AU_SearchThumb_CGICommands.jpg",headline:"Makro Tools zum Automatisieren der Kamera Funktionen",breadcrumbs:'<li><a href="/Erweitert/">Erweitert</a></li><li><a href="/Erweitert/Tasker/">Tasker</a></li><li><a href="/Erweitert/Tasker/Motion_Detection_Add_Profile/">Bewegungserkennung - Profil Hinzufügen</a></li>',canonical:"/Advanced_User/Tasker/Motion_Detection_Add_Profile/",description:"Tasker ist eine Android App zum erstellen von Makro Skripten, die zeitgesteuert oder durch Umgebungsvariablen des Handies ausgelöst werden. Dies - in Kombination mit unseren dokumentierten CGI Befehlen - ermöglicht das Automatisieren aller Kamerafunktionen.",pacc:"",ptab:"hidden",qiacc:"",qitab:"hidden",mdacc:"",mdtab:"hidden",iaacc:"",iatab:"hidden",auacc:"expanded",autab:"",hdacc:"hidden",hdtab:"hidden",fhdacc:"hidden",fhdtab:"hidden",sacc:"hidden",dlacc:"hidden",dltab:"hidden"})}),advancedUserGerRouter.get("/Tasker/Bewegungserkennung_Deaktivieren_Aufgabe_Hinzufuegen/",function(e,a){a.render("./Advanced_User/Tasker_Motion_Detection_Deactivate_Add_Task",{title:"Tasker Android App",ampimg:"/images/Search/AU_SearchThumb_CGICommands.jpg",headline:"Makro Tools zum Automatisieren der Kamera Funktionen",breadcrumbs:'<li><a href="/Erweitert/">Erweitert</a></li><li><a href="/Erweitert/Tasker/">Tasker</a></li><li><a href="/Erweitert/Tasker/Motion_Detection_Deactivate_Add_Task/">Bewegungserkennung Deaktivieren - Aufgabe Hinzufügen</a></li>',canonical:"/Advanced_User/Tasker/Motion_Detection_Deactivate_Add_Task/",description:"Tasker ist eine Android App zum erstellen von Makro Skripten, die zeitgesteuert oder durch Umgebungsvariablen des Handies ausgelöst werden. Dies - in Kombination mit unseren dokumentierten CGI Befehlen - ermöglicht das Automatisieren aller Kamerafunktionen.",pacc:"",ptab:"hidden",qiacc:"",qitab:"hidden",mdacc:"",mdtab:"hidden",iaacc:"",iatab:"hidden",auacc:"expanded",autab:"",hdacc:"hidden",hdtab:"hidden",fhdacc:"hidden",fhdtab:"hidden",sacc:"hidden",dlacc:"hidden",dltab:"hidden"})}),advancedUserGerRouter.get("/Tasker/Bewegungserkennung_Deaktivieren_Profil_Hinzufuegen/",function(e,a){a.render("./Advanced_User/Tasker_Motion_Detection_Deactivate_Add_Profile",{title:"Tasker Android App",ampimg:"/images/Search/AU_SearchThumb_CGICommands.jpg",headline:"Makro Tools zum Automatisieren der Kamera Funktionen",breadcrumbs:'<li><a href="/Erweitert/">Erweitert</a></li><li><a href="/Erweitert/Tasker/">Tasker</a></li><li><a href="/Erweitert/Tasker/Motion_Detection_Deactivate_Add_Profile/">Bewegungserkennung Deaktivieren - Profil Hinzufügen</a></li>',canonical:"/Advanced_User/Tasker/Motion_Detection_Deactivate_Add_Profile/",description:"Tasker ist eine Android App zum erstellen von Makro Skripten, die zeitgesteuert oder durch Umgebungsvariablen des Handies ausgelöst werden. Dies - in Kombination mit unseren dokumentierten CGI Befehlen - ermöglicht das Automatisieren aller Kamerafunktionen.",pacc:"",ptab:"hidden",qiacc:"",qitab:"hidden",mdacc:"",mdtab:"hidden",iaacc:"",iatab:"hidden",auacc:"expanded",autab:"",hdacc:"hidden",hdtab:"hidden",fhdacc:"hidden",fhdtab:"hidden",sacc:"hidden",dlacc:"hidden",dltab:"hidden"})}),advancedUserGerRouter.get("/Tasker/IR_Aktivieren_Shortcut_Hinzufuegen/",function(e,a){a.render("./Advanced_User/Tasker_IR_Add_Shortcut",{title:"Tasker Android App",ampimg:"/images/Search/AU_SearchThumb_CGICommands.jpg",headline:"Makro Tools zum Automatisieren der Kamera Funktionen",breadcrumbs:'<li><a href="/Erweitert/">Erweitert</a></li><li><a href="/Erweitert/Tasker/">Tasker</a></li><li><a href="/Erweitert/Tasker/Activate_IR_Add_Shortcut/">IR Aktivieren - Shortcut Hinzufügen</a></li>',canonical:"/Advanced_User/Tasker/Activate_IR_Add_Shortcut/",description:"Tasker ist eine Android App zum erstellen von Makro Skripten, die zeitgesteuert oder durch Umgebungsvariablen des Handies ausgelöst werden. Dies - in Kombination mit unseren dokumentierten CGI Befehlen - ermöglicht das Automatisieren aller Kamerafunktionen.",pacc:"",ptab:"hidden",qiacc:"",qitab:"hidden",mdacc:"",mdtab:"hidden",iaacc:"",iatab:"hidden",auacc:"expanded",autab:"",hdacc:"hidden",hdtab:"hidden",fhdacc:"hidden",fhdtab:"hidden",sacc:"hidden",dlacc:"hidden",dltab:"hidden"})}),advancedUserGerRouter.get("/Tasker/IR_Deaktivieren_Shortcut_Hinzufuegen/",function(e,a){a.render("./Advanced_User/Tasker_IR_Deactivate_Add_Shortcut",{title:"Tasker Android App",ampimg:"/images/Search/AU_SearchThumb_CGICommands.jpg",headline:"Makro Tools zum Automatisieren der Kamera Funktionen",breadcrumbs:'<li><a href="/Erweitert/">Erweitert</a></li><li><a href="/Erweitert/Tasker/">Tasker</a></li><li><a href="/Erweitert/Tasker/Deactivate_IR_Add_Shortcut/">IR Deaktivieren - Shortcut Hinzufügen</a></li>',canonical:"/Advanced_User/Tasker/Deactivate_IR_Add_Shortcut/",description:"Tasker ist eine Android App zum erstellen von Makro Skripten, die zeitgesteuert oder durch Umgebungsvariablen des Handies ausgelöst werden. Dies - in Kombination mit unseren dokumentierten CGI Befehlen - ermöglicht das Automatisieren aller Kamerafunktionen.",pacc:"",ptab:"hidden",qiacc:"",qitab:"hidden",mdacc:"",mdtab:"hidden",iaacc:"",iatab:"hidden",auacc:"expanded",autab:"",hdacc:"hidden",hdtab:"hidden",fhdacc:"hidden",fhdtab:"hidden",sacc:"hidden",dlacc:"hidden",dltab:"hidden"})}),advancedUserGerRouter.get("/Tasker/Nachtsicht_Aktivieren_Aufgabe/",function(e,a){a.render("./Advanced_User/Tasker_IR_Add_Task",{title:"Tasker Android App",ampimg:"/images/Search/AU_SearchThumb_CGICommands.jpg",headline:"Makro Tools zum Automatisieren der Kamera Funktionen",breadcrumbs:'<li><a href="/Erweitert/">Erweitert</a></li><li><a href="/Erweitert/Tasker/">Tasker</a></li><li><a href="/Erweitert/Tasker/Activate_Nightvision_Task/">Nachtsicht Aktivieren</a></li>',canonical:"/Advanced_User/Tasker/Activate_Nightvision_Task/",description:"Tasker ist eine Android App zum erstellen von Makro Skripten, die zeitgesteuert oder durch Umgebungsvariablen des Handies ausgelöst werden. Dies - in Kombination mit unseren dokumentierten CGI Befehlen - ermöglicht das Automatisieren aller Kamerafunktionen.",pacc:"",ptab:"hidden",qiacc:"",qitab:"hidden",mdacc:"",mdtab:"hidden",iaacc:"",iatab:"hidden",auacc:"expanded",autab:"",hdacc:"hidden",hdtab:"hidden",fhdacc:"hidden",fhdtab:"hidden",sacc:"hidden",dlacc:"hidden",dltab:"hidden"})}),advancedUserGerRouter.get("/Tasker/Nachtsicht_Deaktivieren_Aufgabe/",function(e,a){a.render("./Advanced_User/Tasker_IR_Deactivate_Add_Task",{title:"Tasker Android App",ampimg:"/images/Search/AU_SearchThumb_CGICommands.jpg",headline:"Makro Tools zum Automatisieren der Kamera Funktionen",breadcrumbs:'<li><a href="/Erweitert/">Erweitert</a></li><li><a href="/Erweitert/Tasker/">Tasker</a></li><li><a href="/Erweitert/Tasker/Deactivate_Nightvision_Task/">Nachtsicht Deaktivieren</a></li>',canonical:"/Advanced_User/Tasker/Deactivate_Nightvision_Task/",description:"Tasker ist eine Android App zum erstellen von Makro Skripten, die zeitgesteuert oder durch Umgebungsvariablen des Handies ausgelöst werden. Dies - in Kombination mit unseren dokumentierten CGI Befehlen - ermöglicht das Automatisieren aller Kamerafunktionen.",pacc:"",ptab:"hidden",qiacc:"",qitab:"hidden",mdacc:"",mdtab:"hidden",iaacc:"",iatab:"hidden",auacc:"expanded",autab:"",hdacc:"hidden",hdtab:"hidden",fhdacc:"hidden",fhdtab:"hidden",sacc:"hidden",dlacc:"hidden",dltab:"hidden"})}),advancedUserGerRouter.get("/Tasker/Nachtsicht_Szene/",function(e,a){a.render("./Advanced_User/Tasker_IR_Add_Scene",{title:"Tasker Android App",ampimg:"/images/Search/AU_SearchThumb_CGICommands.jpg",headline:"Makro Tools zum Automatisieren der Kamera Funktionen",breadcrumbs:'<li><a href="/Erweitert/">Erweitert</a></li><li><a href="/Erweitert/Tasker/">Tasker</a></li><li><a href="/Erweitert/Tasker/Nightvision_Scene/">Nachtsicht Szene</a></li>',canonical:"/Advanced_User/Tasker/Nightvision_Scene/",description:"Tasker ist eine Android App zum erstellen von Makro Skripten, die zeitgesteuert oder durch Umgebungsvariablen des Handies ausgelöst werden. Dies - in Kombination mit unseren dokumentierten CGI Befehlen - ermöglicht das Automatisieren aller Kamerafunktionen.",pacc:"",ptab:"hidden",qiacc:"",qitab:"hidden",mdacc:"",mdtab:"hidden",iaacc:"",iatab:"hidden",auacc:"expanded",autab:"",hdacc:"hidden",hdtab:"hidden",fhdacc:"hidden",fhdtab:"hidden",sacc:"hidden",dlacc:"hidden",dltab:"hidden"})}),advancedUserGerRouter.get("/Tasker/Zeitplan_PTZ_Aufgabe/",function(e,a){a.render("./Advanced_User/Tasker_Schedule_Add_PTZ_Task",{title:"Tasker Android App",ampimg:"/images/Search/AU_SearchThumb_CGICommands.jpg",headline:"Makro Tools zum Automatisieren der Kamera Funktionen",breadcrumbs:'<li><a href="/Erweitert/">Erweitert</a></li><li><a href="/Erweitert/Tasker/">Tasker</a></li><li><a href="/Erweitert/Tasker/Zeitplan_PTZ_Aufgabe/">Zeitplan PTZ Aufgabe</a></li>',canonical:"/Advanced_User/Tasker/Schedule_PTZ_Task/",description:"Tasker ist eine Android App zum erstellen von Makro Skripten, die zeitgesteuert oder durch Umgebungsvariablen des Handies ausgelöst werden. Dies - in Kombination mit unseren dokumentierten CGI Befehlen - ermöglicht das Automatisieren aller Kamerafunktionen.",pacc:"",ptab:"hidden",qiacc:"",qitab:"hidden",mdacc:"",mdtab:"hidden",iaacc:"",iatab:"hidden",auacc:"expanded",autab:"",hdacc:"hidden",hdtab:"hidden",fhdacc:"hidden",fhdtab:"hidden",sacc:"hidden",dlacc:"hidden",dltab:"hidden"})}),advancedUserGerRouter.get("/Tasker/Zeitplan_Alarm_Aufgabe/",function(e,a){a.render("./Advanced_User/Tasker_Schedule_Add_Alarm_Task",{title:"Tasker Android App",ampimg:"/images/Search/AU_SearchThumb_CGICommands.jpg",headline:"Makro Tools zum Automatisieren der Kamera Funktionen",breadcrumbs:'<li><a href="/Erweitert/">Erweitert</a></li><li><a href="/Erweitert/Tasker/">Tasker</a></li><li><a href="/Erweitert/Tasker/Zeitplan_Alarm_Aufgabe/">Zeitplan Alarm Aufgabe</a></li>',canonical:"/Advanced_User/Tasker/Schedule_Alarm_Task/",description:"Tasker ist eine Android App zum erstellen von Makro Skripten, die zeitgesteuert oder durch Umgebungsvariablen des Handies ausgelöst werden. Dies - in Kombination mit unseren dokumentierten CGI Befehlen - ermöglicht das Automatisieren aller Kamerafunktionen.",pacc:"",ptab:"hidden",qiacc:"",qitab:"hidden",mdacc:"",mdtab:"hidden",iaacc:"",iatab:"hidden",auacc:"expanded",autab:"",hdacc:"hidden",hdtab:"hidden",fhdacc:"hidden",fhdtab:"hidden",sacc:"hidden",dlacc:"hidden",dltab:"hidden"})}),advancedUserGerRouter.get("/Tasker/Zeitplan_Profil/",function(e,a){a.render("./Advanced_User/Tasker_Schedule_Add_Profile",{title:"Tasker Android App",ampimg:"/images/Search/AU_SearchThumb_CGICommands.jpg",headline:"Makro Tools zum Automatisieren der Kamera Funktionen",breadcrumbs:'<li><a href="/Erweitert/">Erweitert</a></li><li><a href="/Erweitert/Tasker/">Tasker</a></li><li><a href="/Erweitert/Tasker/Zeitplan_Profil/">Zeitplan Profil</a></li>',canonical:"/Advanced_User/Tasker/Schedule_Profile/",description:"Tasker ist eine Android App zum erstellen von Makro Skripten, die zeitgesteuert oder durch Umgebungsvariablen des Handies ausgelöst werden. Dies - in Kombination mit unseren dokumentierten CGI Befehlen - ermöglicht das Automatisieren aller Kamerafunktionen.",pacc:"",ptab:"hidden",qiacc:"",qitab:"hidden",mdacc:"",mdtab:"hidden",iaacc:"",iatab:"hidden",auacc:"expanded",autab:"",hdacc:"hidden",hdtab:"hidden",fhdacc:"hidden",fhdtab:"hidden",sacc:"hidden",dlacc:"hidden",dltab:"hidden"})}),advancedUserGerRouter.get("/WebUI_Wiederherstellen/",function(e,a){a.render("./Advanced_User/Restore_WebUI",{title:"Wiederherstellen der WebUI nach einem fehlerhaften Update",ampimg:"/images/Search/AU_SearchThumb_ResetAfterWebUIError.jpg",headline:"Wiederherstellen der WebUI nach einem fehlerhaften Update",breadcrumbs:'<li><a href="/">Home</a></li><li><a href="/Erweitert/">Erweitert</a></li><li><a href="/Erweitert/WebUI_Wiederherstellen/">WebUI Wiederherstellen</a></li>',canonical:"/Advanced_User/Restore_WebUI/",description:"Sollte beim Aktualisieren der Weboberfläche ein Fehler aufgetreten sein, können Sie diese ohne Probleme mit unserem Kamera Tool oder unserem Simple Update Tool erneut aufspielen.",pacc:"",ptab:"hidden",qiacc:"",qitab:"hidden",mdacc:"",mdtab:"hidden",iaacc:"",iatab:"hidden",auacc:"expanded",autab:"",hdacc:"hidden",hdtab:"hidden",fhdacc:"hidden",fhdtab:"hidden",sacc:"hidden",dlacc:"hidden",dltab:"hidden"})}),advancedUserGerRouter.get("/Firmware_Wiederherstellen/",function(e,a){a.render("./Advanced_User/Restore_Firmware",{title:"Wiederherstellen der Firmware nach einem fehlerhaften Update",ampimg:"/images/Search/AU_SearchThumb_ResetAfterFirmwareError.jpg",headline:"Wiederherstellen der Firmware nach einem fehlerhaften Update",breadcrumbs:'<li><a href="/">Home</a></li><li><a href="/Erweitert/">Erweitert</a></li><li><a href="/Erweitert/Firmware_Wiederherstellen/">Firmware Wiederherstellen</a></li>',canonical:"/Advanced_User/Restore_Firmware/",description:"Reagiert Ihre HD Kamera nicht mehr nach einem fehlgeschlagenen Firmware Update? Lernen Sie hier wie Sie die Software wieder herstellen. Profiwissen benötigt!",pacc:"",ptab:"hidden",qiacc:"",qitab:"hidden",mdacc:"",mdtab:"hidden",iaacc:"",iatab:"hidden",auacc:"expanded",autab:"",hdacc:"hidden",hdtab:"hidden",fhdacc:"hidden",fhdtab:"hidden",sacc:"hidden",dlacc:"hidden",dltab:"hidden"})}),advancedUserGerRouter.get("/Firmware_Wiederherstellen/VGA_Modelle",function(e,a){a.render("./Advanced_User/Restore_Firmware_VGA",{title:"Wiederherstellen der Firmware nach einem fehlerhaften Update",ampimg:"/images/Search/AU_SearchThumb_ResetAfterFirmwareError.jpg",headline:"Wiederherstellen der Firmware nach einem fehlerhaften Update",breadcrumbs:'<li><a href="/Erweitert/">Erweitert</a></li><li><a href="/Erweitert/Firmware_Wiederherstellen/">Firmware Wiederherstellen</a></li><li><a href="/Erweitert/Firmware_Wiederherstellen/VGA_Modelle/">VGA Modelle</a></li>',canonical:"/Advanced_User/Restore_Firmware/VGA_Models",description:"Reagiert Ihre VGA Kamera nicht mehr nach einem fehlgeschlagenen Firmware Update? Lernen Sie hier wie Sie die Software wieder herstellen. Profiwissen benötigt!",pacc:"",ptab:"hidden",qiacc:"",qitab:"hidden",mdacc:"",mdtab:"hidden",iaacc:"",iatab:"hidden",auacc:"expanded",autab:"",hdacc:"hidden",hdtab:"hidden",fhdacc:"hidden",fhdtab:"hidden",sacc:"hidden",dlacc:"hidden",dltab:"hidden"})}),advancedUserGerRouter.get("/CCTV_vs_IP/",function(e,a){a.render("./Advanced_User/CCTV_vs_IP",{title:"Unterschied zwischen Analog und IP Kameras",ampimg:"/images/Search/AU_SearchThumb_IPvsCCTV.jpg",headline:"Unterschied zwischen Analog und IP Kameras",breadcrumbs:'<li><a href="/">Home</a></li><li><a href="/Erweitert/">Erweitert</a></li><li><a href="/Erweitert/CCTV_vs_IP/">CCTV vs IP</a></li>',canonical:"/Advanced_User/CCTV_vs_IP/",description:"Wenn Sie sich über Überwachungskameras informieren, werden Sie über die Diskussion stolpern - benötigt man eine IP oder Analogkamera?",pacc:"",ptab:"hidden",qiacc:"",qitab:"hidden",mdacc:"",mdtab:"hidden",iaacc:"",iatab:"hidden",auacc:"expanded",autab:"",hdacc:"hidden",hdtab:"hidden",fhdacc:"hidden",fhdtab:"hidden",sacc:"hidden",dlacc:"hidden",dltab:"hidden"})}),advancedUserGerRouter.get("/VPN_AVM_Fritzbox/",function(e,a){a.render("./Advanced_User/VPN_AVM_Fritzbox_Windows",{title:"VPN in AVM Fritzbox",ampimg:"/images/Search/AU_SearchThumb_VPN.jpg",headline:"Virtual Private Network für den Fernzugriff auf Ihre INSTAR IP Kamera",breadcrumbs:'<li><a href="/">Home</a></li><li><a href="/Erweitert/">Erweitert</a></li><li><a href="/Erweitert/VPN_AVM_Fritzbox/">VPN AVM Fritzbox</a></li>',canonical:"/Advanced_User/VPN_AVM_Fritzbox/",description:"Vermeiden Sie das Öffnen eines Ports an Ihrer AVM Fritzbox, indem Sie ein virtuelles, privates Netzwerk für den Fernzugriff nutzen.",pacc:"",ptab:"hidden",qiacc:"",qitab:"hidden",mdacc:"",mdtab:"hidden",iaacc:"",iatab:"hidden",auacc:"expanded",autab:"",hdacc:"hidden",hdtab:"hidden",fhdacc:"hidden",fhdtab:"hidden",sacc:"hidden",dlacc:"hidden",dltab:"hidden"})}),module.exports=advancedUserGerRouter;