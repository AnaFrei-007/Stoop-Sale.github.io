
// Store original content
const originalContent = document.body.innerHTML;

// Audio element
var audio = new Audio('./assets/Stoop-Sale.mp3');
var isPlaying = false;

// Function to toggle play/pause
function togglePlay() {
    if (isPlaying) {
        audio.pause();
        isPlaying = false;
    } else {
        audio.play();
        isPlaying = true;
    }
}

// Event listener for clicking the bus stop sign
document.getElementById('bus-stop').addEventListener('click', function() {
    togglePlay();
});


// Event Listener for clicking the attic
document.getElementById('attic').addEventListener('click', loadAtticDetails);

//Function to load attic details
function loadAtticDetails(){
    document.body.classList.add('attic-details');
    document.body.innerHTML = `
        <div class="meme-box" id = "stoned-fox">
            <img src = "./assets/images/stoned-fox.png" alt = "meme" class = "meme-image">
            <h1>T.F.W.</h1>
            <p>YOU PULLED AN ALL NIGHTER FOR THE STOOP SALE</p>
    `;    

    // Add event listener to back button
    document.getElementById('stoned-fox').addEventListener('click', function() {
        // Restore the original content
        document.body.innerHTML = originalContent;
        document.body.classList.remove('attic-details');

        // Reattach the event listeners
        document.getElementById('door').addEventListener('click', loadEventDetails);
        document.getElementById('bus-stop').addEventListener('click', function() {
            togglePlay();
        });
        document.getElementById('chalkboard').addEventListener('click', loadChalkboardDetails);
        document.getElementById('attic').addEventListener('click', loadAtticDetails);

    });
}


// Event listener for clicking the chalkboard
document.getElementById('chalkboard').addEventListener('click', loadChalkboardDetails);

// Function to load chalkboard details
function loadChalkboardDetails(){
    document.body.classList.add('chalk-details');
    document.body.innerHTML = '<div class="container-img" id="back-button"><img src="./assets/images/Chalkbutton.png" class="content-img" alt="Back"></div><img src = "./assets/images/Chalkboard.png" alt = "chalkboard" class = "background"> <div id = "back-button-chalk"> </div>';

    // Add event listener to back button
    document.getElementById('back-button-chalk').addEventListener('click', function() {
        // Restore the original content
        document.body.innerHTML = originalContent;
        document.body.classList.remove('chalk-details');

        // Reattach the event listeners
        document.getElementById('door').addEventListener('click', loadEventDetails);
        document.getElementById('bus-stop').addEventListener('click', function() {
            togglePlay();
        });
        document.getElementById('chalkboard').addEventListener('click', loadChalkboardDetails);
        document.getElementById('attic').addEventListener('click', loadAtticDetails);

    });
}


// Event listener for clicking the door
document.getElementById('door').addEventListener('click', loadEventDetails);

// Function to load event details
function loadEventDetails() {
    // Define the event details HTML
    document.body.classList.add('event-details');
    document.body.innerHTML = `
        <div class="container-img" id="back-button"><img src="./assets/images/Button_Animation.png" class="content-img" alt="Back"></div>

        <div class="new-content">
            <h1>Event Details</h1>
            <p>Date: July 15, 2024</p>
            <p>Time: 10:00 AM - 4:00 PM</p>
            <p>Location: Carroll Gardens, South Brooklyn, New York City</p>
            <p>Find your next favorite outfit,  home accessories,  and more at our stoop sale!</p>
        </div>

        <div class ="new-content icons">
            <i id="share-instagram" class="fa-brands fa-instagram fa-2xl icons" style="color: #ff7a7a;"></i>
            <i id = "share-facebook" class="fa-brands fa-facebook fa-2xl icons" style="color: #ff7a7a;"></i>
            <i id = "share-whatsapp" class="fa-brands fa-square-x-twitter fa-2xl icons" style="color: #ff7a7a;"></i>
            <i id="share-link" class="fa-solid fa-link fa-2xl icons" style="color: #ff7a7a;"></i>
        </div>

        <div class = "map-content">
            <a href= "https://www.google.com/maps/place/106+2nd+Pl,+Brooklyn,+NY+11231,+USA/@40.6792527,-73.999787,17z/data=!3m1!4b1!4m6!3m5!1s0x89c25a586719dc4b:0x523121d75a64632!8m2!3d40.6792487!4d-73.9972121!16s%2Fg%2F11csk_cgdg?entry=ttu"
            target= "_blank">
            <img src ="./assets/images/map.png" alt = "map screenshot"></a>
        </div>
    `;
    
    // Add event listener to the back button
    document.getElementById('back-button').addEventListener('click', function() {
        // Restore the original content
        document.body.innerHTML = originalContent;
        document.body.classList.remove('event-details');

        // Reattach the event listeners
        document.getElementById('door').addEventListener('click', loadEventDetails);
        document.getElementById('bus-stop').addEventListener('click', function() {
            togglePlay();
        });
        document.getElementById('chalkboard').addEventListener('click', loadChalkboardDetails);
        document.getElementById('attic').addEventListener('click', loadAtticDetails);

    });
    
    //Event listeners for social media sharing
    document.getElementById('share-instagram').addEventListener('click', function() {
        window.open('https://www.instagram.com/?url=' + encodeURIComponent(window.location.href), '_blank');
    });
    document.getElementById('share-facebook').addEventListener('click', function() {
        window.open('https://www.facebook.com/sharer/sharer.php?u=' + encodeURIComponent(window.location.href), '_blank');
    });

    document.getElementById('share-whatsapp').addEventListener('click', function() {
        window.open('https://twitter.com/intent/tweet?url=' + encodeURIComponent(window.location.href), '_blank');
    });

    document.getElementById('share-link').addEventListener('click', function() {
        const link = 'sms:&body=' + encodeURIComponent('Check this out: ' + window.location.href);
        window.open(link, '_blank');
    });

}

