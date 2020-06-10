const onAnythingSaid = text => {
  $('#talkValue').text(text);
  console.log(text)
};

const onEndEvent = () => {
  
};

const onFinalised = text => {
  $("#stop").hide();
  $("#start").show();

  axios.post('/getAnswer?question='+text,{
    text : $("#passage").val()
  })
  .then(function (response) {
    var msg = new SpeechSynthesisUtterance(response.data);
    console.log(msg);
    window.speechSynthesis.speak(msg);
    $('#answer').text(response.data);
    $('#amswerMsg').show()
   
    setTimeout(()=>{
      $('#amswerMsg').hide()
      $('#amswer').text('');
      $('#recordingMsg').hide()
      $('#startMsg').show()
      $('#talkValue').text('');
    },3000);
    console.log(response);
  })
  console.log(text);
}


try{  
var listener = new SpeechToText(onFinalised, onEndEvent, onAnythingSaid);
}
catch(err){
  console.log(err);
}

$('#stop').hide()
$('#recordingMsg').hide()
$('#amswerMsg').hide()
$("#start").on('click',()=>{
  listener.startListening()
    $("#start").hide();
    $('#recordingMsg').show()
    $('#startMsg').hide()
    $("#stop").show();
})

$("#stop").on('click',()=>{
  listener.stopListening()
    $(this).hide();
    $("#stop").hide();
    $("#start").show();
})

  
  