import React from "react";
import firebase from '../Firebase/Firebase.utils';
import FormInput from './form_input-component';
import CustomButton from './custombutton-component';
import './Sign_in_up.styles.css'
import {auth,SignInWithGoogle} from '../Firebase/Firebase.utils';

class SignIn extends React.Component{
constructor(props){
super(props);

this.state = {
email:'',
password:''
}
}
 handleSubmit= async Event => {

Event.preventDafault();
const {email,password} = this.state;
try{
await auth.signInWithEmailAndPassword(email,password);
this.setState({email:'',password:''})

}
catch(error)
{

  console.log(error);
}

this.setState({email:'',password:''})

 }

handleChange=Event =>{
    const {value,name} =Event.target;

this.setState({ [name]:value})
};
render(){
return (
<div className="sign-in">
<h3>I already have an account</h3>
<span>Sign in with your email and password</span>
<form onSubmit={this.handleSubmit} className="form-input">

<FormInput
            name='email'
            type='email'
            handleChange={this.handleChange}
            value={this.state.email}
            label='email'
            required
          />
          <FormInput
            name='password'
            type='password'
            value={this.state.password}
            handleChange={this.handleChange}
            label='password'
            required
          />
          <CustomButton type='submit' className='custom-button'> Sign in </CustomButton>
          <CustomButton onClick={SignInWithGoogle} className='custom-button'> SignInWithGoogle </CustomButton>
        </form>

{/*<pre><label >Email :  </label>
<input type='email' value={this.state.email} name="email"size={30} onChange={this.handleChange}></input><br/>
<label >Password   : </label>
<input type='password' value={this.state.password} name="password"size={25} onChange={this.handleChange} className="input[type='password']"></input><br/></pre>

<input type='submit'value='submit' className="custom-button" size='10'/>
<input type='SignInWithGoogle'value='SignInWithGoogle' className="custom-button" size='10'/>SignInWithGoogle
</form>*/}
</div>
)}}

export default SignIn;