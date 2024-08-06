import React, { Suspense, useRef, useState } from 'react'
import emailjs from '@emailjs/browser';
import Dog from '../models/Dog';
import Loader from '../components/Loader';
import { Canvas } from '@react-three/fiber';
const Contact = () => {
    const formRef = useRef();
    const [form, setForm] = useState({name: "", email:'', message:''});
    const [isLoading, setIsLoading] = useState(false);
    const [currentAnimation, setcurrentAnimation] = useState('idle');
    const handleChange = (e) => {
        setForm({...form, [e.target.name]: e.target.value});
    };
    const handleFocus = () => setcurrentAnimation('walk');
    const handleBlur = () => setcurrentAnimation('idle');
    const handleSubmit = (e) => {
        e.preventDefault();
        setIsLoading(true);
        setcurrentAnimation('true');
        emailjs.send(import.meta.env.VITE_APP_EMAILJS_SERVICE_ID, import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID, {
            from_name: form.name,
            to_name: "Shifa",
            from_email: form.email,
            to_email: 'shifasadaat@gmail.com',
            message: form.message
        }, import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY).then(()=>{
           
            setForm({name: "", email:'', message:''})
        }).catch((error)=>{
            setIsLoading(false);
            setcurrentAnimation('idle');
            console.log(error);
        });
    };
    
  return (
   <section className="relative flex lg:flex-row flex-col max-container">

    <div className="flex-1 min-w-[50%] flex flex-col">
        <h1 className="head-text">Get In Touch</h1>

        <form className="w-full flex flex-col gap-7 mt-14" onSubmit={handleSubmit}>
            <label className="text-black-500-font-semibold">Name
            <input required type="text" name="name" className="input" placeholder="*" value={form.name} onChange={handleChange} onFocus={handleFocus} onBlur={handleBlur}/></label>
            <label className="text-black-500-font-semibold">Email
            <input required type="text" name="email" className="input" placeholder="*" value={form.email} onChange={handleChange} onFocus={handleFocus} onBlur={handleBlur}/></label>
            <label className="text-black-500-font-semibold">Message
            <textarea required rows={4} type="text" name="message" className="textarea" placeholder="*" value={form.message} onChange={handleChange} onFocus={handleFocus} onBlur={handleBlur}/></label>
            <button type="submit" onClick={handleSubmit} className="btn" onFocus={handleFocus} onBlur={handleBlur}>
                {isLoading ? "Sending..." : "Send Message" }
            </button>
       
        </form>
        <div className='lg:w-3/4 w-full lg:h-auto md:h=[550px] h-[350px]'>
            <Canvas camera={{
                position: [0,0,5],
                fov: 75, 
                near:0.1,
                far:1000
                }}>
                 <directionalLight intensity={2.5} position={[0,0,1]} />
                 <ambientLight intensity={0.5} />
                <Suspense fallback={<Loader />}>
                    {/* <Dog 
                    currentAnimation={currentAnimation}
                    position={[2.5, -2.1, 0.1]} 
                    rotation={[12.86, 0.45, 0.2]} 
                    scale={[1.4,1.4,1.4]}/> */}
                </Suspense>
            </Canvas>
        </div>
    </div>
   </section>
  )
}

export default Contact