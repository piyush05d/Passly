import React from 'react'

const Footer = () => {
   return (
      <footer className="bg-[#0D3A5C] text-white mt-16 overflow-hidden">

         {/* Big Footer Text */}
         <div className="bg-[#90ADCD] py-10 overflow-hidden">
            <h1 className="text-[12vw] md:text-[9vw] font-bold leading-none text-[#0D3A5C] whitespace-nowrap text-center">
               THANK YOU 
            </h1>
         </div>

         {/* Footer Links */}
         <div className="flex flex-col items-center text-center gap-3 py-10">

            <p className="text-lg font-semibold">
               Secure. Organized. Ready to Share. →
            </p>

            <a
               href="/about"
               className="hover:text-[#90ADCD] transition"
            >
               About the Project ↗
            </a>

            <a
               href="https://github.com/piyush05d"
               target="_blank"
               rel="noopener noreferrer"
               className="hover:text-[#90ADCD] transition"
            >
               GitHub ↗
            </a>

            <a
               href="/contact"
               className="hover:text-[#90ADCD] transition"
            >
               Contact Me ↗
            </a>

         </div>

         {/* Copyright */}
         <div className="text-center text-sm text-[#90ADCD] pb-5">
            © 2026 Password Manager · Built as a learning project
         </div>

      </footer>
   )
}

export default Footer