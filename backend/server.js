import React, { useState, useEffect } from 'react'
import editicon from '../assets/editicon.png'
import icondel from '../assets/icondel.gif'
import { Eye, EyeOff } from "lucide-react"
import Copy from '../assets/copy.png'
import upperimage from '../assets/upperimage.png'
import Footer from './Foooter'

const API_URL = "https://passly-syh7.onrender.com/api/password"

const Manager = () => {

   const [pass, setpass] = useState("")
   const [webname, setwebname] = useState("")
   const [username, setusername] = useState("")
   const [password, setpassword] = useState([])

   const [showpassord, setshowpassord] = useState(false)
   const [save, setsave] = useState(false)
   const [notification, setnotification] = useState("")

   // GET PASSWORDS
   useEffect(() => {

      const getpassword = async () => {

         try {

            const response = await fetch(API_URL)

            const data = await response.json()

            if (!response.ok) {
               throw new Error(data.error || "Failed to fetch passwords")
            }

            if (Array.isArray(data)) {
               setpassword(data)
            }

         } catch (error) {

            console.error("Error fetching passwords:", error)

         }

      }

      getpassword()

   }, [])


   // SAVE PASSWORD
   const handleclick = async (e) => {

      e.preventDefault()

      if (save) return

      if (!webname || !username || !pass) {

         setnotification("Please fill all fields!")

         setTimeout(() => {
            setnotification("")
         }, 2000)

         return
      }

      setsave(true)

      try {

         const response = await fetch(API_URL, {

            method: "POST",

            headers: {
               "Content-Type": "application/json"
            },

            body: JSON.stringify({
               webname,
               username,
               pass
            })

         })

         const data = await response.json()

         if (!response.ok) {

            throw new Error(data.error || "Failed to save password")

         }

         // MongoDB ka original object add hoga
         setpassword((prev) => [
            ...prev,
            data.data
         ])

         // Clear form
         setwebname("")
         setusername("")
         setpass("")

         setnotification("Password saved successfully!")

         setTimeout(() => {
            setnotification("")
         }, 5000)

      } catch (error) {

         console.error("Error saving password:", error)

         setnotification(error.message || "Server error, try again!")

         setTimeout(() => {
            setnotification("")
         }, 3000)

      } finally {

         setsave(false)

      }

   }


   // EDIT PASSWORD
   const handledit = (index) => {

      const selectedPassword = password[index]

      if (!selectedPassword) return

      setwebname(selectedPassword.webname)
      setusername(selectedPassword.username)
      setpass(selectedPassword.pass)

      /*
        Purani entry ko abhi delete nahi kar rahe.
        Sirf form me load kar rahe hain.
      */

      setnotification("Loaded into form for editing!")

      setTimeout(() => {
         setnotification("")
      }, 2000)

   }


   // DELETE PASSWORD
   const handledelete = async (index) => {

      const selectedPassword = password[index]

      if (!selectedPassword) return

      const id = selectedPassword._id

      if (!id) {

         setnotification("Invalid password ID!")

         setTimeout(() => {
            setnotification("")
         }, 2000)

         return
      }

      try {

         const response = await fetch(
            `${API_URL}/${id}`,
            {
               method: "DELETE"
            }
         )

         const data = await response.json()

         if (!response.ok) {

            throw new Error(
               data.error || "Failed to delete password"
            )

         }

         // Frontend se bhi remove
         setpassword((prev) =>
            prev.filter((_, i) => i !== index)
         )

         setnotification("Password Deleted!")

         setTimeout(() => {
            setnotification("")
         }, 2000)

      } catch (error) {

         console.error("Error deleting password:", error)

         setnotification(
            error.message || "Unable to delete password"
         )

         setTimeout(() => {
            setnotification("")
         }, 3000)

      }

   }


   // SHOW / HIDE PASSWORD
   const handleye = () => {

      setshowpassord((prev) => !prev)

   }


   return (

      <div>

         {/* Notification */}

         {notification && (

            <div className="fixed top-5 right-5 bg-[#0D3A5C] text-white px-5 py-3 rounded-lg shadow-lg z-50">

               ✓ {notification}

            </div>

         )}


         {/* Upper Image */}

         <div className='pt-10 md:pt-10'>

            <img
               src={upperimage}
               className='mx-auto w-full h-full object-cover'
               alt="Vault Banner"
            />

         </div>


         {/* FORM */}

         <div className='flex justify-center p-6'>

            <div className='p-4 md:p-10 w-full h-full flex flex-col items-center'>


               {/* Website */}

               <input
                  className='focus:border-3 focus:border-[#0D3A5C] focus:text-white focus:bg-blue-950 bg-white px-2 p-1 w-[80%] md:w-[80vw] text-center rounded-2xl border-2 border-[#0D3A5C]'
                  type="text"
                  placeholder="Website Name"
                  value={webname}
                  onChange={(e) => setwebname(e.target.value)}
               />


               {/* Username + Password */}

               <div className='flex flex-col md:flex-row items-center gap-4 m-2 w-full md:w-auto'>


                  {/* Username */}

                  <input
                     className='w-[80%] md:w-2/3 text-center focus:border-3 focus:border-[#0D3A5C] focus:text-white focus:bg-blue-950 p-1 border-2 border-[#0D3A5C] bg-white rounded-2xl'
                     type="text"
                     placeholder="Username"
                     value={username}
                     onChange={(e) => setusername(e.target.value)}
                  />


                  {/* Password */}

                  <div className="relative w-[80%] md:w-[30vw]">

                     <input
                        className='w-full text-center focus:border-3 focus:border-[#0D3A5C] focus:text-white focus:bg-blue-950 border-2 border-[#0D3A5C] bg-white p-1 rounded-2xl pr-10'
                        type={showpassord ? "text" : "password"}
                        placeholder="Password"
                        value={pass}
                        onChange={(e) => setpass(e.target.value)}
                     />

                     <button
                        type="button"
                        onClick={handleye}
                        className="absolute right-3 top-1/2 -translate-y-1/2"
                     >

                        {showpassord
                           ? <EyeOff size={20} />
                           : <Eye size={20} />
                        }

                     </button>

                  </div>


               </div>


               {/* SAVE BUTTON */}

               <div>

                  <button
                     onClick={handleclick}
                     disabled={save}
                     className='bg-white text-[#90ADCD] flex mx-auto rounded-xl font-bold border-2 m-5 p-1 px-4 hover:font-extrabold cursor-pointer disabled:opacity-50'
                  >

                     {save ? "SAVING..." : "SAVE"}

                  </button>

               </div>

            </div>

         </div>


         {/* TABLE HEADING */}

         <div>

            <h1 className='font-bold text-2xl flex justify-center mb-4'>

               Your Credential Vault

            </h1>


            <div className='flex bg-blue-950 text-white gap-5 md:gap-15 p-2 rounded-t-4xl m-1 overflow-hidden'>

               <div className='w-2/5 font-bold m-1 text-center'>
                  Site
               </div>

               <div className='w-1/5 font-bold text-center'>
                  Username
               </div>

               <div className='w-1/5 font-bold text-center'>
                  Password
               </div>

               <div className='w-1/5 font-bold text-center'>
                  Action
               </div>

            </div>

         </div>


         {/* PASSWORD LIST */}

         {password.map((x, index) => (

            <div
               key={x._id}
               className='flex text-black gap-5 rounded-2xl border-[#0D3A5C] border-2 m-1'
            >


               {/* WEBSITE */}

               <div className='w-2/5 rounded-2xl bg-[#90ADCD] m-1 text-center gap-3 flex justify-center items-center p-1'>

                  {x.webname}

                  <button
                     onClick={() =>
                        navigator.clipboard.writeText(x.webname)
                     }
                  >

                     <img
                        src={Copy}
                        alt="copy"
                        className='w-4 h-4 ml-2'
                     />

                  </button>

               </div>


               {/* USERNAME */}

               <div className='w-1/5 m-1 bg-[#90ADCD] rounded-2xl text-center gap-3 flex justify-center items-center p-1'>

                  {x.username}

                  <button
                     onClick={() =>
                        navigator.clipboard.writeText(x.username)
                     }
                  >

                     <img
                        src={Copy}
                        alt="copy"
                        className='w-4 h-4 ml-2'
                     />

                  </button>

               </div>


               {/* PASSWORD */}

               <div className='w-1/5 m-1 bg-[#90ADCD] rounded-2xl gap-3 text-center flex justify-center items-center p-1'>

                  <span>
                     {"•".repeat(x.pass ? x.pass.length : 6)}
                  </span>

                  <button
                     onClick={() =>
                        navigator.clipboard.writeText(x.pass)
                     }
                  >

                     <img
                        src={Copy}
                        alt="copy"
                        className='w-4 h-4 ml-2'
                     />

                  </button>

               </div>


               {/* ACTION */}

               <div className='w-1/5 m-1 bg-[#90ADCD] rounded-2xl gap-3 text-center flex justify-center items-center p-1'>

                  {/* EDIT */}

                  <button
                     className="bg-[#4984AE] hover:bg-[#2A5D82] text-white rounded-xl p-1 mr-2"
                     onClick={() => handledit(index)}
                  >

                     <img
                        src={editicon}
                        alt="Edit"
                        className="w-5 h-5"
                     />

                  </button>


                  {/* DELETE */}

                  <button
                     onClick={() => handledelete(index)}
                  >

                     <img
                        src={icondel}
                        alt="Delete"
                        className='w-8 h-8'
                     />

                  </button>

               </div>

            </div>

         ))}


         {/* FOOTER */}

         <Footer />

      </div>

   )

}

export default Manager