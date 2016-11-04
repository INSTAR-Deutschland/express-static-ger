var express = require('express');
var quickInstallRouter = express.Router();
var appdata = require('../views/_partials/data/quickInstall.json');

/* GET quickInstall page. */
quickInstallRouter.get('/', function(req, res) {

    var qiPicture = []; /* Get all Pictures from gallery.json for the gallery */
    var qiPictureAlt = [];
    var qiHref = [];
    appdata.articles.forEach(function(item) {
        qiPicture = qiPicture.concat(item.qiPic);
        qiPictureAlt = qiPictureAlt.concat(item.qiPicAlt);
        qiHref = qiHref.concat(item.qiUrl);
      });

    res.render('./Quick_Installation/Quick_Installation', {
        title: 'Schnellinstallation',
        qiPic: qiPicture,
        qiPicAlt: qiPictureAlt,
        qiUrl: qiHref,
      });
  });

/* GET How Does An IP Camera Work? /How_Does_An_IP_Camera_Work */
quickInstallRouter.route('/How_Does_An_IP_Camera_Work')
    .get(function(req, res) {
        res.render('./Quick_Installation/How_Does_An_IP_Camera_Work', {
            title: 'Wie arbeitet eine IP Kamera?',
            uplink: '/Quick_Installation/',
          });
      });

/* GET First Steps to get your IP camera working /First_Steps */
quickInstallRouter.route('/First_Steps')
    .get(function(req, res) {
        res.render('./Quick_Installation/First_Steps', {
            title: 'Erste Schritte mit Ihrer IP Kamera',
            uplink: '/Quick_Installation/',
          });
      });

/* GET After unpacking your INSTAR IP Camera /After_Unpacking */
quickInstallRouter.route('/After_Unpacking')
    .get(function(req, res) {
        res.render('./Quick_Installation/After_Unpacking', {
            title: 'Nach dem Auspacken Ihrer IP Kamera',
            uplink: '/Quick_Installation/',
          });
      });

/* GET Direct connection with a PC or Notebook /Direct_LAN_Connection */
quickInstallRouter.route('/Direct_LAN_Connection')
    .get(function(req, res) {
        res.render('./Quick_Installation/Direct_LAN_Connection', {
            title: 'Direkte Verbindung mit einem PC oder Notebook',
            uplink: '/Quick_Installation/',
          });
      });

/* GET Find your IP Camera with an IP Scanner /Alternative_IP_Scanner */
quickInstallRouter.route('/Alternative_IP_Scanner')
    .get(function(req, res) {
        res.render('./Quick_Installation/Alternative_IP_Scanner', {
            title: 'Wie Sie Ihre Kamera mit einem alternativen IP Scanner finden',
            uplink: '/Quick_Installation/',
          });
      });

/* GET Angry IP Scanner /Angry_IP_Scanner */
quickInstallRouter.route('/Alternative_IP_Scanner/Angry_IP_Scanner')
    .get(function(req, res) {
        res.render('./Quick_Installation/Angry_IP_Scanner', {
            title: 'Angry IP Scanner',
            uplink: '/Quick_Installation/Alternative_IP_Scanner',
          });
      });

/* GET Fing CLI /Fing_CLI */
quickInstallRouter.route('/Alternative_IP_Scanner/Fing_CLI')
    .get(function(req, res) {
        res.render('./Quick_Installation/Fing_CLI', {
            title: 'Fing IP Scanner - Command Line Interface',
            uplink: '/Quick_Installation/Alternative_IP_Scanner',
          });
      });

/* GET Fing Mobile /Fing_Mobile */
quickInstallRouter.route('/Alternative_IP_Scanner/Fing_Mobile')
    .get(function(req, res) {
        res.render('./Quick_Installation/Fing_Mobile', {
            title: 'Fing IP Scanner - Mobile App',
            uplink: '/Quick_Installation/Alternative_IP_Scanner',
          });
      });

/* GET Language Selection /Language_Selection */
quickInstallRouter.route('/Language_Selection')
    .get(function(req, res) {
        res.render('./Quick_Installation/Language_Selection', {
            title: 'Sprache auswählen',
            uplink: '/Quick_Installation/',
          });
      });

/* GET Live Video Selection /Live_Video */
quickInstallRouter.route('/Live_Video')
    .get(function(req, res) {
        res.render('./Quick_Installation/Live_Video', {
            title: 'Live Video',
            uplink: '/Quick_Installation/',
          });
      });

