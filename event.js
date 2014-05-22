$(function() {
    var placeholder, submit, url;
    placeholder 	=	$('#placeholder');
    submit			=	$('#submit');
    url 			=	$('#url');
	

    //Check if URL Exists
    // @Params: URL to check
    // @Return if exists then set cookie and reload page
    // @Return if it DOES NOT exists then delete cookie and reload page
    function urlExists(url, callback){
	  $.ajax({
	    type: 'HEAD',
	    url: url,
	    success: function(){
	    	monster.set('wifiKeyboardURL', url, '1');
	    	location.reload();
	    },
	    error: function() {
	    	monster.remove('wifiKeyboardURL');
	    	location.reload();
	    }
	  });
	}

	function loadWifiKeyboard () {
		if(monster.get('wifiKeyboardURL')){
			//ToDO Check if URL in cookie is still valid 
			
			//else load iframe
			url.val(monster.get('wifiKeyboardURL'));
			submit.attr('value', 'Change');
	    	placeholder.replaceWith('<div style="border: 1px solid red; width: 400px; height: 325px; overflow: hidden;"><iframe scrolling="no" style="width: 800px; height: 600px; margin-top: -250px; margin-left: -20px;" src="'+monster.get('wifiKeyboardURL')+'" width="800" height="600" border="0"></iframe></div>');
		}else{
			placeholder.replaceWith('error');
		}
	}
	
	loadWifiKeyboard();
    
    //When button is pressed, check if url exist
    $('#submit').click(function() {
    	urlExists(url.val());
    	return false;
    });
});

