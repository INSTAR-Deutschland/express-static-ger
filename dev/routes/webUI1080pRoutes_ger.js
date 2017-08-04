var express = require('express');
var webUI1080pGerRouter = express.Router();

/* GET WebUI page. */
webUI1080pGerRouter.route('/Auswahl')
    .get(function(req, res) {
        res.render('./Web_User_Interface/1080p/WebUserInterface', {
            title: 'INSTAR IP Kamera 1080p Weboberfläche - INSTAR Weboberfläche - kontrollieren Sie Ihre IP Kamera über Ihren Webbrowser',
            ampimg: '/images/Search/QI_SearchThumb_WebUI.jpg',
            headline: 'INSTAR Weboberfläche - kontrollieren Sie Ihre IP Kamera über Ihren Webbrowser',
            breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Web_User_Interface/1080p_Series/Overview/">Web User Interface</a></li>',
            canonical: '/Web_User_Interface/1080p_Serie/Overview/',
            description: '1080p Weboberfläche - : Nutzen Sie unser INSTAR Kamera Tool um die IP Ihrer IP Kamera zu ermitteln und rufen Sie diese Adresse in Ihrem Webbrowser auf um die Weboberfläche (WebUI) zu erreichen.',
        		pacc: '',
        		ptab: 'hidden',
        		qiacc: '',
        		qitab: 'hidden',
        		mdacc: '',
        		mdtab: 'hidden',
        		iaacc: '',
        		iatab: 'hidden',
        		auacc: '',
        		autab: 'hidden',
        		hdacc: 'hidden',
        		hdtab: 'hidden',
        		fhdacc: '',
        		fhdtab: '',
        		sacc: 'hidden',
        		dlacc: 'hidden',
        		dltab: 'hidden',
          });
      });

/* ###################################### fullHD Series ###################################### */

/* GET fullHD WebUI page. */
webUI1080pGerRouter.route('/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/1080p/WebUserInterface_HD-Series', {
            title: 'INSTAR IP Kamera 1080p Weboberfläche - INSTAR Full HD Weboberfläche - kontrollieren Sie Ihre IP Kamera über Ihren Webbrowser',
            ampimg: '/images/Search/QI_SearchThumb_WebUI_1080p.jpg',
            headline: 'INSTAR Full HD Weboberfläche - kontrollieren Sie Ihre IP Kamera über Ihren Webbrowser',
            breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Web_User_Interface/1080p_Series/Overview/">Web User Interface</a></li><li><a href="/Web_User_Interface/1080p_Series/">1080p Serie</a></li>',
            canonical: '/Web_User_Interface/1080p_Serie/',
            description: 'Nutzen Sie unser INSTAR Kamera Tool um die IP Ihrer IP Full HD Webcam zu ermitteln und rufen Sie diese Adresse in Ihrem Webbrowser auf um die Weboberfläche (WebUI) zu erreichen. Die WebUI ermöglicht es Ihnen alle Funktionen Ihrer 1080p Sicherheitskamera zu konfigurieren.',
      			pacc: '',
      			ptab: 'hidden',
      			qiacc: '',
      			qitab: 'hidden',
      			mdacc: '',
      			mdtab: 'hidden',
      			iaacc: '',
      			iatab: 'hidden',
      			auacc: '',
      			autab: 'hidden',
      			hdacc: 'hidden',
      			hdtab: 'hidden',
      			fhdacc: '',
      			fhdtab: '',
      			sacc: 'hidden',
      			dlacc: 'hidden',
      			dltab: 'hidden',
          });
      });

/* ###################################### fullHD Series System ###################################### */

/* GET HD WebUI page. */
webUI1080pGerRouter.route('/System/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/1080p/WebUserInterface_HD-Series_System', {
            title: 'INSTAR IP Kamera 1080p Weboberfläche - System Menu',
            ampimg: '/images/Search/WebUI_1080p_SearchThumb_System_Overview.jpg',
            headline: 'INSTAR Full HD Weboberfläche -  System Overlay',
            breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Web_User_Interface/1080p_Series/Overview/">Web User Interface</a></li><li><a href="/Web_User_Interface/1080p_Series/">1080p Serie</a></li><li><a href="/Web_User_Interface/1080p_Series/System/">System</a></li>',
            canonical: '/Web_User_Interface/1080p_Series/System/',
            description: '1080p Weboberfläche - System Overlay: Ändern Sie die Sprache der Weboberfläche, starten Sie die Kamera neu, führen Sie einen Werksreset durch oder updaten Sie die Firmware und Weboberfläche Ihrer Kamera.',
      			pacc: '',
      			ptab: 'hidden',
      			qiacc: '',
      			qitab: 'hidden',
      			mdacc: '',
      			mdtab: 'hidden',
      			iaacc: '',
      			iatab: 'hidden',
      			auacc: '',
      			autab: 'hidden',
      			hdacc: 'hidden',
      			hdtab: 'hidden',
      			fhdacc: '',
      			fhdtab: '',
      			sacc: 'hidden',
      			dlacc: 'hidden',
      			dltab: 'hidden',
          });
      });

/* GET HD WebUI page. */
webUI1080pGerRouter.route('/System/Datum_Uhrzeit/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/1080p/WebUserInterface_HD-Series_System_Date_Time', {
            title: 'INSTAR IP Kamera 1080p Weboberfläche - System Menu :: Datum & Uhrzeit',
            ampimg: '/images/Search/WebUI_1080p_SearchThumb_System_Date_Time.jpg',
            headline: 'INSTAR Full HD Weboberfläche -  System :: Zeit & Datum',
            breadcrumbs: '<li><a href="/Web_User_Interface/1080p_Series/Overview/">Web User Interface</a></li><li><a href="/Web_User_Interface/1080p_Series/">1080p Serie</a></li><li><a href="/Web_User_Interface/1080p_Series/System/">System</a></li><li><a href="/Web_User_Interface/1080p_Series/System/Datum_Uhrzeit/">Datum & Uhrzeit</a></li>',
            canonical: '/Web_User_Interface/1080p_Series/System/Date_Time/',
            description: '1080p Weboberfläche - Zeit & Datum: Ihre Kamera wird automatisch versuchen einen sogenannten NTP Server zu kontaktieren um die interne Zeit einzustellen. Es wird empfohlen diesen Dienst aktiviert zu lassen. Wenn Ihre Kamera jedoch nicht mit dem Internet verbunden ist, können Sie die Zeit aber auch mit Ihrem Computer synchronisieren, wenn Sie auf die Kamera zugreifen. Beachten Sie bitte, dass Sie dies regelmäßig durchführen müssen, um die Zeit auf der Kamera zu halten.',
      			pacc: '',
      			ptab: 'hidden',
      			qiacc: '',
      			qitab: 'hidden',
      			mdacc: '',
      			mdtab: 'hidden',
      			iaacc: '',
      			iatab: 'hidden',
      			auacc: '',
      			autab: 'hidden',
      			hdacc: 'hidden',
      			hdtab: 'hidden',
      			fhdacc: '',
      			fhdtab: '',
      			sacc: 'hidden',
      			dlacc: 'hidden',
      			dltab: 'hidden',
          });
      });

/* GET HD WebUI page. */
webUI1080pGerRouter.route('/System/Info/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/1080p/WebUserInterface_HD-Series_System_Info', {
            title: 'INSTAR IP Kamera 1080p Weboberfläche - System Menu :: Info',
            ampimg: '/images/Search/WebUI_1080p_SearchThumb_System_Overview.jpg',
            headline: 'INSTAR Full HD Weboberfläche -  System :: Info',
            breadcrumbs: '<li><a href="/Web_User_Interface/1080p_Series/Overview/">Web User Interface</a></li><li><a href="/Web_User_Interface/1080p_Series/">1080p Serie</a></li><li><a href="/Web_User_Interface/1080p_Series/System/">System</a></li><li><a href="/Web_User_Interface/1080p_Series/System/Info/">Info</a></li>',
            canonical: '/Web_User_Interface/1080p_Series/System/Info/',
            description: '1080p Weboberfläche - Das Info Menü stellt eine Übersicht über wichtige System Variablen dar und soll Ihnen beim Lösen von Problemen mit der Kamera helfen. Der Zugriff über Ihre DDNS Adresse funktioniert nicht? Überprüfen Sie hier den DDNS Status (dieser muss erfolgreich sein) und der UPnP Status (sollte in den meisten Fällen deaktiviert sein). Um die DDNS Adresse als Fehlerquelle auszuschließen, können Sie auch über ihre WAN IP (anstelle der DDNS Adresse) auf die Kamera zugreifen - sollte es danach immer noch nicht gehen, ist vermutlich die Port Weiterleitung der Schuldige.',
      			pacc: '',
      			ptab: 'hidden',
      			qiacc: '',
      			qitab: 'hidden',
      			mdacc: '',
      			mdtab: 'hidden',
      			iaacc: '',
      			iatab: 'hidden',
      			auacc: '',
      			autab: 'hidden',
      			hdacc: 'hidden',
      			hdtab: 'hidden',
      			fhdacc: '',
      			fhdtab: '',
      			sacc: 'hidden',
      			dlacc: 'hidden',
      			dltab: 'hidden',
          });
      });

