(function (w) {

    w.URLSearchParams = w.URLSearchParams || function (searchString) {
        var self = this;
        self.searchString = searchString;
        self.get = function (name) {
            var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(self.searchString);
            if (results == null) {
                return null;
            }
            else {
                return decodeURI(results[1]) || 0;
            }
        };
    }

})(window)
const params = new URLSearchParams(location.search);
var firstinit =true;
var ServNot = ['k2301', 'k2303', 'k2305','k2307','k2309','k2311'];
var ServGood = ['k2302', 'k2304', 'k2306','k2308','k2310','k2312'];
var randoms= Math.floor(Math.random() * 6);
var LiveHub = ['5d4c95b607252fbbb2acfe7b351bd8e6', 'live', ''];

var videoHub9 = [
['f55850365170437128286ee54d1aee554e1b4c3e9c351af8e9d3ca22b03ee166', 's9ep1', 'HaqgqMVu'],
['6e4a1bd51f8c4301a87282784cec0bb65f53b7e35b6ce47eed684e1b70f34034', 's9ep2', 'fCQS4G0t'],
['45f6cb63d0640e7dec3580906070b4b7b35c71ce180ff41892189a05813d07c7', 's9ep3', 'pRZf15bR']
];

var videoHub8 = [
['b73c92106cf47249f3b1cb495802d10ec42b0c589575231a75d1af137a7bc5f3', 's8ep1', 'c2hmeypC'],
['267a0733a10e62b48f65bf2f98a0f632a76bb62348741af0464655ddb656b139', 's8ep2', 'sCyOKKqC'],
['45cda93ee0c7e13baa98700204ec43225c28f10f5046e1d54d1288c7ddcc4369', 's8ep3', 'Wa3qK4Ou'],
['234cdf74cfd4e8e3a5f8b5fc85855d6c3efecace911c0e126b4577a5629ace2d', 's8ep4', 'ItKkJDnR'],
['1eeabfb81bd4f5002310afe956341c1db747eddd2ffdd070c95aab9cb4233523', 's8ep5', 'ItKkBSmR'],
['8caf4d1ac6d2539f961ce865a6edf763e43f64f69a1ff8e9119fc96f3e6e8c10', 's8ep6', 'L28x7jFu'],
['344c301768be501a69cfc5862806fdc40cd79c7ba9de05b0ccd3639b4b1bc7be', 's8ep7', 'sCN6NVsC'],
['3c58891d3f73b99c8cab2c4dadee0335168fb0fd5a6e509805bb6823714de597', 's8ep8', '7RzbzvoR'],
['d7dfef1e9af4072f42d38b92a5fbbc78ca50e0a829d868a0d90ef48ce2af06dc', 's8ep9', 'pRZF6x9t'],
['0ce637bf50a9b393dc511082522a882b43bc3c6eb1e2e9177fb73b471e862965', 's8ep10', 'nCc6vNna'],
['8d66e390de1dd6c938af54783ccffefd142eb19d7f7165f568c64072c323af5b', 's8ep11', 'E2DNc1Au'],
['873a7109052f2e64d1a0c6601553812f49e751c40b004f724afc8ce0c7e28f1b', 's8ep12', 'pRZFdxBt'],
['c49b40a5264c27257ab25a4f2d82b7616308d9be4f698a76196cc79bc60e2f9c', 's8ep13', 'KRjxmOnC'],
['ec2f4d9da1df79e52def6c9a00f8221e1961fb9f5651cdd04c0b483fe9d1ed25', 's8ep14', 'ku5K9xBa']
];

