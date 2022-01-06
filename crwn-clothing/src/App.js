import React from 'react';
import logo from './logo.svg';
import './App.css';
import HomePage from './Component/homepage-component';
import { BrowserRouter, Route,Switch } from 'react-router-dom';
import Shopnow from './Collection/shoppage';
import Header from './Header/Header-component';
import Sign_inup from './SignIn/Sign_In_up_page';
import {auth,createUserProfileDoc} from './Firebase/Firebase.utils';
//import SignUp from './SignUp/sign-up.component';



class app extends React.Component{
constructor(){
  super();
  this.state={
    currentUser: null
  }
}

unsubscribeFromAuth =null;
componentDidMount (){

 this. unsubscribeFromAuth =auth.onAuthStateChanged(async userAuth => {
  if (userAuth) {
    const userRef = await createUserProfileDoc(userAuth);

    userRef.onSnapshot(snapShot => {
      this.setState({
        currentUser: {
          id: snapShot.id,
          ...snapShot.data()
        }
      });

      console.log(this.state);
    });
  }

  this.setState({ currentUser: userAuth });
});
}
componentWillUnmount()
{
  this .unsubscribeFromAuth();
}

render(){
  return (
    
    <div> 
      <Header currentUser={this.state.currentUser}/>
 
        <Switch>
          <Route exact path='/' component={HomePage}></Route>
         <Route path='/Collection/shoppage' component={Shopnow}></Route>
         <Route path='/SignIn/Sign_In_up_page' component={Sign_inup}></Route>
        
        
           </Switch>
       
    </div>
    );
}}

export default app;
