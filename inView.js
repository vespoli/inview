/************
Executes an action when element comes into viewport
Derived from Unveil:  http://luis-almeida.github.io/unveil/

$("img").inView(function(){...});
OR
$("img").inView(function(){...}, 200); to trigger 200px before in viewport
OR
$("img").inView(function(){...}, 200, function(){..}); pass custom function which returns boolean and cancels trigger
************/


;(function($) {

  $.fn.inView = function(action, threshold, except) {

    var $w = $(window),
        th = threshold || 0,
        items = this,
        ex = except || false,
        loaded;

    this.one("inView", function() {
      if (typeof action === "function") {action.call(this);}
    });

    function inView() {
      var inview = items.filter(function() {
        var $e = $(this);
        if (except) {return;}
        var wt = $w.scrollTop(),
            wb = wt + $w.height(),
            et = $e.offset().top,
            eb = et + $e.height();

        return eb >= wt - th && et <= wb + th;
      });

      loaded = inview.trigger("inView");
      items = items.not(loaded);
    }

    //TODO: Debounce this
    $w.scroll(inView);
    $w.resize(inView);

    inView();

    return this;

  };

})(window.jQuery || window.Zepto);