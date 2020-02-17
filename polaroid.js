// set x to the number of images you want to display
var x = 10;

var img_0 = [ "file name", "paint type", "price", "title", "rotate" ];

// add a line for each new image - ensure it has 5 variables in it as above

var img_1 = [ "img_1.jpg", "Acrylic A3", "65", "Woodland Track", "rotate_left" ];
var img_2 = [ "img_2.jpg", "Acrylic A3", "65", "Farmhouse Lake", "" ];
var img_3 = [ "img_3.jpg", "Acrylic A3", "65", "Country Road", "rotate_right" ];
var img_4 = [ "img_4.jpg", "Acrylic A3", "65", "River", "" ];
var img_5 = [ "img_5.jpg", "Acrylic A3", "65", "Sunset", "rotate_left" ];
var img_6 = [ "img_6.jpg", "Acrylic A3", "65", "Street View", "rotate_left" ];
var img_7 = [ "img_7.jpg", "Acrylic A3", "65", "sold", "rotate_right" ];
var img_8 = [ "img_8.jpg", "Acrylic A3", "65", "Woodland Path", "rotate_left" ];
var img_9 = [ "img_9.jpg", "Acrylic A3", "65", "Sunset Lake", "rotate_right" ];
var img_10 = [ "img_10.jpg", "Acrylis A3", "65", "Street View", "" ];

for ( var i = 1 ; i <= x ; i++ ) {
  img = eval("img_"+i);			// use the counter to evaluate the input
  html = "<div class='polaroid " + img[4] +"'>";
  html += "<img class='polaroid' src='./art/" + img[0] + "' style = width:100%>";
  html += "<div class='price'> &pound;" + img[2] + "</div>";
  html += "<div class='title'>" + img[3] + "<br><div class='media'> Artwork on: " + img[1] + "</div></div>";
  html += "</div>"
  document.write(html);
}