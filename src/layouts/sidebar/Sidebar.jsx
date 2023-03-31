
import { Link } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import './Sidebar.css';


export const Sidebar = () => {
  return (
    <div className='sidebar_container'>
        <div className='sidebar_container_logo'>
               <h1 className=''> PlaniApp</h1>
        </div>

       <div className='sidebar_options'>
          <ul className='sidebar_optiones_list'>

            <li className='sidebar_list_container'>
              <Link to="/home" className='sidebar_list'><FaIcons.FaHome className='sidebar_icons'/> Principal</Link> 
            </li>

            <li className='sidebar_list_container'>
              <Link to="/plani" className='sidebar_list'><FaIcons.FaBookOpen className='sidebar_icons'/> Planificaciones </Link> 
            </li>
             
            <li className='sidebar_list_container'>
              <Link to="/calendar" className='sidebar_list'><FaIcons.FaCalendarAlt className='sidebar_icons'/> Calendario </Link>
            </li>

          </ul>
       </div>
        
    </div>
  )
}