/* GET Live Video Selection /Live_Video */
quickInstallRouter.route('/Live_Video/ActiveX')
    .get(function(req, res) {
        res.render('./Quick_Installation/Live_Video_ActiveX', {
            title: 'Live Video ActiveX',
            uplink: '/Quick_Installation/Live_Video',
          });
      });

/* GET Live Video Selection /Live_Video */
quickInstallRouter.route('/Live_Video/QuickTime')
    .get(function(req, res) {
        res.render('./Quick_Installation/Live_Video_QuickTime', {
            title: 'Live Video QuickTime',
            uplink: '/Quick_Installation/Live_Video',
          });
      });

/* GET Live Video Selection /Live_Video */
quickInstallRouter.route('/Live_Video/MJPEG')
    .get(function(req, res) {
        res.render('./Quick_Installation/Live_Video_MJPEG', {
            title: 'Live Video MJPEG',
            uplink: '/Quick_Installation/Live_Video',
          });
      });

/* GET Live Video Selection /Live_Video */
quickInstallRouter.route('/Live_Video/Troubleshooting/Avast')
    .get(function(req, res) {
        res.render('./Quick_Installation/Live_Video_Avast', {
            title: 'Live Video Avast',
            uplink: '/Quick_Installation/Live_Video',
          });
      });

/* GET Live Video Selection /Live_Video */
quickInstallRouter.route('/Live_Video/Troubleshooting/Kaspersky_2013')
    .get(function(req, res) {
        res.render('./Quick_Installation/Live_Video_Kaspersky_2013', {
            title: 'Live Video Kaspersky 2013',
            uplink: '/Quick_Installation/Live_Video',
          });
      });

/* GET Live Video Selection /Live_Video */
quickInstallRouter.route('/Live_Video/Troubleshooting/Kaspersky_2014')
    .get(function(req, res) {
        res.render('./Quick_Installation/Live_Video_Kaspersky_2014', {
            title: 'Live Video Kaspersky 2014',
            uplink: '/Quick_Installation/Live_Video',
          });
      });

/* GET Live Video Selection /Live_Video */
quickInstallRouter.route('/Live_Video/Troubleshooting/Kaspersky_2017')
    .get(function(req, res) {
        res.render('./Quick_Installation/Live_Video_Kaspersky_2017', {
            title: 'Live Video Kaspersky 2017',
            uplink: '/Quick_Installation/Live_Video',
          });
      });

/* GET Live Video Selection /Live_Video */
quickInstallRouter.route('/Live_Video/Troubleshooting/AVG')
    .get(function(req, res) {
        res.render('./Quick_Installation/Live_Video_AVG', {
            title: 'Live Video AVG',
            uplink: '/Quick_Installation/Live_Video',
          });
      });

/* GET Live Video Selection /Live_Video */
quickInstallRouter.route('/Live_Video/Troubleshooting/AVIRA')
    .get(function(req, res) {
        res.render('./Quick_Installation/Live_Video_AVIRA', {
            title: 'Live Video AVIRA',
            uplink: '/Quick_Installation/Live_Video',
          });
      });

/* GET Live Video Selection /Live_Video */
quickInstallRouter.route('/Live_Video/Troubleshooting/F-Secure')
    .get(function(req, res) {
        res.render('./Quick_Installation/Live_Video_F-Secure', {
            title: 'Live Video F-Secure',
            uplink: '/Quick_Installation/Live_Video',
          });
      });

/* GET Creating user accounts on your camera /Creating_User_Accounts */
quickInstallRouter.route('/Creating_User_Accounts')
    .get(function(req, res) {
        res.render('./Quick_Installation/Creating_User_Accounts', {
            title: 'Benutzer in Ihrer Kamera erstellen',
            uplink: '/Quick_Installation/',
          });
      });

/* GET WebUI and Firmware Upgrade /WebUI_And_Firmware_Upgrade */
quickInstallRouter.route('/WebUI_And_Firmware_Upgrade')
    .get(function(req, res) {
        res.render('./Quick_Installation/WebUI_And_Firmware_Upgrade', {
            title: 'WebUI und Firmware Upgrade',
            uplink: '/Quick_Installation/',
          });
      });

/* GET /WebUI_And_Firmware_Upgrade_HD */
quickInstallRouter.route('/WebUI_And_Firmware_Upgrade/HD_Cameras')
    .get(function(req, res) {
        res.render('./Quick_Installation/WebUI_And_Firmware_Upgrade_HD', {
            title: 'WebUI und Firmware Upgrade für HD Cameras',
            uplink: '/Quick_Installation/',
          });
      });

