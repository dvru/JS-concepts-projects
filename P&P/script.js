const videoElement = document.getElementById('video');
const button = document.getElementById('button');

// Prompt user to select media, pass to video element, then play
async function selectMedia() {
    try {
        const media = await navigator.mediaDevices.getDisplayMedia();
        videoElement.srcObject = media;
        videoElement.onloadedmetadata = () => {
            videoElement.play();
        }
    } catch (error) {
        console.log('whoops, error here:', error)
    }
}

// on Load
selectMedia();