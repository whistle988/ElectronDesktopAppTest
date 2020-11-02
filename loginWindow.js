var signUpBtn = document.getElementById('signUpBtn');
var signInBtn = document.getElementById('signInBtn');
  
//Регстрация нового пользователя
signUpBtn.addEventListener('click', function(){
var emailField = document.getElementById('email').value;
var passwordField = document.getElementById('password').value;

firebase.auth().createUserWithEmailAndPassword(emailField, passwordField).then(function(){
    alert('User created!!!');
}).catch(function(error){
    if(error != null){
        console.log(error.message);
        return;
    }
})
});

//Подключение по существующим логину и паролю
signInBtn.addEventListener('click', function(){
var emailField = document.getElementById('email').value;
var passwordField = document.getElementById('password').value;

firebase.auth().signInWithEmailAndPassword(emailField, passwordField).then(function(){
    document.location.href = 'mainWindow.html';
}).catch(function(error){
    if(error != null){
        console.log(error.message);
        return;
    }
    alert('User Created!!!');
})
});

  