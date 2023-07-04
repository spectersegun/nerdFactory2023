import React from "react";

export default function Header({ routName }) {
  return (
    <header class="header_section">
      <div class="header_top">
        <div class="container-fluid header_top_container">
          <div class="lang_box dropdown">
            <a
              href="#"
              title="Language"
              class="nav-link"
              data-toggle="dropdown"
              aria-expanded="true"
            >
              <img
                src="images/flag-uk.png"
                alt="flag"
                class=" "
                title="United Kingdom"
              />{" "}
              <i class="fa fa-angle-down " aria-hidden="true"></i>
            </a>
            <div class="dropdown-menu ">
              <a href="#" class="dropdown-item">
                <img src="images/flag-france.png" class="" alt="flag" />
              </a>
            </div>
            <span>English</span>
          </div>
          <div class="contact_nav">
            <a href="">
              <i class="fa fa-phone" aria-hidden="true"></i>
              <span>Call : +01 123455678990</span>
            </a>
            <a href="">
              <i class="fa fa-envelope" aria-hidden="true"></i>
              <span>Email : demo@gmail.com</span>
            </a>
            <a href="">
              <i class="fa fa-map-marker" aria-hidden="true"></i>
              <span>Location</span>
            </a>
          </div>
          <div class="social_box">
            <a href="">
              <i class="fa fa-facebook" aria-hidden="true"></i>
            </a>
            <a href="">
              <i class="fa fa-twitter" aria-hidden="true"></i>
            </a>
            <a href="">
              <i class="fa fa-linkedin" aria-hidden="true"></i>
            </a>
            <a href="">
              <i class="fa fa-instagram" aria-hidden="true"></i>
            </a>
          </div>
        </div>
      </div>
      <div class="header_bottom">
        <div class="container-fluid">
          <nav class="navbar navbar-expand-lg custom_nav-container ">
            <a class="navbar-brand" href="index.html">
              <img src="images/logo.png" alt="" />
            </a>

            <button
              class="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class=""> </span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav  ">
                <li class={routName == "home" ? "nav-item active" : "nav-item"}>
                  <a class="nav-link" href="/">
                    Home <span class="sr-only">(current)</span>
                  </a>
                </li>
                <li
                  class={
                    routName == "services" ? "nav-item active" : "nav-item"
                  }
                >
                  <a class="nav-link" href="/service">
                    Services
                  </a>
                </li>
                <li
                  class={routName == "about" ? "nav-item active" : "nav-item"}
                >
                  <a class="nav-link" href="/about">
                    About
                  </a>
                </li>
                <li
                  class={
                    routName == "portfolio" ? "nav-item active" : "nav-item"
                  }
                >
                  <a class="nav-link" href="/project">
                    Project
                  </a>
                </li>
                <li
                  class={
                    routName == "testimonial" ? "nav-item active" : "nav-item"
                  }
                >
                  <a class="nav-link" href="/testimonial">
                    Testimonial
                  </a>
                </li>
                <li
                  class={routName == "contact" ? "nav-item active" : "nav-item"}
                >
                  <a class="nav-link" href="contact">
                    Contact Us
                  </a>
                </li>
                <li
                  class={
                    routName == "testimonial" ? "nav-item active" : "nav-item"
                  }
                >
                  <a class="nav-link" href="#">
                    {" "}
                    Login
                  </a>
                </li>
                <form class="form-inline">
                  <button
                    class="btn  my-2 my-sm-0 nav_search-btn"
                    type="submit"
                  >
                    <i class="fa fa-search" aria-hidden="true"></i>
                  </button>
                </form>
              </ul>
              <div class="quote_btn-container">
                <a href="" class="quote_btn">
                  Get A Quote
                </a>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
