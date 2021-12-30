$(document).ready(function(){

    var API_KEY = "AIzaSyArlZVuFdddxx3p09-hGA9g9SQv2SyXiak"

    var video = " "

    $("#form").submit(function (event) {
        event.preventDefault()

        var search = $("#search").val()

        videoSearch(API_KEY,search,10)
    })

    function videoSearch(key,search,maxResults) {

        $("#videos").empty()

        $.get("https://www.googleapis.com/youtube/v3/search?key=" + key + 
        "&type=video&part=snippet&maxResults=" + maxResults + "&q=" + search, function(data){
            console.log(data)

            data.items.forEach(item => {
                video = `

                <iframe width="370" height="315" src="http://www.youtube.com/embed/${item.id.videoId}" frameborder="0" allowfullscreen=""></iframe>
                
                `
                $("#videos").append(video);

            });
        })
    }

})