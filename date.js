//jshint esversion:6

exports.getDate = function(){
    const today  = new Date();
    const options = { 
    weekday: 'long',
    day: 'numeric',  
    month: 'long' 
   };
   //here year  will not be printed

   return today.toLocaleDateString("en-US", options); 
   // Saturday, September 17, 2016
};

exports.getDay = function(){
    const today  = new Date();
    const options = { 
    weekday: 'long',
   };
   //here day  will be printed

   return today.toLocaleDateString("en-US", options); 
   // Saturday, September 17, 2016
};
