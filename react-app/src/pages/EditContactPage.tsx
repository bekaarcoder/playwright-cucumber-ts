import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Contact } from '../context/AppContext';
import ContactForm from '../components/ContactForm';

const EditContactPage = () => {
    const { id } = useParams();
    const [contactToEdit, setContactToEdit] = useState<Contact | null>(null);

    useEffect(() => {
        if (id) {
            const contacts = localStorage.getItem('contacts');
            if (contacts) {
                const contact = JSON.parse(contacts).find(
                    (contact: Contact) => contact.id.toString() === id
                );
                setContactToEdit(contact);
            }
        }
    }, [id]);

    return (
        <div className="container mx-auto px-4 py-10">
            <h2 className="text-4xl font-semibold text-white text-center">
                Edit Contact
            </h2>
            {contactToEdit ? (
                <ContactForm contact={contactToEdit} />
            ) : (
                <p className="text-center text-white text-xl mt-8">
                    Contact not found
                </p>
            )}
        </div>
    );
};

export default EditContactPage;
