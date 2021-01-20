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
        posts: {
            cards: [
                {
                tag: 'photography',
                title: 'how to take better concert pictures in 30 seconds',
                imgURL: 'blog/img/blog-49.jpg',
                description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi placeat, harum at maiores expedita deleniti?',
                visible: false,
                date: 'January 12, 2020',
                author: 'John Doe',
                comments: 12,
                },
                {
                tag: 'photography',
                title: 'how to take better concert pictures in 30 seconds',
                imgURL: 'blog/img/blog-49.jpg',
                description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi placeat, harum at maiores expedita deleniti?',
                visible: false,
                date: 'January 12, 2020',
                author: 'John Doe',
                comments: 12,
                },
                {
                tag: 'photography',
                title: 'how to take better concert pictures in 30 seconds',
                imgURL: 'blog/img/blog-49.jpg',
                description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi placeat, harum at maiores expedita deleniti?',
                visible: false,
                date: 'January 12, 2020',
                author: 'John Doe',
                comments: 12,
                },
                {
                tag: 'photography',
                title: 'how to take better concert pictures in 30 seconds',
                imgURL: 'blog/img/blog-49.jpg',
                description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi placeat, harum at maiores expedita deleniti?',
                visible: false,
                date: 'January 12, 2020',
                author: 'John Doe',
                comments: 12,
                },
                {
                tag: 'photography',
                title: 'how to take better concert pictures in 30 seconds',
                imgURL: 'blog/img/blog-49.jpg',
                description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi placeat, harum at maiores expedita deleniti?',
                visible: false,
                date: 'January 12, 2020',
                author: 'John Doe',
                comments: 12,
                },
                {
                tag: 'photography',
                title: 'how to take better concert pictures in 30 seconds',
                imgURL: 'blog/img/blog-49.jpg',
                description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi placeat, harum at maiores expedita deleniti?',
                visible: false,
                date: 'January 12, 2020',
                author: 'John Doe',
                comments: 12,
                },
                
            ],
            popular: [
                {
                tag: 'photography',
                title: 'simple ways to have a pretty face',
                imgURL: 'blog/img/blog-55.jpg',
                description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi placeat, harum at maiores expedita deleniti?',
                visible: false,
                date: 'January 19, 2020',
                author: 'John Doe',
                comments: 12,
                },
                {
                tag: 'photography',
                title: 'simple ways to have a pretty face',
                imgURL: 'blog/img/blog-55.jpg',
                description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi placeat, harum at maiores expedita deleniti?',
                visible: false,
                date: 'January 19, 2020',
                author: 'John Doe',
                comments: 12,
                },
                {
                tag: 'photography',
                title: 'simple ways to have a pretty face',
                imgURL: 'blog/img/blog-55.jpg',
                description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi placeat, harum at maiores expedita deleniti?',
                visible: false,
                date: 'January 19, 2020',
                author: 'John Doe',
                comments: 12,
                },
                {
                tag: 'photography',
                title: 'simple ways to have a pretty face',
                imgURL: 'blog/img/blog-55.jpg',
                description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi placeat, harum at maiores expedita deleniti?',
                visible: false,
                date: 'January 19, 2020',
                author: 'John Doe',
                comments: 12,
                },
                {
                tag: 'photography',
                title: 'simple ways to have a pretty face',
                imgURL: 'blog/img/blog-55.jpg',
                description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi placeat, harum at maiores expedita deleniti?',
                visible: false,
                date: 'January 19, 2020',
                author: 'John Doe',
                comments: 12,
                },
                
            ],
            recent: [
                {
                tag: 'photography',
                title: 'main reasons to stop texting and driving',
                imgURL: 'blog/img/blog-65.jpg',
                description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi placeat, harum at maiores expedita deleniti?',
                visible: false,
                date: 'August 8, 2020',
                author: 'John Doe',
                comments: 12,
                },
                {
                tag: 'photography',
                title: 'main reasons to stop texting and driving',
                imgURL: 'blog/img/blog-65.jpg',
                description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi placeat, harum at maiores expedita deleniti?',
                visible: false,
                date: 'August 8, 2020',
                author: 'John Doe',
                comments: 12,
                },
                {
                tag: 'photography',
                title: 'main reasons to stop texting and driving',
                imgURL: 'blog/img/blog-65.jpg',
                description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi placeat, harum at maiores expedita deleniti?',
                visible: false,
                date: 'August 8, 2020',
                author: 'John Doe',
                comments: 12,
                },
                {
                tag: 'photography',
                title: 'main reasons to stop texting and driving',
                imgURL: 'blog/img/blog-65.jpg',
                description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi placeat, harum at maiores expedita deleniti?',
                visible: false,
                date: 'August 8, 2020',
                author: 'John Doe',
                comments: 12,
                },
                {
                tag: 'photography',
                title: 'main reasons to stop texting and driving',
                imgURL: 'blog/img/blog-65.jpg',
                description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi placeat, harum at maiores expedita deleniti?',
                visible: false,
                date: 'August 8, 2020',
                author: 'John Doe',
                comments: 12,
                },
                
            ],
            featured: [
                {
                tag: 'recipies',
                title: 'tips to help you quickly prepare your lunch',
                imgURL: 'blog/img/blog-65.jpg',
                description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi placeat, harum at maiores expedita deleniti?',
                visible: false,
                date: 'August 8, 2020',
                author: 'John Doe',
                author_img: 'blog/img/blog-68.jpg',
                author_overview: 'lorem ipsum...',
                comments: 12,
                },
            ],
            featAuthor: [
                {
                tag: 'recipies',
                title: 'tips to help you quickly prepare your lunch',
                imgURL: 'blog/img/blog-65.jpg',
                description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi placeat, harum at maiores expedita deleniti?',
                visible: false,
                date: 'August 8, 2020',
                author: 'John Doe',
                author_img: 'blog/img/blog-68.jpg',
                author_overview: 'lorem ipsum...',
                comments: 12,
                },
            ],
        },    
    },
    computed: {
        cardpost: function(){
            return this.posts.cards;
        },
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