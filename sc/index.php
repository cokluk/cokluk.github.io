<!DOCTYPE html>
<html lang="en" >
<head>
  <meta charset="UTF-8">
  <title></title>
  <link rel="stylesheet" href="./style.css?<?php echo rand(1,999999); ?>">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css">
</head>
<body>
<!-- partial:index.partial.html -->
<div class="wrapper">
	<div class="logo">
		<img src="spotif.png" style="    width: 50%;  padding: 0;" />
	</div>
	<p class="text-center" id="username"></p>
	<div class="searchForm">
		<input type="search" id="searchBox" placeholder="Şarkı ara..." class="searchBox" /><br><br>
<img src="ax1.png" id="ax" style="width:100%;"  />
		<button type="button" onclick="oynat()" style="display:none;" >play</button>
	</div>
</div>
<div class="loader"  style="display:none;"></div>

<div class="playerContainer"  style="display:xnone;">
	<div class="status text-center"  style="display:none;" ></div>
	<iframe id="MainPlayer" style="display:none;" width="100%" scrolling="no" frameborder="no" ></iframe>
</div>


<div id="container">


	<div class="songlistContainer" id="songlistContainer"></div>
</div>

<div class="simdi_caliyor"    >
<img src="ic_group_collapse_06.png" id="o_2" style="    position: absolute;
    top: 3vh;
    left: 3vh;
    width: 15%;" /> 
<img src="cat_overflow_icon.png" style="    position: absolute;
    top: 3vh;
    right: 2vh;
    width: 10%;" /> 
<div class="imgSrc"></div>
<input class="songTitle" id="xcq" />  
<table style="width:100%">
<tbody><tr>
<th><p id="suankiZaman" style="
    font-size: 8px;
    color: white;
    font-family: 'GothamBook';
">00:00</p>    </th>
<th>
&nbsp;    

</th>
<th><p id="tamZaman"  style="
    font-size: 8px;
    color: white;
    font-family: 'GothamBook';
">00:00
    </p></th>
</tr>
</tbody></table>

<div id="myProgress">
  <div id="myBar"><span></span></div>
</div>



<style>
#myProgress {
  width: 90%;
  background-color: #ddd;
      margin-left: 10px;
	      margin-bottom: 10px;
    margin-top: 10px;
}

#myBar {
  width: 1%;
  height: 2px;
  background-color: #04AA6D;
}

#myBar span {
	
    background: #f3f3f3;
    width: 10px;
    height: 10px;
    float: right;
    position: relative;
    top: -4px;
    border-radius: 30px;

}

</style>
<table style="width:100%">
  <tr>
    <th> <i class="fas fa-step-backward"    style=" font-size: 18px; color: white; position: relative; right: -30px;" ></i></th>
    <th>
	
	<i class="fas fa-pause-circle" id="o_0"   style="    font-size: 34px; color: white;" ></i>
	<i class="fas fa-play-circle" id="o_1"   style=" display:none;   font-size: 34px; color: white;" ></i>
	
	</th>
    <th><i class="fas fa-step-forward"  style=" font-size: 18px; color: white; position: relative; left: -30px;" ></i></th>
  </tr>
  </table>
</div>
<!-- partial -->


  <script src='https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js'></script>
<script src='https://connect.soundcloud.com/sdk-2.0.0.js'></script>
<script src='https://w.soundcloud.com/player/api.js'></script><script  src="./script.js?<?php echo rand(1,999999); ?>"></script>

</body>
</html>
