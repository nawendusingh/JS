// window is the global  object in client side JS
// Window-->Method,Object,Properties

// window.console.log(123);

// Alert
// window.alert('hello world');

// prompt
// asks for input and shows it den
// const input=prompt();
// alert(input);


// confirm
// used while deleting
 // if (confirm('Are u sure?')){
 //   console.log('Yes');
 // }else{
 //   console.log('no');
 // }
 // ** use dom and o/p good looking botstrap alert instead of these

 // Properties
  let val;
// outerheight & width
//   val=window.outerHeight;
//   val=window.outerWidth;
//
// // Inner height & width e.g. scrollbars etc
//   val=window.innerHeight;
  // val=window.innerWidth;


// ***Scroll Points-->u scroll down and animation happens
// val=window.scrollY;
// val=window.scrollX;
// location object
// val=window.location;
// val=window.location.hostname;
// val=window.location.port;
// val=window.location.href;
// // ***search parameter -->extract link by users/forms by user
// val=window.location.search;
// ***redirect->done usually within the website
// window.location.href ='http://google.com'


// ***reload-->use in function not in global scope
// window.location.reload();

// ***History obj takes u 2 previous websites
// window.history.go(-4);
// val=window.history.length;

// NAVIGATOR Object deals with the actual browser e.g.chrome,firefox;
// geolocator/user-agent/storage/vendor/platform

val= window.navigator;
val= window.navigator.appName;
val= window.navigator.appVersion;
val= window.navigator.userAgent;
val= window.navigator.platform;
val= window.navigator.vendor;
val= window.navigator.language;

console.log(val);
