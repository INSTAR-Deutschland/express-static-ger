var express = require('express');
var motionDetectionRouter = express.Router();

/* GET Internet_Access page. */
motionDetectionRouter.get('/', function(req, res) {
    res.render('./Motion_Detection/Motion_Detection', {
        title: 'Motion Detection',
        ampimg: '/images/Search/MD_SearchThumb_MDSetup.jpg',
        headline: 'Motion Detection',
      });
  });

motionDetectionRouter.get('/Setup/', function(req, res) {
    res.render('./Motion_Detection/Motion_Detection_Setup', {
        title: 'Motion Detection Setup',
        ampimg: '/images/Search/MD_SearchThumb_MDSetup.jpg',
        headline: 'Motion Detection Setup',
        breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Motion_Detection/">Motion Detection</a></li><li><a href="/Motion_Detection/Setup/">Setup</a></li>',
		pacc: '',
		ptab: 'hidden',
		qiacc: '',
		qitab: 'hidden',
		mdacc: 'expanded',
		mdtab: '',
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

motionDetectionRouter.get('/Setup/720p_Series/', function(req, res) {
    res.render('./Motion_Detection/Motion_Detection_Setup_720p', {
        title: 'Motion Detection Setup',
        ampimg: '/images/Search/MD_SearchThumb_MDSetup.jpg',
        headline: 'Motion Detection Setup',
        breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Motion_Detection/">Motion Detection</a></li><li><a href="/Motion_Detection/Setup/">Setup</a></li><li><a href="/Motion_Detection/Setup/720p_Series/">720p Series</a></li>',
		pacc: '',
		ptab: 'hidden',
		qiacc: '',
		qitab: 'hidden',
		mdacc: 'expanded',
		mdtab: '',
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

motionDetectionRouter.get('/Setup/VGA_Series/', function(req, res) {
    res.render('./Motion_Detection/Motion_Detection_Setup_VGA', {
        title: 'Motion Detection Setup',
        ampimg: '/images/Search/MD_SearchThumb_MDSetup.jpg',
        headline: 'Motion Detection Setup',
        breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Motion_Detection/">Motion Detection</a></li><li><a href="/Motion_Detection/Setup/">Setup</a></li><li><a href="/Motion_Detection/Setup/VGA_Series/">VGA Series</a></li>',
		pacc: '',
		ptab: 'hidden',
		qiacc: '',
		qitab: 'hidden',
		mdacc: 'expanded',
		mdtab: '',
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

motionDetectionRouter.get('/Alarm_Notification/', function(req, res) {
    res.render('./Motion_Detection/Alarm_Notification', {
        title: 'Alarm Notification 1080p Series',
        ampimg: '/images/Search/MD_SearchThumb_AlarmNotification.jpg',
        headline: 'Alarm Notification 1080p Series',
        breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Motion_Detection/">Motion Detection</a></li><li><a href="/Motion_Detection/Alarm_Notification/">Alarm Notification</a></li>',
		pacc: '',
		ptab: 'hidden',
		qiacc: '',
		qitab: 'hidden',
		mdacc: 'expanded',
		mdtab: '',
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

motionDetectionRouter.get('/Alarm_Notification/720p_Series/', function(req, res) {
    res.render('./Motion_Detection/Alarm_Notification_720p', {
        title: 'Alarm Notification 720p Series',
        ampimg: '/images/Search/MD_SearchThumb_AlarmNotification.jpg',
        headline: 'Alarm Notification 720p Series',
        breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Motion_Detection/">Motion Detection</a></li><li><a href="/Motion_Detection/Alarm_Notification/">Alarm Notification</a></li><li><a href="/Motion_Detection/Alarm_Notification/720p_Series/">720p Series</a></li>',
		pacc: '',
		ptab: 'hidden',
		qiacc: '',
		qitab: 'hidden',
		mdacc: 'expanded',
		mdtab: '',
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

motionDetectionRouter.get('/Alarm_Notification/VGA_Series/', function(req, res) {
    res.render('./Motion_Detection/Alarm_Notification_VGA', {
        title: 'Alarm Notification VGA Series',
        ampimg: '/images/Search/MD_SearchThumb_AlarmNotification.jpg',
        headline: 'Alarm Notification VGA Series',
        breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Motion_Detection/">Motion Detection</a></li><li><a href="/Motion_Detection/Alarm_Notification/">Alarm Notification</a></li><li><a href="/Motion_Detection/Alarm_Notification/VGA_Series/">VGA Series</a></li>',
		pacc: '',
		ptab: 'hidden',
		qiacc: '',
		qitab: 'hidden',
		mdacc: 'expanded',
		mdtab: '',
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

motionDetectionRouter.get('/Alarm_Notification/Troubleshooting/', function(req, res) {
    res.render('./Motion_Detection/Alarm_Notification_Troubles', {
        title: 'Alarm Notification Troubleshooting',
        ampimg: '/images/Search/MD_SearchThumb_AlarmNotification.jpg',
        headline: 'Alarm Notification Troubleshooting',
        breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Motion_Detection/">Motion Detection</a></li><li><a href="/Motion_Detection/Alarm_Notification/">Alarm Notification</a></li><li><a href="/Motion_Detection/Alarm_Notification/1080p_Series/">Troubleshooting</a></li>',
		pacc: '',
		ptab: 'hidden',
		qiacc: '',
		qitab: 'hidden',
		mdacc: 'expanded',
		mdtab: '',
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

motionDetectionRouter.get('/Alarm_Notification/SMTP_Servers', function(req, res) {
    res.render('./Motion_Detection/Alarm_Notification_SMTP_Servers', {
        title: 'SMTP Server',
        ampimg: '/images/Search/MD_SearchThumb_AlarmNotification.jpg',
        headline: 'Alarm Notification - SMTP Server',
        breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Motion_Detection/">Motion Detection</a></li><li><a href="/Motion_Detection/Alarm_Notification/">Alarm Notification</a></li><li><a href="/Motion_Detection/Alarm_Notification/SMTP_Servers/">SMTP Servers</a></li>',
		pacc: '',
		ptab: 'hidden',
		qiacc: '',
		qitab: 'hidden',
		mdacc: 'expanded',
		mdtab: '',
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

motionDetectionRouter.get('/Alarm_Recording/', function(req, res) {
    res.render('./Motion_Detection/Alarm_Recording', {
        title: 'Alarm Recording',
        ampimg: '/images/Search/MD_SearchThumb_AlarmRecording.jpg',
        headline: 'Alarm Recording',
        breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Motion_Detection/">Motion Detection</a></li><li><a href="/Motion_Detection/Alarm_Recording/">Alarm Recording</a></li>',
		pacc: '',
		ptab: 'hidden',
		qiacc: '',
		qitab: 'hidden',
		mdacc: 'expanded',
		mdtab: '',
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

motionDetectionRouter.get('/SD_Card_Access/', function(req, res) {
    res.render('./Motion_Detection/SD_Card_Access', {
        title: 'SD Card Access',
        ampimg: '/images/Search/MD_SearchThumb_SDCardAccess.jpg',
        headline: 'SD Card Access',
        breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Motion_Detection/">Motion Detection</a></li><li><a href="/Motion_Detection/SD_Card_Access/">SD Card Access</a></li>',
		pacc: '',
		ptab: 'hidden',
		qiacc: '',
		qitab: 'hidden',
		mdacc: 'expanded',
		mdtab: '',
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

motionDetectionRouter.get('/SD_Card_Access/Bitkinex/', function(req, res) {
    res.render('./Motion_Detection/SD_Card_Access_Bitkinex', {
        title: 'SD Card Access - Bitkinex',
        ampimg: '/images/Search/MD_SearchThumb_SDCardAccess.jpg',
        headline: 'SD Card Access - Bitkinex',
        breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Motion_Detection/">Motion Detection</a></li><li><a href="/Motion_Detection/SD_Card_Access/">SD Card Access</a></li><li><a href="/Motion_Detection/SD_Card_Access/Bitkinex/">Bitkinex</a></li>',
		pacc: '',
		ptab: 'hidden',
		qiacc: '',
		qitab: 'hidden',
		mdacc: 'expanded',
		mdtab: '',
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

motionDetectionRouter.get('/SD_Card_Access/CuteFTP', function(req, res) {
    res.render('./Motion_Detection/SD_Card_Access_CuteFTP', {
        title: 'SD Card Access - CuteFTP',
        ampimg: '/images/Search/MD_SearchThumb_SDCardAccess.jpg',
        headline: 'SD Card Access - CuteFTP',
        breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Motion_Detection/">Motion Detection</a></li><li><a href="/Motion_Detection/SD_Card_Access/">SD Card Access</a></li><li><a href="/Motion_Detection/SD_Card_Access/CuteFTP/">CuteFTP</a></li>',
		pacc: '',
		ptab: 'hidden',
		qiacc: '',
		qitab: 'hidden',
		mdacc: 'expanded',
		mdtab: '',
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

motionDetectionRouter.get('/SD_Card_Access/DownThemAll', function(req, res) {
    res.render('./Motion_Detection/SD_Card_Access_DownThemAll', {
        title: 'SD Card Access - DownThemAll',
        ampimg: '/images/Search/MD_SearchThumb_SDCardAccess.jpg',
        headline: 'SD Card Access - DownThemAll',
        breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Motion_Detection/">Motion Detection</a></li><li><a href="/Motion_Detection/SD_Card_Access/">SD Card Access</a></li><li><a href="/Motion_Detection/SD_Card_Access/DownThemAll/">DownThemAll</a></li>',
		pacc: '',
		ptab: 'hidden',
		qiacc: '',
		qitab: 'hidden',
		mdacc: 'expanded',
		mdtab: '',
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

motionDetectionRouter.get('/SD_Card_Access/Interachy', function(req, res) {
    res.render('./Motion_Detection/SD_Card_Access_Interarchy', {
        title: 'SD Card Access - Interachy',
        ampimg: '/images/Search/MD_SearchThumb_SDCardAccess.jpg',
        headline: 'SD Card Access - Interachy',
        breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Motion_Detection/">Motion Detection</a></li><li><a href="/Motion_Detection/SD_Card_Access/">SD Card Access</a></li><li><a href="/Motion_Detection/SD_Card_Access/Interachy/">Interachy</a></li>',
		pacc: '',
		ptab: 'hidden',
		qiacc: '',
		qitab: 'hidden',
		mdacc: 'expanded',
		mdtab: '',
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

motionDetectionRouter.get('/SD_Card_Access/DeepVacuum', function(req, res) {
    res.render('./Motion_Detection/SD_Card_Access_DeepVacuum', {
        title: 'SD Card Access - DeepVacuum',
        ampimg: '/images/Search/MD_SearchThumb_SDCardAccess.jpg',
        headline: 'SD Card Access - DeepVacuum',
        breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Motion_Detection/">Motion Detection</a></li><li><a href="/Motion_Detection/SD_Card_Access/">SD Card Access</a></li><li><a href="/Motion_Detection/SD_Card_Access/DeepVacuum/">DeepVacuum</a></li>',
		pacc: '',
		ptab: 'hidden',
		qiacc: '',
		qitab: 'hidden',
		mdacc: 'expanded',
		mdtab: '',
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

motionDetectionRouter.get('/SD_Card_Access/SiteSucker', function(req, res) {
    res.render('./Motion_Detection/SD_Card_Access_SiteSucker', {
        title: 'SD Card Access - SiteSucker',
        ampimg: '/images/Search/MD_SearchThumb_SDCardAccess.jpg',
        headline: 'SD Card Access - SiteSucker',
        breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Motion_Detection/">Motion Detection</a></li><li><a href="/Motion_Detection/SD_Card_Access/">SD Card Access</a></li><li><a href="/Motion_Detection/SD_Card_Access/SiteSucker/">SiteSucker</a></li>',
		pacc: '',
		ptab: 'hidden',
		qiacc: '',
		qitab: 'hidden',
		mdacc: 'expanded',
		mdtab: '',
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

motionDetectionRouter.get('/SD_Card_Access/SimpleWget', function(req, res) {
    res.render('./Motion_Detection/SD_Card_Access_SimpleWget', {
        title: 'SD Card Access - SimpleWget',
        ampimg: '/images/Search/MD_SearchThumb_SDCardAccess.jpg',
        headline: 'SD Card Access - SimpleWget',
        breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Motion_Detection/">Motion Detection</a></li><li><a href="/Motion_Detection/SD_Card_Access/">SD Card Access</a></li><li><a href="/Motion_Detection/SD_Card_Access/SimpleWget/">SimpleWget</a></li>',
		pacc: '',
		ptab: 'hidden',
		qiacc: '',
		qitab: 'hidden',
		mdacc: 'expanded',
		mdtab: '',
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

motionDetectionRouter.get('/Alarm_FTP_Upload/', function(req, res) {
    res.render('./Motion_Detection/Alarm_FTP_Upload', {
        title: 'Alarm FTP Upload 1080p',
        ampimg: '/images/Search/MD_SearchThumb_FTPSettingsAlarmUpload.jpg',
        headline: 'Alarm FTP Upload 1080p',
        breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Motion_Detection/">Motion Detection</a></li><li><a href="/Motion_Detection/Alarm_FTP_Upload/">Alarm FTP Upload</a></li>',
		pacc: '',
		ptab: 'hidden',
		qiacc: '',
		qitab: 'hidden',
		mdacc: 'expanded',
		mdtab: '',
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

motionDetectionRouter.get('/Alarm_FTP_Upload/720p_Series/', function(req, res) {
    res.render('./Motion_Detection/Alarm_FTP_Upload_720p', {
        title: 'Alarm FTP Upload 720p Series',
        ampimg: '/images/Search/MD_SearchThumb_FTPSettingsAlarmUpload.jpg',
        headline: 'Alarm FTP Upload 720p Series',
        breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Motion_Detection/">Motion Detection</a></li><li><a href="/Motion_Detection/Alarm_FTP_Upload/">Alarm FTP Upload</a></li><li><a href="/Motion_Detection/Alarm_FTP_Upload/720p_Series/">720p Series</a></li>',
		pacc: '',
		ptab: 'hidden',
		qiacc: '',
		qitab: 'hidden',
		mdacc: 'expanded',
		mdtab: '',
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

motionDetectionRouter.get('/Alarm_FTP_Upload/VGA_Series/', function(req, res) {
    res.render('./Motion_Detection/Alarm_FTP_Upload_VGA', {
        title: 'Alarm FTP Upload VGA Series',
        ampimg: '/images/Search/MD_SearchThumb_FTPSettingsAlarmUpload.jpg',
        headline: 'Alarm FTP Upload VGA Series',
        breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Motion_Detection/">Motion Detection</a></li><li><a href="/Motion_Detection/Alarm_FTP_Upload/">Alarm FTP Upload</a></li><li><a href="/Motion_Detection/Alarm_FTP_Upload/VGA_Series/">VGA Series</a></li>',
		pacc: '',
		ptab: 'hidden',
		qiacc: '',
		qitab: 'hidden',
		mdacc: 'expanded',
		mdtab: '',
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

motionDetectionRouter.get('/Router_as_a_FTP_Server/', function(req, res) {
    res.render('./Motion_Detection/Router_as_a_FTP_Server', {
        title: 'Router or NAS as FTP Server',
        ampimg: '/images/Search/MD_SearchThumb_RouterAsFTPServer.jpg',
        headline: 'Router or NAS as FTP Server',
        breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Motion_Detection/">Motion Detection</a></li><li><a href="/Motion_Detection/Router_as_a_FTP_Server/">Router as a FTP Server</a></li>',
		pacc: '',
		ptab: 'hidden',
		qiacc: '',
		qitab: 'hidden',
		mdacc: 'expanded',
		mdtab: '',
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

motionDetectionRouter.get('/Router_as_a_FTP_Server/AVM_Fritzbox_as_FTP_Server', function(req, res) {
    res.render('./Motion_Detection/AVM_Fritzbox_as_FTP_Server', {
        title: 'AVM Fritzbox as FTP Server',
        ampimg: '/images/Search/MD_SearchThumb_RouterAsFTPServer.jpg',
        headline: 'Router or NAS as FTP Server',
        breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Motion_Detection/">Motion Detection</a></li><li><a href="/Motion_Detection/Router_as_a_FTP_Server/">Router as a FTP Server</a></li><li><a href="/Motion_Detection/Router_as_a_FTP_Server/AVM_Fritzbox_as_FTP_Server/">AVM Fritzbox</a></li>',
		pacc: '',
		ptab: 'hidden',
		qiacc: '',
		qitab: 'hidden',
		mdacc: 'expanded',
		mdtab: '',
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

motionDetectionRouter.get('/Router_as_a_FTP_Server/Telekom_Speedport_as_FTP_Server', function(req, res) {
    res.render('./Motion_Detection/Telekom_Speedport_as_FTP_Server', {
        title: 'Telekom Speedport as FTP Server',
        ampimg: '/images/Search/MD_SearchThumb_RouterAsFTPServer.jpg',
        headline: 'Router or NAS as FTP Server',
        breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Motion_Detection/">Motion Detection</a></li><li><a href="/Motion_Detection/Router_as_a_FTP_Server/">Router as a FTP Server</a></li><li><a href="/Motion_Detection/Router_as_a_FTP_Server/Telekom_Speedport_as_FTP_Server/">Speedport</a></li>',
		pacc: '',
		ptab: 'hidden',
		qiacc: '',
		qitab: 'hidden',
		mdacc: 'expanded',
		mdtab: '',
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

motionDetectionRouter.get('/Router_as_a_FTP_Server/QNAP_as_FTP_Server', function(req, res) {
    res.render('./Motion_Detection/QNAP_as_FTP_Server', {
        title: 'QNAP as FTP Server',
        ampimg: '/images/Search/MD_SearchThumb_RouterAsFTPServer.jpg',
        headline: 'Router or NAS as FTP Server',
        breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Motion_Detection/">Motion Detection</a></li><li><a href="/Motion_Detection/Router_as_a_FTP_Server/">Router as a FTP Server</a></li><li><a href="/Motion_Detection/Router_as_a_FTP_Server/QNAP_as_FTP_Server/">QNAP</a></li>',
		pacc: '',
		ptab: 'hidden',
		qiacc: '',
		qitab: 'hidden',
		mdacc: 'expanded',
		mdtab: '',
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

motionDetectionRouter.get('/Router_as_a_FTP_Server/Synology_as_FTP_Server', function(req, res) {
    res.render('./Motion_Detection/Synology_as_FTP_Server', {
        title: 'Synology as FTP Server',
        ampimg: '/images/Search/MD_SearchThumb_RouterAsFTPServer.jpg',
        headline: 'Router or NAS as FTP Server',
        breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Motion_Detection/">Motion Detection</a></li><li><a href="/Motion_Detection/Router_as_a_FTP_Server/">Router as a FTP Server</a></li><li><a href="/Motion_Detection/Router_as_a_FTP_Server/Synology_as_FTP_Server/">Synology</a></li>',
		pacc: '',
		ptab: 'hidden',
		qiacc: '',
		qitab: 'hidden',
		mdacc: 'expanded',
		mdtab: '',
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

motionDetectionRouter.get('/Router_as_a_FTP_Server/WD_MyCloud_as_FTP_Server', function(req, res) {
    res.render('./Motion_Detection/WD_MyCloud_as_FTP_Server', {
        title: 'WD MyCloud as FTP Server',
        ampimg: '/images/Search/MD_SearchThumb_RouterAsFTPServer.jpg',
        headline: 'Router or NAS as FTP Server',
        breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Motion_Detection/">Motion Detection</a></li><li><a href="/Motion_Detection/Router_as_a_FTP_Server/">Router as a FTP Server</a></li><li><a href="/Motion_Detection/Router_as_a_FTP_Server/WD_MyCloud_as_FTP_Server/">WD MyCloud</a></li>',
		pacc: '',
		ptab: 'hidden',
		qiacc: '',
		qitab: 'hidden',
		mdacc: 'expanded',
		mdtab: '',
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

motionDetectionRouter.get('/FTP_Server_Setup/', function(req, res) {
    res.render('./Motion_Detection/FTP_Server_Setup', {
        title: 'FTP Server Setup',
        ampimg: '/images/Search/MD_SearchThumb_FTPServerSetup.jpg',
        headline: 'FTP Server Setup',
        breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Motion_Detection/">Motion Detection</a></li><li><a href="/Motion_Detection/FTP_Server_Setup/">FTP Server Setup</a></li>',
		pacc: '',
		ptab: 'hidden',
		qiacc: '',
		qitab: 'hidden',
		mdacc: 'expanded',
		mdtab: '',
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

motionDetectionRouter.get('/FTP_Server_Setup/Install_FileZilla_Server/', function(req, res) {
    res.render('./Motion_Detection/Install_FileZilla_Server', {
        title: 'FTP Filezilla Server Setup',
        ampimg: '/images/Search/MD_SearchThumb_FTPServerSetup.jpg',
        headline: 'FTP Filezilla Server Setup',
        breadcrumbs: '<li><a href="/Motion_Detection/">Motion Detection</a></li><li><a href="/Motion_Detection/FTP_Server_Setup/">FTP Server Setup</a></li><li><a href="/Motion_Detection/FTP_Server_Setup/Install_FileZilla_Server/">Filezilla Installation</a></li>',
		pacc: '',
		ptab: 'hidden',
		qiacc: '',
		qitab: 'hidden',
		mdacc: 'expanded',
		mdtab: '',
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

motionDetectionRouter.get('/Alarm_Server/', function(req, res) {
    res.render('./Motion_Detection/Alarm_Server', {
        title: 'Alarm Server',
        ampimg: '/images/Search/MD_SearchThumb_AlarmServer.jpg',
        headline: 'Alarm Server',
        breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Motion_Detection/">Motion Detection</a></li><li><a href="/Motion_Detection/Alarm_Server/">Alarm Server</a></li>',
		pacc: '',
		ptab: 'hidden',
		qiacc: '',
		qitab: 'hidden',
		mdacc: 'expanded',
		mdtab: '',
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

motionDetectionRouter.get('/INSTAR_Cloud/', function(req, res) {
    res.render('./Motion_Detection/Cloud', {
        title: 'INSTAR Cloud',
        ampimg: '/images/Search/MD_SearchThumb_Cloud.jpg',
        headline: 'INSTAR Cloud',
        breadcrumbs: '<li class="breadcrumb-item"><a href="/">Home</a></li><li class="breadcrumb-item"><a href="/Motion_Detection/">Motion Detection</a></li><li class="breadcrumb-item"><a href="/Motion_Detection/INSTAR_Cloud/">INSTAR Cloud</a></li>',
		pacc: '',
		ptab: 'hidden',
		qiacc: '',
		qitab: 'hidden',
		mdacc: 'expanded',
		mdtab: '',
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

motionDetectionRouter.get('/INSTAR_Cloud/Create_User_Account', function(req, res) {
    res.render('./Motion_Detection/Cloud_Create_User_Account', {
        title: 'INSTAR Cloud Account',
        ampimg: '/images/Search/MD_SearchThumb_Cloud.jpg',
        headline: 'INSTAR Cloud Account',
        breadcrumbs: '<li><a href="/Motion_Detection/">Motion Detection</a></li><li><a href="/Motion_Detection/INSTAR_Cloud/">INSTAR Cloud</a></li><li><a href="/Motion_Detection/INSTAR_Cloud/Create_User_Account/">Create User Account</a></li>',
		pacc: '',
		ptab: 'hidden',
		qiacc: '',
		qitab: 'hidden',
		mdacc: 'expanded',
		mdtab: '',
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

motionDetectionRouter.get('/INSTAR_Cloud/Storage', function(req, res) {
    res.render('./Motion_Detection/Cloud_Get_More_Cloudstorage', {
        title: 'INSTAR Cloud Storage',
        ampimg: '/images/Search/MD_SearchThumb_Cloud.jpg',
        headline: 'INSTAR Cloud Storage',
        breadcrumbs: '<li><a href="/Motion_Detection/">Motion Detection</a></li><li><a href="/Motion_Detection/INSTAR_Cloud/">INSTAR Cloud</a></li><li><a href="/Motion_Detection/INSTAR_Cloud/Storage/">Storage</a></li>',
		pacc: '',
		ptab: 'hidden',
		qiacc: '',
		qitab: 'hidden',
		mdacc: 'expanded',
		mdtab: '',
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

motionDetectionRouter.get('/INSTAR_Cloud/User', function(req, res) {
    res.render('./Motion_Detection/Cloud_User', {
        title: 'INSTAR Cloud User',
        ampimg: '/images/Search/MD_SearchThumb_Cloud.jpg',
        headline: 'INSTAR Cloud User',
        breadcrumbs: '<li><a href="/Motion_Detection/">Motion Detection</a></li><li><a href="/Motion_Detection/INSTAR_Cloud/">INSTAR Cloud</a></li><li><a href="/Motion_Detection/INSTAR_Cloud/User/">User</a></li>',
		pacc: '',
		ptab: 'hidden',
		qiacc: '',
		qitab: 'hidden',
		mdacc: 'expanded',
		mdtab: '',
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

motionDetectionRouter.get('/INSTAR_Cloud/Administration', function(req, res) {
    res.render('./Motion_Detection/Cloud_Administration', {
        title: 'INSTAR Cloud Admin',
        ampimg: '/images/Search/MD_SearchThumb_Cloud.jpg',
        headline: 'INSTAR Cloud Admin',
        breadcrumbs: '<li><a href="/Motion_Detection/">Motion Detection</a></li><li><a href="/Motion_Detection/INSTAR_Cloud/">INSTAR Cloud</a></li><li><a href="/Motion_Detection/INSTAR_Cloud/Administration/">Administration</a></li>',
		pacc: '',
		ptab: 'hidden',
		qiacc: '',
		qitab: 'hidden',
		mdacc: 'expanded',
		mdtab: '',
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

motionDetectionRouter.get('/INSTAR_Cloud/Alarm_Recordings', function(req, res) {
    res.render('./Motion_Detection/Cloud_Alarm', {
        title: 'INSTAR Cloud Alarm Recordings',
        ampimg: '/images/Search/MD_SearchThumb_Cloud.jpg',
        headline: 'INSTAR Cloud Recordings',
        breadcrumbs: '<li><a href="/Motion_Detection/">Motion Detection</a></li><li><a href="/Motion_Detection/INSTAR_Cloud/">INSTAR Cloud</a></li><li><a href="/Motion_Detection/INSTAR_Cloud/Alarm_Recordings/">Alarm Recordings</a></li>',
		pacc: '',
		ptab: 'hidden',
		qiacc: '',
		qitab: 'hidden',
		mdacc: 'expanded',
		mdtab: '',
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

motionDetectionRouter.get('/INSTAR_Cloud/Camera_Sets', function(req, res) {
    res.render('./Motion_Detection/Cloud_Sets', {
        title: 'INSTAR Cloud Sets',
        ampimg: '/images/Search/MD_SearchThumb_Cloud.jpg',
        headline: 'INSTAR Cloud Sets',
        breadcrumbs: '<li><a href="/Motion_Detection/">Motion Detection</a></li><li><a href="/Motion_Detection/INSTAR_Cloud/">INSTAR Cloud</a></li><li><a href="/Motion_Detection/INSTAR_Cloud/Camera_Sets/">Camera Sets</a></li>',
		pacc: '',
		ptab: 'hidden',
		qiacc: '',
		qitab: 'hidden',
		mdacc: 'expanded',
		mdtab: '',
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

module.exports = motionDetectionRouter;
