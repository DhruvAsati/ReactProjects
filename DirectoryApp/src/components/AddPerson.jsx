import React, { useState } from "react";

const AddPerson = () => {
  const [activeScreen, setActiveScreen] = useState("addPerson"); // Switch between 'addPerson' and 'retrieve'
  const [showForm, setShowForm] = useState(false); // Show form when 'Add' button is clicked
  const [people, setPeople] = useState([]); // Store people data
  const [searchTerm, setSearchTerm] = useState(""); // For search functionality
  const [newPerson, setNewPerson] = useState({
    name: "",
    dob: "",
    aadhar: "",
    mobile: "",
    age: "",
  });

  // Switch between Add and Retrieve screens
  const handleScreenSwitch = (screen) => {
    setActiveScreen(screen);
    setShowForm(false); // Reset form view when switching screens
  };

  // Modify handleInputChange to include validation
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    let updatedValue = value;

    if (name === "aadhar") {
      updatedValue = value.replace(/\D/g, "").slice(0, 12);
    } else if (name === "mobile") {
      updatedValue = value.replace(/\D/g, "").slice(0, 10);
    } else if (name === "age") {
      updatedValue = value.replace(/\D/g, "");
    }

    setNewPerson({
      ...newPerson,
      [name]: updatedValue,
    });
  };

  // Add new person to the list
  const handleAddPerson = () => {
    if (
      newPerson.name &&
      newPerson.dob &&
      newPerson.aadhar.length === 13 &&
      newPerson.mobile.length === 10 &&
      newPerson.age
    ) {
      setPeople([...people, newPerson]);
      setNewPerson({ name: "", dob: "", aadhar: "", mobile: "", age: "" }); // Reset form
      setShowForm(false); // Hide form after adding
    }
  };

  // Handle deleting a person
  const handleDeletePerson = (index) => {
    const updatedPeople = people.filter((_, i) => i !== index);
    setPeople(updatedPeople);
  };

  // Filter people based on search term
  const filteredPeople = people.filter(
    (person) =>
      person.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      person.mobile.includes(searchTerm)
  );

  return (
    <div>
      <h1>Dhruv Asati Directory App</h1>

      {/* Buttons to switch screens */}
      <div>
        <button onClick={() => handleScreenSwitch("addPerson")}>
          Add New Person
        </button>
        <button onClick={() => handleScreenSwitch("retrieve")}>
          Retrieve Information
        </button>
      </div>

      {activeScreen === "addPerson" && (
        <div>
          <h2>Add New Person</h2>
          {people.length > 0 ? (
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Date of Birth</th>
                  <th>Aadhar Number</th>
                  <th>Mobile Number</th>
                  <th>Age</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {people.map((person, index) => (
                  <tr key={index}>
                    <td>{person.name}</td>
                    <td>{person.dob}</td>
                    <td>{person.aadhar}</td>
                    <td>{person.mobile}</td>
                    <td>{person.age}</td>
                    <td>
                      <button onClick={() => handleDeletePerson(index)}>
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p>No data</p>
          )}

          {/* Add Button at the bottom */}
          <button
            onClick={() => setShowForm(true)}
            style={{ position: "fixed", bottom: 10, right: 10 }}
          >
            Add
          </button>

          {showForm && (
            <div
              style={{
                border: "2px solid blue",
                padding: "20px",
                marginTop: "20px",
              }}
            >
              <h3>Fill below form for New Entry</h3>
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={newPerson.name}
                onChange={handleInputChange}
                required
              />
              <input
                type="text"
                name="dob"
                placeholder="dd-mm-yyyy"
                value={newPerson.dob}
                onChange={handleInputChange}
                required
              />
              <input
                type="number"
                name="aadhar"
                placeholder="Aadhar number (12 digits)"
                value={newPerson.aadhar}
                onChange={handleInputChange}
                min="100000000000"
                max="999999999999"
                required
              />
              <input
                type="number"
                name="mobile"
                placeholder="Mobile number (10 digits)"
                value={newPerson.mobile}
                onChange={handleInputChange}
                min="1000000000"
                max="9999999999"
                required
              />
              <input
                type="number"
                name="age"
                placeholder="Age"
                value={newPerson.age}
                onChange={handleInputChange}
                min="0"
                required
              />
              <button onClick={handleAddPerson}>Save</button>
            </div>
          )}
        </div>
      )}

      {activeScreen === "retrieve" && (
        <div>
          <h2>Retrieve Information</h2>
          <input
            type="text"
            placeholder="Search by Name or Mobile"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          {filteredPeople.length > 0 ? (
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Date of Birth</th>
                  <th>Aadhar Number</th>
                  <th>Mobile Number</th>
                  <th>Age</th>
                </tr>
              </thead>
              <tbody>
                {filteredPeople.map((person, index) => (
                  <tr key={index}>
                    <td>{person.name}</td>
                    <td>{person.dob}</td>
                    <td>{person.aadhar}</td>
                    <td>{person.mobile}</td>
                    <td>{person.age}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p>No data found</p>
          )}
        </div>
      )}
    </div>
  );
};

export default AddPerson;
