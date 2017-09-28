var express = require('express');
var productRouter = express.Router();

/* ****************************************** GET /General Product Routes ****************************************** */

productRouter.route('/')
  .get(function(req, res) {
      res.render('./Products/Products', {
          title: 'INSTAR DEUTSCHLAND - Überwachungskameras, IP-Kameras, Netzwerkkameras, Überwachungskameras , IP-Cam, Nachtsichtkameras , spycams, ipcam, Cloud-Aufnahme, Video-Überwachung, NVR, Netzwerk-Videorecorder, Sicherheitstechnik...',
          ampimg: '/images/Search/P_SearchThumb_Products.jpg',
          headline: 'INSTAR ist eine der bekanntesten Marken für hochwertige Sicherheitstechnik die in Deutschland entwickelt wird. INSTAR bietet IP Kameras für den Innen und Außenbereich, WLAN Netzwerkkameras, HD IP Kameras, steuerbare IP Kameras, IP Kameras mit Infrarot Nachtsicht sowie PoE Injektoren, Gigabit PoE Injectoren, Powerline Adapter, Router, Switches, Bewegungsmelder mit PIR und Mikrowellen, Mikrofone, Objektive, eine patentierte Heizung sowie weiteres Zubehör für IP Überwachungskameras.',
          breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Products/">Produkte</a></li>',
          canonical: '/Products/',
          description: 'INSTAR ist eine der bekanntesten Marken für hochwertige Sicherheitstechnik die in Deutschland entwickelt wird. INSTAR bietet IP Kameras für den Innen und Außenbereich, WLAN Netzwerkkameras, HD IP Kameras, steuerbare IP Kameras, IP Kameras mit Infrarot Nachtsicht sowie PoE Injektoren, Gigabit PoE Injectoren, Powerline Adapter, Router, Switches, Bewegungsmelder mit PIR und Mikrowellen, Mikrofone, Objektive, eine patentierte Heizung sowie weiteres Zubehör für IP Überwachungskameras.',
      		pacc: 'expanded',
      		ptab: '',
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
      		fhdacc: 'hidden',
      		fhdtab: 'hidden',
      		sacc: 'hidden',
      		dlacc: 'hidden',
      		dltab: 'hidden',
        });
    });

productRouter.route('/Usermanuals')
  .get(function(req, res) {
      res.render('./Products/Usermanuals', {
          title: 'INSTAR Produkte - Handbücher und Schnellinstallationsanleitungen',
          ampimg: '/images/Search/P_SearchThumb_Products.jpg',
          headline: 'INSTAR Produkte - Handbücher und Schnellinstallationsanleitungen für Überwachungskameras, IP-Kameras, Netzwerkkameras, Überwachungskameras , IP-Cam, Nachtsichtkameras , spycams, ipcam, Cloud-Aufnahme, Video-Überwachung, NVR, Netzwerk-Videorecorder, Sicherheitstechnik...',
          breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Products/">Produkte</a></li><li><a href="/Products/Usermanuals/">Usermanuals</a></li>',
          canonical: '/Products/Usermanuals/',
          description: 'INSTAR Produkte - Handbücher und Schnellinstallationsanleitungen für Überwachungskameras, IP-Kameras, Netzwerkkameras, Überwachungskameras , IP-Cam, Nachtsichtkameras , spycams, ipcam, Cloud-Aufnahme, Video-Überwachung, NVR, Netzwerk-Videorecorder, Sicherheitstechnik...',
      		pacc: 'expanded',
      		ptab: '',
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
      		fhdacc: 'hidden',
      		fhdtab: 'hidden',
      		sacc: 'hidden',
      		dlacc: 'hidden',
      		dltab: 'hidden',
        });
    });

productRouter.route('/SMA_RP-SMA_Antenna_Connector')
.get(function(req, res) {
  res.render('./Products/SMA_RP-SMA_Antenna_Connector', {
      title: 'WiFi Antennenanschluß SMA oder RP-SMA Ihrer INSTAR WLAN Netzwerkkamera',
      ampimg: '/images/Search/P_SearchThumb_SMA-RPSMA.jpg',
      breadcrumbs: '<li class="breadcrumb-item"><a href="/">Home</a></li><li class="breadcrumb-item"><a href="/Products/">Produkte</a></li><li class="breadcrumb-item"><a href="/Products/SMA_RP-SMA_Antenna_Connector/">SMA and RP-SMA Antenna</a></li>',
      headline: 'INSTAR Products',
      canonical: '/Products/SMA_RP-SMA_Antenna_Connector/',
    });
});

/* ****************************************** GET Camera Lenses ****************************************** */
productRouter.route('/Lenses')
.get(function(req, res) {
  res.render('./Products/Lenses', {
      title: 'Kamera Objektive für Ihre INSTAR Netzwerkkamera',
      ampimg: '/images/Search/P_SearchThumb_Products.jpg',
      headline: 'INSTAR bietet Ihnen eine weite Auswahl an Austauschobjektiven für Ihre INSTAR Überwachungskamera.',
      breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Products/">Produkte</a></li><li><a href="/Products/Lenses/">Objektive</a></li>',
      canonical: '/Products/Lenses/',
      description: 'INSTAR bietet Ihnen eine weite Auswahl an Austauschobjektiven für Ihre INSTAR Sicherheitskamera. Passen Sie den Blickwinkel Ihrer IP Kamera an die Bedürfnisse Ihrer Überwachung an.',
  		pacc: 'expanded',
  		ptab: '',
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
  		fhdacc: 'hidden',
  		fhdtab: 'hidden',
  		sacc: 'hidden',
  		dlacc: 'hidden',
  		dltab: 'hidden',
    });
});

/* ****************************************** GET Full HD Lenses ****************************************** */
productRouter.route('/Lenses/IN-8015/')
.get(function(req, res) {
  res.render('./Products/Lenses_IN-8015', {
      title: 'IN-8015 Full HD Objektiv Upgrade',
      ampimg: '/images/Search/P_SearchThumb_Products.jpg',
      headline: 'INSTAR Full HD Austauschobjektive',
      breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Products/">Produkte</a></li><li><a href="/Products/Lenses/">Objektive</a></li><li><a href="/Products/Lenses/IN-8015/">IN-8015 Full HD</a></li>',
      canonical: '/Products/Lenses/IN-8015/',
      description: 'INSTAR bietet Ihnen eine weite Auswahl an Austauschobjektiven für Ihre INSTAR IN-8015 Full HDSicherheitskamera. Passen Sie den Blickwinkel Ihrer IP Kamera an die Bedürfnisse Ihrer Überwachung an.',
  		pacc: 'expanded',
  		ptab: '',
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
  		fhdacc: 'hidden',
  		fhdtab: 'hidden',
  		sacc: 'hidden',
  		dlacc: 'hidden',
  		dltab: 'hidden',
    });
});

productRouter.route('/Lenses/IN-9008/')
.get(function(req, res) {
  res.render('./Products/Lenses_IN-9008', {
      title: 'IN-9008 Full HD Lense Upgrade',
      ampimg: '/images/Search/P_SearchThumb_Products.jpg',
      headline: 'INSTAR Full HD Austauschobjektive',
      breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Products/">Produkte</a></li><li><a href="/Products/Lenses/">Objektive</a></li><li><a href="/Products/Lenses/IN-9008/">IN-9008 Full HD</a></li>',
      canonical: '/Products/Lenses/IN-9008/',
      description: 'INSTAR bietet Ihnen eine weite Auswahl an Austauschobjektiven für Ihre INSTAR IN-9008 Full HDSicherheitskamera. Passen Sie den Blickwinkel Ihrer IP Kamera an die Bedürfnisse Ihrer Überwachung an.',
  		pacc: 'expanded',
  		ptab: '',
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
  		fhdacc: 'hidden',
  		fhdtab: 'hidden',
  		sacc: 'hidden',
  		dlacc: 'hidden',
  		dltab: 'hidden',
    });
});

/* ****************************************** GET S-Mount Lenses ****************************************** */
productRouter.route('/Lenses/S-Mount/IN-0180')
.get(function(req, res) {
  res.render('./Products/Lense_IN-0180', {
      title: 'IN-0180 Witwinkel-Objektiv - Kamera Objektive für Ihre INSTAR Netzwerkkamera',
      ampimg: '/images/Search/P_SearchThumb_Products.jpg',
      headline: 'INSTAR bietet Ihnen eine weite Auswahl an Austauschobjektiven für Ihre INSTAR Überwachungskamera.',
      breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Products/">Produkte</a></li><li><a href="/Products/Lenses/">Objektive</a></li><li><a href="/Products/Lenses/S-Mount/IN-0180/">S-Mount :: IN-0180</a></li>',
      canonical: '/Products/Lenses/S-Mount/IN-0180/',
      description: 'INSTAR bietet Ihnen eine weite Auswahl an Austauschobjektiven für Ihre INSTAR Sicherheitskamera. Passen Sie den Blickwinkel Ihrer IP Kamera an die Bedürfnisse Ihrer Überwachung an.',
  		pacc: 'expanded',
  		ptab: '',
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
  		fhdacc: 'hidden',
  		fhdtab: 'hidden',
  		sacc: 'hidden',
  		dlacc: 'hidden',
  		dltab: 'hidden',
    });
});

productRouter.route('/Lenses/S-Mount/IN-0220')
.get(function(req, res) {
  res.render('./Products/Lense_IN-0220', {
      title: 'IN-0220 Weitwinkel Objektiv - Kamera Objektive für Ihre INSTAR Netzwerkkamera',
      ampimg: '/images/Search/P_SearchThumb_Products.jpg',
      headline: 'INSTAR bietet Ihnen eine weite Auswahl an Austauschobjektiven für Ihre INSTAR Überwachungskamera.',
      breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Products/">Produkte</a></li><li><a href="/Products/Lenses/">Objektive</a></li><li><a href="/Products/Lenses/S-Mount/IN-0220/">S-Mount :: IN-0220</a></li>',
      canonical: '/Products/Lenses/S-Mount/IN-0220/',
      description: 'INSTAR bietet Ihnen eine weite Auswahl an Austauschobjektiven für Ihre INSTAR Sicherheitskamera. Passen Sie den Blickwinkel Ihrer IP Kamera an die Bedürfnisse Ihrer Überwachung an.',
  		pacc: 'expanded',
  		ptab: '',
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
  		fhdacc: 'hidden',
  		fhdtab: 'hidden',
  		sacc: 'hidden',
  		dlacc: 'hidden',
  		dltab: 'hidden',
    });
});

productRouter.route('/Lenses/S-Mount/IN-0290')
.get(function(req, res) {
  res.render('./Products/Lense_IN-0290', {
      title: 'IN-0290 Weitwinkel Objektiv - Kamera Objektive für Ihre INSTAR Netzwerkkamera',
      ampimg: '/images/Search/P_SearchThumb_Products.jpg',
      headline: 'INSTAR bietet Ihnen eine weite Auswahl an Austauschobjektiven für Ihre INSTAR Überwachungskamera.',
      breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Products/">Produkte</a></li><li><a href="/Products/Lenses/">Objektive</a></li><li><a href="/Products/Lenses/S-Mount/IN-0290/">S-Mount :: IN-0290</a></li>',
      canonical: '/Products/Lenses/S-Mount/IN-0290/',
      description: 'INSTAR bietet Ihnen eine weite Auswahl an Austauschobjektiven für Ihre INSTAR Sicherheitskamera. Passen Sie den Blickwinkel Ihrer IP Kamera an die Bedürfnisse Ihrer Überwachung an.',
  		pacc: 'expanded',
  		ptab: '',
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
  		fhdacc: 'hidden',
  		fhdtab: 'hidden',
  		sacc: 'hidden',
  		dlacc: 'hidden',
  		dltab: 'hidden',
    });
});

