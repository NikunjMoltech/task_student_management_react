import React, { useEffect, useState } from "react";
import { Button, Card, Modal } from "react-bootstrap";
// import { studentsData } from "../Data/studenDatails";
import cloneDeep from "lodash/cloneDeep";
import axios from "axios";
import { APIVariables } from "../Data/APIEndPoints";
const Students = ({ login }) => {
  const [showModal, setShowModal] = useState(false);

  const [selectedStudent, setSelectedStudent] = useState(null);

  const [students, setStudent] = useState([]);

  const handleShowModal = (student) => {
    setSelectedStudent(student);
    setShowModal(true);
  };

  const handleSaveChange = () => {
    // const edited = cloneDeep(
    //   students.map((obj) => {
    //     return obj.id === selectedStudent.id
    //       ? { ...obj, ...selectedStudent }
    //       : obj;
    //   })
    // );

    axios
      .post(
        APIVariables.API_URL + "Registration/updateStudent",
        selectedStudent
      )
      .then((result) => {
        if (result.status === 200) {
          refreshList();
          return window.alert("Update Done");
        }
      })
      .catch((error) => {
        alert(error);
      });

    handleCloseModal();
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedStudent(null);
  };

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    let details = cloneDeep(selectedStudent);
    details[name] = value;
    setSelectedStudent({ ...details });
  };

  const countries = ["India", "UK", "USA", "Australia"];

  const countriesOption = countries.map((name, key) => (
    <option value={name} key={key}>
      {name}
    </option>
  ));

  const refreshList = () => {
    axios
      .get(APIVariables.API_URL + "Registration/getStudents")
      .then((data) => {
        setStudent(data.data);
      });
  };

  useEffect(() => {
    refreshList();
  }, []);

  return (
    <>
      {login ? (
        <div>
          {students.map((student) => (
            <Card key={student.id}>
              <Card.Body>
                <Card.Title>{student.name}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  {student.email}
                </Card.Subtitle>
                <Card.Text>
                  <p>Address: {student.address}</p>
                  <p>Gender: {student.gender}</p>
                  <p>Country: {student.country}</p>
                  <Button
                    variant="primary"
                    onClick={() => handleShowModal(student)}
                  >
                    Edit Details
                  </Button>
                </Card.Text>
              </Card.Body>
            </Card>
          ))}
          <Modal show={showModal} onHide={handleCloseModal}>
            <Modal.Header closeButton>
              <Modal.Title>Edit Student Details</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <p>
                Name:
                <input
                  type="text"
                  name="name"
                  value={selectedStudent?.name}
                  onChange={(e) => handleChange(e)}
                />
              </p>
              <p>
                Email:
                <input
                  type="text"
                  name="email"
                  value={selectedStudent?.email}
                  onChange={(e) => handleChange(e)}
                />
              </p>
              <p>
                Address:
                <input
                  type="text"
                  name="address"
                  value={selectedStudent?.address}
                  onChange={(e) => handleChange(e)}
                />
              </p>
              <p>
                Gender:
                <br />
                <div
                  className="form-check form-check-inline"
                  onChange={(e) => handleChange(e)}
                >
                  <input
                    type="radio"
                    value="male"
                    checked={selectedStudent?.gender === "male"}
                    name="gender"
                  />
                  Male
                  <input
                    type="radio"
                    value="female"
                    checked={selectedStudent?.gender === "female"}
                    name="gender"
                  />
                  Female
                </div>
              </p>
              <p>
                Country:
                <select
                  className="form-select"
                  id="country"
                  name="country"
                  value={selectedStudent?.country}
                  onChange={(e) => handleChange(e)}
                >
                  {countriesOption}
                </select>
              </p>
              <p>Edit the details here...</p>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleCloseModal}>
                Close
              </Button>
              <Button variant="primary" onClick={handleSaveChange}>
                Save Changes
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      ) : (
        <h1 className="container">Login Required</h1>
      )}
    </>
  );
  // return (
  //   <div>
  //     {registerData.map((obj) => {
  //       return (
  //         <Card style={{ width: "18rem" }}>
  //           <Card.Img variant="top" src="https://picsum.photos/200/100" />
  //           <Card.Body>
  //             <Card.Title>{obj.name}</Card.Title>
  //             <Card.Subtitle className="mb-2 text-muted">
  //               {obj.email}
  //             </Card.Subtitle>
  //             <Card.Text>
  //               <p>Address: {obj.address}</p>
  //               <p>Gender: {obj.gender}</p>
  //               <p>Country: {obj.country}</p>
  //               <p>
  //                 Hobbies:
  //                 {Object.keys(obj.hobbies).filter((current) => {
  //                   return obj.hobbies[current];
  //                 })}
  //               </p>
  //             </Card.Text>
  //           </Card.Body>
  //         </Card>
  //       );
  //     })}
  //   </div>
  // );
};

export default Students;
