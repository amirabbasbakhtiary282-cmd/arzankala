(function() {
    'use strict';
    
    if (document.getElementById('slider-initialized')) return;
    const flag = document.createElement('div');
    flag.id = 'slider-initialized';
    document.body.appendChild(flag);
    
    const btnnext = document.getElementById('btnnext');
    const btnprev = document.getElementById('btnprev');
    const mainpic = document.getElementById('mainpic');
    
    if (!btnnext || !btnprev || !mainpic) return;
    
    const images = [
        'vivobook15.jpg',
        'a54.jpg', 
        'iphone13.jpg'
    ];
    
    let current = 0;
    
    mainpic.src = `img/${images[current]}`;
    
    btnnext.onclick = function() {
        current++;
        if (current >= images.length) current = 0;
        mainpic.src = `img/${images[current]}`;
    };
    
    btnprev.onclick = function() {
        current--;
        if (current < 0) current = images.length - 1;
        mainpic.src = `img/${images[current]}`;
    };
    
    if (window.picTimer) clearInterval(window.picTimer);
    
    window.picTimer = setInterval(function() {
        current++;
        if (current >= images.length) current = 0;
        mainpic.src = `img/${images[current]}`;
    }, 3000);
    
    mainpic.addEventListener('mouseenter', function() {
        clearInterval(window.picTimer);
    });
    
    mainpic.addEventListener('mouseleave', function() {
        window.picTimer = setInterval(function() {
            current++;
            if (current >= images.length) current = 0;
            mainpic.src = `img/${images[current]}`;
        }, 3000);
    });
})();
