
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
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3025.7603648763375!2d-73.9972121!3d40.6792487!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a586719dc4b%3A0x523121d75a64632!2s106%202nd%20Pl%2C%20Brooklyn%2C%20NY%2011231%2C%20USA!5e0!3m2!1sen!2spt!4v1730279864666!5m2!1sen!2spt" width="400" height="300" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
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

