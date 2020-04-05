 <template>
 
  <div>
<h1>Edit Article</h1>
<form  v-on:submit.prevent="editArticle(id,article)">
    
    <div class="form-group row">
      <!-- Title -->
      <label for="inputTitle" class="col-sm-1 offset-sm-3 col-form-label">Title</label>
      <div class="col-sm-4">
        <input v-model="article.title" value="article.title" mdbInput type="text"  name="title" class="form-control" id="inputTitle" 
     v-on:blur="$v.article.title.$touch()">
      </div>
      <template v-if="$v.article.title.$error">
          
        <p class="err" v-if="!$v.article.title.required">Please enter a title.</p>
        <p class="err" v-else-if="!$v.article.title.minlength">The title should have atleast 6 symbols.</p>
      </template>
    </div>
    <!--Image URL -->
    <div class="form-group row">
        <label for="inputImageUrl" class="col-sm-1 offset-sm-3 col-form-label">Image URL</label>
        <div class="col-sm-4">
          <input v-model="article.imageUrl" name="imageUrl"  mdbInput type="text" class="form-control" id="inputImageUrl" 
          placeholder="Image URL" v-on:blur="$v.article.imageUrl.$touch()">
          <template v-if="$v.article.imageUrl.$error">
          <p class="err" v-if="!$v.article.imageUrl.required" >Please enter an image URL</p>
          </template>
        </div>
      </div>      
    <!-- Content -->
    <div class="form-group row">
        <label for="textAreaContent" class="col-sm-1 offset-sm-3 col-form-textarea">Content</label>
        <div class=" col-sm-4">
            <textarea v-model="article.content" name="content" type="text" id="form75" class="form-control md-textarea col-sm-20"
             rows="5" mdbInput placeholder="Content" v-on:blur="$v.article.content.$touch()"></textarea>
        </div>
        <template v-if="$v.article.content.$error">
        <p class="err" v-if="!$v.article.content.required">
            Please enter the content of the article.</p>
        <p class="err" v-else-if="!$v.article.content.minlength">The content should be atleast 20 symbols.</p>
        </template>
    </div>
    <!-- Author -->
  <div class="form-group row">
    <label for="authorName" class="col-sm-1 offset-sm-3 col-form-label">Author</label>
    <div class="col-sm-4">
      <input v-model="article.authorName" name="authorName"  mdbInput type="text" class="form-control" id="inputAuthorName" 
      placeholder="Author Name" v-on:blur="$v.article.authorName.$touch()" >
     <template v-if="$v.article.authorName.$error">
      <p class="err" v-if="!$v.article.authorName.required">Please enter author's name.</p>
     </template>
   </div>
  </div> 
  <!-- Author Email -->
  <div class="form-group row">
    <label for="authorEmail" class="col-sm-1 offset-sm-3 col-form-label">Author email</label>
    <div class="col-sm-4">
      <input v-model="article.authorEmail" name="authorEmail"  mdbInput type="text" class="form-control" id="inputAuthorEmail" 
      placeholder="Author Email" required pattern="^[^\s@]+@[^\s@]+\.[^\s@]+$" v-on:blur="$v.article.authorEmail.$touch()">
      <template v-if="$v.article.authorEmail.$error">
      <p class="err" v-if="!$v.article.authorEmail.required">Please enter author's email.</p>
      <p class="err" v-else-if="!$v.article.authorEmail.email" >Invalid Email!</p>
      </template>
    </div>
  </div>   
    <!-- Button -->
    <div class="form-group row">
      <div class="col-sm-12 offset-sm-5">
        <button v-bind:disabled="$v.$invalid"  class="col-sm-2 my-4 btn btn-info"  type="submit" mdbBtn color="info">Edit</button>
      </div>
    </div>
    
  </form>


  </div>

</template>

<script>
import ArticlesMixin from '@/mixins/articles-mixin.js';
import {validationMixin} from 'vuelidate';
import {required, email, minLength} from 'vuelidate/lib/validators';
export default {
name:'AppArticleEdit',
mixins:[ArticlesMixin,validationMixin],
data(){
  return{
    id:''
  }
},

created(){
 this.id=this.$route.params.id;
 
  this.getArticle(this.id);
   console.log(this.article);
},
validations:{
 article:{
        title:{
        required,
        minlength: minLength(6)
        },
    imageUrl:{
        required
        },
    content:{
        required,
        minlength:minLength(20)
        },
    authorName:{
        required
        },
    authorEmail:{
        required,
        email
        }
}
},

methods:{

}
}
</script>

<style>

</style>