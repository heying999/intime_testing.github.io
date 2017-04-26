
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
     document.write('<p class="ying">');
     document.write(eventName + '  --' + eventStartTime + '  ' + eventDate);
     document.write('</p>');


   } else {
     var classNameForEach = 'su-' + index;
     document.write("<p class='su' id=" + classNameForEach + ">");
     document.write(eventDate + '  ' +  eventStartTime + '  --' +  eventName);
     document.write('</p>');


   }


 //  if(creator == "Ying He"){
 //  document.write(creator + "." + eventDate + "." + eventStartTime + "." + eventName);
 // document.write('</p>');
    // for(var i = 0; i < datum.length; i++){
    //   if(datum[i].creator){
    //     var creator = datum['creator']['displayname'];
    //     console.log(creator);
    //   }

    //}
    document.write('</div>');
//
    console.log(creator);
  });

_.each(pageViewData417, function(data, index) {
  var className = '#su-' + index;
  var color = 'rgb(' + index * 5 + ', 0, 0)';
  // $(className).css('color', color);
  var animation = 'loading ' + index/10 + 's ease-out infinite';
  $(className).css('-webkit-animation', animation);
})
