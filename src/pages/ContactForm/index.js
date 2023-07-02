import React from 'react';
import styles from "./ContactForm.module.css";
import { useForm, ValidationError } from '@formspree/react';

function ContactForm() {
    const [state, handleSubmit] = useForm("xnqkabpj");

    if (state.succeeded) {
        return (
            <div style={{ width: "100%", height: "500px", display: "flex", justifyContent: "center", alignItems: "center" }}>
                <p style={{ color: "#fffffe", fontSize: "40px", fontWeight: "900" }}>Thank you for your message!</p>
            </div>
        );
    }

    return (
        <div className={styles.wrapper}>
            <form onSubmit={handleSubmit} className={styles.formWrapper} action="https://formspree.io/f/xnqkabpj" method='POST'>
                <label htmlFor="email">
                    Email:
                    <br/>
                    <input
                        id="email"
                        type="email"
                        name="email"
                    />
                    <ValidationError
                        prefix="Email"
                        field="email"
                        errors={state.errors}
                    />
                </label>
                <label htmlFor="message">
                    Message:
                    <br/>
                    <textarea
                        id="message"
                        name="message"
                        style={{ width: "100%", height: "100px" }}
                    />
                    <ValidationError
                        prefix="Message"
                        field="message"
                        errors={state.errors}
                    />
                </label>

                <button style={{ fontFamily: "Comic Sans MS", fontWeight: "800" }} type="submit" disabled={state.submitting}>
                    Submit
                </button>
            </form>
        </div>
    );
}

export default ContactForm;
