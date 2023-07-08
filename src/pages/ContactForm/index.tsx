import styles from '../ContactForm/contactForm.module.css';
import { useForm, ValidationError } from '@formspree/react';


/**
 * formUrl 被注解为 string 类型。
 * ContactForm 组件被注解为函数组件 (React.FC)。
 * 使用 || '' 确保 formUrl 有一个默认的空字符串值，以避免当环境变量 REACT_APP_FORM_KEY 未定义时出现错误。
 */
const formUrl: string = process.env.REACT_APP_FORM_KEY || ''; // 引用环境变量

function ContactForm() {
  const [state, handleSubmit] = useForm(formUrl);

  if (state.succeeded) {
    return (
      <div
        style={{
          width: '100%',
          height: '500px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: "#232946",
          boxShadow: "8px 8px 10px rgba(0, 0, 0, 0.2)"
        }}
      >
        <p style={{
          color: '#fffffe', fontSize: '40px', fontWeight: '900', textAlign: "center"
        }}>
          Thank you for your message! I will contact you soon!
        </p>
      </div >
    );
  }

  return (
    <div className={styles.wrapper}>
      <form
        onSubmit={handleSubmit}
        className={styles.formWrapper}
        action={`https://formspree.io/f/${formUrl}`}
        method="POST"
      >
        <label htmlFor="email">
          Please enter your email address:
          <br />
          <input id="email" type="email" name="email" />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
        </label>
        <label htmlFor="message">
          Please leave your message here:
          <br />
          <textarea
            id="message"
            name="message"
            style={{ width: '100%', height: '100px' }}
          />
          <ValidationError prefix="Message" field="message" errors={state.errors} />
        </label>

        <button style={{ fontFamily: 'Comic Sans MS', fontWeight: '800' }} type="submit" disabled={state.submitting}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default ContactForm;
