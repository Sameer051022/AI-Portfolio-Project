document.addEventListener('DOMContentLoaded', function() {
    var options = {
        strings: ["Welcome to My Portfolio!", "I am an AI Developer", "I am an ML Engineer"],
        typeSpeed: 50,
        backSpeed: 25,
        backDelay: 1500,
        startDelay: 1000,
        loop: true,
        showCursor: true,
        cursorChar: '|',
        autoInsertCss: true,
    };

    var typed = new Typed('.typed-text', options);
});

document.querySelectorAll('.project-image-wrapper').forEach(item => {
    item.addEventListener('mouseenter', () => {
        console.log('Mouse entered on project image');
    });
});
