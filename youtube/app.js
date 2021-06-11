


$(document).ready(function(){

	(function(){

	 
		const $searchTxt = $("#searchTxt");
		const $results = $("#results");
		const $searchBtn = $("#searchBtn");
		const youtubeURL = "https://www.googleapis.com/youtube/v3/search";
		const $collection = $(".collection"); 
		const ApiDatastore = [ "AIzaSyAq-6L3AEKpVdswOgdAGMAtC93IbVqeV3g", "AIzaSyCkcGCPkvj_2YdFHRF1oHEYFnvZ7y3EcW8" , "AIzaSyAJe_h5NLZi4w4whlm-Zl2mWP76Z-FA2nA" ];
		const ApiSelect = randomChoice(ApiDatastore);

 
		$searchBtn.on("click", function(){
			
			let query = $searchTxt.val();
			
			
			$("#results").html(" ");

 
			if (query.length > 3){
 
				$results.fadeIn(5000);

				handleSearch(query);
			} else {
				$searchTxt.focus();
			}

		});
 $(document).on('keydown', function() {
    switch(event.keyCode) {
        case 13:  
			let query = $searchTxt.val();
			
			
			$("#results").html(" ");

	 
			if (query.length > 3){
 
				
				$results.fadeIn(5000);

				handleSearch(query);
			} else {
				$searchTxt.focus();
			}
			kapa();
            break;
    }
});

		function handleSearch(query){
			
	 
			$.get(youtubeURL, {'maxResults': '50',
				'part': 'snippet',
				'q': query,
				'type': '',
				key: 'AIzaSyAq-6L3AEKpVdswOgdAGMAtC93IbVqeV3g'
			}, 
			function(data){
	     	 
	     	handleData(data);
     	}) 



		};  

 
		function handleData(data) {

 
			$results.html = "";

 
			data.items.forEach((currentValue, index, array)=>{

 		

				let vidID = currentValue.id.videoId;
				let channelId = currentValue.snippet.channelId;
				let title = currentValue.snippet.title;
				let creator = currentValue.snippet.channelTitle;
				let uploadDateTime = currentValue.snippet.publishedAt;
			 
				let uploadDateOnly = uploadDateTime.slice(0, uploadDateTime.indexOf("T"));
				let desc = currentValue.snippet.description;
				let imageURL = currentValue.snippet.thumbnails.medium.url;

				 
				
				
				generateHTML(vidID, channelId, title, creator, uploadDateOnly, desc, imageURL)

			})  

		};  

		function generateHTML(vidID, channelId, title, creator, uploadDate, desc, imageUrl){

			let videoUrl = "https://www.youtube.com/watch?v=" + vidID;
 
			creator = toSeoUrl(creator);
			desc = toSeoUrl(desc);
 
			let xURL = "'https://www.youtube.com/watch?v=" + vidID+"'";
			let xvidID = `'${vidID}', '${title}', '${creator}' , '${desc}' , '${uploadDate}' `;
			let creatorUrl = "https://www.youtube.com/channel/" + channelId;
			let HTML_TEMPLATE = '<li class="collection-item">' +
						'<a href="javascript:oynat(' +
						xvidID + ');">' +
						'<div class="image-container">' +
						'<img class="image" src="' +
						imageUrl +
						'" alt="">' +
						'</div>' +
						'</a>' +
						'<div class="video-info-container">' +
						'<ul class="video-info">' +
						'<li class="title"><a href="' +
						videoUrl +
						'">' + 
						title +
						'</a></li>' +
		 
						'</ul>' +
						'</div>' +
						'</li>';
 
		if (typeof(vidID) != "undefined" ) { $results.append(HTML_TEMPLATE); }

		}  

		let $testBtn = $("#testBtn").on("click", function(){
			handleData(testData);
		}) 

	})();  

}); 

function oynat(x, y, z, h, v) { 

 
var Element = `
<br>
<center><img style="width:30%;" id="yt" src="ytw.png" /></center>
<a id="i_2" onclick="tamEkran()">Tam ekran</a>
<iframe  id="ytframe" style="width:200px;border:none;margin-top: 10px;" src="https://www.youtube.com/embed/${x}?autoplay=1" allow='autoplay'></iframe>
 
<a id="i_1" onclick="vazgec()">İzlemeyi bırak</a>

`;

$(".uguroynat").append(Element);

$(".uguroynat").css("display","block");

$("body").css("overflow","hidden"); 



}


function toSeoUrl(url) {
    return url.toString()               // Convert to string
        .normalize('NFD')               // Change diacritics
        .replace(/[\u0300-\u036f]/g,' ') // Remove illegal characters
        .replace(/\s+/g,' ')            // Change whitespace to dashes
        .replace(/&/g,' ')          // Replace ampersand
        .replace(/[^a-z0-9\-]/g,' ')     // Remove anything that is not a letter, number or dash
        .replace(/-+/g,' ')             // Remove duplicate dashes
        .replace(/^-*/,' ')              // Remove starting dashes
        .replace(/-*$/,' ');             // Remove trailing dashes
}

 

function vazgec() { $(".uguroynat").html(" ");  $(".uguroynat").css({"display":"none","margin-bottom":""}); $("body").css("overflow","unset");   $.post("//qb-phone/TamEkranKapat", JSON.stringify({ }));     }


//https://gist.github.com/c0derabbit/9ad0c77f2713de58fa1c4c0e74199d33
function randomChoice(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}


	
	function ara(){
		$("#yt").css("display","none");
		$("#arax").css("display","none");
		$("#arax2").css("display","block");
		$("#searchTxt").css("display","block");
		
	}
	
	function kapa(){
	    $("#yt").css("display","block");
		$("#arax").css("display","block");
		$("#arax2").css("display","none");
		$("#searchTxt").css("display","none");
		
	}
	
	
	function tamEkran(){
		
	//	    width: 650px;
    //      position: relative;
    //      top: 10vh;
    //      left: -9vh;
	//      height: 400px;
		

		$(".uguroynat").css({"height":"860px","margin-bottom":"70px"});
		$("#ytframe").css({"left":"-9vh","top":"10vh","transform":"rotate(90deg)","height":"400px","width":"650px", "position":"relative" });
        $.post("//qb-phone/TamEkranGecis", JSON.stringify({ }));  
 
	}
 