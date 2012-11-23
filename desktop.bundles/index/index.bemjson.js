({
    block: 'b-page',
    title: 'Карта Новосибирска',
    head: [
        { elem: 'css', url: '_index.css' },
        { elem: 'css', url: '_index', ie: true },
        { elem: 'js', url: 'http://yandex.st/jquery/1.8.2/jquery.min.js' },
        { elem: 'js', url: '_index.js' }
    ],
    content: [
        { block: 'b-map' }
    ]
})