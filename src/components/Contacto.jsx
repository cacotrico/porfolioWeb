import  { useState } from 'react';
import emailjs from 'emailjs-com';
import './styles/Contacto.css'

const Contacto = () => {
  const [name, setName] = useState('');
  const [subject, setSubject] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    emailjs
    .send('service_td4ygja', 'template_a508oaw', { name, message, subject, email }, 'm3q0hotAHwHJlRrlY',{
      name,
      subject,
      email,
      message,
    })
    .then((response) => {
      setIsLoading(false);

      if (response.status === 200) {
        setSuccessMessage('El correo ha sido enviado con éxito.');
      } else {
        setIsError(true);
        setSuccessMessage(
          'Ocurrió un error al enviar el correo. Por favor, intenta nuevamente.'
        );
      }
    })
      .catch(() => {
      setIsError(true);
      setSuccessMessage(
        'Ocurrió un error al enviar el correo. Por favor, intenta nuevamente.'
      );
    });

  setIsLoading(false);
  setName('');
  setSubject('');
  setEmail('');
  setMessage('');
};

  return (
    <div className='container-contacto'>
      <form onSubmit={handleSubmit} className='formulario'>
        <div className='camposdecontacto'>         
          <label htmlFor="name"></label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder='Nombre:'
            required
          />
        </div>
        <div className='camposdecontacto'>
          <label htmlFor="subject"/>
          <input
            type="text"
            id="subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            placeholder='Asunto:'
            required
          />
        </div>
        <div className='camposdecontacto'>
          <label htmlFor="email"></label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder='Email:'
            required
          />
        </div>
        <div className='camposdecontacto'>
          <label htmlFor="message"></label>
          <textarea className='areademensaje'
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder='Mensaje:'
            required
          ></textarea>
        </div>
        <button type="submit" disabled={isLoading} className='EnvioMSJ'>{isLoading ? 'Enviando...' : 'Enviar'}</button>
        {isError && <p className="error">{successMessage}</p>}
        {!isError && successMessage && <p className="success">{successMessage}</p>}
      </form>
    </div>
  );
};

export default Contacto;