/* GET HD WebUI page. */
webUI1080pGerRouter.route('/System/Sprache/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/1080p/WebUserInterface_HD-Series_System_Language', {
            title: 'INSTAR IP Kamera 1080p Weboberfläche - System Menu :: Language',
            ampimg: '/images/Search/WebUI_1080p_SearchThumb_System_Language.jpg',
            headline: 'INSTAR Full HD Weboberfläche -  System :: Sprache',
            breadcrumbs: '<li><a href="/Web_User_Interface/1080p_Series/Overview/">Web User Interface</a></li><li><a href="/Web_User_Interface/1080p_Series/">1080p Serie</a></li><li><a href="/Web_User_Interface/1080p_Series/System/">System</a></li><li><a href="/Web_User_Interface/1080p_Series/System/Sprache/">Sprache</a></li>',
            canonical: '/Web_User_Interface/1080p_Series/System/Language/',
            description: '1080p Weboberfläche - Ändern Sie Sprache der Weboberfläche zu Deutsch, Englisch, Französisch oder Chinesisch. Die Oberfläche wird automatisch in der Standard Sprache Ihres Betriebssystems geladen. Sollte diese Erkennung fehlschlagen, oder Sie eine andere Sprache für die WebUI wünschen, legen Sie dies bitte hier fest. Die Auswahl wird lokal auf Ihrem Rechner und nicht global auf der Kamera gespeichert.',
      			pacc: '',
      			ptab: 'hidden',
      			qiacc: '',
      			qitab: 'hidden',
      			mdacc: '',
      			mdtab: 'hidden',
      			iaacc: '',
      			iatab: 'hidden',
      			auacc: '',
      			autab: 'hidden',
      			hdacc: 'hidden',
      			hdtab: 'hidden',
      			fhdacc: '',
      			fhdtab: '',
      			sacc: 'hidden',
      			dlacc: 'hidden',
      			dltab: 'hidden',
          });
      });

/* GET HD WebUI page. */
webUI1080pGerRouter.route('/System/Benutzer/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/1080p/WebUserInterface_HD-Series_System_User', {
            title: 'INSTAR IP Kamera 1080p Weboberfläche - System Menu :: Benutzer',
            ampimg: '/images/Search/WebUI_1080p_SearchThumb_System_User.jpg',
            headline: 'INSTAR Full HD Weboberfläche -  System :: Benutzer',
            breadcrumbs: '<li><a href="/Web_User_Interface/1080p_Series/Overview/">Web User Interface</a></li><li><a href="/Web_User_Interface/1080p_Series/">1080p Serie</a></li><li><a href="/Web_User_Interface/1080p_Series/System/">System</a></li><li><a href="/Web_User_Interface/1080p_Series/System/Benutzer/">Benutzer</a></li>',
            canonical: '/Web_User_Interface/1080p_Series/System/User/',
            description: '1080p Weboberfläche - ',
      			pacc: '',
      			ptab: 'hidden',
      			qiacc: '',
      			qitab: 'hidden',
      			mdacc: '',
      			mdtab: 'hidden',
      			iaacc: '',
      			iatab: 'hidden',
      			auacc: '',
      			autab: 'hidden',
      			hdacc: 'hidden',
      			hdtab: 'hidden',
      			fhdacc: '',
      			fhdtab: '',
      			sacc: 'hidden',
      			dlacc: 'hidden',
      			dltab: 'hidden',
          });
      });

/* GET HD WebUI page. */
webUI1080pGerRouter.route('/System/Log/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/1080p/WebUserInterface_HD-Series_System_Log', {
            title: 'INSTAR IP Kamera 1080p Weboberfläche - System Menu :: Log',
            ampimg: '/images/Search/WebUI_1080p_SearchThumb_System_Log.jpg',
            headline: 'INSTAR Full HD Weboberfläche -  System :: Log',
            breadcrumbs: '<li><a href="/Web_User_Interface/1080p_Series/Overview/">Web User Interface</a></li><li><a href="/Web_User_Interface/1080p_Series/">1080p Serie</a></li><li><a href="/Web_User_Interface/1080p_Series/System/">System</a></li><li><a href="/Web_User_Interface/1080p_Series/System/Log/">Log</a></li>',
            canonical: '/Web_User_Interface/1080p_Series/System/Log/',
            description: '1080p Weboberfläche - ',
      			pacc: '',
      			ptab: 'hidden',
      			qiacc: '',
      			qitab: 'hidden',
      			mdacc: '',
      			mdtab: 'hidden',
      			iaacc: '',
      			iatab: 'hidden',
      			auacc: '',
      			autab: 'hidden',
      			hdacc: 'hidden',
      			hdtab: 'hidden',
      			fhdacc: '',
      			fhdtab: '',
      			sacc: 'hidden',
      			dlacc: 'hidden',
      			dltab: 'hidden',
          });
      });

/* GET HD WebUI page. */
webUI1080pGerRouter.route('/System/Neustarten/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/1080p/WebUserInterface_HD-Series_System_Reboot', {
            title: 'INSTAR IP Kamera 1080p Weboberfläche - System Menu :: Neustarten',
            ampimg: '/images/Search/WebUI_1080p_SearchThumb_System_Reboot.jpg',
            headline: 'INSTAR Full HD Weboberfläche -  System :: Neustarten',
            breadcrumbs: '<li><a href="/Web_User_Interface/1080p_Series/Overview/">Web User Interface</a></li><li><a href="/Web_User_Interface/1080p_Series/">1080p Serie</a></li><li><a href="/Web_User_Interface/1080p_Series/System/">System</a></li><li><a href="/Web_User_Interface/1080p_Series/System/Neustarten/">Neustarten</a></li>',
            canonical: '/Web_User_Interface/1080p_Series/System/Reboot/',
            description: '1080p Weboberfläche - ',
      			pacc: '',
      			ptab: 'hidden',
      			qiacc: '',
      			qitab: 'hidden',
      			mdacc: '',
      			mdtab: 'hidden',
      			iaacc: '',
      			iatab: 'hidden',
      			auacc: '',
      			autab: 'hidden',
      			hdacc: 'hidden',
      			hdtab: 'hidden',
      			fhdacc: '',
      			fhdtab: '',
      			sacc: 'hidden',
      			dlacc: 'hidden',
      			dltab: 'hidden',
          });
      });

/* GET HD WebUI page. */
webUI1080pGerRouter.route('/System/Werksreset/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/1080p/WebUserInterface_HD-Series_System_Reset', {
            title: 'INSTAR IP Kamera 1080p Weboberfläche - System Menu :: Werksreset',
            ampimg: '/images/Search/WebUI_1080p_SearchThumb_System_Reset.jpg',
            headline: 'INSTAR Full HD Weboberfläche -  System :: Werksreset',
            breadcrumbs: '<li><a href="/Web_User_Interface/1080p_Series/Overview/">Web User Interface</a></li><li><a href="/Web_User_Interface/1080p_Series/">1080p Serie</a></li><li><a href="/Web_User_Interface/1080p_Series/System/">System</a></li><li><a href="/Web_User_Interface/1080p_Series/System/Werksreset/">Werksreset</a></li>',
            canonical: '/Web_User_Interface/1080p_Series/System/Reset/',
            description: '1080p Weboberfläche - ',
      			pacc: '',
      			ptab: 'hidden',
      			qiacc: '',
      			qitab: 'hidden',
      			mdacc: '',
      			mdtab: 'hidden',
      			iaacc: '',
      			iatab: 'hidden',
      			auacc: '',
      			autab: 'hidden',
      			hdacc: 'hidden',
      			hdtab: 'hidden',
      			fhdacc: '',
      			fhdtab: '',
      			sacc: 'hidden',
      			dlacc: 'hidden',
      			dltab: 'hidden',
          });
      });

