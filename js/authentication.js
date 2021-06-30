const SignUpForm = document.querySelector('#index.html');

SignUpForm.addEventListener('submit', (e)=>{
    e.preventDefault();

    const email = SignUpForm['signup-email'].value;
    const email = SignUpForm['signup-password'].value;

    auth.createUserWithEmailAndPassword(email,password).then(cred =>{
        return db.collec
    })

})