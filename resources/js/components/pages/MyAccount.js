import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class MyAccount extends Component{
    render() {
        return(
            <div>
                <header className="border-bottom1">
                    <div className="main-header">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-3 header-logo">
                                    <a href=''><img src="https://lh3.googleusercontent.com/pw/ACtC-3fRioXmYKdSlKPDDGP2PQjQzIpH4kJDbUNT9bmnZJdiaHeuvIz61lDOwbJ3_Ruvo4daRxEnd-cB6xCuxkiyeiva4VO5V0ahGSIbYfonEHJKIhz_9gpipsjILzc7hP0Pi2-tAA92UbRq-I7Sb3fUe3MT=w603-h667-no?authuser=0" height="100" width="112" alt="image"/></a>
                                </div>
                                <div className="col-md-6 seach">
                                    <form action="" method="get" id="">
                                        <input type="text" className="form-control" id="search-top" placeholder="What are you looking for?"/>
                                        <button type="submit" className="navbar-default">
                                            <i className="fas fa-search"/>
                                        </button>
                                    </form>
                                </div>
                                <div className="col-md-3">

                                </div>
                            </div>
                        </div>
                    </div>
                    <div  className="TopMenu">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="col-md-9">
                                        <div className= "Menu">
                                            <ul>
                                                <li>
                                                    <Link className="page" to={'/'}> HOME</Link>
                                                </li>
                                                <li>
                                                    <Link className="page" to={'/'}>ACCESSORIES</Link>
                                                    <ul className="Menucon">
                                                        <div className="row Sumcol12">
                                                            <div className="col-lg-12" >
                                                                <Link to={'/'}><li className="Tieude" >Accessories product</li></Link>
                                                                <div className="col-md-6">
                                                                    <ul>
                                                                        <Link to={'/'}><li className="nav-main-menu__submenu-list__item ">Wallets</li></Link>
                                                                        <Link to={'/'}><li className="nav-main-menu__submenu-list__item ">Cardholders</li></Link>
                                                                        <Link to={'/'}><li className="nav-main-menu__submenu-list__item ">Technology</li></Link>
                                                                        <Link to={'/'}><li className="nav-main-menu__submenu-list__item ">Toiletry Bags</li></Link>
                                                                        <Link to={'/'}><li className="nav-main-menu__submenu-list__item ">Clutches</li></Link>
                                                                    </ul>
                                                                </div>
                                                                <div className="col-md-6">
                                                                    <ul>
                                                                        <Link to={'/'}><li className="nav-main-menu__submenu-list__item ">Straps</li></Link>
                                                                        <Link to={'/'}><li className="nav-main-menu__submenu-list__item ">Cases</li></Link>
                                                                        <Link to={'/'}><li className="nav-main-menu__submenu-list__item ">Small Leather Goods</li></Link>
                                                                        <Link to={'/'}><li className="nav-main-menu__submenu-list__item ">Care Products</li></Link>
                                                                        <Link to={'/'}><li className="nav-main-menu__submenu-list__item ">Gift Cards</li></Link>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </ul>
                                                </li>
                                                <li><Link className="page" to={'/product'}>ALL PRODUCT</Link>
                                                    <ul className="Menu-main Menucon">
                                                        <div className="row">
                                                            <div className="col-lg-12">
                                                                <div className=" col-md-2 ">
                                                                    <ul>
                                                                        <li><Link to={'/'}><p/></Link></li>
                                                                    </ul>
                                                                    <img src="https://lh3.googleusercontent.com/pw/ACtC-3dt1uaVSlK0jbcIjEjPUXM2KzPgceoCLTop4DJ9RIcZP317RRXJdAuLzU0zK3ahHHGIiLQnIrFexfR1cRgp3229VwPhG3zLWM4iEgyH3ezvtSkvGzzqWnfr4pm4OmFrWSNLmCaU3CMs9pAkz4WO5Gz6=w120-h30-no?authuser=0" alt="image"/>
                                                                    <p className="l1">Laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                                                                    <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia.</p>
                                                                </div>
                                                                <div className=" main col-md-2"><img src="https://lh3.googleusercontent.com/pw/ACtC-3ejocSiCATTXzwgEn0n2L5TdAL96EfeCr7U2NDLVDOys5Nx55PueosBiN9QFJseRDbJRQwWQG0ZQTNyD0zriJwJ9Y4EWLgrSK-XRK5IQP4Q8p3NHTcQL_wYOKLU-kAigzFgd0fnJBdNjj00Pj0bT2vK=s667-no?authuser=0" width="129.67" height="129.67" alt="image"/>
                                                                    <p>ALIQUAM ERAT VOLUTPAT BAG</p>
                                                                    <p> <span> $122.00</span> <span className="RED"> $110.00 </span></p>
                                                                </div>
                                                                <div className="main col-md-2"><img src="https://lh3.googleusercontent.com/pw/ACtC-3cSed3l4l-wAWjsRN06Gwq_r1abwLovrKtQX1oCFDwOvwy5Xq1-30nAxDDOmM-3VL4uVlIAsjSaxQR94gc9C_Qtzq2zP0lRXZBNLg8tALxYH-yh3cKCbaawj000UhW81_X3pVXByJknYUAXNgQpBgu4=s200-no?authuser=0" width="129.67" height="129.67" alt="image"/>
                                                                    <p>ALIQUAM SUSCIPIT BAG </p>
                                                                    <p> <span> $122.00</span> <span className="RED">  $98.00 </span></p></div>
                                                                <div className="col-md-2">
                                                                    <ul>
                                                                        <li> <Link to={'/'}>Suitcse</Link> </li>
                                                                        <li><Link to={'/'}>Suitcase Plastic</Link></li>
                                                                        <li><Link to={'/'}>Suitcase Cloth</Link></li>
                                                                        <li><Link to={'/'}>Suitcase Small</Link></li>
                                                                        <li><Link to={'/'}>Suitcase Medium</Link></li>
                                                                        <li><Link to={'/'}>Suitcase Big</Link></li>
                                                                    </ul>
                                                                </div>
                                                                <div className="col-md-2">
                                                                    <ul>
                                                                        <li><Link to={'/'}><p>Backpack</p></Link></li>
                                                                        <li><Link to={'/'}>Backpack Business</Link></li>
                                                                        <li><Link to={'/'}>Backpack Kids </Link></li>
                                                                        <li><Link to={'/'}>Backpack Fashion</Link></li>
                                                                        <li><Link to={'/'}>Backpack Sport</Link></li>
                                                                        <li><Link to={'/'}>Backpack Travel</Link></li>
                                                                        <li><Link to={'/'}>Backpack Laptop</Link></li>
                                                                    </ul>
                                                                </div>
                                                                <div className="col-md-2">
                                                                    <ul>
                                                                        <li><Link to={'/'}><p>Handbag</p></Link></li>
                                                                        <li><Link to={'/'}>Handbag Lady</Link></li>
                                                                        <li><Link to={'/'}>Handbag Woman</Link></li>
                                                                        <li><Link to={'/'}>Handbag Shoulder</Link></li>
                                                                        <li><Link to={'/'}>Handbag Bag Lady</Link></li>
                                                                        <li><Link to={'/'}>Handbag Tote</Link></li>
                                                                        <li><Link to={'/'}>Handbag Fashion</Link></li>
                                                                        <li><Link to={'/'}>Handbag Leather</Link></li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </ul>
                                                </li>
                                                <li><Link className="page" to={'/'}>HOT</Link>
                                                    <ul className=" Menucon">
                                                        <div className="row text-center">
                                                            <div className="col-lg-12" >
                                                                <div className=" col-md-6">
                                                                    <Link to={'/'}>
                                                                        <img src="https://lh3.googleusercontent.com/pw/ACtC-3cxAyQbbLVg2vk3VbTa1YAmpZiZfFvkvKC-4h8nf_8Wx6eefCKnBMG6haVpMyByOY6NgCjReXaR2koiczuWBzalypF5yDUncjUeo3pZSU1dJFKGwEuSo8N-yO1aG6F_iLSeeJE8CoetyxpUpUlo9njG=s170-no?authuser=0" width="185px" alt="image"/>
                                                                        <p>CONSECTETUR ADIPISCING BAG</p>
                                                                    </Link>
                                                                    <p> $210.00</p>
                                                                </div>
                                                                <div className="col-md-6">
                                                                    <Link to={'/'}>
                                                                        <img src="https://lh3.googleusercontent.com/pw/ACtC-3f6hKYwNAfLqZDxXgR0O0Lcy33IYaFk5nrFMrayJ4Wayi9ryPF-VlqS9Rr2gtvCehGNyE09NQb2wAohMd8XmyNpYOFB0FlOVhVjWpRdYzi7TX25vxR8MtFrO12bo8CJ_g8z-5Xux1YSPUZaw344yxLM=s170-no?authuser=0" width="185px" alt="image"/>
                                                                        <p>CUM SOCIIS NATOQUE BAG</p>
                                                                    </Link>
                                                                    <p> $1999.00</p>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-12">
                                                                <div className=" col-md-6">
                                                                    <Link to={'/'}>
                                                                        <img src="https://lh3.googleusercontent.com/pw/ACtC-3cP54dr6z3Uk_9u2IopR11QXiYiLUJfgVIf7WvlzQTKCQNwNlzADUr-YvL-vlmxahtiuWdCkLz5lFEtEypZpD7LhTjQunB5I4w3KcbOGGIClyP3UGlh7peDg3rpUGGEUX30DadNuShOV2UdEEpU62Bj=s80-no?authuser=0" width="185px" alt="image"/>
                                                                        <p>PALM TREO PRO BAG</p>
                                                                    </Link>
                                                                    <p> $ 22.00</p>
                                                                </div>
                                                                <div className="col-md-6">
                                                                    <Link to={'/'}>
                                                                        <img src="https://lh3.googleusercontent.com/pw/ACtC-3fp0BorlK3fEz1pWLjaSRHJ4gN97yDEO0M4qWf0BlyyCx72nmmvuWba1hlvM2S0CVUSWO_q0SY7_xbqvdC4MTs4nQTOmSQBcHOxmiE5u1F_9OWcdIQvZZ0qXKCoayM5k8_BvUlYuWzVX9QW15Nr9LLS=s170-no?authuser=0" width="185px" alt="image"/>
                                                                        <p>PRAESENT FRINGILLA BAG</p>
                                                                    </Link>
                                                                    <p> $11.000</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </ul>
                                                </li>
                                                <li> <Link className="page" to={'/'}>TRADEMARK</Link>
                                                    <ul className="TRADEMARK Menucon">
                                                        <div  className="row">
                                                            <div className="col-lg-12">
                                                                <div className="col-md-2"><Link to={'/'}><img width="101.38" src="https://hol.com.vn/Data/Sites/1/media/thuong-hieu/logo/d2.png" alt="image"/></Link></div>
                                                                <div className="col-md-2"><Link to={'/'}><img width="86.81" height="35" src="https://hol.com.vn/Data/Sites/1/media/thuong-hieu/logo/logo_skybags.png" alt="image"/> </Link></div>
                                                                <div className="col-md-2"><Link to={'/'}><img width="133.23" src="https://hol.com.vn/Data/Sites/1/media/logo/logo_carlton.png" alt="image"/> </Link></div>
                                                                <div className="col-md-2"><Link to={'/'}><img width="104.35" src="https://hol.com.vn/Data/Sites/1/media/thuong-hieu/logo/d4.png" alt="image"/> </Link></div>
                                                                <div className="col-md-2"><Link to={'/'}><img width="86.95" height="39.19" src="https://hol.com.vn/Data/Sites/1/media/thuong-hieu/logo/d5.png" alt="image"/> </Link></div>
                                                                <div className="col-md-2"><Link to={'/'}><img width="40.75" src="https://hol.com.vn/Data/Sites/1/media/kamiliant-logo-crop-2.png" alt="image"/> </Link></div>
                                                            </div>
                                                        </div>
                                                    </ul>
                                                </li>
                                                <li> <Link className="page" to={'/'}> BLOG </Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <div className="Menuright">
                                            <ul>
                                                <li><Link className="page" to={'/cart'}>0 ITEM(S) - $0.00 <i className="fas fa-angle-down"/></Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
                <section>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <h4 className="uppercase">My Account</h4>
                                <div className="col-lg-4">
                                    <div className="_1ro1 _5ycb drop_elem" id="u_0_14">
                                        <a className="_1nv3 _11kg _1nv5 profilePicThumb" href="" rel="async" id="u_0_z">
                                            <img className="silhouette _11kf img1" alt="Ảnh đại diện của bạn" src="https://lh3.googleusercontent.com/pw/ACtC-3ejpT0YpELFEHvQjW-UXW_FX5aQ7mh3H0N9_MRj0E0XlHxT5RhjPslbvkl1T6-7HLtAefNbUY3F2pMrWyrbEmecDQtWyvFEz8VbX53FFEnVszd2yPRDAPC_QNZiJt-LPaTXjY8LluKAInneKyeJlR2U=s200-no?authuser=0"/>
                                        </a>
                                        <div className="fbTimelineProfilePicSelector _23fv">
                                            <div className="_156n backgroundaddimg _1o59" data-ft="{&quot;tn&quot;:&quot;+B&quot;}">
                                                <a href="#" className="_156p _1o5e" ajaxify="" rel="dialog" role="button" id="u_0_15">
                                                    <div className="_3-95">
                                                        <i className="_1din _156q _1o6f img sp_xA9Bx_ytNVq sx_6980c2"/>
                                                    </div>
                                                    Add image
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-8">
                                    <div>
                                        <form>
                                            <div className="container-fluid">
                                                <div className="row">
                                                    <div className="elementGroup">
                                                        <div className="elementGroupBody">
                                                            <div className=" text-input-wrapper ">
                                                                <div className="row">
                                                                    <div className="col-lg-12">
                                                                        <div className="col-lg-6">
                                                                            <div className="ant-row ant-form-item">
                                                                                <div className="ant-col ant-form-item-label">
                                                                                    <label className="ant-form-item-no-colon" title="">
                                                                                        <span>First name</span>
                                                                                    </label>
                                                                                </div>
                                                                                <div className="ant-col ant-form-item-control-wrapper">
                                                                                    <div className="ant-form-item-control">
                                                                            <span className="ant-form-item-children">
                                                                                <input name="name" readOnly="" formid="edit_profile" leftcol="0" rightcol="0" type="text" className="ant-input" defaultValue=""/>
                                                                            </span>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-lg-6">
                                                                            <div className="ant-row ant-form-item">
                                                                                <div className="ant-col ant-form-item-label">
                                                                                    <label className="ant-form-item-no-colon" title="">
                                                                                        <span>Last name</span>
                                                                                    </label>
                                                                                </div>
                                                                                <div className="ant-col ant-form-item-control-wrapper">
                                                                                    <div className="ant-form-item-control">
                                                                            <span className="ant-form-item-children">
                                                                                <input name="name" readOnly="" formid="edit_profile" leftcol="0" rightcol="0" type="text" className="ant-input" defaultValue=""/>
                                                                            </span>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className=" text-input-wrapper ">
                                                                <div className="col-lg-12">
                                                                    <div className="ant-row ant-form-item full-width">
                                                                        <div className="ant-col ant-form-item-label">
                                                                            <label className="ant-form-item-no-colon" title="">
                                                                                <span>Address</span>
                                                                            </label>
                                                                        </div>
                                                                        <div className="ant-col ant-form-item-control-wrapper">
                                                                            <div className="ant-form-item-control">
                                                                            <span className="ant-form-item-children">
                                                                                <input name="address" formid="edit_profile" leftcol="0" rightcol="0" placeholder="" type="text" className="ant-input" defaultValue=""/>
                                                                            </span>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className=" text-input-wrapper ">
                                                                <div className="col-lg-12">
                                                                    <div className="ant-row ant-form-item">
                                                                        <div className="ant-col ant-form-item-label">
                                                                            <label className="ant-form-item-no-colon" title="">
                                                                                <span>Phone </span>
                                                                            </label>
                                                                        </div>
                                                                        <div className="ant-col ant-form-item-control-wrapper">
                                                                            <div className="ant-form-item-control">
                                                                            <span className="ant-form-item-children">
                                                                                <input name="phone" formid="edit_profile" leftcol="0" rightcol="0" type="text" className="ant-input" defaultValue=""/>
                                                                            </span>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="ant-date-time-picker-wrapper">
                                                                <div className="col-lg-12">
                                                                    <div className="ant-row ant-form-item">
                                                                        <div className="ant-col ant-form-item-control-wrapper">
                                                                            <div className="ant-form-item-control">
                                                                            <span className="ant-form-item-children">
                                                                                <div className="date-time-picker-label">
                                                                                    <label>Birthday</label>
                                                                                </div>
                                                                                <span className="full-width undefined ant-calendar-picker">
                                                                                    <div>
                                                                                        <input readOnly="" className="ant-calendar-picker-input ant-input" defaultValue=""/>
                                                                                    </div>
                                                                                </span>
                                                                            </span>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className=" text-input-wrapper ">
                                                                <div className="col-lg-12">
                                                                    <div className="ant-row ant-form-item full-width">
                                                                        <div className="ant-col ant-form-item-label">
                                                                            <label className="ant-form-item-no-colon" title="">
                                                                                <span>Place of birth </span>
                                                                            </label>
                                                                        </div>
                                                                        <div className="ant-col ant-form-item-control-wrapper">
                                                                            <div className="ant-form-item-control">
                                                                            <span className="ant-form-item-children">
                                                                                <input name="birthplace" formid="edit_profile" leftcol="0" rightcol="0" placeholder="" type="text" className="ant-input" defaultValue=""/>
                                                                            </span>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className=" text-input-wrapper ">
                                                                <div className="col-lg-12">
                                                                    <div className="ant-row ant-form-item full-width">
                                                                        <div className="ant-col ant-form-item-label">
                                                                            <label className="ant-form-item-no-colon" title="">
                                                                                <span>National </span>
                                                                            </label>
                                                                        </div>
                                                                        <div className="ant-col ant-form-item-control-wrapper">
                                                                            <div className="ant-form-item-control">
                                                                            <span className="ant-form-item-children">
                                                                                <input name="ethnicity" formid="edit_profile" leftcol="0" rightcol="0" placeholder="" type="text" className="ant-input" defaultValue=""/>
                                                                            </span>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className=" text-input-wrapper ">
                                                                <div className="col-lg-12">
                                                                    <div className="ant-row ant-form-item">
                                                                        <div className="ant-col ant-form-item-label">
                                                                            <label className="ant-form-item-no-colon" title="">
                                                                                <span>Email </span>
                                                                            </label>
                                                                        </div>
                                                                        <div className="ant-col ant-form-item-control-wrapper">
                                                                            <div className="ant-form-item-control">
                                                                            <span className="ant-form-item-children">
                                                                                <input name="mail" formid="edit_profile" leftcol="0" rightcol="0" type="text" className="ant-input" defaultValue=""/>
                                                                            </span>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                        </form>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="form-button-groups">
                                        <div className="submit-btn-wrapper">
                                            <div className="save-submit-button">
                                                <button tabIndex="0" type="submit" >
                                                    <span>Save</span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default MyAccount