/* GET HD WebUI page. */
webUI1080pGerRouter.route('/System/Update/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/1080p/WebUserInterface_HD-Series_System_Update', {
            title: 'INSTAR IP Kamera 1080p Weboberfläche - System Menu :: Update',
            ampimg: '/images/Search/WebUI_1080p_SearchThumb_System_Update.jpg',
            headline: 'INSTAR Full HD Weboberfläche -  System :: Update',
            breadcrumbs: '<li><a href="/Web_User_Interface/1080p_Series/Overview/">Web User Interface</a></li><li><a href="/Web_User_Interface/1080p_Series/">1080p Serie</a></li><li><a href="/Web_User_Interface/1080p_Series/System/">System</a></li><li><a href="/Web_User_Interface/1080p_Series/System/Update/">Update</a></li>',
            canonical: '/Web_User_Interface/1080p_Series/System/Update/',
            description: '1080p Weboberfläche - ',
      			pacc: '',
      			ptab: 'hidden',
      			qiacc: '',
      			qitab: 'hidden',
      			mdacc: '',
      			mdtab: 'hidden',
      			iaacc: '',
      			iatab: 'hidden',
      			auacc: '',
      			autab: 'hidden',
      			hdacc: 'hidden',
      			hdtab: 'hidden',
      			fhdacc: '',
      			fhdtab: '',
      			sacc: 'hidden',
      			dlacc: 'hidden',
      			dltab: 'hidden',
          });
      });

/* ###################################### fullHD Series Network ###################################### */

/* GET HD WebUI page. */
webUI1080pGerRouter.route('/Netzwerk/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/1080p/WebUserInterface_HD-Series_Network', {
            title: 'INSTAR IP Kamera 1080p Weboberfläche - Netzwerk Menu',
            ampimg: '/images/Search/WebUI_1080p_SearchThumb_Network_IP_Configuration.jpg',
            headline: 'INSTAR Full HD Weboberfläche -  Netzwerk',
            breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Web_User_Interface/1080p_Series/Overview/">Web User Interface</a></li><li><a href="/Web_User_Interface/1080p_Series/">1080p Serie</a></li><li><a href="/Web_User_Interface/1080p_Series/Netzwerk/">Netzwerk</a></li>',
            canonical: '/Web_User_Interface/1080p_Series/Network/',
            description: '1080p Weboberfläche - ',
      			pacc: '',
      			ptab: 'hidden',
      			qiacc: '',
      			qitab: 'hidden',
      			mdacc: '',
      			mdtab: 'hidden',
      			iaacc: '',
      			iatab: 'hidden',
      			auacc: '',
      			autab: 'hidden',
      			hdacc: 'hidden',
      			hdtab: 'hidden',
      			fhdacc: '',
      			fhdtab: '',
      			sacc: 'hidden',
      			dlacc: 'hidden',
      			dltab: 'hidden',
          });
      });

/* GET HD WebUI page. */
webUI1080pGerRouter.route('/Netzwerk/IP_Konfiguration/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/1080p/WebUserInterface_HD-Series_Network_IP_Configuration', {
            title: 'INSTAR IP Kamera 1080p Weboberfläche - Netzwerk Menu :: IP Configuration',
            ampimg: '/images/Search/WebUI_1080p_SearchThumb_Network_IP_Configuration.jpg',
            headline: 'INSTAR Full HD Weboberfläche -  Netzwerk :: IP Konfig',
            breadcrumbs: '<li><a href="/Web_User_Interface/1080p_Series/Overview/">Web User Interface</a></li><li><a href="/Web_User_Interface/1080p_Series/">1080p Serie</a></li><li><a href="/Web_User_Interface/1080p_Series/Netzwerk/">Netzwerk</a></li><li><a href="/Web_User_Interface/1080p_Series/Netzwerk/IP_Konfiguration/">IP Konfiguration</a></li>',
            canonical: '/Web_User_Interface/1080p_Series/Network/IP_Configuration/',
            description: '1080p Weboberfläche - ',
      			pacc: '',
      			ptab: 'hidden',
      			qiacc: '',
      			qitab: 'hidden',
      			mdacc: '',
      			mdtab: 'hidden',
      			iaacc: '',
      			iatab: 'hidden',
      			auacc: '',
      			autab: 'hidden',
      			hdacc: 'hidden',
      			hdtab: 'hidden',
      			fhdacc: '',
      			fhdtab: '',
      			sacc: 'hidden',
      			dlacc: 'hidden',
      			dltab: 'hidden',
          });
      });

/* GET HD WebUI page. */
webUI1080pGerRouter.route('/Netzwerk/WLAN/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/1080p/WebUserInterface_HD-Series_Network_WiFi', {
            title: 'INSTAR IP Kamera 1080p Weboberfläche - Netzwerk Menu :: WiFi',
            ampimg: '/images/Search/WebUI_1080p_SearchThumb_Network_WiFi.jpg',
            headline: 'INSTAR Full HD Weboberfläche -  Netzwerk :: WLAN',
            breadcrumbs: '<li><a href="/Web_User_Interface/1080p_Series/Overview/">Web User Interface</a></li><li><a href="/Web_User_Interface/1080p_Series/">1080p Serie</a></li><li><a href="/Web_User_Interface/1080p_Series/Netzwerk/">Netzwerk</a></li><li><a href="/Web_User_Interface/1080p_Series/Netzwerk/WLAN/">WLAN</a></li>',
            canonical: '/Web_User_Interface/1080p_Series/Network/WiFi/',
            description: '1080p Weboberfläche - ',
      			pacc: '',
      			ptab: 'hidden',
      			qiacc: '',
      			qitab: 'hidden',
      			mdacc: '',
      			mdtab: 'hidden',
      			iaacc: '',
      			iatab: 'hidden',
      			auacc: '',
      			autab: 'hidden',
      			hdacc: 'hidden',
      			hdtab: 'hidden',
      			fhdacc: '',
      			fhdtab: '',
      			sacc: 'hidden',
      			dlacc: 'hidden',
      			dltab: 'hidden',
          });
      });

/* GET HD WebUI page. */
webUI1080pGerRouter.route('/Netzwerk/Fernzugriff/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/1080p/WebUserInterface_HD-Series_Network_Remote_Access', {
            title: 'INSTAR IP Kamera 1080p Weboberfläche - Netzwerk Menu :: Fernzugriff',
            ampimg: '/images/Search/WebUI_1080p_SearchThumb_Network_Remote_Access.jpg',
            headline: 'INSTAR Full HD Weboberfläche -  Netzwerk :: Fernzugriff',
            breadcrumbs: '<li><a href="/Web_User_Interface/1080p_Series/Overview/">Web User Interface</a></li><li><a href="/Web_User_Interface/1080p_Series/">1080p Serie</a></li><li><a href="/Web_User_Interface/1080p_Series/Netzwerk/">Netzwerk</a></li><li><a href="/Web_User_Interface/1080p_Series/Netzwerk/Fernzugriff/">Fernzugriff</a></li>',
            canonical: '/Web_User_Interface/1080p_Series/Network/Remote_Access/',
            description: '1080p Weboberfläche - ',
      			pacc: '',
      			ptab: 'hidden',
      			qiacc: '',
      			qitab: 'hidden',
      			mdacc: '',
      			mdtab: 'hidden',
      			iaacc: '',
      			iatab: 'hidden',
      			auacc: '',
      			autab: 'hidden',
      			hdacc: 'hidden',
      			hdtab: 'hidden',
      			fhdacc: '',
      			fhdtab: '',
      			sacc: 'hidden',
      			dlacc: 'hidden',
      			dltab: 'hidden',
          });
      });

/* GET HD WebUI page. */
webUI1080pGerRouter.route('/Netzwerk/ONVIF/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/1080p/WebUserInterface_HD-Series_Network_ONVIF', {
            title: 'INSTAR IP Kamera 1080p Weboberfläche - Netzwerk Menu :: ONVIF',
            ampimg: '/images/Search/WebUI_1080p_SearchThumb_Network_ONVIF.jpg',
            headline: 'INSTAR Full HD Weboberfläche -  Netzwerk :: ONVIF',
            breadcrumbs: '<li><a href="/Web_User_Interface/1080p_Series/Overview/">Web User Interface</a></li><li><a href="/Web_User_Interface/1080p_Series/">1080p Serie</a></li><li><a href="/Web_User_Interface/1080p_Series/Netzwerk/">Netzwerk</a></li><li><a href="/Web_User_Interface/1080p_Series/Netzwerk/ONVIF/">ONVIF</a></li>',
            canonical: '/Web_User_Interface/1080p_Series/Network/ONVIF/',
            description: '1080p Weboberfläche - ',
      			pacc: '',
      			ptab: 'hidden',
      			qiacc: '',
      			qitab: 'hidden',
      			mdacc: '',
      			mdtab: 'hidden',
      			iaacc: '',
      			iatab: 'hidden',
      			auacc: '',
      			autab: 'hidden',
      			hdacc: 'hidden',
      			hdtab: 'hidden',
      			fhdacc: '',
      			fhdtab: '',
      			sacc: 'hidden',
      			dlacc: 'hidden',
      			dltab: 'hidden',
          });
      });

