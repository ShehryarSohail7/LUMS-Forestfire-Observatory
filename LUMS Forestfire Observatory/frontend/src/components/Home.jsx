

import React, { useState } from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { useNavigate } from 'react-router-dom';



const SidePanel = ({ handleOptionClick }) => {
  const optionStyle = {
    cursor: 'pointer',
    padding: '8px',
    marginBottom: '5px',
    borderRadius: '3px',
    backgroundColor: 'white',
    transition: 'background-color 0.3s ease',
  };


  const handleMouseOver = (event) => {
    event.target.style.backgroundColor = 'lightblue';
  };

  const handleMouseLeave = (event) => {
    event.target.style.backgroundColor = 'white';
  };

  return (
    <div className="side-panel" style={{ backgroundColor: 'lightgray', width: '200px', height: '180vh', padding: '20px' }}>
      <h4>Options</h4>
      <ul>
        <li
          style={optionStyle}
          onClick={() => handleOptionClick('home')}
          onMouseOver={handleMouseOver}
          onMouseLeave={handleMouseLeave}
        >
          Home
        </li>
        <li
          style={optionStyle}
          onClick={() => handleOptionClick('records')}
          onMouseOver={handleMouseOver}
          onMouseLeave={handleMouseLeave}
        >
          Previous Records
        </li>
        <li
          style={optionStyle}
          onClick={() => handleOptionClick('prediction')}
          onMouseOver={handleMouseOver}
          onMouseLeave={handleMouseLeave}
        >
          Model Details
        </li>
        <li
          style={optionStyle}
          onClick={() => handleOptionClick('signOut')}
          onMouseOver={handleMouseOver}
          onMouseLeave={handleMouseLeave}
        >
          Sign Out
        </li>
      </ul>
    </div>
  );
};


