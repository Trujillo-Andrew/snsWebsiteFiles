$(function(){
  $('#hide1').hide();$('#occasion').change(function() {
      if ($('#occasion').val() == 'Delivery') {
          $('#hide1').show();
      }
      else {
          $('#hide1').hide();
      }
  });
});