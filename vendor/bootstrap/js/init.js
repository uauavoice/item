var firstinit =true;
var ServNot = ['k2301', 'k2303', 'k2305','k2307','k2309','k2311'];
var ServGood = ['k2302', 'k2304', 'k2306','k2308','k2310','k2312'];
var randoms= Math.floor(Math.random() * 6);
var LiveHub = ['581aaa47ee7e639eb77c2fa0ab0aa316', 'live', ''];

var kidsvideoHub5  = [
['982c13ebc9070d23dbbb530dc9bfce3259237bd5d35d17039732843d5b2d2001', 'kids5ep1', 'TR9z80Qa'],
['51b7c0eaa1ae2450a298c41d97cd6cdef71423012bc3a1d3380512f996e1360a', 'kids5ep2', '9Cm0UmEu'],
['e22e3b52c633538128bb38119b00ae8867bc6023a5a87f386cb6063eace62952', 'kids5ep3', 'VC6PLVYt'],
['e22e3b52c633538128bb38119b00ae8867bc6023a5a87f386cb6063eace62952', 'kids5ep4', 'eavmKFGC'],
['ehfhfjcghh', 'kids5ep5', 'DtPzLHQt']
];


var kidsvideoHub1  = [
['yt', 'kids1ep1', 'PLcpkKchW7Xe5ld9vx5vKNvZmQ3KPs8gPw'],
['yt', 'kids1ep2', 'PLcpkKchW7Xe6wBHSDpii4y1n3F88ImU74'],
['yt', 'kids1ep3', 'PLcpkKchW7Xe5DKg3FFluPyVn49HCRJN5c'],
['yt', 'kids1ep4', 'PLcpkKchW7Xe4qOz9-x-z_3cByhkJ-1slB'],
['yt', 'kids1ep5', 'PLcpkKchW7Xe4UpA-QoAadxo0JpY02ZmOI'],
['yt', 'kids1ep6', 'PLcpkKchW7Xe7tj74sCJV28uOKaRggfWy3'],
['yt', 'kids1ep7', 'PLcpkKchW7Xe5ZggzJohx1T2u2IRIrgfl0'],
['yt', 'kids1ep8', 'PLcpkKchW7Xe7TeDcEGVA5O8a5E3a0wuOt'],
['yt', 'kids1ep9', 'PLcpkKchW7Xe5K0Ew1GzSPIplp3i_Kqz1n'],
['yt', 'kids1ep10', 'PLcpkKchW7Xe4i1Gg1Z-9owDFYzbs_X7Fd']
];

var kidsvideoHub2  = [
['cb9503eec4880c087d3b459b1f0cf773ac3e5f5045b3467978e2a2eb4ac08947', 'kids2ep1', 'oCbwbUaD'],
['b1c3e55fd66c6e34e9bbb3cb5ce98b4b1173bf22433c0b902cb51fa8ee5deb77', 'kids2ep2', 'styOwlt1'],
['aa0dcbf5969ac9167a58241673179e35952e5d7a3319927247a44ae967b7bdeb', 'kids2ep3', 'KaYPZOC8'],
['ccbfe568120c74614b9eee989f0c29f2adea4802f6bef9be2d1178478753bd9f', 'kids2ep4', '4ROroVa8'],
['0db6e1f5d12a8dbd7e4a019b675edc893f70cdad1d12550d814d9555117c7055', 'kids2ep5', 'M2VrKGuw'],
['bcbcb455f5da4f45ac765988ae25778059ed9df3eec20687605e0c7b80283360', 'kids2ep6', 'GREG4EC1']
];

var kidsvideoHub3  = [
['4370b2022761b6c86fd2741fbf226fd80de68a9fbe004cbee398e384aa7619ad', 'kids3ep1', 'ftQT50uA'],
['d744ec0e96808be3d015a9d5cdca6f3caa5919624db7d5f21e552292044c08f3', 'kids3ep2', 'ku58fptl'],
['52a3bd8a3c080d31bf5dabb37410507201264637588e2fc6d93a9a9737148782', 'kids3ep3', '12Xy9OR9'],
['2510e7d72f169cf3f84076795f9ef2a85be970de112c3bc13d63475f6850311c', 'kids3ep4', 'styJcwa1'],
['1b5ba3f54c0e3320b61ed5bcf629a3294583ccdebabfde775b9fb8c55f29aac1', 'kids3ep5', 'dCrVHyty'],
['ef105b3cbf333ca4345c9cf3aaad3a268765b41c89c86c46bc01ab19f120b054', 'kids3ep6', 'eRIKecCx'],
['883a6d5c7848eaf43599f45c9e6171b0e8238d49db0e4089c50e944e61c53609', 'kids3ep7', 'lCJLvEtb'],
['32155763d01ae49ef41ce4b3e7d8a7fb1c0eaf546c8c2be0696c9445a4b0f61d', 'kids3ep8', 'd2LZpGam'],
['f587950b40ca27cb800d442a042c5076aa94185a1f8eb2f29ad5cbca2cef9a0c', 'kids3ep9', 'UCnPFqCW'],
['e9204406143618454fcf96e86136ac9334e4cdd7dfb97718d0834b0fb71578aa', 'kids3ep10', 'xaMOGvuf']
];

var kidsvideoHub4  = [
['f8fe5352556ecbbf5c82e69553465d5e7e82e8fd950e84ffb668c113d41536c3', 'kid4ep1', '7tzb9pft'],
['a01f792b1c292082cf1e9f931e8a9cad26d9c808239ff509deb47c4aea08cbd0', 'kids4ep2', 'GRsrSGHa'],
['2a45c73c012b5f755c3da2e91206f012f3f7b94964f9789ff76063a37d67d63a', 'kids4ep3', 'GRsrAZra'],
['2e718a8def2654f26bd893bd46f8400d9d6ae9315f84d77a04e7eac14b9c1bc4', 'kids4ep4', 'duLH6gO2'],
['093fc19b8310ea123f5302beab16e3d327f5e524c486d47641f00b00f2bb43ce', 'kids4ep5', 'VC6MwbYu'],
['c3056a3a4f10449a5eb46af1e26bd662506d45bfa7a6a50a6bb9444c38515979', 'kids4ep6', 'Dag8y3eR'],
['d3cb795db0d231c9077e247f525288d111760cfd288f98319b597b57f0f33315', 'kids4ep7', 'LtSn8kju']
];

