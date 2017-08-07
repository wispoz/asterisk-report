import React from 'react';

class NavigationMenu extends React.Component {
    render() {
        return <aside className="main-sidebar">
            <section className="sidebar">
                <div className="user-panel">
                    <div className="pull-left image">
                        <img src="dist/img/user2-160x160.jpg" className="img-circle" alt="User Image"/>
                    </div>
                    <div className="pull-left info">
                        <p>Alexander Pierce</p>
                        <a href="#"><i className="fa fa-circle text-success"></i> Online</a>
                    </div>
                </div>
                {/* search form */}
                <form action="#" method="get" className="sidebar-form">
                    <div className="input-group">
                        <input type="text" name="q" className="form-control" placeholder="Search..."/>
                        <span className="input-group-btn">
                                    <button type="submit" name="search" id="search-btn" className="btn btn-flat"><i
                                        className="fa fa-search"></i></button>
                                  </span>
                    </div>
                </form>
                <ul className="sidebar-menu">
                    <li className="header">LABELS</li>
                    <li><a href="#"><i className="fa fa-circle-o text-red"></i> <span>Important</span></a></li>
                    <li><a href="#"><i className="fa fa-circle-o text-yellow"></i> <span>Warning</span></a></li>
                    <li><a href="#"><i className="fa fa-circle-o text-aqua"></i> <span>Information</span></a></li>
                </ul>
            </section>
        </aside>;
    }

}

export default NavigationMenu;