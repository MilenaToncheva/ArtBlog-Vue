import axiosDb from '@/axios-database';

export default {
    name:'AriclesMixin',
    data: function() {
        return { 
            articles: [],
            selectedArticle:Object
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
        async getMyArticles() {
            try {
                const res = await axiosDb.get(`articles.json`);
               const allArticlesRes = res.data.filter(a=>a.authorEmail===localStorage.getItem('email'));
               // console.log(allArticlesRes);
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
selectArticle (){
    this.selectArticle=this.articles.filter(a=>a.id===this.$router.params.id)
    

}
        }
    }
