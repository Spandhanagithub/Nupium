import React, { Component } from 'react';
import './PopUpForm.css';

class RegistrationForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      businessName: '',
      industry: '',
      email: '',
      contactNumber: '',
      countryCode: '',
      country: '',
      businessSize: '',
      yearlyTurnover: '',
      areaOfOperations: '',
      solutionsInterested: [],
      supportingDocuments: null,
      captcha: '',
      message: '',
      showPopUp: false,
      popUpContent: null,
      showDevelopment: false,
    };
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    const { solutionsInterested } = this.state;

    if (checked) {
      this.setState({ solutionsInterested: [...solutionsInterested, name] });
    } else {
      this.setState({ solutionsInterested: solutionsInterested.filter((item) => item !== name) });
    }
  };

  handleFileChange = (event) => {
    this.setState({ supportingDocuments: event.target.files[0] });
  };

  handleDevelopmentClick = () => {
    this.setState((prevState) => ({
      showDevelopment: !prevState.showDevelopment,
    }));
  };

  showPopUp = (popupId, popupType, event) => {
    // Prevent the default behavior of the link
    if (event) {
      event.preventDefault();
    }

    // Hide all pop-up menus
    var popups = document.getElementsByClassName('popup');
    for (var i = 0; i < popups.length; i++) {
      popups[i].style.display = 'none';
    }

    // Show the selected pop-up menu
    var popup = document.getElementById(popupId);
    if (popup) {
      popup.style.display = 'block';

      // Add specific logic for different popup types
      if (popupType === 'ConsultingPopup') {
        this.setState({
          showPopUp: true,
          popUpContent: 'ConsultingPopup Content',
        });
      } else if (popupType === 'InnovationPopup') {
        this.setState({
          showPopUp: true,
          popUpContent: 'InnovationPopup Content',
        });
      } else if (popupType === 'NetworkingPopup') {
        this.setState({
          showPopUp: true,
          popUpContent: 'NetworkingPopup Content',
        });
      } else {
        this.setState({
          showPopUp: true,
          popUpContent: null,
        });
      }

      // Add a class to the body when the popup is open to prevent scrolling
      document.body.classList.add('popup-open');
    }
  };

  closePopUp = () => {
    this.setState({
      showPopUp: false,
      popUpContent: null,
    });

    // Remove the class from the body when the popup is closed
    document.body.classList.remove('popup-open');
  };

  handleRadioChange = (event, name) => {
    this.setState({ [name]: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    // You can handle form submission, validation, and email sending logic here
    // This is just a simple example
    this.setState({ message: 'Form submitted successfully Thanks for submitting your query we will get back to you within 24:00 hrs as per working days (Monday to Friday)' });
  };

  closePopUp = () => {
    this.setState({
      showPopUp: false,
      popUpContent: null,
    });
  };

  render() {
    const { message } = this.state;
    
    return (
      <div className='pop'>
  <form action="https://formsubmit.co/sales@nupium.com" method="POST">

          <div className="form-column">
            <label>Your Name*:</label>
            <input type="text" name="name" value={this.state.name} onChange={this.handleInputChange} />
          </div>

          <div className="form-column">
            <label>Business Name*:</label>
            <input type="text" name="businessName" value={this.state.businessName} onChange={this.handleInputChange} />
          </div>

          <div className="form-column">
            <label>Industry*:</label>
            <input type="text" name="industry" value={this.state.industry} onChange={this.handleInputChange} />
          </div>

          <div className="form-column">
            <label>Email ID*:</label>
            <input type="email" name="email" value={this.state.email} onChange={this.handleInputChange} />
          </div>

          <div className="form-column">
            <label>Contact Number*:</label>
            <input type="text" name="contactNumber" value={this.state.contactNumber} onChange={this.handleInputChange} />
          </div>

          <div className="form-column">
  <label>Country:</label>
  <select name="country" value={this.state.country} onChange={this.handleInputChange}>
    <option value="">Select</option>
    <option value="Afghanistan">Afghanistan</option>
    <option value="Albania">Albania</option>
    <option value="Algeria">Algeria</option>
    <option value="Argentina">Argentina</option>
    <option value="Australia">Australia</option>
    <option value="Brazil">Brazil</option>
    <option value="Canada">Canada</option>
    <option value="China">China</option>
    <option value="Colombia">Colombia</option>
    <option value="Denmark">Denmark</option>
    <option value="Egypt">Egypt</option>
    <option value="France">France</option>
    <option value="Germany">Germany</option>
    <option value="Greece">Greece</option>
    <option value="India">India</option>
    <option value="Indonesia">Indonesia</option>
    <option value="Iran">Iran</option>
    <option value="Iraq">Iraq</option>
    <option value="Italy">Italy</option>
    <option value="Japan">Japan</option>
    <option value="Mexico">Mexico</option>
    <option value="Netherlands">Netherlands</option>
    <option value="New Zealand">New Zealand</option>
    <option value="Nigeria">Nigeria</option>
    <option value="Norway">Norway</option>
    <option value="Pakistan">Pakistan</option>
    <option value="Peru">Peru</option>
    <option value="Philippines">Philippines</option>
    <option value="Poland">Poland</option>
    <option value="Russia">Russia</option>
    <option value="Saudi Arabia">Saudi Arabia</option>
    <option value="South Africa">South Africa</option>
    <option value="South Korea">South Korea</option>
    <option value="Spain">Spain</option>
    <option value="Sweden">Sweden</option>
    <option value="Switzerland">Switzerland</option>
    <option value="Thailand">Thailand</option>
    <option value="Turkey">Turkey</option>
    <option value="United Kingdom">United Kingdom</option>
    <option value="United States">United States</option>
    <option value="Vietnam">Vietnam</option>
    <option value="Yemen">Yemen</option>
    <option value="Zambia">Zambia</option>
    <option value="Zimbabwe">Zimbabwe</option>
  </select>
</div>





          <div className="form-column">
          <label>Business Size*:</label>
          <p className='ad'>Less than 100 people</p>
          <input type="radio" name="businessSize" value="Less than 100 people" onChange={(e) => this.handleRadioChange(e, 'businessSize')} />

          <p className='ad'>Less than 500 people</p>
          <input type="radio" name="businessSize" value="Less than 500 people" onChange={(e) => this.handleRadioChange(e, 'businessSize')} />

          <p className='ad'>More than 500 people</p>
          <input type="radio" name="businessSize" value="More than 500 people" onChange={(e) => this.handleRadioChange(e, 'businessSize')} />
        </div>

        <div className="form-column">
          <label>Yearly Turnover*:</label>
          <p className='ba'>Less than 10 Million US$</p>
          <input type="radio" name="yearlyTurnover" value="Less than 10 Million US$" onChange={(e) => this.handleRadioChange(e, 'yearlyTurnover')} />

          <p className='ba'>Less than 50 Million US$</p>
          <input type="radio" name="yearlyTurnover" value="Less than 50 Million US$" onChange={(e) => this.handleRadioChange(e, 'yearlyTurnover')} />

          <p className='ba'>More than 50 Million US$</p>
          <input type="radio" name="yearlyTurnover" value="More than 50 Million US$" onChange={(e) => this.handleRadioChange(e, 'yearlyTurnover')} />
        </div>

        <div className="form-column">
          <label>Your Area of Operations*:</label>
          <p className='ca'>Within Country Boundaries</p>
          <input type="radio" name="areaOfOperations" value="Within Country Boundaries" onChange={(e) => this.handleRadioChange(e, 'areaOfOperations')} />

          <p className='ca'>Within Continent</p>
          <input type="radio" name="areaOfOperations" value="Within Continent" onChange={(e) => this.handleRadioChange(e, 'areaOfOperations')} />

          <p className='ca'>Worldwide</p>
          <input type="radio" name="areaOfOperations" value="Worldwide" onChange={(e) => this.handleRadioChange(e, 'areaOfOperations')} />
        </div>

          <div className="form-column">
          <a href="#" onClick={(e) => this.showPopUp('CorporateSolutions', 'ConsultingPopup', e)}>
  Solutions Interested In*         Select
</a>

          </div>

          <div id="CorporateSolutions" className="popup">
          <ul>
  <li>
    <label>
      <input
        type="checkbox"
        onChange={() => this.showPopUp('Package')}
      />
      Corporate Solutions
    </label>
  </li>
  <li>
    <label>
      <input
        type="checkbox"
        onChange={() => this.showPopUp('Consultings')}
      />
      Process Outsourcing
    </label>
  </li>
  <li>
    <label>
      <input
        type="checkbox"
        onChange={() => this.showPopUp('ApplicationDevelopment')}
      />
      Application Development
    </label>
  </li>
  <li>
    <label>
      <input
        type="checkbox"
        onChange={() => this.showPopUp('Web3Solutions')}
      />
      Web 3 Solutions
    </label>
  </li>
</ul>

          </div>
          <div id="Package" className="popup">
          <a href="#" onClick={(e) => this.showPopUp('Consulting','ConsultingPopup', e)}>Consulting</a>
<a href="#" onClick={(e) => this.showPopUp('Innovation', 'InnovationPopup', e)}>Innovation</a>
<a href="#" onClick={(e) => this.showPopUp('Networking', 'NetworkingPopup', e)}>Networking</a>


</div>




<div id="Consulting" className="popup">
  <ul>
    <li>
      <a href="#" onClick={() => this.showPopUp('PackageWithAllSolutions')}>Package with all Solutions</a>
    </li>
    <li>
      <a href="#" onClick={() => this.showPopUp('PackageAsPerServices')}>Package as per Services</a>
    </li>
  </ul>
</div>

<div id="PackageWithAllSolutions" className="popup">
  <p>Package with all Solutions:</p>
  <ul>
    <li>Corporate Legal Consulting</li>
    <li>HR Solutions</li>
    <li>Infrastructure Set Up</li>
    <li>Business Model</li>
    <li>Machinery Infrastructure</li>
    <li>IT Consulting</li>
    <li>Mentorship</li>
    <li>Investments & Funding</li>
    <li>Marketing Strategy</li>
  </ul>
</div>

<div id="PackageAsPerServices" className="popup">
  <p> Package as per Services:</p>
  <ul>
    <li>Corporate Legal Consulting</li>
    <li>HR Solutions</li>
    <li>Infrastructure Set Up</li>
    <li>Business Model</li>
    <li>Machinery Infrastructure</li>
    <li>IT Consulting</li>
    <li>Mentorship</li>
    <li>Investments & Funding</li>
    <li>Marketing Strategy</li>
  </ul>
</div>



<div id="Innovation" className="popup">
  <ul>
    <li>
      <a href="#" onClick={() => this.showPopUp('PackageSolutionsPopup', 'InnovationPopup')}>Package with all Solutions</a>
    </li>
    <li>
      <a href="#" onClick={() => this.showPopUp('PackageServicesPopup', 'InnovationPopup')}>Package as per Services</a>
    </li>
  </ul>
</div>

<div id="PackageSolutionsPopup" className="popup InnovationPopup">
  <p>Package with all Solutions</p>
  <ul>
  <li>Agile Insights</li>
    <li>Packaging Appeal</li>
    <li>Invention Products</li>
    <li>Market Intelligence</li>
    <li>Redevelopment of Existing Product</li>
  </ul>
</div>

<div id="PackageServicesPopup" className="popup InnovationPopup">
  <p>Package as per Services</p>
  <ul>
  <li>Agile Insights</li>
    <li>Packaging Appeal</li>
    <li>Invention Products</li>
    <li>Market Intelligence</li>
    <li>Redevelopment of Existing Product</li>
  </ul>
</div>



<div id="Networking" className="popup">
  <ul>
    <li>
      <a href="#" onClick={() => this.showPopUp('PackageSolutionsPopup', 'InnovationPopup')}>Package with all Solutions</a>
    </li>
    <li>
      <a href="#" onClick={() => this.showPopUp('PackageServicesPopup', 'InnovationPopup')}>Package as per Services</a>
    </li>
  </ul>
</div>

<div id="PackageSPopup" className="popup InnovationPopup">
  <p>Package with all Solutions</p>
  <ul>
  <li>Supply Chain Strategy</li>
    <li>Distribution Model</li>
    <li>Logistics Infrastructure</li>
    <li>Business Operations Documents</li>
  </ul>
</div>

<div id="PackageSPopup" className="popup InnovationPopup">
  <p>Package as per Services</p>
  <ul>
  <li>Supply Chain Strategy</li>
    <li>Distribution Model</li>
    <li>Logistics Infrastructure</li>
    <li>Business Operations Documents</li>
  </ul>
</div>


<div id="Consultings" className="popup">
<ul>
  <li>Social Media Handling</li>
  <li>Digital Marketing</li>
  <li>Recruitment</li>
  <li>Chat Support</li>
  <li>Digital Content Creation</li>
</ul>
</div>

<div>
<div id="ApplicationDevelopment" className="popup">
          <ul>
            <li onClick={this.handleDevelopmentClick}>Development</li>
            <li>Maintenance Services</li>
          </ul>
        </div>

        {this.state.showDevelopment ? (
          <div  id="ApplicationDevelopment" className="popup">
            <ul>
              <li>Website Development</li>
              <li>Android Application Development</li>
              <li>IOS Application Development</li>
              <li>Mobile Application Development</li>
              <li>Web Application Development</li>
              <li>Software Development</li>
              <li>SAAS Platform</li>
              <li>Enterprise Software Development</li>
              <li>Chatbot Platform</li>
              <li>Custom Chatbot Development</li>
            </ul>
          </div>
        ) : null}

       </div>

          <div className="form-column">
            <label>UPLOAD SUPPORTING DOCUMENTS*:</label>
            <input type="file" name="supportingDocuments" onChange={this.handleFileChange} />
            <a href="#" onClick={() => this.showPopUp('KNOW More')}> (Know More)</a>
          </div>

          {this.state.showPopUp && (
            <div className="popup">
              <button onClick={this.closePopUp}>Close</button>
            </div>
          )}

          <div className="form-column">
            <label>RESOLVE THE CAPTCHA*:</label>
            <input type="text" name="captcha" value={this.state.captcha} onChange={this.handleInputChange} />
          </div>

          <button type="submit">Submit</button>
        </form>

        <p className="aa">{message}</p>
      </div>
    );
  }
}

export default RegistrationForm;
