import Head from "next/head";
import FormContact from "../../components/ContactForm";

const Contact = () => {
  return (
    <>
      <Head>
        <title>Contact</title>
        <meta name="description" content="List tutorials about programming" />
      </Head>
      <FormContact />
    </>
  );
};

export default Contact;
