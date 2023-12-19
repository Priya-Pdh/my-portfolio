import data from '../../data.json';
function Contact() {
    const {contactInfo} = data
  return (
    <section className="my-8">
      <h2 className="text-2xl font-bold">Contact Information</h2>
      <p className="text-gray-600">Location: {contactInfo.location}</p>
      <p className="text-gray-600">Email: {contactInfo.email}</p>
      <a
        href={contactInfo.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500 hover:underline"
      >
        LinkedIn
      </a>
      <p className="text-gray-600">GitHub: {contactInfo.github}</p>
    </section>
  );
}

export default Contact;