/* GET /WebUI_And_Firmware_Upgrade_VGA */
quickInstallRouter.route('/WebUI_And_Firmware_Upgrade/VGA_Cameras')
    .get(function(req, res) {
        res.render('./Quick_Installation/WebUI_And_Firmware_Upgrade_VGA', {
            title: 'WebUI und Firmware Upgrade für VGA Cameras',
            uplink: '/Quick_Installation/',
          });
      });

/* GET /How_To_Clear_Your_Browsing_History */
quickInstallRouter.route('/How_To_Clear_Your_Browsing_History')
    .get(function(req, res) {
        res.render('./Quick_Installation/How_To_Clear_Your_Browsing_History', {
            title: 'Browser Cache löschen',
            uplink: '/Quick_Installation/',
          });
      });

/* GET /Internet_Explorer */
quickInstallRouter.route('/How_To_Clear_Your_Browsing_History/Internet_Explorer')
    .get(function(req, res) {
        res.render('./Quick_Installation/How_To_Clear_Your_Browsing_History_Internet_Explorer', {
            title: 'Browser Cache löschen im Internet Explorer',
            uplink: '/Quick_Installation/',
          });
      });

/* GET /Mozilla_Firefox */
quickInstallRouter.route('/How_To_Clear_Your_Browsing_History/Mozilla_Firefox')
    .get(function(req, res) {
        res.render('./Quick_Installation/How_To_Clear_Your_Browsing_History_Mozilla_Firefox', {
            title: 'Browser Cache löschen in Mozilla Firefox',
            uplink: '/Quick_Installation/',
          });
      });

/* GET /Google_Chromium */
quickInstallRouter.route('/How_To_Clear_Your_Browsing_History/Google_Chromium')
    .get(function(req, res) {
        res.render('./Quick_Installation/How_To_Clear_Your_Browsing_History_Google_Chromium', {
            title: 'Browser Cache löschen in Google Chromium',
            uplink: '/Quick_Installation/',
          });
      });

/* GET /Opera */
quickInstallRouter.route('/How_To_Clear_Your_Browsing_History/Opera')
    .get(function(req, res) {
        res.render('./Quick_Installation/How_To_Clear_Your_Browsing_History_Opera', {
            title: 'Browser Cache löschen im Opera',
            uplink: '/Quick_Installation/',
          });
      });

/* GET /Microsoft_Edge */
quickInstallRouter.route('/How_To_Clear_Your_Browsing_History/Microsoft_Edge')
    .get(function(req, res) {
        res.render('./Quick_Installation/How_To_Clear_Your_Browsing_History_Microsoft_Edge', {
            title: 'Browser Cache löschen im Microsoft Edge',
            uplink: '/Quick_Installation/',
          });
      });

/* GET /Vivaldi */
quickInstallRouter.route('/How_To_Clear_Your_Browsing_History/Vivaldi')
    .get(function(req, res) {
        res.render('./Quick_Installation/How_To_Clear_Your_Browsing_History_Vivaldi', {
            title: 'Browser Cache löschen im Vivaldi',
            uplink: '/Quick_Installation/',
          });
      });

/* GET How to set up a Wireless Connection /Set_Up_A_Wireless_Connection */
quickInstallRouter.route('/Set_Up_A_Wireless_Connection')
    .get(function(req, res) {
        res.render('./Quick_Installation/Set_Up_A_Wireless_Connection', {
            title: 'Eine WLAN Verbindung aufbauen',
            uplink: '/Quick_Installation/',
          });
      });

/* GET DEV pages /dev */
quickInstallRouter.route('/DEV')
    .get(function(req, res) {
        res.render('DEV', {
            title: 'DEV Resources',
          });
      });

/* GET AMP Test Range /amp */
quickInstallRouter.route('/AMP')
    .get(function(req, res) {
        res.render('AMP', {
            title: 'Accelerated Mobile Page',
          });
      });

/* GET AMP2 Test Range /amp2 */
quickInstallRouter.route('/AMP2')
    .get(function(req, res) {
        res.render('AMP2', {
            title: 'Accelerated Mobile Page 2',
          });
      });

/* GET AMP3 Test Range /Redirection */
quickInstallRouter.route('/AMP3')
    .get(function(req, res) {
        res.render('AMP3', {
            title: 'Redirection',
          });
      });

/* GET AMP3 Test Range /Redirection */
quickInstallRouter.route('/AMP_Gallery')
    .get(function(req, res) {
        res.render('AMP_Gallery', {
            title: 'AMP Gallery',
          });
      });

module.exports = quickInstallRouter;
