$(document).ready(function(){
	flat1 = FlatUI.create('iMac');
	FlatUI.setScreen(flat1,'http://www.smashingbuzz.com/wp-content/uploads/2013/07/Flat-UI.4.jpg');
	FlatUI.setId(flat1,'imacImage');
	flat1.JqueryObj.appendTo('body');
	flat2 = FlatUI.create('Macbook');
	FlatUI.setScreen(flat2,'http://flatdsgn.com/wp-content/uploads/2013/08/Long-Shadow-Flat-UI-Kit2.jpg');
	FlatUI.setId(flat2,'macbookImage');
	flat2.JqueryObj.appendTo('body');
});