import React from "react"

export default function HeaderNav() {
  return (
    <header>
      <nav>
        <div class="row">
          <img src="/img/logo-white.png" alt="Omnifood logo" class="logo" />
          <ul class="main-nav">
            <li><a href="/food-delivery">Food Delivery</a></li>
            <li><a href="#">How it Works</a></li>
            <li><a href="#">Our Cities</a></li>
            <li><a href="#">Sign Up</a></li>
          </ul>

        </div>
      </nav>
      <div class="hero-text-box">
        <h1>Goodbye junk food! <br />Say hello to simple, healthy meals.</h1>
        <a class="btn btn-full" href="#">I'm hungry</a>
        <a class="btn btn-ghost" href="#">Show me more</a>
      </div>
    </header>
  )
}
