
document.addEventListener('DOMContentLoaded', function () {
    // Replace 'YOUR_GIPHY_API_KEY' with your Giphy API key
    const giphyApiKey = 'BBjQnrVbd5BfZdp01bJ6QtdXzagAB8Zf';
    const clockElement = document.getElementById('clock');

    // Update clock
    function updateClock() {
        const now = new Date();
        const hours = now.getHours() % 12 || 12;
        const minutes = now.getMinutes();
        const seconds = now.getSeconds();
        const meridiem = now.getHours() < 12 ? 'AM' : 'PM';
        const timeString = `${hours}:${padZero(minutes)}:${padZero(seconds)} ${meridiem}`;
        clockElement.innerText = timeString;
    }

    // Function to add leading zeros to numbers less than 10
    function padZero(num) {
        return num < 10 ? `0${num}` : num;
    }

    // Fetch and set funny gifs as the background
    function setFunnyGifBackground() {
        const apiUrl = `https://api.giphy.com/v1/gifs/random?api_key=${giphyApiKey}&tag=time&rating=g`;
        
        fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
                const gifUrl = data.data.images.original.url;
                document.body.style.backgroundImage = `url('${gifUrl}')`;
            })
            .catch(error => console.error('Error fetching Giphy data:', error));
    }

    // Update clock every second
    setInterval(updateClock, 1000);

    // Set initial funny gif background
    setFunnyGifBackground();
});
