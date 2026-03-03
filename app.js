const cl = console.log;

const loginForm = document.getElementById('loginForm')
const emailControl = document.getElementById('email')
const passwordControl = document.getElementById('password')



function login(email,password){
    setTimeout(() => {
        if(email === 'teju@gmail.com' && password === '2828'){
            cl('Login Successfully!!!')
            redirecttoDashboard()
            Swal.fire({
                title : 'Login Successfully!!!',
                icon : 'success',
                timer : 3000
            })
        }else{
            Swal.fire({
                title : 'Invalid Email or Password',
                icon : 'error',
                timer : 3000
            })
        }
    }, 1000)
}

function redirecttoDashboard(){
    cl('DashBoard Loaded')
}

function onLogin(eve){
    eve.preventDefault();

    let loginCredi = {
        email : emailControl.value,
        password : passwordControl.value
    }
    loginForm.reset()
    login(loginCredi.email, loginCredi.password)
}

loginForm.addEventListener('submit',onLogin)



