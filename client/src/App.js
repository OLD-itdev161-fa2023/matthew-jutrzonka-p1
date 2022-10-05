import React from 'react';
import './App.css';
import axios from 'axios';

class App extends React.Component {
  state = {
    data: null
  }

  componentDidMount() {
    axios.get('http://localhost:5000')
      .then((response) => {
        this.setState({
          data: response.data
        })
      })
      .catch((error) => {
        console.error(`Error fetching data: ${error}`);
      })
  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          MCR Regulatory Consultants, LLC
        </header>
        <main>
        <h1>About Us</h1>
        <div id="about">
            <p>MCR Regulatory Consultants, LLC is a family owned business with decades of experience in the chemical compliance
                field. Our owner, Marianne Radtke, spent over 40 years with a large regulatory company before
                leaving to start her own business in Milwaukee. Since then we have worked with hundreds of clients across the globe to
                make sure their products are            
            </p>
            <p>Our team is composed of highly qualified professionals, located all over the Milwaukee area, that will
                work efficiently using their unique experience and knowledge to save you time and money. If we are unable
                to help you, we will use our connections to point you to someone who can. Our main goal is to help you!
            </p>
            <p>When you choose us, we will make sure all of your needs are met and exceeded. Contact us today to discuss
                what needs are and what we can do for you. Once we talk to you, we can determine if we should set up a
                long-term contract or if we should work on an hourly basis.
            </p>
        </div>
        <p>MCR Regulatory Consultants, LLC will provide you with the resources you need to help grow your business.</p>
        <p>Average price for new Product Registrations: $100</p>
        <p>Average price for renewals: $75</p>
        <p>*Please contact us for more pricing information</p>
        <h2>Chat With Our Community!</h2>
        <p id="greeting"></p>
    </main>
    <footer>
        <h2>Other Websites</h2>
        <ul>
            <li><a href="https://www.epa.gov/">United States Environmental Protection Agency</a></li>
            <li><a
                href="http://www.kelly-products.com/kelly-registration-systems/online-licensing-and-agriculture-permits-for-businesses-dealers-and-individuals/">Kelly
                Solutions (State Registrations)</a></li>
            <li><a href="http://npirspublic.ceris.purdue.edu/state/">NPIRS (State Registrations)</a></li>
            </ul>
        <p>&copy; 2021 MCR Regulatory Consultants, LLC</p>
        </footer>
      </div>
    );
  }
}

export default App;