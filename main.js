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
                {
                tag: 'photografy',
                title: 'how to take better concert pictures in 30 seconds',
                imgURL: 'blog/img/blog-49.jpg',
                description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi placeat, harum at maiores expedita deleniti?',
                visible: false,
                },
                {
                tag: 'photografy',
                title: 'how to take better concert pictures in 30 seconds',
                imgURL: 'blog/img/blog-49.jpg',
                description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi placeat, harum at maiores expedita deleniti?',
                visible: false,
                },
                {
                tag: 'photografy',
                title: 'how to take better concert pictures in 30 seconds',
                imgURL: 'blog/img/blog-49.jpg',
                description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi placeat, harum at maiores expedita deleniti?',
                visible: false,
                },
                {
                tag: 'photografy',
                title: 'how to take better concert pictures in 30 seconds',
                imgURL: 'blog/img/blog-49.jpg',
                description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi placeat, harum at maiores expedita deleniti?',
                visible: false,
                },
                {
                tag: 'photografy',
                title: 'how to take better concert pictures in 30 seconds',
                imgURL: 'blog/img/blog-49.jpg',
                description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi placeat, harum at maiores expedita deleniti?',
                visible: false,
                },
            ], 
        posts: {
            popular: [
                {
                    title: 'simple ways to have a pretty face',
                    date: '12 Jan 2020',
                    imgURL: 'blog/img/blog-55.jpg',
                },
                {
                    title: 'simple ways to have a pretty face',
                    date: '12 Jan 2020',
                    imgURL: 'blog/img/blog-55.jpg',
                },
                {
                    title: 'simple ways to have a pretty face',
                    date: '12 Jan 2020',
                    imgURL: 'blog/img/blog-55.jpg',
                },
                {
                    title: 'simple ways to have a pretty face',
                    date: '12 Jan 2020',
                    imgURL: 'blog/img/blog-55.jpg',
                },
                {
                    title: 'simple ways to have a pretty face',
                    date: '12 Jan 2020',
                    imgURL: 'blog/img/blog-55.jpg',
                },
            ],
            recent: [
                {
                    title: 'main reasons to stop texting and driving',
                    date: '19 Jan 2020',
                    imgURL: 'blog/img/blog-65.jpg',
                },
                {
                    title: 'main reasons to stop texting and driving',
                    date: '19 Jan 2020',
                    imgURL: 'blog/img/blog-65.jpg',
                },
                {
                    title: 'main reasons to stop texting and driving',
                    date: '19 Jan 2020',
                    imgURL: 'blog/img/blog-65.jpg',
                },
                {
                    title: 'main reasons to stop texting and driving',
                    date: '19 Jan 2020',
                    imgURL: 'blog/img/blog-65.jpg',
                },
                {
                    title: 'main reasons to stop texting and driving',
                    date: '19 Jan 2020',
                    imgURL: 'blog/img/blog-65.jpg',
                },
            ],
            featured: [
                {
                    title: 'tips to help you quickly prepare your lunch',
                    tag: 'recipes',
                    author: 'John Doe',
                    author_img: 'blog/img/blog-68.jpg',
                    author_overview: 'lorem ipsum...'
                },
            ]
        },    
    },
    computed: {
        popularpost: function() {
            return this.posts.popular;
        },
        recentpost: function(){
            return this.posts.recent;
        }
    },
    methods: {},
    created(){},
    mounted(){},

});