/* GET HD WebUI page. */
webUI1080pGerRouter.route('/Netzwerk/UPnP/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/1080p/WebUserInterface_HD-Series_Network_UPnP', {
            title: 'INSTAR IP Kamera 1080p Weboberfläche - Netzwerk Menu :: UPnP',
            ampimg: '/images/Search/WebUI_1080p_SearchThumb_Network_UPnP.jpg',
            headline: 'INSTAR Full HD Weboberfläche -  Netzwerk :: UPnP',
            breadcrumbs: '<li><a href="/Web_User_Interface/1080p_Series/Overview/">Web User Interface</a></li><li><a href="/Web_User_Interface/1080p_Series/">1080p Serie</a></li><li><a href="/Web_User_Interface/1080p_Series/Netzwerk/">Netzwerk</a></li><li><a href="/Web_User_Interface/1080p_Series/Netzwerk/UPnP/">UPnP</a></li>',
            canonical: '/Web_User_Interface/1080p_Series/Network/UPnP/',
            description: '1080p Weboberfläche - ',
      			pacc: '',
      			ptab: 'hidden',
      			qiacc: '',
      			qitab: 'hidden',
      			mdacc: '',
      			mdtab: 'hidden',
      			iaacc: '',
      			iatab: 'hidden',
      			auacc: '',
      			autab: 'hidden',
      			hdacc: 'hidden',
      			hdtab: 'hidden',
      			fhdacc: '',
      			fhdtab: '',
      			sacc: 'hidden',
      			dlacc: 'hidden',
      			dltab: 'hidden',
          });
      });

/* ###################################### fullHD Series Features ###################################### */

/* GET HD WebUI page. */
webUI1080pGerRouter.route('/Features/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/1080p/WebUserInterface_HD-Series_Features', {
            title: 'INSTAR IP Kamera 1080p Weboberfläche - Features Menu',
            ampimg: '/images/Search/WebUI_1080p_SearchThumb_Features_Wizard.jpg',
            headline: 'INSTAR Full HD Weboberfläche -  Features',
            breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Web_User_Interface/1080p_Series/Overview/">Web User Interface</a></li><li><a href="/Web_User_Interface/1080p_Series/">1080p Serie</a></li><li><a href="/Web_User_Interface/1080p_Series/Features/">Features</a></li>',
            canonical: '/Web_User_Interface/1080p_Series/Features/',
            description: '1080p Weboberfläche - ',
      			pacc: '',
      			ptab: 'hidden',
      			qiacc: '',
      			qitab: 'hidden',
      			mdacc: '',
      			mdtab: 'hidden',
      			iaacc: '',
      			iatab: 'hidden',
      			auacc: '',
      			autab: 'hidden',
      			hdacc: 'hidden',
      			hdtab: 'hidden',
      			fhdacc: '',
      			fhdtab: '',
      			sacc: 'hidden',
      			dlacc: 'hidden',
      			dltab: 'hidden',
          });
      });

/* GET HD WebUI page. */
webUI1080pGerRouter.route('/Features/Email_Einstellungen/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/1080p/WebUserInterface_HD-Series_Features_Email', {
            title: 'INSTAR IP Kamera 1080p Weboberfläche - Features Menu :: Email Einstellungen',
            ampimg: '/images/Search/WebUI_1080p_SearchThumb_Features_Email.jpg',
            headline: 'INSTAR Full HD Weboberfläche -  Features :: Email Einstellungen',
            breadcrumbs: '<li><a href="/Web_User_Interface/1080p_Series/Overview/">Web User Interface</a></li><li><a href="/Web_User_Interface/1080p_Series/">1080p Serie</a></li><li><a href="/Web_User_Interface/1080p_Series/Features/">Features</a></li><li><a href="/Web_User_Interface/1080p_Series/Features/Email_Einstellungen/">Email Einstellungen</a></li>',
            canonical: '/Web_User_Interface/1080p_Series/Features/Email/',
            description: '1080p Weboberfläche - ',
      			pacc: '',
      			ptab: 'hidden',
      			qiacc: '',
      			qitab: 'hidden',
      			mdacc: '',
      			mdtab: 'hidden',
      			iaacc: '',
      			iatab: 'hidden',
      			auacc: '',
      			autab: 'hidden',
      			hdacc: 'hidden',
      			hdtab: 'hidden',
      			fhdacc: '',
      			fhdtab: '',
      			sacc: 'hidden',
      			dlacc: 'hidden',
      			dltab: 'hidden',
          });
      });

/* GET HD WebUI page. */
webUI1080pGerRouter.route('/Features/FTP/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/1080p/WebUserInterface_HD-Series_Features_FTP', {
            title: 'INSTAR IP Kamera 1080p Weboberfläche - Features Menu :: FTP',
            ampimg: '/images/Search/WebUI_1080p_SearchThumb_Features_FTP.jpg',
            headline: 'INSTAR Full HD Weboberfläche -  Features :: FTP',
            breadcrumbs: '<li><a href="/Web_User_Interface/1080p_Series/Overview/">Web User Interface</a></li><li><a href="/Web_User_Interface/1080p_Series/">1080p Serie</a></li><li><a href="/Web_User_Interface/1080p_Series/Features/">Features</a></li><li><a href="/Web_User_Interface/1080p_Series/Features/FTP/">FTP</a></li>',
            canonical: '/Web_User_Interface/1080p_Series/Features/FTP/',
            description: '1080p Weboberfläche - ',
      			pacc: '',
      			ptab: 'hidden',
      			qiacc: '',
      			qitab: 'hidden',
      			mdacc: '',
      			mdtab: 'hidden',
      			iaacc: '',
      			iatab: 'hidden',
      			auacc: '',
      			autab: 'hidden',
      			hdacc: 'hidden',
      			hdtab: 'hidden',
      			fhdacc: '',
      			fhdtab: '',
      			sacc: 'hidden',
      			dlacc: 'hidden',
      			dltab: 'hidden',
          });
      });

/* GET HD WebUI page. */
webUI1080pGerRouter.route('/Features/Status_LED/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/1080p/WebUserInterface_HD-Series_Features_Status_LED', {
            title: 'INSTAR IP Kamera 1080p Weboberfläche - Features Menu :: Status LED',
            ampimg: '/images/Search/WebUI_1080p_SearchThumb_Features_Status_LEDs.jpg',
            headline: 'INSTAR Full HD Weboberfläche -  Features :: Status LED',
            breadcrumbs: '<li><a href="/Web_User_Interface/1080p_Series/Overview/">Web User Interface</a></li><li><a href="/Web_User_Interface/1080p_Series/">1080p Serie</a></li><li><a href="/Web_User_Interface/1080p_Series/Features/">Features</a></li><li><a href="/Web_User_Interface/1080p_Series/Features/Status_LED">Status LED</a></li>',
            canonical: '/Web_User_Interface/1080p_Series/Features/Status_LED/',
            description: '1080p Weboberfläche - ',
      			pacc: '',
      			ptab: 'hidden',
      			qiacc: '',
      			qitab: 'hidden',
      			mdacc: '',
      			mdtab: 'hidden',
      			iaacc: '',
      			iatab: 'hidden',
      			auacc: '',
      			autab: 'hidden',
      			hdacc: 'hidden',
      			hdtab: 'hidden',
      			fhdacc: '',
      			fhdtab: '',
      			sacc: 'hidden',
      			dlacc: 'hidden',
      			dltab: 'hidden',
          });
      });

/* GET HD WebUI page. */
webUI1080pGerRouter.route('/Features/IR_Nachtsicht/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/1080p/WebUserInterface_HD-Series_Features_IR_LEDs', {
            title: 'INSTAR IP Kamera 1080p Weboberfläche - Features Menu :: IR LEDs',
            ampimg: '/images/Search/WebUI_1080p_SearchThumb_Features_Nightvision.jpg',
            headline: 'INSTAR Full HD Weboberfläche -  Features :: IR Nachtsicht',
            breadcrumbs: '<li><a href="/Web_User_Interface/1080p_Series/Overview/">Web User Interface</a></li><li><a href="/Web_User_Interface/1080p_Series/">1080p Serie</a></li><li><a href="/Web_User_Interface/1080p_Series/Features/">Features</a></li><li><a href="/Web_User_Interface/1080p_Series/Features/IR_Nachtsicht">IR Nachtsicht</a></li>',
            canonical: '/Web_User_Interface/1080p_Series/Features/IR_LEDs/',
            description: '1080p Weboberfläche - ',
      			pacc: '',
      			ptab: 'hidden',
      			qiacc: '',
      			qitab: 'hidden',
      			mdacc: '',
      			mdtab: 'hidden',
      			iaacc: '',
      			iatab: 'hidden',
      			auacc: '',
      			autab: 'hidden',
      			hdacc: 'hidden',
      			hdtab: 'hidden',
      			fhdacc: '',
      			fhdtab: '',
      			sacc: 'hidden',
      			dlacc: 'hidden',
      			dltab: 'hidden',
          });
      });

