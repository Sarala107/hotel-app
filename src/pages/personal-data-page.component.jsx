import React, { useState } from "react";
import { IconImageEdit } from "../components/icon.component";
import PageTitleComponent from "../components/page-title.component";

const PersonalDataPageComponent = () => {
  const [formValues, setFormValues] = useState({
    name: "Hello Worlds",
    email: "something@abc.com",
    number: "9876543210",
    DOB: "20 Jan 1990",
    address: "Ranipokhari, Kathmandu, Bagmati",
    city: "Kathmandu",
    zipCode: "114400",
  });

  const image =
    "https://images.pexels.com/photos/5333102/pexels-photo-5333102.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormValues({ ...formValues, [name]: value });
  };

  return (
    <div className="presonal-data-page">
      <PageTitleComponent title="Personal Data" />

      <section>
        <div className="wrapper">
          <div className="profile-pic">
            <div className="image">
              <img src={image} alt="" />
              <div className="image-edit">
                <IconImageEdit />
              </div>
            </div>
          </div>

          <div className="profile-info-edit">
            <div className="input-group">
              <label htmlFor="name">Your Name</label>
              <input
                type="text"
                name="name"
                id="name"
                onChange={handleChange}
                value={formValues.name}
              />
            </div>

            <div className="input-group">
              <label htmlFor="email">E-mail</label>
              <input
                type="email"
                name="email"
                id="email"
                onChange={handleChange}
                value={formValues.email}
              />
            </div>

            <div className="input-group">
              <label htmlFor="number">Mobile Number</label>
              <input
                type="number"
                name="number"
                id="number"
                onChange={handleChange}
                value={formValues.number}
              />
            </div>

            <div className="input-group">
              <label htmlFor="DOB">Date of birth</label>
              <input
                type="text"
                name="DOB"
                id="DOB"
                onChange={handleChange}
                value={formValues.DOB}
              />
            </div>

            <div className="input-group">
              <label htmlFor="Address">Address</label>
              <input
                type="text"
                name="Address"
                id="Address"
                onChange={handleChange}
                value={formValues.address}
              />
            </div>

            <div className="input-group">
              <label htmlFor="City">City</label>
              <input
                type="text"
                name="City"
                id="City"
                onChange={handleChange}
                value={formValues.city}
              />
            </div>

            <div className="input-group">
              <label htmlFor="Zipcode">Zipcode</label>
              <input
                type="number"
                name="Zipcode"
                id="Zipcode"
                onChange={handleChange}
                value={formValues.zipCode}
              />
            </div>

            <div className="submit">
              <button>Update</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PersonalDataPageComponent;