productRouter.route('/Lenses/S-Mount/IN-0360')
.get(function(req, res) {
  res.render('./Products/Lense_IN-0360', {
      title: 'IN-0360 Weitwinkel Objektiv - Kamera Objektive für Ihre INSTAR Netzwerkkamera',
      ampimg: '/images/Search/P_SearchThumb_Products.jpg',
      headline: 'INSTAR bietet Ihnen eine weite Auswahl an Austauschobjektiven für Ihre INSTAR Überwachungskamera.',
      breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Products/">Produkte</a></li><li><a href="/Products/Lenses/">Objektive</a></li><li><a href="/Products/Lenses/S-Mount/IN-0360/">S-Mount :: IN-0360</a></li>',
      canonical: '/Products/Lenses/S-Mount/IN-0360/',
      description: 'INSTAR bietet Ihnen eine weite Auswahl an Austauschobjektiven für Ihre INSTAR Sicherheitskamera. Passen Sie den Blickwinkel Ihrer IP Kamera an die Bedürfnisse Ihrer Überwachung an.',
  		pacc: 'expanded',
  		ptab: '',
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
  		fhdacc: 'hidden',
  		fhdtab: 'hidden',
  		sacc: 'hidden',
  		dlacc: 'hidden',
  		dltab: 'hidden',
    });
});

productRouter.route('/Lenses/S-Mount/IN-0430')
.get(function(req, res) {
  res.render('./Products/Lense_IN-0430', {
      title: 'IN-0430 Standard Objektiv - Kamera Objektive für Ihre INSTAR Netzwerkkamera',
      ampimg: '/images/Search/P_SearchThumb_Products.jpg',
      headline: 'INSTAR bietet Ihnen eine weite Auswahl an Austauschobjektiven für Ihre INSTAR Überwachungskamera.',
      breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Products/">Produkte</a></li><li><a href="/Products/Lenses/">Objektive</a></li><li><a href="/Products/Lenses/S-Mount/IN-0430/">S-Mount :: IN-0430</a></li>',
      canonical: '/Products/Lenses/S-Mount/IN-0430/',
      description: 'INSTAR bietet Ihnen eine weite Auswahl an Austauschobjektiven für Ihre INSTAR Sicherheitskamera. Passen Sie den Blickwinkel Ihrer IP Kamera an die Bedürfnisse Ihrer Überwachung an.',
  		pacc: 'expanded',
  		ptab: '',
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
  		fhdacc: 'hidden',
  		fhdtab: 'hidden',
  		sacc: 'hidden',
  		dlacc: 'hidden',
  		dltab: 'hidden',
    });
});

productRouter.route('/Lenses/S-Mount/IN-0600')
.get(function(req, res) {
  res.render('./Products/Lense_IN-0600', {
      title: 'IN-0600 Standard Objektiv - Kamera Objektive für Ihre INSTAR Netzwerkkamera',
      ampimg: '/images/Search/P_SearchThumb_Products.jpg',
      headline: 'INSTAR bietet Ihnen eine weite Auswahl an Austauschobjektiven für Ihre INSTAR Überwachungskamera.',
      breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Products/">Produkte</a></li><li><a href="/Products/Lenses/">Objektive</a></li><li><a href="/Products/Lenses/S-Mount/IN-0600/">S-Mount :: IN-0600</a></li>',
      canonical: '/Products/Lenses/S-Mount/IN-0600/',
      description: 'INSTAR bietet Ihnen eine weite Auswahl an Austauschobjektiven für Ihre INSTAR Sicherheitskamera. Passen Sie den Blickwinkel Ihrer IP Kamera an die Bedürfnisse Ihrer Überwachung an.',
  		pacc: 'expanded',
  		ptab: '',
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
  		fhdacc: 'hidden',
  		fhdtab: 'hidden',
  		sacc: 'hidden',
  		dlacc: 'hidden',
  		dltab: 'hidden',
    });
});

productRouter.route('/Lenses/S-Mount/IN-0800')
.get(function(req, res) {
  res.render('./Products/Lense_IN-0800', {
      title: 'IN-0800 Tele-Objektiv - Kamera Objektive für Ihre INSTAR Netzwerkkamera',
      ampimg: '/images/Search/P_SearchThumb_Products.jpg',
      headline: 'INSTAR bietet Ihnen eine weite Auswahl an Austauschobjektiven für Ihre INSTAR Überwachungskamera.',
      breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Products/">Produkte</a></li><li><a href="/Products/Lenses/">Objektive</a></li><li><a href="/Products/Lenses/S-Mount/IN-0800/">S-Mount :: IN-0800</a></li>',
      canonical: '/Products/Lenses/S-Mount/IN-0800/',
      description: 'INSTAR bietet Ihnen eine weite Auswahl an Austauschobjektiven für Ihre INSTAR Sicherheitskamera. Passen Sie den Blickwinkel Ihrer IP Kamera an die Bedürfnisse Ihrer Überwachung an.',
  		pacc: 'expanded',
  		ptab: '',
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
  		fhdacc: 'hidden',
  		fhdtab: 'hidden',
  		sacc: 'hidden',
  		dlacc: 'hidden',
  		dltab: 'hidden',
    });
});

productRouter.route('/Lenses/S-Mount/IN-1200')
.get(function(req, res) {
  res.render('./Products/Lense_IN-1200', {
      title: 'IN-1200 Tele-Objektiv - Kamera Objektive für Ihre INSTAR Netzwerkkamera',
      ampimg: '/images/Search/P_SearchThumb_Products.jpg',
      headline: 'INSTAR bietet Ihnen eine weite Auswahl an Austauschobjektiven für Ihre INSTAR Überwachungskamera.',
      breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Products/">Produkte</a></li><li><a href="/Products/Lenses/">Objektive</a></li><li><a href="/Products/Lenses/S-Mount/IN-1200/">S-Mount :: IN-1200</a></li>',
      canonical: '/Products/Lenses/S-Mount/IN-1200/',
      description: 'INSTAR bietet Ihnen eine weite Auswahl an Austauschobjektiven für Ihre INSTAR Sicherheitskamera. Passen Sie den Blickwinkel Ihrer IP Kamera an die Bedürfnisse Ihrer Überwachung an.',
  		pacc: 'expanded',
  		ptab: '',
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
  		fhdacc: 'hidden',
  		fhdtab: 'hidden',
  		sacc: 'hidden',
  		dlacc: 'hidden',
  		dltab: 'hidden',
    });
});

productRouter.route('/Lenses/S-Mount/IN-1600')
.get(function(req, res) {
  res.render('./Products/Lense_IN-1600', {
      title: 'IN-1600 Tele-Objektiv - Kamera Objektive für Ihre INSTAR Netzwerkkamera',
      ampimg: '/images/Search/P_SearchThumb_Products.jpg',
      headline: 'INSTAR bietet Ihnen eine weite Auswahl an Austauschobjektiven für Ihre INSTAR Überwachungskamera.',
      breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Products/">Produkte</a></li><li><a href="/Products/Lenses/">Objektive</a></li><li><a href="/Products/Lenses/S-Mount/IN-1600/">S-Mount :: IN-1600</a></li>',
      canonical: '/Products/Lenses/S-Mount/IN-1600/',
      description: 'INSTAR bietet Ihnen eine weite Auswahl an Austauschobjektiven für Ihre INSTAR Sicherheitskamera. Passen Sie den Blickwinkel Ihrer IP Kamera an die Bedürfnisse Ihrer Überwachung an.',
  		pacc: 'expanded',
  		ptab: '',
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
  		fhdacc: 'hidden',
  		fhdtab: 'hidden',
  		sacc: 'hidden',
  		dlacc: 'hidden',
  		dltab: 'hidden',
    });
});

productRouter.route('/Lenses/S-Mount/Lense_Comparison')
.get(function(req, res) {
  res.render('./Products/Lense_Comparison', {
      title: 'S-Mount Objektive Vergleichstabelle',
      ampimg: '/images/Search/P_SearchThumb_Products.jpg',
      headline: 'INSTAR bietet Ihnen eine weite Auswahl an Austauschobjektiven für Ihre INSTAR Überwachungskamera.',
      breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Products/">Produkte</a></li><li><a href="/Products/Lenses/">Objektive</a></li><li><a href="/Products/Lenses/S-Mount/Lense_Comparison/">Objektiv-Vergleich</a></li>',
      canonical: '/Products/Lenses/S-Mount/Lense_Comparison/',
      description: 'INSTAR bietet Ihnen eine weite Auswahl an Austauschobjektiven für Ihre INSTAR Sicherheitskamera. Passen Sie den Blickwinkel Ihrer IP Kamera an die Bedürfnisse Ihrer Überwachung an.',
  		pacc: 'expanded',
  		ptab: '',
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
  		fhdacc: 'hidden',
  		fhdtab: 'hidden',
  		sacc: 'hidden',
  		dlacc: 'hidden',
  		dltab: 'hidden',
    });
});

/* ****************************************** GET /IN-LAN ****************************************** */

productRouter.route('/IN-LAN')
.get(function(req, res) {
  res.render('./Products/IN-LAN_500', {
      title: 'IN-LAN 500p Powerline Communication',
      ampimg: '/images/Search/P_SearchThumb_Powerline.jpg',
      headline: 'INSTAR Produkte - IN-LAN Powerline - Netzwerkverbindung über die Steckdose',
      breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Products/">Produkte</a></li><li><a href="/Products/IN-LAN/">IN-LAN Powerline</a></li>',
      canonical: '/Products/IN-LAN/',
      description: 'IN-LAN 500 ist kompatibel zum HomeplugAV Standard, der z.B. auch von Devolo (DLAN) verwendet wird. Nutzen Sie Ihren IN-LAN 500 Adapter um eine Netzwerkverbindung für Ihre INSTAR Netzwerkamera über das Stromnetz in Ihrem Haus herzustellen.',
  		pacc: 'expanded',
  		ptab: '',
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
  		fhdacc: 'hidden',
  		fhdtab: 'hidden',
  		sacc: 'hidden',
  		dlacc: 'hidden',
  		dltab: 'hidden',
    });
});

/* ****************************************** GET /IN-Lighting ****************************************** */

productRouter.route('/IR_Lighting')
.get(function(req, res) {
  res.render('./Products/IR-Lighting', {
      title: 'INSTAR Infrarot Scheinwerfer für Ihre INSTAR IP Kamera',
      ampimg: '/images/Search/P_SearchThumb_InfraredSpotlights.jpg',
      headline: 'INSTAR Produkte - IN-Frared - Infrarot Schneinwerfer',
      breadcrumbs: '<li class="breadcrumb-item"><a href="/">Home</a></li><li class="breadcrumb-item"><a href="/Products/">Produkte</a></li><li class="breadcrumb-item"><a href="/Products/IR_Lighting/">IR Beleuchtung</a></li>',
      canonical: '/Products/IR_Lighting/',
      description: 'INSTAR Wiki - IP Kamera Wissensdatenbank',
  		pacc: 'expanded',
  		ptab: '',
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
  		fhdacc: 'hidden',
  		fhdtab: 'hidden',
  		sacc: 'hidden',
  		dlacc: 'hidden',
  		dltab: 'hidden',
    });
});

/* ****************************************** GET /IN-PoE ****************************************** */

