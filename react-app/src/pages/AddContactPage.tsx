import ContactForm from '../components/ContactForm';

const AddContactPage = () => {
    return (
        <div className="container mx-auto px-4 py-10">
            <h2 className="text-4xl font-semibold text-white text-center">
                Create Contact
            </h2>
            <ContactForm />
        </div>
    );
};

export default AddContactPage;