var videoHub7 = [
['8f15ecfa39f2248614336d0c61b4d7570c7a484009581a1a4c326a154f9e9297', 's7ep1', 'E2D4AbaN'],
['9578bf563fbfe3b2085355a8f876dc8c0130253be858b2598d98f32a5afdb6e5', 's7ep2', 'oRG4EdaJ'],
['680b0e65872deb60dad0e4765fe87eb4c6d194da34c28b51212ea7c027eb8d53', 's7ep3', 'DRPAAw2W'],
['2b614908dfff9e57a38985b7487c0e16cdf96f1c8cdeaebde32e47c8a979f5dc', 's7ep4', 'sCyl3Ou1'],
['c06952aabaf2a9366fa3672bf7ff6c39379678c9b830d2dd93e5fb1e241bef41', 's7ep5', 'e2dByPaG'],
['9ea0e2c6cc1eb57c3cdcc053368f4f352ddb64b71ef4b8d408c20741a361018f', 's7ep6', 'duL7yEtm'],
['a907b0c39a29892be70f6f6b6752b8e541d48c0b2cd74c65da90cef0891638be', 's7ep7', 'EuDPT5uN'],
['9c40f1786fba3ac9785b102dcc8eab585dd718b0e64b5172c0edf8d87182de97', 's7ep8', 'd2LdOl2m'],
['3eba7d41c119b8168d59c07015657f4f5afb3495b7f41396c535bf8535d6b42d', 's7ep9', '7tzBUfCJ'],
['d468a90fa1d7194f7c467461f48ebb9afee2c03bc60212e5b801d4bb0de3046d', 's7ep10', 'm2WijM2p'],
['4a77c3d03aeb0b66e42da9924c6dc083471762cd0ea31ab677e57b73e7fd1664', 's7ep11', '9tmFYLu5'],
['e08018275aa7affe2d915018d0a22d5e378cca7b964b4800d8d194c2dee5e86d', 's7ep12', 'Eufcldte'],
['6508f64ae4d2f62f6e7b19ef410bbcdf776e194c494d0e0d989884bcd50a9d80', 's7ep13', '0tFzlrqC'],
['7f2a246e2d0d575fea303bc50ef3002aeea9e1a4b4228a1b02b5c8ee93311d3c', 's7ep14', 'EuDNNx0a']
];

var videoHub6 = [
['d11b04d1a25bad45a649d2e7f99170c7c082f187e4c36e492dd57d2de8d7f9d0', 's6ep1', 'TR9lJO2o'],
['cd15aec5cfc5a8597fbd9e57f7a367c772447f946a6765c1da0d062bc20ae3e8', 's6ep2', '9tmkhVC5'],
['4a1f95c0600af37a4db6861e5285e195faa488dd20be77b38a43be18df56d0e2', 's6ep3', 'Wa3ZpACw'],
['5390538d2d8b13f6708cf33260e4682a77ee30b8faee1d5e7a5a0ff0734279b2', 's6ep4', 'H24ZXTae'],
['d9cf892b61d002389215c78e92346ddafb358c487fe6c82318c6f6ac0a050b71', 's6ep5', 'oRb89ZRD'],
['91af5e171eeeae286e93270cc822e2ef45cb01897d472a15ae89a6e7ab064a36', 's6ep6', 'L28mb4CH'],
['32a84e785391a8c51696daf50566ae84bd6faec95f00db29665f69a2f9c033ad', 's6ep7', 'oCb8xeCD'],
['739fbcf718d8213065d9d7aa1abc8ca22337b8aac8317dd636f502aa93f8ab90', 's6ep8', 'eavjxpaN'],
['337446ce8e5c2456d986929fa5bd517810534c310baabe3683a8bde9b0131425', 's6ep9', 'ka5qgYal'],
['664b1f312e88111ddaaa9443125f682c18b7ef7b421364492aed91642c5cd7ba', 's6ep10', 'oCGFSduJ'],
['98f01f03447f7848d15212044a30004d48b1bf06b781a0a0b9cf24271125027e', 's6ep11', 'muW6Lxtp'],
['f3bc9d86b06855be47bb8c03e1182a285030de46ef0b597d41e9ac6418a9f2d7', 's6ep12', 'XCoVWduW'],
['3b58a8eb06cf14e453d2de81e0be30947c0cd58ba629a5556fb1852e9b6c5701', 's6ep13', 'UuwziWtn'],
['f402568e24783e29d18ba7927e92cc2cc035340a439a28780578ad2029439eae', 's6ep14', '0RFxfwCj'],
['3200561370363ca86da7773a09051f5f235e232c68523c67ae11a5e3b45ce014', 's6ep15', 'i21kvpuj']
];