productRouter.route('/Power_over_Ethernet')
.get(function(req, res) {
  res.render('./Products/IN-PoE_1000', {
      title: 'IN-PoE 1000 Power over Ethernet - Zubehör für Ihre INSTAR Netzwerkkamera',
      ampimg: '/images/Search/P_SearchThumb_PowerOverEthernet.jpg',
      headline: 'Power over Ethernet Stromversorgung über das Netzwerkkabel - sparen Sie sich die Steckdose am Installationsort der INSTAR Überwachungskamera.',
      breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Products/">Produkte</a></li><li><a href="/Products/Power_over_Ethernet/">Power over Ethernet</a></li>',
      canonical: '/Products/Power_over_Ethernet/',
      description: 'Nutzen Sie unseren INSTAR PoE Switch oder Injektor um Ihre INSTAR Power-over-Ethernet Sicherheitskamera über das LAN Kabel mit Strom zu versorgen.',
  		pacc: 'expanded',
  		ptab: '',
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
  		fhdacc: 'hidden',
  		fhdtab: 'hidden',
  		sacc: 'hidden',
  		dlacc: 'hidden',
  		dltab: 'hidden',
    });
});

/* ****************************************** GET /IN-Mikro ****************************************** */

productRouter.route('/IN-Mikro')
.get(function(req, res) {
  res.render('./Products/IN-Mikro', {
      title: 'IN-Mikro externes Mikrofon für Ihre INSTAR IP Kamera',
      ampimg: '/images/Search/P_SearchThumb_Microphones.jpg',
      headline: 'Das IN-Mikro 380 Mikrofon ist kompatibel mit Ihrer INSTAR Aussenkamera und ermöglicht die Tonübertragung über das Netzwerk.',
      breadcrumbs: '<li class="breadcrumb-item"><a href="/">Home</a></li><li class="breadcrumb-item"><a href="/Products/">Produkte</a></li><li class="breadcrumb-item"><a href="/Products/IN-Mikro/">IN-Mikro</a></li>',
      canonical: '/Products/IN-Mikro/',
      description: 'Das IN-Mikro 380 Mikrofon ist kompatibel mit Ihrer INSTAR Aussenkamera und ermöglicht die Tonübertragung über das Netzwerk. In Kombination mit einem externen Lautsprecher ist so eine 2-wege Kommunikation realisierbar.',
  		pacc: 'expanded',
  		ptab: '',
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
  		fhdacc: 'hidden',
  		fhdtab: 'hidden',
  		sacc: 'hidden',
  		dlacc: 'hidden',
  		dltab: 'hidden',
    });
});

/* ****************************************** GET /IN-Route ****************************************** */

productRouter.route('/IN-Route')
.get(function(req, res) {
  res.render('./Products/IN-Route_P52', {
      title: 'IN-Route P52 Travel Router und Powerbank Produktübersicht',
      ampimg: '/images/Search/P_SearchThumb_MobileRouter.jpg',
      headline: 'INSTAR IN-Route P52 - Mobiler Router, NAS Laufwerk und Powerbank.',
      breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Products/">Produkte</a></li><li><a href="/Products/IN-Route/">IN-Route P52</a></li>',
      canonical: '/Products/IN-Route/',
      description: 'Die INSTAR IN-Route Line bietet Ihnen eine mobile Plug-and-Play WiFi Lösung um Informationen zwischen WLAN Geräten zu auszutauschen. Wir bieten Ihnen eine NAS Lösung für Ihre USB Massespeicher, als auch eine Powerbank um Ihr Smartphone oder Kompaktkamera zu laden. ',
  		pacc: 'expanded',
  		ptab: '',
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
  		fhdacc: 'hidden',
  		fhdtab: 'hidden',
  		sacc: 'hidden',
  		dlacc: 'hidden',
  		dltab: 'hidden',
    });
});

productRouter.route('/IN-Route/First_Steps')
.get(function(req, res) {
  res.render('./Products/IN-Route_P52_First_Steps', {
      title: 'INSTAR IN-Route P52 - Erste Schritte: Schnellinstallations-Assistent',
      ampimg: '/images/Search/P_SearchThumb_MobileRouter.jpg',
      headline: 'INSTAR IN-Route P52 - Mobiler Router, NAS Laufwerk und Powerbank.',
      breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Products/">Produkte</a></li><li><a href="/Products/IN-Route/">IN-Route P52</a></li><li><a href="/Products/IN-Route/First_Steps/">First Steps</a></li>',
      canonical: '/Products/IN-Route/First_Steps/',
      description: 'Die INSTAR IN-Route Line bietet Ihnen eine mobile Plug-and-Play WiFi Lösung um Informationen zwischen WLAN Geräten zu auszutauschen. Wir bieten Ihnen eine NAS Lösung für Ihre USB Massespeicher, als auch eine Powerbank um Ihr Smartphone oder Kompaktkamera zu laden. ',
  		pacc: 'expanded',
  		ptab: '',
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
  		fhdacc: 'hidden',
  		fhdtab: 'hidden',
  		sacc: 'hidden',
  		dlacc: 'hidden',
  		dltab: 'hidden',
    });
});

productRouter.route('/IN-Route/First_Steps/Introduction')
.get(function(req, res) {
  res.render('./Products/IN-Route_P52_First_Steps_Introduction', {
      title: 'INSTAR IN-Route P52 - Übersicht über die Produkt Features und Einführung in Betriebsmodi',
      ampimg: '/images/Search/P_SearchThumb_MobileRouter.jpg',
      headline: 'INSTAR IN-Route P52 - Mobiler Router, NAS Laufwerk und Powerbank.',
      breadcrumbs: '<li><a href="/Products/">Produkte</a></li><li><a href="/Products/IN-Route/">IN-Route P52</a></li><li><a href="/Products/IN-Route/First_Steps/">First Steps</a></li><li><a href="/Products/IN-Route/First_Steps/Introduction/">Introduction</a></li>',
      canonical: '/Products/IN-Route/First_Steps/Introduction/',
      description: 'Die INSTAR IN-Route Line bietet Ihnen eine mobile Plug-and-Play WiFi Lösung um Informationen zwischen WLAN Geräten zu auszutauschen. Wir bieten Ihnen eine NAS Lösung für Ihre USB Massespeicher, als auch eine Powerbank um Ihr Smartphone oder Kompaktkamera zu laden. ',
  		pacc: 'expanded',
  		ptab: '',
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
  		fhdacc: 'hidden',
  		fhdtab: 'hidden',
  		sacc: 'hidden',
  		dlacc: 'hidden',
  		dltab: 'hidden',
    });
});

productRouter.route('/IN-Route/First_Steps/Charging')
.get(function(req, res) {
  res.render('./Products/IN-Route_P52_First_Steps_Charging', {
      title: 'INSTAR IN-Route P52 - Aufladen der Powerbank',
      ampimg: '/images/Search/P_SearchThumb_MobileRouter.jpg',
      headline: 'INSTAR IN-Route P52 - Mobiler Router, NAS Laufwerk und Powerbank.',
      breadcrumbs: '<li><a href="/Products/">Produkte</a></li><li><a href="/Products/IN-Route/">IN-Route P52</a></li><li><a href="/Products/IN-Route/First_Steps/">First Steps</a></li><li><a href="/Products/IN-Route/First_Steps/Charging/">Charging</a></li>',
      canonical: '/Products/IN-Route/First_Steps/Charging/',
      description: 'Die INSTAR IN-Route Line bietet Ihnen eine mobile Plug-and-Play WiFi Lösung um Informationen zwischen WLAN Geräten zu auszutauschen. Wir bieten Ihnen eine NAS Lösung für Ihre USB Massespeicher, als auch eine Powerbank um Ihr Smartphone oder Kompaktkamera zu laden. ',
  		pacc: 'expanded',
  		ptab: '',
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
  		fhdacc: 'hidden',
  		fhdtab: 'hidden',
  		sacc: 'hidden',
  		dlacc: 'hidden',
  		dltab: 'hidden',
    });
});

productRouter.route('/IN-Route/First_Steps/Login')
.get(function(req, res) {
  res.render('./Products/IN-Route_P52_First_Steps_Login', {
      title: 'INSTAR IN-Route P52 - Netzwerkverbindung zum Router und Login zur Konfiguration des Router-Betriebs',
      ampimg: '/images/Search/P_SearchThumb_MobileRouter.jpg',
      headline: 'INSTAR IN-Route P52 - Mobiler Router, NAS Laufwerk und Powerbank.',
      breadcrumbs: '<li><a href="/Products/">Produkte</a></li><li><a href="/Products/IN-Route/">IN-Route P52</a></li><li><a href="/Products/IN-Route/First_Steps/">First Steps</a></li><li><a href="/Products/IN-Route/First_Steps/Login/">Login</a></li>',
      canonical: '/Products/IN-Route/First_Steps/Login/',
      description: 'Die INSTAR IN-Route Line bietet Ihnen eine mobile Plug-and-Play WiFi Lösung um Informationen zwischen WLAN Geräten zu auszutauschen. Wir bieten Ihnen eine NAS Lösung für Ihre USB Massespeicher, als auch eine Powerbank um Ihr Smartphone oder Kompaktkamera zu laden. ',
  		pacc: 'expanded',
  		ptab: '',
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
  		fhdacc: 'hidden',
  		fhdtab: 'hidden',
  		sacc: 'hidden',
  		dlacc: 'hidden',
  		dltab: 'hidden',
    });
});

productRouter.route('/IN-Route/First_Steps/Wizard')
.get(function(req, res) {
  res.render('./Products/IN-Route_P52_First_Steps_Wizard', {
      title: 'INSTAR IN-Route P52 - Installation-Assistent zum Anlegen eines Benutzerzugangs und Einrichtung des WLAN Netzwerkes',
      ampimg: '/images/Search/P_SearchThumb_MobileRouter.jpg',
      headline: 'INSTAR IN-Route P52 - Mobiler Router, NAS Laufwerk und Powerbank.',
      breadcrumbs: '<li><a href="/Products/">Produkte</a></li><li><a href="/Products/IN-Route/">IN-Route P52</a></li><li><a href="/Products/IN-Route/First_Steps/">First Steps</a></li><li><a href="/Products/IN-Route/First_Steps/Wizard/">Wizard</a></li>',
      canonical: '/Products/IN-Route/First_Steps/Wizard/',
      description: 'Die INSTAR IN-Route Line bietet Ihnen eine mobile Plug-and-Play WiFi Lösung um Informationen zwischen WLAN Geräten zu auszutauschen. Wir bieten Ihnen eine NAS Lösung für Ihre USB Massespeicher, als auch eine Powerbank um Ihr Smartphone oder Kompaktkamera zu laden. ',
  		pacc: 'expanded',
  		ptab: '',
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
  		fhdacc: 'hidden',
  		fhdtab: 'hidden',
  		sacc: 'hidden',
  		dlacc: 'hidden',
  		dltab: 'hidden',
    });
});

productRouter.route('/IN-Route/First_Steps/Quick_Access')
.get(function(req, res) {
  res.render('./Products/IN-Route_P52_First_Steps_QA', {
      title: 'INSTAR IN-Route P52 - Schnellzugang: Automatische Konfiguration der Router Betriebsmodi',
      ampimg: '/images/Search/P_SearchThumb_MobileRouter.jpg',
      headline: 'INSTAR IN-Route P52 - Mobiler Router, NAS Laufwerk und Powerbank.',
      breadcrumbs: '<li><a href="/Products/">Produkte</a></li><li><a href="/Products/IN-Route/">IN-Route P52</a></li><li><a href="/Products/IN-Route/First_Steps/">First Steps</a></li><li><a href="/Products/IN-Route/First_Steps/Quick_Access/">Quick Access</a></li>',
      canonical: '/Products/IN-Route/First_Steps/Quick_Access/',
      description: 'Die INSTAR IN-Route Line bietet Ihnen eine mobile Plug-and-Play WiFi Lösung um Informationen zwischen WLAN Geräten zu auszutauschen. Wir bieten Ihnen eine NAS Lösung für Ihre USB Massespeicher, als auch eine Powerbank um Ihr Smartphone oder Kompaktkamera zu laden. ',
  		pacc: 'expanded',
  		ptab: '',
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
  		fhdacc: 'hidden',
  		fhdtab: 'hidden',
  		sacc: 'hidden',
  		dlacc: 'hidden',
  		dltab: 'hidden',
    });
});

