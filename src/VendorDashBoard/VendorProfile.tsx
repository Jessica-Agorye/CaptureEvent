import { useState } from "react";

function VendorProfile() {
  const [vendor, setVendor] = useState({
    name: "",
    category: "",
    location: "",
    phone: "",
    description: "",
  });

  const handleChange = (e: { target: { name: string; value: string } }) => {
    setVendor({
      ...vendor,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    console.log("Updated Vendor:", vendor);

    // here you would send to API
  };

  return (
    <div>
      <h1>Vendor Profile</h1>

      <form onSubmit={handleSubmit}>
        <input
          name="name"
          placeholder="Business Name"
          value={vendor.name}
          onChange={handleChange}
        />

        <input
          name="category"
          placeholder="Category"
          value={vendor.category}
          onChange={handleChange}
        />

        <input
          name="location"
          placeholder="Location"
          value={vendor.location}
          onChange={handleChange}
        />

        <input
          name="phone"
          placeholder="Phone"
          value={vendor.phone}
          onChange={handleChange}
        />

        <textarea
          name="description"
          placeholder="Business Description"
          value={vendor.description}
          onChange={handleChange}
        />

        <button type="submit">Save Changes</button>
      </form>
    </div>
  );
}

export default VendorProfile;
