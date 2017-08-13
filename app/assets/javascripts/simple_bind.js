this.simpleBind = function() {
  return $('input:text').keyup(function() {
    var id;
    id = $(this).data('bind');
    return $("[bind='" + id + "']").html($(this).val());
  });
};

if (typeof defined === "function" ? defined(Turbolinks) : void 0) {
  $(document).on('turbolinks:load', function() {
    return simpleBind();
  });
} else {
  $(document).on('ready', function() {
    return simpleBind();
  });
}