import { MdOutlineMailOutline , MdOutlineLocalPhone, MdOutlineLocationOn  } from "react-icons/md";
import emailjs from "@emailjs/browser";
import { useState, useRef, useEffect } from "react";
import "./ContactMe.css";

export default function ContactMe() {

  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {        
    e.preventDefault();

    emailjs.sendForm(
      "service_a0tyfgu",
      "template_wkrl2um",
      e.target,
      "R7lnPO-Q2aBEcXphN"
    )
    .then(() => {
      alert("Mensaje enviado con éxito!");
      setFormData({ name: "", email: "", message: "" });
    })
    .catch((error) => {
      console.error("Error al enviar el mensaje:", error);
    });
  };


  const contactRef = useRef(null);
      
  useEffect(() => {
    const observer = new IntersectionObserver(
    (entries, observer) => {
        entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("animate");
            observer.unobserve(entry.target); // Dejar de observar después de la primera vez
        }
        });
    },
    { threshold: 0.6 } // Se activa cuando el 50% del elemento es visible
    );

    if (contactRef.current) {
    observer.observe(contactRef.current);
    }

    return () => observer.disconnect(); // Limpieza para evitar errores
  }, []);

  return (
    <section id="contact" ref={contactRef} className="contact-container">
      {/* Columna Izquierda - Info de Contacto */}
      <div className="contact-info">
        <h1>Contact me</h1>
        <p>
          If you have any questions or ideas, I'd love to hear from you. 
          Leave your contact info, and I'll reach out soon. 
          <br/>
          Let's create something amazing! 🚀
        </p>
        <div className="contact-details">
          <p><MdOutlineMailOutline className="icon" />samuelmaldonadom@gmail.com</p>
          <p><MdOutlineLocalPhone className="icon" />+57 321 841 36 25</p>
          <p><MdOutlineLocationOn className="icon" />Barranquilla, Colombia</p>
        </div>
      </div>
      
      {/* Columna Derecha - Formulario */}
      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-title">
          <label>Name</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} required />
        </div>
        <div className="form-title">
          <label>Email</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </div>
        <div className="form-title">
          <label>Message</label>
          <textarea name="message" value={formData.message} onChange={handleChange} required></textarea>
        </div>
        <button type="submit">Enviar</button>
      </form>
    </section>
  );
}
