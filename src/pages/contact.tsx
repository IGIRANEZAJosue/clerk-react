import { Link } from "react-router-dom";

export default function ContactPage() {
  return (
   <div className="p-5 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Contact Us</h1>
      <form>
         <div className="mb-4">
            <label htmlFor="name" className="block mb-2">Name</label>
            <input 
               type="text" 
               id="name" 
               name="name" 
               className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
         </div>
         <div className="mb-4">
            <label htmlFor="email" className="block mb-2">Email</label>
            <input 
               type="email" 
               id="email" 
               name="email" 
               className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
         </div>
         <div className="mb-4">
            <label htmlFor="message" className="block mb-2">Message</label>
            <textarea 
               id="message" 
               name="message" 
               rows={5} 
               className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
         </div>
         <button 
            type="submit" 
            className="px-5 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
         >
            Submit
         </button>
      </form>
      <p className="mt-5">
         Go back to <Link to="/" className="text-blue-600 hover:text-blue-800">Home</Link>
      </p>
   </div>
  );
}