var videoHub9 = [
['f55850365170437128286ee54d1aee554e1b4c3e9c351af8e9d3ca22b03ee166', 's9ep1', 'HaqgqMVu'],
['6e4a1bd51f8c4301a87282784cec0bb65f53b7e35b6ce47eed684e1b70f34034', 's9ep2', 'fCQS4G0t'],
['45f6cb63d0640e7dec3580906070b4b7b35c71ce180ff41892189a05813d07c7', 's9ep3', 'pRZf15bR'],
['51b150e2f98863a0aee86a5d13114a9bd66f3b1237ded24a019eb9e5ea9861eb', 's9ep4', 'TR9zG6Ua'],
['d2029cbf03a92e6ae973a219ccdab69e92c3d4ebcd2d5999fbe7f2ac3833c03f', 's9ep5', 'c2hqzJSR'],
['a155dd875c379dd945fb9b0d7adc8b5266455a9303779178447f36b9edeaa19e', 's9ep6', 'xaMgOZsu'],
['f0c3cc6437ec0b4c8f4a0cac4a333f7012e2cd2bab862dbbb0160d912148605f', 's9ep7', 'NCkFYedu'],
['937ecec1b73383c1ef6af78ca5a02825dc4f42390fd56961a31f969b12818164', 's9ep8', 'xuMgUOU2'],
['5719e7dd739a6c5ebde37c8dae99d2560ebb784cf676af10aa70cb186d78c311', 's9ep9', 'KtjybITu'],
['47def3b8478440cb44f2b0de897ffb47d4ecd7fd604bda82942e77b5e9994d6b', 's9ep10', 'xaMgpccu'],
['60fa59f87575c076b34d28932f3f98f87b245083382d8178e026d2392a20013a', 's9ep11', 'i21DT6Yt'],
['396dd37866859690ff785f54850858780623b49535afd369fe3999ad7a1aaa3f', 's9ep12', 'duL3p0OR'],
['7ae4cefc8f05f09802b8e522b6ecc3dc0f4845ca6aaaa31ba6524bae1e126f9d', 's9ep13', 'URnxWsgt'],
['757559495ad9ee5b1e6982616e67c0f8211c2b1ee1cbb37f92d19427a717ef33', 's9ep14', 'L28zMvn2']
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

var videoHub4 = [
['yt', 's4ep1', 'PLcpkKchW7Xe6WE-Ciya2iAI6cHjQfxAHu'],
['yt', 's4ep2', 'PLcpkKchW7Xe4bnMo_3BqFJ2vGul6QC1ou'],
['yt', 's4ep3', 'PLcpkKchW7Xe6pkRHh0TSx8ol3RNl0NbOV'],
['yt', 's4ep4', 'PLcpkKchW7Xe4HDo5-WN_RC41LWOxaZux1'],
['yt', 's4ep5', 'PLcpkKchW7Xe7_v7vlgLEeXE8EwUwTXQqT'],
['yt', 's4ep6', 'PLcpkKchW7Xe7nvhiqvErtjN-hJzaUcdIu'],
['yt', 's4ep7', 'PLcpkKchW7Xe4gfw_eNzqYiS8wKlYKluO_'],
['yt', 's4ep8', 'PLcpkKchW7Xe7scYCrlyvpABzoy8LS8e_x'],
['yt', 's4ep9', 'PLcpkKchW7Xe61g7tTamn9BFuPaZb9MBbp'],
['yt', 's4ep10', 'PLcpkKchW7Xe6rdm3I-sdb4leJMf5s9Nh5'],
['yt', 's4ep11', 'PLcpkKchW7Xe47FuRbteEzo7Z87kUFGgw0'],
['yt', 's4ep12', 'PLcpkKchW7Xe5yVsx5IpGZa4jf6wsDBIlG'],
['yt', 's4ep13', 'PLcpkKchW7Xe7ji6uu6wtMGQpKyUuRMW3x'],
['yt', 's4ep14', 'PLcpkKchW7Xe6vbstppxljVPKZxPrTpakW']
];

var videoHub3 = [
['3fe94746805b34234415d2145c4c69f409ea84421697e035b04da7505bc7d37b', 's3ep1', 'EuiLmpCU'],
['90ee0584b26e3b446bb13f85107735e9e463a8bc5dbd8b4717281ae47f57e724', 's3ep2', 'eadgUSCG'],
['5e35bb29abafdd3da1589246ad9f93f0c4bb929351ef25d4038df017d8abd808', 's3ep3', 'E2fVbnae'],
['51b884f983c9a053ed5ee5bdcc0db80ff67987cc1742cd15aab9d693f93f6223', 's3ep4', '9tmxDG25'],
['2cbbdc0f13dcaad926fbe3529f45758fa59ad21b1101c2a7e9f0eb04c267f995', 's3ep5', 'pRZ3h92w'],
['36afa823ace186f0ffbc77b16f9504e8aa1250cd6b043cea48982afcbbe9060d', 's3ep6', 'IRHHdjRq'],
['fb687b0b8e92e4d63ed7e933f5a5a0d4f4e41f97f12953a2e752e8392da8e6b7', 's3ep7', 'VC6gJr2A'],
['34a01816bfca25d57ee8cc8a4a976e5f79e57e91f81be479aaf4b6d36f6c6c5c', 's3ep8', 'ItKiPntz'],
['3ad5e22d1e50074fdf38d09a60ba9332c0cc21c93e4b84504d57d4db43832fc3', 's3ep9', 'xuMiZXaf'],
['c5f863f7faed62efa04ba0375b851c6b309a0085b68f68972af0de7ad0e6f486', 's3ep10', 'eRIN67ax'],
['4ef84e4a4fb0b05d7598ce2c8d794aa5a1a2c6f3b4433e08309250b83b29aec1', 's3ep11', 'DRPeAf2W'],
['6098a7d8483ccddd91f9848088378b09ff73acdd312ce642cdf252dde69a2ed2', 's3ep12', 'XCoef4tW'],
['0caf91ac522331b8ce0a854f3f72b9b88b41d85a71ae69f0312a704a2df837fb', 's3ep13', 'sCN4X4Rd'],
['0cb7b8a55aab94a8d60401b22b6600163c537d781e334b20aec3703bc9e1f108', 's3ep14', 'H24oX5Ce']
];

var videoHub2 = [
['yt', 's2ep1', 'PLF1CAE83D8BA127CA'],
['yt', 's2ep2', 'PL14483CB4688C971B'],
['yt', 's2ep3', 'PLAC9A2CDC43E19E0D'],
['yt', 's2ep4', 'PLE8FAFF8F42C65499'],
['yt', 's2ep5', 'PL4169C64F79558315'],
['yt', 's2ep6', 'PLFAFA60301FCE6D1F'],
['yt', 's2ep7', 'PL3EF53025C2FC34C1'],
['yt', 's2ep8', 'PLCCF0B5DECB307E9F'],
['yt', 's2ep9', 'PL829F1AA237BDC069'],
['yt', 's2ep10', 'PLF43EE0B07293C358'],
['yt', 's2ep11', 'PL2110F04667F3931C'],
['yt', 's2ep12', 'PL1DDD4FA449AA0144'],
['yt', 's2ep13', 'PLDE9DD78AA4FF9DC6'],
['yt', 's2ep14', 'PLDF49635412879ECC'],
['yt', 's2ep15', 'PLC3EF9A3B87B1C6C1'],
['yt', 's2ep16', 'PL5FEC7484C5D58DC9'],
['yt', 's2ep17', 'PLE55D282A9184EDB5']
];

var videoHub1 = [
['yt', 's1ep1', '7s0LPPh-xmU'],
['yt', 's1ep2', 'PL6072141DFFB2D755'],
['yt', 's1ep3', 'PL6072141DFFB2D755'],
['yt', 's1ep4', 'PL75D0D6B7F7564BBA'],
['yt', 's1ep5', 'PL36586E112D2E6ABC'],
['yt', 's1ep6', 'PL13DB7A30155DEA03'],
['yt', 's1ep7', 'PL99360CE3930E565E'],
['yt', 's1ep8', 'PLC811BE54BC02CC34'],
['yt', 's1ep9', 'PL1AB88AF3A6CEEE3E'],
['yt', 's1ep10', 'PLEF6A87BFF0FCE897'],
['yt', 's1ep11', 'PL9C7E60F480E88F6C'],
['yt', 's1ep12', 'PLC3484D9C8E28B6A9'],
['yt', 's1ep13', 'PL78C52DF0CD1E71F5'],
['yt', 's1ep14', 'PL86A210A5E44484AB'],
['yt', 's1ep15', 'PL9033F338446A0B5D'],
['yt', 's1ep16', 'PL980ECE92570F1ED4'],
['yt', 's1ep17', 'PL3602CE3055B49464']
];

var storedText;
var livevideo='https://grandcentral.ovva.tv/lb/live/189931/';
var vodvideo='https://grandcentral.ovva.tv/lb/vod/';
var iframeVid='<iframe width="100%" height="100%" allow="autoplay; fullscreen" allowtransparency="true" allowfullscreen="" scrolling="no" tabindex="0" name="twttrHubFrameSecure" src="https://1plus1.video/tvguide/embed/1?autoplay=1&l=ru" frameborder="0"></iframe>';

// Opera 8.0+ (UA detection to detect Blink/v8-powered Opera)
isOpera = !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;
// Firefox 1.0+
isFirefox = typeof InstallTrigger !== 'undefined';
// Safari 3.0+
isSafari = /constructor/i.test(window.HTMLElement) || (function (p) { return p.toString() === "[object SafariRemoteNotification]"; })(!window['safari'] || safari.pushNotification);
// Internet Explorer 6-11
isIE = /*@cc_on!@*/false || !!document.documentMode;
// Edge 20+
isEdge = !isIE && !!window.StyleMedia;
// Chrome 1+
isChrome = !!window.chrome && !!window.chrome.webstore;
// Blink engine detection
isBlink = (isChrome || isOpera) && !!window.CSS;

var updateQueryStringParam = function (key, value) {

    var baseUrl = [location.protocol, '//', location.host, location.pathname].join(''),
        urlQueryString = document.location.search,
        newParam = key + '=' + value,
        params = '?' + newParam;

    // If the "search" string exists, then build params from it
    if (urlQueryString) {

        updateRegex = new RegExp('([\?&])' + key + '[^&]*');
        removeRegex = new RegExp('([\?&])' + key + '=[^&;]+[&;]?');

        if( typeof value == 'undefined' || value == null || value == '' ) { // Remove param if value is empty

            params = urlQueryString.replace(removeRegex, "$1");
            params = params.replace( /[&;]$/, "" );

        } else if (urlQueryString.match(updateRegex) !== null) { // If param exists already, update it

            params = urlQueryString.replace(updateRegex, "$1" + newParam);

        } else { // Otherwise, add it to end of query string

            params = urlQueryString + '&' + newParam;

        }

    }
    window.history.replaceState({}, "", baseUrl + params);
};
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


function InitVideo(sylka,tapevid,iframeidz){
vodvideo='https://grandcentral.ovva.tv/lb/vod/';
livevideo='https://grandcentral.ovva.tv/lb/live/189931/';
if(tapevid==='live'){} else{
updateQueryStringParam( 'video', tapevid );
}
var urlParams = new URLSearchParams(location.search);
var chekuparm= urlParams.get('video');
if (!chekuparm) { 
   chekuparm=tapevid;
	console.log(chekuparm);
}
switch (chekuparm) {
   case 'kids5ep1':
sylka =kidsvideoHub5[0][0];
tapevid=kidsvideoHub5[0][1];
iframeidz=kidsvideoHub5[0][2];
$('#Livetitl').html("Golos Dity 5 Sezon<small>  / 1 Выпуск от 26.05.2019</small>");
$('#Gtitl').html("Golos Dity 5 Sezon / 1 Выпуск -  от 26.05.2019");
break;	
 case 'kids5ep2':
sylka =kidsvideoHub5[1][0];
tapevid=kidsvideoHub5[1][1];
iframeidz=kidsvideoHub5[1][2];
$('#Livetitl').html("Golos Dity 5 Sezon<small>  / 2 Выпуск от 02.06.2019</small>");
$('#Gtitl').html("Golos Dity 5 Sezon / 2 Выпуск  от 02.06.2019");
break;	
 case 'kids5ep3':
sylka =kidsvideoHub5[2][0];
tapevid=kidsvideoHub5[2][1];
iframeidz=kidsvideoHub5[2][2];
$('#Livetitl').html("Golos Dity 5 Sezon<small>  / 3 Выпуск от 09.06.2019</small>");
$('#Gtitl').html("Golos Dity 5 Sezon / 3 Выпуск  от 09.06.2019");
break;
 case 'kids5ep4':
sylka =kidsvideoHub5[3][0];
tapevid=kidsvideoHub5[3][1];
iframeidz=kidsvideoHub5[3][2];
$('#Livetitl').html("Golos Dity 5 Sezon<small>  / 4 Выпуск от 16.06.2019</small>");
$('#Gtitl').html("Golos Dity 5 Sezon / 4 Выпуск  от 16.06.2019");
break;
 case 'kids5ep5':
sylka =kidsvideoHub5[4][0];
tapevid=kidsvideoHub5[4][1];
iframeidz=kidsvideoHub5[4][2];
$('#Livetitl').html("Golos Dity 5 Sezon<small>  / 5 Выпуск от 23.06.2019</small>");
$('#Gtitl').html("Golos Dity 5 Sezon / 5 Выпуск  от 23.06.2019");
break;
    case 'kids4ep1':
sylka =kidsvideoHub4[0][0];
tapevid=kidsvideoHub4[0][1];
iframeidz=kidsvideoHub4[0][2];
$('#Livetitl').html("Golos Dity 4 Sezon<small>  / 1 Выпуск  </small>");
$('#Gtitl').html("Golos Dity 4 Sezon / 1 Выпуск ");
break;
case 'kids4ep2':
sylka =kidsvideoHub4[1][0];
tapevid=kidsvideoHub4[1][1];
iframeidz=kidsvideoHub4[1][2];
$('#Livetitl').html("Golos Dity 4 Sezon<small>  / 2 Выпуск </small>");
$('#Gtitl').html("Golos Dity 4 Sezon / 2 Выпуск ");
break;
case 'kids4ep3':
sylka =kidsvideoHub4[2][0];
tapevid=kidsvideoHub4[2][1];
iframeidz=kidsvideoHub4[2][2];
$('#Livetitl').html("Golos Dity 4 Sezon<small>  / 3 Выпуск  </small>");
$('#Gtitl').html("Golos Dity 4 Sezon / 3 Выпуск ");
break;
case 'kids4ep4':
sylka =kidsvideoHub4[3][0];
tapevid=kidsvideoHub4[3][1];
iframeidz=kidsvideoHub4[3][2];
$('#Livetitl').html("Golos Dity 4 Sezon<small>  / 4 Выпуск </small>");
$('#Gtitl').html("Golos Dity 4 Sezon / 4 Выпуск ");
break;		
case 'kids4ep5':
sylka =kidsvideoHub4[4][0];
tapevid=kidsvideoHub4[4][1];
iframeidz=kidsvideoHub4[4][2];
$('#Livetitl').html("Golos Dity 4 Sezon<small>  / 5 Выпуск  </small>");
$('#Gtitl').html("Golos Dity 4 Sezon / 5 Выпуск ");
break;	
case 'kids4ep6':
sylka =kidsvideoHub4[5][0];
tapevid=kidsvideoHub4[5][1];
iframeidz=kidsvideoHub4[5][2];
$('#Livetitl').html("Golos Dity 4 Sezon<small>  / 6 Выпуск  </small>");
$('#Gtitl').html("Golos Dity 4 Sezon / 6 Выпуск ");
break;	
case 'kids4ep7':
sylka =kidsvideoHub4[6][0];
tapevid=kidsvideoHub4[6][1];
iframeidz=kidsvideoHub4[6][2];
$('#Livetitl').html("Golos Dity 4 Sezon<small>  / 7 Выпуск  </small>");
$('#Gtitl').html("Golos Dity 4 Sezon / 7 Выпуск ");
break;	
 case 'kids3ep1':
sylka =kidsvideoHub3[0][0];
tapevid=kidsvideoHub3[0][1];
iframeidz=kidsvideoHub3[0][2];
$('#Livetitl').html("Golos Dity 3 Sezon<small>  / 1 Выпуск  </small>");
$('#Gtitl').html("Golos Dity 3 Sezon / 1 Выпуск ");
break;
case 'kids3ep2':
sylka =kidsvideoHub3[1][0];
tapevid=kidsvideoHub3[1][1];
iframeidz=kidsvideoHub3[1][2];
$('#Livetitl').html("Golos Dity 3 Sezon<small>  / 2 Выпуск </small>");
$('#Gtitl').html("Golos Dity 3 Sezon / 2 Выпуск ");
break;
case 'kids3ep3':
sylka =kidsvideoHub3[2][0];
tapevid=kidsvideoHub3[2][1];
iframeidz=kidsvideoHub3[2][2];
$('#Livetitl').html("Golos Dity 3 Sezon<small>  / 3 Выпуск  </small>");
$('#Gtitl').html("Golos Dity 3 Sezon / 3 Выпуск ");
break;
case 'kids3ep4':
sylka =kidsvideoHub3[3][0];
tapevid=kidsvideoHub3[3][1];
iframeidz=kidsvideoHub3[3][2];
$('#Livetitl').html("Golos Dity 3 Sezon<small>  / 4 Выпуск </small>");
$('#Gtitl').html("Golos Dity 3 Sezon / 4 Выпуск ");
break;		
case 'kids3ep5':
sylka =kidsvideoHub3[4][0];
tapevid=kidsvideoHub3[4][1];
iframeidz=kidsvideoHub3[4][2];
$('#Livetitl').html("Golos Dity 3 Sezon<small>  / 5 Выпуск  </small>");
$('#Gtitl').html("Golos Dity 3 Sezon / 5 Выпуск ");
break;	
case 'kids3ep6':
sylka =kidsvideoHub3[5][0];
tapevid=kidsvideoHub3[5][1];
iframeidz=kidsvideoHub3[5][2];
$('#Livetitl').html("Golos Dity 3 Sezon<small>  / 6 Выпуск  </small>");
$('#Gtitl').html("Golos Dity 3 Sezon / 6 Выпуск ");
break;	
case 'kids3ep7':
sylka =kidsvideoHub3[6][0];
tapevid=kidsvideoHub3[6][1];
iframeidz=kidsvideoHub3[6][2];
$('#Livetitl').html("Golos Dity 3 Sezon<small>  / 7 Выпуск  </small>");
$('#Gtitl').html("Golos Dity 3 Sezon / 7 Выпуск ");
break;	
case 'kids3ep8':
sylka =kidsvideoHub3[7][0];
tapevid=kidsvideoHub3[7][1];
iframeidz=kidsvideoHub3[7][2];
$('#Livetitl').html("Golos Dity 3 Sezon<small>  / 8 Выпуск  </small>");
$('#Gtitl').html("Golos Dity 3 Sezon / 8 Выпуск ");
break;			
case 'kids3ep9':
sylka =kidsvideoHub3[8][0];
tapevid=kidsvideoHub3[8][1];
iframeidz=kidsvideoHub3[8][2];
$('#Livetitl').html("Golos Dity 3 Sezon<small>  / 9 Выпуск  </small>");
$('#Gtitl').html("Golos Dity 3 Sezon / 9 Выпуск ");
break;	
case 'kids3ep10':
sylka =kidsvideoHub3[9][0];
tapevid=kidsvideoHub3[9][1];
iframeidz=kidsvideoHub3[9][2];
$('#Livetitl').html("Golos Dity 3 Sezon<small>  / 10 Выпуск  </small>");
$('#Gtitl').html("Golos Dity 3 Sezon / 10 Выпуск ");
break;
 case 'kids2ep1':
sylka =kidsvideoHub2[0][0];
tapevid=kidsvideoHub2[0][1];
iframeidz=kidsvideoHub2[0][2];
$('#Livetitl').html("Golos Dity 2 Sezon<small>  / 1 Выпуск  </small>");
$('#Gtitl').html("Golos Dity 2 Sezon / 1 Выпуск ");
break;
case 'kids2ep2':
sylka =kidsvideoHub2[1][0];
tapevid=kidsvideoHub2[1][1];
iframeidz=kidsvideoHub2[1][2];
$('#Livetitl').html("Golos Dity 2 Sezon<small>  / 2 Выпуск </small>");
$('#Gtitl').html("Golos Dity 2 Sezon / 2 Выпуск ");
break;
case 'kids2ep3':
sylka =kidsvideoHub2[2][0];
tapevid=kidsvideoHub2[2][1];
iframeidz=kidsvideoHub2[2][2];
$('#Livetitl').html("Golos Dity 2 Sezon<small>  / 3 Выпуск  </small>");
$('#Gtitl').html("Golos Dity 2 Sezon / 3 Выпуск ");
break;
case 'kids2ep4':
sylka =kidsvideoHub2[3][0];
tapevid=kidsvideoHub2[3][1];
iframeidz=kidsvideoHub2[3][2];
$('#Livetitl').html("Golos Dity 2 Sezon<small>  / 4 Выпуск </small>");
$('#Gtitl').html("Golos Dity 2 Sezon / 4 Выпуск ");
break;		
case 'kids2ep5':
sylka =kidsvideoHub2[4][0];
tapevid=kidsvideoHub2[4][1];
iframeidz=kidsvideoHub2[4][2];
$('#Livetitl').html("Golos Dity 2 Sezon<small>  / 5 Выпуск  </small>");
$('#Gtitl').html("Golos Dity 2 Sezon / 5 Выпуск ");
break;	
 case 'kids2ep6':
sylka =kidsvideoHub2[5][0];
tapevid=kidsvideoHub2[5][1];
iframeidz=kidsvideoHub2[5][2];
$('#Livetitl').html("Golos Dity 2 Sezon<small>  / 6 Выпуск  </small>");
$('#Gtitl').html("Golos Dity 2 Sezon / 6 Выпуск ");
break;	
  case 'kids1ep1':
sylka =kidsvideoHub1[0][0];
tapevid=kidsvideoHub1[0][1];
iframeidz=kidsvideoHub1[0][2];
$('#Livetitl').html("Golos Dity 1 Sezon<small>  / 1 Выпуск  </small>");
$('#Gtitl').html("Golos Dity 1 Sezon / 1 Выпуск ");
break;
case 'kids1ep2':
sylka =kidsvideoHub1[1][0];
tapevid=kidsvideoHub1[1][1];
iframeidz=kidsvideoHub1[1][2];
$('#Livetitl').html("Golos Dity 1 Sezon<small>  / 2 Выпуск </small>");
$('#Gtitl').html("Golos Dity 1 Sezon / 2 Выпуск ");
break;
case 'kids1ep3':
sylka =kidsvideoHub1[2][0];
tapevid=kidsvideoHub1[2][1];
iframeidz=kidsvideoHub1[2][2];
$('#Livetitl').html("Golos Dity 1 Sezon<small>  / 3 Выпуск  </small>");
$('#Gtitl').html("Golos Dity 1 Sezon / 3 Выпуск ");
break;
case 'kids1ep4':
sylka =kidsvideoHub1[3][0];
tapevid=kidsvideoHub1[3][1];
iframeidz=kidsvideoHub1[3][2];
$('#Livetitl').html("Golos Dity 1 Sezon<small>  / 4 Выпуск </small>");
$('#Gtitl').html("Golos Dity 1 Sezon / 4 Выпуск ");
break;		
case 'kids1ep5':
sylka =kidsvideoHub1[4][0];
tapevid=kidsvideoHub1[4][1];
iframeidz=kidsvideoHub1[4][2];
$('#Livetitl').html("Golos Dity 1 Sezon<small>  / 5 Выпуск  </small>");
$('#Gtitl').html("Golos Dity 1 Sezon / 5 Выпуск ");
break;	
case 'kids1ep6':
sylka =kidsvideoHub1[5][0];
tapevid=kidsvideoHub1[5][1];
iframeidz=kidsvideoHub1[5][2];
$('#Livetitl').html("Golos Dity 1 Sezon<small>  / 6 Выпуск  </small>");
$('#Gtitl').html("Golos Dity 1 Sezon / 6 Выпуск ");
break;	
case 'kids1ep7':
sylka =kidsvideoHub1[6][0];
tapevid=kidsvideoHub1[6][1];
iframeidz=kidsvideoHub1[6][2];
$('#Livetitl').html("Golos Dity 1 Sezon<small>  / 7 Выпуск  </small>");
$('#Gtitl').html("Golos Dity 1 Sezon / 7 Выпуск ");
break;	
case 'kids1ep8':
sylka =kidsvideoHub1[7][0];
tapevid=kidsvideoHub1[7][1];
iframeidz=kidsvideoHub1[7][2];
$('#Livetitl').html("Golos Dity 1 Sezon<small>  / 8 Выпуск  </small>");
$('#Gtitl').html("Golos Dity 1 Sezon / 8 Выпуск ");
break;			
case 'kids1ep9':
sylka =kidsvideoHub1[8][0];
tapevid=kidsvideoHub1[8][1];
iframeidz=kidsvideoHub1[8][2];
$('#Livetitl').html("Golos Dity 1 Sezon<small>  / 9 Выпуск  </small>");
$('#Gtitl').html("Golos Dity 1 Sezon / 9 Выпуск ");
break;	
case 'kids1ep10':
sylka =kidsvideoHub1[9][0];
tapevid=kidsvideoHub1[9][1];
iframeidz=kidsvideoHub1[9][2];
$('#Livetitl').html("Golos Dity 1 Sezon<small>  / 10 Выпуск  </small>");
$('#Gtitl').html("Golos Dity 1 Sezon / 10 Выпуск ");
break;	
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
case 's9ep4':
sylka =videoHub9[3][0];
tapevid=videoHub9[3][1];
iframeidz=videoHub9[3][2];
$('#Livetitl').html("Golos 9 Sezon<small>  / 4 Выпуск от 10.02.2019 </small>");
$('#Gtitl').html("Golos 9 Sezon /  4 Выпуск от 10.03.2019  ");
    break;
case 's9ep5':
sylka =videoHub9[4][0];
tapevid=videoHub9[4][1];
iframeidz=videoHub9[4][2];
$('#Livetitl').html("Golos 9 Sezon<small>  / 5 Выпуск от 17.02.2019  </small>");
$('#Gtitl').html("Golos 9 Sezon /  5 Выпуск от 17.03.2019   ");
    break;
case 's9ep6':
sylka =videoHub9[5][0];
tapevid=videoHub9[5][1];
iframeidz=videoHub9[5][2];
$('#Livetitl').html("Golos 9 Sezon<small>  / 6 Выпуск от 24.02.2019  </small>");
$('#Gtitl').html("Golos 9 Sezon /  6 Выпуск от 24.03.2019   ");
    break;
case 's9ep7':
sylka =videoHub9[6][0];
tapevid=videoHub9[6][1];
iframeidz=videoHub9[6][2];
$('#Livetitl').html("Golos 9 Sezon<small>  / 7 Выпуск от 03.03.2019  </small>");
$('#Gtitl').html("Golos 9 Sezon /  7 Выпуск от 03.03.2019   ");
    break;
case 's9ep8':
sylka =videoHub9[7][0];
tapevid=videoHub9[7][1];
iframeidz=videoHub9[7][2];
$('#Livetitl').html("Golos 9 Sezon<small>  / 8 Выпуск от 10.03.2019 - Бои </small>");
$('#Gtitl').html("Golos 9 Sezon /  8 Выпуск от 10.03.2019 - Бои  ");
    break;
case 's9ep9':
sylka =videoHub9[8][0];
tapevid=videoHub9[8][1];
iframeidz=videoHub9[8][2];
$('#Livetitl').html("Golos 9 Sezon<small>  / 9 Выпуск от 17.03.2019 - Бои </small>");
$('#Gtitl').html("Golos 9 Sezon /  9 Выпуск от 17.03.2019 - Бои  ");
    break;
case 's9ep10':
sylka =videoHub9[9][0];
tapevid=videoHub9[9][1];
iframeidz=videoHub9[9][2];
$('#Livetitl').html("Golos 9 Sezon<small>  / 10 Выпуск от 24.03.2019 - ВОКАЛЬНЫЕ НОКАУТЫ  </small>");
$('#Gtitl').html("Golos 9 Sezon /  10 Выпуск от 24.03.2019 - ВОКАЛЬНЫЕ НОКАУТЫ   ");
    break;
case 's9ep11':
sylka =videoHub9[10][0];
tapevid=videoHub9[10][1];
iframeidz=videoHub9[10][2];
$('#Livetitl').html("Golos 9 Sezon<small>  / 11 Выпуск от 31.03.2019 - ВОКАЛЬНЫЕ НОКАУТЫ  </small>");
$('#Gtitl').html("Golos 9 Sezon /  11 Выпуск от 31.03.2019 - ВОКАЛЬНЫЕ НОКАУТЫ  ");
    break;
case 's9ep12':
sylka =videoHub9[11][0];
tapevid=videoHub9[11][1];
iframeidz=videoHub9[11][2];
$('#Livetitl').html("Golos 9 Sezon<small>  / 12 Выпуск от 07.04.2019 - ПЕРВЫЙ ПРЯМОЙ ЭФИР </small>");
$('#Gtitl').html("Golos 9 Sezon /  12 Выпуск от 07.04.2019 - ПЕРВЫЙ ПРЯМОЙ ЭФИР  ");
    break;
case 's9ep13':
sylka =videoHub9[12][0];
tapevid=videoHub9[12][1];
iframeidz=videoHub9[12][2];
$('#Livetitl').html("Golos 9 Sezon<small>  / 13 Выпуск от 14.04.2019 - Полуфинал  </small>");
$('#Gtitl').html("Golos 9 Sezon /  13 Выпуск от 14.04.2019 - Полуфинал  ");
    break;
case 's9ep14':
sylka =videoHub9[13][0];
tapevid=videoHub9[13][1];
iframeidz=videoHub9[13][2];
$('#Livetitl').html("Golos 9 Sezon<small>  / 14 Выпуск от 21.04.2019 - ФИНАЛ   </small>");
$('#Gtitl').html("Golos 9 Sezon /  14 Выпуск от 21.04.2019 - ФИНАЛ   ");
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
case 's4ep1':
sylka =videoHub4[0][0];
tapevid=videoHub4[0][1];
iframeidz=videoHub4[0][2];
$('#Livetitl').html("Golos 4 Sezon<small>  / Выпуск 1 - 02.03.2014 </small>");
$('#Gtitl').html("Golos 4 Sezon / Выпуск 1 - 02.03.2014");
break;
case 's4ep2':
sylka =videoHub4[1][0];
tapevid=videoHub4[1][1];
iframeidz=videoHub4[1][2];
$('#Livetitl').html("Golos 4 Sezon<small>  / Выпуск 2 - 09.03.2014 </small>");
$('#Gtitl').html("Golos 4 Sezon / Выпуск 2 - 09.03.2014");
break;
case 's4ep3':
sylka =videoHub4[2][0];
tapevid=videoHub4[2][1];
iframeidz=videoHub4[2][2];
$('#Livetitl').html("Golos 4 Sezon<small>  / Выпуск 3 - 16.03.2014 </small>");
$('#Gtitl').html("Golos 4 Sezon / Выпуск 3 - 16.03.2014");
break;
case 's4ep4':
sylka =videoHub4[3][0];
tapevid=videoHub4[3][1];
iframeidz=videoHub4[3][2];
$('#Livetitl').html("Golos 4 Sezon<small>  / Выпуск 4 - 23.03.2014 </small>");
$('#Gtitl').html("Golos 4 Sezon / Выпуск 4 - 23.03.2014");
break;		
case 's4ep5':
sylka =videoHub4[4][0];
tapevid=videoHub4[4][1];
iframeidz=videoHub4[4][2];
$('#Livetitl').html("Golos 4 Sezon<small>  / Выпуск 5 - 30.03.2014 </small>");
$('#Gtitl').html("Golos 4 Sezon / Выпуск 5 - 30.03.2014");
break;	
case 's4ep6':
sylka =videoHub4[5][0];
tapevid=videoHub4[5][1];
iframeidz=videoHub4[5][2];
$('#Livetitl').html("Golos 4 Sezon<small>  / Выпуск 6 - 06.04.2014 </small>");
$('#Gtitl').html("Golos 4 Sezon / Выпуск 6 - 06.04.2014");
break;	
case 's4ep7':
sylka =videoHub4[6][0];
tapevid=videoHub4[6][1];
iframeidz=videoHub4[6][2];
$('#Livetitl').html("Golos 4 Sezon<small>  / Выпуск 7 - 13.04.2014 </small>");
$('#Gtitl').html("Golos 4 Sezon / Выпуск 7 - 13.04.2014");
break;	
case 's4ep8':
sylka =videoHub4[7][0];
tapevid=videoHub4[7][1];
iframeidz=videoHub4[7][2];
$('#Livetitl').html("Golos 4 Sezon<small>  / Выпуск 8 - 20.04.2014 </small>");
$('#Gtitl').html("Golos 4 Sezon / 8 Выпуск от 26.04.2015");
break;			
case 's4ep9':
sylka =videoHub4[8][0];
tapevid=videoHub4[8][1];
iframeidz=videoHub4[8][2];
$('#Livetitl').html("Golos 4 Sezon<small>  / Выпуск 9 - 27.04.2014 </small>");
$('#Gtitl').html("Golos 4 Sezon / Выпуск 9 - 27.04.2014");
break;	
case 's4ep10':
sylka =videoHub4[9][0];
tapevid=videoHub4[9][1];
iframeidz=videoHub4[9][2];
$('#Livetitl').html("Golos 4 Sezon<small>  / Выпуск 10 - 10.05.2014 </small>");
$('#Gtitl').html("Golos 4 Sezon / Выпуск 10 - 10.05.2014");
break;			
case 's4ep11':
sylka =videoHub4[10][0];
tapevid=videoHub4[10][1];
iframeidz=videoHub4[10][2];
$('#Livetitl').html("Golos 4 Sezon<small>  / Выпуск 11 - 11.05.2014 </small>");
$('#Gtitl').html("Golos 4 Sezon / Выпуск 11 - 11.05.2014");
break;			
case 's4ep12':
sylka =videoHub4[11][0];
tapevid=videoHub4[11][1];
iframeidz=videoHub4[11][2];
$('#Livetitl').html("Golos 4 Sezon<small>  / Выпуск 12 - 18.05.2014 </small>");
$('#Gtitl').html("Golos 4 Sezon / Выпуск 12 - 18.05.2014");
break;	
case 's4ep13':
sylka =videoHub4[12][0];
tapevid=videoHub4[12][1];
iframeidz=videoHub4[12][2];
$('#Livetitl').html("Golos 4 Sezon<small>  / Выпуск 13 - 01.06.2014 </small>");
$('#Gtitl').html("Golos 4 Sezon / Выпуск 13 - 01.06.2014");
break;		
case 's4ep14':
sylka =videoHub4[13][0];
tapevid=videoHub4[13][1];
iframeidz=videoHub4[13][2];
$('#Livetitl').html("Golos 4 Sezon<small>  / Выпуск 14 - 08.06.2014</small>");
$('#Gtitl').html("Golos 4 Sezon / Выпуск 14 - 08.06.2014");
break;	
case 's3ep1':
sylka =videoHub3[0][0];
tapevid=videoHub3[0][1];
iframeidz=videoHub3[0][2];
$('#Livetitl').html("Golos 3 Sezon<small>  / 1 Выпуск от 08.03.2013 </small>");
$('#Gtitl').html("Golos 3 Sezon / 1 Выпуск от 08.03.2013");
break;
case 's3ep2':
sylka =videoHub3[1][0];
tapevid=videoHub3[1][1];
iframeidz=videoHub3[1][2];
$('#Livetitl').html("Golos 3 Sezon<small>  / 2 Выпуск от 15.03.2013 </small>");
$('#Gtitl').html("Golos 3 Sezon / 2 Выпуск от 15.03.2013");
break;
case 's3ep3':
sylka =videoHub3[2][0];
tapevid=videoHub3[2][1];
iframeidz=videoHub3[2][2];
$('#Livetitl').html("Golos 3 Sezon<small>  / 3 Выпуск от  22.03.2013 </small>");
$('#Gtitl').html("Golos 3 Sezon / 3 Выпуск от  22.03.2013");
break;
case 's3ep4':
sylka =videoHub3[3][0];
tapevid=videoHub3[3][1];
iframeidz=videoHub3[3][2];
$('#Livetitl').html("Golos 3 Sezon<small>  / 4 Выпуск от  29.03.2013 </small>");
$('#Gtitl').html("Golos 3 Sezon / 4 Выпуск от  29.03.2013");
break;		
case 's3ep5':
sylka =videoHub3[4][0];
tapevid=videoHub3[4][1];
iframeidz=videoHub3[4][2];
$('#Livetitl').html("Golos 3 Sezon<small>  / 5 Выпуск от 05.04.2013 </small>");
$('#Gtitl').html("Golos 3 Sezon / 5 Выпуск от 05.04.2013");
break;	
case 's3ep6':
sylka =videoHub3[5][0];
tapevid=videoHub3[5][1];
iframeidz=videoHub3[5][2];
$('#Livetitl').html("Golos 3 Sezon<small>  / 6 Выпуск от 12.04.2013 </small>");
$('#Gtitl').html("Golos 3 Sezon / 6 Выпуск от 12.04.2013");
break;	
case 's3ep7':
sylka =videoHub3[6][0];
tapevid=videoHub3[6][1];
iframeidz=videoHub3[6][2];
$('#Livetitl').html("Golos 3 Sezon<small>  / 7 Выпуск от 19.04.2013 </small>");
$('#Gtitl').html("Golos 3 Sezon / 7 Выпуск от 19.04.2013");
break;	
case 's3ep8':
sylka =videoHub3[7][0];
tapevid=videoHub3[7][1];
iframeidz=videoHub3[7][2];
$('#Livetitl').html("Golos 3 Sezon<small>  / 8 Выпуск от 26.04.2013 </small>");
$('#Gtitl').html("Golos 3 Sezon / 8 Выпуск от 26.04.2013");
break;			
case 's3ep9':
sylka =videoHub3[8][0];
tapevid=videoHub3[8][1];
iframeidz=videoHub3[8][2];
$('#Livetitl').html("Golos 3 Sezon<small>  / 9 Выпуск от 03.05.2013 </small>");
$('#Gtitl').html("Golos 3 Sezon / 9 Выпуск от 03.05.2013");
break;	
case 's3ep10':
sylka =videoHub3[9][0];
tapevid=videoHub3[9][1];
iframeidz=videoHub3[9][2];
$('#Livetitl').html("Golos 3 Sezon<small>  / 10 Выпуск от 26.03.2017 </small>");
$('#Gtitl').html("Golos 3 Sezon / 10 Выпуск от 26.03.2017");
break;			
case 's3ep11':
sylka =videoHub3[10][0];
tapevid=videoHub3[10][1];
iframeidz=videoHub3[10][2];
$('#Livetitl').html("Golos 3 Sezon<small>  / 11 Выпуск от 10.05.2013 </small>");
$('#Gtitl').html("Golos 3 Sezon / 11 Выпуск от 10.05.2013");
break;			
case 's3ep12':
sylka =videoHub3[11][0];
tapevid=videoHub3[11][1];
iframeidz=videoHub3[11][2];
$('#Livetitl').html("Golos 3 Sezon<small>  / 12 Выпуск от 17.05.2013 </small>");
$('#Gtitl').html("Golos 3 Sezon / 12 Выпуск от 17.05.2013");
break;	
case 's3ep13':
sylka =videoHub3[12][0];
tapevid=videoHub3[12][1];
iframeidz=videoHub3[12][2];
$('#Livetitl').html("Golos 3 Sezon<small>  / 13 Выпуск от 24.05.2013 </small>");
$('#Gtitl').html("Golos 3 Sezon / 13 Выпуск от 24.05.2013");
break;		
case 's3ep14':
sylka =videoHub3[13][0];
tapevid=videoHub3[13][1];
iframeidz=videoHub3[13][2];
$('#Livetitl').html("Golos 3 Sezon<small>  / 14 Выпуск от 07.06.2013 </small>");
$('#Gtitl').html("Golos 3 Sezon / 14 Выпуск от 07.06.2013");
break;	
case 's2ep1':
sylka =videoHub2[0][0];
tapevid=videoHub2[0][1];
iframeidz=videoHub2[0][2];
$('#Livetitl').html("Golos 2 Sezon<small>  / 1 Выпуск от 08.03</small>");
$('#Gtitl').html("Golos 2 Sezon / 1 Выпуск от 08.03.2013");
break;
case 's2ep2':
sylka =videoHub2[1][0];
tapevid=videoHub2[1][1];
iframeidz=videoHub2[1][2];
$('#Livetitl').html("Golos 2 Sezon<small>  / 2 Выпуск от 15.03</small>");
$('#Gtitl').html("Golos 2 Sezon / 2 Выпуск от 15.03.2013");
break;
case 's2ep3':
sylka =videoHub2[2][0];
tapevid=videoHub2[2][1];
iframeidz=videoHub2[2][2];
$('#Livetitl').html("Golos 2 Sezon<small>  / 3 Выпуск от  22.03</small>");
$('#Gtitl').html("Golos 2 Sezon / 3 Выпуск от  22.03.2013");
break;
case 's2ep4':
sylka =videoHub2[3][0];
tapevid=videoHub2[3][1];
iframeidz=videoHub2[3][2];
$('#Livetitl').html("Golos 2 Sezon<small>  / 4 Выпуск от  29.03</small>");
$('#Gtitl').html("Golos 2 Sezon / 4 Выпуск от  29.03.2013");
break;		
case 's2ep5':
sylka =videoHub2[4][0];
tapevid=videoHub2[4][1];
iframeidz=videoHub2[4][2];
$('#Livetitl').html("Golos 2 Sezon<small>  / 5 Выпуск от 05.04</small>");
$('#Gtitl').html("Golos 2 Sezon / 5 Выпуск от 05.04.2013");
break;	
case 's2ep6':
sylka =videoHub2[5][0];
tapevid=videoHub2[5][1];
iframeidz=videoHub2[5][2];
$('#Livetitl').html("Golos 2 Sezon<small>  / 6 Выпуск от 12.04</small>");
$('#Gtitl').html("Golos 2 Sezon / 6 Выпуск от 12.04.2013");
break;	
case 's2ep7':
sylka =videoHub2[6][0];
tapevid=videoHub2[6][1];
iframeidz=videoHub2[6][2];
$('#Livetitl').html("Golos 2 Sezon<small>  / 7 Выпуск от 19.04</small>");
$('#Gtitl').html("Golos 2 Sezon / 7 Выпуск от 19.04.2013");
break;	
case 's2ep8':
sylka =videoHub2[7][0];
tapevid=videoHub2[7][1];
iframeidz=videoHub2[7][2];
$('#Livetitl').html("Golos 2 Sezon<small>  / 8 Выпуск от 26.04</small>");
$('#Gtitl').html("Golos 2 Sezon / 8 Выпуск от 26.04.2013");
break;			
case 's2ep9':
sylka =videoHub2[8][0];
tapevid=videoHub2[8][1];
iframeidz=videoHub2[8][2];
$('#Livetitl').html("Golos 2 Sezon<small>  / 9 Выпуск от 03.05</small>");
$('#Gtitl').html("Golos 2 Sezon / 9 Выпуск от 03.05.2013");
break;	
case 's2ep10':
sylka =videoHub2[9][0];
tapevid=videoHub2[9][1];
iframeidz=videoHub2[9][2];
$('#Livetitl').html("Golos 2 Sezon<small>  / 10 Выпуск от 26.03.2017 </small>");
$('#Gtitl').html("Golos 2 Sezon / 10 Выпуск от 26.03.2017");
break;			
case 's2ep11':
sylka =videoHub2[10][0];
tapevid=videoHub2[10][1];
iframeidz=videoHub2[10][2];
$('#Livetitl').html("Golos 2 Sezon<small>  / 11 Выпуск от 10.05</small>");
$('#Gtitl').html("Golos 2 Sezon / 11 Выпуск от 10.05.2013");
break;			
case 's2ep12':
sylka =videoHub2[11][0];
tapevid=videoHub2[11][1];
iframeidz=videoHub2[11][2];
$('#Livetitl').html("Golos 2 Sezon<small>  / 12 Выпуск от 17.05</small>");
$('#Gtitl').html("Golos 2 Sezon / 12 Выпуск от 17.05.2013");
break;	
case 's2ep13':
sylka =videoHub2[12][0];
tapevid=videoHub2[12][1];
iframeidz=videoHub2[12][2];
$('#Livetitl').html("Golos 2 Sezon<small>  / 13 Выпуск от 24.05</small>");
$('#Gtitl').html("Golos 2 Sezon / 13 Выпуск от 24.05.2013");
break;		
case 's2ep14':
sylka =videoHub2[13][0];
tapevid=videoHub2[13][1];
iframeidz=videoHub2[13][2];
$('#Livetitl').html("Golos 2 Sezon<small>  / 14 Выпуск от 07.06</small>");
$('#Gtitl').html("Golos 2 Sezon / 14 Выпуск от 07.06.2013");
break;	
case 's2ep15':
sylka =videoHub2[14][0];
tapevid=videoHub2[14][1];
iframeidz=videoHub2[14][2];
$('#Livetitl').html("Golos 2 Sezon<small>  / 14 Выпуск от 07.06</small>");
$('#Gtitl').html("Golos 2 Sezon / 14 Выпуск от 07.06.2013");
break;	
case 's2ep16':
sylka =videoHub2[15][0];
tapevid=videoHub2[15][1];
iframeidz=videoHub2[15][2];
$('#Livetitl').html("Golos 2 Sezon<small>  / 14 Выпуск от 07.06</small>");
$('#Gtitl').html("Golos 2 Sezon / 14 Выпуск от 07.06.2013");
break;	
case 's2ep17':
sylka =videoHub2[16][0];
tapevid=videoHub2[16][1];
iframeidz=videoHub2[16][2];
$('#Livetitl').html("Golos 2 Sezon<small>  / 14 Выпуск от 07.06</small>");
$('#Gtitl').html("Golos 2 Sezon / 14 Выпуск от 07.06.2013");
break;	
case 's1ep1':
sylka =videoHub1[0][0];
tapevid=videoHub1[0][1];
iframeidz=videoHub1[0][2];
$('#Livetitl').html("Golos 1 Sezon<small>  / 1 Выпуск от 08.03</small>");
$('#Gtitl').html("Golos 1 Sezon / 1 Выпуск от 08.03.2013");
break;
case 's1ep2':
sylka =videoHub1[1][0];
tapevid=videoHub1[1][1];
iframeidz=videoHub1[1][2];
$('#Livetitl').html("Golos 1 Sezon<small>  / 2 Выпуск от 15.03</small>");
$('#Gtitl').html("Golos 1 Sezon / 2 Выпуск от 15.03.2013");
break;
case 's1ep3':
sylka =videoHub1[2][0];
tapevid=videoHub1[2][1];
iframeidz=videoHub1[2][2];
$('#Livetitl').html("Golos 1 Sezon<small>  / 3 Выпуск от  22.03</small>");
$('#Gtitl').html("Golos 1 Sezon / 3 Выпуск от  22.03.2013");
break;
case 's1ep4':
sylka =videoHub1[3][0];
tapevid=videoHub1[3][1];
iframeidz=videoHub1[3][2];
$('#Livetitl').html("Golos 1 Sezon<small>  / 4 Выпуск от  29.03</small>");
$('#Gtitl').html("Golos 1 Sezon / 4 Выпуск от  29.03.2013");
break;		
case 's1ep5':
sylka =videoHub1[4][0];
tapevid=videoHub1[4][1];
iframeidz=videoHub1[4][2];
$('#Livetitl').html("Golos 1 Sezon<small>  / 5 Выпуск от 05.04</small>");
$('#Gtitl').html("Golos 1 Sezon / 5 Выпуск от 05.04.2013");
break;	
case 's1ep6':
sylka =videoHub1[5][0];
tapevid=videoHub1[5][1];
iframeidz=videoHub1[5][2];
$('#Livetitl').html("Golos 1 Sezon<small>  / 6 Выпуск от 12.04</small>");
$('#Gtitl').html("Golos 1 Sezon / 6 Выпуск от 12.04.2013");
break;	
case 's1ep7':
sylka =videoHub1[6][0];
tapevid=videoHub1[6][1];
iframeidz=videoHub1[6][2];
$('#Livetitl').html("Golos 1 Sezon<small>  / 7 Выпуск от 19.04</small>");
$('#Gtitl').html("Golos 1 Sezon / 7 Выпуск от 19.04.2013");
break;	
case 's1ep8':
sylka =videoHub1[7][0];
tapevid=videoHub1[7][1];
iframeidz=videoHub1[7][2];
$('#Livetitl').html("Golos 1 Sezon<small>  / 8 Выпуск от 26.04</small>");
$('#Gtitl').html("Golos 1 Sezon / 8 Выпуск от 26.04.2013");
break;			
case 's1ep9':
sylka =videoHub1[8][0];
tapevid=videoHub1[8][1];
iframeidz=videoHub1[8][2];
$('#Livetitl').html("Golos 1 Sezon<small>  / 9 Выпуск от 03.05</small>");
$('#Gtitl').html("Golos 1 Sezon / 9 Выпуск от 03.05.2013");
break;	
case 's1ep10':
sylka =videoHub1[9][0];
tapevid=videoHub1[9][1];
iframeidz=videoHub1[9][2];
$('#Livetitl').html("Golos 1 Sezon<small>  / 10 Выпуск от 26.03.2017 </small>");
$('#Gtitl').html("Golos 1 Sezon / 10 Выпуск от 26.03.2017");
break;			
case 's1ep11':
sylka =videoHub1[10][0];
tapevid=videoHub1[10][1];
iframeidz=videoHub1[10][2];
$('#Livetitl').html("Golos 1 Sezon<small>  / 11 Выпуск от 10.05</small>");
$('#Gtitl').html("Golos 1 Sezon / 11 Выпуск от 10.05.2013");
break;			
case 's1ep12':
sylka =videoHub1[11][0];
tapevid=videoHub1[11][1];
iframeidz=videoHub1[11][2];
$('#Livetitl').html("Golos 1 Sezon<small>  / 12 Выпуск от 17.05</small>");
$('#Gtitl').html("Golos 1 Sezon / 12 Выпуск от 17.05.2013");
break;	
case 's1ep13':
sylka =videoHub1[12][0];
tapevid=videoHub1[12][1];
iframeidz=videoHub1[12][2];
$('#Livetitl').html("Golos 1 Sezon<small>  / 13 Выпуск от 24.05</small>");
$('#Gtitl').html("Golos 1 Sezon / 13 Выпуск от 24.05.2013");
break;		
case 's1ep14':
sylka =videoHub1[13][0];
tapevid=videoHub1[13][1];
iframeidz=videoHub1[13][2];
$('#Livetitl').html("Golos 1 Sezon<small>  / 14 Выпуск от 07.06</small>");
$('#Gtitl').html("Golos 1 Sezon / 14 Выпуск от 07.06.2013");
break;	
case 's1ep15':
sylka =videoHub1[14][0];
tapevid=videoHub1[14][1];
iframeidz=videoHub1[14][2];
$('#Livetitl').html("Golos 1 Sezon<small>  / 14 Выпуск от 07.06</small>");
$('#Gtitl').html("Golos 1 Sezon / 14 Выпуск от 07.06.2013");
break;	
case 's1ep16':
sylka =videoHub1[15][0];
tapevid=videoHub1[15][1];
iframeidz=videoHub1[15][2];
$('#Livetitl').html("Golos 1 Sezon<small>  / 14 Выпуск от 07.06</small>");
$('#Gtitl').html("Golos 1 Sezon / 14 Выпуск от 07.06.2013");
break;	
case 's1ep17':
sylka =videoHub1[16][0];
tapevid=videoHub1[16][1];
iframeidz=videoHub1[16][2];
$('#Livetitl').html("Golos 1 Sezon<small>  / 14 Выпуск от 07.06</small>");
$('#Gtitl').html("Golos 1 Sezon / 14 Выпуск от 07.06.2013");
break;	
		
}


 $('.theoplayer-container').html("");
if(tapevid==='live'){

livevideo += sylka;

} else { 

InitFrameVideo(iframeidz,sylka);
vodvideo += sylka;
livevideo=vodvideo;

}
 if(sylka==='yt'){//Proverka video na yootube
 $(iframeVid).appendTo('.theoplayer-container');
 return;
 }

//chekCountry
$.get("https://freegeoip.app/json/", function (response) {
	if(response.country_code!='UA' || urlParams.get('s')=='ua'){
	  if(!tapevid.indexOf("kids5")){//Proverka na kids5 
 $(iframeVid).appendTo('.theoplayer-container');
 return;
 }
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
	    } else if(!text.indexOf("404=")){$(iframeVid).appendTo('.theoplayer-container');} else {
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
function InitFrameVideo(embed,sylka){
	if(sylka=='yt'){//yootube video
var tempvid ='<iframe width="100%" height="100%" src="';
var framez = 'https://www.youtube.com/embed/videoseries?list=';
framez += embed;
framez +='&autoplay=1&loop=1';
tempvid+= framez +'" frameborder="0" allowfullscreen></iframe>';
iframeVid=tempvid;
	
	}
	else {// 1plus1 Video
var tempvid ='<iframe width="100%" height="100%" src="';
var framez = 'https://1plus1.video/video/embed/';
framez += embed;
framez +='?autoplay=1&l=ru';
tempvid+= framez +'" frameborder="0" allowfullscreen></iframe>';
iframeVid=tempvid;
	}
}

//func generate sezon video
function GenerateElCicle(GolosSezon){
var templegh;
var habtempzn;
var urlParams = new URLSearchParams(location.search);
var chekuri= urlParams.get('video');
var GolosSezonzn;
if (chekuri&&firstinit) { if(chekuri[0]=='k'){GolosSezon=chekuri[0]+chekuri[1]+chekuri[2]+chekuri[4];} else {GolosSezon=chekuri[0]+chekuri[1];}}	
switch (GolosSezon) {
  case 's9':
   templegh=videoHub9.length;
   habtempzn='videoHub9';
   GolosSezonzn='9';
    break;
  case 's8':
   templegh=videoHub8.length;
   habtempzn='videoHub8';		
   GolosSezonzn='8';
     break;
  case 's7':
   templegh=videoHub7.length;
   habtempzn='videoHub7';		
   GolosSezonzn='7';
     break;
  case 's6':
   templegh=videoHub6.length;
   habtempzn='videoHub6';		
   GolosSezonzn='6';
     break;
   case 's5':
   templegh=videoHub5.length;
   habtempzn='videoHub5';
   GolosSezonzn='5';
     break;
   case 's4':
   templegh=videoHub4.length;
   habtempzn='videoHub4';
   GolosSezonzn='4';
     break;
   case 's3':
   templegh=videoHub3.length;
   habtempzn='videoHub3';
   GolosSezonzn='3';
     break;
   case 's2':
   templegh=videoHub2.length;
   habtempzn='videoHub2';
   GolosSezonzn='2';
     break;
   case 's1':
   templegh=videoHub1.length;
   habtempzn='videoHub1';
   GolosSezonzn='1';
     break;
   case 'kid1':
   templegh=kidsvideoHub1.length;
   habtempzn='kidsvideoHub1';
   GolosSezonzn='Golos Dity 1';
     break;
        case 'kid2':
   templegh=kidsvideoHub2.length;
   habtempzn='kidsvideoHub2';
   GolosSezonzn='Golos Dity 2';
     break;
	case 'kid3':
   templegh=kidsvideoHub3.length;
   habtempzn='kidsvideoHub3';
   GolosSezonzn='Golos Dity 3';
     break;
       case 'kid4':
   templegh=kidsvideoHub4.length;
   habtempzn='kidsvideoHub4';
   GolosSezonzn='Golos Dity 4';
     break;
	 case 'kid5':
   templegh=kidsvideoHub5.length;
   habtempzn='kidsvideoHub5';
   GolosSezonzn='Golos Dity 5';
     break;
}
var myHTML1 = '';

  for (var i = 0; i < templegh; i++) {
    myHTML1 += '<button type="button" class="btn btn-primary btn-lg btn-block mt-1 mb-1 " onclick="InitVideo('+habtempzn+'['+i+'][0],'+habtempzn+'['+i+'][1],'+habtempzn+'['+i+'][2])">'+GolosSezonzn+' сезон '+ (i + 1) +' выпуск</button></br>';
  }


$('#versionsylka').html(myHTML1);
zozo();
	firstinit=false;
}
//fn active class
function zozo(){ $('button').click(function(){
  $('button').removeClass('active');
  $(this).addClass('active');
  $('html, body').animate({scrollTop:  0 }, 'slow');
});}
