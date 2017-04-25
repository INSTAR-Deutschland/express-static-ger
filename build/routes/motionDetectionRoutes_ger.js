var express=require("express"),motionDetectionGerRouter=express.Router();motionDetectionGerRouter.get("/",function(e,a){a.render("./Motion_Detection/Motion_Detection",{title:"Bewegungserkennung",ampimg:"/images/Search/MD_SearchThumb_MDSetup.jpg",headline:"Bewegungserkennung"})}),motionDetectionGerRouter.get("/Einrichtung/",function(e,a){a.render("./Motion_Detection/Motion_Detection_Setup",{title:"Bewegungserkennung Einrichtung",ampimg:"/images/Search/MD_SearchThumb_MDSetup.jpg",headline:"Bewegungserkennung Einrichtung",breadcrumbs:'<li><a href="/">Home</a></li><li><a href="/Bewegungserkennung/">Bewegungserkennung</a></li><li><a href="/Bewegungserkennung/Einrichtung/">Einrichtung</a></li>',pacc:"",ptab:"hidden",qiacc:"",qitab:"hidden",mdacc:"expanded",mdtab:"",iaacc:"",iatab:"hidden",auacc:"",autab:"hidden",hdacc:"hidden",hdtab:"hidden",fhdacc:"hidden",fhdtab:"hidden",sacc:"hidden",dlacc:"hidden",dltab:"hidden"})}),motionDetectionGerRouter.get("/Einrichtung/720p_Serie/",function(e,a){a.render("./Motion_Detection/Motion_Detection_Setup_720p",{title:"Bewegungserkennung Einrichtung",ampimg:"/images/Search/MD_SearchThumb_MDSetup.jpg",headline:"Bewegungserkennung Einrichtung",breadcrumbs:'<li><a href="/">Home</a></li><li><a href="/Bewegungserkennung/">Bewegungserkennung</a></li><li><a href="/Bewegungserkennung/Einrichtung/">Einrichtung</a></li><li><a href="/Bewegungserkennung/Einrichtung/720p_Serie/">720p Serie</a></li>',pacc:"",ptab:"hidden",qiacc:"",qitab:"hidden",mdacc:"expanded",mdtab:"",iaacc:"",iatab:"hidden",auacc:"",autab:"hidden",hdacc:"hidden",hdtab:"hidden",fhdacc:"hidden",fhdtab:"hidden",sacc:"hidden",dlacc:"hidden",dltab:"hidden"})}),motionDetectionGerRouter.get("/Einrichtung/VGA_Serie/",function(e,a){a.render("./Motion_Detection/Motion_Detection_Setup_VGA",{title:"Bewegungserkennung Setup",ampimg:"/images/Search/MD_SearchThumb_MDSetup.jpg",headline:"Bewegungserkennung Setup",breadcrumbs:'<li><a href="/">Home</a></li><li><a href="/Bewegungserkennung/">Bewegungserkennung</a></li><li><a href="/Bewegungserkennung/Einrichtung/">Einrichtung</a></li><li><a href="/Bewegungserkennung/Einrichtung/VGA_Serie/">VGA Serie</a></li>',pacc:"",ptab:"hidden",qiacc:"",qitab:"hidden",mdacc:"expanded",mdtab:"",iaacc:"",iatab:"hidden",auacc:"",autab:"hidden",hdacc:"hidden",hdtab:"hidden",fhdacc:"hidden",fhdtab:"hidden",sacc:"hidden",dlacc:"hidden",dltab:"hidden"})}),motionDetectionGerRouter.get("/Alarmbenachrichtigung/",function(e,a){a.render("./Motion_Detection/Alarm_Notification",{title:"Alarmbenachrichtigung 1080p Serie",ampimg:"/images/Search/MD_SearchThumb_AlarmNotification.jpg",headline:"Alarmbenachrichtigung 1080p Serie",breadcrumbs:'<li><a href="/">Home</a></li><li><a href="/Bewegungserkennung/">Bewegungserkennung</a></li><li><a href="/Bewegungserkennung/Alarmbenachrichtigung/">Alarmbenachrichtigung</a></li>',pacc:"",ptab:"hidden",qiacc:"",qitab:"hidden",mdacc:"expanded",mdtab:"",iaacc:"",iatab:"hidden",auacc:"",autab:"hidden",hdacc:"hidden",hdtab:"hidden",fhdacc:"hidden",fhdtab:"hidden",sacc:"hidden",dlacc:"hidden",dltab:"hidden"})}),motionDetectionGerRouter.get("/Alarmbenachrichtigung/720p_Serie/",function(e,a){a.render("./Motion_Detection/Alarm_Notification_720p",{title:"Alarmbenachrichtigung 720p Serie",ampimg:"/images/Search/MD_SearchThumb_AlarmNotification.jpg",headline:"Alarmbenachrichtigung 720p Serie",breadcrumbs:'<li><a href="/">Home</a></li><li><a href="/Bewegungserkennung/">Bewegungserkennung</a></li><li><a href="/Bewegungserkennung/Alarmbenachrichtigung/">Alarmbenachrichtigung</a></li><li><a href="/Bewegungserkennung/Alarmbenachrichtigung/720p_Serie/">720p Serie</a></li>',pacc:"",ptab:"hidden",qiacc:"",qitab:"hidden",mdacc:"expanded",mdtab:"",iaacc:"",iatab:"hidden",auacc:"",autab:"hidden",hdacc:"hidden",hdtab:"hidden",fhdacc:"hidden",fhdtab:"hidden",sacc:"hidden",dlacc:"hidden",dltab:"hidden"})}),motionDetectionGerRouter.get("/Alarmbenachrichtigung/VGA_Serie/",function(e,a){a.render("./Motion_Detection/Alarm_Notification_VGA",{title:"Alarmbenachrichtigung VGA Serie",ampimg:"/images/Search/MD_SearchThumb_AlarmNotification.jpg",headline:"Alarmbenachrichtigung VGA Serie",breadcrumbs:'<li><a href="/">Home</a></li><li><a href="/Bewegungserkennung/">Bewegungserkennung</a></li><li><a href="/Bewegungserkennung/Alarmbenachrichtigung/">Alarmbenachrichtigung</a></li><li><a href="/Bewegungserkennung/Alarmbenachrichtigung/VGA_Serie/">VGA Serie</a></li>',pacc:"",ptab:"hidden",qiacc:"",qitab:"hidden",mdacc:"expanded",mdtab:"",iaacc:"",iatab:"hidden",auacc:"",autab:"hidden",hdacc:"hidden",hdtab:"hidden",fhdacc:"hidden",fhdtab:"hidden",sacc:"hidden",dlacc:"hidden",dltab:"hidden"})}),motionDetectionGerRouter.get("/Alarmbenachrichtigung/Fehlerbehebung/",function(e,a){a.render("./Motion_Detection/Alarm_Notification_Troubles",{title:"Alarmbenachrichtigung Fehlerbehebung",ampimg:"/images/Search/MD_SearchThumb_AlarmNotification.jpg",headline:"Alarmbenachrichtigung Fehlerbehebung",breadcrumbs:'<li><a href="/">Home</a></li><li><a href="/Bewegungserkennung/">Bewegungserkennung</a></li><li><a href="/Bewegungserkennung/Alarmbenachrichtigung/">Alarmbenachrichtigung</a></li><li><a href="/Bewegungserkennung/Alarmbenachrichtigung/Fehlerbehebung/">Fehlerbehebung</a></li>',pacc:"",ptab:"hidden",qiacc:"",qitab:"hidden",mdacc:"expanded",mdtab:"",iaacc:"",iatab:"hidden",auacc:"",autab:"hidden",hdacc:"hidden",hdtab:"hidden",fhdacc:"hidden",fhdtab:"hidden",sacc:"hidden",dlacc:"hidden",dltab:"hidden"})}),motionDetectionGerRouter.get("/Alarmbenachrichtigung/SMTP_Server",function(e,a){a.render("./Motion_Detection/Alarm_Notification_SMTP_Servers",{title:"SMTP Server",ampimg:"/images/Search/MD_SearchThumb_AlarmNotification.jpg",headline:"Alarmbenachrichtigung - SMTP Server",breadcrumbs:'<li><a href="/">Home</a></li><li><a href="/Bewegungserkennung/">Bewegungserkennung</a></li><li><a href="/Bewegungserkennung/Alarmbenachrichtigung/">Alarmbenachrichtigung</a></li><li><a href="/Bewegungserkennung/Alarmbenachrichtigung/SMTP_Server/">SMTP Server</a></li>',pacc:"",ptab:"hidden",qiacc:"",qitab:"hidden",mdacc:"expanded",mdtab:"",iaacc:"",iatab:"hidden",auacc:"",autab:"hidden",hdacc:"hidden",hdtab:"hidden",fhdacc:"hidden",fhdtab:"hidden",sacc:"hidden",dlacc:"hidden",dltab:"hidden"})}),motionDetectionGerRouter.get("/Alarm_Aufnahme/",function(e,a){a.render("./Motion_Detection/Alarm_Recording",{title:"Alarm Aufnahme",ampimg:"/images/Search/MD_SearchThumb_AlarmRecording.jpg",headline:"Alarm Aufnahme",breadcrumbs:'<li><a href="/">Home</a></li><li><a href="/Bewegungserkennung/">Bewegungserkennung</a></li><li><a href="/Bewegungserkennung/Alarm_Aufnahme/">Alarm Aufnahme</a></li>',pacc:"",ptab:"hidden",qiacc:"",qitab:"hidden",mdacc:"expanded",mdtab:"",iaacc:"",iatab:"hidden",auacc:"",autab:"hidden",hdacc:"hidden",hdtab:"hidden",fhdacc:"hidden",fhdtab:"hidden",sacc:"hidden",dlacc:"hidden",dltab:"hidden"})}),motionDetectionGerRouter.get("/SD_Karten_Zugriff/",function(e,a){a.render("./Motion_Detection/SD_Card_Access",{title:"SD Karten Zugriff",ampimg:"/images/Search/MD_SearchThumb_SDCardAccess.jpg",headline:"SD Karten Zugriff",breadcrumbs:'<li><a href="/">Home</a></li><li><a href="/Bewegungserkennung/">Bewegungserkennung</a></li><li><a href="/Bewegungserkennung/SD_Karten_Zugriff/">SD Karten Zugriff</a></li>',pacc:"",ptab:"hidden",qiacc:"",qitab:"hidden",mdacc:"expanded",mdtab:"",iaacc:"",iatab:"hidden",auacc:"",autab:"hidden",hdacc:"hidden",hdtab:"hidden",fhdacc:"hidden",fhdtab:"hidden",sacc:"hidden",dlacc:"hidden",dltab:"hidden"})}),motionDetectionGerRouter.get("/SD_Karten_Zugriff/Bitkinex/",function(e,a){a.render("./Motion_Detection/SD_Card_Access_Bitkinex",{title:"SD Karten Zugriff - Bitkinex",ampimg:"/images/Search/MD_SearchThumb_SDCardAccess.jpg",headline:"SD Karten Zugriff - Bitkinex",breadcrumbs:'<li><a href="/">Home</a></li><li><a href="/Bewegungserkennung/">Bewegungserkennung</a></li><li><a href="/Bewegungserkennung/SD_Karten_Zugriff/">SD Karten Zugriff</a></li><li><a href="/Bewegungserkennung/SD_Karten_Zugriff/Bitkinex/">Bitkinex</a></li>',pacc:"",ptab:"hidden",qiacc:"",qitab:"hidden",mdacc:"expanded",mdtab:"",iaacc:"",iatab:"hidden",auacc:"",autab:"hidden",hdacc:"hidden",hdtab:"hidden",fhdacc:"hidden",fhdtab:"hidden",sacc:"hidden",dlacc:"hidden",dltab:"hidden"})}),motionDetectionGerRouter.get("/SD_Karten_Zugriff/CuteFTP",function(e,a){a.render("./Motion_Detection/SD_Card_Access_CuteFTP",{title:"SD Karten Zugriff - CuteFTP",ampimg:"/images/Search/MD_SearchThumb_SDCardAccess.jpg",headline:"SD Karten Zugriff - CuteFTP",breadcrumbs:'<li><a href="/">Home</a></li><li><a href="/Bewegungserkennung/">Bewegungserkennung</a></li><li><a href="/Bewegungserkennung/SD_Karten_Zugriff/">SD Karten Zugriff</a></li><li><a href="/Bewegungserkennung/SD_Karten_Zugriff/CuteFTP/">CuteFTP</a></li>',pacc:"",ptab:"hidden",qiacc:"",qitab:"hidden",mdacc:"expanded",mdtab:"",iaacc:"",iatab:"hidden",auacc:"",autab:"hidden",hdacc:"hidden",hdtab:"hidden",fhdacc:"hidden",fhdtab:"hidden",sacc:"hidden",dlacc:"hidden",dltab:"hidden"})}),motionDetectionGerRouter.get("/SD_Karten_Zugriff/DownThemAll",function(e,a){a.render("./Motion_Detection/SD_Card_Access_DownThemAll",{title:"SD Karten Zugriff - DownThemAll",ampimg:"/images/Search/MD_SearchThumb_SDCardAccess.jpg",headline:"SD Karten Zugriff - DownThemAll",breadcrumbs:'<li><a href="/">Home</a></li><li><a href="/Bewegungserkennung/">Bewegungserkennung</a></li><li><a href="/Bewegungserkennung/SD_Karten_Zugriff/">SD Karten Zugriff</a></li><li><a href="/Bewegungserkennung/SD_Karten_Zugriff/DownThemAll/">DownThemAll</a></li>',pacc:"",ptab:"hidden",qiacc:"",qitab:"hidden",mdacc:"expanded",mdtab:"",iaacc:"",iatab:"hidden",auacc:"",autab:"hidden",hdacc:"hidden",hdtab:"hidden",fhdacc:"hidden",fhdtab:"hidden",sacc:"hidden",dlacc:"hidden",dltab:"hidden"})}),motionDetectionGerRouter.get("/SD_Karten_Zugriff/Interachy",function(e,a){a.render("./Motion_Detection/SD_Card_Access_Interarchy",{title:"SD Karten Zugriff - Interachy",ampimg:"/images/Search/MD_SearchThumb_SDCardAccess.jpg",headline:"SD Karten Zugriff - Interachy",breadcrumbs:'<li><a href="/">Home</a></li><li><a href="/Bewegungserkennung/">Bewegungserkennung</a></li><li><a href="/Bewegungserkennung/SD_Karten_Zugriff/">SD Karten Zugriff</a></li><li><a href="/Bewegungserkennung/SD_Karten_Zugriff/Interachy/">Interachy</a></li>',pacc:"",ptab:"hidden",qiacc:"",qitab:"hidden",mdacc:"expanded",mdtab:"",iaacc:"",iatab:"hidden",auacc:"",autab:"hidden",hdacc:"hidden",hdtab:"hidden",fhdacc:"hidden",fhdtab:"hidden",sacc:"hidden",dlacc:"hidden",dltab:"hidden"})}),motionDetectionGerRouter.get("/SD_Karten_Zugriff/DeepVacuum",function(e,a){a.render("./Motion_Detection/SD_Card_Access_DeepVacuum",{title:"SD Karten Zugriff - DeepVacuum",ampimg:"/images/Search/MD_SearchThumb_SDCardAccess.jpg",headline:"SD Karten Zugriff - DeepVacuum",breadcrumbs:'<li><a href="/">Home</a></li><li><a href="/Bewegungserkennung/">Bewegungserkennung</a></li><li><a href="/Bewegungserkennung/SD_Karten_Zugriff/">SD Karten Zugriff</a></li><li><a href="/Bewegungserkennung/SD_Karten_Zugriff/DeepVacuum/">DeepVacuum</a></li>',pacc:"",ptab:"hidden",qiacc:"",qitab:"hidden",mdacc:"expanded",mdtab:"",iaacc:"",iatab:"hidden",auacc:"",autab:"hidden",hdacc:"hidden",hdtab:"hidden",fhdacc:"hidden",fhdtab:"hidden",sacc:"hidden",dlacc:"hidden",dltab:"hidden"})}),motionDetectionGerRouter.get("/SD_Karten_Zugriff/SiteSucker",function(e,a){a.render("./Motion_Detection/SD_Card_Access_SiteSucker",{title:"SD Karten Zugriff - SiteSucker",ampimg:"/images/Search/MD_SearchThumb_SDCardAccess.jpg",headline:"SD Karten Zugriff - SiteSucker",breadcrumbs:'<li><a href="/">Home</a></li><li><a href="/Bewegungserkennung/">Bewegungserkennung</a></li><li><a href="/Bewegungserkennung/SD_Karten_Zugriff/">SD Karten Zugriff</a></li><li><a href="/Bewegungserkennung/SD_Karten_Zugriff/SiteSucker/">SiteSucker</a></li>',pacc:"",ptab:"hidden",qiacc:"",qitab:"hidden",mdacc:"expanded",mdtab:"",iaacc:"",iatab:"hidden",auacc:"",autab:"hidden",hdacc:"hidden",hdtab:"hidden",fhdacc:"hidden",fhdtab:"hidden",sacc:"hidden",dlacc:"hidden",dltab:"hidden"})}),motionDetectionGerRouter.get("/SD_Karten_Zugriff/SimpleWget",function(e,a){a.render("./Motion_Detection/SD_Card_Access_SimpleWget",{title:"SD Karten Zugriff - SimpleWget",ampimg:"/images/Search/MD_SearchThumb_SDCardAccess.jpg",headline:"SD Karten Zugriff - SimpleWget",breadcrumbs:'<li><a href="/">Home</a></li><li><a href="/Bewegungserkennung/">Bewegungserkennung</a></li><li><a href="/Bewegungserkennung/SD_Karten_Zugriff/">SD Karten Zugriff</a></li><li><a href="/Bewegungserkennung/SD_Karten_Zugriff/SimpleWget/">SimpleWget</a></li>',pacc:"",ptab:"hidden",qiacc:"",qitab:"hidden",mdacc:"expanded",mdtab:"",iaacc:"",iatab:"hidden",auacc:"",autab:"hidden",hdacc:"hidden",hdtab:"hidden",fhdacc:"hidden",fhdtab:"hidden",sacc:"hidden",dlacc:"hidden",dltab:"hidden"})}),motionDetectionGerRouter.get("/Alarm_FTP_Upload/",function(e,a){a.render("./Motion_Detection/Alarm_FTP_Upload",{title:"Alarm FTP Upload 1080p",ampimg:"/images/Search/MD_SearchThumb_FTPSettingsAlarmUpload.jpg",headline:"Alarm FTP Upload 1080p",breadcrumbs:'<li><a href="/">Home</a></li><li><a href="/Bewegungserkennung/">Bewegungserkennung</a></li><li><a href="/Bewegungserkennung/Alarm_FTP_Upload/">Alarm FTP Upload</a></li>',pacc:"",ptab:"hidden",qiacc:"",qitab:"hidden",mdacc:"expanded",mdtab:"",iaacc:"",iatab:"hidden",auacc:"",autab:"hidden",hdacc:"hidden",hdtab:"hidden",fhdacc:"hidden",fhdtab:"hidden",sacc:"hidden",dlacc:"hidden",dltab:"hidden"})}),motionDetectionGerRouter.get("/Alarm_FTP_Upload/720p_Serie/",function(e,a){a.render("./Motion_Detection/Alarm_FTP_Upload_720p",{title:"Alarm FTP Upload 720p Serie",ampimg:"/images/Search/MD_SearchThumb_FTPSettingsAlarmUpload.jpg",headline:"Alarm FTP Upload 720p Serie",breadcrumbs:'<li><a href="/">Home</a></li><li><a href="/Bewegungserkennung/">Bewegungserkennung</a></li><li><a href="/Bewegungserkennung/Alarm_FTP_Upload/">Alarm FTP Upload</a></li><li><a href="/Bewegungserkennung/Alarm_FTP_Upload/720p_Serie/">720p Serie</a></li>',pacc:"",ptab:"hidden",qiacc:"",qitab:"hidden",mdacc:"expanded",mdtab:"",iaacc:"",iatab:"hidden",auacc:"",autab:"hidden",hdacc:"hidden",hdtab:"hidden",fhdacc:"hidden",fhdtab:"hidden",sacc:"hidden",dlacc:"hidden",dltab:"hidden"})}),motionDetectionGerRouter.get("/Alarm_FTP_Upload/VGA_Serie/",function(e,a){a.render("./Motion_Detection/Alarm_FTP_Upload_VGA",{title:"Alarm FTP Upload VGA Serie",ampimg:"/images/Search/MD_SearchThumb_FTPSettingsAlarmUpload.jpg",headline:"Alarm FTP Upload VGA Serie",breadcrumbs:'<li><a href="/">Home</a></li><li><a href="/Bewegungserkennung/">Bewegungserkennung</a></li><li><a href="/Bewegungserkennung/Alarm_FTP_Upload/">Alarm FTP Upload</a></li><li><a href="/Bewegungserkennung/Alarm_FTP_Upload/VGA_Series/">VGA Serie</a></li>',pacc:"",ptab:"hidden",qiacc:"",qitab:"hidden",mdacc:"expanded",mdtab:"",iaacc:"",iatab:"hidden",auacc:"",autab:"hidden",hdacc:"hidden",hdtab:"hidden",fhdacc:"hidden",fhdtab:"hidden",sacc:"hidden",dlacc:"hidden",dltab:"hidden"})}),motionDetectionGerRouter.get("/Router_als_FTP_Server/",function(e,a){a.render("./Motion_Detection/Router_as_a_FTP_Server",{title:"Router oder NAS als FTP Server",ampimg:"/images/Search/MD_SearchThumb_RouterAsFTPServer.jpg",headline:"Router oder NAS als FTP Server",breadcrumbs:'<li><a href="/">Home</a></li><li><a href="/Bewegungserkennung/">Bewegungserkennung</a></li><li><a href="/Bewegungserkennung/Router_als_FTP_Server/">Router als FTP Server</a></li>',pacc:"",ptab:"hidden",qiacc:"",qitab:"hidden",mdacc:"expanded",mdtab:"",iaacc:"",iatab:"hidden",auacc:"",autab:"hidden",hdacc:"hidden",hdtab:"hidden",fhdacc:"hidden",fhdtab:"hidden",sacc:"hidden",dlacc:"hidden",dltab:"hidden"})}),motionDetectionGerRouter.get("/Router_als_FTP_Server/AVM_Fritzbox_als_FTP_Server",function(e,a){a.render("./Motion_Detection/AVM_Fritzbox_as_FTP_Server",{title:"AVM Fritzbox als FTP Server",ampimg:"/images/Search/MD_SearchThumb_RouterAsFTPServer.jpg",headline:"Router oder NAS als FTP Server",breadcrumbs:'<li><a href="/">Home</a></li><li><a href="/Bewegungserkennung/">Bewegungserkennung</a></li><li><a href="/Bewegungserkennung/Router_als_FTP_Server/">Router als FTP Server</a></li><li><a href="/Bewegungserkennung/Router_als_FTP_Server/AVM_Fritzbox_als_FTP_Server/">AVM Fritzbox</a></li>',pacc:"",ptab:"hidden",qiacc:"",qitab:"hidden",mdacc:"expanded",mdtab:"",iaacc:"",iatab:"hidden",auacc:"",autab:"hidden",hdacc:"hidden",hdtab:"hidden",fhdacc:"hidden",fhdtab:"hidden",sacc:"hidden",dlacc:"hidden",dltab:"hidden"})}),motionDetectionGerRouter.get("/Router_als_FTP_Server/Telekom_Speedport_als_FTP_Server",function(e,a){a.render("./Motion_Detection/Telekom_Speedport_as_FTP_Server",{title:"Telekom Speedport als FTP Server",ampimg:"/images/Search/MD_SearchThumb_RouterAsFTPServer.jpg",headline:"Router oder NAS als FTP Server",breadcrumbs:'<li><a href="/">Home</a></li><li><a href="/Bewegungserkennung/">Bewegungserkennung</a></li><li><a href="/Bewegungserkennung/Router_als_FTP_Server/">Router als FTP Server</a></li><li><a href="/Bewegungserkennung/Router_als_FTP_Server/Telekom_Speedport_als_FTP_Server/">Speedport</a></li>',pacc:"",ptab:"hidden",qiacc:"",qitab:"hidden",mdacc:"expanded",mdtab:"",iaacc:"",iatab:"hidden",auacc:"",autab:"hidden",hdacc:"hidden",hdtab:"hidden",fhdacc:"hidden",fhdtab:"hidden",sacc:"hidden",dlacc:"hidden",dltab:"hidden"})}),motionDetectionGerRouter.get("/Router_als_FTP_Server/QNAP_als_FTP_Server",function(e,a){a.render("./Motion_Detection/QNAP_as_FTP_Server",{title:"QNAP als FTP Server",ampimg:"/images/Search/MD_SearchThumb_RouterAsFTPServer.jpg",headline:"Router oder NAS als FTP Server",breadcrumbs:'<li><a href="/">Home</a></li><li><a href="/Bewegungserkennung/">Bewegungserkennung</a></li><li><a href="/Bewegungserkennung/Router_als_FTP_Server/">Router als FTP Server</a></li><li><a href="/Bewegungserkennung/Router_als_FTP_Server/QNAP_als_FTP_Server/">QNAP</a></li>',pacc:"",ptab:"hidden",qiacc:"",qitab:"hidden",mdacc:"expanded",mdtab:"",iaacc:"",iatab:"hidden",auacc:"",autab:"hidden",hdacc:"hidden",hdtab:"hidden",fhdacc:"hidden",fhdtab:"hidden",sacc:"hidden",dlacc:"hidden",dltab:"hidden"})}),motionDetectionGerRouter.get("/Router_als_FTP_Server/Synology_als_FTP_Server",function(e,a){a.render("./Motion_Detection/Synology_as_FTP_Server",{title:"Synology als FTP Server",ampimg:"/images/Search/MD_SearchThumb_RouterAsFTPServer.jpg",headline:"Router oder NAS als FTP Server",breadcrumbs:'<li><a href="/">Home</a></li><li><a href="/Bewegungserkennung/">Bewegungserkennung</a></li><li><a href="/Bewegungserkennung/Router_als_FTP_Server/">Router als FTP Server</a></li><li><a href="/Bewegungserkennung/Router_als_FTP_Server/Synology_als_FTP_Server/">Synology</a></li>',pacc:"",ptab:"hidden",qiacc:"",qitab:"hidden",mdacc:"expanded",mdtab:"",iaacc:"",iatab:"hidden",auacc:"",autab:"hidden",hdacc:"hidden",hdtab:"hidden",fhdacc:"hidden",fhdtab:"hidden",sacc:"hidden",dlacc:"hidden",dltab:"hidden"})}),motionDetectionGerRouter.get("/Router_als_FTP_Server/WD_MyCloud_als_FTP_Server",function(e,a){a.render("./Motion_Detection/WD_MyCloud_as_FTP_Server",{title:"WD MyCloud als FTP Server",ampimg:"/images/Search/MD_SearchThumb_RouterAsFTPServer.jpg",headline:"Router oder NAS als FTP Server",breadcrumbs:'<li><a href="/">Home</a></li><li><a href="/Bewegungserkennung/">Bewegungserkennung</a></li><li><a href="/Bewegungserkennung/Router_als_FTP_Server/">Router als FTP Server</a></li><li><a href="/Bewegungserkennung/Router_als_FTP_Server/WD_MyCloud_als_FTP_Server/">WD MyCloud</a></li>',pacc:"",ptab:"hidden",qiacc:"",qitab:"hidden",mdacc:"expanded",mdtab:"",iaacc:"",iatab:"hidden",auacc:"",autab:"hidden",hdacc:"hidden",hdtab:"hidden",fhdacc:"hidden",fhdtab:"hidden",sacc:"hidden",dlacc:"hidden",dltab:"hidden"})}),motionDetectionGerRouter.get("/FTP_Server_Setup/",function(e,a){a.render("./Motion_Detection/FTP_Server_Setup",{title:"FTP Server Setup",ampimg:"/images/Search/MD_SearchThumb_FTPServerSetup.jpg",headline:"FTP Server Setup",breadcrumbs:'<li><a href="/">Home</a></li><li><a href="/Bewegungserkennung/">Bewegungserkennung</a></li><li><a href="/Bewegungserkennung/FTP_Server_Setup/">FTP Server Setup</a></li>',pacc:"",ptab:"hidden",qiacc:"",qitab:"hidden",mdacc:"expanded",mdtab:"",iaacc:"",iatab:"hidden",auacc:"",autab:"hidden",hdacc:"hidden",hdtab:"hidden",fhdacc:"hidden",fhdtab:"hidden",sacc:"hidden",dlacc:"hidden",dltab:"hidden"})}),motionDetectionGerRouter.get("/FTP_Server_Setup/Install_FileZilla_Server/",function(e,a){a.render("./Motion_Detection/Install_FileZilla_Server",{title:"FTP Filezilla Server Setup",ampimg:"/images/Search/MD_SearchThumb_FTPServerSetup.jpg",headline:"FTP Filezilla Server Setup",breadcrumbs:'<li><a href="/Bewegungserkennung/">Bewegungserkennung</a></li><li><a href="/Bewegungserkennung/FTP_Server_Setup/">FTP Server Setup</a></li><li><a href="/Bewegungserkennung/FTP_Server_Setup/Install_FileZilla_Server/">Filezilla Installation</a></li>',pacc:"",ptab:"hidden",qiacc:"",qitab:"hidden",mdacc:"expanded",mdtab:"",iaacc:"",iatab:"hidden",auacc:"",autab:"hidden",hdacc:"hidden",hdtab:"hidden",fhdacc:"hidden",fhdtab:"hidden",sacc:"hidden",dlacc:"hidden",dltab:"hidden"})}),motionDetectionGerRouter.get("/Alarm_Server/",function(e,a){a.render("./Motion_Detection/Alarm_Server",{title:"Alarm Server",ampimg:"/images/Search/MD_SearchThumb_AlarmServer.jpg",headline:"Alarm Server",breadcrumbs:'<li><a href="/">Home</a></li><li><a href="/Bewegungserkennung/">Bewegungserkennung</a></li><li><a href="/Bewegungserkennung/Alarm_Server/">Alarm Server</a></li>',pacc:"",ptab:"hidden",qiacc:"",qitab:"hidden",mdacc:"expanded",mdtab:"",iaacc:"",iatab:"hidden",auacc:"",autab:"hidden",hdacc:"hidden",hdtab:"hidden",fhdacc:"hidden",fhdtab:"hidden",sacc:"hidden",dlacc:"hidden",dltab:"hidden"})}),motionDetectionGerRouter.get("/INSTAR_Cloud/",function(e,a){a.render("./Motion_Detection/Cloud",{title:"INSTAR Cloud",ampimg:"/images/Search/MD_SearchThumb_Cloud.jpg",headline:"INSTAR Cloud",breadcrumbs:'<li class="breadcrumb-item"><a href="/">Home</a></li><li class="breadcrumb-item"><a href="/Bewegungserkennung/">Bewegungserkennung</a></li><li class="breadcrumb-item"><a href="/Bewegungserkennung/INSTAR_Cloud/">INSTAR Cloud</a></li>',pacc:"",ptab:"hidden",qiacc:"",qitab:"hidden",mdacc:"expanded",mdtab:"",iaacc:"",iatab:"hidden",auacc:"",autab:"hidden",hdacc:"hidden",hdtab:"hidden",fhdacc:"hidden",fhdtab:"hidden",sacc:"hidden",dlacc:"hidden",dltab:"hidden"})}),motionDetectionGerRouter.get("/INSTAR_Cloud/Benutzer_Account_Erstellen",function(e,a){a.render("./Motion_Detection/Cloud_Create_User_Account",{title:"INSTAR Benutzer Account Erstellen",ampimg:"/images/Search/MD_SearchThumb_Cloud.jpg",headline:"INSTAR Cloud Account",breadcrumbs:'<li><a href="/Bewegungserkennung/">Bewegungserkennung</a></li><li><a href="/Bewegungserkennung/INSTAR_Cloud/">INSTAR Cloud</a></li><li><a href="/Bewegungserkennung/INSTAR_Cloud/Benutzer_Account_Erstellen/">Benutzer Account Erstellen</a></li>',pacc:"",ptab:"hidden",qiacc:"",qitab:"hidden",mdacc:"expanded",mdtab:"",iaacc:"",iatab:"hidden",auacc:"",autab:"hidden",hdacc:"hidden",hdtab:"hidden",fhdacc:"hidden",fhdtab:"hidden",sacc:"hidden",dlacc:"hidden",dltab:"hidden"})}),motionDetectionGerRouter.get("/INSTAR_Cloud/Speicherplatz",function(e,a){a.render("./Motion_Detection/Cloud_Get_More_Cloudstorage",{title:"INSTAR Cloud Speicherplatz",ampimg:"/images/Search/MD_SearchThumb_Cloud.jpg",headline:"INSTAR Cloud Speicherplatz",breadcrumbs:'<li><a href="/Bewegungserkennung/">Bewegungserkennung</a></li><li><a href="/Bewegungserkennung/INSTAR_Cloud/">INSTAR Cloud</a></li><li><a href="/Bewegungserkennung/INSTAR_Cloud/Speicherplatz/">Speicherplatz</a></li>',pacc:"",ptab:"hidden",qiacc:"",qitab:"hidden",mdacc:"expanded",mdtab:"",iaacc:"",iatab:"hidden",auacc:"",autab:"hidden",hdacc:"hidden",hdtab:"hidden",fhdacc:"hidden",fhdtab:"hidden",sacc:"hidden",dlacc:"hidden",dltab:"hidden"})}),motionDetectionGerRouter.get("/INSTAR_Cloud/Benutzer",function(e,a){a.render("./Motion_Detection/Cloud_User",{title:"INSTAR Cloud Benutzer",ampimg:"/images/Search/MD_SearchThumb_Cloud.jpg",headline:"INSTAR Cloud Benutzer",breadcrumbs:'<li><a href="/Bewegungserkennung/">Bewegungserkennung</a></li><li><a href="/Bewegungserkennung/INSTAR_Cloud/">INSTAR Cloud</a></li><li><a href="/Bewegungserkennung/INSTAR_Cloud/Benutzer/">Benutzer</a></li>',pacc:"",ptab:"hidden",qiacc:"",qitab:"hidden",mdacc:"expanded",mdtab:"",iaacc:"",iatab:"hidden",auacc:"",autab:"hidden",hdacc:"hidden",hdtab:"hidden",fhdacc:"hidden",fhdtab:"hidden",sacc:"hidden",dlacc:"hidden",dltab:"hidden"})}),motionDetectionGerRouter.get("/INSTAR_Cloud/Administration",function(e,a){a.render("./Motion_Detection/Cloud_Administration",{title:"INSTAR Cloud Admin",ampimg:"/images/Search/MD_SearchThumb_Cloud.jpg",headline:"INSTAR Cloud Admin",breadcrumbs:'<li><a href="/Bewegungserkennung/">Bewegungserkennung</a></li><li><a href="/Bewegungserkennung/INSTAR_Cloud/">INSTAR Cloud</a></li><li><a href="/Bewegungserkennung/INSTAR_Cloud/Administration/">Administration</a></li>',pacc:"",ptab:"hidden",qiacc:"",qitab:"hidden",mdacc:"expanded",mdtab:"",iaacc:"",iatab:"hidden",auacc:"",autab:"hidden",hdacc:"hidden",hdtab:"hidden",fhdacc:"hidden",fhdtab:"hidden",sacc:"hidden",dlacc:"hidden",dltab:"hidden"})}),motionDetectionGerRouter.get("/INSTAR_Cloud/Alarm_Aufnahmen",function(e,a){a.render("./Motion_Detection/Cloud_Alarm",{title:"INSTAR Cloud Alarm Aufnahmen",ampimg:"/images/Search/MD_SearchThumb_Cloud.jpg",headline:"INSTAR Alarm Aufnahmen",breadcrumbs:'<li><a href="/Bewegungserkennung/">Bewegungserkennung</a></li><li><a href="/Bewegungserkennung/INSTAR_Cloud/">INSTAR Cloud</a></li><li><a href="/Bewegungserkennung/INSTAR_Cloud/Alarm_Aufnahmen/">Alarm Aufnahmen</a></li>',pacc:"",ptab:"hidden",qiacc:"",qitab:"hidden",mdacc:"expanded",mdtab:"",iaacc:"",iatab:"hidden",auacc:"",autab:"hidden",hdacc:"hidden",hdtab:"hidden",fhdacc:"hidden",fhdtab:"hidden",sacc:"hidden",dlacc:"hidden",dltab:"hidden"})}),motionDetectionGerRouter.get("/INSTAR_Cloud/Kamera_Sets",function(e,a){a.render("./Motion_Detection/Cloud_Sets",{title:"INSTAR Cloud Sets",ampimg:"/images/Search/MD_SearchThumb_Cloud.jpg",headline:"INSTAR Cloud Sets",breadcrumbs:'<li><a href="/Bewegungserkennung/">Bewegungserkennung</a></li><li><a href="/Bewegungserkennung/INSTAR_Cloud/">INSTAR Cloud</a></li><li><a href="/Bewegungserkennung/INSTAR_Cloud/Kamera_Sets/">Kamera Sets</a></li>',pacc:"",ptab:"hidden",qiacc:"",qitab:"hidden",mdacc:"expanded",mdtab:"",iaacc:"",iatab:"hidden",auacc:"",autab:"hidden",hdacc:"hidden",hdtab:"hidden",fhdacc:"hidden",fhdtab:"hidden",sacc:"hidden",dlacc:"hidden",dltab:"hidden"})}),module.exports=motionDetectionGerRouter;