productRouter.route('/IN-Route/First_Steps/Quick_Access/Router_Modes')
.get(function(req, res) {
  res.render('./Products/IN-Route_P52_First_Steps_QA_Router', {
      title: 'INSTAR IN-Route P52 - Schnellzugang: Router Modus',
      ampimg: '/images/Search/P_SearchThumb_MobileRouter.jpg',
      headline: 'INSTAR IN-Route P52 - Mobiler Router, NAS Laufwerk und Powerbank.',
      breadcrumbs: '<li><a href="/Products/IN-Route/">IN-Route P52</a></li><li><a href="/Products/IN-Route/First_Steps/">First Steps</a></li><li><a href="/Products/IN-Route/First_Steps/Quick_Access/">Quick Access</a></li><li><a href="/Products/IN-Route/First_Steps/Quick_Access/Router_Modes/">Router Modes</a></li>',
      canonical: '/Products/IN-Route/First_Steps/Quick_Access/Router_Modes/',
      description: 'Die INSTAR IN-Route Line bietet Ihnen eine mobile Plug-and-Play WiFi Lösung um Informationen zwischen WLAN Geräten zu auszutauschen. Wir bieten Ihnen eine NAS Lösung für Ihre USB Massespeicher, als auch eine Powerbank um Ihr Smartphone oder Kompaktkamera zu laden. ',
  		pacc: 'expanded',
  		ptab: '',
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
  		fhdacc: 'hidden',
  		fhdtab: 'hidden',
  		sacc: 'hidden',
  		dlacc: 'hidden',
  		dltab: 'hidden',
    });
});

productRouter.route('/IN-Route/First_Steps/Quick_Access/Repeater_Mode')
.get(function(req, res) {
  res.render('./Products/IN-Route_P52_First_Steps_QA_Repeater', {
      title: 'INSTAR IN-Route P52 - Schnellzugang: Repeater Modus',
      ampimg: '/images/Search/P_SearchThumb_MobileRouter.jpg',
      headline: 'INSTAR IN-Route P52 - Mobiler Router, NAS Laufwerk und Powerbank.',
      breadcrumbs: '<li><a href="/Products/IN-Route/">IN-Route P52</a></li><li><a href="/Products/IN-Route/First_Steps/">First Steps</a></li><li><a href="/Products/IN-Route/First_Steps/Quick_Access/">Quick Access</a></li><li><a href="/Products/IN-Route/First_Steps/Quick_Access/Repeater_Mode/">Repeater Mode</a></li>',
      canonical: '/Products/IN-Route/First_Steps/Quick_Access/Repeater_Mode/',
      description: 'Die INSTAR IN-Route Line bietet Ihnen eine mobile Plug-and-Play WiFi Lösung um Informationen zwischen WLAN Geräten zu auszutauschen. Wir bieten Ihnen eine NAS Lösung für Ihre USB Massespeicher, als auch eine Powerbank um Ihr Smartphone oder Kompaktkamera zu laden. ',
  		pacc: 'expanded',
  		ptab: '',
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
  		fhdacc: 'hidden',
  		fhdtab: 'hidden',
  		sacc: 'hidden',
  		dlacc: 'hidden',
  		dltab: 'hidden',
    });
});

productRouter.route('/IN-Route/First_Steps/Quick_Access/3G_Mode')
.get(function(req, res) {
  res.render('./Products/IN-Route_P52_First_Steps_QA_3G', {
      title: 'INSTAR IN-Route P52 - Schnellzugang: 3G Modus',
      ampimg: '/images/Search/P_SearchThumb_MobileRouter.jpg',
      headline: 'INSTAR IN-Route P52 - Mobiler Router, NAS Laufwerk und Powerbank.',
      breadcrumbs: '<li><a href="/Products/IN-Route/">IN-Route P52</a></li><li><a href="/Products/IN-Route/First_Steps/">First Steps</a></li><li><a href="/Products/IN-Route/First_Steps/Quick_Access/">Quick Access</a></li><li><a href="/Products/IN-Route/First_Steps/Quick_Access/3G_Mode/">3G Mode</a></li>',
      canonical: '/Products/IN-Route/First_Steps/Quick_Access/3G_Mode/',
      description: 'Die INSTAR IN-Route Line bietet Ihnen eine mobile Plug-and-Play WiFi Lösung um Informationen zwischen WLAN Geräten zu auszutauschen. Wir bieten Ihnen eine NAS Lösung für Ihre USB Massespeicher, als auch eine Powerbank um Ihr Smartphone oder Kompaktkamera zu laden. ',
  		pacc: 'expanded',
  		ptab: '',
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
  		fhdacc: 'hidden',
  		fhdtab: 'hidden',
  		sacc: 'hidden',
  		dlacc: 'hidden',
  		dltab: 'hidden',
    });
});

productRouter.route('/IN-Route/Overview')
.get(function(req, res) {
  res.render('./Products/IN-Route_P52_Overview', {
      title: 'INSTAR IN-Route P52 - Überblick über die Weboberfläche und Operationsmodi',
      ampimg: '/images/Search/P_SearchThumb_MobileRouter.jpg',
      headline: 'INSTAR IN-Route P52 - Mobiler Router, NAS Laufwerk und Powerbank.',
      breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Products/">Produkte</a></li><li><a href="/Products/IN-Route/">IN-Route P52</a></li><li><a href="/Products/IN-Route/Overview/">Overview</a></li>',
      canonical: '/Products/IN-Route/Overview/',
      description: 'Die INSTAR IN-Route Line bietet Ihnen eine mobile Plug-and-Play WiFi Lösung um Informationen zwischen WLAN Geräten zu auszutauschen. Wir bieten Ihnen eine NAS Lösung für Ihre USB Massespeicher, als auch eine Powerbank um Ihr Smartphone oder Kompaktkamera zu laden. ',
  		pacc: 'expanded',
  		ptab: '',
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
  		fhdacc: 'hidden',
  		fhdtab: 'hidden',
  		sacc: 'hidden',
  		dlacc: 'hidden',
  		dltab: 'hidden',
    });
});

productRouter.route('/IN-Route/Overview/Status')
.get(function(req, res) {
  res.render('./Products/IN-Route_P52_O_Status', {
      title: 'INSTAR IN-Route P52 - Überblick: Router Status',
      ampimg: '/images/Search/P_SearchThumb_MobileRouter.jpg',
      headline: 'INSTAR IN-Route P52 - Mobiler Router, NAS Laufwerk und Powerbank.',
      breadcrumbs: '<li><a href="/Products/">Produkte</a></li><li><a href="/Products/IN-Route/">IN-Route P52</a></li><li><a href="/Products/IN-Route/Overview/">Overview</a></li><li><a href="/Products/IN-Route/Overview/Status/">Status</a></li>',
      canonical: '/Products/IN-Route/Overview/Status/',
      description: 'Die INSTAR IN-Route Line bietet Ihnen eine mobile Plug-and-Play WiFi Lösung um Informationen zwischen WLAN Geräten zu auszutauschen. Wir bieten Ihnen eine NAS Lösung für Ihre USB Massespeicher, als auch eine Powerbank um Ihr Smartphone oder Kompaktkamera zu laden. ',
  		pacc: 'expanded',
  		ptab: '',
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
  		fhdacc: 'hidden',
  		fhdtab: 'hidden',
  		sacc: 'hidden',
  		dlacc: 'hidden',
  		dltab: 'hidden',
    });
});

productRouter.route('/IN-Route/Overview/WAN_Status')
.get(function(req, res) {
  res.render('./Products/IN-Route_P52_O_WAN', {
      title: 'INSTAR IN-Route P52 - Überblick: Internet Status',
      ampimg: '/images/Search/P_SearchThumb_MobileRouter.jpg',
      headline: 'INSTAR IN-Route P52 - Mobiler Router, NAS Laufwerk und Powerbank.',
      breadcrumbs: '<li><a href="/Products/">Produkte</a></li><li><a href="/Products/IN-Route/">IN-Route P52</a></li><li><a href="/Products/IN-Route/Overview/">Overview</a></li><li><a href="/Products/IN-Route/Overview/WAN_Status/">WAN Status</a></li>',
      canonical: '/Products/IN-Route/Overview/WAN_Status/',
      description: 'Die INSTAR IN-Route Line bietet Ihnen eine mobile Plug-and-Play WiFi Lösung um Informationen zwischen WLAN Geräten zu auszutauschen. Wir bieten Ihnen eine NAS Lösung für Ihre USB Massespeicher, als auch eine Powerbank um Ihr Smartphone oder Kompaktkamera zu laden. ',
  		pacc: 'expanded',
  		ptab: '',
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
  		fhdacc: 'hidden',
  		fhdtab: 'hidden',
  		sacc: 'hidden',
  		dlacc: 'hidden',
  		dltab: 'hidden',
    });
});

productRouter.route('/IN-Route/Overview/Mode')
.get(function(req, res) {
  res.render('./Products/IN-Route_P52_O_Mode', {
      title: 'INSTAR IN-Route P52 - Überblick: DSL Router, 3G Router oder WLAN Repeater',
      ampimg: '/images/Search/P_SearchThumb_MobileRouter.jpg',
      headline: 'INSTAR IN-Route P52 - Mobiler Router, NAS Laufwerk und Powerbank.',
      breadcrumbs: '<li><a href="/Products/">Produkte</a></li><li><a href="/Products/IN-Route/">IN-Route P52</a></li><li><a href="/Products/IN-Route/Overview/">Overview</a></li><li><a href="/Products/IN-Route/Overview/Mode/">Mode</a></li>',
      canonical: '/Products/IN-Route/Overview/Mode/',
      description: 'Die INSTAR IN-Route Line bietet Ihnen eine mobile Plug-and-Play WiFi Lösung um Informationen zwischen WLAN Geräten zu auszutauschen. Wir bieten Ihnen eine NAS Lösung für Ihre USB Massespeicher, als auch eine Powerbank um Ihr Smartphone oder Kompaktkamera zu laden. ',
  		pacc: 'expanded',
  		ptab: '',
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
  		fhdacc: 'hidden',
  		fhdtab: 'hidden',
  		sacc: 'hidden',
  		dlacc: 'hidden',
  		dltab: 'hidden',
    });
});

productRouter.route('/IN-Route/Overview/File_Explorer')
.get(function(req, res) {
  res.render('./Products/IN-Route_P52_O_File', {
      title: 'INSTAR IN-Route P52 - Überblick: Datei Explorer und NAS Modus',
      ampimg: '/images/Search/P_SearchThumb_MobileRouter.jpg',
      headline: 'INSTAR IN-Route P52 - Mobiler Router, NAS Laufwerk und Powerbank.',
      breadcrumbs: '<li><a href="/Products/">Produkte</a></li><li><a href="/Products/IN-Route/">IN-Route P52</a></li><li><a href="/Products/IN-Route/Overview/">Overview</a></li><li><a href="/Products/IN-Route/Overview/File_Explorer/">File Explorer</a></li>',
      canonical: '/Products/IN-Route/Overview/File_Explorer/',
      description: 'Die INSTAR IN-Route Line bietet Ihnen eine mobile Plug-and-Play WiFi Lösung um Informationen zwischen WLAN Geräten zu auszutauschen. Wir bieten Ihnen eine NAS Lösung für Ihre USB Massespeicher, als auch eine Powerbank um Ihr Smartphone oder Kompaktkamera zu laden. ',
  		pacc: 'expanded',
  		ptab: '',
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
  		fhdacc: 'hidden',
  		fhdtab: 'hidden',
  		sacc: 'hidden',
  		dlacc: 'hidden',
  		dltab: 'hidden',
    });
});

