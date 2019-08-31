var locations = [
	{'x': 47.532466, 'y': 19.067022, 'open': '6-18h', 'desc': 'A Róbert Károly körút és a Váci út kereszteződésének aluljárójában', 'street': 'Árpád-híd', 'num': '', 'addr': 'Árpád-híd', 'map_url': '<a href="http://google.com/maps/place/47.532466,19.067022" target="_blank">google térkép</a>'},
	{'x': 47.500767, 'y': 19.05401, 'open': '0-24h', 'desc': 'A Bazilika mellett, bal oldalon a Bajcsy-Zsilinszky út "mentén"', 'street': 'Bazilika', 'num': '', 'addr': 'Bazilika', 'map_url': '<a href="http://google.com/maps/place/47.500767,19.05401" target="_blank">google térkép</a>'},
	{'x': 47.495383, 'y': 19.064977, 'open': '0-24h', 'desc': 'A Rákóczi úton, az Uránia Filmszínház mellett', 'street': 'Uránia', 'num': '', 'addr': 'Uránia', 'map_url': '<a href="http://google.com/maps/place/47.495383,19.064977" target="_blank">google térkép</a>'},
	{'x': 47.494504, 'y': 19.060095, 'open': 'ÁTMENETILEG ZÁRVA! 7-19h', 'desc': 'Külön női és férfi lejárata van', 'street': 'Astoria', 'num': '', 'addr': 'Astoria', 'map_url': '<a href="http://google.com/maps/place/47.494504,19.060095" target="_blank">google térkép</a>'},
	{'x': 47.486045, 'y': 19.070034, 'open': '6-18h', 'desc': 'Ferenc körút és az Üllői út kereszteződésében', 'street': 'Corvin negyed', 'num': '', 'addr': 'Corvin negyed', 'map_url': '<a href="http://google.com/maps/place/47.486045,19.070034" target="_blank">google térkép</a>'},
	{'x': 47.514048, 'y': 19.078661, 'open': '', 'desc': 'A Műcsarnok mögött található Két oldali lejárattal rendelkezik Nagy csoportok fogadására is alkalmas', 'street': 'Hősök tere', 'num': '', 'addr': 'Hősök tere', 'map_url': '<a href="http://google.com/maps/place/47.514048,19.078661" target="_blank">google térkép</a>'},
	{'x': 47.514364, 'y': 19.085233, 'open': '6-18h', 'desc': 'A városligeti Műlyégpálya mögötti földalatti llemhely.', 'street': 'Városliget', 'num': '', 'addr': 'Városliget', 'map_url': '<a href="http://google.com/maps/place/47.514364,19.085233" target="_blank">google térkép</a>'},
	{'x': 47.518697, 'y': 19.082465, 'open': 'nyáron 8-20h, télen 7-19h', 'desc': '', 'street': 'Széchenyi fürdő', 'num': '', 'addr': 'Széchenyi fürdő', 'map_url': '<a href="http://google.com/maps/place/47.518697,19.082465" target="_blank">google térkép</a>'},
	{'x': 47.486832, 'y': 19.042814, 'open': 'nyáron 8-20h, télen 7-19h', 'desc': 'Gellért hegy', 'street': 'Szirtes utca/Citadella', 'num': '', 'addr': 'Szirtes utca/Citadella', 'map_url': '<a href="http://google.com/maps/place/47.486832,19.042814" target="_blank">google térkép</a>'},
	{'x': 47.514682, 'y': 19.039504, 'open': '6-18h', 'desc': '', 'street': 'Margit krt.', 'num': '1', 'addr': 'Margit krt. 1', 'map_url': '<a href="http://google.com/maps/place/47.514682,19.039504" target="_blank">google térkép</a>'},
	{'x': 47.497645, 'y': 19.055331, 'open': '7-19h', 'desc': 'a Károly körút alatti aluljáróban, Külön női és férfi lejárata van', 'street': 'Deák Ferenc tér', 'num': '28', 'addr': 'Deák Ferenc tér 28', 'map_url': '<a href="http://google.com/maps/place/47.497645,19.055331" target="_blank">google térkép</a>'},
	{'x': 47.478969, 'y': 19.090369, 'open': '7-19h', 'desc': 'A VIII. kerületben, a Nagyvárad téri aluljáróban található az FCSM Zrt. által üzemeltetett nyilvános WC.', 'street': 'Nagyvárad tér', 'num': '', 'addr': 'Nagyvárad tér', 'map_url': '<a href="http://google.com/maps/place/47.478969,19.090369" target="_blank">google térkép</a>'},
	{'x': 47.476454, 'y': 19.098926, 'open': '6-18h', 'desc': 'Üllői út - Könyves Kálmán körút kereszteződésében', 'street': 'Könyves Kálmán krt./ Népliget', 'num': '', 'addr': 'Könyves Kálmán krt./ Népliget', 'map_url': '<a href="http://google.com/maps/place/47.476454,19.098926" target="_blank">google térkép</a>'},
	{'x': 47.47773, 'y': 19.046128, 'open': '7-19h', 'desc': '', 'street': 'Móricz Zs. körtér', 'num': '', 'addr': 'Móricz Zs. körtér', 'map_url': '<a href="http://google.com/maps/place/47.47773,19.046128" target="_blank">google térkép</a>'},
	{'x': 47.506526, 'y': 19.03905, 'open': '6-22h', 'desc': '', 'street': 'Batthyányi tér', 'num': '', 'addr': 'Batthyányi tér', 'map_url': '<a href="http://google.com/maps/place/47.506526,19.03905" target="_blank">google térkép</a>'},
	{'x': 47.501169, 'y': 19.024062, 'open': 'személyzetes: 6-18h, automata: 18-6h', 'desc': 'Déli PU. előtti aluljáró kerengőjében', 'street': 'Déli pályaudvar', 'num': '', 'addr': 'Déli pályaudvar', 'map_url': '<a href="http://google.com/maps/place/47.501169,19.024062" target="_blank">google térkép</a>'},
	{'x': 47.495945, 'y': 19.066622, 'open': '', 'desc': '', 'street': 'Rákóczi', 'num': '29', 'addr': 'Rákóczi 29', 'map_url': '<a href="http://google.com/maps/place/47.495945,19.066622" target="_blank">google térkép</a>'},
	{'x': 47.560753, 'y': 19.088497, 'open': '', 'desc': 'Újpest központjában, az Árpád út 68. alatt, az aluljáró', 'street': 'Árpád út', 'num': '68', 'addr': 'Árpád út 68', 'map_url': '<a href="http://google.com/maps/place/47.560753,19.088497" target="_blank">google térkép</a>'},
	{'x': 47.506858, 'y': 19.023345, 'open': '', 'desc': 'A II. és XII. kerület határán, a Moszkva tér alatt', 'street': 'Várfok utca', 'num': '28', 'addr': 'Várfok utca 28', 'map_url': '<a href="http://google.com/maps/place/47.506858,19.023345" target="_blank">google térkép</a>'},
	{'x': 47.56326, 'y': 19.110543, 'open': '', 'desc': '', 'street': 'Szilágyi út', 'num': '1', 'addr': 'Szilágyi út 1', 'map_url': '<a href="http://google.com/maps/place/47.56326,19.110543" target="_blank">google térkép</a>'},
	{'x': 47.492009, 'y': 19.056856, 'open': '', 'desc': 'Károlyi u. - Curia u. találkozásánál, a Ferenciek tere alatt', 'street': 'Károlyi Mihály u.', 'num': '3', 'addr': 'Károlyi Mihály u. 3', 'map_url': '<a href="http://google.com/maps/place/47.492009,19.056856" target="_blank">google térkép</a>'},
	{'x': 47.505247, 'y': 19.063446, 'open': '', 'desc': 'Teréz körúton (Oktogon alatt)', 'street': 'Oktogon (alatt)', 'num': '', 'addr': 'Oktogon (alatt)', 'map_url': '<a href="http://google.com/maps/place/47.505247,19.063446" target="_blank">google térkép</a>'},
	{'x': 47.505478, 'y': 19.134922, 'open': '6-22h', 'desc': 'A HÉV megálló és a Sugár Áruház mellett található Külön Női és Férfi lejárata van.', 'street': 'Örs Vezér tér', 'num': '7', 'addr': 'Örs Vezér tér 7', 'map_url': '<a href="http://google.com/maps/place/47.505478,19.134922" target="_blank">google térkép</a>'},
	{'x': 47.572029, 'y': 19.065149, 'open': '', 'desc': '', 'street': 'Római part ', 'num': '32-33', 'addr': 'Római part  32-33', 'map_url': '<a href="http://google.com/maps/place/47.572029,19.065149" target="_blank">google térkép</a>'},
];

window.onload = function() {
	var mymap = L.map('mapid').setView([47.505218, 19.053034], 12);
	L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoicGF0cmlrdHVyaSIsImEiOiJjanhwNzFsOWowNXVoM2hyOG9vdnIzdWJmIn0.mU2-Ia2g37XToKwimvbdSw', {
	    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
	    maxZoom: 18,
	    id: 'mapbox.streets',
	    accessToken: 'your.mapbox.access.token'
	}).addTo(mymap);

	var infoDiv = document.getElementById('loc_info');
	locations.forEach(function(loc) {
		var marker = L.marker([loc.x, loc.y]).addTo(mymap);
		var title = '<span class="loc_title">' + loc.addr + '</span><br/>';
		marker.bindPopup(title + 'nyitva: ' + loc.open + '<br/>' + loc.map_url);
		var desc = title + loc.desc;
		marker.on('mouseover', function(ev) {
  			marker.openPopup();
  			infoDiv.innerHTML = desc;
		});
	});
}