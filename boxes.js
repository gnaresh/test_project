function boxes_create_comment_box(color,url,num,sort) 
{ if(color == 0){color = 'light';}else{color = 'dark';}
	if(sort == 0){sort = 'social';}else if(sort == 1){sort = 'reverse_time';}else{sort = 'time';}
	jQuery(FB_API["Instance"].elem).remove();
		FB_API["Instance"].elem = null;
	FB_API["Instance"].elem = document.createElement("div");
		 FB_API["Instance"].elem.style.overflowY = "auto";
		 jQuery(FB_API["Instance"].elem).css("position", "absolute");
		 FB_API["Instance"].elem.innerHTML = '<fb:comments class="fb-comments" data-order-by="'+sort+'" data-colorscheme="'+color+'" data-numposts="'+num+'" data-href="'+url+'"</fb:comments>';
                 FB_API["Instance"].elem.id = FB_API["Instance"].uid;
		 jQuery(FB_API["Instance"].elem).appendTo("body");
		 var left = FB_API["Instance Layer"].layerToCanvas(FB_API["Instance"].x, FB_API["Instance"].y, true);
		var top = FB_API["Instance Layer"].layerToCanvas(FB_API["Instance"].x, FB_API["Instance"].y, false);
		var right = FB_API["Instance Layer"].layerToCanvas(FB_API["Instance"].x + FB_API["Instance"].width, FB_API["Instance"].y + FB_API["Instance"].height, true);
		var bottom = FB_API["Instance Layer"].layerToCanvas(FB_API["Instance"].x + FB_API["Instance"].width, FB_API["Instance"].y + FB_API["Instance"].height, false);
		var offx = Math.round(left) + jQuery(FB_API["Instance Runtime"].canvas).offset().left;
		var offy = Math.round(top) + jQuery(FB_API["Instance Runtime"].canvas).offset().top;
		var widthfactor = FB_API["Instance"].width > 0 ? 1 : -1;
		var heightfactor = FB_API["Instance"].height > 0 ? 1 : -1;
		jQuery(FB_API["Instance"].elem).css("position", "absolute");
		jQuery(FB_API["Instance"].elem).offset({left: offx, top: offy});
		jQuery(FB_API["Instance"].elem).width(Math.round(right - left));
		jQuery(FB_API["Instance"].elem).height(Math.round(bottom - top));
		FB_API["Instance"].rotation2D = "-webkit-transform:rotate("+ FB_API["Instance"].angle * widthfactor * heightfactor*180/3.1416
										+"deg);-webkit-transform-origin:0% 0%;"+
									"-moz-transform:rotate("+ FB_API["Instance"].angle * widthfactor * heightfactor*180/3.1416
										+"deg);-moz-transform-origin:0% 0%;"+
									"-o-transform:rotate("+ FB_API["Instance"].angle * widthfactor * heightfactor*180/3.1416
										+"deg);-o-transform-origin:0% 0%;";
		FB_API["Instance"].elem.style.cssText += ";"+/*FB_API["Instance"].CSSstyle +";"+*/ FB_API["Instance"].rotation2D/* + FB_API["Instance"].perspectiveValue + FB_API["Instance"].rotation3D*/;
		FB_API["Instance"].lastLeft = 0;
		 FB_API["Instance"].lastTop = 0;
		 FB_API["Instance"].lastRight = 0;
		 FB_API["Instance"].lastBottom = 0;
		 FB_API["Instance"].lastWinWidth = 0;
		 FB_API["Instance"].lastWinHeight = 0;
		 FB.XFBML.parse();FB_API["Instance Runtime"].tickMe(FB_API["Instance"]);};
