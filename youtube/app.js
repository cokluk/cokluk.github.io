


$(document).ready(function(){

	(function(){

	 
		const $searchTxt = $("#searchTxt");
		const $results = $("#results");
		const $searchBtn = $("#searchBtn");
		const youtubeURL = "https://www.googleapis.com/youtube/v3/search";
		const $collection = $(".collection"); 
		const ApiDatastore = [ "AIzaSyAq-6L3AEKpVdswOgdAGMAtC93IbVqeV3g", "AIzaSyCkcGCPkvj_2YdFHRF1oHEYFnvZ7y3EcW8" ];
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
<center><img style="width:30%;" id="yt" src="yt.png" /></center>
<iframe width="200" style="border:none;" src="https://www.youtube.com/embed/${x}?autoplay=1" allow='autoplay'></iframe>

<h1>${y}</h1>
<hr>
<p>${h}</p>
<br>
<span>${z} Kanalı tarafından, ${v} Tarihinde yüklenmiştir.</span>


<a onclick="vazgec()">İzlemeyi bırak</a>

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

 

function vazgec() { $(".uguroynat").html(" ");  $(".uguroynat").css("display","none"); $("body").css("overflow","unset");    }


//https://gist.github.com/c0derabbit/9ad0c77f2713de58fa1c4c0e74199d33
function randomChoice(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}