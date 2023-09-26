import React from 'react';
import "./footer.style.css";

const Footer = () => {
    return (
          <footer>
                <div>
                    <div class="row">
                        <div class="left">
                            <div>
                                <img src="images/logo-white.png" alt="" />
                            </div>
                            <div>
                                <p>

                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex doloribus itaque, rerum maiores
                                    veritatis possimus. Sit, itaque. Dolor, harum odit facilis qui aut ex maiores voluptatem
                                    mollitia nemo illum cum.
                                </p>
                            </div>
                        </div>
                        <div class="right">
                            <div>
                                <p>
                                    <i class="fa-solid fa-location-dot icon-style"></i>
                                    H-2275, 2279 Pachkhola সাতারকুল রোড, Dhaka 1212
                                </p>
                            </div>
                            <div>
                                <p>
                                    <i class="fa-solid fa-envelope icon-style"></i>
                                    info@book-store.com
                                </p>
                            </div>
                            <div>
                                <p>
                                    <a href="https://facebook.com" class="social-link">
                                        <i class="fa-brands fa-facebook-f"></i>
                                    </a>
                                    <a href="https://facebook.com" class="social-link">
                                        <i class="fa-brands fa-instagram"></i>
                                    </a>
                                    <a href="https://twitter.com" class="social-link">
                                        <i class="fa-brands fa-twitter"></i>
                                    </a>
                                    <a href="https://whatsapp.com" class="social-link">
                                        <i class="fa-brands fa-whatsapp"></i>
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </footer>
    );
};

export default Footer;