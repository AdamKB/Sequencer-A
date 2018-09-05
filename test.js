var sound = new Howl({
  src: ['https://raw.githubusercontent.com/AdamKB/Sequencer-A/master/Bongo1.wav']
});

    $(".fa-cube").on("click",function() {
      sound.play();
      swal("bugger");
    });
