var callback = function(){
    const el = document.createElement('img');
    el.src = 'images/category.jpg'
    document.body.appendChild(el);
  };

  if (
      document.readyState === "complete" ||
      (document.readyState !== "loading" && !document.documentElement.doScroll)
  ) {
    callback();
  } else {
    document.addEventListener("DOMContentLoaded", callback);
  }