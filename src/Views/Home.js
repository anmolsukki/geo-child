import React from 'react';
import './Home.css';

export default function Home() {
  return (
    <div class="container">
      <div class="nav-wrapper">
        <div class="right-side">
          <div class="brand">JORDAN HUDGENS</div>
        </div>
      </div>

      <div class="content-wrapper">
        <div class="portfolio-items-wrapper">
          <div class="portfolio-item-wrapper">
            <div
              class="portfolio-img-background"
              style={{ backgroundImage: `url(${'images/portfolio1.jpg'})` }}></div>

            <div class="img-text-wrapper">
              <div class="logo-wrapper">
                <img src="images/logos/quip.png" alt="" />
              </div>

              <div class="subtitle">
                I built the Quip Ecommerce platform, named a Top 25 Invention by Time Magazine in
                2016.
              </div>
            </div>
          </div>

          <div class="portfolio-item-wrapper">
            <div
              class="portfolio-img-background"
              style={{ backgroundImage: `url(${'images/portfolio2.jpg'})` }}></div>
            <div class="img-text-wrapper">
              <div class="logo-wrapper">
                <img src="images/logos/devcamp.png" alt="" />
              </div>

              <div class="subtitle">Coding bootcamp and learning management system.</div>
            </div>
          </div>

          <div class="portfolio-item-wrapper">
            <div
              class="portfolio-img-background"
              style={{ backgroundImage: `url(${'images/portfolio3.jpg'})` }}></div>
            <div class="img-text-wrapper">
              <div class="logo-wrapper">
                <img src="images/logos/eventbrite.png" alt="" />
              </div>

              <div class="subtitle">
                Eventbrite is the leading event management platform on the web with millions of
                individuals utilizing their applications to find, register or, and management events
                in numerous industries.
              </div>
            </div>
          </div>

          <div class="portfolio-item-wrapper">
            <div
              class="portfolio-img-background"
              style={{ backgroundImage: `url(${'images/portfolio4.jpg'})` }}></div>
            <div class="img-text-wrapper">
              <div class="logo-wrapper">
                <img src="images/logos/shop-hacker.png" alt="" />
              </div>

              <div class="subtitle">
                Shop Hacker allows you to easily import digital products such as elearning courses,
                software, and games directly into your ecommerce store.
              </div>
            </div>
          </div>

          <div class="portfolio-item-wrapper">
            <div
              class="portfolio-img-background"
              style={{ backgroundImage: `url(${'images/portfolio5.jpeg'})` }}></div>
            <div class="img-text-wrapper">
              <div class="logo-wrapper">
                <img src="images/logos/crondose.png" alt="" />
              </div>

              <div class="subtitle">Online tutorials and productivity tips.</div>
            </div>
          </div>

          <div class="portfolio-item-wrapper">
            <div
              class="portfolio-img-background"
              style={{ backgroundImage: `url(${'images/portfolio6.jpeg'})` }}></div>
            <div class="img-text-wrapper">
              <div class="logo-wrapper">
                <img src="images/logos/dailysmarty.png" alt="" />
              </div>

              <div class="subtitle">Keep track of what you learn every day.</div>
            </div>
          </div>

          <div class="portfolio-item-wrapper">
            <div
              class="portfolio-img-background"
              style={{ backgroundImage: `url(${'images/portfolio7.jpeg'})` }}></div>
            <div class="img-text-wrapper">
              <div class="logo-wrapper">
                <img src="images/logos/dashtrack.png" alt="" />
              </div>

              <div class="subtitle">
                What you track improves. DashTrack is a journal that makes it easy to track your
                daily tasks and make the most of your time each day.
              </div>
            </div>
          </div>

          <div class="portfolio-item-wrapper">
            <div
              class="portfolio-img-background"
              style={{ backgroundImage: `url(${'images/portfolio2.jpg'})` }}></div>
            <div class="img-text-wrapper">
              <div class="logo-wrapper">
                <img src="images/logos/devtrunk.png" alt="" />
              </div>

              <div class="subtitle">Online shop for developer happiness.</div>
            </div>
          </div>

          <div class="portfolio-item-wrapper">
            <div
              class="portfolio-img-background"
              style={{ backgroundImage: `url(${'images/portfolio4.jpg'})` }}></div>
            <div class="img-text-wrapper">
              <div class="logo-wrapper">
                <img src="images/logos/edutechional.png" alt="" />
              </div>

              <div class="subtitle">Online technology tutorials.</div>
            </div>
          </div>

          <div class="portfolio-item-wrapper">
            <div
              class="portfolio-img-background"
              style={{ backgroundImage: `url(${'images/portfolio3.jpg'})` }}></div>
            <div class="img-text-wrapper">
              <div class="logo-wrapper">
                <img src="images/logos/ministry-safe.png" alt="" />
              </div>

              <div class="subtitle">A complete child safety system for organizations.</div>
            </div>
          </div>

          <div class="portfolio-item-wrapper">
            <div
              class="portfolio-img-background"
              style={{ backgroundImage: `url(${'images/portfolio1.jpg'})` }}></div>
            <div class="img-text-wrapper">
              <div class="logo-wrapper">
                <img src="images/logos/open-devos.png" alt="" />
              </div>

              <div class="subtitle">Publish and share daily devotionals.</div>
            </div>
          </div>

          <div class="portfolio-item-wrapper">
            <div
              class="portfolio-img-background"
              style={{ backgroundImage: `url(${'images/portfolio3.jpg'})` }}></div>
            <div class="img-text-wrapper">
              <div class="logo-wrapper">
                <img src="images/logos/toastability.png" alt="" />
              </div>

              <div class="subtitle">
                Easy way to manage the digital life of your bar or restaurant.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
