import React, {Component} from 'react';
import {Link} from "react-router-dom";

class Home extends Component {
    render() {
        return (
            <div>
                <header className="header">
                    <div className="main-header">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-3 header-logo">
                                    <a href=''><img src="https://lh3.googleusercontent.com/pw/ACtC-3e3jt4qrxGePyuyNDYm7OtbJVQky-t5Keh8RXbcJQMsHpYZE0fNi6A6OzmvXmTr6Xhn8NUPADERBquW3pHE025LYTAV7nOcyLPb537sualJMHyiUyXZNUWn7zXyYAz_LbWXFFJs6AyVsjC71QyWQLeA=w603-h667-no?authuser=0" height="100" width="112" alt="image"/></a>
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
                                                    <Link className="home" to={'/'}> HOME</Link>
                                                </li>
                                                <li>
                                                    <Link className="home" to={'/'}>ACCESSORIES</Link>
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
                                                <li><Link className="home" to={'/product'}>ALL PRODUCT</Link>
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
                                                                        <li> <Link to={'/'}><p>Suitcse</p></Link> </li>
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
                                                <li><Link className="home" to={'/'}>HOT</Link>
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
                                                <li>
                                                    <Link className="home" to={'/'}>TRADEMARK</Link>
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
                                                <li> <Link className="home" to={'/'}> BLOG </Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <div className="Menuright">
                                            <ul>
                                                <li><Link className="home" to={'/cart'}>0 ITEM(S) - $0.00 <i className="fas fa-angle-down"/></Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
                <section className="slider">
                    <div id="slider" className="nivoSlider">
                        <img src="https://lh3.googleusercontent.com/pw/ACtC-3fmSSJVs0jXjqg-92MuWkiCTT8no_7iUsZ_mqsQouskZPgvnqmrSobLMB9KiIlERprnVLN83b_94xW2I47vUfB1TYCiehWS1yS3q_MvSjl8MSoPS5qa8dG2_ESbZk0U5EfmScyWYyXezZPoydR0Cq1v=w1366-h641-no?authuser=0" width="100%" height="100%" alt="image"/>
                        <img src="https://lh3.googleusercontent.com/pw/ACtC-3e-BpUPjLaFND3GfdZ6BTknvvbImSHVnqHPYIsqLu6140TrulfmZAwcKPeEb7zYmJdysUgHRCt4mHWeK8js2UQmGTYzCb4VKm_W_wjQ1Y3WDMCja6vnpenxv3cz2Q7ag0vNaKMzspH-Lh-1N9O77c8J=w1366-h641-no?authuser=0" width="100%" height="100%" alt="image"/>
                        <img src="https://lh3.googleusercontent.com/pw/ACtC-3fmSSJVs0jXjqg-92MuWkiCTT8no_7iUsZ_mqsQouskZPgvnqmrSobLMB9KiIlERprnVLN83b_94xW2I47vUfB1TYCiehWS1yS3q_MvSjl8MSoPS5qa8dG2_ESbZk0U5EfmScyWYyXezZPoydR0Cq1v=w1366-h641-no?authuser=0" width="100%" height="100%" alt="image"/>
                        <img src="https://lh3.googleusercontent.com/pw/ACtC-3e-BpUPjLaFND3GfdZ6BTknvvbImSHVnqHPYIsqLu6140TrulfmZAwcKPeEb7zYmJdysUgHRCt4mHWeK8js2UQmGTYzCb4VKm_W_wjQ1Y3WDMCja6vnpenxv3cz2Q7ag0vNaKMzspH-Lh-1N9O77c8J=w1366-h641-no?authuser=0" width="100%" height="100%" alt="image"/>
                    </div>
                </section>
                <section className="section">
                    <div className="box1 text-center">
                        <span>
                            <strong>New arrivals</strong>
                        </span>
                    </div>
                    <ul className="text-center">
                        <li><Link to={'/'}><strong>ALL</strong></Link></li>
                        <li><Link to={'/'}><strong>HANDBAG</strong></Link></li>
                        <li><Link to={'/'}><strong>BACKPACKS</strong></Link></li>
                        <li><Link to={'/'}><strong>SUITCASE</strong></Link></li>
                    </ul>
                </section>
                <main className="main">
                    <div className="product">
                        <div className="container">
                            <h2 className="tiltle"/>
                            <div className="row">
                                <div className="col-md-13 pro-item">
                                    <div className="thumbnail">
                                        <div className="img">
                                            <Link to={'/'}><img src="https://lh3.googleusercontent.com/pw/ACtC-3faIc3RYzZ9evdCSZuog2iY61OTiFGESPbRor8hPfR3wSN7n7aFjRCQQtuu9gHYOBsGBRkDfRixh2V-yOJ1MQ2vDGM4sd_1k1dVePMyGCMcHBFUcqhzJoi50gRx5jGNnrD-9XuKZFc4Yrk9dLab_HTb=s330-no?authuser=0" height="225" alt="image"/></Link>
                                            <div className="list">
                                                <ul>
                                                    <li><Link to={'/'}><i className="fas fa-shopping-cart ca"/></Link></li>
                                                    <li><Link to={'/'}><i className="far fa-heart ti"/></Link></li>
                                                    <li><Link to={'/'}><i className="fas fa-random rd"/></Link></li>
                                                    <li><Link to={'/'}><i className="far fa-eye ey"/></Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="text">
                                            <div className="star">
                                                <i className="fas fa-star"/>
                                                <i className="fas fa-star"/>
                                                <i className="fas fa-star"/>
                                                <i className="fas fa-star"/>
                                                <i className="fas fa-star"/>
                                            </div>
                                        <br/>
                                        <p>
                                            <Link to={'/'}>Donec vel nunc sit amet tellus vitae</Link>
                                        </p>
                                        <h4><strong><span className="line">$112.00</span></strong></h4>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-13 pro-item">
                                    <div className="thumbnail">
                                        <div className="img">
                                            <Link to={'/'}><img src="https://lh3.googleusercontent.com/pw/ACtC-3fjnmqGNO1IpqrFOmDwRajfWiTesWqEs8NY5kU0ATV0WIzlH92oxezDCy57JlbkCBqK896lbrK3_5lQxBKAeMOofLwd3D7jaOi5GvOKMx54GzhYEXaG1j2_PUUDgSnOnWewi9RxxzYxNVe_JICCStJ_=s330-no?authuser=0" height="225" alt="image"/></Link>
                                            <div className="list">
                                                <ul>
                                                    <li><Link to={'/'}><i className="fas fa-shopping-cart ca"/></Link></li>
                                                    <li><Link to={'/'}><i className="far fa-heart ti"/></Link></li>
                                                    <li><Link to={'/'}><i className="fas fa-random rd"/></Link></li>
                                                    <li><Link to={'/'}><i className="far fa-eye ey"/></Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="text">
                                            <div className="star">
                                                <i className="fas fa-star"/>
                                                <i className="fas fa-star"/>
                                                <i className="fas fa-star"/>
                                                <i className="fas fa-star"/>
                                                <i className="fas fa-star"/>
                                            </div>
                                            <br/>
                                            <p>
                                                <Link to={'/'}>Cras vitae sagittis diam eget augue</Link>
                                            </p>
                                            <h4><strong><span className="line-1">$45.00 </span><span className="line"> $39.00</span></strong></h4>
                                        </div>
                                        <div className="sale" >
                                            <div className="SL">
                                                <Link to={'/'}>Sale!</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-13 pro-item">
                                    <div className="thumbnail">
                                        <div className="img">
                                            <Link to={'/'}><img src="https://lh3.googleusercontent.com/pw/ACtC-3d_MyzBzjzZhb-5guwQ34vU7b1I7V7QVjwZJf6mmlpVXrWLuNU5mCaN0y7ZBi1mNV6J9_BsA2sS1DqrnYrWYhtUOCcf2xndSuUUm2EAGJfyS5TCjOaC6cnyJ8jpgFZRtPq8qfqmU2Yhf16YjsWfscTK=s330-no?authuser=0" height="225" alt="image"/></Link>
                                            <div className="list">
                                                <ul>
                                                    <li><Link to={'/'}><i className="fas fa-shopping-cart ca"/></Link></li>
                                                    <li><Link to={'/'}><i className="far fa-heart ti"/></Link></li>
                                                    <li><Link to={'/'}><i className="fas fa-random rd"/></Link></li>
                                                    <li><Link to={'/'}><i className="far fa-eye ey"/></Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="text">
                                            <div className="star">
                                                <i className="fas fa-star"/>
                                                <i className="fas fa-star"/>
                                                <i className="fas fa-star"/>
                                                <i className="fas fa-star"/>
                                                <i className="fas fa-star"/>
                                            </div>
                                            <br/>
                                            <p>
                                                <Link to={'/'}>Phasellus eu auctor tempor gravida auctor eu</Link>
                                            </p>
                                            <h4><strong><span className="line">$112.00</span></strong></h4>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-13 pro-item">
                                    <div className="thumbnail">
                                        <div className="img">
                                            <Link to={'/'}><img src="https://lh3.googleusercontent.com/pw/ACtC-3ctWEOhwd8XLkxm3oCBFZfCMOUZBhpw0makIV0j9VC6WTakvk8a-_8pdYqdF5yylcVKzxwzg7CztZ33L8xNLXH1Rph53TlSzrmuc78W4XVU5UevMGJDJkysOwoG6WBKJ3Hwnyumyw2y8HrTfEPNXRz4=s330-no?authuser=0" height="225" alt="image"/></Link>
                                            <div className="list">
                                                <ul>
                                                    <li><Link to={'/'}><i className="fas fa-shopping-cart ca"/></Link></li>
                                                    <li><Link to={'/'}><i className="far fa-heart ti"/></Link></li>
                                                    <li><Link to={'/'}><i className="fas fa-random rd"/></Link></li>
                                                    <li><Link to={'/'}><i className="far fa-eye ey"/></Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="text">
                                            <div className="star">
                                                <i className="fas fa-star"/>
                                                <i className="fas fa-star"/>
                                                <i className="fas fa-star"/>
                                                <i className="fas fa-star"/>
                                                <i className="fas fa-star"/>
                                            </div>
                                        <br/>
                                        <p>
                                            <Link to={'/'}>Phasellus eu enim tempor dapibus massa eu</Link>
                                        </p>
                                        <h4><strong><span className="line-1">$45.00 </span><span className="line"> $39.00</span></strong></h4>
                                        </div>
                                        <div className="sale">
                                            <div className="SL">
                                                <Link to={'/'}>Sale!</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-13 pro-item">
                                    <div className="thumbnail">
                                        <div className="img">
                                            <Link to={'/'}><img src="https://lh3.googleusercontent.com/pw/ACtC-3d9F-_dTb3L7XQUF8HRs5hacR4WhHqXKhiRS1-S6YUvfX0g0OQTujhPvRlZ0ncxzu1LeH16ij43OcVQEDR3CnbXBVcdHEvRchx7Q623sOwYej6sgDx4eYahtuhWD1RqwliyBfrFz69G0kM8mrI0zAmb=s330-no?authuser=0" height="225" alt="image"/></Link>
                                            <div className="list">
                                                <ul>
                                                    <li><Link to={'/'}><i className="fas fa-shopping-cart ca"/></Link></li>
                                                    <li><Link to={'/'}><i className="far fa-heart ti"/></Link></li>
                                                    <li><Link to={'/'}><i className="fas fa-random rd"/></Link></li>
                                                    <li><Link to={'/'}><i className="far fa-eye ey"/></Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="text">
                                            <div className="star">
                                                <i className="fas fa-star"/>
                                                <i className="fas fa-star"/>
                                                <i className="fas fa-star"/>
                                                <i className="fas fa-star"/>
                                                <i className="fas fa-star"/>
                                            </div>
                                            <br/>
                                            <p>
                                                <Link to={'/'}>Etiam cursus con vallis massa ac facilisis sapien</Link>
                                            </p>
                                            <h4><strong><span className="line">$112.00</span></strong></h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-13 pro-item">
                                    <div className="thumbnail">
                                        <div className="img">
                                            <Link to={'/'}><img src="https://lh3.googleusercontent.com/pw/ACtC-3cUfHZ5HMmpPQg6wUwC9YkyKO0GhWa-fe486yidfl7wWQom_HFTa8lOmK_i97ULNerRIs2dG2O4VF2jVUYAmcD3Ux6zBwuxkOMIJYcdGd-xc3z3s9ktNVbYmjJpRrxF7LXAevHtv6K6x3SOuNE0gD2M=s330-no?authuser=0" height="225" alt="image"/></Link>
                                            <div className="list">
                                                <ul>
                                                    <li><Link to={'/'}><i className="fas fa-shopping-cart ca"/></Link></li>
                                                    <li><Link to={'/'}><i className="far fa-heart ti"/></Link></li>
                                                    <li><Link to={'/'}><i className="fas fa-random rd"/></Link></li>
                                                    <li><Link to={'/'}><i className="far fa-eye ey"/></Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="text">
                                            <div className="star">
                                                <i className="fas fa-star"/>
                                                <i className="fas fa-star"/>
                                                <i className="fas fa-star"/>
                                                <i className="fas fa-star"/>
                                                <i className="fas fa-star"/>
                                            </div>
                                            <br/>
                                            <p>
                                                <Link to={'/'}>Etiam cursus male suada massa ac facilisis sapien</Link>
                                            </p>
                                            <h4><strong><span className="line">$112.00</span></strong></h4>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-13 pro-item">
                                    <div className="thumbnail">
                                        <div className="img">
                                            <Link to={'/'}><img src="https://lh3.googleusercontent.com/pw/ACtC-3c5k5LEgpsGu0oTwFU2BhIw64JM0KV3RDNTwAjLB4PSpriXAPPzxzbddEoiQFHQ2GPbDszgR40LF1fdqf9wJITy1eR1pl9Duua2S01eWCTy5wnlMp474xXzMaYiyjZAdMAvQ0j9djTfAXz2auG_6opz=s330-no?authuser=0" height="225" alt="image"/></Link>
                                                <div className="list">
                                                    <ul>
                                                        <li><Link to={'/'}><i className="fas fa-shopping-cart ca"/></Link></li>
                                                        <li><Link to={'/'}><i className="far fa-heart ti"/></Link></li>
                                                        <li><Link to={'/'}><i className="fas fa-random rd"/></Link></li>
                                                        <li><Link to={'/'}><i className="far fa-eye ey"/></Link></li>
                                                    </ul>
                                                </div>
                                        </div>
                                        <div className="text">
                                            <div className="star">
                                                <i className="fas fa-star"/>
                                                <i className="fas fa-star"/>
                                                <i className="fas fa-star"/>
                                                <i className="fas fa-star"/>
                                                <i className="fas fa-star"/>
                                            </div>
                                        <br/>
                                        <p>
                                            <Link to={'/'}>Cras auctor purus at tellus ullam aptent nostra</Link>
                                        </p>
                                        <h4><strong><span className="line">$112.00</span></strong></h4>
                                    </div>
                                </div>
                                </div>
                                <div className="col-md-13 pro-item">
                                    <div className="thumbnail">
                                        <div className="img">
                                            <Link to={'/'}><img src="https://lh3.googleusercontent.com/pw/ACtC-3e6JQLzG1H4kx1_HqATE3QFayCW13_n8C_LDPs9LYr387bHmMRdnC8xl8xqcRBdwxZHmhYlM-ggA_hOtESkz6xU49FQ3X4Nfbgrv0floWOxDu5o6JvbZMUWu-TeAnAzjbuMJo_tCd-imlK41kroZAcF=s330-no?authuser=0" height="225" alt="image"/></Link>
                                                <div className="list">
                                                    <ul>
                                                        <li><Link to={'/'}><i className="fas fa-shopping-cart ca"/></Link></li>
                                                        <li><Link to={'/'}><i className="far fa-heart ti"/></Link></li>
                                                        <li><Link to={'/'}><i className="fas fa-random rd"/></Link></li>
                                                        <li><Link to={'/'}><i className="far fa-eye ey"/></Link></li>
                                                    </ul>
                                                </div>
                                        </div>
                                        <div className="text">
                                            <div className="star">
                                                <i className="fas fa-star"/>
                                                <i className="fas fa-star"/>
                                                <i className="fas fa-star"/>
                                                <i className="fas fa-star"/>
                                                <i className="fas fa-star"/>
                                            </div>
                                            <br/>
                                            <p>
                                                <Link to={'/'}>Nullam lao reet felis quis risus vulpu mauris</Link>
                                            </p>
                                            <h4><strong><span className="line-1">$45.00 </span><span className="line"> $39.00</span></strong></h4>
                                        </div>
                                        <div className="sale" >
                                            <div className="SL">
                                                <Link to={'/'}>Sale!</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-13 pro-item">
                                    <div className="thumbnail">
                                        <div className="img">
                                            <Link to={'/'}><img src="https://lh3.googleusercontent.com/pw/ACtC-3dNRMWcDX4aCfWIE7DGkg5e_9yCTmTh9Bg4Upac0zE6y7_du5if9c39b8597yKHgKdLKTktsi3qbDf2TzJ4QW4-DgHvSPXEJ4lFFrVjC23bvyH8Nu59hseJhqaXaz1zax18BkDD20IYuWWNQGZtPUp1=s330-no?authuser=0" height="225" alt="image"/></Link>
                                                <div className="list">
                                                    <ul>
                                                        <li><Link to={'/'}><i className="fas fa-shopping-cart ca"/></Link></li>
                                                        <li><Link to={'/'}><i className="far fa-heart ti"/></Link></li>
                                                        <li><Link to={'/'}><i className="fas fa-random rd"/></Link></li>
                                                        <li><Link to={'/'}><i className="far fa-eye ey"/></Link></li>
                                                    </ul>
                                                </div>
                                        </div>
                                        <div className="text">
                                            <div className="star">
                                                <i className="fas fa-star"/>
                                                <i className="fas fa-star"/>
                                                <i className="fas fa-star"/>
                                                <i className="fas fa-star"/>
                                                <i className="fas fa-star"/>
                                            </div>
                                            <br/>
                                            <p>
                                                <Link to={'/'}>Curabitur iaculis enim elemen tum lorem</Link>
                                            </p>
                                            <h4><strong><span className="line">$112.00</span></strong></h4>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-13 pro-item">
                                    <div className="thumbnail">
                                        <div className="img">
                                            <Link to={'/'}><img src="https://lh3.googleusercontent.com/pw/ACtC-3f4UqUyLScwjT7bHi8guAxO7dvDLY_SqNNKnjjA-v9j7CsPf4xjKkVVMaJckMlIGlB4Dff4dLL6lKzjuKa60VeLYscwNyeS0pTIVB6Q_VrXGyU-I00Ifh-jWjWnhUymhppIIvZti8Lj05GEJ4JUpZ_D=s330-no?authuser=0" height="225" alt="image"/></Link>
                                                <div className="list">
                                                    <ul>
                                                        <li><Link to={'/'}><i className="fas fa-shopping-cart ca"/></Link></li>
                                                        <li><Link to={'/'}><i className="far fa-heart ti"/></Link></li>
                                                        <li><Link to={'/'}><i className="fas fa-random rd"/></Link></li>
                                                        <li><Link to={'/'}><i className="far fa-eye ey"/></Link></li>
                                                    </ul>
                                                </div>
                                        </div>
                                        <div className="text">
                                            <div className="star">
                                                <i className="fas fa-star"/>
                                                <i className="fas fa-star"/>
                                                <i className="fas fa-star"/>
                                                <i className="fas fa-star"/>
                                                <i className="fas fa-star"/>
                                            </div>
                                            <br/>
                                            <p>
                                                <Link to={'/'}>Nulla finibus magna sit amet ullam</Link>
                                            </p>
                                            <h4><strong><span className="line">$112.00</span></strong></h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <section className="section2">
                            <div className="box1 text-center">
                                <button className="btn1" type="submit"><strong>LOAD MORE ITEM</strong></button>
                            </div>
                        </section>
                    </div>
                </main>
            </div>
        )
    }
}

export default Home
