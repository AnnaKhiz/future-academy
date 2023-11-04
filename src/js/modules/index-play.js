export function hideLayers() {
    const container = document.getElementById('index-video-container');
    const imageCover = document.getElementById('index-video-cover');
    const playBtn = document.getElementById('index-video-play');
    const video = document.getElementById('video');
    let imageCoverHeight = 0;

    playBtn.addEventListener('click', (e) => {
        e.preventDefault();
        imageCoverHeight = imageCover.height;

        container.classList.remove('pseudo')
        imageCover.classList.add('hidden');
        playBtn.classList.add('hidden');
        video.src += '&autoplay=1';
        video.style.visibility = 'initial';
        video.style.position = 'static';

        if (window.screen.width >= 768) {
            video.style.height = '436px';
        } else {
            video.style.height = `${imageCoverHeight}px`;
        }

    })
}

