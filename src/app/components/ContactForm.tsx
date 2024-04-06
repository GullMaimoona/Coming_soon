import React from 'react';

const ContactPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#C49225]">
      <div className="max-w-xl w-full p-8 rounded-lg bg-[#C49225]">
        <div className="mb-6">
          <h2 className="text-4xl font-bold text-center text-white">Contact Us</h2>
          <p className="text-center text-white mt-4 inline-block">Drop us an email and we will get back to you as soon as we can.</p>
        </div>
        <form>
          <div className="mb-4 flex flex-col md:flex-row">
            <div className="flex-1 md:mr-2">
              <label htmlFor="name" className="block text-white font-medium mb-2">Name</label>
              <input type="text" id="name" name="name" className="border border-gray-300 rounded-md p-3 w-full bg-[#C49225] text-white focus:border-white focus:ring-0" />
            </div>
            <div className="flex-1 md:ml-2">
              <label htmlFor="email" className="block text-white font-medium mb-2">Email</label>
              <input type="email" id="email" name="email" className="border border-gray-300 rounded-md p-3 w-full bg-[#C49225] text-white focus:border-white focus:ring-0" />
            </div>
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-white font-medium mb-2">Message</label>
            <textarea id="message" name="message" rows={5} className="border border-gray-300 rounded-md p-3 w-full bg-[#C49225] text-white focus:border-white focus:ring-0"></textarea>
          </div>
          <div className="flex justify-center">
            <button type="submit" className="bg-white text-[#C49225] py-3 px-6 rounded-md duration-300 font-medium">Send Message Now</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