/* GET HD WebUI page. */
webUI1080pGerRouter.route('/Features/PTZ/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/1080p/WebUserInterface_HD-Series_Features_PTZ', {
            title: 'INSTAR IP Kamera 1080p Weboberfläche - Features Menu :: PTZ',
            ampimg: '/images/Search/WebUI_1080p_SearchThumb_Features_PTZ.jpg',
            headline: 'INSTAR Full HD Weboberfläche -  Features :: PTZ',
            breadcrumbs: '<li><a href="/Web_User_Interface/1080p_Series/Overview/">Web User Interface</a></li><li><a href="/Web_User_Interface/1080p_Series/">1080p Serie</a></li><li><a href="/Web_User_Interface/1080p_Series/Features/">Features</a></li><li><a href="/Web_User_Interface/1080p_Series/Features/PTZ">PTZ</a></li>',
            canonical: '/Web_User_Interface/1080p_Series/Features/PTZ/',
            description: '1080p Weboberfläche - ',
      			pacc: '',
      			ptab: 'hidden',
      			qiacc: '',
      			qitab: 'hidden',
      			mdacc: '',
      			mdtab: 'hidden',
      			iaacc: '',
      			iatab: 'hidden',
      			auacc: '',
      			autab: 'hidden',
      			hdacc: 'hidden',
      			hdtab: 'hidden',
      			fhdacc: '',
      			fhdtab: '',
      			sacc: 'hidden',
      			dlacc: 'hidden',
      			dltab: 'hidden',
          });
      });

/* GET HD WebUI page. */
webUI1080pGerRouter.route('/Features/SD_Karte/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/1080p/WebUserInterface_HD-Series_Features_SD_Card', {
            title: 'INSTAR IP Kamera 1080p Weboberfläche - Features Menu :: SD Karte',
            ampimg: '/images/Search/WebUI_1080p_SearchThumb_Features_SD_Card.jpg',
            headline: 'INSTAR Full HD Weboberfläche -  Features :: SD Karte',
            breadcrumbs: '<li><a href="/Web_User_Interface/1080p_Series/Overview/">Web User Interface</a></li><li><a href="/Web_User_Interface/1080p_Series/">1080p Serie</a></li><li><a href="/Web_User_Interface/1080p_Series/Features/">Features</a></li><li><a href="/Web_User_Interface/1080p_Series/Features/SD_Karte">SD Karte</a></li>',
            canonical: '/Web_User_Interface/1080p_Series/Features/SD_Card/',
            description: '1080p Weboberfläche - ',
      			pacc: '',
      			ptab: 'hidden',
      			qiacc: '',
      			qitab: 'hidden',
      			mdacc: '',
      			mdtab: 'hidden',
      			iaacc: '',
      			iatab: 'hidden',
      			auacc: '',
      			autab: 'hidden',
      			hdacc: 'hidden',
      			hdtab: 'hidden',
      			fhdacc: '',
      			fhdtab: '',
      			sacc: 'hidden',
      			dlacc: 'hidden',
      			dltab: 'hidden',
          });
      });

/* GET HD WebUI page. */
webUI1080pGerRouter.route('/Features/PTZ_Tour/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/1080p/WebUserInterface_HD-Series_Features_PTZ_Tour', {
            title: 'INSTAR IP Kamera 1080p Weboberfläche - Features Menu :: PTZ Tour',
            ampimg: '/images/Search/WebUI_1080p_SearchThumb_Features_PTZ_Tour.jpg',
            headline: 'INSTAR Full HD Weboberfläche -  Features :: PTZ Tour',
            breadcrumbs: '<li><a href="/Web_User_Interface/1080p_Series/Overview/">Web User Interface</a></li><li><a href="/Web_User_Interface/1080p_Series/">1080p Serie</a></li><li><a href="/Web_User_Interface/1080p_Series/Features/">Features</a></li><li><a href="/Web_User_Interface/1080p_Series/Features/PTZ_Tour">PTZ Tour</a></li>',
            canonical: '/Web_User_Interface/1080p_Series/Features/PTZ_Tour/',
            description: '1080p Weboberfläche - ',
      			pacc: '',
      			ptab: 'hidden',
      			qiacc: '',
      			qitab: 'hidden',
      			mdacc: '',
      			mdtab: 'hidden',
      			iaacc: '',
      			iatab: 'hidden',
      			auacc: '',
      			autab: 'hidden',
      			hdacc: 'hidden',
      			hdtab: 'hidden',
      			fhdacc: '',
      			fhdtab: '',
      			sacc: 'hidden',
      			dlacc: 'hidden',
      			dltab: 'hidden',
          });
      });

/* GET HD WebUI page. */
webUI1080pGerRouter.route('/Features/Manuelle_Aufnahme/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/1080p/WebUserInterface_HD-Series_Features_ManualRec', {
            title: 'INSTAR IP Kamera 1080p Weboberfläche - Features Menu :: Manuelle Aufnahme',
            ampimg: '/images/Search/WebUI_1080p_SearchThumb_Features_Manual_Recording.jpg',
            headline: 'INSTAR Full HD Weboberfläche -  Features :: Manuelle Aufnahme',
            breadcrumbs: '<li><a href="/Web_User_Interface/1080p_Series/Overview/">Web User Interface</a></li><li><a href="/Web_User_Interface/1080p_Series/">1080p Serie</a></li><li><a href="/Web_User_Interface/1080p_Series/Features/">Features</a></li><li><a href="/Web_User_Interface/1080p_Series/Features/Manuelle_Aufnahme">Manuelle Aufnahme</a></li>',
            canonical: '/Web_User_Interface/1080p_Series/Features/Manual_Recording/',
            description: '1080p Weboberfläche - ',
      			pacc: '',
      			ptab: 'hidden',
      			qiacc: '',
      			qitab: 'hidden',
      			mdacc: '',
      			mdtab: 'hidden',
      			iaacc: '',
      			iatab: 'hidden',
      			auacc: '',
      			autab: 'hidden',
      			hdacc: 'hidden',
      			hdtab: 'hidden',
      			fhdacc: '',
      			fhdtab: '',
      			sacc: 'hidden',
      			dlacc: 'hidden',
      			dltab: 'hidden',
          });
      });

/* ###################################### fullHD Series Multimedia ###################################### */

/* GET HD WebUI page. */
webUI1080pGerRouter.route('/Multimedia/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/1080p/WebUserInterface_HD-Series_Multimedia', {
            title: 'INSTAR IP Kamera 1080p Weboberfläche - Multimedia Menu',
            ampimg: '/images/Search/WebUI_1080p_SearchThumb_Multimedia_Overlays.jpg',
            headline: 'INSTAR Full HD Weboberfläche -  Multimedia',
            breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Web_User_Interface/1080p_Series/Overview/">Web User Interface</a></li><li><a href="/Web_User_Interface/1080p_Series/">1080p Serie</a></li><li><a href="/Web_User_Interface/1080p_Series/Multimedia/">Multimedia</a></li>',
            canonical: '/Web_User_Interface/1080p_Series/Multimedia/',
            description: '1080p Weboberfläche - ',
      			pacc: '',
      			ptab: 'hidden',
      			qiacc: '',
      			qitab: 'hidden',
      			mdacc: '',
      			mdtab: 'hidden',
      			iaacc: '',
      			iatab: 'hidden',
      			auacc: '',
      			autab: 'hidden',
      			hdacc: 'hidden',
      			hdtab: 'hidden',
      			fhdacc: '',
      			fhdtab: '',
      			sacc: 'hidden',
      			dlacc: 'hidden',
      			dltab: 'hidden',
          });
      });

