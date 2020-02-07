// Sound Const
const slider = document.querySelector("#myRange");
const output = document.querySelector(".SoundValue");
const vid = document.querySelector("#Vid");
const soundBut = document.querySelector(".sound");
const slidercontainer = document.querySelector(".slidecontainer");
// background video variables
var video_list = ["Fate_Zero_Gilgamesh.mp4"];
var start = 0;
var video_count = video_list.length;

let VideoManager = {
    setVideoFunction: function() {
      this.setVideoLoading();
      this.setMuteAttribute();
    },
    //Loading background video without sound
    setVideoLoading: function() {
      let video_player = document.getElementById('Vid');
      let getRandom = Math.floor((Math.random() * (video_count - start)) + start)
      video_player.setAttribute("src", video_list[getRandom]);
      video_player.load();
      video_player.setAttribute('autoplay', 'autoplay');
    },
    //Unmuted video background
    setMuteAttribute: function() {
      $(window).click(function() {
        let video_player = document.getElementById('Vid');
        video_player.muted = false;
      })
    //End of the object
    }
    //End of the object
}

//Making onmouseenter animation on servants icons
$(function() {
for (var i = 0; i <= 7; i++)
  $('#Holder' + i).on("mouseenter", function() {
    let holderID = $(this).attr('data');
    $('#' + holderID).css('transform', 'scale(1.1)');
    $('#' + holderID).css('transition', 'ease-in-out 200ms');
    $('#' + holderID).css('z-index', '1000');

for (var k = 0; k <= 7; k++)
    $('#Holder' + k).on("mouseleave", function() {
        $("#" + holderID).css('transform', 'scale(1.0)');
        $('#' + holderID).css('z-index', '0');
    });
  });
});

// SOUND
//Show sound slider and hide
var sbTyped = false;
$(function() {
  $(".sound").on('click', function() {
    if (!sbTyped)
    {
      $(".slidecontainer").css('visibility', 'visible');
      $(".slidecontainer").css("transform", 'translateX(0px)');
      sbTyped = true;
    }
    else
    {
        $(".slidecontainer").css('visibility', 'hidden');
        $(".slidecontainer").css("transform", 'translateX(200%)');

        sbTyped = false;
    }
  });
});
//Close slider by clicking outside the element itself
$(document).on('click', function(event) {
  if (!$(event.target).closest(".sound").length && !$(event.target).closest(".slidecontainer").length) {
    $(".slidecontainer").css('visibility', 'hidden');
    $(".slidecontainer").css("transform", 'translateX(200%)');


    sbTyped = false;
  }
});
//Controling volume with slider
$(function() {
  output.innerHTML = slider.value + "%";
  vid.volume = slider.value * 0.01;
$(slider).on('input', function() {
  output.innerHTML = slider.value + "%";
  vid.volume = slider.value * 0.01;
  callme();
  });
});

//Changing the sound icon
function callme() {
  if(vid.volume <= 0){
    soundBut.innerHTML = "<i class='fas fa-volume-mute'></i>";
    soundBut.style.right = "27px";
    console.log(vid.volume);
  }
  else if (vid.volume >= 0 && vid.volume <= 0.35) {
    soundBut.innerHTML = "<i class='fas fa-volume-down'></i>";
    soundBut.style.right = "33px";
    console.log("low");
  }
  else if (vid.volume > 0.35 && vid.volume <= 1) {
    soundBut.innerHTML = "<i class='fas fa-volume-up'></i>";
    soundBut.style.right = "24px";
    console.log("medium");
  }
};
