const apiKey = "Q9Q5grNhUpiVkB30FEZGfAFnOIyIfvvg"
$('body').css({'backgroundColor': '#5C4033'})
$('h1').css({'color': 'yellow'})
$('#removeBtn').css({'backgroundColor': 'red', "color": 'white'})
$('#goBtn').css({'backgroundColor': 'blue', "color": 'white'})

async function getData(search){
    const response = await axios.get(`http://api.giphy.com/v1/gifs/search?q=${search}&api_key=${apiKey}`);
    let url = response.data.data[0].images.downsized.url
    let gif = document.createElement('img');
    gif.src = url
    document.querySelector('#div').appendChild(gif)
}

const form = document.querySelector('#form')
form.addEventListener('submit', function(e){
    e.preventDefault()

    let searchVal = document.querySelector('#search').value
    getData(searchVal)
    

    document.querySelector('#search').value = ""
    
})

$("#removeBtn").click(function() {
    $("img").remove();
  });

