var LiveHub = ['a9cd8b7a64c14d6b4f64366ce0a83d0d', 'live', ''];

var videoHub9 = [
['1b6ec3491892ec1b0da34f4f3eb0fba8515fe62f4618035da7f872aad14b6356', 'vid1ep', 'qC094N5a'],
['70daf35621b9f712aaee893e920c26d69ff6c475f66d8d80f44ac67278fa3cc8', 'vid', 'c2hmeypC']
];

var videoHub8 = [
['70daf35621b9f712aaee893e920c26d69ff6c475f66d8d80f44ac67278fa3cc8', 'vid1ep', 'c2hmeypC'],
['267a0733a10e62b48f65bf2f98a0f632a76bb62348741af0464655ddb656b139', 'vid2ep', 'sCyOKKqC'],
['45cda93ee0c7e13baa98700204ec43225c28f10f5046e1d54d1288c7ddcc4369', 'vid3ep', 'Wa3qK4Ou'],
['234cdf74cfd4e8e3a5f8b5fc85855d6c3efecace911c0e126b4577a5629ace2d', 'vid4ep', 'ItKkJDnR'],
['1eeabfb81bd4f5002310afe956341c1db747eddd2ffdd070c95aab9cb4233523', 'vid5ep', 'ItKkBSmR'],
['8caf4d1ac6d2539f961ce865a6edf763e43f64f69a1ff8e9119fc96f3e6e8c10', 'vid6ep', 'L28x7jFu'],
['344c301768be501a69cfc5862806fdc40cd79c7ba9de05b0ccd3639b4b1bc7be', 'vid7ep', 'sCN6NVsC'],
['3c58891d3f73b99c8cab2c4dadee0335168fb0fd5a6e509805bb6823714de597', 'vid8ep', '7RzbzvoR'],
['d7dfef1e9af4072f42d38b92a5fbbc78ca50e0a829d868a0d90ef48ce2af06dc', 'vid9ep', 'pRZF6x9t'],
['0ce637bf50a9b393dc511082522a882b43bc3c6eb1e2e9177fb73b471e862965', 'vid10ep', 'nCc6vNna'],
['8d66e390de1dd6c938af54783ccffefd142eb19d7f7165f568c64072c323af5b', 'vid11ep', 'E2DNc1Au'],
['873a7109052f2e64d1a0c6601553812f49e751c40b004f724afc8ce0c7e28f1b', 'vid12ep', 'pRZFdxBt'],
['c49b40a5264c27257ab25a4f2d82b7616308d9be4f698a76196cc79bc60e2f9c', 'vid13ep', 'KRjxmOnC'],
['ec2f4d9da1df79e52def6c9a00f8221e1961fb9f5651cdd04c0b483fe9d1ed25', 'vid14ep', 'ku5K9xBa']
];


var storedText;
var livevideo='https://grandcentral.ovva.tv/lb/live/189931/';
var vodvideo='https://grandcentral.ovva.tv/lb/vod/';
var iframeVid='<iframe width="100%" height="100%" allow="autoplay; fullscreen" allowtransparency="true" allowfullscreen="" scrolling="no" tabindex="0" name="twttrHubFrameSecure" src="https://1plus1.video/tvguide/embed/1?autoplay=1&l=ru" frameborder="0"></iframe>';
  

function InitVideo(sylka,tapevid,iframeidz){

var urlParams = new URLSearchParams(location.search);

switch (urlParams.get('video')) {
  case 's9ep1':
    console.log('1ep');
sylka ='70daf35621b9f712aaee893e920c26d69ff6c475f66d8d80f44ac67278fa3cc8';
tapevid='s9ep1';
iframeidz='';
    break;

  case 's1ep11':
    console.log('11ep');
    break;

}


 $('.theoplayer-container').html("");
if(tapevid==='live'){

livevideo += sylka;

} else { 

InitFrameVideo(iframeidz);
vodvideo += sylka;
livevideo=vodvideo;

}


//chekCountry
$.get("https://freegeoip.app/json/", function (response) {
	if(response.country_code!='UA' || urlParams.get('video')=='LiveUA'){
	    
//Start pars  

fetch(livevideo)
  .then(function(response) {
 if (response.status !== 200) {  
$(iframeVid).appendTo('.theoplayer-container');
        console.log('Looks like there was a problem. Status Code: ' +  
          response.status);  
        return;  
      }
    response.text().then(function(text) {
	    if(!text.indexOf("302=https:")){
storedText = text.replace( "302=https:", "" );} else {
      storedText = text.replace( "302=http:", "" ); }
   
     //alert(storedText);
    // console.log(storedText);
	    
	    var element = document.querySelector('.theoplayer-container');
var player = new THEOplayer.Player(element, {
libraryLocation: 'https://cdn.myth.theoplayer.com/840f8cb7-17af-46b3-93ff-71645dec836f/'
});
player.source = {
sources: [{
src: storedText ,
type: 'application/x-mpegurl'
}]
};
 //console.log(storedText);
	    
    });
  });
	
//eEndPars

  } else{ $(iframeVid).appendTo('.theoplayer-container');}
}, "jsonp");
	//endChek contry



}

//func initiated embed video
function InitFrameVideo(embed){
var tempvid ='<iframe width="100%" height="100%" src="';
var framez = 'https://1plus1.video/video/embed/';
framez += embed;
framez +='?autoplay=1&l=ru';
tempvid+= framez +'" frameborder="0" allowfullscreen></iframe>';
iframeVid=tempvid;
}

//func generate sezon video
function GenerateElCicle(GolosSezon){

var myHTML1 = '';

  for (var i = 0; i < 1; i++) {
    myHTML1 += '<button type="button" class="btn btn-primary btn-lg btn-block mb-4 disabled" onclick="InitVideo(videoHub9['+i+']['+i+'],videoHub9['+i+']['+ (i + 1) +'],videoHub9['+i+']['+ (i + 2) +'])">9 сезон '+ (i + 1) +' выпуск(скоро)</button></br>';
  }


$('#versionsylka').html(myHTML1);

}