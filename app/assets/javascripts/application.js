// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .

$(document).ready(function() {
$('.Danger').on('click', function() {
    var inputValue = ($('input').val());
    console.log(inputValue);
  $.ajax({
      type: "POST",
      url: "/shoes",
      data: { "shoe": { "material": inputValue } },
      success: function(data) {
        var show_link = "<a href = '/shoes/" + data.id + "'>Show</a>"
        var edit_link = "<a href = '/shoes/" + data.id + "'>Edit</a>"
        var delete_link = "<a href = '/shoes/" + data.id + "'data-method='delete'>Destroy</a>"

        $("tbody").append("<tr>" + "<td>" + data.material + "<td>" + show_link + "<td>" + edit_link + "<td>" + delete_link + "</tr>")

      }
    })
  })


});


//use appendto or other functions on the created object to make it show up on the page