productRouter.route('/IN-Route/Network')
.get(function(req, res) {
  res.render('./Products/IN-Route_P52_Network', {
      title: 'INSTAR IN-Route P52 - Weboberfläche :: Netzwerk',
      ampimg: '/images/Search/P_SearchThumb_MobileRouter.jpg',
      headline: 'INSTAR IN-Route P52 - Mobiler Router, NAS Laufwerk und Powerbank.',
      breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Products/">Produkte</a></li><li><a href="/Products/IN-Route/">IN-Route P52</a></li><li><a href="/Products/IN-Route/Network/">Network</a></li>',
      canonical: '/Products/IN-Route/Network/',
      description: 'Die INSTAR IN-Route Line bietet Ihnen eine mobile Plug-and-Play WiFi Lösung um Informationen zwischen WLAN Geräten zu auszutauschen. Wir bieten Ihnen eine NAS Lösung für Ihre USB Massespeicher, als auch eine Powerbank um Ihr Smartphone oder Kompaktkamera zu laden. ',
  		pacc: 'expanded',
  		ptab: '',
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
  		fhdacc: 'hidden',
  		fhdtab: 'hidden',
  		sacc: 'hidden',
  		dlacc: 'hidden',
  		dltab: 'hidden',
    });
});

productRouter.route('/IN-Route/Network/LAN')
.get(function(req, res) {
  res.render('./Products/IN-Route_P52_Network_LAN', {
      title: 'INSTAR IN-Route P52 - Weboberfläche :: Netzwerk :: LAN Einstellungen',
      ampimg: '/images/Search/P_SearchThumb_MobileRouter.jpg',
      headline: 'INSTAR IN-Route P52 - Mobiler Router, NAS Laufwerk und Powerbank.',
      breadcrumbs: '<li><a href="/Products/">Produkte</a></li><li><a href="/Products/IN-Route/">IN-Route P52</a></li><li><a href="/Products/IN-Route/Network/">Network</a></li><li><a href="/Products/IN-Route/Network/LAN/">LAN</a></li>',
      canonical: '/Products/IN-Route/Network/LAN/',
      description: 'Die INSTAR IN-Route Line bietet Ihnen eine mobile Plug-and-Play WiFi Lösung um Informationen zwischen WLAN Geräten zu auszutauschen. Wir bieten Ihnen eine NAS Lösung für Ihre USB Massespeicher, als auch eine Powerbank um Ihr Smartphone oder Kompaktkamera zu laden. ',
  		pacc: 'expanded',
  		ptab: '',
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
  		fhdacc: 'hidden',
  		fhdtab: 'hidden',
  		sacc: 'hidden',
  		dlacc: 'hidden',
  		dltab: 'hidden',
    });
});

productRouter.route('/IN-Route/Network/WiFi_Settings')
.get(function(req, res) {
  res.render('./Products/IN-Route_P52_Network_WiFi', {
      title: 'INSTAR IN-Route P52 - Weboberfläche :: Netzwerk :: WLAN Einstellungen',
      ampimg: '/images/Search/P_SearchThumb_MobileRouter.jpg',
      headline: 'INSTAR IN-Route P52 - Mobiler Router, NAS Laufwerk und Powerbank.',
      breadcrumbs: '<li><a href="/Products/">Produkte</a></li><li><a href="/Products/IN-Route/">IN-Route P52</a></li><li><a href="/Products/IN-Route/Network/">Network</a></li><li><a href="/Products/IN-Route/Network/WiFi_Settings/">WiFi Settings</a></li>',
      canonical: '/Products/IN-Route/Network/WiFi_Settings/',
      description: 'Die INSTAR IN-Route Line bietet Ihnen eine mobile Plug-and-Play WiFi Lösung um Informationen zwischen WLAN Geräten zu auszutauschen. Wir bieten Ihnen eine NAS Lösung für Ihre USB Massespeicher, als auch eine Powerbank um Ihr Smartphone oder Kompaktkamera zu laden. ',
  		pacc: 'expanded',
  		ptab: '',
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
  		fhdacc: 'hidden',
  		fhdtab: 'hidden',
  		sacc: 'hidden',
  		dlacc: 'hidden',
  		dltab: 'hidden',
    });
});

productRouter.route('/IN-Route/Network/Repeater_Settings')
.get(function(req, res) {
  res.render('./Products/IN-Route_P52_Network_Repeater', {
      title: 'INSTAR IN-Route P52 - Weboberfläche :: Netzwerk :: Repeater Einstellungen',
      ampimg: '/images/Search/P_SearchThumb_MobileRouter.jpg',
      headline: 'INSTAR IN-Route P52 - Mobiler Router, NAS Laufwerk und Powerbank.',
      breadcrumbs: '<li><a href="/Products/">Produkte</a></li><li><a href="/Products/IN-Route/">IN-Route P52</a></li><li><a href="/Products/IN-Route/Network/">Network</a></li><li><a href="/Products/IN-Route/Network/Repeater_Settings/">Repeater Settings</a></li>',
      canonical: '/Products/IN-Route/Network/Repeater_Settings/',
      description: 'Die INSTAR IN-Route Line bietet Ihnen eine mobile Plug-and-Play WiFi Lösung um Informationen zwischen WLAN Geräten zu auszutauschen. Wir bieten Ihnen eine NAS Lösung für Ihre USB Massespeicher, als auch eine Powerbank um Ihr Smartphone oder Kompaktkamera zu laden. ',
  		pacc: 'expanded',
  		ptab: '',
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
  		fhdacc: 'hidden',
  		fhdtab: 'hidden',
  		sacc: 'hidden',
  		dlacc: 'hidden',
  		dltab: 'hidden',
    });
});

productRouter.route('/IN-Route/Network/3G_Settings')
.get(function(req, res) {
  res.render('./Products/IN-Route_P52_Network_3G', {
      title: 'INSTAR IN-Route P52 - Weboberfläche :: Netzwerk :: 3G Einstellungen',
      ampimg: '/images/Search/P_SearchThumb_MobileRouter.jpg',
      headline: 'INSTAR IN-Route P52 - Mobiler Router, NAS Laufwerk und Powerbank.',
      breadcrumbs: '<li><a href="/Products/">Produkte</a></li><li><a href="/Products/IN-Route/">IN-Route P52</a></li><li><a href="/Products/IN-Route/Network/">Network</a></li><li><a href="/Products/IN-Route/Network/3G_Settings/">3G Settings</a></li>',
      canonical: '/Products/IN-Route/Network/3G_Settings/',
      description: 'Die INSTAR IN-Route Line bietet Ihnen eine mobile Plug-and-Play WiFi Lösung um Informationen zwischen WLAN Geräten zu auszutauschen. Wir bieten Ihnen eine NAS Lösung für Ihre USB Massespeicher, als auch eine Powerbank um Ihr Smartphone oder Kompaktkamera zu laden. ',
  		pacc: 'expanded',
  		ptab: '',
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
  		fhdacc: 'hidden',
  		fhdtab: 'hidden',
  		sacc: 'hidden',
  		dlacc: 'hidden',
  		dltab: 'hidden',
    });
});

productRouter.route('/IN-Route/Network/Router_Mode')
.get(function(req, res) {
  res.render('./Products/IN-Route_P52_Network_Router', {
      title: 'INSTAR IN-Route P52 - Weboberfläche :: Netzwerk :: Router Modi',
      ampimg: '/images/Search/P_SearchThumb_MobileRouter.jpg',
      headline: 'INSTAR IN-Route P52 - Mobiler Router, NAS Laufwerk und Powerbank.',
      breadcrumbs: '<li><a href="/Products/">Produkte</a></li><li><a href="/Products/IN-Route/">IN-Route P52</a></li><li><a href="/Products/IN-Route/Network/">Network</a></li><li><a href="/Products/IN-Route/Network/Router_Mode/">Router Mode</a></li>',
      canonical: '/Products/IN-Route/Network/Router_Mode/',
      description: 'Die INSTAR IN-Route Line bietet Ihnen eine mobile Plug-and-Play WiFi Lösung um Informationen zwischen WLAN Geräten zu auszutauschen. Wir bieten Ihnen eine NAS Lösung für Ihre USB Massespeicher, als auch eine Powerbank um Ihr Smartphone oder Kompaktkamera zu laden. ',
  		pacc: 'expanded',
  		ptab: '',
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
  		fhdacc: 'hidden',
  		fhdtab: 'hidden',
  		sacc: 'hidden',
  		dlacc: 'hidden',
  		dltab: 'hidden',
    });
});

productRouter.route('/IN-Route/Network/DHCP')
.get(function(req, res) {
  res.render('./Products/IN-Route_P52_Network_DHCP', {
      title: 'INSTAR IN-Route P52 - Weboberfläche :: Netzwerk :: DHCP Einstellungen',
      ampimg: '/images/Search/P_SearchThumb_MobileRouter.jpg',
      headline: 'INSTAR IN-Route P52 - Mobiler Router, NAS Laufwerk und Powerbank.',
      breadcrumbs: '<li><a href="/Products/">Produkte</a></li><li><a href="/Products/IN-Route/">IN-Route P52</a></li><li><a href="/Products/IN-Route/Network/">Network</a></li><li><a href="/Products/IN-Route/Network/DHCP/">DHCP</a></li>',
      canonical: '/Products/IN-Route/Network/DHCP/',
      description: 'Die INSTAR IN-Route Line bietet Ihnen eine mobile Plug-and-Play WiFi Lösung um Informationen zwischen WLAN Geräten zu auszutauschen. Wir bieten Ihnen eine NAS Lösung für Ihre USB Massespeicher, als auch eine Powerbank um Ihr Smartphone oder Kompaktkamera zu laden. ',
  		pacc: 'expanded',
  		ptab: '',
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
  		fhdacc: 'hidden',
  		fhdtab: 'hidden',
  		sacc: 'hidden',
  		dlacc: 'hidden',
  		dltab: 'hidden',
    });
});

productRouter.route('/IN-Route/Network/DDNS')
.get(function(req, res) {
  res.render('./Products/IN-Route_P52_Network_DDNS', {
      title: 'INSTAR IN-Route P52 - Weboberfläche :: Netzwerk :: DDNS Einstellungen',
      ampimg: '/images/Search/P_SearchThumb_MobileRouter.jpg',
      headline: 'INSTAR IN-Route P52 - Mobiler Router, NAS Laufwerk und Powerbank.',
      breadcrumbs: '<li><a href="/Products/">Produkte</a></li><li><a href="/Products/IN-Route/">IN-Route P52</a></li><li><a href="/Products/IN-Route/Network/">Network</a></li><li><a href="/Products/IN-Route/Network/DDNS/">DDNS</a></li>',
      canonical: '/Products/IN-Route/Network/DDNS/',
      description: 'Die INSTAR IN-Route Line bietet Ihnen eine mobile Plug-and-Play WiFi Lösung um Informationen zwischen WLAN Geräten zu auszutauschen. Wir bieten Ihnen eine NAS Lösung für Ihre USB Massespeicher, als auch eine Powerbank um Ihr Smartphone oder Kompaktkamera zu laden. ',
  		pacc: 'expanded',
  		ptab: '',
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
  		fhdacc: 'hidden',
  		fhdtab: 'hidden',
  		sacc: 'hidden',
  		dlacc: 'hidden',
  		dltab: 'hidden',
    });
});

