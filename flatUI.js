$(document).ready(function(){

	var flatUIlist = [];

	var flatUIiMacHtml = '<div class="flatUI flatUIiMac"><div class="flat-cuerpo"><div class="flat-marco"><div class="flat-cam"></div>'; 
	flatUIiMacHtml += '<div class="flat-pantalla"><img src=""/></div></div>';
	flatUIiMacHtml += '<div class="flat-basecuerpo"><div class="flat-marca"></div></div>';
	flatUIiMacHtml += '<div class="flat-tronco"><div class="flat-cuerposombra"></div></div>';
	flatUIiMacHtml += '<div class="flat-pie"></div><div class="flat-base"></div></div>';

	var flatUIMacbookHtml = '<div class="flatUI flatUIMacbook"><div class="flat-cuerpo"><div class="flat-marco"><div class="flat-cam"></div>';
	flatUIMacbookHtml += '<div class="flat-pantalla"><img src=""/></div></div></div>';
	flatUIMacbookHtml += '<div class="flat-basebook"><div class="flat-detailOpen"></div></div></div>';

	//CONSTRUCTORS: create a object Jquery
	var FlatUIiMac = function(){
		this.JqueryObj = $(flatUIiMacHtml);
	}

	var FlatUIMacbook = function(){
		this.JqueryObj = $(flatUIMacbookHtml);
	}

	//Manejador de flats
	var FlatUIManager = function(){
		this.create = function(type){
			var flat = null;
			switch(type){
				case 'iMac':
					flat = new FlatUIiMac();
					break;
				case 'Macbook':
					flat = new FlatUIMacbook();
					break;
			}
			if (flat) flatUIlist.push(flat); 
			return flat;	
		};

		this.destroy = function(flat){
			flat.JqueryObj.remove();
			flatUIlist.splice(flatUIlist.indexOf(flat),1);
		};

		this.setSize = function(flat,size){
			var sizes = ['medium','small','large'];
			flat.JqueryObj.removeClass(sizes.join(' '));
			if (size) flat.JqueryObj.addClass(size);
		};

		this.setScreen = function(flat,urlImage){
			flat.JqueryObj.children('.flat-cuerpo').children('.flat-marco').children('.flat-pantalla').children('img')[0].src = urlImage;
		};

		this.setId = function(flat,id){
			flat.JqueryObj.attr('id',id);
		}
	}

	//objeto al que se accede.
	FlatUI = new FlatUIManager();
});