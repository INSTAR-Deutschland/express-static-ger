var express = require('express');
var advancedUserRouter = express.Router();

advancedUserRouter.route('/')
  .get(function(req, res) {
    res.status(301).redirect('/Erweitert/');
});

advancedUserRouter.route('/Website_Integration/')
  .get(function(req, res) {
    res.status(301).redirect('/Erweitert/Webseiten_Einbindung/');
});

advancedUserRouter.route('/Website_Integration/Cambozola/')
  .get(function(req, res) {
    res.status(301).redirect('/Erweitert/Webseiten_Einbindung/Cambozola/');
});

advancedUserRouter.route('/Website_Integration/Open_IP_Camera_Manager/')
  .get(function(req, res) {
    res.status(301).redirect('/Erweitert/Webseiten_Einbindung/Open_IP_Camera_Manager/');
});

advancedUserRouter.route('/Website_Integration/HD_Camera_Integration/')
  .get(function(req, res) {
    res.status(301).redirect('/Erweitert/Webseiten_Einbindung/HD_Kamera_Einbindung/');
});

advancedUserRouter.route('/CGI_Commands/')
  .get(function(req, res) {
    res.status(301).redirect('/Erweitert/CGI_Befehle/');
});

advancedUserRouter.route('/CGI_Commands/VGA_Series_CGI_List/')
  .get(function(req, res) {
    res.status(301).redirect('/Erweitert/CGI_Befehle/VGA_Serie_CGI_Befehle/');
});

advancedUserRouter.route('/Tasker/')
  .get(function(req, res) {
    res.status(301).redirect('/Erweitert/Tasker/');
});

advancedUserRouter.route('/Tasker/Motion_Detection_Add_Task')
  .get(function(req, res) {
    res.status(301).redirect('/Erweitert/Tasker/Bewegungserkennung_Aufgabe_Hinzufuegen');
});

advancedUserRouter.route('/Tasker/Motion_Detection_Add_Profile')
  .get(function(req, res) {
    res.status(301).redirect('/Erweitert/Tasker/Bewegungserkennung_Profil_Hinzufuegen');
});

advancedUserRouter.route('/Tasker/Motion_Detection_Deactivate_Add_Task')
  .get(function(req, res) {
    res.status(301).redirect('/Erweitert/Tasker/Bewegungserkennung_Deaktivieren_Aufgabe_Hinzufuegen');
});

advancedUserRouter.route('/Tasker/Motion_Detection_Deactivate_Add_Profile')
  .get(function(req, res) {
    res.status(301).redirect('/Erweitert/Tasker/Bewegungserkennung_Deaktivieren_Profil_Hinzufuegen');
});

advancedUserRouter.route('/Tasker/Activate_IR_Add_Shortcut')
  .get(function(req, res) {
    res.status(301).redirect('/Erweitert/Tasker/IR_Aktivieren_Shortcut_Hinzufuegen');
});

advancedUserRouter.route('/Tasker/Deactivate_IR_Add_Shortcut')
  .get(function(req, res) {
    res.status(301).redirect('/Erweitert/Tasker/IR_Deaktivieren_Shortcut_Hinzufuegen');
});

advancedUserRouter.route('/Tasker/Activate_Nightvision_Task')
  .get(function(req, res) {
    res.status(301).redirect('/Erweitert/Tasker/Nachtsicht_Aktivieren_Aufgabe');
});

advancedUserRouter.route('/Tasker/Deactivate_Nightvision_Task')
  .get(function(req, res) {
    res.status(301).redirect('/Erweitert/Tasker/Nachtsicht_Deaktivieren_Aufgabe');
});

advancedUserRouter.route('/Tasker/Nightvision_Scene')
  .get(function(req, res) {
    res.status(301).redirect('/Erweitert/Tasker/Nachtsicht_Szene');
});

advancedUserRouter.route('/Tasker/Schedule_PTZ_Task')
  .get(function(req, res) {
    res.status(301).redirect('/Erweitert/Tasker/Zeitplan_PTZ_Aufgabe');
});

advancedUserRouter.route('/Tasker/Schedule_Alarm_Task')
  .get(function(req, res) {
    res.status(301).redirect('/Erweitert/Tasker/Zeitplan_Alarm_Aufgabe');
});

advancedUserRouter.route('/Tasker/Schedule_Profile')
  .get(function(req, res) {
    res.status(301).redirect('/Erweitert/Tasker/Zeitplan_Profil');
});

advancedUserRouter.route('/Tasker/Schedule_PTZ_Task')
  .get(function(req, res) {
    res.status(301).redirect('/Erweitert/Tasker/Zeitplan_PTZ_Aufgabe');
});

advancedUserRouter.route('/Restore_WebUI/')
  .get(function(req, res) {
    res.status(301).redirect('/Erweitert/WebUI_Wiederherstellen/');
});

advancedUserRouter.route('/Restore_Firmware/')
  .get(function(req, res) {
    res.status(301).redirect('/Erweitert/Firmware_Wiederherstellen/');
});

advancedUserRouter.route('/CCTV_vs_IP/')
  .get(function(req, res) {
    res.status(301).redirect('/Erweitert/CCTV_vs_IP/');
});

advancedUserRouter.route('/VPN_AVM_Fritzbox/')
  .get(function(req, res) {
    res.status(301).redirect('/Erweitert/VPN_AVM_Fritzbox/');
});

module.exports = advancedUserRouter;
