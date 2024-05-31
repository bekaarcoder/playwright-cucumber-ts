import { ReactNode, createContext, useEffect, useState } from 'react';

export interface Contact {
    id: string;
    name: string;
    gender: string;
    phone: string;
    street: string;
    city: string;
    country: string;
}

type AppContextProviderType = {
    children: ReactNode;
};

export type AppContextType = {
    data: Contact[] | [];
    searchContact: (query: string) => void;
    deleteContact: (id: string) => void;
};

export const AppContext = createContext<AppContextType | null>(null);

export const AppContextProvider = ({ children }: AppContextProviderType) => {
    const [data, setData] = useState<Contact[]>([]);

    const fetchData = async () => {
        try {
            const contacts = localStorage.getItem('contacts');
            if (!contacts) {
                setData([]);
            } else {
                setData(JSON.parse(contacts));
            }
        } catch (error) {
            setData([]);
        }
    };

    const searchContact = (query: string) => {
        if (query) {
            const searchedContacts = data.filter((contact: Contact) =>
                contact.name.toLowerCase().includes(query.toLowerCase())
            );
            setData(searchedContacts);
        } else {
            fetchData();
        }
    };

    const deleteContact = (id: string) => {
        const filteredData = data.filter((contact) => contact.id !== id);
        setData(filteredData);
        localStorage.setItem('contacts', JSON.stringify(filteredData));
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <AppContext.Provider value={{ data, searchContact, deleteContact }}>
            {children}
        </AppContext.Provider>
    );
};
