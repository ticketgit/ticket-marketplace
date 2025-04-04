import React from "react";
import { ShieldCheck, Users, Ticket } from "lucide-react";

function Button({ children, className = "" }) {
  return <button className={`bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 ${className}`}>{children}</button>;
}

function Card({ children }) {
  return <div className="bg-white rounded-xl shadow-md">{children}</div>;
}

function CardContent({ children, className = "" }) {
  return <div className={`p-4 ${className}`}>{children}</div>;
}

export default function TicketMarketplace() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-gray-100 p-6">
      <div className="max-w-5xl mx-auto">
        <header className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">🎫 TicketMarket</h1>
          <nav className="space-x-4 text-gray-700">
            <a href="#buy" className="hover:underline">Buy</a>
            <a href="#sell" className="hover:underline">Sell</a>
            <a href="#contact" className="hover:underline">Contact</a>
          </nav>
        </header>

        <section className="text-center mb-10">
          <h2 className="text-4xl font-bold mb-4">Securely Buy & Sell Tickets to Any Event</h2>
          <p className="text-lg text-gray-600">
            Join a trusted platform where fans connect to exchange tickets safely, quickly, and confidently.
          </p>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          <Card id="buy">
            <CardContent className="p-6">
              <h3 className="text-2xl font-semibold mb-4 flex items-center gap-2"><Ticket size={20}/> For Buyers</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Browse tickets to concerts, sports, and more</li>
                <li>Verified sellers and guaranteed access</li>
                <li>Exclusive early access deals and price alerts</li>
              </ul>
              <Button className="mt-6 w-full">Browse Tickets</Button>
            </CardContent>
          </Card>

          <Card id="sell">
            <CardContent className="p-6">
              <h3 className="text-2xl font-semibold mb-4 flex items-center gap-2"><Users size={20}/> For Sellers</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>List your tickets and reach verified buyers</li>
                <li>Low fees and fast payouts</li>
                <li>Support for mobile, PDF, and paper formats</li>
              </ul>
              <Button className="mt-6 w-full">Sell Your Tickets</Button>
            </CardContent>
          </Card>
        </div>

        <Card className="mb-10">
          <CardContent className="p-6 text-center">
            <h3 className="text-2xl font-semibold mb-3 flex justify-center items-center gap-2">
              <ShieldCheck size={20}/> Why Trust Us
            </h3>
            <p className="text-gray-600 mb-4">We’re committed to making ticket exchange easy and safe for everyone.</p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 max-w-md mx-auto text-left">
              <li>✅ Verified users and fraud protection</li>
              <li>🔐 Secure checkout with payment protection</li>
              <li>📞 24/7 customer support</li>
              <li>🌍 Thousands of happy buyers and sellers worldwide</li>
            </ul>
          </CardContent>
        </Card>

        <Card id="contact">
          <CardContent className="p-6 text-center">
            <h3 className="text-2xl font-semibold mb-2">📞 Get Support or Ask a Question</h3>
            <p className="mb-4 text-gray-600">Our team is here to help. Contact us any time for quick assistance.</p>
            <Button className="w-full">Contact Us</Button>
          </CardContent>
        </Card>

        <footer className="text-center text-gray-500 text-sm mt-10">
          © 2025 TicketMarket. All rights reserved. | Terms | Privacy
        </footer>
      </div>
    </div>
  );
}
