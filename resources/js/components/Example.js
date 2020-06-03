import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Link, BrowserRouter} from 'react-router-dom';
import RouterPath from './RouterPath';

export default class Example extends Component {
    render() {
        return (
            <BrowserRouter>
                <nav>
                    <div className="navbar navbar-expand-lg navbar-light top-menu">
                        <div className="container">
                            <div className="language_switch">
                                <Link className="nav-link" to={'/'} title="ENGLISH">EN</Link>
                                <Link className="nav-link" to={'/'} title="TIẾNG VIỆT">VN</Link>
                            </div>
                            <ul className="nav navbar-nav navbar-right">
                                <li>
                                    <Link className="nav-link" to={'/myaccount'}>My Account</Link>
                                    <ul className="sub_menu">
                                        <li><Link className="nav-link" to={'/login'}>Login</Link></li>
                                        <li><Link className="nav-link" to={'/register'}>Register</Link></li>
                                    </ul>
                                </li>
                                <li>
                                    <Link className="nav-link" to={'/'}>Wishlist</Link>
                                </li>
                                <li>
                                    <Link className="nav-link" to={'/cart'} data-toggle="modal" data-target="#cart">Shopping Cart</Link>
                                </li>
                                <li>
                                    <Link className="nav-link" to={'/'} data-dismiss="modal" data-target="#check">Checkout</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <div>
                    <RouterPath/>
                </div>
                <section>
                    <div className="box">
                        <img src="https://lh3.googleusercontent.com/pw/ACtC-3dbcG_TBwkfq_JQb7hZEPdiVzct-XJY1XBt6Vyv2o4ym-9PT_m_-FziP4IMKlRRwDyHkvjw6b4_5orOAw8FnCpDLQt9l33xOyOvoHqKoemfD6rwTUbkYf2SKXqZV5mCCXzcfQ9NxjgLsoao9PBF6nXV=w1366-h172-no?authuser=0" width="100%" alt="image"/>
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-6 left">
                                    <div className="col-lg-4 TT">
                                        <Link className="nav-link" to={'/'}><h6>COMPANY INFORMATION</h6></Link>
                                        <ul>
                                            <li><Link className="nav-link" to={'/'}>About Us</Link></li>
                                            <li><Link className="nav-link" to={'/'}>Affiliate Program</Link></li>
                                            <li><Link className="nav-link" to={'/'}>Fashion Blogger</Link></li>
                                            <li><Link className="nav-link" to={'/'}>Discount For Students</Link></li>
                                        </ul>
                                    </div>
                                    <div className="col-lg-4 TT T1">
                                        <Link className="nav-link" to={'/'}><h6>CUSTOMER SUPPORT</h6></Link>
                                        <ul>
                                            <li><Link className="nav-link" to={'/'}>Customer Support</Link></li>
                                            <li><Link className="nav-link" to={'/'}>Return Product</Link></li>
                                            <li><Link className="nav-link" to={'/'}>Login Instruction,Register</Link></li>
                                            <li><Link className="nav-link" to={'/'}>Payment Policy</Link></li>
                                            <li><Link className="nav-link" to={'/'}>Information security policy</Link></li>
                                        </ul>
                                    </div>
                                    <div className="col-lg-4 TT">
                                        <Link className="nav-link" to={'/'}><h6>CUSTOMER SERVICE</h6></Link>
                                        <ul>
                                            <li><Link className="nav-link" to={'/'}>Contact us</Link></li>
                                            <li><Link className="nav-link" to={'/'}>Payment methods</Link></li>
                                            <li><Link className="nav-link" to={'/'}>Reward Points </Link></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-lg-6 right">
                                    <div className="col-lg-8">
                                        <div className="TT T2">
                                            <Link className="nav-link" to={'/'}><h6>CONNECT WITH US</h6></Link>
                                            <p className="icon-footer">
                                                <Link className="nav-link" to={'/'}><i className="fab fa-facebook-f"/></Link>
                                                <Link className="nav-link" to={'/'}><i className="fab fa-instagram "/></Link>
                                                <Link className="nav-link" to={'/'}><i className="fab fa-twitter"/></Link>
                                                <Link className="nav-link" to={'/'}><i className="fab fa-youtube"/></Link>
                                                <Link className="nav-link" to={'/'}><i className="fab fa-google"/></Link>
                                            </p>
                                        </div>
                                    </div>
                                    <div className="col-lg-4">
                                        <div className="TT T2">
                                            <h6>APP</h6>
                                            <p className="icon-footer">
                                                <Link className="nav-link" to={'/'}><i className="fab fa-apple"/></Link>
                                                <Link className="nav-link" to={'/'}><i className="fab fa-android"/></Link>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <hr/>
                            <span className="GP">
                                © 2019 - SHIELD COMPANY LIMITED
                                <span className="k">
                                    <p>Business Registration Certificate: 0310874914 - Date of issue: 12 December 2019 - Issuing agency: Business Registration Office - Department of Planning and Investment of Ho Chi Minh City Business registration address: 766 / 3B-3C, Số 8 Ton That Theory, My Dinh, Tu Liem, Hanoi - Phone: 0373200 882. - Email: cskh@shield.vn                        </p>
                                </span>
                                <div className="Cookie">
                                    <ul>
                                        <li><Link className="nav-link" to={'/'}>Privacy and Cookie Policy </Link></li>
                                        <li><Link className="nav-link" to={'/'}>Terms and condition</Link></li>
                                        <li><Link className="nav-link" to={'/'}>Notice of Copyright</Link></li>
                                    </ul>
                                </div>
                            </span>
                        </div>
                    </div>
                </section>
            </BrowserRouter>
        )
    }
}

if (document.getElementById('example')) {
    ReactDOM.render(
        <Example/>,
        document.getElementById('example'));
}
