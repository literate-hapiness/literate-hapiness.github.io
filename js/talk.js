new TypeIt("#tqyxhj", {
        loop: true,
        cursorSpeed: 1000,
        speed: 100
    })
    .type("Remember this date?")
    .pause(1500)
    .break({delay: 500})
    .break({delay: 500})
    .type("<em>10.06.2025</em>")
    .pause(2000)
    .delete(1, {delay: 1000})
    .type("4")
    .pause(2000)
    .delete(null, {
        delay: 500
    })
    .type("How about remember this date")
    .pause(2000)
    .delete(9, {delay: 500})
    .type("<em>today?</em>")
    .pause(2000)
    .delete(null,{
        delay: 500
    })
    .go();

new TypeIt('#talkToXHJ', {
    lifeLike: true,
    cursorSpeed: 1000,
    waitUntilVisible: true,
    speed: 100
}).go();