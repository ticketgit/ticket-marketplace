import React from "react";

export default function App() {
  return (
    <div>
      <header style={{ padding: "1rem", backgroundColor: "#ffffff", boxShadow: "0 2px 6px rgba(0,0,0,0.05)", textAlign: "center" }}>
        <h1 style={{ fontSize: "2rem" }}>🎫 NPX Deals - Buy/Sell Event Tickets</h1>
        <nav style={{ marginTop: "0.5rem" }}>
          <a href="#buy">Buy</a>
          <a href="#sell">Sell</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main className="container">
        <section style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <h2 style={{ fontSize: "1.8rem" }}>Securely Buy & Sell Tickets to Any Event</h2>
          <p>Join a trusted platform where fans connect to exchange tickets safely, quickly, and confidently.</p>
        </section>

        <div className="grid">
          <div className="card" id="buy">
            <h3>🎟️ For Buyers</h3>
            <ul>
              <li>Browse tickets to concerts, sports, and more</li>
              <li>Verified sellers and guaranteed access</li>
              <li>Exclusive early access deals and price alerts</li>
            </ul>
            <a href="mailto:contact@npxdeals.com"><button className="button">Browse Tickets</button></a>
          </div>

          <div className="card" id="sell">
            <h3>💸 For Sellers</h3>
            <ul>
              <li>List your tickets and reach verified buyers</li>
              <li>Low fees and fast payouts</li>
              <li>Support for mobile, PDF, and paper formats</li>
            </ul>
            <a href="mailto:contact@npxdeals.com"><button className="button">Sell Your Tickets</button></a>
          </div>
        </div>

        <div className="card">
          <h3>🔒 Why Trust Us</h3>
          <ul>
            <li>✅ Verified users and fraud protection</li>
            <li>🔐 Secure checkout with payment protection</li>
            <li>📞 24/7 customer support</li>
            <li>🌍 Thousands of happy buyers and sellers worldwide</li>
          </ul>
        </div>

        <div className="card" id="contact" style={{ textAlign: 'center' }}>
          <h3>📞 Get Support or Ask a Question</h3>
          <p>Our team is here to help. Contact us any time for quick assistance.</p>
          <a href="mailto:contact@npxdeals.com"><button className="button">Contact Us</button></a>
        </div>
      </main>

      <footer style={{ textAlign: "center", padding: "1rem", fontSize: "0.9rem", color: "#6b7280" }}>
        © 2025 TicketMarket. All rights reserved. | Terms | Privacy
      </footer>
    </div>
  );
}