var videoHub5 = [
['5bbbcd3c89d4b63e62f095bb223e528add9cbf98a429feac5067742b67eacb9d', 's5ep1', 'zoRbi6uD'],
['9ddabf0eecc25fb2e19575a10b6db88bd62fd18117e65bff4e18170368b77e16', 's5ep2', 'knRc4Wur'],
['3d860f7eb14022b100e0cbeda6ebb3392ebb74561a049cfb5637155c35f184ad', 's5ep3', 'OgaxMBts'],
['b175ade264567d042a6f90633dd2954d9aa9143a9e9e14f99fcd2768134ad53e', 's5ep4', 'AltJIh2b'],
['88ce82bf9d89745301f7f8872520612ec8b9dd8e1b5a154a6feb593720f579d8', 's5ep5', 'ULRSjeaw'],
['241a7c5ad8f938052e50f91ddf21dda81f1333d535534f5f58dbb51c80237491', 's5ep6', 'VsCy8O21'],
['9196c41ca022625fc35d4f810b5c7d68988f1ec037bc8c8b85726466f931e98e', 's5ep7', 'vxaMQD2f'],
['eba8daae0e680bcfb27372113e893dbf0216d4fa3416b239458b08cba06a5a6b', 's5ep8', 'dEuDg0RN'],
['947ed2757e7e6c8d2b748f4a0cccb3c625aaa7064cd56cbfbd8c9f72971ecda4', 's5ep9', 'rGtEXqa1'],
['07779ae9ab9a4efba7ea8e9c84c86c742dff7b1ccb3462c4a9ace5529df933fe', 's5ep10', 'hItHpbCq'],
['17ee488ea24ba3f69f43e4c43411e2542cc5c54aecd1c7788dfbe800b9ed98bb', 's5ep11', 'getIydtx'],
['6c203b1bbd5aeec6fef45a67898e09ad9d271cb5c98d6c41d4c5f3d6142421fd', 's5ep12', 'rDtP0wCW'],
['f6d4a8c4df5fd74f574e803956103475278c7bb70a688514973a320a1fdcdc15', 's5ep13', 'EuiznwRU'],
['2034a351d5be9e31a6f4e24d0280cb7989db776aa7321875e9228f1db79ea4fd', 's5ep14', 'GCs4cqa4']
];

var storedText;
var livevideo='https://grandcentral.ovva.tv/lb/live/189931/';
var vodvideo='https://grandcentral.ovva.tv/lb/vod/';
var iframeVid='<iframe width="100%" height="100%" allow="autoplay; fullscreen" allowtransparency="true" allowfullscreen="" scrolling="no" tabindex="0" name="twttrHubFrameSecure" src="https://1plus1.video/tvguide/embed/1?autoplay=1&l=ru" frameborder="0"></iframe>';
  

