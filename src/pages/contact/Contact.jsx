import { useEffect, useRef, useState } from "react"
import image1 from "../../images/logo/contact_image.svg"
import emailjs from '@emailjs/browser';
import Spinner from "../extras/Spinner";

function Contact() {
  const [contactForm,setContactForm]=useState({name:'',email:'',phoneNumber:'',message:''})
  const [fieldNotFilled,setFieldNotFilled]=useState(false)
  const {name,email,phoneNumber,message}=contactForm
  const [sendMessage,setSendMessage]=useState(false)
  const form = useRef();

  useEffect(function(){
    const resetFilledTrigger=setTimeout(function(){
      setFieldNotFilled(false)
    },3000)

    return function(){
      clearTimeout(resetFilledTrigger)
    }

  },[fieldNotFilled])

  const handleChange=function(e){
    setContactForm({...contactForm,[e.target.name]: e.target.value})
  }

  function handleSubmitMessage(e){
    e.preventDefault()
    if(name.trim()===""||email.trim()===""||phoneNumber.trim()===""||message.trim()===""){
      setFieldNotFilled(true)
    }else{
      if(email.indexOf('@')===email.lastIndexOf('@')){      
          setSendMessage(true)
          emailjs.sendForm('service_x0ero4a', 'template_yduhpeq', form.current, 'CdvIJoio1htO4SQuP')
            .then((result) => {
                console.log(result.text);
                setSendMessage(false)
                setContactForm({name:'',email:'',phoneNumber:'',message:''})
            }, (error) => {
                alert(error.text);
            });
      }else{
        console.log("NAN");
      }
    }
  }

  return (
    <div>
      <div className="  bg-cover bg-center bg-no-repeat  h-[450px] bg-[url(images/footer_images/footer_logo.svg)]">
        <div className=" bg-black h-[450px] bg-opacity-85 flex flex-col justify-center items-center">
          <header className=" text-white flex justify-center items-center gap-2 ">
            <p className=" font-semibold text-2xl md:text-4xl font-serif">Contact</p>
            <img src={image1} className=" w-20 py-2" alt="Frank Diba" />
          </header>
          <form action="" ref={form} onSubmit={handleSubmitMessage} className=" flex flex-col gap-4">
            <input onChange={handleChange} value={name} type="text" name="name" placeholder="Name" className={` ${name.length===0&&fieldNotFilled?'border-red-600 border-[2px]':''}  sm:w-72  md:w-96 md:py-1  outline-none rounded-md placeholder:font-medium px-3 py-0.5 bg-gray-100`} />
            <input onChange={handleChange} value={email} type={"email"} name="email" placeholder="Email" className={` ${email.length===0&&fieldNotFilled?'border-red-600 border-[2px]':''} sm:w-72 md:w-96 md:py-1   outline-none rounded-md placeholder:font-medium px-3 py-0.5 bg-gray-100`} />
            <input onChange={handleChange} value={phoneNumber} type={"tel"} name="phoneNumber" placeholder=" Phone Number" className={` ${phoneNumber.length===0&&fieldNotFilled?'border-red-600 border-[2px]':''} sm:w-72  md:w-96 md:py-1  outline-none rounded-md placeholder:font-medium px-3 py-0.5 bg-gray-100`} />
            <textarea onChange={handleChange} value={message} name="message" className={` ${message.length===0&&fieldNotFilled?'border-red-600 border-[2px]':''} outline-none bg-gray-100 rounded placeholder:font-semibold md:w-96 md:py-1   sm:w-72 px-3`} placeholder="Message" cols="30" rows="5"></textarea>
            <button type="submit" disabled={sendMessage} className={` ${sendMessage?' bg-slate-700 ':'bg-black'}
             text-white py-1 rounded-full flex justify-center items-center gap-4`}><span>Send Message</span><span>{sendMessage&&<Spinner/>}</span></button>
          </form>
        </div>

      </div>
    </div>
  )
}

export default Contact