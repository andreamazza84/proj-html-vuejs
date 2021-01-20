// - suddivisione sommaria delle aree del sito.
// - individuare le parti che si possono ripetere e implementarle con Vue
// - iniziare l'inserimento dei singoli elementi che si ripetono
// - individuare elementi che possono essere rimpiazzati da componenti 
// - inserire transizioni/animazioni


//Navbar
// Vue.component('navbar', {
//     template: '<div>123</div>',
// });


let app = new Vue({
    el: '#root',
    data: {
        headerTopMenu: ['sign in', 'about us', 'contact us', 'buy now'],
        headerBottomMenu: ['home', 'elements', 'features', 'pages', 'portfolio', 'blog', 'shop'],
        cards:[
                {
                tag: 'photografy',
                title: 'how to take better concert pictures in 30 seconds',
                imgURL: 'blog/img/blog-49.jpg',
                description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi placeat, harum at maiores expedita deleniti?',
                visible: false,
                },
            ], 
    },
    methods: {

    },
    created(){},
    mounted(){},

});