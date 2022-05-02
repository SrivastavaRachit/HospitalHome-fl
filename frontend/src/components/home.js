import { Link } from "react-router-dom";

const Home = () => {

    return (
        <div>
            <div id="topbar" className="d-flex align-items-center fixed-top">
                <div className="container d-flex justify-content-between">
                    <div className="contact-info d-flex align-items-center">
                        <i className="bi bi-envelope"></i> <a href="mailto:contact@example.com">homehospital@gmail.com</a>
                        <i className="bi bi-phone"></i> +91 7849842621
          </div>
                    <div className="d-none d-lg-flex social-links align-items-center">
                        {/* <a href="#" className="twitter"><i className="bi bi-twitter"></i></a> */}
                        <a href="#" className="facebook"><i className="bi bi-facebook"></i></a>
                        <a href="#" className="instagram"><i className="bi bi-instagram"></i></a>
                        {/* <a href="#" className="linkedin"><i className="bi bi-linkedin"></i></a> */}
                    </div>
                </div>
            </div>

            <header id="header" className="fixed-top">
                <div className="container d-flex align-items-center">

                    <h1 className="logo me-auto"><a href="index.html">HomeHospital</a></h1>

                    <nav id="navbar" className="navbar order-last order-lg-0">
                        <ul>
                            <li><a className="nav-link scrollto " href="#hero">Home</a></li>
                            <li><a className="nav-link scrollto " href="#about">About</a></li>
                            {/* <li><a className="nav-link scrollto" href="#services">Services</a></li> */}
                            

                            <li className="dropdown"><a href="#services"><span>Services</span> <i className="bi bi-chevron-down "></i></a>
                                <ul>
                                    {/* <li><a href="/app/liststaff">Nurses</a></li> */}
                                    <li className="dropdown"><a href="/app/liststaff"><span>Nurses</span> <i className="bi bi-chevron-right"></i></a>
                                        <ul>
                                            <li><a href="/app/nursingform">Nursing</a></li>
                                            <li><a href="/app/nursingform">Newborn Baby and Mother Care</a></li>
                                            <li><a href="/app/nursingform">Critical Care</a></li>
                                            <li><a href="/app/nursingform">Elder Care</a></li>
                                            <li><a href="/app/nursingform">Trained Attendent</a></li>
                                            <li><a href="/app/nursingform">Ward Boy</a></li>
                                            
                                        </ul>
                                    </li>
                                    
                                    <li><a href="/app/listequipments">Medical Equipment</a></li>
                                   
                                   
                                </ul>
                            </li>
                            <li><a className="nav-link scrollto " href="#contact">Contact</a></li>
                            <li>
                            <Link to="/app/listequipments" className="nav-link scrollto ">View Equipments</Link>
                            </li>
                            <li>
                            <Link to="/app/listedstaff" className="nav-link scrollto ">View Staff</Link>
                            </li>
                            
                        </ul>
                        <i className="bi bi-list mobile-nav-toggle"></i>
                    </nav>
                   
                    <Link to="/app/register" className="appointment-btn scrollto">Register</Link>
                    <Link to="/app/Login" className="appointment-btn scrollto">Login</Link>

                </div>
            </header>

            <section id="hero" className="d-flex align-items-center">
                <div className="container">
                    <h1>Welcome to HomeHospital</h1>
                    {/* <h2>We are team of talented designers making websites with Bootstrap</h2> */}
                    {/* <a href="#about" className="btn-get-started scrollto">Get Started</a> */}
                </div>
            </section>

            <main id="main">

                <section id="why-us" className="why-us">
                    <div className="container">

                        <div className="row">
                            <div className="col-lg-4 d-flex align-items-stretch">
                                <div className="content">
                                    <h3>Why Choose HomeHospital?</h3>
                                    <p>Home Hospital delivers hospital care in the comfort and privacy of your own home.
                                    You don’t need to stay in hospital to receive the care you need, we bring the care to you.
                                  </p>
                                    {/* <div className="text-center">
                                        <a href="#" className="more-btn">Learn More <i className="bx bx-chevron-right"></i></a>
                                    </div> */}
                                </div>
                            </div>
                            <div className="col-lg-8 d-flex align-items-stretch">
                                <div className="icon-boxes d-flex flex-column justify-content-center">
                                    <div className="row">
                                        <div className="col-xl-4 d-flex align-items-stretch">
                                            <div className="icon-box mt-4 mt-xl-0">
                                                <i className="bx bx-receipt"></i>
                                                <h4>Keeping patients healthy and happy</h4>
                                                <p>There are also proven mental and psychological benefits of care at home that translate into better, less expensive outcomes .</p>
                                            </div>
                                        </div>
                                        <div className="col-xl-4 d-flex align-items-stretch">
                                            <div className="icon-box mt-4 mt-xl-0">
                                                <i className="bx bx-cube-alt"></i>
                                                <h4>Holistic</h4>
                                                <p>Treating you as a whole person, and balancing your clinical, cultural and personal needs in a flexible holistic approach.</p>
                                            </div>
                                        </div>
                                        <div className="col-xl-4 d-flex align-items-stretch">
                                            <div className="icon-box mt-4 mt-xl-0">
                                                <i className="bx bx-images"></i>
                                                <h4>Preventing more expensive care</h4>
                                                <p>Providing care in the home not only reduces overall mortality rates but also helps prevent common expensive . </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </section>

                <section id="about" className="about">
                    <div className="container">

                           <div>

                                <h3 className="section-title">About us</h3>
                                <p>HomeHospital delivers quality care with compassion. We bring world class medical care into our patients’ homes and aim to make primary healthcare not only more accessible, but also more affordable and accountable to our patients’ needs..</p>

                                <div className="icon-box">
                                    <div className="icon"><i className="bx bx-fingerprint"></i></div>
                                    <h4 className="title"><a href="">Vision</a></h4>
                                    <p className="description">HomeHospital HomeCare aims to provide home healthcare of international standards in India. It is a constant endeavor to provide excellence in healthcare through our proactive partnerships with patients, their families and other healthcare providers</p>
                                </div>

                                <div className="icon-box">
                                    <div className="icon"><i className="bx bx-gift"></i></div>
                                    <h4 className="title"><a href="">Mission</a></h4>
                                    <p className="description">Our goal has always been to build trust and reliability. Now with Apollo HomeCare, we look forward to doing so, within the comfort and convenience of the patient's home.</p>
                                </div>

                               

                           
                        </div>

                    </div>
                </section>

                <section id="counts" className="counts">
                    <div className="container">

                        <div className="row">

                            <div className="col-md mt-5">
                                <div className="count-box">
                                    <i className="fas fa-user-md"></i>
                                    <span data-purecounter-start="0" data-purecounter-end="85" data-purecounter-duration="1" className="purecounter"></span>
                                    <p>Nurses</p>
                                </div>
                            </div>

                            <div className="col-md mt-5">
                                <div className="count-box">
                                    <i className="far fa-hospital"></i>
                                    <span data-purecounter-start="0" data-purecounter-end="18" data-purecounter-duration="1" className="purecounter"></span>
                                    <p>Ward Boys</p>
                                </div>
                            </div>

                            <div className="col-md mt-5">
                                <div className="count-box">
                                    <i className="fas fa-flask"></i>
                                    <span data-purecounter-start="0" data-purecounter-end="12" data-purecounter-duration="1" className="purecounter"></span>
                                    <p>Equipments</p>
                                </div>
                            </div>

                           
                        </div>

                    </div>
                </section>

                <section id="services" className="services">
                    <div className="container">

                        <div className="section-title">
                            <h2>Services</h2>
                            {/* <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p> */}
                        </div>

                        <div className="row">
                            {/* <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
                                <div className="icon-box">
                                    <div className="icon"><i className="fas fa-heartbeat"></i></div>
                                    <h4><a href="">Critical Care</a></h4>
                                    <p>Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi</p>
                                </div>
                            </div> */}
{/* 
                            <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0">
                                <div className="icon-box">
                                    <div className="icon"><i className="fas fa-pills"></i></div>
                                    <h4><a href="">Elder Care</a></h4>
                                    <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore</p>
                                </div>
                            </div> */}
{/* 
                            <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-lg-0">
                                <div className="icon-box">
                                    <div className="icon"><i className="fas fa-hospital-user"></i></div>
                                    <h4><a href="">Trained Attendants</a></h4>
                                    <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia</p>
                                </div>
                            </div> */}

                            <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4">
                                <div className="icon-box">
                                    <div className="icon"><i className="fas fa-heartbeat"></i></div>
                                    <h4><a href="/app/liststaff">Ward Boy's</a></h4>
                                    <p>Ward boys are primarily responsible for providing care to a patient, an elderly person, chronically sick person or to a mentally and physically disabled person</p>
                                </div>
                            </div>

                            {/* <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4">
                                <div className="icon-box">
                                    <div className="icon"><i className="fas fa-dna"></i></div>
                                    <h4><a href="">New born Baby & Mother Care</a></h4>
                                    <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis</p>
                                </div>
                            </div> */}

                            <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4">
                                <div className="icon-box">
                                    <div className="icon"><i className="fas fa-wheelchair"></i></div>
                                    <h4><a href="/app/liststaff">Nurses</a></h4>
                                    <p>Nurse treat patients, record their medical history, provide emotional support, and provide follow-up care. Nurses also help doctors perform diagnostic tests.</p>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4">
                                <div className="icon-box">
                                    <div className="icon"><i className="fas fa-notes-medical"></i></div>
                                    <h4><a href="/app/listequipments">Medical Equipments</a></h4>
                                    <p>Medical equipment is used for the specific purposes of diagnosis and treatment of disease or rehabilitation following disease or injury; it can be used either alone or in combination with any accessory, consumable or other piece of medical equipment.</p>
                                </div>
                            </div>

                        </div>

                    </div>
                </section>

 

                <section id="faq" className="faq section-bg">
                    <div className="container">

                        <div className="section-title">
                            <h2>Frequently Asked Questions</h2>
                            
                        </div>

                        <div className="faq-list">
                            <ul>
                                <li data-aos="fade-up">
                                    <i className="bx bx-help-circle icon-help"></i> <a data-bs-toggle="collapse" className="collapse" data-bs-target="#faq-list-1">What payment methods do you accept? <i className="bx bx-chevron-down icon-show"></i><i className="bx bx-chevron-up icon-close"></i></a>
                                    <div id="faq-list-1" className="collapse show" data-bs-parent=".faq-list">
                                        <p>We accept Visa and MasterCard on our website.

Our sales staff can also process other payment types manually, including checks and internet banking. To pay using one of these methods, please contact us to place your order.
                    </p>
                                    </div>
                                </li>

                                <li data-aos="fade-up" data-aos-delay="100">
                                    <i className="bx bx-help-circle icon-help"></i> <a data-bs-toggle="collapse" data-bs-target="#faq-list-2" className="collapsed">What is your returns policy?<i className="bx bx-chevron-down icon-show"></i><i className="bx bx-chevron-up icon-close"></i></a>
                                    <div id="faq-list-2" className="collapse" data-bs-parent=".faq-list">
                                        <p>
                                        Define Instruments will accept product returns for credit or exchange up to 30 DAYS after the dispatch date, provided that the returned product(s) are unused, and in original condition - complete with original documents and packaging.
                    </p>
                                    </div>
                                </li>

                                <li data-aos="fade-up" data-aos-delay="200">
                                    <i className="bx bx-help-circle icon-help"></i> <a data-bs-toggle="collapse" data-bs-target="#faq-list-3" className="collapsed">How do I contact Nurses & Ward Boys at Home Hospital? <i className="bx bx-chevron-down icon-show"></i><i className="bx bx-chevron-up icon-close"></i></a>
                                    <div id="faq-list-3" className="collapse" data-bs-parent=".faq-list">
                                        <p>
                                        To contact our Nurses online, you can send your questions  by completing the form in the Contact Us section .
                    </p>
                                    </div>
                                </li>

                                <li data-aos="fade-up" data-aos-delay="300">
                                    <i className="bx bx-help-circle icon-help"></i> <a data-bs-toggle="collapse" data-bs-target="#faq-list-4" className="collapsed">How do I cancel my Nurse,WardBoy & Equipment Booking? <i className="bx bx-chevron-down icon-show"></i><i className="bx bx-chevron-up icon-close"></i></a>
                                    <div id="faq-list-4" className="collapse" data-bs-parent=".faq-list">
                                        <p>
                                        If you wish to cancel your order, you can send an email request to homehospital@gmail.com. Please note that in case your order has already been charged or delivered, we cannot cancel it.
                    </p>
                                    </div>
                                </li>

                                <li data-aos="fade-up" data-aos-delay="400">
                                    <i className="bx bx-help-circle icon-help"></i> <a data-bs-toggle="collapse" data-bs-target="#faq-list-5" className="collapsed">What if my product is damaged, wrong or missing? <i className="bx bx-chevron-down icon-show"></i><i className="bx bx-chevron-up icon-close"></i></a>
                                    <div id="faq-list-5" className="collapse" data-bs-parent=".faq-list">
                                        <p>
                                        If damaged, or wrong, please send the Order ID and a picture of the damaged or wrong item, complete with the batch number clearly visible, to homehospital@gmail.com. If an item is missing, send an email, to homehospital@gmail.com. Please indicate if you prefer a refund or a replacement.
                    </p>
                                    </div>
                                </li>

                            </ul>
                        </div>

                    </div>
                </section>

                

                <section id="gallery" className="gallery">
                    <div className="container">

                        <div className="section-title">
                            <h2>Gallery</h2>
                       
                        </div>
                    </div>

                    <div className="container-fluid">
                        <div className="row no-gutters">

                            <div className="col-lg-3 col-md-4">
                                <div className="gallery-item">
                                    <a href="assets/img/gallery/gallery-1.jpg" className="galelry-lightbox">
                                        <img src="assets/img/gallery/gallery-1.jpg" alt="" className="img-fluid" />
                                    </a>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-4">
                                <div className="gallery-item">
                                    <a href="assets/img/gallery/gallery-2.jpg" className="galelry-lightbox">
                                        <img src="assets/img/gallery/gallery-2.jpg" alt="" className="img-fluid" />
                                    </a>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-4">
                                <div className="gallery-item">
                                    <a href="assets/img/gallery/gallery-3.jpg" className="galelry-lightbox">
                                        <img src="assets/img/gallery/gallery-3.jpg" alt="" className="img-fluid" />
                                    </a>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-4">
                                <div className="gallery-item">
                                    <a href="assets/img/gallery/gallery-4.jpg" className="galelry-lightbox">
                                        <img src="assets/img/gallery/gallery-4.jpg" alt="" className="img-fluid" />
                                    </a>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-4">
                                <div className="gallery-item">
                                    <a href="assets/img/gallery/gallery-5.jpg" className="galelry-lightbox">
                                        <img src="assets/img/gallery/gallery-5.jpg" alt="" className="img-fluid" />
                                    </a>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-4">
                                <div className="gallery-item">
                                    <a href="assets/img/gallery/gallery-6.jpg" className="galelry-lightbox">
                                        <img src="assets/img/gallery/gallery-6.jpg" alt="" className="img-fluid" />
                                    </a>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-4">
                                <div className="gallery-item">
                                    <a href="assets/img/gallery/gallery-7.jpg" className="galelry-lightbox">
                                        <img src="assets/img/gallery/gallery-7.jpg" alt="" className="img-fluid" />
                                    </a>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-4">
                                <div className="gallery-item">
                                    <a href="assets/img/gallery/gallery-8.jpg" className="galelry-lightbox">
                                        <img src="assets/img/gallery/gallery-8.jpg" alt="" className="img-fluid" />
                                    </a>
                                </div>
                            </div>

                        </div>

                    </div>
                </section>

                <section id="contact" className="contact">
                    <div className="container">

                        <div className="section-title">
                            <h2>Contact</h2>
                            <p>A Home Hospital is always looking to make things easier for you. Our aim is to provide our customers with the best  facilities, constant care, and reliable support. If you would like to get in touch with a nurses/wardboys,etc from a specific service, would like some specific information about the services we provide, or just have a question for us, please fill up the Form given below and we will get back to you..</p>
                        </div>
                    </div>

                    <div>
                        <iframe style={{ border: '0', width: '100%', height: '350px' }} src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14264.200484140358!2d83.58775757579052!3d26.6468776305389!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1621525596951!5m2!1sen!2sin" frameBorder="0" allowFullScreen></iframe>
                    </div>

                    <div className="container">
                        <div className="row mt-5">

                            <div className="col-lg-4">
                                <div className="info">
                                    <div className="address">
                                        <i className="bi bi-geo-alt"></i>
                                        <h4>Location:</h4>
                                        <p>Rakabganj Lucknow UP 226018 India</p>
                                    </div>

                                    <div className="email">
                                        <i className="bi bi-envelope"></i>
                                        <h4>Email:</h4>
                                        <p>homehospital@gmail.com</p>
                                    </div>

                                    <div className="phone">
                                        <i className="bi bi-phone"></i>
                                        <h4>Call:</h4>
                                        <p>+91 7849842621</p>
                                    </div>

                                </div>

                            </div>

                            <div className="col-lg-8 mt-5 mt-lg-0">

                            <Link to="/app/contact" className="appointment-btn scrollto">Contact us</Link>

                            </div>

                        </div>

                    </div>
                </section>

            </main>

            <footer id="footer">

                <div className="footer-top">
                    <div className="container">
                        <div className="row">

                            <div className="col-lg-3 col-md-6 footer-contact">
                                <h3>HomeHospital</h3>
                                <p>
                                    Rakabganj <br />
                  Lucknow, UP 226018<br />
                  India <br /><br />
                                    <strong>Phone:</strong> +91 7849842621<br />
                                    <strong>Email:</strong> homehospital@gmail.com<br />
                                </p>
                            </div>

                            <div className="col-lg-2 col-md-6 footer-links">
                                <h4>Useful Links</h4>
                                <ul>
                                    <li><i className="bx bx-chevron-right"></i> <a href="#">Home</a></li>
                                    <li><i className="bx bx-chevron-right"></i> <a href="#">About us</a></li>
                                    <li><i className="bx bx-chevron-right"></i> <a href="#">Services</a></li>
                                    <li><i className="bx bx-chevron-right"></i> <a href="#">Terms of service</a></li>
                                    <li><i className="bx bx-chevron-right"></i> <a href="#">Privacy policy</a></li>
                                </ul>
                            </div>

                            <div className="col-lg-3 col-md-6 footer-links">
                                <h4>Our Services</h4>
                                <ul>
                                    <li><i className="bx bx-chevron-right"></i> <a href="#">Nurse</a></li>
                                    <li><i className="bx bx-chevron-right"></i> <a href="#">Ward Boy</a></li>
                                    <li><i className="bx bx-chevron-right"></i> <a href="#">Medical Equipment</a></li>
                                    
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container d-md-flex py-4">

                    <div className="me-md-auto text-center text-md-start">
                        <div className="copyright">
                            &copy; Copyright <strong><span>HomeHospital</span></strong>. All Rights Reserved
            </div>
                        <div className="credits">
                            Designed by <b>Jayant Gupta </b>                      </div>
                    </div>
                    <div className="social-links text-center text-md-right pt-3 pt-md-0">
                        {/* <a href="#" className="twitter"><i className="bx bxl-twitter"></i></a> */}
                        <a href="#" className="facebook"><i className="bx bxl-facebook"></i></a>
                        <a href="#" className="instagram"><i className="bx bxl-instagram"></i></a>
                        {/* <a href="#" className="google-plus"><i className="bx bxl-skype"></i></a> */}
                        {/* <a href="#" className="linkedin"><i className="bx bxl-linkedin"></i></a> */}
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Home;