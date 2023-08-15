import logo from '../assets/Logo.svg'
import '../stylesheet/style.css'
function Header(){
    return(
        <div style={{display:'flex',justifyContent:'space-between'}}>
          <img src={logo} alt="logo"/>
          <ul>
            <li><a href='/#'>Home</a></li>
            <li><a href='/#'>About</a></li>
            <li><a href='/#'>Menu</a></li>
            <li><a href='/#'>Reservations</a></li>
            <li><a href='/#'>Online</a></li>
         </ul>
        </div>
       
    );
}
export default Header;