<template>
  <div>
<h1>Create Article</h1>
<form  v-on:submit.prevent="articleCreateHandler">
    
    <div class="form-group row">
      <!-- Title -->
      <label for="inputTitle" class="col-sm-1 offset-sm-3 col-form-label">Title</label>
      <div class="col-sm-4">
        <input v-model="title" mdbInput type="text"  name="title" class="form-control" id="inputTitle" 
        placeholder="Title" v-on:blur="$v.title.$touch()">
      </div>
      <template v-if="$v.title.$error">
          
        <p class="err" v-if="!$v.title.required">Please enter a title.</p>
        <p class="err" v-else-if="!$v.title.minlength">The title should have atleast 6 symbols.</p>
      </template>
    </div>
    <!--Image URL -->
    <div class="form-group row">
        <label for="inputImageUrl" class="col-sm-1 offset-sm-3 col-form-label">Image URL</label>
        <div class="col-sm-4">
          <input v-model="imageUrl" name="imageUrl"  mdbInput type="text" class="form-control" id="inputImageUrl" 
          placeholder="Image URL" v-on:blur="$v.imageUrl.$touch()">
          <template v-if="$v.imageUrl.$error">
          <p class="err" v-if="!$v.imageUrl.required" >Please enter an image URL</p>
          </template>
        </div>
      </div>      
    <!-- Content -->
    <div class="form-group row">
        <label for="textAreaContent" class="col-sm-1 offset-sm-3 col-form-textarea">Content</label>
        <div class=" col-sm-4">
            <textarea v-model="content" name="content" type="text" id="form75" class="form-control md-textarea col-sm-20"
             rows="5" mdbInput placeholder="Content" v-on:blur="$v.content.$touch()"></textarea>
        </div>
        <template v-if="$v.content.$error">
        <p class="err" v-if="!$v.content.required">
            Please enter the content of the article.</p>
        <p class="err" v-else-if="!$v.content.minlength">The content should be atleast 20 symbols.</p>
        </template>
    </div>
    <!-- Author -->
  <div class="form-group row">
    <label for="authorName" class="col-sm-1 offset-sm-3 col-form-label">Author</label>
    <div class="col-sm-4">
      <input v-model="authorName" name="authorName"  mdbInput type="text" class="form-control" id="inputAuthorName" 
      placeholder="Author Name" v-on:blur="$v.authorName.$touch()" >
     <template v-if="$v.authorName.$error">
      <p class="err" v-if="!$v.authorName.required">Please enter author's name.</p>
     </template>
   </div>
  </div> 
  <!-- Author Email -->
  <div class="form-group row">
    <label for="authorEmail" class="col-sm-1 offset-sm-3 col-form-label">Author email</label>
    <div class="col-sm-4">
      <input v-model="authorEmail" name="authorEmail"  mdbInput type="text" class="form-control" id="inputAuthorEmail" 
      placeholder="Author Email" required pattern="^[^\s@]+@[^\s@]+\.[^\s@]+$" v-on:blur="$v.authorEmail.$touch()">
      <template v-if="$v.authorEmail.$error">
      <p class="err" v-if="!$v.authorEmail.required">Please enter author's email.</p>
      <p class="err" v-else-if="!$v.authorEmail.email" >Invalid Email!</p>
      </template>
    </div>
  </div>   
    <!-- Button -->
    <div class="form-group row">
      <div class="col-sm-12 offset-sm-5">
        <button v-bind:disabled="$v.$invalid"  class="col-sm-2 my-4 btn btn-info"  type="submit" mdbBtn color="info">Create</button>
      </div>
    </div>
    
  </form>


  </div>
  
</template>

<script>
import{validationMixin} from 'vuelidate';
import{required, minLength,email} from 'vuelidate/lib/validators';
export default {
name:'AppArticleCreate',
mixins:[validationMixin],
data(){
    return {
        title:'',
        imageUrl:'',
        content:'',
        authorName:'',
        authorEmail:''

    }
},
methods:{
    articleCreateHandler(){
        this.$v.$touch();
        //todo
    }
},
validations:{
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

}
</script>

<style scoped>
 h1{

    margin-top: 50px;
    text-align: center;
}
#wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
  }

</style>

