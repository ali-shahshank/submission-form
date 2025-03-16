import React from "react";
import { useState } from "react";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "bootstrap-icons/font/bootstrap-icons.css";
function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [gender, setGender] = useState("");
  const [subjects, setSubjects] = useState({
    english: true,
    math: false,
    physics: false,
  });

  const [resume, setResume] = useState(null);
  const [url, setUrl] = useState(null);
  const [selectOption, setSelectOption] = useState("");
  const [about, setAbout] = useState("");

  const handleSubjectChange = (sub) => {
    setSubjects((prev) => ({
      ...prev,
      [sub]: !prev[sub],
    }));
  };

  const handleReset = () => {
    e.preventDefault();
    setFirstName("");
    setLastName("");
    setEmail("");
    setContact("");
    setGender("male");
    setSubjects({
      english: true,
      maths: false,
      physics: false,
    });
    setResume("");
    setUrl("");
    setSelectedOption("");
    setAbout("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(
      firstName,
      lastName,
      email,
      contact,
      gender,
      selectOption,
      subjects,
      resume,
      url,
      about
    );
  };

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-12 col-md-12 p-4">
            <h3 className="fs-3 fw-light">Form Submission</h3>
            <p>This form is created using React.</p>
          </div>
          <div className="col-sm-12 col-md-6 p-2 p-md-4 ">
            <form className="p-4 bg-light rounded-4">
              <div className="container p-2">
                <label htmlFor="firstname" className="pb-2">
                  First Name
                </label>
                <input
                  type="text"
                  name="firstname"
                  id="firstname"
                  value={firstName}
                  className="form-control form-control-lg"
                  required
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </div>
              <div className="container p-2">
                <label htmlFor="lastname" className="pb-2">
                  Last Name
                </label>
                <input
                  type="text"
                  name="lastname"
                  id="lastname"
                  value={lastName}
                  className="form-control form-control-lg"
                  required
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>
              <div className="container p-2">
                <label htmlFor="email" className="pb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="form-control form-control-lg"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="container p-2">
                <label htmlFor="tel" className="pb-2">
                  Contact Number
                </label>
                <input
                  type="tel"
                  name="contact"
                  value={contact}
                  onChange={(e) => setContact(e.target.value)}
                  id="contact"
                  className="form-control form-control-lg"
                  required
                />
              </div>
              <div className="container p-2">
                <label htmlFor="gender" className="pb-2">
                  Gender
                </label>{" "}
                <br />
                <input
                  type="radio"
                  name="gender"
                  value="male"
                  id="male"
                  className="form-check-input mx-2"
                  checked={gender == "male"}
                  onChange={(e) => setGender(e.target.value)}
                />{" "}
                Male{" "}
                <input
                  type="radio"
                  id="female"
                  name="gender"
                  value="female"
                  className="form-check-input mx-2"
                  checked={gender == "female"}
                  onChange={(e) => setGender(e.target.value)}
                />
                Female
              </div>
              <div className="container p-2">
                <label htmlFor="lang" className="pb-2">
                  Your Best Subject
                </label>{" "}
                <br />
                <input
                  type="checkbox"
                  className="form-check-input mx-2"
                  checked={subjects.english === true}
                  onChange={(e) => handleSubjectChange("english")}
                />
                {"English "}
                <input
                  type="checkbox"
                  className="form-check-input mx-2"
                  checked={subjects.math === true}
                  onChange={(e) => handleSubjectChange("math")}
                />
                {"Math "}
                <input
                  type="checkbox"
                  className="form-check-input mx-2"
                  checked={subjects.physics == true}
                  onChange={(e) => handleSubjectChange("physics")}
                />
                {"Physics "}
              </div>
              <div className="container p-2">
                <label htmlFor="fileUpload" className="pb-2">
                  Upload Resume
                </label>
                <input
                  type="file"
                  name="file"
                  id="file"
                  placeholder="Enter Upload File"
                  className="form-control w-50"
                  onChange={(e) => setResume(e.target.files[0])}
                />
              </div>
              <div className="container p-2">
                <label htmlFor="url" className="pb-2">
                  Enter URL
                </label>
                <input
                  type="url"
                  name="url"
                  id="url"
                  className="form-control form-control-lg"
                  onChange={(e) => setUrl(e.target.value)}
                  placeholder="Enter url"
                  required
                />
              </div>
              <div className="container p-2">
                <label htmlFor="select" className="pb-2">
                  Selection
                </label>
                <select
                  name="select"
                  id="select"
                  value={selectOption}
                  onChange={(e) => setSelectOption(e.target.value)}
                  className="form-select form-select-lg"
                >
                  <option value="" disabled>
                    Please make a selection
                  </option>
                  <optgroup label="Beginers">
                    <option value="1">HTML</option>
                    <option value="2">CSS</option>
                    <option value="3">JavaScript</option>
                  </optgroup>
                  <optgroup label="Advance">
                    <option value="4">Next.js</option>
                    <option value="5">React</option>
                    <option value="6">Node</option>
                    <option value="7">Express</option>
                    <option value="8">MongoDB</option>
                  </optgroup>
                </select>
              </div>
              <div className="container p-2">
                <label htmlFor="about" className="pb-2">
                  About
                </label>{" "}
                <br />
                <textarea
                  name="about"
                  id="about"
                  className="form-control"
                  rows={10}
                  cols={30}
                  value={about}
                  onChange={(e) => setAbout(e.target.value)}
                  placeholder="About Yourself"
                  required
                ></textarea>
              </div>
              <div className="container p-2 py-4  ">
                <button
                  className="btn btn-lg btn-warning px-4 me-4"
                  type="reset"
                  onClick={() => handleReset()}
                >
                  Reset Form
                </button>
                <button
                  className="btn btn-success btn-lg px-4"
                  type="submit"
                  onClick={() => handleSubmit()}
                >
                  Submit Form
                </button>
              </div>
            </form>
          </div>
          <div className="col-sm-12 col-md-6 p-2 p-md-4 "></div>
        </div>
      </div>
    </>
  );
}

export default App;
