this.simpleBind = function() {

    // select a list of matching elements, context is optional
    // return an array
    function $(selector, context) {
      var context = context || document;
      var selectorType = 'querySelectorAll';
      var is_single_element = selector.indexOf('#') === 0;

      if (is_single_element) {
        selectorType = 'getElementById';
        selector = selector.substr(1, selector.length);
      }

      var results = context[selectorType](selector);
      if (is_single_element) {
        return results;
      }
      else {
        return [].slice.call(results);
      }
    }


    $('input[type=text]').forEach(function(input){
      input.addEventListener('keyup', function(evt) {
        var input = evt.target;
        var id = input.getAttribute('data-bind');
        if (id){
          $("[bind='" + id + "']").forEach(function(el){
            el.innerHTML = input.value;
          });
        }
      });
    });


    $('select').forEach(function(sel){
      sel.addEventListener('change', function(evt) {
        var sel = evt.target;
        var id = sel.getAttribute('data-bind');
        if (id){
          $("[bind='" + id + "']").forEach(function(el){
            var value = [];
            $('option:checked', sel).forEach(function(opt){
              value.push(opt.text);
            });

            el.innerHTML = value.join(', ');
          });
        }
      });
    });


    $('input[type=checkbox]').forEach(function(input){
      input.addEventListener('change', function(evt) {
        var id = input.getAttribute('data-bind');
        if (id){
          $("[bind='" + id + "']").forEach(function(cb){
            cb.checked = input.checked;
          });
        }
      });
    });

  };

  if (typeof defined === "function" ? defined(Turbolinks) : void 0) {
    document.addEventListener('turbolinks:load', function() {
      simpleBind();
    });
  } else {
    document.addEventListener('DOMContentLoaded', function() {
      simpleBind();
    });
  }
