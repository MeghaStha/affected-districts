$(document).ready(function(){
var map = new L.map('map').setView([27.8006, 85.3934],8);

L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 18
}).addTo(map);
L.tileLayer('https://{s}.tiles.mapbox.com/v4/kll.district/{z}/{x}/{y}.png?access_token=pk.eyJ1Ijoia2xsIiwiYSI6IktVRUtfQnMifQ.GJAHJPvusgK_f0NsSXS8QA').addTo(map);
var layers = [
 L.tileLayer('https://{s}.tiles.mapbox.com/v4/kll.m3i8i8ii/{z}/{x}/{y}.png?access_token=pk.eyJ1Ijoia2xsIiwiYSI6IktVRUtfQnMifQ.GJAHJPvusgK_f0NsSXS8QA',{transparent : true, opacity : 0.8}),
 L.tileLayer ('http://{s}.tiles.mapbox.com/v4/kll.popden/{z}/{x}/{y}.png?access_token=pk.eyJ1Ijoia2xsIiwiYSI6IktVRUtfQnMifQ.GJAHJPvusgK_f0NsSXS8QA',{transparent : true, opacity : 0.8}),
  L.tileLayer ('https://{s}.tiles.mapbox.com/v4/kll.Householdden/{z}/{x}/{y}.png?access_token=pk.eyJ1Ijoia2xsIiwiYSI6IktVRUtfQnMifQ.GJAHJPvusgK_f0NsSXS8QA',{transparent : true, opacity : 0.8})
];
var layerGroup = L.layerGroup().addTo(map);
layerGroup.clearLayers().addLayer(layers[0]);
var epicenterIcon = L.icon({
    iconUrl: 'js/image/epicenter.png',
    iconSize: [30, 28], // size of the icon
   
 });
 L.marker([28.210368, 84.742003], {icon: epicenterIcon}).addTo(map);

 $("#intSubmit").click(function(){
var inti = layerGroup.clearLayers().addLayer(layers[0]);
$("#legend").html("<img src='images/intensity.PNG' width ='160px' height= '150px'/>");
  }); 
  
$("#popSubmit").click(function(){
var pop = layerGroup.clearLayers().addLayer(layers[1]);
$("#legend").html("<img src='images/pop.PNG' width ='160px' height= '150px'/>");

	});
$("#hhSubmit").click(function(){
var hh = layerGroup.clearLayers().addLayer(layers[2]);
$("#legend").html("<img src='images/hh.PNG' width = '160px' height= '150px'/>");
});

});