function boxes_create_like_box(action,color,url,under,layout2,tracking,share,show)
{
 jQuery(FB_API["Instance"].elem).remove();
		FB_API["Instance"].elem = null;   
 FB_API["Instance"].elem = document.createElement("div");
		 FB_API["Instance"].elem.innerHTML = '<fb:like class="fb-like" data-kid-directed-site="'+under+'" data-colorscheme="'+color+'" data-ref="'+tracking+'" data-href="'+url+'" data-layout="'+layout2+'" data-action="'+action+'" data-show-faces="'+show+'" data-share="'+share+'"></fb:like>';
                 
		 FB_API["Instance"].elem.id = FB_API["Instance"].uid;
		 jQuery(FB_API["Instance"].elem).appendTo("body");
		 var left = FB_API["Instance"].layer.layerToCanvas(FB_API["Instance"].x, FB_API["Instance"].y, true);
		var top = FB_API["Instance"].layer.layerToCanvas(FB_API["Instance"].x, FB_API["Instance"].y, false);
		var right = FB_API["Instance"].layer.layerToCanvas(FB_API["Instance"].x + FB_API["Instance"].width, FB_API["Instance"].y + FB_API["Instance"].height, true);
		var bottom = FB_API["Instance"].layer.layerToCanvas(FB_API["Instance"].x + FB_API["Instance"].width, FB_API["Instance"].y + FB_API["Instance"].height, false);
		var offx = Math.round(left) + jQuery(FB_API["Instance"].runtime.canvas).offset().left;
		var offy = Math.round(top) + jQuery(FB_API["Instance"].runtime.canvas).offset().top;
		var widthfactor = FB_API["Instance"].width > 0 ? 1 : -1;
		var heightfactor = FB_API["Instance"].height > 0 ? 1 : -1;
		jQuery(FB_API["Instance"].elem).css("position", "absolute");
		jQuery(FB_API["Instance"].elem).offset({left: offx, top: offy});
		jQuery(FB_API["Instance"].elem).width(Math.round(right - left));
		jQuery(FB_API["Instance"].elem).height(Math.round(bottom - top));
		FB_API["Instance"].rotation2D = "-webkit-transform:rotate("+ FB_API["Instance"].angle * widthfactor * heightfactor*180/3.1416
										+"deg);-webkit-transform-origin:0% 0%;"+
									"-moz-transform:rotate("+ FB_API["Instance"].angle * widthfactor * heightfactor*180/3.1416
										+"deg);-moz-transform-origin:0% 0%;"+
									"-o-transform:rotate("+ FB_API["Instance"].angle * widthfactor * heightfactor*180/3.1416
										+"deg);-o-transform-origin:0% 0%;";
		FB_API["Instance"].elem.style.cssText += ";"+/*FB_API["Instance"].CSSstyle +";"+*/ FB_API["Instance"].rotation2D/* + FB_API["Instance"].perspectiveValue + FB_API["Instance"].rotation3D*/;
		//FB_API["Instance"].updatePosition(true);
                FB_API["Instance"].lastAngle = 0;
		FB_API["Instance"].lastLeft = 0;
		 FB_API["Instance"].lastTop = 0;
		 FB_API["Instance"].lastRight = 0;
		 FB_API["Instance"].lastBottom = 0;
		 FB_API["Instance"].lastWinWidth = 0;
		 FB_API["Instance"].lastWinHeight = 0;
		 FB_API["Instance"].updatePosition(true);
		FB.XFBML.parse();
		FB_API["Instance"].runtime.tickMe(FB_API["Instance"]);   
}
function boxes_create_like_boxPG(action,color,url,under,layout2,tracking,share,show)
{
 jQuery(FB_API["Instance"].elem).remove();
		FB_API["Instance"].elem = null;   
 FB_API["Instance"].elem = document.createElement("IFRAME");
		 FB_API["Instance"].elem.setAttribute('src','http://www.facebook.com/plugins/like.php?href='+url+'&layout='+layout2+'&action='+action+'&show_faces='+show+'&share='+share+'&colorscheme='+color+'&kid_directed_site='+under+'&ref='+tracking+'&appId='+FB_Properties["App ID"]);
                 
		 FB_API["Instance"].elem.id = FB_API["Instance"].uid;
		 jQuery(FB_API["Instance"].elem).appendTo("body");
		 var left = FB_API["Instance"].layer.layerToCanvas(FB_API["Instance"].x, FB_API["Instance"].y, true);
		var top = FB_API["Instance"].layer.layerToCanvas(FB_API["Instance"].x, FB_API["Instance"].y, false);
		var right = FB_API["Instance"].layer.layerToCanvas(FB_API["Instance"].x + FB_API["Instance"].width, FB_API["Instance"].y + FB_API["Instance"].height, true);
		var bottom = FB_API["Instance"].layer.layerToCanvas(FB_API["Instance"].x + FB_API["Instance"].width, FB_API["Instance"].y + FB_API["Instance"].height, false);
		var offx = Math.round(left) + jQuery(FB_API["Instance"].runtime.canvas).offset().left;
		var offy = Math.round(top) + jQuery(FB_API["Instance"].runtime.canvas).offset().top;
		var widthfactor = FB_API["Instance"].width > 0 ? 1 : -1;
		var heightfactor = FB_API["Instance"].height > 0 ? 1 : -1;
		jQuery(FB_API["Instance"].elem).css("position", "absolute");
		jQuery(FB_API["Instance"].elem).offset({left: offx, top: offy});
		jQuery(FB_API["Instance"].elem).width(Math.round(right - left));
		jQuery(FB_API["Instance"].elem).height(Math.round(bottom - top));
		FB_API["Instance"].rotation2D = "-webkit-transform:rotate("+ FB_API["Instance"].angle * widthfactor * heightfactor*180/3.1416
										+"deg);-webkit-transform-origin:0% 0%;"+
									"-moz-transform:rotate("+ FB_API["Instance"].angle * widthfactor * heightfactor*180/3.1416
										+"deg);-moz-transform-origin:0% 0%;"+
									"-o-transform:rotate("+ FB_API["Instance"].angle * widthfactor * heightfactor*180/3.1416
										+"deg);-o-transform-origin:0% 0%;";
		FB_API["Instance"].elem.style.cssText += ";"+/*FB_API["Instance"].CSSstyle +";"+*/ FB_API["Instance"].rotation2D/* + FB_API["Instance"].perspectiveValue + FB_API["Instance"].rotation3D*/;
		//FB_API["Instance"].updatePosition(true);
                FB_API["Instance"].lastAngle = 0;
		FB_API["Instance"].lastLeft = 0;
		 FB_API["Instance"].lastTop = 0;
		 FB_API["Instance"].lastRight = 0;
		 FB_API["Instance"].lastBottom = 0;
		 FB_API["Instance"].lastWinWidth = 0;
		 FB_API["Instance"].lastWinHeight = 0;
		 FB_API["Instance"].updatePosition(true);
		FB.XFBML.parse();
		FB_API["Instance"].runtime.tickMe(FB_API["Instance"]);   
}