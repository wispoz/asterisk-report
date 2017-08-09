import React from 'react';
import {
    Link
} from 'react-router-dom';
import Clock from './Clock';

class NavigationMenu extends React.Component {
    render() {
        return <aside className="main-sidebar">
            <section className="sidebar">
                <div className="user-panel">
                    <div className="pull-left image">
                        <img src="dist/img/user2-160x160.jpg" alt="" className="img-circle"/>
                    </div>
                    <Clock/>
                </div>
                <ul className="sidebar-menu">
                    <li><Link to="/" className="fa fa-home"> Главная</Link></li>
                    <li className="header">НАСТРОЙКИ</li>
                    <li><Link to="users" className="fa fa fa-user"> Пользователи</Link></li>
                    <li><Link to="groups" className="fa fa fa-users"> Группы</Link></li>
                    <li><Link to="comments" className="fa fa-comments-o"> Комментарии</Link></li>
                </ul>
            </section>
        </aside>;
    }

}

export default NavigationMenu;