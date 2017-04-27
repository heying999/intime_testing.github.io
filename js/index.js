
var pageView = {};


  _.each(pageViewData417, function(datum, index){

    var eventName = datum['summary'];
    var creator = datum['creator']['displayName'];
    var eventDate = datum['start'].dateTime.substring(5,10);
    var eventStartTime = datum['start'].dateTime.substring(11,16);
    var eventEndTime = datum['end'].dateTime.substring(11,19);
    var eventCreateTime = (datum['created'].substring(0,10) + " " + datum['created'].substring(11,19));
    var eventUpdatedTime = (datum['updated'].substring(0,10) +  " " + datum['updated'].substring(11,19));
    document.write('<div id="gradient" />');
    document.write('</div>');
    document.write('<div class="container">');
  if(creator == "Ying He"){
     var classNameForEach = 'ying-' + index;
     document.write("<p class='ying' id=" + classNameForEach + ">");
     document.write(eventName + '  --' + eventStartTime + '  ' + eventDate);
     document.write('</p>');


   } else {
     var classNameForEach = 'su-' + index;
     document.write("<p class='su' id=" + classNameForEach + ">");
     document.write(eventDate + '  ' +  eventStartTime + '  --' +  eventName);
     document.write('</p>');

   }

    document.write('</div>');
//

  });

_.each(pageViewData417, function(data, index) {
  var ranNumber = (_.random(0, 9));
  var ranNumber2 = (_.random(0, 13));
  var classNameSu = '#su-' + index;
  var classNameYing = '#ying-' + index;
  //var color = 'rgb(' + index * 5 + ', 0, 0)';
  // $(className).css('color', color);
  var animationSu = 'loading ' + ranNumber + 's ease-out infinite';
  var animationYing = 'loading ' + ranNumber2 + 's ease-out infinite';
  $(classNameSu).css('-webkit-animation', animationSu);
  $(classNameYing).css('-webkit-animation', animationYing);
  console.log(ranNumber);
});
