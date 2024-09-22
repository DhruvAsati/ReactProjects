import React from "react";
import { useForm } from "react-hook-form"
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';
const Contact = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm()
    const onSubmit= async (data) => {
       const userinfo = {
          name: data.name,
          email: data.email,
          message: data.message,
       }
       // Send the data to your server
       try{
          await axios.post("https://getform.io/f/axojxlrb", userinfo);
         toast.success("Your message sent successfully!")
       }
       catch(error){
          toast.error(error);
       }
    };
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-5" id="Contact">
        <h1 className="text-3xl font-bold my-3">Contact</h1>
        <p>
          If you have any questions, need help, or want to collaborate on a
          project, please don't hesitate to reach out. <br />
          I'd be more than happy to help!
        </p>
        <div className="bg-cyan-300 rounded-xl w-full md:w-1/3 p-2 my-10 flex flex-col justify-center items-center mx-auto">
          <form
             onSubmit={handleSubmit(onSubmit)}
            // action="https://getform.io/f/axojxlrb"
            // method="POST"
            className="my-8 w-full mx-auto px-4 py-3"
          >
            <div className="flex flex-wrap -mx-3 mb-6">
              <h1 className="font-semibold text-xl w-full text-center">
                Send your Message
              </h1>
            </div>
            <div className="flex flex-wrap -mx-3">
              <div className="w-full px-3 mb-6">
                <label
                  className="block text-gray-700 text-lg font-bold mb-2"
                  htmlFor="name"
                >
                  Name
                </label>
                <input
                  {...register("name", { required: true })}
                  className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-gray-500"
                
                  id="name"
                  type="text"
                  name="name"
                  placeholder="Enter your Full Name"
        
                />
                 {errors.name && <span>This field is required</span>}
              </div>
              <div className="w-full px-3 mb-6">
                <label
                  className="block text-gray-700 text-lg font-bold mb-2"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                {...register("email", { required: true })}
                  className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-gray-500"
                  type="email"
                  placeholder="Enter your Email address"
                  name="email"
                  
                />
                 {errors.email && <span>This field is required</span>}
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
                <label
                  className="block text-gray-700 text-lg font-bold mb-2"
                  htmlFor="message"
                >
                  Message
                </label>
                <textarea
                  className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-gray-500"
                  {...register("message", { required: true })}
                  id="message"
                  rows="4"
                  name="message"
                  placeholder="Write your message here"
        
                ></textarea>
                 {errors.message && <span>This field is required</span>}
              </div>
              <div className="w-full px-3 mb-6 mt-3">
                <button
                  className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="submit"
                >
                  Send Message
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>

      <hr />
    </>
  );
};

export default Contact;
