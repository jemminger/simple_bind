this.simpleBind = function() {
  $('input:text').keyup(function() {
    var id = $(this).data('bind');
    $("[bind='" + id + "']").html($(this).val());
  });

  $('select').change(function() {
    var id = $(this).data('bind');
    $("[bind='" + id + "']").html($(this).find("option:selected").text());
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