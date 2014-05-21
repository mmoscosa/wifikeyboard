$(function() {
    var placeholder, submit, url, urlCookie;
    placeholder 	=	$('#placeholder');
    submit			=	$('#submit');
    url 			=	$('#url');
    urlCookie 		= 	monster.get('wifiKeyboardURL');
	

	function loadWifiKeyboard (formAction, urlAddress) {
		if(urlCookie !== null){
			if(formAction == 'submit'){
				monster.set('wifiKeyboardURL', urlAddress, 1);
			}else{
				url.val(monster.get('wifiKeyboardURL'));
				submit.attr('value', 'Change');
				placeholder.replaceWith('<div style="border: 1px solid red; width: 400px; height: 325px; overflow: hidden;"><iframe scrolling="no" style="width: 800px; height: 600px; margin-top: -250px; margin-left: -20px;" src="'+monster.get('wifiKeyboardURL')+'" width="800" height="600" border="0"></iframe></div>');
			}
		}else{
			if(formAction == 'submit'){
				monster.set('wifiKeyboardURL', urlAddress, 1);
			}else{
				return false;
			}
		}	
	}
	loadWifiKeyboard(null, null);
    submit.click(function(){
    	loadWifiKeyboard('submit', url.val());
    	return false;
    });
});