productRouter.route('/IN-Route/Network/FTP')
.get(function(req, res) {
  res.render('./Products/IN-Route_P52_Network_FTP', {
      title: 'INSTAR IN-Route P52 - Weboberfläche :: Netzwerk :: FTP Einstellungen',
      ampimg: '/images/Search/P_SearchThumb_MobileRouter.jpg',
      headline: 'INSTAR IN-Route P52 - Mobiler Router, NAS Laufwerk und Powerbank.',
      breadcrumbs: '<li><a href="/Products/">Produkte</a></li><li><a href="/Products/IN-Route/">IN-Route P52</a></li><li><a href="/Products/IN-Route/Network/">Network</a></li><li><a href="/Products/IN-Route/Network/FTP/">FTP</a></li>',
      canonical: '/Products/IN-Route/Network/FTP/',
      description: 'Die INSTAR IN-Route Line bietet Ihnen eine mobile Plug-and-Play WiFi Lösung um Informationen zwischen WLAN Geräten zu auszutauschen. Wir bieten Ihnen eine NAS Lösung für Ihre USB Massespeicher, als auch eine Powerbank um Ihr Smartphone oder Kompaktkamera zu laden. ',
  		pacc: 'expanded',
  		ptab: '',
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
  		fhdacc: 'hidden',
  		fhdtab: 'hidden',
  		sacc: 'hidden',
  		dlacc: 'hidden',
  		dltab: 'hidden',
    });
});

productRouter.route('/IN-Route/Firewall')
.get(function(req, res) {
  res.render('./Products/IN-Route_P52_Firewall', {
      title: 'INSTAR IN-Route P52 - Weboberfläche :: Firewall',
      ampimg: '/images/Search/P_SearchThumb_MobileRouter.jpg',
      headline: 'INSTAR IN-Route P52 - Mobiler Router, NAS Laufwerk und Powerbank.',
      breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Products/">Produkte</a></li><li><a href="/Products/IN-Route/">IN-Route P52</a></li><li><a href="/Products/IN-Route/Firewall/">Firewall</a></li>',
      canonical: '/Products/IN-Route/Firewall/',
      description: 'Die INSTAR IN-Route Line bietet Ihnen eine mobile Plug-and-Play WiFi Lösung um Informationen zwischen WLAN Geräten zu auszutauschen. Wir bieten Ihnen eine NAS Lösung für Ihre USB Massespeicher, als auch eine Powerbank um Ihr Smartphone oder Kompaktkamera zu laden. ',
  		pacc: 'expanded',
  		ptab: '',
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
  		fhdacc: 'hidden',
  		fhdtab: 'hidden',
  		sacc: 'hidden',
  		dlacc: 'hidden',
  		dltab: 'hidden',
    });
});

productRouter.route('/IN-Route/Firewall/Port_Forwarding')
.get(function(req, res) {
  res.render('./Products/IN-Route_P52_Firewall_Forwarding', {
      title: 'INSTAR IN-Route P52 - Weboberfläche :: Firewall :: Port Weiterleitung',
      ampimg: '/images/Search/P_SearchThumb_MobileRouter.jpg',
      headline: 'INSTAR IN-Route P52 - Mobiler Router, NAS Laufwerk und Powerbank.',
      breadcrumbs: '<li><a href="/Products/">Produkte</a></li><li><a href="/Products/IN-Route/">IN-Route P52</a></li><li><a href="/Products/IN-Route/Firewall/">Firewall</a></li><li><a href="/Products/IN-Route/Firewall/Port_Forwarding/">Port Forwarding</a></li>',
      canonical: '/Products/IN-Route/Firewall/Port_Forwarding/',
      description: 'Die INSTAR IN-Route Line bietet Ihnen eine mobile Plug-and-Play WiFi Lösung um Informationen zwischen WLAN Geräten zu auszutauschen. Wir bieten Ihnen eine NAS Lösung für Ihre USB Massespeicher, als auch eine Powerbank um Ihr Smartphone oder Kompaktkamera zu laden. ',
  		pacc: 'expanded',
  		ptab: '',
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
  		fhdacc: 'hidden',
  		fhdtab: 'hidden',
  		sacc: 'hidden',
  		dlacc: 'hidden',
  		dltab: 'hidden',
    });
});

productRouter.route('/IN-Route/Firewall/Device_Filter')
.get(function(req, res) {
  res.render('./Products/IN-Route_P52_Firewall_Filter', {
      title: 'INSTAR IN-Route P52 - Weboberfläche :: Firewall :: Gerätefilter',
      ampimg: '/images/Search/P_SearchThumb_MobileRouter.jpg',
      headline: 'INSTAR IN-Route P52 - Mobiler Router, NAS Laufwerk und Powerbank.',
      breadcrumbs: '<li><a href="/Products/">Produkte</a></li><li><a href="/Products/IN-Route/">IN-Route P52</a></li><li><a href="/Products/IN-Route/Firewall/">Firewall</a></li><li><a href="/Products/IN-Route/Firewall/Device_Filter/">Device Filter</a></li>',
      canonical: '/Products/IN-Route/Firewall/Device_Filter/',
      description: 'Die INSTAR IN-Route Line bietet Ihnen eine mobile Plug-and-Play WiFi Lösung um Informationen zwischen WLAN Geräten zu auszutauschen. Wir bieten Ihnen eine NAS Lösung für Ihre USB Massespeicher, als auch eine Powerbank um Ihr Smartphone oder Kompaktkamera zu laden. ',
  		pacc: 'expanded',
  		ptab: '',
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
  		fhdacc: 'hidden',
  		fhdtab: 'hidden',
  		sacc: 'hidden',
  		dlacc: 'hidden',
  		dltab: 'hidden',
    });
});

productRouter.route('/IN-Route/Firewall/DMZ_Host')
.get(function(req, res) {
  res.render('./Products/IN-Route_P52_Firewall_DMZ', {
      title: 'INSTAR IN-Route P52 - Weboberfläche :: Firewall :: DMZ Einstellung',
      ampimg: '/images/Search/P_SearchThumb_MobileRouter.jpg',
      headline: 'INSTAR IN-Route P52 - Mobiler Router, NAS Laufwerk und Powerbank.',
      breadcrumbs: '<li><a href="/Products/">Produkte</a></li><li><a href="/Products/IN-Route/">IN-Route P52</a></li><li><a href="/Products/IN-Route/Firewall/">Firewall</a></li><li><a href="/Products/IN-Route/Firewall/DMZ_Host/">DMZ Host</a></li>',
      canonical: '/Products/IN-Route/Firewall/DMZ_Host/',
      description: 'Die INSTAR IN-Route Line bietet Ihnen eine mobile Plug-and-Play WiFi Lösung um Informationen zwischen WLAN Geräten zu auszutauschen. Wir bieten Ihnen eine NAS Lösung für Ihre USB Massespeicher, als auch eine Powerbank um Ihr Smartphone oder Kompaktkamera zu laden. ',
  		pacc: 'expanded',
  		ptab: '',
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
  		fhdacc: 'hidden',
  		fhdtab: 'hidden',
  		sacc: 'hidden',
  		dlacc: 'hidden',
  		dltab: 'hidden',
    });
});

productRouter.route('/IN-Route/Firewall/Webfilter')
.get(function(req, res) {
  res.render('./Products/IN-Route_P52_Firewall_Webfilter', {
      title: 'INSTAR IN-Route P52 - Weboberfläche :: Firewall :: Webfilter',
      ampimg: '/images/Search/P_SearchThumb_MobileRouter.jpg',
      headline: 'INSTAR IN-Route P52 - Mobiler Router, NAS Laufwerk und Powerbank.',
      breadcrumbs: '<li><a href="/Products/">Produkte</a></li><li><a href="/Products/IN-Route/">IN-Route P52</a></li><li><a href="/Products/IN-Route/Firewall/">Firewall</a></li><li><a href="/Products/IN-Route/Firewall/Webfilter/">Webfilter</a></li>',
      canonical: '/Products/IN-Route/Firewall/Webfilter/',
      description: 'Die INSTAR IN-Route Line bietet Ihnen eine mobile Plug-and-Play WiFi Lösung um Informationen zwischen WLAN Geräten zu auszutauschen. Wir bieten Ihnen eine NAS Lösung für Ihre USB Massespeicher, als auch eine Powerbank um Ihr Smartphone oder Kompaktkamera zu laden. ',
  		pacc: 'expanded',
  		ptab: '',
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
  		fhdacc: 'hidden',
  		fhdtab: 'hidden',
  		sacc: 'hidden',
  		dlacc: 'hidden',
  		dltab: 'hidden',
    });
});

productRouter.route('/IN-Route/System')
.get(function(req, res) {
  res.render('./Products/IN-Route_P52_System', {
      title: 'INSTAR IN-Route P52 - Weboberfläche :: System',
      ampimg: '/images/Search/P_SearchThumb_MobileRouter.jpg',
      headline: 'INSTAR IN-Route P52 - Mobiler Router, NAS Laufwerk und Powerbank.',
      breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Products/">Produkte</a></li><li><a href="/Products/IN-Route/">IN-Route P52</a></li><li><a href="/Products/IN-Route/System/">System</a></li>',
      canonical: '/Products/IN-Route/System/',
      description: 'Die INSTAR IN-Route Line bietet Ihnen eine mobile Plug-and-Play WiFi Lösung um Informationen zwischen WLAN Geräten zu auszutauschen. Wir bieten Ihnen eine NAS Lösung für Ihre USB Massespeicher, als auch eine Powerbank um Ihr Smartphone oder Kompaktkamera zu laden. ',
  		pacc: 'expanded',
  		ptab: '',
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
  		fhdacc: 'hidden',
  		fhdtab: 'hidden',
  		sacc: 'hidden',
  		dlacc: 'hidden',
  		dltab: 'hidden',
    });
});

productRouter.route('/IN-Route/System/Log')
.get(function(req, res) {
  res.render('./Products/IN-Route_P52_System_Log', {
      title: 'INSTAR IN-Route P52 - Weboberfläche :: System :: Logbuch',
      ampimg: '/images/Search/P_SearchThumb_MobileRouter.jpg',
      headline: 'INSTAR IN-Route P52 - Mobiler Router, NAS Laufwerk und Powerbank.',
      breadcrumbs: '<li><a href="/Products/">Produkte</a></li><li><a href="/Products/IN-Route/">IN-Route P52</a></li><li><a href="/Products/IN-Route/System/">System</a></li><li><a href="/Products/IN-Route/System/Log/">Log</a></li>',
      canonical: '/Products/IN-Route/System/Log/',
      description: 'Die INSTAR IN-Route Line bietet Ihnen eine mobile Plug-and-Play WiFi Lösung um Informationen zwischen WLAN Geräten zu auszutauschen. Wir bieten Ihnen eine NAS Lösung für Ihre USB Massespeicher, als auch eine Powerbank um Ihr Smartphone oder Kompaktkamera zu laden. ',
  		pacc: 'expanded',
  		ptab: '',
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
  		fhdacc: 'hidden',
  		fhdtab: 'hidden',
  		sacc: 'hidden',
  		dlacc: 'hidden',
  		dltab: 'hidden',
    });
});

productRouter.route('/IN-Route/System/Login')
.get(function(req, res) {
  res.render('./Products/IN-Route_P52_System_Login', {
      title: 'INSTAR IN-Route P52 - Weboberfläche :: System :: Login',
      ampimg: '/images/Search/P_SearchThumb_MobileRouter.jpg',
      headline: 'INSTAR IN-Route P52 - Mobiler Router, NAS Laufwerk und Powerbank.',
      breadcrumbs: '<li><a href="/Products/">Produkte</a></li><li><a href="/Products/IN-Route/">IN-Route P52</a></li><li><a href="/Products/IN-Route/System/">System</a></li><li><a href="/Products/IN-Route/System/Login/">Login</a></li>',
      canonical: '/Products/IN-Route/System/Login/',
      description: 'Die INSTAR IN-Route Line bietet Ihnen eine mobile Plug-and-Play WiFi Lösung um Informationen zwischen WLAN Geräten zu auszutauschen. Wir bieten Ihnen eine NAS Lösung für Ihre USB Massespeicher, als auch eine Powerbank um Ihr Smartphone oder Kompaktkamera zu laden. ',
  		pacc: 'expanded',
  		ptab: '',
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
  		fhdacc: 'hidden',
  		fhdtab: 'hidden',
  		sacc: 'hidden',
  		dlacc: 'hidden',
  		dltab: 'hidden',
    });
});

