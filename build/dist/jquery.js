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

// Hide Cupcake Selections

$(function(){
    $('#hideCC').hide();$('#dessertChoice').change(function() {
        if ($('#dessertChoice').val() == 'Cupcakes') {
            $('#hideCC').show();
        }
        else {
            $('#hideCC').hide();
        }
    });
  });

//   Hide Cake Selections
$(function(){
    $('#hideC').hide();$('#dessertChoice').change(function() {
        if ($('#dessertChoice').val() == 'Cake') {
            $('#hideC').show();
        }
        else {
            $('#hideC').hide();
        }
    });
  });

//   Other Dessert Options
$(function(){
    $('#hideOther').hide();$('#dessertChoice').change(function() {
        if ($('#dessertChoice').val() == 'Other') {
            $('#hideOther').show();
        }
        else {
            $('#hideOther').hide();
        }
    });
  });

//   Both Dessert Options
//   Other Dessert Options
$(function(){
    $('#hideBoth').hide();$('#dessertChoice').change(function() {
        if ($('#dessertChoice').val() == 'Cake & Cupcakes') {
            $('#hideBoth').show();
        }
        else {
            $('#hideBoth').hide();
        }
    });
  });