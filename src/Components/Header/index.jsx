import logo from '@logo';
import './Header.css';
import Search from '@Search';



const index = ({ children }) => {
  return (
    <header className="header">
      <div className="logo-container">
        <a href="/home" className='logo-link ml-10'>
          <img src={logo} alt="Logo" className="logo" />
        </a>
      </div>
      <Search />
      <div className="navbar-container">
        {children}
      </div>
    </header>
  );
};

export default index;