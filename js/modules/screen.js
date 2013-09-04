(function(){
	'use strict';
	function Screen(){
		this._init=function(data){
			if(!data._htEl || !data._slides)
				return;
			var
				prevCtrl,
				nextCtrl;
			
			data._screen=$('<div>').addClass('screenCont');
			prevCtrl=$('<div>').addClass('ctrl prevCtrl').html('<div class="triangle leftTriangle"></div>').click(function(){$(Core.doc).trigger('Master.prev',data)});
			nextCtrl=$('<div>').addClass('ctrl nextCtrl').html('<div class="triangle rightTriangle"></div>').click(function(){$(Core.doc).trigger('Master.next',data)});
			$('<div>').addClass('cntCont').append(prevCtrl,data._screen,nextCtrl).appendTo(data._htEl);
			};
		this._show=function(data){
			$(data._screen).html(data._slides.data[data._current].body);
			}
		};

	var screen= new Screen;

	Core.doc.on('Screen.show',function(e,a){
		screen._show(a);
		})
	Core.doc.on('Screen.init',function(e,a){
		screen._init(a);
		})
	}())