(function(){
	'use strict';
	function Sidebar(){
		var 
			load,
			resize;
		this._init=function(data){
			if(!data._htEl || !data._slides)
				return;
				
			data._SB={
				parent:$('<div>').addClass('sidebarContainer').css('width',0+'px'),
				inner:$('<div>').addClass('sidebarInner'),
				handler:$('<div>').addClass('sidebarHandler'),
				width:null,
				startPos:null,
				touched:false
				};
				
			$('<div>').addClass('s_string sidebarHandlerText').html('|||').appendTo(data._SB.handler);
			data._SB.parent.append(data._SB.inner,data._SB.handler).appendTo(data._htEl);
			
			load(data);
			
			data._SB.handler.on('touchstart mousedown',function(e){
				data._SB.touched=true;
				data._SB.startPos=e.pageX;
				data._SB.width=data._SB.parent.width();
				})
			Core.doc.on('mousemove scroll touchmove',function(e){
				if(data._SB.touched){
					resize(e,data);
					return false;
					}
				});
			Core.doc.on('mouseup touchend',function(){
				data._SB.touched=false
				});
			};
		this._highlight=function(data){
			$(data._SB.inner).find('.j_highLight').removeClass('sidebarBlockWrapActive');
			$(data._SB.inner).find('.j_highLight').eq(data._current).addClass('sidebarBlockWrapActive');
			};
		load=function(data){
			var 
				i=0,
				thumb;
			for(i;i<data._slL;i++){
				thumb=$('<img>').attr('src',data._slides.data[i].preview).addClass('thumbInner j_thumb');
				$('<div>').addClass('s_lwb j_highLight sidebarBlockWrap').attr('j_id',i).append(thumb).appendTo(data._SB.inner).click(function(x){
					return function(){
						data._current=x;
						$(Core.doc).trigger('Master.show',data);
						}
					}(i));
				}
			};
		resize=function(e,data){
				var
					delta=data._SB.width+e.pageX-data._SB.startPos;
				if(delta<0)
					delta=0;
				if(delta>document.documentElement.clientWidth-25)
					delta=document.documentElement.clientWidth-25;
				
				$(data._SB.parent).css('width',delta+'px');
				$(data._SB.inner).css('width',delta+'px');
			};
		};
		
	var sidebar= new Sidebar;
	
	Core.doc.on('Sidebar.highlight',function(e,a){
		sidebar._highlight(a);
		});
	Core.doc.on('Sidebar.init',function(e,a){
		sidebar._init(a);
		});
}());