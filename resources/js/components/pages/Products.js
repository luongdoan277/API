import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Product extends Component{
    render() {
        return(
            <div>
                <header className="border-bottom1">
                    <div className="main-header">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-3 header-logo">
                                    <a href=''><img src="https://lh3.googleusercontent.com/pw/ACtC-3fRioXmYKdSlKPDDGP2PQjQzIpH4kJDbUNT9bmnZJdiaHeuvIz61lDOwbJ3_Ruvo4daRxEnd-cB6xCuxkiyeiva4VO5V0ahGSIbYfonEHJKIhz_9gpipsjILzc7hP0Pi2-tAA92UbRq-I7Sb3fUe3MT=w603-h667-no?authuser=0" height="100" width="112" alt="image"/></a>
                                </div>
                                <div className="col-lg-6 seach">
                                    <form action="" method="get" id="">
                                        <input type="text" className="form-control" id="search-top" placeholder="What are you looking for?"/>
                                        <button type="submit" className="navbar-default">
                                            <i className="fas fa-search"/>
                                        </button>
                                    </form>
                                </div>
                                <div className="col-lg-3">

                                </div>
                            </div>
                        </div>
                    </div>
                    <div  className="TopMenu">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="col-lg-9">
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
                                                                <div className="col-lg-6">
                                                                    <ul>
                                                                        <Link to={'/'}><li className="nav-main-menu__submenu-list__item ">Wallets</li></Link>
                                                                        <Link to={'/'}><li className="nav-main-menu__submenu-list__item ">Cardholders</li></Link>
                                                                        <Link to={'/'}><li className="nav-main-menu__submenu-list__item ">Technology</li></Link>
                                                                        <Link to={'/'}><li className="nav-main-menu__submenu-list__item ">Toiletry Bags</li></Link>
                                                                        <Link to={'/'}><li className="nav-main-menu__submenu-list__item ">Clutches</li></Link>
                                                                    </ul>
                                                                </div>
                                                                <div className="col-lg-6">
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
                                                <li><Link className="page" to={'/'}>ALL PRODUCT</Link>
                                                    <ul className="Menu-main Menucon">
                                                        <div className="row">
                                                            <div className="col-lg-12">
                                                                <div className=" col-lg-2 ">
                                                                    <ul>
                                                                        <li><Link to={'/'}><p/></Link></li>
                                                                    </ul>
                                                                    <img src="https://lh3.googleusercontent.com/pw/ACtC-3dt1uaVSlK0jbcIjEjPUXM2KzPgceoCLTop4DJ9RIcZP317RRXJdAuLzU0zK3ahHHGIiLQnIrFexfR1cRgp3229VwPhG3zLWM4iEgyH3ezvtSkvGzzqWnfr4pm4OmFrWSNLmCaU3CMs9pAkz4WO5Gz6=w120-h30-no?authuser=0" alt="image"/>
                                                                    <p className="l1">Laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                                                                    <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia.</p>
                                                                </div>
                                                                <div className=" main col-lg-2"><img src="https://lh3.googleusercontent.com/pw/ACtC-3ejocSiCATTXzwgEn0n2L5TdAL96EfeCr7U2NDLVDOys5Nx55PueosBiN9QFJseRDbJRQwWQG0ZQTNyD0zriJwJ9Y4EWLgrSK-XRK5IQP4Q8p3NHTcQL_wYOKLU-kAigzFgd0fnJBdNjj00Pj0bT2vK=s667-no?authuser=0" width="129.67" height="129.67" alt="image"/>
                                                                    <p>ALIQUAM ERAT VOLUTPAT BAG</p>
                                                                    <p> <span> $122.00</span> <span className="RED"> $110.00 </span></p>
                                                                </div>
                                                                <div className="main col-lg-2"><img src="https://lh3.googleusercontent.com/pw/ACtC-3cSed3l4l-wAWjsRN06Gwq_r1abwLovrKtQX1oCFDwOvwy5Xq1-30nAxDDOmM-3VL4uVlIAsjSaxQR94gc9C_Qtzq2zP0lRXZBNLg8tALxYH-yh3cKCbaawj000UhW81_X3pVXByJknYUAXNgQpBgu4=s200-no?authuser=0" width="129.67" height="129.67" alt="image"/>
                                                                    <p>ALIQUAM SUSCIPIT BAG </p>
                                                                    <p> <span> $122.00</span> <span className="RED">  $98.00 </span></p></div>
                                                                <div className="col-lg-2">
                                                                    <ul>
                                                                        <li> <Link to={'/'}>Suitcse</Link> </li>
                                                                        <li><Link to={'/'}>Suitcase Plastic</Link></li>
                                                                        <li><Link to={'/'}>Suitcase Cloth</Link></li>
                                                                        <li><Link to={'/'}>Suitcase Small</Link></li>
                                                                        <li><Link to={'/'}>Suitcase Medium</Link></li>
                                                                        <li><Link to={'/'}>Suitcase Big</Link></li>
                                                                    </ul>
                                                                </div>
                                                                <div className="col-lg-2">
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
                                                                <div className="col-lg-2">
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
                                                                <div className=" col-lg-6">
                                                                    <Link to={'/'}>
                                                                        <img src="https://lh3.googleusercontent.com/pw/ACtC-3cxAyQbbLVg2vk3VbTa1YAmpZiZfFvkvKC-4h8nf_8Wx6eefCKnBMG6haVpMyByOY6NgCjReXaR2koiczuWBzalypF5yDUncjUeo3pZSU1dJFKGwEuSo8N-yO1aG6F_iLSeeJE8CoetyxpUpUlo9njG=s170-no?authuser=0" width="185px" alt="image"/>
                                                                        <p>CONSECTETUR ADIPISCING BAG</p>
                                                                    </Link>
                                                                    <p> $210.00</p>
                                                                </div>
                                                                <div className="col-lg-6">
                                                                    <Link to={'/'}>
                                                                        <img src="https://lh3.googleusercontent.com/pw/ACtC-3f6hKYwNAfLqZDxXgR0O0Lcy33IYaFk5nrFMrayJ4Wayi9ryPF-VlqS9Rr2gtvCehGNyE09NQb2wAohMd8XmyNpYOFB0FlOVhVjWpRdYzi7TX25vxR8MtFrO12bo8CJ_g8z-5Xux1YSPUZaw344yxLM=s170-no?authuser=0" width="185px" alt="image"/>
                                                                        <p>CUM SOCIIS NATOQUE BAG</p>
                                                                    </Link>
                                                                    <p> $1999.00</p>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-12">
                                                                <div className=" col-lg-6">
                                                                    <Link to={'/'}>
                                                                        <img src="https://lh3.googleusercontent.com/pw/ACtC-3cP54dr6z3Uk_9u2IopR11QXiYiLUJfgVIf7WvlzQTKCQNwNlzADUr-YvL-vlmxahtiuWdCkLz5lFEtEypZpD7LhTjQunB5I4w3KcbOGGIClyP3UGlh7peDg3rpUGGEUX30DadNuShOV2UdEEpU62Bj=s80-no?authuser=0" width="185px" alt="image"/>
                                                                        <p>PALM TREO PRO BAG</p>
                                                                    </Link>
                                                                    <p> $ 22.00</p>
                                                                </div>
                                                                <div className="col-lg-6">
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
                                                                <div className="col-lg-2"><Link to={'/'}><img width="101.38" src="https://hol.com.vn/Data/Sites/1/media/thuong-hieu/logo/d2.png" alt="image"/></Link></div>
                                                                <div className="col-lg-2"><Link to={'/'}><img width="86.81" height="35" src="https://hol.com.vn/Data/Sites/1/media/thuong-hieu/logo/logo_skybags.png" alt="image"/> </Link></div>
                                                                <div className="col-lg-2"><Link to={'/'}><img width="133.23" src="https://hol.com.vn/Data/Sites/1/media/logo/logo_carlton.png" alt="image"/> </Link></div>
                                                                <div className="col-lg-2"><Link to={'/'}><img width="104.35" src="https://hol.com.vn/Data/Sites/1/media/thuong-hieu/logo/d4.png" alt="image"/> </Link></div>
                                                                <div className="col-lg-2"><Link to={'/'}><img width="86.95" height="39.19" src="https://hol.com.vn/Data/Sites/1/media/thuong-hieu/logo/d5.png" alt="image"/> </Link></div>
                                                                <div className="col-lg-2"><Link to={'/'}><img width="40.75" src="https://hol.com.vn/Data/Sites/1/media/kamiliant-logo-crop-2.png" alt="image"/> </Link></div>
                                                            </div>
                                                        </div>
                                                    </ul>
                                                </li>
                                                <li> <Link className="page" to={'/'}> BLOG </Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-lg-3">
                                        <div className="Menuright">
                                            <ul>
                                                <li><Link className="page" to={'/'}>0 ITEM(S) - $0.00 <i className="fas fa-angle-down"/></Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
                <section className="row product-list">
                    <div className="container">
                        <div className="col-lg-3 spider_man">
                            <h3>WOMEN</h3>
                            <ul className="may">
                                <li>
                                    <Link to={'/'}>Departments</Link>
                                    <ul className="menu1">
                                        <li>
                                            <Link to={'/'}>Sweater<i className="fas fa-chevron-right icon pull-right"/></Link>
                                        </li>
                                        <li>
                                            <Link to={'/'}>Knit Top &amp; Tees<i className="fas fa-chevron-right icon pull-right "/></Link>
                                        </li>
                                        <li>
                                            <Link to={'/'}>Shirts &amp; Bloues<i className="fas fa-chevron-right icon pull-right"/></Link>
                                        </li>
                                        <li>
                                            <Link to={'/'}>Jackets<i className="fas fa-chevron-right icon pull-right"/></Link>
                                        </li>
                                        <li>
                                            <Link to={'/'}>Pants<i className="fas fa-chevron-right icon pull-right"/></Link>
                                        </li>
                                        <li>
                                            <Link to={'/'}>Jeans<i className="fas fa-chevron-right icon pull-right"/></Link>
                                        </li>
                                        <li>
                                            <Link to={'/'}>Dresses<i className="fas fa-chevron-right icon pull-right"/></Link>
                                        </li>
                                        <li><Link to={'/'}>Shirts<i className="fas fa-chevron-right icon pull-right"/></Link></li>
                                    </ul>
                                </li>
                                <li>
                                    <Link to={'/'}>Collection</Link>
                                    <ul className="menu1">
                                        <li>
                                            <Link to={'/'}>All Bands<i className="fas fa-chevron-right icon pull-right"/></Link>
                                        </li>
                                        <li>
                                            <Link to={'/'}>Citizens of Humanitys<i className="fas fa-chevron-right icon pull-right "/></Link>
                                        </li>
                                        <li>
                                            <Link to={'/'}>Crew Clothing<i className="fas fa-chevron-right icon pull-right"/></Link>
                                        </li>
                                        <li>
                                            <Link to={'/'}>Boutique<i className="fas fa-chevron-right icon pull-right"/></Link>
                                        </li>
                                        <li>
                                            <Link to={'/'}>Summer<i className="fas fa-chevron-right icon pull-right"/></Link>
                                        </li>
                                        <li>
                                            <Link to={'/'}>Mudd &amp; Water<i className="fas fa-chevron-right icon pull-right"/></Link>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <Link to={'/'}>Price</Link>
                                    <ul className="menu2">
                                        <li><Link to={'/'}> $50 to $100</Link></li>
                                        <li><Link to={'/'}>$100 to $200</Link></li>
                                        <li><Link to={'/'}> $200 to $500</Link></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                        <main className="main">
                            <div className="col-lg-9 puni_sher">
                                <img src="https://lh3.googleusercontent.com/pw/ACtC-3fga0lIO4n57PLF5-GVJo8UZYSuhIQ3oE0pccdfoMVjT6rtrQ1fgVFSSH9LLZ9g2CCB9-SAmPP24CAXm0-n3N5x2k-rL3-V9nbnobmzmoVpGsgxjtJozzJs-eDJ2ojT6YzRkERu7SqXupZiVN7H5zDy=w1196-h294-no?authuser=0" width="100%" alt=""/>
                                <div className="col-lg-12">
                                    <ul className="col-lg-12 homefake">
                                        <li>
                                            <Link to={'/'}>
                                                <div>Home</div>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to={'/'}>Women<i className="fas fa-chevron-right mountain pull-right"/></Link>
                                        </li>
                                        <li>
                                            <Link to={'/'}>Shirts &amp; Bloues<i className="fas fa-chevron-right mountain pull-right"/></Link>
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-lg-12">
                                    <form action="" method="post" className="form-inline" role="form">
                                        <div className="sort">
                                            <div className="form-group float-left">
                                                <label htmlFor="">SORT BY:</label>
                                                <select name="gender" className="form-control mail_box">
                                                    <option value="">Price</option>
                                                    <option value="">Name</option>
                                                </select>
                                            </div>
                                            <div className="form-group float-left">
                                                <label htmlFor="">VIEW AS:</label>
                                                <Link to={'/'}><i className="fas fa-th-large option_logo"/></Link>
                                                <Link to={'/'}><i className="fas fa-list-ul option_logo"/></Link>
                                            </div>
                                            <div className="form-group float-right">
                                                <label htmlFor="">SORT AS:</label>
                                                <select name="gender" className="form-control mail_box">
                                                    <option value="">12 Items</option>
                                                    <option value="">24 Items</option>
                                                </select>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                                <div className="product">
                                    <div className="band pull-left">
                                        <div className="col-sm-4 pro-item">
                                            <div className="thumbnail">
                                                <img src="https://lh3.googleusercontent.com/pw/ACtC-3f8e7NrsS7z4DQZfSzGbi4sau4ArOR0cZ23719l8PJoBCVtH9ZpAdzzo4y_32Va_TRwZwcSR-ODUAwxQx_lORFZhEHqYtOzQkapB8yi_k85C789yizDXmfT8VF4r9nkW9zk67kU6gdZSvalwiQSbGd2=s667-no?authuser=0" width={"100%"} alt=""/>
                                                <div className="caption">
                                                    <h3>CN Clogs Beach/Garden Clog</h3>
                                                    <div className="pro-text">
                                                        Comfortable and fun to wear these clogs are the latest trend in fash
                                                    </div>
                                                    <p>
                                                        <Link to={'/'} className="btn btn-link pull-left">View more</Link>
                                                        <span className="pull-right pro-btn">
                                                            <Link to={'/'} className="btn btn-danger btn-price">$76.00</Link>
                                                            <Link to={'/'} className="btn btn-success btn-cart">Add to cart</Link>
                                                        </span>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-6 col-lg-4 pro-item">
                                            <div className="thumbnail">
                                                <img src="https://lh3.googleusercontent.com/pw/ACtC-3fdw7fgUSBHldVfQit4MfZ4WS2jXb4QrCtykJSDMh2rgDZyBTbX-vBhKCW_aqIE7aL5aRGX49uzKZWpWrdGwkfbKTsc-ujLVv0ZQiMHbnygDEgVWBcYFkmzGApuCklV4Nihp1aar4M9ylymC7ZFdD8q=s667-no?authuser=0" width={"100%"} alt=""/>
                                                <div className="caption">
                                                    <h3>CN Clogs Beach/Garden Clog</h3>
                                                    <div className="pro-text">
                                                        Comfortable and fun to wear these clogs are the latest trend in fash
                                                    </div>
                                                    <p>
                                                        <Link to={'/'} className="btn btn-link pull-left">View more</Link>
                                                        <span className="pull-right pro-btn">
                                                            <Link to={'/'} className="btn btn-danger btn-price">$76.00</Link>
                                                            <Link to={'/'} className="btn btn-success btn-cart">Add to cart</Link>
                                                        </span>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-6 col-lg-4 pro-item">
                                            <div className="thumbnail">
                                                <img src="https://lh3.googleusercontent.com/pw/ACtC-3cx9FH_j_wNyZKyrsS8-kpN2Pb1VEVs4E62q3MweejDKFHnT_lqnw5flfIvZVLfznjpkx6kh_q5v5QMxpAqX3lqxy-7pH7yVzJFI6ntqhdSKuYLNCq1oPsWNq_WwMdV4shHgBRRyRGPynDDXZXSR2h1=s667-no?authuser=0" width={"100%"} alt=""/>
                                                <div className="caption">
                                                    <h3>CN Clogs Beach/Garden Clog</h3>
                                                    <div className="pro-text">
                                                        Comfortable and fun to wear these clogs are the latest trend in fash
                                                    </div>
                                                    <p>
                                                        <Link to={'/'} className="btn btn-link pull-left">View more</Link>
                                                        <span className="pull-right pro-btn">
                                                            <Link to={'/'} className="btn btn-danger btn-price">$76.00</Link>
                                                            <Link to={'/'} className="btn btn-success btn-cart">Add to cart</Link>
                                                        </span>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-6 col-lg-4 pro-item">
                                            <div className="thumbnail">
                                                <img src="https://lh3.googleusercontent.com/pw/ACtC-3d_swMfgtH0L-G4NiEFl6Sg_lIeK_NiBDUrqbi72wTUvqWvUYmAfXeekCL4LPfhnjVYQJBy8j9UFMTqxqORjzE8ivTtrnix_qckGU5UyMbAggXWISxoMZpLuRutduB6oxZQ4tyJ6_O5504Chju5EPgP=s579-no?authuser=0" width={"100%"} alt=""/>
                                                <div className="caption">
                                                    <h3>CN Clogs Beach/Garden Clog</h3>
                                                    <div className="pro-text">
                                                        Comfortable and fun to wear these clogs are the latest trend in fash
                                                    </div>
                                                    <p>
                                                        <Link to={'/'} className="btn btn-link pull-left">View more</Link>
                                                        <span className="pull-right pro-btn">
                                                            <Link to={'/'} className="btn btn-danger btn-price">$76.00</Link>
                                                            <Link to={'/'} className="btn btn-success btn-cart">Add to cart</Link>
                                                        </span>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-6 col-lg-4 pro-item">
                                            <div className="thumbnail">
                                                <img src="https://lh3.googleusercontent.com/pw/ACtC-3fOQhx_2jlbpU7L75HM_9P4O5BXl3LydH0xtr2ootRNdzn-96_2McR8uSnKxZIlwDtwlcd1L0f5cLaAGuHv6g9BMeF1C3EtvgISax5SpWM8sw_Cu8obHEzvK_zKF4UiG4raZuhXzmBhwDQrPfrpSCaK=s667-no?authuser=0" width={"100%"} alt=""/>
                                                <div className="caption">
                                                    <h3>CN Clogs Beach/Garden Clog</h3>
                                                    <div className="pro-text">
                                                        Comfortable and fun to wear these clogs are the latest trend in fash
                                                    </div>
                                                    <p>
                                                        <Link to={'/'} className="btn btn-link pull-left">View more</Link>
                                                        <span className="pull-right pro-btn">
                                                            <Link to={'/'} className="btn btn-danger btn-price">$76.00</Link>
                                                            <Link to={'/'} className="btn btn-success btn-cart">Add to cart</Link>
                                                        </span>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-6 col-lg-4 pro-item">
                                            <div className="thumbnail">
                                                <img src="https://lh3.googleusercontent.com/pw/ACtC-3e3duaIZTpU8Gl7sfFdzaw0uU1x106gVr7Sm2aLVFGI8zkYrMw0XhYMwHLA-L4ztwb637VypUcRJ9qSz5Rg0D5vwxH3sOZUQdIYfqI_XxcNc7VAxFQ1pFedaWvhgnxlBgfsDeP83OiPp-wrSW1azsA1=s667-no?authuser=0" width={"100%"} alt=""/>
                                                <div className="caption">
                                                    <h3>CN Clogs Beach/Garden Clog</h3>
                                                    <div className="pro-text">
                                                        Comfortable and fun to wear these clogs are the latest trend in fash
                                                    </div>
                                                    <p>
                                                        <Link to={'/'} className="btn btn-link pull-left">View more</Link>
                                                        <span className="pull-right pro-btn">
                                                            <Link to={'/'} className="btn btn-danger btn-price">$76.00</Link>
                                                            <Link to={'/'} className="btn btn-success btn-cart">Add to cart</Link>
                                                        </span>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </main>
                    </div>
                </section>
            </div>
        )
    }
}

export default Product
