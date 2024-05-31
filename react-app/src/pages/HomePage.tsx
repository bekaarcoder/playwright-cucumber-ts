import { FormEvent, useState } from 'react';
import { Link } from 'react-router-dom';
import { useAppContext } from '../hooks/useAppContext';

const HomePage = () => {
    const { data, searchContact, deleteContact } = useAppContext();
    const [query, setQuery] = useState('');

    const handleSearch = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        searchContact(query);
    };

    const handleDelete = (id: string) => {
        if (confirm('Are you sure you want to delete?')) {
            deleteContact(id);
        }
    };

    return (
        <div className="container mx-auto px-4 py-10">
            <h2 className="text-4xl font-semibold text-white text-center">
                Contacts
            </h2>
            <div className="max-w-md mx-auto mt-10">
                <div className="flex gap-2">
                    <form className="flex-1" onSubmit={handleSearch}>
                        <input
                            type="text"
                            name="search"
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                            placeholder="Search"
                            className="w-full bg-gray-200 px-2 py-1 rounded-lg outline-none border border-gray-200"
                        />
                    </form>
                    <Link to="/create">
                        <button
                            type="button"
                            className="px-4 py-1 font-semibold bg-yellow-400 rounded-lg border border-yellow-600 hover:bg-yellow-500"
                        >
                            Create
                        </button>
                    </Link>
                </div>
            </div>
            <div className="max-w-md mx-auto mt-10 space-y-4">
                {data.length > 0 ? (
                    data.map((contact, index) => (
                        <div
                            className="w-full rounded-lg shadow-md bg-white p-3 space-y-2"
                            key={index}
                        >
                            <p>
                                <strong>Name: </strong>
                                {contact.name}
                            </p>
                            <p>
                                <strong>Gender: </strong>
                                {contact.gender}
                            </p>
                            <p>
                                <strong>Phone: </strong>
                                {contact.phone}
                            </p>
                            <p>
                                <strong>Address: </strong>
                                {contact.street}, {contact.city},{' '}
                                {contact.country}
                            </p>
                            <div className="flex gap-2 pt-2">
                                <Link to={`/edit/${contact.id}`}>
                                    <button className="px-4 py-1 bg-blue-500 rounded-lg text-white font-semibold">
                                        Edit
                                    </button>
                                </Link>
                                <button
                                    onClick={() => handleDelete(contact.id)}
                                    className="px-4 py-1 bg-pink-600 rounded-lg text-white font-semibold"
                                >
                                    Delete
                                </button>
                            </div>
                        </div>
                    ))
                ) : (
                    <p className="text-gray-200 text-center">
                        No contacts found.
                    </p>
                )}
            </div>
        </div>
    );
};

export default HomePage;
