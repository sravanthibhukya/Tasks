import React from 'react';


const Home = () => {
    const handleLogout = () => {
        localStorage.removeItem('token');
        window.location.href = '/login';
    };

    return (
        <div className="home-container">
            <header className="home-header">
                <h1>Home Page</h1>
                <button className="logout-button" onClick={handleLogout}>Logout</button>
            </header>
            <main className="home-content">
                <p>Welcome to the home page!</p>
            </main>
            <footer className="home-footer">
                <p>&copy; 2024 Your Company</p>
            </footer>
        </div>
    );
};

export default Home;
