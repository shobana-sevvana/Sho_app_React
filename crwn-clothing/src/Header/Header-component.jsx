import React from 'react';
import {Link} from 'react-router-dom';
import{ ReactComponent as logo} from './crown.svg';
import './Header.styles.css';
import { auth } from '../Firebase/Firebase.utils';
const Header =({currentUser})=>(
<div className='header'>
<Link className='logo-container' to ='./homepage'>
<logo className='logo' src='../public/images/crown.svg'/>
</Link>
<div className='options'></div>
<Link className='option' to='/Collection/shoppage'>shop</Link>

<div className='shop'></div>
<Link className='option' to='/Collection/shoppage'>contact</Link>
{
currentUser?
(<div className='option' onClick={()=>auth.signOut()}>SignOut</div>):
(
<Link className='option' to='/SignIn/Sign_In_up_page'>SignIn</Link>)

}

</div>
);
export  default Header ;