/* GET HD WebUI page. */
webUI1080pGerRouter.route('/Multimedia/Audio/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/1080p/WebUserInterface_HD-Series_Multimedia_Audio', {
            title: 'INSTAR IP Kamera 1080p Weboberfläche - Multimedia Menu :: Audio',
            ampimg: '/images/Search/WebUI_1080p_SearchThumb_Multimedia_Audio.jpg',
            headline: 'INSTAR Full HD Weboberfläche -  Multimedia :: Audio',
            breadcrumbs: '<li><a href="/Web_User_Interface/1080p_Series/Overview/">Web User Interface</a></li><li><a href="/Web_User_Interface/1080p_Series/">1080p Serie</a></li><li><a href="/Web_User_Interface/1080p_Series/Multimedia/">Multimedia</a></li><li><a href="/Web_User_Interface/1080p_Series/Multimedia/Audio">Audio</a></li>',
            canonical: '/Web_User_Interface/1080p_Series/Multimedia/Audio/',
            description: '1080p Weboberfläche - ',
      			pacc: '',
      			ptab: 'hidden',
      			qiacc: '',
      			qitab: 'hidden',
      			mdacc: '',
      			mdtab: 'hidden',
      			iaacc: '',
      			iatab: 'hidden',
      			auacc: '',
      			autab: 'hidden',
      			hdacc: 'hidden',
      			hdtab: 'hidden',
      			fhdacc: '',
      			fhdtab: '',
      			sacc: 'hidden',
      			dlacc: 'hidden',
      			dltab: 'hidden',
          });
      });

/* GET HD WebUI page. */
webUI1080pGerRouter.route('/Multimedia/Video/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/1080p/WebUserInterface_HD-Series_Multimedia_Video', {
            title: 'INSTAR IP Kamera 1080p Weboberfläche - Multimedia Menu :: Video',
            ampimg: '/images/Search/WebUI_1080p_SearchThumb_Multimedia_Video.jpg',
            headline: 'INSTAR Full HD Weboberfläche -  Multimedia :: Video',
            breadcrumbs: '<li><a href="/Web_User_Interface/1080p_Series/Overview/">Web User Interface</a></li><li><a href="/Web_User_Interface/1080p_Series/">1080p Serie</a></li><li><a href="/Web_User_Interface/1080p_Series/Multimedia/">Multimedia</a></li><li><a href="/Web_User_Interface/1080p_Series/Multimedia/Video">Video</a></li>',
            canonical: '/Web_User_Interface/1080p_Series/Multimedia/Video/',
            description: '1080p Weboberfläche - ',
      			pacc: '',
      			ptab: 'hidden',
      			qiacc: '',
      			qitab: 'hidden',
      			mdacc: '',
      			mdtab: 'hidden',
      			iaacc: '',
      			iatab: 'hidden',
      			auacc: '',
      			autab: 'hidden',
      			hdacc: 'hidden',
      			hdtab: 'hidden',
      			fhdacc: '',
      			fhdtab: '',
      			sacc: 'hidden',
      			dlacc: 'hidden',
      			dltab: 'hidden',
          });
      });

/* GET HD WebUI page. */
webUI1080pGerRouter.route('/Multimedia/Bild/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/1080p/WebUserInterface_HD-Series_Multimedia_Image', {
            title: 'INSTAR IP Kamera 1080p Weboberfläche - Multimedia Menu :: Bild',
            ampimg: '/images/Search/WebUI_1080p_SearchThumb_Multimedia_Image.jpg',
            headline: 'INSTAR Full HD Weboberfläche -  Multimedia :: Bild',
            breadcrumbs: '<li><a href="/Web_User_Interface/1080p_Series/Overview/">Web User Interface</a></li><li><a href="/Web_User_Interface/1080p_Series/">1080p Serie</a></li><li><a href="/Web_User_Interface/1080p_Series/Multimedia/">Multimedia</a></li><li><a href="/Web_User_Interface/1080p_Series/Multimedia/Bild">Bild</a></li>',
            canonical: '/Web_User_Interface/1080p_Series/Multimedia/Image/',
            description: '1080p Weboberfläche - ',
      			pacc: '',
      			ptab: 'hidden',
      			qiacc: '',
      			qitab: 'hidden',
      			mdacc: '',
      			mdtab: 'hidden',
      			iaacc: '',
      			iatab: 'hidden',
      			auacc: '',
      			autab: 'hidden',
      			hdacc: 'hidden',
      			hdtab: 'hidden',
      			fhdacc: '',
      			fhdtab: '',
      			sacc: 'hidden',
      			dlacc: 'hidden',
      			dltab: 'hidden',
          });
      });

/* GET HD WebUI page. */
webUI1080pGerRouter.route('/Multimedia/Bild/Wide_Dynamic_Range')
    .get(function(req, res) {
        res.render('./Web_User_Interface/1080p/WebUserInterface_HD-Series_Multimedia_Image_WDR', {
            title: 'INSTAR IP Kamera 1080p Weboberfläche - Multimedia Menu :: Bild WDR',
            ampimg: '/images/Search/WebUI_1080p_SearchThumb_Multimedia_Image.jpg',
            headline: 'INSTAR Full HD Weboberfläche -  Multimedia :: WDR Bild',
            breadcrumbs: '<li><a href="/Web_User_Interface/1080p_Series/">1080p Serie</a></li><li><a href="/Web_User_Interface/1080p_Series/Multimedia/">Multimedia</a></li><li><a href="/Web_User_Interface/1080p_Series/Multimedia/Bild">Bild</a></li><li><a href="/Web_User_Interface/1080p_Series/Multimedia/Bild/Wide_Dynamic_Range">WDR</a></li>',
            canonical: '/Web_User_Interface/1080p_Series/Multimedia/Image/Wide_Dynamic_Range/',
            description: '1080p Weboberfläche - ',
      			pacc: '',
      			ptab: 'hidden',
      			qiacc: '',
      			qitab: 'hidden',
      			mdacc: '',
      			mdtab: 'hidden',
      			iaacc: '',
      			iatab: 'hidden',
      			auacc: '',
      			autab: 'hidden',
      			hdacc: 'hidden',
      			hdtab: 'hidden',
      			fhdacc: '',
      			fhdtab: '',
      			sacc: 'hidden',
      			dlacc: 'hidden',
      			dltab: 'hidden',
          });
      });

/* GET HD WebUI page. */
webUI1080pGerRouter.route('/Multimedia/Video_Overlays/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/1080p/WebUserInterface_HD-Series_Multimedia_Overlays', {
            title: 'INSTAR IP Kamera 1080p Weboberfläche - Multimedia Menu :: Video Overlays',
            ampimg: '/images/Search/WebUI_1080p_SearchThumb_Multimedia_Overlays.jpg',
            headline: 'INSTAR Web User Interface fullHD Series :: Multimedia :: Video Overlays',
            breadcrumbs: '<li><a href="/Web_User_Interface/1080p_Series/Overview/">Web User Interface</a></li><li><a href="/Web_User_Interface/1080p_Series/">1080p Series</a></li><li><a href="/Web_User_Interface/1080p_Series/Multimedia/">Multimedia</a></li><li><a href="/Web_User_Interface/1080p_Series/Multimedia/Video_Overlays">Video Overlays</a></li>',
            canonical: '/Web_User_Interface/1080p_Series/Multimedia/Video_Overlays/',
            description: '1080p Weboberfläche - ',
      			pacc: '',
      			ptab: 'hidden',
      			qiacc: '',
      			qitab: 'hidden',
      			mdacc: '',
      			mdtab: 'hidden',
      			iaacc: '',
      			iatab: 'hidden',
      			auacc: '',
      			autab: 'hidden',
      			hdacc: 'hidden',
      			hdtab: 'hidden',
      			fhdacc: '',
      			fhdtab: '',
      			sacc: 'hidden',
      			dlacc: 'hidden',
      			dltab: 'hidden',
          });
      });

/* GET HD WebUI page. */
webUI1080pGerRouter.route('/Multimedia/Privat/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/1080p/WebUserInterface_HD-Series_Multimedia_Privacy_Mask', {
            title: 'INSTAR IP Kamera 1080p Weboberfläche - Multimedia Menu :: Privatsphäre',
            ampimg: '/images/Search/WebUI_1080p_SearchThumb_Multimedia_Privat.jpg',
            headline: 'INSTAR Full HD Weboberfläche -  Multimedia :: Privatsphäre',
            breadcrumbs: '<li><a href="/Web_User_Interface/1080p_Series/Overview/">Web User Interface</a></li><li><a href="/Web_User_Interface/1080p_Series/">1080p Serie</a></li><li><a href="/Web_User_Interface/1080p_Series/Multimedia/">Multimedia</a></li><li><a href="/Web_User_Interface/1080p_Series/Multimedia/Privat">Privatsphäre</a></li>',
            canonical: '/Web_User_Interface/1080p_Series/Multimedia/Privacy_Mask/',
            description: '1080p Weboberfläche - ',
      			pacc: '',
      			ptab: 'hidden',
      			qiacc: '',
      			qitab: 'hidden',
      			mdacc: '',
      			mdtab: 'hidden',
      			iaacc: '',
      			iatab: 'hidden',
      			auacc: '',
      			autab: 'hidden',
      			hdacc: 'hidden',
      			hdtab: 'hidden',
      			fhdacc: '',
      			fhdtab: '',
      			sacc: 'hidden',
      			dlacc: 'hidden',
      			dltab: 'hidden',
          });
      });

