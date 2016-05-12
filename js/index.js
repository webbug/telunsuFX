$(function(){
	

	   /*禁止默认拖动事件*/
	  document.ontouchmove = function(event){
		event.preventDefault();
	  };
	    
	alert($(window).width()+'-----'+$(window).height());
	
	    function styleJs(){
			var pingKuan=jQuery(".m_wrapper").width(),//m_wrapper是最外层div的类名
				bili = function(mun){
					var oScale = mun/640;	//750是psd宽度
					return oScale.toFixed(6);
				};
				
		
			//例子
			jQuery(".iBg").css({
				"width":pingKuan * bili(240)	//240是在480宽度的psd中的width		
			});
			

		
			//样式重置完成之后
			jQuery(".load").hide();
			jQuery(".m_wrapper").css({
				"opacity": 1
			});
			
			
			/*pages*/
          
            setTimeout(function(){
            	jQuery('.sn').addClass('snn');
            	jQuery('.zuan').addClass('zuann');
            	jQuery('.gen').addClass('genn');
            	jQuery('.bbom').addClass('bbomm');
            	jQuery('.hb').addClass('hbb');
            	jQuery('.lq').addClass('lqq');
            	jQuery('.xxf').addClass('xxff');
            	jQuery('.money').addClass('moneyy');
            	jQuery('.content .hb .fan').addClass('fann');
            	
            	jQuery('.bottom_nav .btn_trans1').addClass('bbttnn');
            	setTimeout(function(){
            		 	jQuery('.bottom_nav .btn_trans2').addClass('bbttnn');
            	},500);
            	setTimeout(function(){
            		 	jQuery('.bottom_nav .btn_trans3').addClass('bbttnn');
            	},1000);
            	setTimeout(function(){
            		 	jQuery('.bottom_nav .btn_trans4').addClass('bbttnn');
            	},1500);
            	setTimeout(function(){
            		 	jQuery('.bottom_nav .btn_trans5').addClass('bbttnn');
            	},2000);
            	
            },600);
            
            
            /*领取记录*/
            $('.input1_lqjl').css({
                "min-height":$('.input1_lqjl').width() + 'px',
                "line-height":$('.input1_lqjl').width() + 'px'
            });
            $('.input2_lqjl').css({
                "min-height":$('.input2_lqjl').width() + 'px',
                "line-height":$('.input2_lqjl').width() + 'px'
            });
            
          
            
            /*弹窗*/
            $('.tan_panel').css({
              "height":($(window).height() - $('.tan_close').height())*0.9 + 'px'
            });
            
            $('.panel_box').css({
              "top":($('.tan_panel').height() - $('.panel_box').height())/2 + 'px'
            });
            
            
           
           /*现金弹窗*/
          Zepto('.ckxj').tap(function(){
             Zepto('.screen').css({
               "z-index":'9999999999'
             }).animate({
                  	opacity:'1',
                    scale:'1'},
                  	500,
                  	'ease-in-out',
                  	function(){});
          });
            
          Zepto('.tan_close').tap(function(){
            Zepto('.screen').animate({
                  	opacity:'0',
                    scale:'0'},
                  	500,
                  	'ease-in-out',
                  	function(){
                  	Zepto('.screen').css({
                  	 "z-index":'0'
                  	});
                  	});
          });
          
          
          
          
          /*兑换失败*/
         jQuery('.panel_position').css({
           "top":(jQuery('.panel_box').height() - jQuery('.panel_position').height())/2 + 'px'
         });
         
         
         
         /*滚动条层高度适应*/
//       jQuery('#wrapper,#scroller').css({
//         "top":jQuery('.hd_nav').offset().top + jQuery('.hd_nav').height()+ 5 + "px",
//         "padding-bottom":jQuery('.hd_nav').offset().top + jQuery('.hd_nav').height()+ 5 + "px"
//       });

          
          //领取成功
          jQuery('.yh_lqcg').css({
          	"width":pingKuan * bili(217),
          	"height":pingKuan * bili(211),
          	"top":pingKuan * bili(232),
          	"left":pingKuan * bili(405)
          });
          
           jQuery('.yh2_lqcg').css({
          	"width":pingKuan * bili(69),
          	"height":pingKuan * bili(66),
          	"top":pingKuan * bili(488),
          	"left":pingKuan * bili(92)
          });
          
           jQuery('.yh3_lqcg').css({
          	"width":pingKuan * bili(170),
          	"height":pingKuan * bili(158),
          	"top":pingKuan * bili(368),
          	"left":pingKuan * bili(19)
          });

         jQuery('.yh4_lqcg').css({
          	"width":pingKuan * bili(69),
          	"height":pingKuan * bili(66),
          	"top":pingKuan * bili(602),
          	"left":pingKuan * bili(530)
          });
	    
	    
	    jQuery('.title_lqsj').css({
          	"width":pingKuan * bili(477),
          	"height":pingKuan * bili(47),
          	"top":pingKuan * bili(100)
          });
	      jQuery('.time_zhuan').css({
          	"width":pingKuan * bili(391),
          	"height":"auto",
          	"top":pingKuan * bili(210)
          });
	    
	    jQuery('.mes_yzm_error33').css({
          	"margin-top":pingKuan * bili(430)
          });
	    
	    
	         jQuery('.lqsj_jg').css({
          	"width":pingKuan * bili(597),
          	"height":pingKuan * bili(198),
          	"top":pingKuan * bili(500)
          });
          
          
          jQuery('.lqsj_button').css({
          	"top":pingKuan * bili(720)
          });
          
          
	    
	    
	    jQuery('.top_box').css({
	    	"height":jQuery('.top_box').height() + 'px'
	    });
	    
	    
	    jQuery('.yzm_sn').css({
	    	"position":"relative",
          	"width":pingKuan * bili(290),
          	"height":pingKuan * bili(290),
          	"top":pingKuan * bili(25)
          });
	    
	    jQuery('.sr_yzm').css({
          	"margin-top":pingKuan * bili(68)
          });
	    jQuery('.input_yzsjh').css({
          	"margin-top":pingKuan * bili(32)
          });
	     jQuery('.mes_ti2').css({
          	"margin-top":pingKuan * bili(50)
          });
          
          if(jQuery(window).height()<=504){
	          jQuery('.lklq_smcg').css({
	          	"position":"absolute",
	          	"bottom":pingKuan * bili(180)
	          });
          }else if(jQuery(window).height()==599 || jQuery(window).width()==432){
          
	          jQuery('.sn_smcg').css({
	          	"width":"30%"
	          });

	          
          }else{
          	 jQuery('.lklq_smcg').css({
	          	"position":"absolute",
	          	"bottom":pingKuan * bili(90)
	          });
          }
   
   
         if(jQuery(window).height()==599 || jQuery(window).width()==432){
         	
         	setInterval(function(){
         	  jQuery('.ssmmgg').css({
	          	"width":"320px",
	          	"height":"auto"
	          });
	          
	          jQuery('.lklq_ssmmgg').css({
	          	"position":"absolute",
	          	"top":pingKuan * bili(650)
	          });
	          
         	},1);
        
	        
         }
   
          
          
           jQuery('.ssmmgg').css({
          	"position":"absolute",
          	"top":pingKuan * bili(179),
          	"width":pingKuan * bili(574),
          	"height":pingKuan * bili(511)
          });
          
           jQuery('.lklq_ssmmgg').css({
          	"position":"absolute",
          	"top":pingKuan * bili(730),
          	"width":pingKuan * bili(200),
          	"height":pingKuan * bili(83)
          });
          
          
           jQuery('.sm_tt').css({
          	"position":"absolute",
          	"top":pingKuan * bili(97),
          	"width":pingKuan * bili(387),
          	"height":pingKuan * bili(46),
          	"margin-top":pingKuan * bili(0)
          });
          
          
          
          /*错误提示*/
          jQuery('.pao_error').css({
          	"width":pingKuan * bili(612),
          	"height":pingKuan * bili(278),
          	"bottom":pingKuan * bili(16)
          });
          
          jQuery('.text_logo').css({
          	"width":pingKuan * bili(148),
          	"height":pingKuan * bili(74),
          	"top":pingKuan * bili(79),
          	"left":pingKuan * bili(47)
          });
          
          
          jQuery('.ti_error').css({
          	"width":pingKuan * bili(182),
          	"height":pingKuan * bili(199)
          });
          jQuery('.ti2_error').css({
          	"width":pingKuan * bili(231),
          	"height":pingKuan * bili(265)
          });
          
        if(jQuery(window).height()<=504){
        	jQuery('.lqjl_xtt').css({
          	"top":pingKuan * bili(50),
          	"width":pingKuan * bili(407),
          	"height":pingKuan * bili(22)
          });
        }else{
        	jQuery('.lqjl_xtt').css({
          	"top":pingKuan * bili(29),
          	"width":pingKuan * bili(407),
          	"height":pingKuan * bili(22)
          });
        }

          
            jQuery('.icon_jzd_js').css({
          	"position":"absolute",
          	"bottom":pingKuan * bili(3),
          	"left":pingKuan * bili(262),
          	"width":pingKuan * bili(28),
          	"height":pingKuan * bili(14)
          });
          
           jQuery('.icon_jzd_sm').css({
          	"position":"absolute",
          	"bottom":pingKuan * bili(3),
          	"left":pingKuan * bili(76),
          	"width":pingKuan * bili(28),
          	"height":pingKuan * bili(14)
          });
          
          
                  jQuery('.icon_jzd_wt').css({
          	"position":"absolute",
          	"bottom":pingKuan * bili(3),
          	"left":pingKuan * bili(450),
          	"width":pingKuan * bili(28),
          	"height":pingKuan * bili(14)
          });
          
          
            jQuery('.yg_text').css({
          	"top":pingKuan * bili(130),
          	"width":pingKuan * bili(473),
          	"height":pingKuan * bili(749)
          });
          
          
              jQuery('.yg_yh_1').css({
          	"top":pingKuan * bili(240),
          	"width":pingKuan * bili(147),
          	"height":pingKuan * bili(236)
          });
          
          
                 jQuery('.yg_yh_2').css({
          	"top":pingKuan * bili(526),
          	"left":pingKuan * bili(16),
          	"width":pingKuan * bili(144),
          	"height":pingKuan * bili(138)
          });
          
                           jQuery('.yg_yh_3').css({
          	"top":pingKuan * bili(450),
          	"left":pingKuan * bili(500),
          	"width":pingKuan * bili(56),
          	"height":pingKuan * bili(53)
          });
        
          
                                jQuery('.yg_yh_4').css({
          	"top":pingKuan * bili(526),
          	"left":pingKuan * bili(460),
          	"width":pingKuan * bili(171),
          	"height":pingKuan * bili(166)
          });
        
                                         jQuery('.yg_yh_5').css({
          	"top":pingKuan * bili(424),
          	"left":pingKuan * bili(426),
          	"width":pingKuan * bili(90),
          	"height":pingKuan * bili(87)
          });
          
          
        
          
          
          if($(window).width()==432 &&$(window).height()==599){
          	
	        var ff=false;
	    	jQuery(window).resize(function(){
	    		
		    	  if(ff==false){
		    	  	 jQuery('.content_smcg').animate({
			    			"top":"-60px"
			    		},50,"linear");
			    		ff=true;
		    	  }else if(ff==true){
		    	  	 jQuery('.content_smcg').animate({
			    			"top":"0"
			    		},50,"linear");
			    		ff=false;
		    	  }
	
	    	});
     
          }
          
          
          
          
	    
//        alert($(window).width()+'--'+$(window).height());
          
	    
	    



	    
	    
	    
	    
	    
	    }
			
			
			


		
		function loaded(){
			setTimeout(function(){styleJs();},300);
		}
		function hengshuping(){
			if(window.orientation==180||window.orientation==0){loaded();};
			if(window.orientation==90||window.orientation==-90){loaded();}
		}
		window.addEventListener("onorientationchange" in window ? "orientationchange" : "resize", hengshuping, false);
		window.addEventListener('load', loaded, false);



});


/*弹窗显示*/	
function screenShow(){
   Zepto('.screen').css({
       "z-index":'9999999999'
     }).animate({
          	opacity:'1',
            scale:'1'},
          	500,
          	'ease-in-out',
          	function(){});
}

/*弹窗隐藏*/	
function screenHide(){
   Zepto('.screen').animate({
          	opacity:'0',
            scale:'0'},
          	500,
          	'ease-in-out',
          	function(){
          	Zepto('.screen').css({
          	 "z-index":'0'
          	});
          	});
}


