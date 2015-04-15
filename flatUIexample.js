$(document).ready(function(){
	flat1 = FlatUI.create('iMac');
	flat1.JqueryObj.appendTo('body');
	FlatUI.setScreen(flat1,'captura.jpg');
	FlatUI.setId(flat1,'imacImage');
	flat2 = FlatUI.create('Macbook');
	flat2.JqueryObj.appendTo('body');
	FlatUI.setScreen(flat2,'http://flatdsgn.com/wp-content/uploads/2013/08/Long-Shadow-Flat-UI-Kit2.jpg');
	FlatUI.setId(flat2,'macbookImage');
});