let btn = document.getElementById('btnsubmit')
function onBtnClick(){
    let userName = document.getElementById('uname').value
    if(userName.value=='null' || userName.length<=3 || userName.value==""){
        document.getElementById('name_e').innerHTML='Username must be atleast 3 characters';
    }
     let email = document.getElementById('email').value
 let pass = document.getElementById('pass').value
 let cpass = document.getElementById('conpass').value
    let mailformat = /^w+([.-]?w+)@w+([.-]?w+)(.w{2,3})+$/;
    if(email!=null)
    {
        if(email.match(mailformat))
        {
        return true;
        }
        else{
            document.getElementById('err_email').innerHTML= 'Email is not valid';

        }
    }
    if(pass==null || pass.length<7){
        
        document.getElementById('e-pass').innerHTML='Password must be atleast 6 characters';
    }
    if(cpass!=pass || cpass==null){
        document.getElementById('e_c').innerHTML='password2 is required';
    }
    
}
btnsubmit.addEventListener('click',onBtnClick)
