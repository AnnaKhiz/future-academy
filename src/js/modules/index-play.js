export function hideLayers() {
    const container = document.getElementById('index-video-container');
    const imageCover = document.getElementById('index-video-cover');
    const playBtn = document.getElementById('index-video-play');
    const video = document.getElementById('video');
    console.log(video)



    playBtn.addEventListener('click', (e) => {
        console.log('click')
        e.preventDefault();
        container.classList.remove('pseudo')
        imageCover.classList.add('hidden');
        playBtn.classList.add('hidden');

        video.src += '&autoplay=1';

    })
}

