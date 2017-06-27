$(function(){

	// NOSSA HASHTAG -- natyerafacasamento

	var token = '4191042217.e029fea.be4e2f3be6e445f281d935d80e447100', 
	    userid = 1455591921, 
	    hashtag = 'aniversario',
	    num_photos = 2; 

    photosTag(num_photos);
    // photosUser();

    function photosTag(num_photos){
    	$.ajax({
			url: 'https://api.instagram.com/v1/tags/' + hashtag + '/media/recent',
			dataType: 'jsonp',
			type: 'GET',
			data: {access_token: token, count: num_photos},
			success: function(data){
				console.log(data.data);
				for(x in data.data){
					$('.carousel-inner').append('<div class="item"><div></div><img src="'+data.data[x].images.standard_resolution.url+'"></div>');  
				}
			},
			error: function(data){
			}
		});
    }

    // carregar mais fotos
    $('#banner').on('slide.bs.carousel', function () {

		if( $('.carousel-inner .item:last').hasClass('active') ) {
			photosTag(num_photos+5);
		}

	});

	
	function photosUser(){	 
		$.ajax({
			url: 'https://api.instagram.com/v1/users/' + userid + '/media/recent', 
			dataType: 'jsonp',
			type: 'GET',
			data: {access_token: token, count: num_photos},
			success: function(data){
		 		console.log(data);
				for( x in data.data ){
					$('body').append('<li><img src="'+data.data[x].images.low_resolution.url+'"></li>');
				}
			},
			error: function(data){
			}
		});
	}

})