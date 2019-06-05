//this code will run after everything loads
$(document).ready(function(){
  $("form#survey").submit(function(event){
    event.preventDefault();
    var nameInput = $("#name").val();
    var phoneInput = $("#phone").val();
    var addressInput = $("#address").val();
    var birthInput = $("#birth").val();

    var contact = ("<h3>Name: " + nameInput +
                   "</h3><ul><li>Phone: " + phoneInput +
                   "</li><li>Address: " + addressInput +
                   "</li><li>Birth: " + birthInput) +
                   "</li></ul><hr>";
    $(".output").append(contact);
  });
});
