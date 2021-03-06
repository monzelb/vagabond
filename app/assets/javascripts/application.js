// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .

$(document).on('turbolinks:load', function() {


  //initializes dropdown location menu on new article form
  $('select').material_select();

    // for HTML5 "required" attribute
  $("select[required]").css({
        display: 'inline',
        position: 'absolute',
        float: 'left',
        padding: 0,
        margin: 0,
        height: 0,
        width: 0,
        top: '2em',
        left: '3em'
  });




  //initializes content textbox on new article form
  $('#textarea1').val('New Text');
  $('#textarea1').trigger('autoresize');


  $('.slider').slider({fullWidth: true, height: 500});
  $(".button-collapse").sideNav();
  $(".dropdown-button").dropdown();

  $('.collapsible').collapsible();

});
