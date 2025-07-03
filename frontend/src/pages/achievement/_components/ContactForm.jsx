import React from 'react';

const ContactForm = () => {
  return (
    <section className="py-10">
      <h2 className="text-2xl font-bold text-center mb-12">
        Contact Me
      </h2>
      <div className="dark:bg-neutral-900 rounded-2xl shadow-lg p-8 md:flex md:gap-12">
        {/* Left side info */}
        <div className="md:w-1/2 space-y-4 mb-8 md:mb-0">
          <h3 className="text-xl font-semibold">
            Let’s Connect
          </h3>
          <p className="text-base">
            I'm always open to collaborating on projects, answering questions, or just chatting about code and creativity.
          </p>
          <div className="text-base space-y-2">
            <p><strong>Email:</strong> princep4423d@gmail.com</p>
            <p><strong>Location:</strong> Gujarat, India</p>
            <p><strong>Availability:</strong> Open to freelance & collaborations</p>
          </div>
        </div>

        {/* Right side form */}
        <div className="md:w-1/2">
          <form action="https://api.web3forms.com/submit" method="POST" className="space-y-4">
            <input type="hidden" name="access_key" value="ef6b194e-2e0c-4cd5-a019-a9933cb80142" />
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm mb-1">Name</label>
                <input
                  type="text"
                  name="name"
                  required
                  className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-neutral-700 bg-gray-50 dark:bg-neutral-800"
                />
              </div>
              <div>
                <label className="block text-sm mb-1">Email</label>
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-neutral-700 bg-gray-50 dark:bg-neutral-800"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm mb-1">Message</label>
              <textarea
                name="message"
                required
                rows="5"
                className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-neutral-700 bg-gray-50 dark:bg-neutral-800"
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-2 rounded-lg transition cursor-pointer"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
