export function rangeSlider() {
    var slider = document.getElementById('slider');

    noUiSlider.create(slider, {
        start: [1, 24],
        connect: true,
        range: {
            'min': 1,
            'max': 24
        },
        step: 1,
    });
}

