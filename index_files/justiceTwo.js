
//is login
var isWebLogin = false;
var contract = null;
//valiable Amount
var valiableAmount = 0;
//have InAmount
var haveInAmount = 0;
var beginTime = 0;
var inAmoungt = 0;
var contract_address ="";
var currentNet = 1;
var netDesc = "";
var defalutCode = "";
var netUrl = "https://etherscan.io/";

//most money
function invest(){
	var invitecode = generateCode(true, 6, 6);
	if($(".invitors").prop("disabled")){
		invitecode = $(".inviteCode").html();
	}
	var invitors = $(".invitors").val();
	if(invitors == "" || invitors ==null){
		invitors = defalutCode;
	}
	invitors = invitors.trim();
	var pattern = new RegExp("[`~!@+#$^&*()=|{}':;',\\[\\].<>《》/?~！@#￥……&*（）——|{}【】‘；：”“'。，、？]");
	if(invitors.length!=6 || pattern.test(invitors)){
		var msg1 = "";
		var className1 = $(".language").attr("class");
		if (className1.indexOf("language_en") != -1) {
			msg1 = "Non-standard invitation code";
		} else if (className1.indexOf("language_zh") != -1) {
			msg1 = "不规范的邀请码";
		} else if (className1.indexOf("language_ru") != -1){
			msg1 = "不正な招待コード ";
		}else {
			msg1 = 
