$(function() {
	//왼쪽메뉴	
		// $("ul > li:first-child a").next().show();
		$(".dr_cts_ttl").click(function(){
			$(this).next().slideToggle(300);
		if( $(this).find('img').attr('src') == 'images/arr_open.png') {
			 $(this).find('img').attr('src','images/arr_close.png');
		} else {
			 $(this).find('img').attr('src','images/arr_open.png');
		}	
			// $(this).next().slideDown(300);
			$(".dr_cts_ttl").not(this).next().slideUp(300);
		 $(".dr_cts_ttl").not(this).find('img').attr('src','images/arr_open.png');

			return false;
		});
	
			//교원 정보
			$(".tch_rqst_ttl").click(function(){
				$(this).next().slideToggle(300);
			if( $(this).find('img').attr('src') == 'images/mem_arr_open.png') {
				 $(this).find('img').attr('src','images/mem_arr_close.png');
			} else {
				 $(this).find('img').attr('src','images/mem_arr_open.png');
			}	
				// $(this).next().slideDown(300);
				$(".tch_rqst_ttl").not(this).next().slideUp(300);
			 $(".tch_rqst_ttl").not(this).find('img').attr('src','images/mem_arr_close.png');

				return false;
			});
});