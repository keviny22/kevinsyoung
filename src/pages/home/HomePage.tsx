import React from 'react';
import headshot from './headshot.jpg';
import linkedinLogo from './LI-Logo.png';


function HomePage() {
    return (
        <div className="App">
            <header className="App-header">
              <a href="https://www.linkedin.com/in/kevinsyoung/" rel="noopener noreferrer" target="_blank">
              <img src={headshot} className="headshot" alt="headshot" />
              </a>
              <p>
                Kevin S. Young | Software Developer
              </p>
              <a href="https://www.linkedin.com/in/kevinsyoung/" rel="noopener noreferrer" target="_blank">
                <img src={linkedinLogo} className="linkedinLogo" alt="linkedinLogo" />
              </a>

            </header>
        </div>
    );
}

export default HomePage;
