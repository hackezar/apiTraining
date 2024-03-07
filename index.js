let sliderValue = document.getElementById('myRange').value;
let url = 'https://api.giphy.com/v1/gifs/translate?api_key=yuMrTYXhejsKm76cHucXyCafcb5tEyo6&s=cats&weirdness=' + sliderValue;
async function getGif(url) {
    console.log(url);
    const img = document.getElementById('image');
    if (img.src != '#') {
        img.src = '#';
    }
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
        console.log(img.src);
        } catch(errors) {
            console.log(document.getElementById('search').value);
            console.log(errors);
            getGif('https://api.giphy.com/v1/gifs/translate?api_key=yuMrTYXhejsKm76cHucXyCafcb5tEyo6&s=cats&weirdness=' + document.getElementById('myRange').value);
        }
      });
    } catch(response) {
        console.log(response);
    }
};

let eventHandler = function () {
    console.log('button clicked');
    getGif(url);
}

let eventHandler2 = function(){
    try {
        let input = document.getElementById('search').value;
        let sliderValue = document.getElementById('myRange').value;
        url = 'https://api.giphy.com/v1/gifs/translate?api_key=yuMrTYXhejsKm76cHucXyCafcb5tEyo6&s=' + input + '&weirdness=' + sliderValue; 
        getGif(url);
        document.getElementById('btn').removeEventListener('click', eventHandler);
        document.getElementById('btn').addEventListener('click', eventHandler);
    } catch(errors) {
        console.log(errors);
    }
}
// Event Listener for button
document.getElementById('btn').addEventListener('click', eventHandler);

// Event listener for search bar
document.getElementById('searchIcon').addEventListener('click', eventHandler2);

//slider info. Change number for how weird the slider starts at
let slideValue = 1;
document.getElementById('myRange').value = slideValue;
document.getElementById('slideOutput').innerHTML = slideValue;
//Update output for slider when value is changed
document.getElementById('myRange').oninput = function() {
    switch(this.value) {
        case "1":
            slideOutput.innerHTML = 1;
            if (document.getElementById('search').value == "") {
                url = 'https://api.giphy.com/v1/gifs/translate?api_key=yuMrTYXhejsKm76cHucXyCafcb5tEyo6&s=cats&weirdness=' + this.value; 
            }
            url = 'https://api.giphy.com/v1/gifs/translate?api_key=yuMrTYXhejsKm76cHucXyCafcb5tEyo6&s=' + document.getElementById('search').value + '&weirdness=' + this.value;
            getGif(url);
            break;
        case "2":
            slideOutput.innerHTML = 2;
            if (document.getElementById('search').value) {
                url = 'https://api.giphy.com/v1/gifs/translate?api_key=yuMrTYXhejsKm76cHucXyCafcb5tEyo6&s=cats&weirdness=' + this.value; 
            }
            url = 'https://api.giphy.com/v1/gifs/translate?api_key=yuMrTYXhejsKm76cHucXyCafcb5tEyo6&s=' + document.getElementById('search').value + '&weirdness=' + this.value;
            getGif(url);
            break;
        case "3":
            slideOutput.innerHTML = 3;
            if (document.getElementById('search').value === "") {
                url = 'https://api.giphy.com/v1/gifs/translate?api_key=yuMrTYXhejsKm76cHucXyCafcb5tEyo6&s=cats&weirdness=' + this.value; 
            }
            url = 'https://api.giphy.com/v1/gifs/translate?api_key=yuMrTYXhejsKm76cHucXyCafcb5tEyo6&s=' + document.getElementById('search').value + '&weirdness=' + this.value;
            getGif(url);
            break;
        case "4":
            slideOutput.innerHTML = 4;
            if (document.getElementById('search').value === "") {
                url = 'https://api.giphy.com/v1/gifs/translate?api_key=yuMrTYXhejsKm76cHucXyCafcb5tEyo6&s=cats&weirdness=' + this.value; 
            }
            url = 'https://api.giphy.com/v1/gifs/translate?api_key=yuMrTYXhejsKm76cHucXyCafcb5tEyo6&s=' + document.getElementById('search').value + '&weirdness=' + this.value;
            getGif(url);
            break;
        case "5":
            slideOutput.innerHTML = 5;
            if (document.getElementById('search').value === "") {
                url = 'https://api.giphy.com/v1/gifs/translate?api_key=yuMrTYXhejsKm76cHucXyCafcb5tEyo6&s=cats&weirdness=' + this.value; 
            }
            url = 'https://api.giphy.com/v1/gifs/translate?api_key=yuMrTYXhejsKm76cHucXyCafcb5tEyo6&s=' + document.getElementById('search').value + '&weirdness=' + this.value;
            getGif(url);
            break;
        case "6":
            slideOutput.innerHTML = 6;
            if (document.getElementById('search').value === "") {
                url = 'https://api.giphy.com/v1/gifs/translate?api_key=yuMrTYXhejsKm76cHucXyCafcb5tEyo6&s=cats&weirdness=' + this.value; 
            }
            url = 'https://api.giphy.com/v1/gifs/translate?api_key=yuMrTYXhejsKm76cHucXyCafcb5tEyo6&s=' + document.getElementById('search').value + '&weirdness=' + this.value;
            getGif(url);
            break;
        case "7":
            slideOutput.innerHTML = 7;
            if (document.getElementById('search').value === "") {
                url = 'https://api.giphy.com/v1/gifs/translate?api_key=yuMrTYXhejsKm76cHucXyCafcb5tEyo6&s=cats&weirdness=' + this.value; 
            }
            url = 'https://api.giphy.com/v1/gifs/translate?api_key=yuMrTYXhejsKm76cHucXyCafcb5tEyo6&s=' + document.getElementById('search').value + '&weirdness=' + this.value;
            getGif(url);
            break;
        case "8":
            slideOutput.innerHTML = 8;
            if (document.getElementById('search').value === "") {
                url = 'https://api.giphy.com/v1/gifs/translate?api_key=yuMrTYXhejsKm76cHucXyCafcb5tEyo6&s=cats&weirdness=' + this.value; 
            }
            url = 'https://api.giphy.com/v1/gifs/translate?api_key=yuMrTYXhejsKm76cHucXyCafcb5tEyo6&s=' + document.getElementById('search').value + '&weirdness=' + this.value;
            getGif(url);
            break;
        case "9":
            slideOutput.innerHTML = 9;
            if (document.getElementById('search').value === "") {
                url = 'https://api.giphy.com/v1/gifs/translate?api_key=yuMrTYXhejsKm76cHucXyCafcb5tEyo6&s=cats&weirdness=' + this.value; 
            }
            url = 'https://api.giphy.com/v1/gifs/translate?api_key=yuMrTYXhejsKm76cHucXyCafcb5tEyo6&s=' + document.getElementById('search').value + '&weirdness=' + this.value;
            getGif(url);
            break;
        case "10":
            slideOutput.innerHTML = 10;
            if (document.getElementById('search').value === "") {
                url = 'https://api.giphy.com/v1/gifs/translate?api_key=yuMrTYXhejsKm76cHucXyCafcb5tEyo6&s=cats&weirdness=' + this.value; 
            }
            url = 'https://api.giphy.com/v1/gifs/translate?api_key=yuMrTYXhejsKm76cHucXyCafcb5tEyo6&s=' + document.getElementById('search').value + '&weirdness=' + this.value;
            getGif(url);
            break;
    }
}


getGif(url);
