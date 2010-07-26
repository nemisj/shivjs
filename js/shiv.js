var shiv = {
  version : '0.01',
  loading : false,
  modules : {}
};

shiv.xhr = (function() {
  if (typeof XMLHttpRequest != "undefined") {
      return new XMLHttpRequest();
  } else if (typeof ActiveXObject != "undefined") {
      return new ActiveXObject("Microsoft.XMLHTTP");
  } else {
      throw new Error("XMLHttpRequest not supported");
  }
})();

shiv.post = function(opts) {
  var xhr = shiv.xhr;

  xhr.open(
    "POST", 
    opts.url   || '/' , 
    opts.async || false
  );

  xhr.setRequestHeader(
    "Content-type", 
    opts.contentType || "application/json"
  );

  xhr.setRequestHeader("Content-length", opts.body.length);
  xhr.setRequestHeader("Connection", "close");

}