productRouter.route('/IN-Route/System/NTP_Setup')
.get(function(req, res) {
  res.render('./Products/IN-Route_P52_System_NTP', {
      title: 'INSTAR IN-Route P52 - Weboberfläche :: System :: NTP Server Einstellungen',
      ampimg: '/images/Search/P_SearchThumb_MobileRouter.jpg',
      headline: 'INSTAR IN-Route P52 - Mobiler Router, NAS Laufwerk und Powerbank.',
      breadcrumbs: '<li><a href="/Products/">Produkte</a></li><li><a href="/Products/IN-Route/">IN-Route P52</a></li><li><a href="/Products/IN-Route/System/">System</a></li><li><a href="/Products/IN-Route/System/NTP_Setup/">NTP Setup</a></li>',
      canonical: '/Products/IN-Route/System/NTP_Setup/',
      description: 'Die INSTAR IN-Route Line bietet Ihnen eine mobile Plug-and-Play WiFi Lösung um Informationen zwischen WLAN Geräten zu auszutauschen. Wir bieten Ihnen eine NAS Lösung für Ihre USB Massespeicher, als auch eine Powerbank um Ihr Smartphone oder Kompaktkamera zu laden. ',
  		pacc: 'expanded',
  		ptab: '',
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
  		fhdacc: 'hidden',
  		fhdtab: 'hidden',
  		sacc: 'hidden',
  		dlacc: 'hidden',
  		dltab: 'hidden',
    });
});

productRouter.route('/IN-Route/System/Statistics')
.get(function(req, res) {
  res.render('./Products/IN-Route_P52_System_Statistics', {
      title: 'INSTAR IN-Route P52 - Weboberfläche :: System :: Statistiken',
      ampimg: '/images/Search/P_SearchThumb_MobileRouter.jpg',
      headline: 'INSTAR IN-Route P52 - Mobiler Router, NAS Laufwerk und Powerbank.',
      breadcrumbs: '<li><a href="/Products/">Produkte</a></li><li><a href="/Products/IN-Route/">IN-Route P52</a></li><li><a href="/Products/IN-Route/System/">System</a></li><li><a href="/Products/IN-Route/System/Statistics/">Statistics</a></li>',
      canonical: '/Products/IN-Route/System/Statistics/',
      description: 'Die INSTAR IN-Route Line bietet Ihnen eine mobile Plug-and-Play WiFi Lösung um Informationen zwischen WLAN Geräten zu auszutauschen. Wir bieten Ihnen eine NAS Lösung für Ihre USB Massespeicher, als auch eine Powerbank um Ihr Smartphone oder Kompaktkamera zu laden. ',
  		pacc: 'expanded',
  		ptab: '',
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
  		fhdacc: 'hidden',
  		fhdtab: 'hidden',
  		sacc: 'hidden',
  		dlacc: 'hidden',
  		dltab: 'hidden',
    });
});

productRouter.route('/IN-Route/System/Import')
.get(function(req, res) {
  res.render('./Products/IN-Route_P52_System_Import', {
      title: 'INSTAR IN-Route P52 - Weboberfläche :: System :: Einstellungen Importieren',
      ampimg: '/images/Search/P_SearchThumb_MobileRouter.jpg',
      headline: 'INSTAR IN-Route P52 - Mobiler Router, NAS Laufwerk und Powerbank.',
      breadcrumbs: '<li><a href="/Products/">Produkte</a></li><li><a href="/Products/IN-Route/">IN-Route P52</a></li><li><a href="/Products/IN-Route/System/">System</a></li><li><a href="/Products/IN-Route/System/Import/">Import</a></li>',
      canonical: '/Products/IN-Route/System/Import/',
      description: 'Die INSTAR IN-Route Line bietet Ihnen eine mobile Plug-and-Play WiFi Lösung um Informationen zwischen WLAN Geräten zu auszutauschen. Wir bieten Ihnen eine NAS Lösung für Ihre USB Massespeicher, als auch eine Powerbank um Ihr Smartphone oder Kompaktkamera zu laden. ',
  		pacc: 'expanded',
  		ptab: '',
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
  		fhdacc: 'hidden',
  		fhdtab: 'hidden',
  		sacc: 'hidden',
  		dlacc: 'hidden',
  		dltab: 'hidden',
    });
});

productRouter.route('/IN-Route/System/Reboot')
.get(function(req, res) {
  res.render('./Products/IN-Route_P52_System_Reboot', {
      title: 'INSTAR IN-Route P52 - Weboberfläche :: System :: Neustarten',
      ampimg: '/images/Search/P_SearchThumb_MobileRouter.jpg',
      headline: 'INSTAR IN-Route P52 - Mobiler Router, NAS Laufwerk und Powerbank.',
      breadcrumbs: '<li><a href="/Products/">Produkte</a></li><li><a href="/Products/IN-Route/">IN-Route P52</a></li><li><a href="/Products/IN-Route/System/">System</a></li><li><a href="/Products/IN-Route/System/Reboot/">Reboot</a></li>',
      canonical: '/Products/IN-Route/System/Reboot/',
      description: 'Die INSTAR IN-Route Line bietet Ihnen eine mobile Plug-and-Play WiFi Lösung um Informationen zwischen WLAN Geräten zu auszutauschen. Wir bieten Ihnen eine NAS Lösung für Ihre USB Massespeicher, als auch eine Powerbank um Ihr Smartphone oder Kompaktkamera zu laden. ',
  		pacc: 'expanded',
  		ptab: '',
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
  		fhdacc: 'hidden',
  		fhdtab: 'hidden',
  		sacc: 'hidden',
  		dlacc: 'hidden',
  		dltab: 'hidden',
    });
});

productRouter.route('/IN-Route/System/Upgrade')
.get(function(req, res) {
  res.render('./Products/IN-Route_P52_System_Upgrade', {
      title: 'INSTAR IN-Route P52 - Weboberfläche :: System :: Software Update',
      ampimg: '/images/Search/P_SearchThumb_MobileRouter.jpg',
      headline: 'INSTAR IN-Route P52 - Mobiler Router, NAS Laufwerk und Powerbank.',
      breadcrumbs: '<li><a href="/Products/">Produkte</a></li><li><a href="/Products/IN-Route/">IN-Route P52</a></li><li><a href="/Products/IN-Route/System/">System</a></li><li><a href="/Products/IN-Route/System/Upgrade/">Upgrade</a></li>',
      canonical: '/Products/IN-Route/System/Upgrade/',
      description: 'Die INSTAR IN-Route Line bietet Ihnen eine mobile Plug-and-Play WiFi Lösung um Informationen zwischen WLAN Geräten zu auszutauschen. Wir bieten Ihnen eine NAS Lösung für Ihre USB Massespeicher, als auch eine Powerbank um Ihr Smartphone oder Kompaktkamera zu laden. ',
  		pacc: 'expanded',
  		ptab: '',
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
  		fhdacc: 'hidden',
  		fhdtab: 'hidden',
  		sacc: 'hidden',
  		dlacc: 'hidden',
  		dltab: 'hidden',
    });
});

productRouter.route('/IN-Route/Help')
.get(function(req, res) {
  res.render('./Products/IN-Route_P52_Help', {
      title: 'INSTAR IN-Route P52 - Weboberfläche :: System :: Hilfe',
      ampimg: '/images/Search/P_SearchThumb_MobileRouter.jpg',
      headline: 'INSTAR IN-Route P52 - Mobiler Router, NAS Laufwerk und Powerbank.',
      breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Products/">Produkte</a></li><li><a href="/Products/IN-Route/">IN-Route P52</a></li><li><a href="/Products/IN-Route/Help/">Help</a></li>',
      canonical: '/Products/IN-Route/Help/',
      description: 'Die INSTAR IN-Route Line bietet Ihnen eine mobile Plug-and-Play WiFi Lösung um Informationen zwischen WLAN Geräten zu auszutauschen. Wir bieten Ihnen eine NAS Lösung für Ihre USB Massespeicher, als auch eine Powerbank um Ihr Smartphone oder Kompaktkamera zu laden. ',
  		pacc: 'expanded',
  		ptab: '',
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
  		fhdacc: 'hidden',
  		fhdtab: 'hidden',
  		sacc: 'hidden',
  		dlacc: 'hidden',
  		dltab: 'hidden',
    });
});

productRouter.route('/IN-Route/Help/Features')
.get(function(req, res) {
  res.render('./Products/IN-Route_P52_Help_Features', {
      title: 'INSTAR IN-Route P52 - Weboberfläche :: Features',
      ampimg: '/images/Search/P_SearchThumb_MobileRouter.jpg',
      headline: 'INSTAR IN-Route P52 - Mobiler Router, NAS Laufwerk und Powerbank.',
      breadcrumbs: '<li><a href="/Products/">Produkte</a></li><li><a href="/Products/IN-Route/">IN-Route P52</a></li><li><a href="/Products/IN-Route/Help/">Help</a></li><li><a href="/Products/IN-Route/Help/Features/">Features</a></li>',
      canonical: '/Products/IN-Route/Help/Features/',
      description: 'Die INSTAR IN-Route Line bietet Ihnen eine mobile Plug-and-Play WiFi Lösung um Informationen zwischen WLAN Geräten zu auszutauschen. Wir bieten Ihnen eine NAS Lösung für Ihre USB Massespeicher, als auch eine Powerbank um Ihr Smartphone oder Kompaktkamera zu laden. ',
  		pacc: 'expanded',
  		ptab: '',
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
  		fhdacc: 'hidden',
  		fhdtab: 'hidden',
  		sacc: 'hidden',
  		dlacc: 'hidden',
  		dltab: 'hidden',
    });
});

productRouter.route('/IN-Route/Help/About_Us')
.get(function(req, res) {
  res.render('./Products/IN-Route_P52_Help_About', {
      title: 'INSTAR IN-Route P52 - Weboberfläche :: Hilfe :: Über Uns',
      ampimg: '/images/Search/P_SearchThumb_MobileRouter.jpg',
      headline: 'INSTAR IN-Route P52 - Mobiler Router, NAS Laufwerk und Powerbank.',
      breadcrumbs: '<li><a href="/Products/">Produkte</a></li><li><a href="/Products/IN-Route/">IN-Route P52</a></li><li><a href="/Products/IN-Route/Help/">Help</a></li><li><a href="/Products/IN-Route/Help/About_Us/">About Us</a></li>',
      canonical: '/Products/IN-Route/Help/About_Us/',
      description: 'Die INSTAR IN-Route Line bietet Ihnen eine mobile Plug-and-Play WiFi Lösung um Informationen zwischen WLAN Geräten zu auszutauschen. Wir bieten Ihnen eine NAS Lösung für Ihre USB Massespeicher, als auch eine Powerbank um Ihr Smartphone oder Kompaktkamera zu laden. ',
  		pacc: 'expanded',
  		ptab: '',
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
  		fhdacc: 'hidden',
  		fhdtab: 'hidden',
  		sacc: 'hidden',
  		dlacc: 'hidden',
  		dltab: 'hidden',
    });
});

/* ****************************************** GET /IN-Motion ****************************************** */

