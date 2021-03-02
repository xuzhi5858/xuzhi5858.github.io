	if(window.sessionStorage){   
		var language = sessionStorage.getItem("language");
		var lanItem = sessionStorage.getItem("lanItem");
			if(language!=null && lanItem!=null){
				$(".language").attr("class", language);
				$(".language").next().remove();
				languages(Number(lanItem));
			}else{
				$(".language").attr("class", "language language_en");
				$(".language").next().remove();
				languages(2);
			}
	}else{
		$(".language").attr("class", "language language_en");
		$(".language").next().remove();
		languages(2);
	}   
$(".language").click(function() {
					var className = $(this).attr("class");
					if(this.parentNode.children.length>1){
						$(".language").next().remove();
						return
					}
					var msg = "";
					if (className.indexOf("language_en") != -1) {
						msg = "<div class=\"select_language\"><div class=\"option_zh\" onclick='changeLanguage(this)'></div>" +
								"<div class=\"option_hg\" onclick='changeLanguage(this)'></div>" +
								"<div class=\"option_ru\" onclick='changeLanguage(this)'></div></div>";
					} else if (className.indexOf("language_zh") != -1) {
						msg = "<div class=\"select_language\"><div class=\"option_en\" onclick='changeLanguage(this)'></div>" +
								"<div class=\"option_ru\" onclick='changeLanguage(this)'></div>" +
								"<div class=\"option_hg\" onclick='changeLanguage(this)'></div></div>";
					} else if (className.indexOf("language_ru") != -1){
						msg = "<div class=\"select_language\"><div class=\"option_en\" onclick='changeLanguage(this)'></div>" +
								"<div class=\"option_zh\" onclick='changeLanguage(this)'></div>" +
								"<div class=\"option_hg\" onclick='changeLanguage(this)'></div></div>";
					} else {
						msg = "<div class=\"select_language\"><div class=\"option_en\" onclick='changeLanguage(this)'></div>" +
								"<div class=\"option_zh\" onclick='changeLanguage(this)'></div>" +
								"<div class=\"option_ru\" onclick='changeLanguage(this)'></div></div>"
					}
					$(this).after(msg);
				});

function changeLanguage(o) {
	var className = $(o).attr("class");
	var type = 0; 
	if (className.indexOf("option_zh") != -1) {
		className = "language language_zh";
		type = 1;
	} else if (className.indexOf("option_en") != -1) {
		className = "language language_en";
		type = 2;
	} else if (className.indexOf("option_ru") != -1){
		className = "language language_ru";
		type = 3;
	}else {
		className = "language language_hg";
		type = 4;
	}
	$(".language").attr("class", className);
	$(".language").next().remove();
	languages(type);
	sessionStorage.setItem("language", className);
	sessionStorage.setItem("lanItem", type);
}

/**
 * change langusge
 * @param {Object} type
 */

}
