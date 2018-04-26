(function() {
	window.onload = function(){
		var typedString = $('#title').html();
		console.log(typedString);

		$('#title').html('');
        $("#title").typed({
            strings: [typedString],
            typeSpeed: 30,
            backDelay: 500,
            loop: false,
            contentType: 'html', // or text
            // defaults to false for infinite loop
            loopCount: false,
            callback: function(){
                var originalText = $("#sub_title").text();
                var cursor = 0;
                var loop = function(originalText, delay) {
                    var highlightedText = originalText.split("");
                    for(var idx in originalText) {
                        if(idx == cursor){
                            highlightedText[idx] = "<font color='white'>" + originalText[idx] + "</font>"
                        }
                    }
                    $("#sub_title").html(highlightedText.join(""));
                    if(cursor < originalText.length && originalText[cursor] != "") {
                        setTimeout(function () {
                            loop(originalText, delay);
                            cursor++;
                        }, delay);
                    }
                };
                loop(originalText, 50);
            }
        });
	}
})(window);
