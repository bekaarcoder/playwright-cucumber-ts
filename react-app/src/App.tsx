import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { AppContextProvider } from './context/AppContext';
import AddContactPage from './pages/AddContactPage';
import HomePage from './pages/HomePage';
import EditContactPage from './pages/EditContactPage';

function App() {
    return (
        <Router>
            <Routes>
                <Route
                    path="/"
                    element={
                        <AppContextProvider>
                            <HomePage />
                        </AppContextProvider>
                    }
                />
                <Route path="/create" element={<AddContactPage />} />
                <Route path="/edit/:id" element={<EditContactPage />} />
            </Routes>
        </Router>
    );
}

export default App;