productRouter.route('/IN-Motion')
.get(function(req, res) {
  res.render('./Products/IN-Motion', {
      title: 'IN-Motion externer Bewegungsmelder für Ihre INSTAR IP Kamera',
      ampimg: '/images/Search/P_SearchThumb_MotionDetector.jpg',
      headline: 'IN-Motion PIR und Mikrowellen Bewegungsmelder zur Ergänzung der softwarebasierten Bewegungserkennung Ihrer INSTAR Sicherheitskamera',
      breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Products/">Produkte</a></li><li><a href="/Products/IN-Motion/">IN-Motion</a></li>',
      canonical: '/Products/IN-Motion/',
      description: 'IN-Motion Passiv-Infrarot und Mikrowellen Bewegungsmelder kompatible mit Ihrer INSTAR Aussenkamera. Die ideale Ergänzung zur softwarebasierten Bewegungserkennung Ihrer Überwachungskamera zur Vermeidung von Fehlalarmen',
  		pacc: 'expanded',
  		ptab: '',
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
  		fhdacc: 'hidden',
  		fhdtab: 'hidden',
  		sacc: 'hidden',
  		dlacc: 'hidden',
  		dltab: 'hidden',
    });
});

productRouter.route('/IN-Motion/300')
.get(function(req, res) {
  res.render('./Products/IN-Motion_300', {
      title: 'IN-Motion 300 externer PIR Bewegungsmelder für Ihre INSTAR IP Kamera',
      ampimg: '/images/Search/P_SearchThumb_MotionDetector.jpg',
      headline: 'IN-Motion PIR Bewegungsmelder zur Ergänzung der softwarebasierten Bewegungserkennung Ihrer INSTAR Sicherheitskamera',
      breadcrumbs: '<li class="breadcrumb-item"><a href="/">Home</a></li><li class="breadcrumb-item"><a href="/Products/">Produkte</a></li><li class="breadcrumb-item"><a href="/Products/IN-Motion/">IN-Motion</a></li><li class="breadcrumb-item"><a href="/Products/IN-Motion/300/">300</a></li>',
      canonical: '/Products/IN-Motion/300/',
      description: 'IN-Motion Passiv-Infrarot Bewegungsmelder kompatible mit Ihrer INSTAR Aussenkamera. Die ideale Ergänzung zur softwarebasierten Bewegungserkennung Ihrer Überwachungskamera zur Vermeidung von Fehlalarmen',
  		pacc: 'expanded',
  		ptab: '',
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
  		fhdacc: 'hidden',
  		fhdtab: 'hidden',
  		sacc: 'hidden',
  		dlacc: 'hidden',
  		dltab: 'hidden',
    });
});

productRouter.route('/IN-Motion/500')
.get(function(req, res) {
  res.render('./Products/IN-Motion_500', {
      title: 'IN-Motion 500 externer, dualer PIR und Mikrowellen Bewegungsmelder für Ihre INSTAR IP Kamera',
      ampimg: '/images/Search/P_SearchThumb_MotionDetector.jpg',
      headline: 'IN-Motion PIR und Mikrowellen Bewegungsmelder zur Ergänzung der softwarebasierten Bewegungserkennung Ihrer INSTAR Sicherheitskamera',
      breadcrumbs: '<li class="breadcrumb-item"><a href="/">Home</a></li><li class="breadcrumb-item"><a href="/Products/">Produkte</a></li><li class="breadcrumb-item"><a href="/Products/IN-Motion/">IN-Motion</a></li><li class="breadcrumb-item"><a href="/Products/IN-Motion/500/">500</a></li>',
      canonical: '/Products/IN-Motion/500/',
      description: 'IN-Motion Passiv-Infrarot und Mikrowellen Bewegungsmelder kompatible mit Ihrer INSTAR Aussenkamera. Die ideale Ergänzung zur softwarebasierten Bewegungserkennung Ihrer Überwachungskamera zur Vermeidung von Fehlalarmen',
  		pacc: 'expanded',
  		ptab: '',
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
  		fhdacc: 'hidden',
  		fhdtab: 'hidden',
  		sacc: 'hidden',
  		dlacc: 'hidden',
  		dltab: 'hidden',
    });
});

productRouter.route('/IN-Motion/500/Dual_Sensor')
.get(function(req, res) {
  res.render('./Products/IN-Motion_500_Dual_Sensor', {
      title: 'IN-Motion 500 - Wie arbeitet der duale Mikrowellen und Infrarot Sensor?',
      ampimg: '/images/Search/P_SearchThumb_MotionDetector.jpg',
      headline: 'IN-Motion PIR und Mikrowellen Bewegungsmelder zur Ergänzung der softwarebasierten Bewegungserkennung Ihrer INSTAR Sicherheitskamera',
      breadcrumbs: '<li class="breadcrumb-item"><a href="/Products/">Produkte</a></li><li class="breadcrumb-item"><a href="/Products/IN-Motion/">IN-Motion</a></li><li class="breadcrumb-item"><a href="/Products/IN-Motion/500/">500</a></li><li class="breadcrumb-item"><a href="/Products/IN-Motion/500/Dual_Sensor/">Dual Sensor</a></li>',
      canonical: '/Products/IN-Motion/500/Dual_Sensor/',
      description: 'INSTAR Wiki - IP Kamera Wissensdatenbank',
  		pacc: 'expanded',
  		ptab: '',
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
  		fhdacc: 'hidden',
  		fhdtab: 'hidden',
  		sacc: 'hidden',
  		dlacc: 'hidden',
  		dltab: 'hidden',
    });
});

productRouter.route('/IN-Motion/500/Setup')
.get(function(req, res) {
  res.render('./Products/IN-Motion_500_Setup', {
      title: 'IN-Motion 500 - Bevor Sie den IN-Motion mit Ihrer INSTAR Kamera nutzen können, müssen Sie zuerst das Signalkabel verbinden und die Empfindlichkeit beider Sensoren anpassen',
      ampimg: '/images/Search/P_SearchThumb_MotionDetector.jpg',
      headline: 'IN-Motion PIR und Mikrowellen Bewegungsmelder zur Ergänzung der softwarebasierten Bewegungserkennung Ihrer INSTAR Sicherheitskamera',
      breadcrumbs: '<li class="breadcrumb-item"><a href="/Products/">Produkte</a></li><li class="breadcrumb-item"><a href="/Products/IN-Motion/">IN-Motion</a></li><li class="breadcrumb-item"><a href="/Products/IN-Motion/500/">500</a></li><li class="breadcrumb-item"><a href="/Products/IN-Motion/500/Setup/">Setup</a></li>',
      canonical: '/Products/IN-Motion/500/Setup/',
      description: 'INSTAR Wiki - IP Kamera Wissensdatenbank',
  		pacc: 'expanded',
  		ptab: '',
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
  		fhdacc: 'hidden',
  		fhdtab: 'hidden',
  		sacc: 'hidden',
  		dlacc: 'hidden',
  		dltab: 'hidden',
    });
});

productRouter.route('/IN-Motion/500/Wiring')
.get(function(req, res) {
  res.render('./Products/IN-Motion_500_Wiring', {
      title: 'IN-Motion 500 - Verbinden des externen Bewegungsmelders mit dem Alarmeingang Ihrer INSTAR IP Kamera',
      ampimg: '/images/Search/P_SearchThumb_MotionDetector.jpg',
      headline: 'IN-Motion PIR und Mikrowellen Bewegungsmelder zur Ergänzung der softwarebasierten Bewegungserkennung Ihrer INSTAR Sicherheitskamera',
      breadcrumbs: '<li class="breadcrumb-item"><a href="/Products/">Produkte</a></li><li class="breadcrumb-item"><a href="/Products/IN-Motion/">IN-Motion</a></li><li class="breadcrumb-item"><a href="/Products/IN-Motion/500/">500</a></li><li class="breadcrumb-item"><a href="/Products/IN-Motion/500/Wiring/">Wiring</a></li>',
      canonical: '/Products/IN-Motion/500/Wiring/',
      description: 'INSTAR Wiki - IP Kamera Wissensdatenbank',
  		pacc: 'expanded',
  		ptab: '',
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
  		fhdacc: 'hidden',
  		fhdtab: 'hidden',
  		sacc: 'hidden',
  		dlacc: 'hidden',
  		dltab: 'hidden',
    });
});

productRouter.route('/IN-Motion/500/User_Interface')
.get(function(req, res) {
  res.render('./Products/IN-Motion_500_User_Interface', {
      title: 'IN-Motion 500 - Konfiguration Ihrer INSTAR IP Kamera für den Betrieb mit dem Bewegungsmelder',
      ampimg: '/images/Search/P_SearchThumb_MotionDetector.jpg',
      headline: 'IN-Motion PIR und Mikrowellen Bewegungsmelder zur Ergänzung der softwarebasierten Bewegungserkennung Ihrer INSTAR Sicherheitskamera',
      breadcrumbs: '<li class="breadcrumb-item"><a href="/Products/">Produkte</a></li><li class="breadcrumb-item"><a href="/Products/IN-Motion/">IN-Motion</a></li><li class="breadcrumb-item"><a href="/Products/IN-Motion/500/">500</a></li><li class="breadcrumb-item"><a href="/Products/IN-Motion/500/User_Interface/">User Interface</a></li>',
      canonical: '/Products/IN-Motion/500/User_Interface/',
      description: 'INSTAR Wiki - IP Kamera Wissensdatenbank',
  		pacc: 'expanded',
  		ptab: '',
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
  		fhdacc: 'hidden',
  		fhdtab: 'hidden',
  		sacc: 'hidden',
  		dlacc: 'hidden',
  		dltab: 'hidden',
    });
});

productRouter.route('/IN-Motion/500/Considerations')
.get(function(req, res) {
  res.render('./Products/IN-Motion_500_Considerations', {
      title: 'IN-Motion 500 - Dinge die Sie für die Installation beachten müssen, um Fehler zu vermeiden',
      ampimg: '/images/Search/P_SearchThumb_MotionDetector.jpg',
      headline: 'IN-Motion PIR und Mikrowellen Bewegungsmelder zur Ergänzung der softwarebasierten Bewegungserkennung Ihrer INSTAR Sicherheitskamera',
      breadcrumbs: '<li class="breadcrumb-item"><a href="/Products/">Produkte</a></li><li class="breadcrumb-item"><a href="/Products/IN-Motion/">IN-Motion</a></li><li class="breadcrumb-item"><a href="/Products/IN-Motion/500/">500</a></li><li class="breadcrumb-item"><a href="/Products/IN-Motion/500/Considerations/">Considerations</a></li>',
      canonical: '/Products/IN-Motion/500/Considerations/',
      description: 'INSTAR Wiki - IP Kamera Wissensdatenbank',
  		pacc: 'expanded',
  		ptab: '',
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
  		fhdacc: 'hidden',
  		fhdtab: 'hidden',
  		sacc: 'hidden',
  		dlacc: 'hidden',
  		dltab: 'hidden',
    });
});

productRouter.route('/IN-Motion/500/Recorder')
.get(function(req, res) {
  res.render('./Products/IN-Motion_500_Recorder', {
      title: 'IN-Motion 500 - Zusammenspiel Ihrer INSTAR IP Kamera mit externen Aufnahmestationen der Firma Synology und QNAP',
      ampimg: '/images/Search/P_SearchThumb_MotionDetector.jpg',
      headline: 'IN-Motion PIR und Mikrowellen Bewegungsmelder zur Ergänzung der softwarebasierten Bewegungserkennung Ihrer INSTAR Sicherheitskamera',
      breadcrumbs: '<li class="breadcrumb-item"><a href="/Products/">Produkte</a></li><li class="breadcrumb-item"><a href="/Products/IN-Motion/">IN-Motion</a></li><li class="breadcrumb-item"><a href="/Products/IN-Motion/500/">500</a></li><li class="breadcrumb-item"><a href="/Products/IN-Motion/500/Recorder/">Recorder</a></li>',
      canonical: '/Products/IN-Motion/500/Recorder/',
      description: 'INSTAR Wiki - IP Kamera Wissensdatenbank',
  		pacc: 'expanded',
  		ptab: '',
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
  		fhdacc: 'hidden',
  		fhdtab: 'hidden',
  		sacc: 'hidden',
  		dlacc: 'hidden',
  		dltab: 'hidden',
    });
});

module.exports = productRouter;
