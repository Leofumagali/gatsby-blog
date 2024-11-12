import * as React from "react"
import { useState } from 'react';

const Newsletter = () => {
  const [ newsletterUserData, setNewsletterUserData ] = useState({
    name: '',
    email: '',
  })

  const handleNewsletterChange = (e) => {
    const { id, value } = e.target;

    setNewsletterUserData(prevData => ({
      ...prevData,
      [id]: value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Dados da Newsletter:', newsletterUserData);

    try {
      const response = await fetch("https://fictitious-endpoint.com/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newsletterUserData),
      });

      if (response.ok) {
        console.log('Success')
      } else {
        throw new Error("Failed to submit");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <div id='news-letter' class="w-full p-4 bg-gray-100 flex justify-center">
      <form 
        class="w-full max-w-md p-6 rounded-lg"
        onSubmit={handleSubmit}  
      >
        <h2 class="text-2xl font-semibold mb-4 text-center">Subscribe to our newsletter to receive all the news in your email!</h2>

        <div class="mb-4">
          <label for="name" class="block text-gray-700 text-sm font-bold mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            value={newsletterUserData.name}
            onChange={handleNewsletterChange}
            placeholder="Your name"
            class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div class="mb-4">
          <label for="email" class="block text-gray-700 text-sm font-bold mb-2">
            E-mail
          </label>
          <input
            type="email"
            id="email"
            value={newsletterUserData.email}
            onChange={handleNewsletterChange}
            placeholder="Your e-mail"
            class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <button
          type="submit"
          class="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Subscribe!
        </button>
      </form>
    </div>
  )
}

export default Newsletter;