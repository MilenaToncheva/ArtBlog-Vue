import axiosDb from '@/axios-database';

export default {
    name:'AriclesMixin',
    data: function() {
        return { 
            articles: [],
            myArticles:[]
         }
    },
    methods: {
        async getAllArticles() {
            try {
                const res = await axiosDb.get(`articles.json`);
                const allArticlesRes = res.data;
                for (const articleId in allArticlesRes) {
                  this.articles.push({
                    articleId,
                    ...   allArticlesRes[articleId]
                  });
                }
            } catch(err) {
                console.log(err);
            }
        },
         getMyArticles(){
           
           this.myArticles=this.articles.filter(a=>a.authorEmail===localStorage.getItem('email'));
        }
    }
}