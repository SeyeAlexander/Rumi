/* JavaScript to toggle modal (FOR REFERENCE, AS MODAL TOGGLE WILL REQUIRE BACKEND AUTHENTICATION) */


/* signup success modal */
const signupButtonA = document.querySelector('#create-acct');
const modalbgA = document.querySelector('#modal-background-a');
const modA = document.querySelector('#modal-a');

signupButtonA.addEventListener('click',(e) => {

    /* do not forget to remove this effect, this is for illustrating modal only */
    e.preventDefault();


    modA.classList.add('is-active');
})

modalbgA.addEventListener('click',() => {
    modA.classList.remove('is-active');
})


/* signup error modal */
const signupButtonB = document.querySelector('#signup-gmail');
const modalbgB = document.querySelector('#modal-background-b');
const modB = document.querySelector('#modal-b');

signupButtonB.addEventListener('click',() => {
    modB.classList.add('is-active');
})

modalbgB.addEventListener('click',() => {
    modB.classList.remove('is-active');
})

