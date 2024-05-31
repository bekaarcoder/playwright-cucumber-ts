import { FormEvent, useState } from 'react';
import { Link } from 'react-router-dom';

const CreateContact = () => {
    const [name, setName] = useState('');
    const [gender, setGender] = useState('');
    const [phone, setPhone] = useState('');
    const [street, setStreet] = useState('');
    const [city, setCity] = useState('');
    const [country, setCountry] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const resetStates = () => {
        setError('');
        setName('');
        setGender('');
        setPhone('');
        setStreet('');
        setCity('');
        setCountry('');
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        setError('');
        setSuccess('');
        e.preventDefault();
        if (!name || !gender || !phone || !street || !city || !country) {
            setError('All fields are required.');
            return true;
        }

        const data = {
            name,
            gender,
            phone,
            street,
            city,
            country,
            id: Date.now(),
        };
        const contacts = localStorage.getItem('contacts');
        if (!contacts) {
            localStorage.setItem('contacts', JSON.stringify([data]));
        } else {
            const parsedData = JSON.parse(contacts);
            const updatedData = [...parsedData, data];
            console.log(updatedData);
            localStorage.setItem('contacts', JSON.stringify(updatedData));
        }
        setSuccess('Contact created successfully.');
        resetStates();
    };

    return (
        <div className="container mx-auto px-4 py-10">
            <h2 className="text-4xl font-semibold text-white text-center">
                Create Contact
            </h2>
            <div className="max-w-md mx-auto mt-10">
                <form onSubmit={handleSubmit}>
                    <div className="w-full shadow-md bg-gray-300 rounded-lg p-4 space-y-4">
                        <div className="flex flex-col gap-2">
                            <label htmlFor="name" className="font-semibold">
                                Name
                            </label>
                            <input
                                type="text"
                                name="name"
                                id="name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                placeholder="John Doe"
                                className="flex-1 bg-white px-4 py-2 rounded-lg outline-none border border-gray-800"
                            />
                        </div>
                        <div className="flex flex-row gap-4">
                            <label htmlFor="city" className="font-semibold">
                                Gender
                            </label>
                            <span className="flex gap-1">
                                <input
                                    type="radio"
                                    id="male"
                                    name="gender"
                                    value="Male"
                                    onChange={(e) => setGender(e.target.value)}
                                    checked={gender === 'Male'}
                                />
                                <label htmlFor="male">Male</label>
                            </span>
                            <span className="flex gap-1">
                                <input
                                    type="radio"
                                    id="female"
                                    name="gender"
                                    value="Female"
                                    onChange={(e) => setGender(e.target.value)}
                                    checked={gender === 'Female'}
                                />
                                <label htmlFor="female">Female</label>
                            </span>
                            <span className="flex gap-1">
                                <input
                                    type="radio"
                                    id="other"
                                    name="gender"
                                    value="Other"
                                    onChange={(e) => setGender(e.target.value)}
                                    checked={gender === 'Other'}
                                />
                                <label htmlFor="other">Other</label>
                            </span>
                        </div>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="phone" className="font-semibold">
                                Phone Number
                            </label>
                            <input
                                type="text"
                                name="phone"
                                id="phone"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                placeholder="9000090000"
                                className="flex-1 bg-white px-4 py-2 rounded-lg outline-none border border-gray-800"
                            />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="street" className="font-semibold">
                                Street Address
                            </label>
                            <input
                                type="text"
                                name="street"
                                id="street"
                                value={street}
                                onChange={(e) => setStreet(e.target.value)}
                                placeholder="123 Street, 4th Lane"
                                className="flex-1 bg-white px-4 py-2 rounded-lg outline-none border border-gray-800"
                            />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="City" className="font-semibold">
                                City
                            </label>
                            <input
                                type="text"
                                name="city"
                                id="city"
                                value={city}
                                onChange={(e) => setCity(e.target.value)}
                                placeholder="New York"
                                className="flex-1 bg-white px-4 py-2 rounded-lg outline-none border border-gray-800"
                            />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="country" className="font-semibold">
                                Country
                            </label>
                            <select
                                name="country"
                                id="country"
                                value={country}
                                onChange={(e) => setCountry(e.target.value)}
                                className="flex-1 bg-white py-2 px-2 rounded-lg outline-none border border-gray-800"
                            >
                                <option value="">Select Country</option>
                                <option value="India">India</option>
                                <option value="USA">USA</option>
                                <option value="Australia">Australia</option>
                                <option value="Japan">Japan</option>
                                <option value="Singapore">Singapore</option>
                            </select>
                        </div>
                        <div className="flex gap-4">
                            <button className="flex-1 bg-green-600 py-2 rounded-lg font-semibold text-white hover:bg-green-700">
                                Submit
                            </button>
                            <Link to="/" className="flex-1">
                                <button className=" w-full bg-gray-600 py-2 rounded-lg font-semibold text-white hover:bg-gray-700">
                                    Back
                                </button>
                            </Link>
                        </div>
                        {error && (
                            <div className="text-center">
                                <p className="text-red-500">{error}</p>
                            </div>
                        )}
                        {success && (
                            <div className="text-center">
                                <p className="text-green-600">{success}</p>
                            </div>
                        )}
                    </div>
                </form>
            </div>
        </div>
    );
};

export default CreateContact;
