$('.scroll').scroll(function() {
    console.log('hi')
      var x = $(this).scrollTop();
      $('.image1').css('background-position', '0% ' + parseInt(-x / 3) + 'px');
        $('.image2').css('background-position', '0% ' + parseInt(-x / 3) + 'px');
        $('.image3').css('background-position', '0% ' + parseInt(-x / 3) + 'px');
  });
  console.log('test')