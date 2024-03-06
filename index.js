let url = 'https://api.giphy.com/v1/gifs/translate?api_key=yuMrTYXhejsKm76cHucXyCafcb5tEyo6&s=cats';
async function getGif(url) {
    const img = document.getElementById('image');
    try {
    await fetch(url, {mode: 'cors'})
      .then(function(response) {
        try {
        return response.json();
        } catch (errors) {
            console.log(errors);
        }
      })
      .then(function(response) {
        try {
        img.src = response.data.images.original.url;
        } catch(errors) {
            console.log(errors);
        }
      });
    } catch(response) {
        console.log(response);
    }
};

getGif();

// Event Listener for button
document.getElementById('btn').addEventListener('click', function eventHandler() {
    getGif(url);
});

// Event listener for search bar
document.getElementById('searchIcon').addEventListener('click', function eventHandler2() {
    try {
    let input = document.getElementById('search');
    let url = 'https://api.giphy.com/v1/gifs/translate?api_key=yuMrTYXhejsKm76cHucXyCafcb5tEyo6&s=' + input;
    getGif(url);
    document.getElementById('btn').removeEventListener('click', eventHandler);
    document.getElementById('btn').addEventListener('click', function eventHandler() {
        getGif();
        this.removeEventListener('click', eventHandler);
    });
    } catch(error) {
        console.log('error');
    };
});
