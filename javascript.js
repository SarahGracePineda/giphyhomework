var giphys = ["Laughing" , "Crying" , "Smiling" , "Frowning" ]

function showButtons (){
  $("#giphybuttons").empty();
  for (var i= 0; i < giphys.length; i++){
    var giphyButton = $("<button>");
  }
}

function newButton(){
$("#addGiphyButton").on("click", function(){
$("#addGiphy").val().trim();
  giphys.push("#giphyButtons");
})

}

function showGiphys(){
    var queryURL = "http://api.giphy.com/v1/gifs/search?q=6OCWhbvoa828u5mWsPeGaa0DJhlwWPhY";
    console.log(queryURL);
    $.ajax({
        url: queryURL,
        method: 'GET'
    });
