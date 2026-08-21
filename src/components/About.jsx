import React from "react";

const About = () => {
   return (
      <div className="min-h-screen bg-[#eef5fb] text-[#0D3A5C]">


         <section className="px-6 py-16 text-center">
            <p className="text-sm font-bold tracking-widest uppercase text-[#4984AE]">
               About the Project
            </p>

            <h1 className="mt-3 text-4xl md:text-6xl font-extrabold">
               More Than a Password Manager
            </h1>

            <p className="max-w-3xl mx-auto mt-6 text-lg text-gray-600 leading-8">
               A project started as a learning journey, built around a
               real-world problem of managing and sharing digital credentials.
            </p>
         </section>


   
         <section className="max-w-6xl mx-auto px-6 py-12">
            <div className="bg-white rounded-3xl shadow-md p-8 md:p-12">

               <span className="inline-block bg-[#90ADCD] text-[#0D3A5C] px-4 py-1 rounded-full text-sm font-bold">
                  Why I Built It
               </span>

               <h2 className="text-3xl font-bold mt-5">
                  From Learning to a Real-World Idea
               </h2>

               <p className="mt-5 text-gray-600 leading-8 text-lg">
                  This project started as an educational project while I was
                  learning modern web technologies. Instead of creating just
                  another practice application, I wanted to explore a real-world
                  problem and understand how a simple idea could be developed
                  into a practical product.
               </p>

            </div>
         </section>



         <section className="max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-2 gap-8">

     
            <div className="bg-white rounded-3xl p-8 border-t-4 border-[#4984AE]">



               <h2 className="text-2xl font-bold">
                  The Problem
               </h2>

               <p className="mt-4 text-gray-600 leading-7">
                  People often have subscriptions, accounts, or online services
                  that they do not use all the time. At the same time, family
                  members, friends, or teams may need access to shared resources.
               </p>

               <p className="mt-4 text-gray-600 leading-7">
                  Credentials are often shared through messages, notes,
                  screenshots, or other unorganized methods.
               </p>

            </div>



            <div className="bg-white rounded-3xl p-8 border-t-4 border-[#4984AE]">



               <h2 className="text-2xl font-bold">
                  The Idea
               </h2>
               <p className="mt-4 text-gray-600 leading-7">
                  The idea is to create an open-source credential management
                  and sharing platform where users can manage their credentials
                  and eventually choose what they want to share and with whom.
               </p>

               <p className="mt-4 text-gray-600 leading-7">
                  The long-term goal is to make sharing more organized,
                  manageable, and controlled.
               </p>

            </div>

         </section>


         <section className="max-w-6xl mx-auto px-6 py-12">

            <div className="text-center mb-10">
               <p className="text-sm font-bold uppercase tracking-widest text-[#4984AE]">
                  Use Cases
               </p>

               <h2 className="text-3xl md:text-4xl font-bold mt-2">
                  Who Can Use It?
               </h2>
            </div>


            <div className="grid md:grid-cols-3 gap-6">

               <div className="bg-white rounded-2xl p-7 shadow-sm hover:shadow-lg transition">
                  <h3 className="text-xl font-bold">
                     Individuals
                  </h3>

                  <p className="mt-3 text-gray-600 leading-7">
                     Manage personal accounts and credentials from one place.
                  </p>
               </div>


               <div className="bg-white rounded-2xl p-7 shadow-sm hover:shadow-lg transition">


                  <h3 className="text-xl font-bold">
                     Families & Friends
                  </h3>

                  <p className="mt-3 text-gray-600 leading-7">
                     Manage shared subscriptions and accounts between trusted
                     people.
                  </p>
               </div>


               <div className="bg-white rounded-2xl p-7 shadow-sm hover:shadow-lg transition">
                  <h3 className="text-xl font-bold">
                     Small Teams
                  </h3>

                  <p className="mt-3 text-gray-600 leading-7">
                     Organize credentials and resources used by multiple
                     members of a team.
                  </p>
               </div>

            </div>

         </section>



         <section className="max-w-6xl mx-auto px-6 py-12">

            <div className="bg-white rounded-3xl shadow-md p-8 md:p-12">

               <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5">

                  <div>
                     <p className="text-sm font-bold uppercase tracking-widest text-[#4984AE]">
                        Current Status
                     </p>

                     <h2 className="text-3xl font-bold mt-2">
                        Educational MVP
                     </h2>
                  </div>

                  <span className="bg-yellow-100 text-yellow-700 px-5 py-2 rounded-full font-bold w-fit">
                     In Development
                  </span>

               </div>

               <p className="mt-6 text-gray-600 leading-8 text-lg">
                  The current version is an educational MVP focused on the core
                  concept of credential management. The project is continuously
                  being improved with the goal of developing it into a complete
                  real-world platform.
               </p>

            </div>

         </section>


    
         <section className="bg-[#90ADCD] text-white mt-12">

            <div className="max-w-6xl mx-auto px-6 py-16">

               <div className="text-center">
                  <p className="text-sm font-bold uppercase tracking-widest text-[#90ADCD]">
                     What's Next?
                  </p>

                  <h2 className="text-3xl md:text-4xl font-bold mt-2">
                     Future Vision
                  </h2>

                  <p className="max-w-2xl mx-auto mt-5 text-blue-100 leading-7">
                     The next stage is to move from basic credential management
                     towards controlled and secure credential sharing.
                  </p>
               </div>


               <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5 mt-10">

                  {[
                     "User Authentication",
                     "Access Control",
                     "Credential Security",
                     "Private Sharing",
                     "Team Sharing",
                     "Public Sharing",
                  ].map((item, index) => (
                     <div
                        key={index}
                        className="border border-blue-300/30 rounded-2xl p-5 bg-white/5"
                     >
                        <p className="font-semibold">
                           {item}
                        </p>
                     </div>
                  ))}

               </div>

            </div>

         </section>


   
         <section className="max-w-6xl mx-auto px-6 py-16">

            <div className="text-center">
               <p className="text-sm font-bold uppercase tracking-widest text-[#4984AE]">
                  Product Thinking
               </p>

               <h2 className="text-3xl md:text-4xl font-bold mt-2">
                  From Problem to Product
               </h2>
            </div>


            <div className="grid md:grid-cols-4 gap-5 mt-10">

               {[
                  ["01", "Problem", "Identify a real-world problem."],
                  ["02", "Idea", "Design a possible solution."],
                  ["03", "MVP", "Build and test the core idea."],
                  ["04", "Improve", "Learn, iterate and expand."],
               ].map(([number, title, text]) => (
                  <div
                     key={number}
                     className="bg-white rounded-2xl p-6 shadow-sm border border-blue-100"
                  >
                     <h3 className="text-xl font-bold mt-3">
                        {title}
                     </h3>

                     <p className="mt-3 text-gray-600">
                        {text}
                     </p>
                  </div>
               ))}

            </div>

         </section>


   
         <section className="max-w-4xl mx-auto px-6 pb-16">

            <div className="bg-[#90ADCD] rounded-3xl p-8 md:p-10 text-center">

               <h2 className="text-3xl font-bold">
                  Open Source Project
               </h2>

               <p className="mt-4 text-[#0D3A5C] leading-7">
                  This project is open source and is being developed as part
                  of my practical learning journey. The goal is to explore
                  how a real-world problem can be turned into a working product.
               </p>



            </div>

         </section>



         <section className="border-t border-gray-200 bg-white">

            <div className="max-w-4xl mx-auto px-6 py-8 text-center">

               <p className="text-sm text-gray-500 leading-6">
                  <span className="font-bold text-gray-700">
                     Note:
                  </span>{" "}
                  The current version is intended for educational and
                  experimental purposes. Authentication and advanced security
                  features are still under development.
               </p>

            </div>

         </section>

      </div>
   );
};

export default About;