import { useEffect, useRef, useState } from "react";
import styles from "./contact-fom.module.css";
import Notification from "../ui/notification";

async function sendContact(client) {
  const response = fetch("/api/contact", {
    method: "POST",
    body: JSON.stringify(client),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!response) {
    throw new Error("WRONG");
  }
}

const FormContact = () => {
  const inputEm = useRef();
  const inputMes = useRef();
  const inputNa = useRef();
  const [requestStatus, setRequestStatus] = useState();
  const [requestError, setRequestError] = useState();

  useEffect(() => {
    if (requestStatus === "success" || requestStatus === "error") {
      const timer = setTimeout(() => {
        setRequestStatus(null);
        setRequestError(null);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [requestStatus]);

  const handlerSubmit = async (event) => {
    event.preventDefault();

    const Email = inputEm.current.value;
    const Name = inputNa.current.value;
    const Message = inputMes.current.value;

    const client = {
      email: Email,
      name: Name,
      message: Message,
    };

    setRequestStatus("pending");

    try {
      await sendContact(client);
      setRequestStatus("success");
    } catch (error) {
      setRequestError(error.message);
      setRequestStatus("error");
    }
  };

  let notification;

  if (requestStatus === "pending") {
    notification = {
      status: "pending",
      title: "Sending Message",
      message: "...",
    };
  }
  if (requestStatus === "success") {
    notification = {
      status: "success",
      title: "Success",
      message: "...",
    };
  }

  if (requestStatus === "error") {
    notification = {
      status: "Erro",
      title: "Erro",
      message: requestError,
    };
  }

  return (
    <section className={styles.contact}>
      <h1>How can I help you?</h1>
      <form className={styles.form} onSubmit={handlerSubmit}>
        <div className={styles.controls}>
          <div className={styles.control}>
            <input
              type="email"
              ref={inputEm}
              placeholder="Email"
              id="email"
              required
            />
          </div>
          <div className={styles.control}>
            <input
              type="name"
              placeholder="Name"
              ref={inputNa}
              id="name"
              required
            />
          </div>
          <div className={styles.control}>
            <textarea
              rows={5}
              type="message"
              placeholder="Mensagem"
              ref={inputMes}
              id="message"
              required
            />
          </div>
        </div>
        <div className={styles.actions}>
          <button>Send Message</button>
        </div>
      </form>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
    </section>
  );
};

export default FormContact;
