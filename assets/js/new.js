$(function(){
	let userSwiper = new Swiper ('#userSwiper', {
	   loop: true, // 循环模式选项
	   // 如果需要分页器
	   pagination: {
	     el: '.swiper-pagination',
	   },
	 })  
	$(".slide_lists li").on("click",function(){
		let index = $(this).index()
		$(this).addClass("activeLi").siblings().removeClass("activeLi")
		if(index == 1){
			$(".push").html("2iPS存储与 <span>临床应用平台</span> <br />一次制备，终生存储，永续健康")
			$(".push_img").attr("src","../assets/img/header-right-img.png")
			$(".push_p").html("1")
		}else if( index == 2){
			$(".push").html("3iPS存储与 <span>临床应用平台</span> <br />一次制备，终生存储，永续健康")
			$(".push_img").attr("src","../assets/img/header-right-img.png")
			$(".push_p").html("2")
		}else if (index == 0){
			$(".push").html("世界领先的iPS存储与 <span>临床应用平台</span> <br />一次制备，终生存储，永续健康")
			$(".push_img").attr("src","../assets/img/header-right-img.png")
			$(".push_p").html("“Stem-Captain”（干细胞队长）--iPSCs（诱导多能干细胞），再生医学领域最强细胞，干细胞领域最强队长，比美齐天大圣孙悟空，七十二变神通广大，重新定义健康生命，探索生命无限可能性")
		}
	})
	$(".value li").on("click",function(){
		let valueIndex = $(this).index()
		$(this).addClass("activeLi2").siblings().removeClass("activeLi2")
		if(valueIndex == 1){
			$(".jiazhi").html("1")
			$(".jz_title").html("1")
			$(".push_img2").attr("src","../assets/img/about-left-img.png")
			$(".push_p").html("1")
			$(".jz_desc").html("1")
			$(".jz_info1").html("1")
			$(".jz_info2").html("2")
			$(".jz_info3").html("3")
		}else if( valueIndex == 2){
			$(".jiazhi").html("2")
			$(".jz_title").html("2")
			$(".push_img2").attr("src","../assets/img/about-left-img.png")
			$(".push_p").html("2")
			$(".jz_desc").html("2")
			$(".jz_info1").html("1、")
			$(".jz_info2").html("2、")
			$(".jz_info3").html("3、")
		}else if (valueIndex == 0){
			$(".jiazhi").html("Our values")
			$(".jz_title").html("我们的价值观")
			$(".jz_desc").html("公司致力于成为全球领先的iPSCs（诱导多能干细胞）存储与临床应用平台，")
			$(".push_img2").attr("src","../assets/img/about-left-img.png")
			$(".jz_info1").html("1、iPSCs的制备与存储；")
			$(".jz_info2").html("2、iPSCs定向分化神经干细胞的制备与存储及细胞治疗研发管线；")
			$(".jz_info3").html("3、iPSCs抗肿瘤疫苗研发管线。")
		}
	})
})