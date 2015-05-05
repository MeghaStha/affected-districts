$(document).ready(function(){
var map = new L.map('map').setView([27.8006, 85.3934],8);
L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 18
}).addTo(map);
L.tileLayer('https://{s}.tiles.mapbox.com/v4/kll.m3j32hkl/{z}/{x}/{y}.png?access_token=pk.eyJ1Ijoia2xsIiwiYSI6IktVRUtfQnMifQ.GJAHJPvusgK_f0NsSXS8QA',{
		maxZoom: 18
}).addTo(map);



});