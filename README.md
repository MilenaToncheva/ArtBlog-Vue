# ArtBlog-Vue
ArtBlog is a small application, developed as a course-end project for VueJS course at SoftUni.
The application is intended for artists, people of art, their fans and followers, and anyone interested in the arts.

## The app uses:
- VueJS - for front-end;
- Firebase - for back-end;
- Vuelidate - for form validation;
- Vue-router - for routing;
- Vue-toast-notification - for notification.
Nested routing, guards and lazy loading are implemented.
A Filter is also used for articles' content manipulation.
ArticlesMixin and AuthMixin are used as a service layer for the authentication and the CRUD operations with the articles.

## Main functionalities:
### Anonymous users are able to:
  * view the start page;
  * register;
  * login.
  
### Authenticated users are able to:
  * view home page with all articles listed;
  * create article;
  * view all articles (home page);
  * view their own articles (my articles page);
  * view details of a selected article;
  * edit and delete a selected own article.
  
