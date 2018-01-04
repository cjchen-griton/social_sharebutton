// add this rail gallery effect
$(document).on('click', '#socialShare > .socialBox', function() {

  var self = $(this);
  var element = $('#socialGallery a');
  //
  if (!self.hasClass('bounce')) {
    self.addClass('bounce');
    self.removeClass('close');
  } else {
      self.removeClass('bounce');
      self.addClass('close');
    }
});
