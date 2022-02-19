$.noConflict();
jQuery(document).ready(function ($) {
  $("#to-login-form").click(function (event) {
    event.stopPropagation();
    $(".pre-modal-window").addClass("is-active");
    $("#form-1").addClass("is-active");
  });

  let loginForm = $(".pre-modal");
  $(document).mouseup(function (e) {
    if (!loginForm.is(e.target) && loginForm.has(e.target).length === 0) {
      $("#form-1").trigger("reset").removeClass("is-active");
      $(".form-message").removeClass("invalid");
      $(".pre-modal-window").removeClass("is-active");
    }
  });

  let pre_modal_btn_close = $('#pre-modal-btn-close');
  pre_modal_btn_close.click(function (event) {
    event.stopPropagation();
    $("#form-1").trigger("reset").removeClass("is-active");
    $(".form-message").removeClass("invalid");
    $(".pre-modal-window").removeClass("is-active");
  });
});


