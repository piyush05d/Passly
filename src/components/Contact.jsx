import React from 'react'
import propic from '../assets/propic.jpg'

const Contact = () => {
   return (
      <div className='m-5'>
  
      <div className="min-h-screen flex items-center justify-center px-5 py-10">

         <div className="w-full max-w-4xl">

      
            <div className="text-center mb-8">

               <h1 className="text-4xl font-bold text-white">
                  Contact Me
               </h1>

               <p className="text-gray-300 mt-3">
                  Have a question, suggestion, or want to know more about this project?
                  Feel free to connect with me.
               </p>

            </div>


            {/* Main Card */}
            <div className="bg-white rounded-2xl shadow-xl p-8">

               <div className="flex flex-col md:flex-row gap-10 items-center">


                  {/* Profile Section */}
                  <div className="w-full md:w-1/3 text-center">

                     <img
                        src={propic}
                        alt="Piyush Dohare"
                        className="w-32 h-32 rounded-full object-cover mx-auto mb-5"
                     />

                     <h2 className="text-2xl font-bold text-gray-800">
                        Piyush Dohare
                     </h2>

                     <p className="text-gray-500 mt-1">
                        Developer & Creator
                     </p>

                     <p className="text-gray-500 text-sm mt-4 leading-6">
                        I am a developer interested in building practical and
                        useful web applications. This Password Manager is one
                        of my projects built to make password management simple
                        and convenient.
                     </p>

                  </div>


                  {/* Contact Details */}
                  <div className="w-full md:w-2/3 space-y-4">


                     {/* Email */}
                     <a
                        href="mailto:piyush05d@gmail.com"
                        className="flex items-center gap-4 p-4 rounded-xl bg-gray-100 hover:bg-gray-200 transition"
                     >

                        <div className="text-2xl">
                           📧
                        </div>

                        <div>
                           <p className="text-sm text-gray-500">
                              Email
                           </p>

                           <p className="text-gray-800 font-medium">
                              piyush05d@gmail.com
                           </p>
                        </div>

                     </a>


                     {/* Phone / WhatsApp */}
                     <a
                        href="tel:+917408942586"
                        className="flex items-center gap-4 p-4 rounded-xl bg-gray-100 hover:bg-gray-200 transition"
                     >
                           <div className="text-3xl text-black">
                              📞
                           </div>

                        <div>
                           <p className="text-sm text-gray-500">
                              Phone / WhatsApp
                           </p>

                           <p className="text-gray-800 font-medium">
                              +91 74089 42586
                           </p>
                        </div>

                     </a>


                     {/* WhatsApp */}
                     <a
                        href="https://wa.me/917408942586"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-4 p-4 rounded-xl bg-gray-100 hover:bg-gray-200 transition"
                     >

                        <div className="w-8 h-8 rounded-full bg-green-500 text-white flex items-center justify-center font-bold text-sm">
                           WA
                        </div>

                        <div>
                           <p className="text-sm text-gray-500">
                              WhatsApp
                           </p>

                           <p className="text-gray-800 font-medium">
                              Chat with me on WhatsApp
                           </p>
                        </div>

                     </a>


                     {/* GitHub */}
                     <a
                        href="https://github.com/piyush05d"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-4 p-4 rounded-xl bg-gray-100 hover:bg-gray-200 transition"
                     >

                        <div className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center font-bold text-xs">
                           GH
                        </div>

                        <div>
                           <p className="text-sm text-gray-500">
                              GitHub
                           </p>

                           <p className="text-gray-800 font-medium">
                              github.com/piyush05d
                           </p>
                        </div>

                     </a>


                     {/* LinkedIn */}
                     <a
                        href="https://www.linkedin.com/in/piyush-dohare-"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-4 p-4 rounded-xl bg-gray-100 hover:bg-gray-200 transition"
                     >

                        <div className="w-8 h-8 rounded bg-blue-600 text-white flex items-center justify-center font-bold">
                           in
                        </div>

                        <div>
                           <p className="text-sm text-gray-500">
                              LinkedIn
                           </p>

                           <p className="text-gray-800 font-medium">
                              linkedin.com/in/piyush-dohare-
                           </p>
                        </div>

                     </a>

                  </div>

               </div>


               {/* About Project */}
               <div className="border-t mt-10 pt-8">

                  <h2 className="text-2xl font-bold text-gray-800 text-center">
                     About This Project
                  </h2>

                  <p className="text-gray-500 text-center mt-3 max-w-2xl mx-auto leading-7">
                     This Password Manager was created as a practical web
                     development project to provide a simple way to manage
                     and share passwords. The project uses modern web
                     technologies and focuses on creating a simple and
                     user-friendly experience.
                  </p>

               </div>


               {/* Purpose */}
               <div className="text-center mt-8">

                  <p className="text-gray-500 text-sm">
                     Open to project feedback, collaboration, and professional opportunities.
                  </p>

               </div>


               {/* Footer */}
               <div className="border-t mt-8 pt-5 text-center">

                  <p className="text-gray-400 text-sm">
                     Made with ❤️ by Piyush Dohare
                  </p>

                  <p className="text-gray-400 text-xs mt-1">
                     © 2026 Piyush Dohare
                  </p>

               </div>

            </div>

         </div>

      </div>
      </div>
   )
}

export default Contact