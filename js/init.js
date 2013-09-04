(function(){
	'use strict';
	var
		slides={
			data:[
				{
				preview:'./images/thumbs/prev_1.png',
				body:'<div style="position:absolute; width:100%; min-height:100%; height:auto;"><img src="./images/grad_dark.png" style="z-index:-2;position:absolute;width:100%;height:100%;"/><div style="position:relative; width:100%; text-align:center; color:#fff;font-size:35px; font-weight:bold; margin-top:100px;">ZAGOLOVOK</div><div style="position:relative; width:90%; padding:0px 100px 0px 50px; text-align:center; color:#eee;font-size:25px;  margin-top:50px;">текст помельче текст помельче текст помельче текст помельче текст помельче текст помельче текст помельче текст помельче текст помельче текст помельче текст помельче текст помельче </div></div>'
				},
				{
				preview:'./images/thumbs/prev_2.png',
				body:'<div style="position:absolute; width:100%; min-height:100%; height:auto;"><img src="./images/grad_light.png" style="z-index:-2;position:absolute;width:100%;height:100%;"/><div style="position:relative; float:right; text-align:right;margin-right:100px; color:#ссс;font-size:25px; margin-top:200px;">Молоток незаменим в хозяйстве</div><img style="z-index:-1;position:absolute; top:0px" src="./images/hummer.png"></div>'
				},
				{
				preview:'./images/thumbs/prev_3.png',
				body:'<div style="position:absolute; width:100%; min-height:100%; height:auto;"><img src="./images/grad_red.png" style="z-index:-2;position:absolute;width:100%;height:100%;"/><div style="position:relative; width:100%; text-align:center; color:#fff;font-size:25px; margin-top:200px;">Буквы текст Буквы</div><div style="position:relative; width:100%; text-align:center; color:#6f6;font-size:35px; margin-top:30px;">А потом ещё Буквы текст Буквы</div></div>'
				},
				{
				preview:'./images/thumbs/prev_4.png',
				body:'<div style="position:absolute; width:100%; min-height:100%; height:auto;"><img src="./images/grad_blue.png" style="z-index:-2;position:absolute;width:100%;height:100%;"/><img style="z-index:-1;position:absolute;" src="./images/scheme.png"></div>'
				},
				{
				preview:'./images/thumbs/prev_5.png',
				body:'<div style="position:absolute; width:100%; min-height:100%; height:auto;"><img src="./images/grad_red.png" style="z-index:-2;position:absolute;width:100%;height:100%;"/><div style="position:relative; width:100%; text-align:center; color:#fff;font-size:25px; margin-top:300px;">Буквы текст Буквы</div><img style="z-index:-1;position:absolute;top:0px" src="./images/diag.png"></div>'
				},
				{
				preview:'./images/thumbs/prev_6.png',
				body:'<div style="position:absolute; width:100%; min-height:100%; height:auto;"><img src="./images/grad_blue_deep.png" style="z-index:-2;position:absolute;width:100%;height:100%;"/><div style="position:relative; width:100%; text-align:center; color:#fff;font-size:25px; margin-top:300px;">Две картинки и текст</div><img style="z-index:-1;position:absolute;top:0px;right:0px;" src="./images/diag.png"><img style="z-index:-1;position:absolute; top:0px" src="./images/hummer.png"></div>'
				}
			]};

	$(function(){	
		$('#j_pageContent').removeClass('s_hidden');
		$('.j_presentation').presentate(slides);
		$('#j_preloader').addClass('s_hidden');
		})
	}())