/* ###################################### fullHD Series Alarm ###################################### */

/* GET HD WebUI page. */
webUI1080pGerRouter.route('/Alarm/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/1080p/WebUserInterface_HD-Series_Alarm', {
            title: 'INSTAR IP Kamera 1080p Weboberfläche - Alarm Menu',
            ampimg: '/images/Search/WebUI_1080p_SearchThumb_Alarm_Alarm_Actions.jpg',
            headline: 'INSTAR Full HD Weboberfläche -  Alarm',
            breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Web_User_Interface/1080p_Series/Overview/">Web User Interface</a></li><li><a href="/Web_User_Interface/1080p_Series/">1080p Serie</a></li><li><a href="/Web_User_Interface/1080p_Series/Alarm/">Alarm</a></li>',
            canonical: '/Web_User_Interface/1080p_Series/Alarm/',
            description: '1080p Weboberfläche - ',
      			pacc: '',
      			ptab: 'hidden',
      			qiacc: '',
      			qitab: 'hidden',
      			mdacc: '',
      			mdtab: 'hidden',
      			iaacc: '',
      			iatab: 'hidden',
      			auacc: '',
      			autab: 'hidden',
      			hdacc: 'hidden',
      			hdtab: 'hidden',
      			fhdacc: '',
      			fhdtab: '',
      			sacc: 'hidden',
      			dlacc: 'hidden',
      			dltab: 'hidden',
          });
      });

/* GET HD WebUI page. */
webUI1080pGerRouter.route('/Alarm/Bereiche/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/1080p/WebUserInterface_HD-Series_Alarm_Areas', {
            title: 'INSTAR IP Kamera 1080p Weboberfläche - Alarm Menu :: Bereiche',
            ampimg: '/images/Search/WebUI_1080p_SearchThumb_Alarm_Alarm_Areas.jpg',
            headline: 'INSTAR Full HD Weboberfläche -  Alarm :: Bereiche',
            breadcrumbs: '<li><a href="/Web_User_Interface/1080p_Series/Overview/">Web User Interface</a></li><li><a href="/Web_User_Interface/1080p_Series/">1080p Serie</a></li><li><a href="/Web_User_Interface/1080p_Series/Alarm/">Alarm</a></li><li><a href="/Web_User_Interface/1080p_Series/Alarm/Bereiche/">Bereiche</a></li>',
            canonical: '/Web_User_Interface/1080p_Series/Alarm/Areas/',
            description: '1080p Weboberfläche - ',
      			pacc: '',
      			ptab: 'hidden',
      			qiacc: '',
      			qitab: 'hidden',
      			mdacc: '',
      			mdtab: 'hidden',
      			iaacc: '',
      			iatab: 'hidden',
      			auacc: '',
      			autab: 'hidden',
      			hdacc: 'hidden',
      			hdtab: 'hidden',
      			fhdacc: '',
      			fhdtab: '',
      			sacc: 'hidden',
      			dlacc: 'hidden',
      			dltab: 'hidden',
          });
      });

/* GET HD WebUI page. */
webUI1080pGerRouter.route('/Alarm/Aktionen/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/1080p/WebUserInterface_HD-Series_Alarm_Actions', {
            title: 'INSTAR IP Kamera 1080p Weboberfläche - Alarm Menu :: Aktionen',
            ampimg: '/images/Search/WebUI_1080p_SearchThumb_Alarm_Alarm_Actions.jpg',
            headline: 'INSTAR Full HD Weboberfläche -  Alarm :: Aktionen',
            breadcrumbs: '<li><a href="/Web_User_Interface/1080p_Series/Overview/">Web User Interface</a></li><li><a href="/Web_User_Interface/1080p_Series/">1080p Serie</a></li><li><a href="/Web_User_Interface/1080p_Series/Alarm/">Alarm</a></li><li><a href="/Web_User_Interface/1080p_Series/Alarm/Aktionen/">Aktionen</a></li>',
            canonical: '/Web_User_Interface/1080p_Series/Alarm/Actions/',
            description: '1080p Weboberfläche - ',
      			pacc: '',
      			ptab: 'hidden',
      			qiacc: '',
      			qitab: 'hidden',
      			mdacc: '',
      			mdtab: 'hidden',
      			iaacc: '',
      			iatab: 'hidden',
      			auacc: '',
      			autab: 'hidden',
      			hdacc: 'hidden',
      			hdtab: 'hidden',
      			fhdacc: '',
      			fhdtab: '',
      			sacc: 'hidden',
      			dlacc: 'hidden',
      			dltab: 'hidden',
          });
      });

/* GET HD WebUI page. */
webUI1080pGerRouter.route('/Alarm/Zeitplan/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/1080p/WebUserInterface_HD-Series_Alarm_Schedule', {
            title: 'INSTAR IP Kamera 1080p Weboberfläche - Alarm Menu :: Zeitplan',
            ampimg: '/images/Search/WebUI_1080p_SearchThumb_Alarm_Schedule.jpg',
            headline: 'INSTAR Full HD Weboberfläche -  Alarm :: Zeitplan',
            breadcrumbs: '<li><a href="/Web_User_Interface/1080p_Series/Overview/">Web User Interface</a></li><li><a href="/Web_User_Interface/1080p_Series/">1080p Serie</a></li><li><a href="/Web_User_Interface/1080p_Series/Alarm/">Alarm</a></li><li><a href="/Web_User_Interface/1080p_Series/Alarm/Zeitplan/">Zeitplan</a></li>',
            canonical: '/Web_User_Interface/1080p_Series/Alarm/Schedule/',
            description: '1080p Weboberfläche - ',
      			pacc: '',
      			ptab: 'hidden',
      			qiacc: '',
      			qitab: 'hidden',
      			mdacc: '',
      			mdtab: 'hidden',
      			iaacc: '',
      			iatab: 'hidden',
      			auacc: '',
      			autab: 'hidden',
      			hdacc: 'hidden',
      			hdtab: 'hidden',
      			fhdacc: '',
      			fhdtab: '',
      			sacc: 'hidden',
      			dlacc: 'hidden',
      			dltab: 'hidden',
          });
      });

/* GET HD WebUI page. */
webUI1080pGerRouter.route('/Alarm/Alarm_Server/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/1080p/WebUserInterface_HD-Series_Alarm_Alarm_Server', {
            title: 'INSTAR IP Kamera 1080p Weboberfläche - Alarm Menu :: Alarm Server',
            ampimg: '/images/Search/WebUI_1080p_SearchThumb_Alarm_Alarmserver.jpg',
            headline: 'INSTAR Full HD Weboberfläche -  Alarm :: Alarm Server',
            breadcrumbs: '<li><a href="/Web_User_Interface/1080p_Series/Overview/">Web User Interface</a></li><li><a href="/Web_User_Interface/1080p_Series/">1080p Serie</a></li><li><a href="/Web_User_Interface/1080p_Series/Alarm/">Alarm</a></li><li><a href="/Web_User_Interface/1080p_Series/Alarm/Alarm_Server/">Alarm Server</a></li>',
            canonical: '/Web_User_Interface/1080p_Series/Alarm/Alarm_Server/',
            description: '1080p Weboberfläche - ',
      			pacc: '',
      			ptab: 'hidden',
      			qiacc: '',
      			qitab: 'hidden',
      			mdacc: '',
      			mdtab: 'hidden',
      			iaacc: '',
      			iatab: 'hidden',
      			auacc: '',
      			autab: 'hidden',
      			hdacc: 'hidden',
      			hdtab: 'hidden',
      			fhdacc: '',
      			fhdtab: '',
      			sacc: 'hidden',
      			dlacc: 'hidden',
      			dltab: 'hidden',
          });
      });

