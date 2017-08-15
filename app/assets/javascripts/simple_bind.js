this.simpleBind = function() {
  $('input:text').keyup(function() {
    var id = $(this).data('bind');
    if (id){ $("[bind='" + id + "']").html($(this).val()) }
  });

  $('select').change(function() {
    var id = $(this).data('bind');
    if (id){ $("[bind='" + id + "']").html($(this).find("option:selected").text()) }
  });
  
  $('input[type=checkbox]').change(function() {
    var id = $(this).data('bind');
    if (id){ 
      if($(this).is(":checked")) {
        $("[bind='" + id + "']").prop('checked', true);
      } else {
        $("[bind='" + id + "']").prop('checked', false);
      }
    }
  });
};

if (typeof defined === "function" ? defined(Turbolinks) : void 0) {
  $(document).on('turbolinks:load', function() {
    simpleBind();
  });
} else {
  $(document).on('ready', function() {
    simpleBind();
  });
}