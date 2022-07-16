import { useRef } from 'react'
import emailjs from '@emailjs/browser';
const Sendemail = () => {

    const form = useRef(null);

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_fbzlu5k', 'template_g7w2m5b', form.current, 'S3yNFh-YVRcCHkWqp')
            .then((result) => {
                console.log(result.text);
                console.log('email sended');
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <div>
            <form ref={form} onSubmit={sendEmail}>
                <label>Name</label>
                <input type="text" name="user_name" />
                <label>Email</label>
                <input type="email" name="user_email" />
                <label>Message</label>
                <textarea name="message" />
                <input type="submit" value="Send" />
            </form>
        </div>
    )
}

export default Sendemail