const Home = () => {
  const [showMap, setShowMap] = useState(true); // State to toggle map visibility
  const [showRecords, setShowRecords] = useState(false); // State to toggle map visibility
  const [showModel, setShowModel] = useState(false); // State to toggle theory of our model used
  const navigate = useNavigate();
  const handleOptionClick = (option) => {
    // Logic to handle option clicks
    if (option === 'prediction') {
      setShowMap(false); // Hide map when an option is clicked
      setShowRecords(false);
      // Additional logic for handling other options if needed
      setShowModel(true);
    }
    if (option === 'records' ) 
    {
      setShowMap(false); // Hide map when an option is clicked
      // Additional logic for handling other options if needed
      setShowModel(false);
      setShowRecords(true);
    }
    if (option === 'signOut') {
      // Handle sign out functionality here
      alert('You have been signed out successfully!');
      setShowRecords(false);
      setShowMap(false);
      navigate('/login');
    }
        if (option === 'home') {
      setShowMap(true); // Show map and related content for "Home" option
      setShowRecords(false);
      setShowModel(false);
    }
  };

  return (
    <div className="d-flex" style={{ backgroundImage: "linear-gradient(#00d5ff,#0095ff,rgba(93,0,255,.555))", height: '180vh' }}>

      {/* Side Panel */}
      <SidePanel handleOptionClick={handleOptionClick} />
      
      {/* Main Content */}
      <div >
      {showRecords && (
        <div className="records-div" style={{ backgroundColor: 'lightblue', padding: '20px', marginTop: '20px', marginLeft: '100px' }}>
          <h2 style={{ marginLeft: '400px'}}>Previous Records</h2>
          <h3 style={{ marginLeft: '440px', marginBottom: '50px' }}>(1980-2020)</h3>
          <div className="image-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '20px' }}>
            {[
              "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Burnout_ops_on_Mangum_Fire_McCall_Smokejumpers.jpg/300px-Burnout_ops_on_Mangum_Fire_McCall_Smokejumpers.jpg",
              "https://cdn.who.int/media/images/default-source/health-and-climate-change/fire-fighters-at-forest-fire-c-quarrie-photography.tmb-479v.jpg?sfvrsn=8b60f828_4%20479w",
              "https://magazine.columbia.edu/sites/default/files/styles/facebook_sharing_1200x630/public/2018-09/Wild-fires.jpg?itok=4COiRa2r",
              "https://media.istockphoto.com/id/1333314611/photo/massive-california-wild-fire-forcing-thousands-of-people-to-evacuate-their-homes-wildfires.jpg?s=612x612&w=0&k=20&c=BNKmR2g9sXsiXaSsGTtxOvdB_FV0N1bp0jQ1OpCMWMo=",
              "https://media.springernature.com/full/springer-static/image/art%3A10.1038%2Fs43017-021-00239-8/MediaObjects/43017_2021_239_Figa_HTML.png",
              "https://blogs.worldbank.org/sites/default/files/styles/hero/public/blogs-images/2020-06/wilfires_blog_shutterstock_292324574.jpg.webp?itok=En3zMFG7",
              "https://newjerseymonitor.com/wp-content/uploads/2023/09/Allen-Road-Wildfire-3.jpg",
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPCWds3lNNY9-3eQrYQr_pm4W2q1r0OniSdw&usqp=CAU",
              "https://www.theweek.in/content/dam/week/magazine/theweek/statescan/images/2022/6/24/56-A-forest-fire-in-Kumaon-division-of-Uttarakhand.jpg.transform/schema-16x9/image.jpg",
              "https://s.france24.com/media/display/9d0f58b6-06a9-11ed-bc6d-005056bf30b7/w:1280/p:1x1/180722-incendies-lande-m.jpg"
            ].map((imageUrl, index) => (
              <div key={index} style={{ textAlign: 'center' }}>
                <a href='https://cinea.ec.europa.eu/news-events/news/life-projects-aim-reduce-deadly-forest-fires-across-europe-2023-08-22_en' target='_blank' rel='noreferrer'>
                  <img
                    src={imageUrl}
                    alt={`Incident ${index + 1}`}
                    style={{ width: '200px', height: '150px' }}
                  />
                </a>
                <p>Incident {index + 1}</p>
              </div>
            ))}
          </div>
        </div>
      )}
        </div>

        <div >
      {showModel && (
        <div >
          <div
            style={{
              maxWidth: '100%',
              maxHeight: '400%',
              backgroundColor: 'white',
              padding: '20px',
              marginTop: '50px',
              marginLeft: '150px',
              borderRadius: '5px'
            }}
          >
            <div style={{ textAlign: 'center' }}>
              <h2>Model Details</h2>
              <br />
              <p>
              The model development commenced in Google Colab, leveraging its cloud-based infrastructure for computational tasks. The initial phase focused on data preprocessing, a critical step involving the normalization of input features. Normalization is a technique used to scale numerical values within a specific range, often between 0 and 1 or with a mean of 0 and a standard deviation of 1. This step is essential to ensure that the data is on a comparable scale, preventing certain features from dominating the learning process due to their larger magnitudes, and to avoid issues like exploding gradients during model training.

              The dataset used for this project comprised a total of 18545 records, meticulously segmented into distinct subsets. The largest subset was the training dataset, containing 14979 records. This subset was used to teach the model to recognize patterns and relationships within the data. Additionally, a validation dataset consisting of 1877 records was employed to fine-tune the model's hyperparameters and assess its performance during training, thereby preventing overfitting. The smallest subset, the test dataset, contained 1689 records and served as an entirely separate benchmark to evaluate the model's performance after training.

              During the training phase, the data was processed in mini-batches, with each batch containing 100 records. This approach facilitates more efficient model training, as the model updates its parameters based on smaller batches of data rather than the entire dataset at once.

              The architecture of the model was constructed based on insights and guidelines outlined in a specific paper. While the procedure mentions drawing inspiration from this paper, detailed specifics about the layers, types of activation functions used, the arrangement of neural network units, or any other architectural nuances were not explicitly articulated.

              Optimization of the model parameters was carried out using the Adam Optimizer, a popular optimization algorithm known for its effectiveness in training deep neural networks. The learning rate, a hyperparameter that controls the magnitude of parameter updates during training, was set at 0.0001. This choice of learning rate is often seen in scenarios where the model requires slow and steady adjustments to converge to an optimal solution.

              The training process spanned 1000 epochs, indicating that the entire dataset was used for training the model 1000 times. After each epoch, the model's performance was evaluated using the validation dataset, calculating the validation loss. The model exhibiting the lowest validation loss was preserved onto Google Drive, suggesting a form of early stopping to prevent the model from memorizing the training data too well and failing to generalize to new data
              </p>
              {/* Add more Lorem Ipsum content or actual theory content here */}
            </div>
          </div>
        </div>
      )}

        </div>
      <div className="main-content d-flex flex-column justify-content-center align-items-center text-center vh-100" style={{ marginLeft: '100px' }}>
        
        {showMap && (
          <>
            <h2 style={{ marginTop: '20px' }}>Select your forest</h2>
            <div className="search-container">
              <input
                type="text"
                placeholder="Search for a region..."
                style={{ width: '300px', padding: '8px', marginTop: '10px' }}
                // Handle search functionality here
              />
              <button style={{ marginLeft: '0px', padding: '8px' }}>Search</button>
            </div>
            {/* <div className="parent-container" style={{ padding: '20px' , marginTop: '10px' }}> */}
            <div className="map-wrapper" style={{ marginBottom: '-400px' }}>
            <div className="map-container" style={{ width: '750px', height: '550px', marginTop: '20px' }}>
              <MapContainer
                center={[51.505, -0.09]}
                zoom={13}
                style={{ height: '100%', width: '115%' }}
              >
                <TileLayer
                  attribution='Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {/* Add more layers or map components here if needed */}
              </MapContainer>
            </div>
            <h3 style={{ marginTop: '20px' }}>Model results</h3>
            {/* </div> */}
            <div className="image-grid" style={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}>
              <div style={{ textAlign: 'center', marginRight: '20px' }}>
                <img src="https://d112y698adiu2z.cloudfront.net/photos/production/software_photos/001/817/612/datas/gallery.jpg" alt="After one day" style={{ width: '200px', height: '150px' }} />
                <p>After one day</p>
              </div>
              <div style={{ textAlign: 'center', marginRight: '20px' }}>
                <img src="https://pubs.acs.org/cms/10.1021/es505846r/asset/images/es505846r.social.jpeg_v03" alt="After second day" style={{ width: '200px', height: '150px' }} />
                <p>After second day</p>
              </div>
              <div style={{ textAlign: 'center', marginRight: '20px' }}>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdR2N61IDJ8X7JQ5jCJ3Nq0_4H6fr5GVU5_g&usqp=CAU" alt="After third day" style={{ width: '200px', height: '150px' }} />
                <p>After third day</p>
              </div>
              <div style={{ textAlign: 'center' }}>
                <img src="https://i.ytimg.com/vi/e4BxT8S17RI/maxresdefault.jpg" alt="After fourth day" style={{ width: '200px', height: '150px' }} />
                <p>After fourth day</p>
              </div>
            </div>
          </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Home;