/* GET HD WebUI page. */
webUI1080pGerRouter.route('/Alarm/Push_Dienst/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/1080p/WebUserInterface_HD-Series_Alarm_Push_Service', {
            title: 'INSTAR IP Kamera 1080p Weboberfläche - Alarm Menu :: Push Dienst',
            ampimg: '/images/Search/WebUI_1080p_SearchThumb_Alarm_Push_Service.jpg',
            headline: 'INSTAR Full HD Weboberfläche -  Alarm :: Push Dienst',
            breadcrumbs: '<li><a href="/Web_User_Interface/1080p_Series/Overview/">Web User Interface</a></li><li><a href="/Web_User_Interface/1080p_Series/">1080p Serie</a></li><li><a href="/Web_User_Interface/1080p_Series/Alarm/">Alarm</a></li><li><a href="/Web_User_Interface/1080p_Series/Alarm/Push_Dienst/">Push Dienst</a></li>',
            canonical: '/Web_User_Interface/1080p_Series/Alarm/Push_Service/',
            description: '1080p Weboberfläche - ',
      			pacc: '',
      			ptab: 'hidden',
      			qiacc: '',
      			qitab: 'hidden',
      			mdacc: '',
      			mdtab: 'hidden',
      			iaacc: '',
      			iatab: 'hidden',
      			auacc: '',
      			autab: 'hidden',
      			hdacc: 'hidden',
      			hdtab: 'hidden',
      			fhdacc: '',
      			fhdtab: '',
      			sacc: 'hidden',
      			dlacc: 'hidden',
      			dltab: 'hidden',
          });
      });

/* ###################################### fullHD Series Recording ###################################### */

/* GET HD WebUI page. */
webUI1080pGerRouter.route('/Aufnahme_Aufgaben/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/1080p/WebUserInterface_HD-Series_Recording', {
            title: 'INSTAR IP Kamera 1080p Weboberfläche - Aufnahme Menu',
            ampimg: '/images/Search/WebUI_1080p_SearchThumb_Tasks_Video_Recording.jpg',
            headline: 'INSTAR Full HD Weboberfläche -  Aufnahme',
            breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Web_User_Interface/1080p_Series/Overview/">Web User Interface</a></li><li><a href="/Web_User_Interface/1080p_Series/">1080p Serie</a></li><li><a href="/Web_User_Interface/1080p_Series/Aufnahme_Aufgaben/">Aufnahme Aufgaben</a></li>',
            canonical: '/Web_User_Interface/1080p_Series/Recording/',
            description: '1080p Weboberfläche - ',
      			pacc: '',
      			ptab: 'hidden',
      			qiacc: '',
      			qitab: 'hidden',
      			mdacc: '',
      			mdtab: 'hidden',
      			iaacc: '',
      			iatab: 'hidden',
      			auacc: '',
      			autab: 'hidden',
      			hdacc: 'hidden',
      			hdtab: 'hidden',
      			fhdacc: '',
      			fhdtab: '',
      			sacc: 'hidden',
      			dlacc: 'hidden',
      			dltab: 'hidden',
          });
      });

/* GET HD WebUI page. */
webUI1080pGerRouter.route('/Aufnahme_Aufgaben/Video/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/1080p/WebUserInterface_HD-Series_Recording_Video', {
            title: 'INSTAR IP Kamera 1080p Weboberfläche - Aufnahme Menu :: Video',
            ampimg: '/images/Search/WebUI_1080p_SearchThumb_Tasks_Video_Recording.jpg',
            headline: 'INSTAR Full HD Weboberfläche -  Aufnahme :: Video',
            breadcrumbs: '<li><a href="/Web_User_Interface/1080p_Series/Overview/">Web User Interface</a></li><li><a href="/Web_User_Interface/1080p_Series/">1080p Serie</a></li><li><a href="/Web_User_Interface/1080p_Series/Aufnahme_Aufgaben/">Aufnahme Aufgaben</a></li><li><a href="/Web_User_Interface/1080p_Series/Aufnahme_Aufgaben/Video">Video</a></li>',
            canonical: '/Web_User_Interface/1080p_Series/Recording/Video/',
            description: '1080p Weboberfläche - ',
      			pacc: '',
      			ptab: 'hidden',
      			qiacc: '',
      			qitab: 'hidden',
      			mdacc: '',
      			mdtab: 'hidden',
      			iaacc: '',
      			iatab: 'hidden',
      			auacc: '',
      			autab: 'hidden',
      			hdacc: 'hidden',
      			hdtab: 'hidden',
      			fhdacc: '',
      			fhdtab: '',
      			sacc: 'hidden',
      			dlacc: 'hidden',
      			dltab: 'hidden',
          });
      });

/* GET HD WebUI page. */
webUI1080pGerRouter.route('/Aufnahme_Aufgaben/Fotoserie/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/1080p/WebUserInterface_HD-Series_Recording_Photoseries', {
            title: 'INSTAR IP Kamera 1080p Weboberfläche - Aufnahme Menu :: Fotoserie',
            ampimg: '/images/Search/WebUI_1080p_SearchThumb_Tasks_Photoseries.jpg',
            headline: 'INSTAR Full HD Weboberfläche -  Aufnahme :: Fotoserie',
            breadcrumbs: '<li><a href="/Web_User_Interface/1080p_Series/Overview/">Web User Interface</a></li><li><a href="/Web_User_Interface/1080p_Series/">1080p Serie</a></li><li><a href="/Web_User_Interface/1080p_Series/Aufnahme_Aufgaben/">Aufnahme Aufgaben</a></li><li><a href="/Web_User_Interface/1080p_Series/Aufnahme_Aufgaben/Fotoserie">Fotoserie</a></li>',
            canonical: '/Web_User_Interface/1080p_Series/Recording/Photoseries/',
            description: '1080p Weboberfläche - ',
      			pacc: '',
      			ptab: 'hidden',
      			qiacc: '',
      			qitab: 'hidden',
      			mdacc: '',
      			mdtab: 'hidden',
      			iaacc: '',
      			iatab: 'hidden',
      			auacc: '',
      			autab: 'hidden',
      			hdacc: 'hidden',
      			hdtab: 'hidden',
      			fhdacc: '',
      			fhdtab: '',
      			sacc: 'hidden',
      			dlacc: 'hidden',
      			dltab: 'hidden',
          });
      });

/* ###################################### fullHD Series LiveVideo ###################################### */

/* GET HD WebUI page. */
webUI1080pGerRouter.route('/Live_Video/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/1080p/WebUserInterface_HD-Series_Live_Video', {
            title: 'INSTAR IP Kamera 1080p Weboberfläche - Live Video',
            ampimg: '/images/Search/QI_SearchThumb_WebUI_1080p.jpg',
            headline: 'INSTAR Full HD Weboberfläche -  Live Video',
      			breadcrumbs: '<li><a href="/Web_User_Interface/1080p_Series/Overview/">Web User Interface</a></li><li><a href="/Web_User_Interface/1080p_Series/">1080p Serie</a></li>',
            canonical: '/Web_User_Interface/1080p_Series/Live_Video/',
            description: '1080p Weboberfläche - ',
      			pacc: '',
      			ptab: 'hidden',
      			qiacc: '',
      			qitab: 'hidden',
      			mdacc: '',
      			mdtab: 'hidden',
      			iaacc: '',
      			iatab: 'hidden',
      			auacc: '',
      			autab: 'hidden',
      			hdacc: 'hidden',
      			hdtab: 'hidden',
      			fhdacc: '',
      			fhdtab: '',
      			sacc: 'hidden',
      			dlacc: 'hidden',
      			dltab: 'hidden',
          });
      });

/* ###################################### fullHD Series Cloud ###################################### */

/* GET HD WebUI page. */
webUI1080pGerRouter.route('/Cloud/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/1080p/WebUserInterface_HD-Series_Cloud', {
            title: 'INSTAR IP Kamera 1080p Weboberfläche - INSTAR Cloud',
            ampimg: '/images/Search/WebUI_1080p_SearchThumb_Cloud_Login.jpg',
            headline: 'INSTAR Full HD Weboberfläche -  INSTAR Cloud',
      			breadcrumbs: '<li><a href="/Web_User_Interface/1080p_Series/Overview/">Web User Interface</a></li><li><a href="/Web_User_Interface/1080p_Series/">1080p Serie</a></li>',
            canonical: '/Web_User_Interface/1080p_Series/Cloud/',
            description: '1080p Weboberfläche - ',
      			pacc: '',
      			ptab: 'hidden',
      			qiacc: '',
      			qitab: 'hidden',
      			mdacc: '',
      			mdtab: 'hidden',
      			iaacc: '',
      			iatab: 'hidden',
      			auacc: '',
      			autab: 'hidden',
      			hdacc: 'hidden',
      			hdtab: 'hidden',
      			fhdacc: '',
      			fhdtab: '',
      			sacc: 'hidden',
      			dlacc: 'hidden',
      			dltab: 'hidden',
          });
      });


module.exports = webUI1080pGerRouter;
