import chef from "../assets/Chef_claude.png";

const Header = () => {
  return (
    <header>
       <nav className="header">
       <img src={chef} className="logo chef" alt="chef logo" /> 
       <span className="nav-text">Chef Claude</span>
       </nav>
    </header>
  )
}

export default Header;