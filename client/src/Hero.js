import React from 'react';

const Hero = ({handleLogout}) => {
    return (
        <section className="hero">
            <nav>
                <h2>Welcome</h2>
                <button onClick={handleLogout}>Log Out</button>
            </nav>
        </section>
    )
}

export default Hero;