import './Aside.css';
import UserList from '@UserList';
import UserCard from '@UserCard';

const Aside = () => {
  return (
    <div className='index-container'>
      <div className="index-components">
        <UserList>
          <UserCard />
        </UserList>
      </div>
      <div className="index-footer ">
        <ul>
          <li><a href="/condiciones-de-servicio">Condiciones de Servicio </a>| </li>
          <li><a href="/politica-de-privacidad">Política de Privacidad</a> | </li>
          <li><a href="/politica-de-cookies">Política de Cookies</a> | </li>
          <li><a href="/informacion-legal">Información Legal</a> | </li>
          <li><a href="/privacidad">Privacidad</a> | </li>
          <li><a href="/ayuda">Ayuda</a></li>
        </ul>
      </div>

    </div>
  )
}

export default Aside
