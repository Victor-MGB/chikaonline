import React, { useState } from "react";
import axios from "axios";
import "animate.css";
import SubscriberList from "./SubscriberList";

function SendNotification() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [notification, setNotification] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSendNotification = async (e) => {
    e.preventDefault();

    // Clear previous error or notification
    setNotification(null);
    setError(null);

    if (!email || !message) {
      setError("Email and message are required.");
      return;
    }

    setLoading(true);
    try {
      const response = await axios.post("/send-notification", { email, message });
      setNotification(response.data.notification);
      setEmail("");
      setMessage("");
    } catch (error) {
      console.error("Error sending notification:", error);
      setError("Failed to send notification. Try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
   <>
     <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-4">Send Notification</h2>

      <form
        className="bg-white shadow-md rounded-lg p-6 animate__animated animate__fadeIn"
        onSubmit={handleSendNotification}
      >
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
            Recipient Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter recipient's email"
            required
          />
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="message">
            Notification Message
          </label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your notification message"
            rows="4"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-700 transition-all duration-300 animate__animated animate__pulse"
          disabled={loading}
        >
          {loading ? "Sending..." : "Send Notification"}
        </button>

        {error && <p className="text-red-500 mt-4 animate__animated animate__shakeX">{error}</p>}
        {notification && (
          <p className="text-green-500 mt-4 animate__animated animate__fadeIn">
            Notification sent successfully!
          </p>
        )}
      </form>
    </div>

    <SubscriberList />
   </>
  );
}

export default SendNotification;
