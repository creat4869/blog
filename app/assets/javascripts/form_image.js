$(function(){

  if (window.location.href.match(/\/blogs\/\d+\/edit/)){
  $(document).ready(function(){
    var selectedImage = $('#fake_text_box').val().split("/");
    var selectedImageName = selectedImage.slice(-1)[0];
    $('#fake_text_box').val(selectedImageName);
  });
}

  $('#file').on('change', function(){
    $('#fake_text_box').val($(this).prop('files')[0].name);
  });

  $('#file_upload').on('click', function(){
    $('#file').click();
  });

  $('#fake_text_box').on('click', function(){
    $('#file').click();
  });
});