function InitVideo(sylka,tapevid,iframeidz){
vodvideo='https://grandcentral.ovva.tv/lb/vod/';
livevideo='https://grandcentral.ovva.tv/lb/live/189931/';
if(tapevid==='live'){} else{
params.set('video', tapevid);
window.history.replaceState({}, '', location.pathname + params);
}
var urlParams = new URLSearchParams(location.search);
var chekuparm= urlParams.get('video');
if (!chekuparm) { 
   chekuparm=tapevid;
	console.log(chekuparm);
}
switch (chekuparm) {
  case 's9ep1':
sylka =videoHub9[0][0];
tapevid=videoHub9[0][1];
iframeidz=videoHub9[0][2];
$('#Livetitl').html("Golos 9 Sezon<small>  / 1 Выпуск от 20.01.2019 </small>");
$('#Gtitl').html("Golos 9 Sezon / 1 Выпуск от 20.01.2019");
    break;
case 's9ep2':
sylka =videoHub9[1][0];
tapevid=videoHub9[1][1];
iframeidz=videoHub9[1][2];
$('#Livetitl').html("Golos 9 Sezon<small>  / 2 Выпуск от 27.01.2019 </small>");
$('#Gtitl').html("Golos 9 Sezon /  2 Выпуск от 27.01.2019");
    break;
case 's9ep3':
sylka =videoHub9[2][0];
tapevid=videoHub9[2][1];
iframeidz=videoHub9[2][2];
$('#Livetitl').html("Golos 9 Sezon<small>  / 3 Выпуск от 03.02.2019  </small>");
$('#Gtitl').html("Golos 9 Sezon /  3 Выпуск от 03.03.2019 ");
    break;
case 's8ep1':
sylka =videoHub8[0][0];
tapevid=videoHub8[0][1];
iframeidz=videoHub8[0][2];
$('#Livetitl').html("Golos 8 Sezon<small>  / 1 Выпуск от 28.01.2018 </small>");
$('#Gtitl').html("Golos 8 Sezon / 1 Выпуск от 28.01.2018");
break;
case 's8ep2':
sylka =videoHub8[1][0];
tapevid=videoHub8[1][1];
iframeidz=videoHub8[1][2];
$('#Livetitl').html("Golos 8 Sezon<small>  / 2 Выпуск от 04.02.2018 </small>");
$('#Gtitl').html("Golos 8 Sezon / 2 Выпуск от 04.02.2018");
break;
case 's8ep3':
sylka =videoHub8[2][0];
tapevid=videoHub8[2][1];
iframeidz=videoHub8[2][2];
$('#Livetitl').html("Golos 8 Sezon<small>  / 3 Выпуск от 11.02.2018 </small>");
$('#Gtitl').html("Golos 8 Sezon / 3 Выпуск от 11.02.2018");
break;
case 's8ep4':
sylka =videoHub8[3][0];
tapevid=videoHub8[3][1];
iframeidz=videoHub8[3][2];
$('#Livetitl').html("Golos 8 Sezon<small>  / 4 Выпуск от 18.02.2018 </small>");
$('#Gtitl').html("Golos 8 Sezon / 4 Выпуск от 18.02.2018");
break;		
case 's8ep5':
sylka =videoHub8[4][0];
tapevid=videoHub8[4][1];
iframeidz=videoHub8[4][2];
$('#Livetitl').html("Golos 8 Sezon<small>  / 5 Выпуск от 25.02.2018 </small>");
$('#Gtitl').html("Golos 8 Sezon / 5 Выпуск от 25.02.2018");
break;	
case 's8ep6':
sylka =videoHub8[5][0];
tapevid=videoHub8[5][1];
iframeidz=videoHub8[5][2];
$('#Livetitl').html("Golos 8 Sezon<small>  / 6 Выпуск от 04.03.2018 </small>");
$('#Gtitl').html("Golos 8 Sezon / 6 Выпуск от 04.03.2018");
break;	
case 's8ep7':
sylka =videoHub8[6][0];
tapevid=videoHub8[6][1];
iframeidz=videoHub8[6][2];
$('#Livetitl').html("Golos 8 Sezon<small>  / 7 Выпуск от 11.03.2018 </small>");
$('#Gtitl').html("Golos 8 Sezon / 7 Выпуск от 11.03.2018");
break;	
case 's8ep8':
sylka =videoHub8[7][0];
tapevid=videoHub8[7][1];
iframeidz=videoHub8[7][2];
$('#Livetitl').html("Golos 8 Sezon<small>  / 8 Выпуск от 18.03.2018 </small>");
$('#Gtitl').html("Golos 8 Sezon / 8 Выпуск от 18.03.2018");
break;			
case 's8ep9':
sylka =videoHub8[8][0];
tapevid=videoHub8[8][1];
iframeidz=videoHub8[8][2];
$('#Livetitl').html("Golos 8 Sezon<small>  / 9 Выпуск от 25.03.2018 </small>");
$('#Gtitl').html("Golos 8 Sezon / 9 Выпуск от 25.03.2018");
break;	
case 's8ep10':
sylka =videoHub8[9][0];
tapevid=videoHub8[9][1];
iframeidz=videoHub8[9][2];
$('#Livetitl').html("Golos 8 Sezon<small>  / 10 Выпуск от 01.04.2018 </small>");
$('#Gtitl').html("Golos 8 Sezon / 10 Выпуск от 01.04.2018");
break;			
case 's8ep11':
sylka =videoHub8[10][0];
tapevid=videoHub8[10][1];
iframeidz=videoHub8[10][2];
$('#Livetitl').html("Golos 8 Sezon<small>  / 11 Выпуск от 08.04.2018 </small>");
$('#Gtitl').html("Golos 8 Sezon / 11 Выпуск от 08.04.2018");
break;			
case 's8ep12':
sylka =videoHub8[11][0];
tapevid=videoHub8[11][1];
iframeidz=videoHub8[11][2];
$('#Livetitl').html("Golos 8 Sezon<small>  / 12 Выпуск от 15.04.2018 </small>");
$('#Gtitl').html("Golos 8 Sezon / 12 Выпуск от 15.04.2018");
break;	
case 's8ep13':
sylka =videoHub8[12][0];
tapevid=videoHub8[12][1];
iframeidz=videoHub8[12][2];
$('#Livetitl').html("Golos 8 Sezon<small>  / 13 Выпуск от 22.04.2018 </small>");
$('#Gtitl').html("Golos 8 Sezon / 13 Выпуск от 22.04.2018");
break;		
case 's8ep14':
sylka =videoHub8[13][0];
tapevid=videoHub8[13][1];
iframeidz=videoHub8[13][2];
$('#Livetitl').html("Golos 8 Sezon<small>  / 14 Выпуск от 29.04.2018 </small>");
$('#Gtitl').html("Golos 8 Sezon / 14 Выпуск от 29.04.2018");
break;		
case 's7ep1':
sylka =videoHub7[0][0];
tapevid=videoHub7[0][1];
iframeidz=videoHub7[0][2];
$('#Livetitl').html("Golos 7 Sezon<small>  / 1 Выпуск от 22.01.2017 </small>");
$('#Gtitl').html("Golos 7 Sezon / 1 Выпуск от 22.01.2017");
break;
case 's7ep2':
sylka =videoHub7[1][0];
tapevid=videoHub7[1][1];
iframeidz=videoHub7[1][2];
$('#Livetitl').html("Golos 7 Sezon<small>  / 2 Выпуск от 29.01.2017 </small>");
$('#Gtitl').html("Golos 7 Sezon / 2 Выпуск от 29.01.2017");
break;
case 's7ep3':
sylka =videoHub7[2][0];
tapevid=videoHub7[2][1];
iframeidz=videoHub7[2][2];
$('#Livetitl').html("Golos 7 Sezon<small>  / 3 Выпуск от 05.02.2017 </small>");
$('#Gtitl').html("Golos 7 Sezon / 3 Выпуск от 05.02.2017");
break;
case 's7ep4':
sylka =videoHub7[3][0];
tapevid=videoHub7[3][1];
iframeidz=videoHub7[3][2];
$('#Livetitl').html("Golos 7 Sezon<small>  / 4 Выпуск от 12.02.2017 </small>");
$('#Gtitl').html("Golos 7 Sezon / 4 Выпуск от 12.02.2017");
break;		
case 's7ep5':
sylka =videoHub7[4][0];
tapevid=videoHub7[4][1];
iframeidz=videoHub7[4][2];
$('#Livetitl').html("Golos 7 Sezon<small>  / 5 Выпуск от 19.02.2017 </small>");
$('#Gtitl').html("Golos 7 Sezon / 5 Выпуск от 19.02.2017");
break;	
case 's7ep6':
sylka =videoHub7[5][0];
tapevid=videoHub7[5][1];
iframeidz=videoHub7[5][2];
$('#Livetitl').html("Golos 7 Sezon<small>  / 6 Выпуск от 26.02.2017 </small>");
$('#Gtitl').html("Golos 7 Sezon / 6 Выпуск от 26.02.2017");
break;	
case 's7ep7':
sylka =videoHub7[6][0];
tapevid=videoHub7[6][1];
iframeidz=videoHub7[6][2];
$('#Livetitl').html("Golos 7 Sezon<small>  / 7 Выпуск от 05.03.2017 </small>");
$('#Gtitl').html("Golos 7 Sezon / 7 Выпуск от 05.03.2017");
break;	
case 's7ep8':
sylka =videoHub7[7][0];
tapevid=videoHub7[7][1];
iframeidz=videoHub7[7][2];
$('#Livetitl').html("Golos 7 Sezon<small>  / 8 Выпуск от 12.03.2017 </small>");
$('#Gtitl').html("Golos 7 Sezon / 8 Выпуск от 12.03.2017");
break;			
case 's7ep9':
sylka =videoHub7[8][0];
tapevid=videoHub7[8][1];
iframeidz=videoHub7[8][2];
$('#Livetitl').html("Golos 7 Sezon<small>  / 9 Выпуск от 19.03.2017 </small>");
$('#Gtitl').html("Golos 7 Sezon / 9 Выпуск от 19.03.2017");
break;	
case 's7ep10':
sylka =videoHub7[9][0];
tapevid=videoHub7[9][1];
iframeidz=videoHub7[9][2];
$('#Livetitl').html("Golos 7 Sezon<small>  / 10 Выпуск от 26.03.2017 </small>");
$('#Gtitl').html("Golos 7 Sezon / 10 Выпуск от 26.03.2017");
break;			
case 's7ep11':
sylka =videoHub7[10][0];
tapevid=videoHub7[10][1];
iframeidz=videoHub7[10][2];
$('#Livetitl').html("Golos 7 Sezon<small>  / 11 Выпуск от 02.04.2017 </small>");
$('#Gtitl').html("Golos 7 Sezon / 11 Выпуск от 02.04.2017");
break;			
case 's7ep12':
sylka =videoHub7[11][0];
tapevid=videoHub7[11][1];
iframeidz=videoHub7[11][2];
$('#Livetitl').html("Golos 7 Sezon<small>  / 12 Выпуск от 09.04.2017 </small>");
$('#Gtitl').html("Golos 7 Sezon / 12 Выпуск от 09.04.2017");
break;	
case 's7ep13':
sylka =videoHub7[12][0];
tapevid=videoHub7[12][1];
iframeidz=videoHub7[12][2];
$('#Livetitl').html("Golos 7 Sezon<small>  / 13 Выпуск от 16.04.2017 </small>");
$('#Gtitl').html("Golos 7 Sezon / 13 Выпуск от 16.04.2017");
break;		
case 's7ep14':
sylka =videoHub7[13][0];
tapevid=videoHub7[13][1];
iframeidz=videoHub7[13][2];
$('#Livetitl').html("Golos 7 Sezon<small>  / 14 Выпуск от 23.04.2017 </small>");
$('#Gtitl').html("Golos 7 Sezon / 14 Выпуск от 23.04.2017");
break;	
case 's6ep1':
sylka =videoHub6[0][0];
tapevid=videoHub6[0][1];
iframeidz=videoHub6[0][2];
$('#Livetitl').html("Golos 6 Sezon<small>  / 1 Выпуск от 28.02.2016  </small>");
$('#Gtitl').html("Golos 6 Sezon / 1 Выпуск от 28.02.2016 ");
break;
case 's6ep2':
sylka =videoHub6[1][0];
tapevid=videoHub6[1][1];
iframeidz=videoHub6[1][2];
$('#Livetitl').html("Golos 6 Sezon<small>  / 2 Выпуск от 06.03.2016  </small>");
$('#Gtitl').html("Golos 6 Sezon / 2 Выпуск от 06.03.2016 ");
break;
case 's6ep3':
sylka =videoHub6[2][0];
tapevid=videoHub6[2][1];
iframeidz=videoHub6[2][2];
$('#Livetitl').html("Golos 6 Sezon<small>  / 3 Выпуск от 13.03.2016 </small>");
$('#Gtitl').html("Golos 6 Sezon / 3 Выпуск от 13.03.2016");
break;
case 's6ep4':
sylka =videoHub6[3][0];
tapevid=videoHub6[3][1];
iframeidz=videoHub6[3][2];
$('#Livetitl').html("Golos 6 Sezon<small>  / 4 Выпуск от 20.03.2016 </small>");
$('#Gtitl').html("Golos 6 Sezon / 4 Выпуск от 20.03.2016");
break;		
case 's6ep5':
sylka =videoHub6[4][0];
tapevid=videoHub6[4][1];
iframeidz=videoHub6[4][2];
$('#Livetitl').html("Golos 6 Sezon<small>  / 5 Выпуск от 27.03.2016 </small>");
$('#Gtitl').html("Golos 6 Sezon / 5 Выпуск от 27.03.2016");
break;	
case 's6ep6':
sylka =videoHub6[5][0];
tapevid=videoHub6[5][1];
iframeidz=videoHub6[5][2];
$('#Livetitl').html("Golos 6 Sezon<small>  / 6 Выпуск от 03.04.2016 </small>");
$('#Gtitl').html("Golos 6 Sezon / 6 Выпуск от 03.04.2016");
break;	
case 's6ep7':
sylka =videoHub6[6][0];
tapevid=videoHub6[6][1];
iframeidz=videoHub6[6][2];
$('#Livetitl').html("Golos 6 Sezon<small>  / 7 Выпуск от 10.04.2016 </small>");
$('#Gtitl').html("Golos 6 Sezon / 7 Выпуск от 10.04.2016");
break;	
case 's6ep8':
sylka =videoHub6[7][0];
tapevid=videoHub6[7][1];
iframeidz=videoHub6[7][2];
$('#Livetitl').html("Golos 6 Sezon<small>  / 8 Выпуск от 17.04.2016 </small>");
$('#Gtitl').html("Golos 6 Sezon / 8 Выпуск от 17.04.2016");
break;			
case 's6ep9':
sylka =videoHub6[8][0];
tapevid=videoHub6[8][1];
iframeidz=videoHub6[8][2];
$('#Livetitl').html("Golos 6 Sezon<small>  / 9 Выпуск от 24.04.2016 </small>");
$('#Gtitl').html("Golos 6 Sezon / 9 Выпуск от 24.04.2016");
break;	
case 's6ep10':
sylka =videoHub6[9][0];
tapevid=videoHub6[9][1];
iframeidz=videoHub6[9][2];
$('#Livetitl').html("Golos 6 Sezon<small>  / 10 Выпуск от 01.05.2016 </small>");
$('#Gtitl').html("Golos 6 Sezon / 10 Выпуск от 01.05.2016");
break;			
case 's6ep11':
sylka =videoHub6[10][0];
tapevid=videoHub6[10][1];
iframeidz=videoHub6[10][2];
$('#Livetitl').html("Golos 6 Sezon<small>  / 11 Выпуск от 08.05.2016 </small>");
$('#Gtitl').html("Golos 6 Sezon / 11 Выпуск от 08.05.2016");
break;			
case 's6ep12':
sylka =videoHub6[11][0];
tapevid=videoHub6[11][1];
iframeidz=videoHub6[11][2];
$('#Livetitl').html("Golos 6 Sezon<small>  / 12 Выпуск от 15.05.2016 </small>");
$('#Gtitl').html("Golos 6 Sezon / 12 Выпуск от 15.05.2016");
break;	
case 's6ep13':
sylka =videoHub6[12][0];
tapevid=videoHub6[12][1];
iframeidz=videoHub6[12][2];
$('#Livetitl').html("Golos 6 Sezon<small>  / 13 Выпуск от 22.05.2016 </small>");
$('#Gtitl').html("Golos 6 Sezon / 13 Выпуск от 22.05.2016");
break;		
case 's6ep14':
sylka =videoHub6[13][0];
tapevid=videoHub6[13][1];
iframeidz=videoHub6[13][2];
$('#Livetitl').html("Golos 6 Sezon<small>  / 14 Выпуск от 29.05.2016 </small>");
$('#Gtitl').html("Golos 6 Sezon / 14 Выпуск от 29.05.2016");
break;	
case 's6ep15':
sylka =videoHub6[14][0];
tapevid=videoHub6[14][1];
iframeidz=videoHub6[14][2];
$('#Livetitl').html("Golos 6 Sezon<small>  / 15 Выпуск  Совершенно секретно</small>");
$('#Gtitl').html("Golos 6 Sezon / 14 Выпуск Совершенно секретно");
break;
case 's5ep1':
sylka =videoHub5[0][0];
tapevid=videoHub5[0][1];
iframeidz=videoHub5[0][2];
$('#Livetitl').html("Golos 5 Sezon<small>  / 1 Выпуск от 08.03.2015 </small>");
$('#Gtitl').html("Golos 5 Sezon / 1 Выпуск от 08.03.2015");
break;
case 's5ep2':
sylka =videoHub5[1][0];
tapevid=videoHub5[1][1];
iframeidz=videoHub5[1][2];
$('#Livetitl').html("Golos 5 Sezon<small>  / 2 Выпуск от 15.03.2015 </small>");
$('#Gtitl').html("Golos 5 Sezon / 2 Выпуск от 15.03.2015");
break;
case 's5ep3':
sylka =videoHub5[2][0];
tapevid=videoHub5[2][1];
iframeidz=videoHub5[2][2];
$('#Livetitl').html("Golos 5 Sezon<small>  / 3 Выпуск от  22.03.2015 </small>");
$('#Gtitl').html("Golos 5 Sezon / 3 Выпуск от  22.03.2015");
break;
case 's5ep4':
sylka =videoHub5[3][0];
tapevid=videoHub5[3][1];
iframeidz=videoHub5[3][2];
$('#Livetitl').html("Golos 5 Sezon<small>  / 4 Выпуск от  29.03.2015 </small>");
$('#Gtitl').html("Golos 5 Sezon / 4 Выпуск от  29.03.2015");
break;		
case 's5ep5':
sylka =videoHub5[4][0];
tapevid=videoHub5[4][1];
iframeidz=videoHub5[4][2];
$('#Livetitl').html("Golos 5 Sezon<small>  / 5 Выпуск от 05.04.2015 </small>");
$('#Gtitl').html("Golos 5 Sezon / 5 Выпуск от 05.04.2015");
break;	
case 's5ep6':
sylka =videoHub5[5][0];
tapevid=videoHub5[5][1];
iframeidz=videoHub5[5][2];
$('#Livetitl').html("Golos 5 Sezon<small>  / 6 Выпуск от 12.04.2015 </small>");
$('#Gtitl').html("Golos 5 Sezon / 6 Выпуск от 12.04.2015");
break;	
case 's5ep7':
sylka =videoHub5[6][0];
tapevid=videoHub5[6][1];
iframeidz=videoHub5[6][2];
$('#Livetitl').html("Golos 5 Sezon<small>  / 7 Выпуск от 19.04.2015 </small>");
$('#Gtitl').html("Golos 5 Sezon / 7 Выпуск от 19.04.2015");
break;	
case 's5ep8':
sylka =videoHub5[7][0];
tapevid=videoHub5[7][1];
iframeidz=videoHub5[7][2];
$('#Livetitl').html("Golos 5 Sezon<small>  / 8 Выпуск от 26.04.2015 </small>");
$('#Gtitl').html("Golos 5 Sezon / 8 Выпуск от 26.04.2015");
break;			
case 's5ep9':
sylka =videoHub5[8][0];
tapevid=videoHub5[8][1];
iframeidz=videoHub5[8][2];
$('#Livetitl').html("Golos 5 Sezon<small>  / 9 Выпуск от 03.05.2015 </small>");
$('#Gtitl').html("Golos 5 Sezon / 9 Выпуск от 03.05.2015");
break;	
case 's5ep10':
sylka =videoHub5[9][0];
tapevid=videoHub5[9][1];
iframeidz=videoHub5[9][2];
$('#Livetitl').html("Golos 5 Sezon<small>  / 10 Выпуск от 26.03.2017 </small>");
$('#Gtitl').html("Golos 5 Sezon / 10 Выпуск от 26.03.2017");
break;			
case 's5ep11':
sylka =videoHub5[10][0];
tapevid=videoHub5[10][1];
iframeidz=videoHub5[10][2];
$('#Livetitl').html("Golos 5 Sezon<small>  / 11 Выпуск от 10.05.2015 </small>");
$('#Gtitl').html("Golos 5 Sezon / 11 Выпуск от 10.05.2015");
break;			
case 's5ep12':
sylka =videoHub5[11][0];
tapevid=videoHub5[11][1];
iframeidz=videoHub5[11][2];
$('#Livetitl').html("Golos 5 Sezon<small>  / 12 Выпуск от 17.05.2015 </small>");
$('#Gtitl').html("Golos 5 Sezon / 12 Выпуск от 17.05.2015");
break;	
case 's5ep13':
sylka =videoHub5[12][0];
tapevid=videoHub5[12][1];
iframeidz=videoHub5[12][2];
$('#Livetitl').html("Golos 5 Sezon<small>  / 13 Выпуск от 24.05.2015 </small>");
$('#Gtitl').html("Golos 5 Sezon / 13 Выпуск от 24.05.2015");
break;		
case 's5ep14':
sylka =videoHub5[13][0];
tapevid=videoHub5[13][1];
iframeidz=videoHub5[13][2];
$('#Livetitl').html("Golos 5 Sezon<small>  / 14 Выпуск от 07.06.2015 </small>");
$('#Gtitl').html("Golos 5 Sezon / 14 Выпуск от 07.06.2015");
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
$('<iframe width="100%" height="100%" allow="autoplay; fullscreen" allowtransparency="true" allowfullscreen="" scrolling="no" tabindex="0" name="twttrHubFrameSecure" src="https://1plus1.video/tvguide/embed/1?autoplay=1&amp;l=ru" frameborder="0"></iframe>').appendTo('.theoplayer-container');
        console.log('Looks like there was a problem. Status Code: ' +  
          response.status);  
        return;  
      }
    response.text().then(function(text) {
	    if(!text.indexOf("302=https:")){
		    storedText = text.replace( "302=https:", "" );
		    for(var i=0; i<ServNot.length;i++){
			    if(storedText.indexOf(ServNot[i]) + 1) {
				    storedText=storedText.replace( ServNot[i],ServGood[randoms]);
				      }}
	    } else {
		    storedText = text.replace( "302=http:", "" ); 
		    for(var i=0; i<ServNot.length;i++){
			    if(storedText.indexOf(ServNot[i]) + 1) {
				    storedText=storedText.replace( ServNot[i],ServGood[randoms]);
				      }}
	    }
   
     //alert(storedText);
	  //  $.get(storedText.replace("playlist", "chunklist_b1596000"), function(data){
 //if(data.indexOf('RESOLUTION') + 1) {
	 //storedText = storedText.replace("playlist", "chunklist_b6128000");
	// console.log(storedText);
 //}
//});
	//   if(tapevid==='live'){} else {storedText = storedText.replace("playlist", "chunklist_b10256000");}

    // console.log(storedText);
	    
	    var element = document.querySelector('.theoplayer-container');
var player = new THEOplayer.Player(element, {
libraryLocation: 'https://cdn.myth.theoplayer.com/840f8cb7-17af-46b3-93ff-71645dec836f/'
});
player.autoplay = true;
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
var templegh;
var habtempzn;
var chekuri = params.get('video');
if (chekuri&&firstinit) { GolosSezon=chekuri[1];}	
switch (GolosSezon) {
  case '9':
   templegh=videoHub9.length;
   habtempzn='videoHub9';
    break;
  case '8':
   templegh=videoHub8.length;
   habtempzn='videoHub8';
     break;
  case '7':
   templegh=videoHub7.length;
   habtempzn='videoHub7';
     break;
  case '6':
   templegh=videoHub6.length;
   habtempzn='videoHub6';
     break;
   case '5':
   templegh=videoHub5.length;
   habtempzn='videoHub5';
     break;
}
var myHTML1 = '';

  for (var i = 0; i < templegh; i++) {
    myHTML1 += '<button type="button" class="btn btn-primary btn-lg btn-block mt-1 mb-1 " onclick="InitVideo('+habtempzn+'['+i+'][0],'+habtempzn+'['+i+'][1],'+habtempzn+'['+i+'][2])">'+GolosSezon+' сезон '+ (i + 1) +' выпуск</button></br>';
  }


$('#versionsylka').html(myHTML1);
zozo();
	firstinit=false;
}
//fn active class
function zozo(){ $("button").click(function(){
  $("button").removeClass("active");
  $(this).addClass("active");
  $("html").animate({ scrollTop: 0 }, "slow");
});}
