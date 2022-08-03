import React, { useEffect, useState } from "react";
// import axios from "axios";
function Form() {

  // Declare a new state for toggle button
  const [fanpage, setFanpage] = useState(false);
  const [talent, setTalent] = useState(true);
  const [activeTab, setActiveTab] = useState("fanpage");

  // Set Employee Data in React State Hook
  const [employeeData, setEmployeeData] = useState({
    first_name: "",
    last_name: "",
    username: "",
    email: "",
    password: "",
    error: {
      first_name: "",
      last_name: "",
      username: "",
      email: "",
      password: "",
    },
  });

  const handleChangeToggle = () => {
    setFanpage(talent);
    setTalent(fanpage);
  };
  const handleChange = (e) => {
    console.log(e.target.value);
    setEmployeeData({
      ...employeeData,
      first_name: e.target.value,
    });
  };
  // Declare a Main Function to handle all the form submit
  const handleSubmit = (e) => {
    e.preventDefault();

      // by Default error is "False"
    let isError = false;
      // Declare a variable to store all Employee Data for Temperorry Storage
    let tempFormData = { ...employeeData };

    // Define a Blank Error Condation to check if any error is there
    if (tempFormData.first_name === "") {
      tempFormData.error.first_name = "Firstname is required*";
      isError = true;
    }
    if (tempFormData.last_name === "") {
      tempFormData.error.last_name = "Lastname is required*";
      isError = true;
    }
    if (tempFormData.username === "") {
      tempFormData.error.username = "Username is required*";
      isError = true;
    }
    if (tempFormData.email === "") {
      tempFormData.error.email = "Email is required*";
      isError = true;
    }
    if (tempFormData.password === "") {
      tempFormData.error.password = "Password is required*";
      isError = true;
    }
    // If there all feilds are filled then set the error to false and Post the data.
    if (isError === false) {
      // Usion Axios to Post the Data
      var axios = require("axios");

      var data = JSON.stringify({
        username: employeeData.username,
        first_name: employeeData.first_name,
        last_name: employeeData.last_name,
        email: employeeData.email,
        password: employeeData.password,
      });
      
        var config = {
          method: "post",
          url: "http://wren.in:3200/api/sign-up/talent",
          headers: {
            "Content-Type": "application/json",
          },
          data: data,
        };
      
        // Set a condition to check if the FanPage or Talent is selected in the Toggle Button
      if (activeTab == "fanpage") {
        config.url = "http://wren.in:3200/api/sign-up/fan";
      } else {
        config.url = "http://wren.in:3200/api/sign-up/talent";
      }
      
      axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });
      alert("Data Add SuccessFully")
    }
    
    setEmployeeData(tempFormData);
    
  };

  const clearData = () => {
    setEmployeeData({
      first_name: "",
      last_name: "",
      username: "",
      email: "",
      password: "",
      error: {
        first_name: "",
        last_name: "",
        username: "",
        email: "",
        password: "",
      },
    });
  };
  useEffect(() => {}, [employeeData.error]);

  const setActiveTabName = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <>
      <div className="container  text-center">
        <div className="row">
          <div className="col-md-6 m-auto registration-form p-5">
            <div>
              <div class="btn-group btn-group-toggle " data-toggle="buttons">
                <div
                  className={activeTab == "fanpage" ? "tab active" : "tab"}
                  onClick={() => setActiveTabName("fanpage")}
                >
                  Fan Signup
                </div>
                <div
                  className={activeTab == "talentpage" ? "tab active" : "tab"}
                  onClick={() => setActiveTabName("talentpage")}
                >
                  Talent Signup
                </div>
              </div>
              <div className="form-title">
                {activeTab == "fanpage"
                  ? "Create Your Fan Account"
                  : "Create Your Talent Account"}
              </div>
              <form>
                <div className="text-danger text-start">
                  {employeeData?.error && employeeData?.error?.first_name && (
                    <div>{employeeData?.error?.first_name}</div>
                  )}
                </div>
                <div class="form-group">
                  <input
                    type="text"
                    class="form-control item"
                    id="username"
                    value={employeeData?.first_name}
                    placeholder="Firstname"
                    onChange={(e) =>
                      setEmployeeData({
                        ...employeeData,
                        first_name: e.target.value,
                      })
                    }
                  />
                </div>

                <div className="text-danger text-start">
                  {employeeData?.error && employeeData?.error?.first_name && (
                    <div>{employeeData?.error?.last_name}</div>
                  )}
                </div>
                <div class="form-group">
                  <input
                    type="text"
                    class="form-control item"
                    id="last_name"
                    placeholder="Lastname"
                    onChange={(e) =>
                      setEmployeeData({
                        ...employeeData,
                        last_name: e.target.value,
                      })
                    }
                  />
                </div>
                <div className="text-danger text-start">
                  {employeeData?.error && employeeData?.error?.first_name && (
                    <div>{employeeData?.error?.username}</div>
                  )}
                </div>

                <div class="form-group">
                  <input
                    type="text"
                    class="form-control item"
                    id="username"
                    placeholder="Username"
                    onChange={(e) =>
                      setEmployeeData({
                        ...employeeData,
                        username: e.target.value,
                      })
                    }
                  />
                </div>
                <div className="text-danger text-start">
                  {employeeData?.error && employeeData?.error?.first_name && (
                    <div>{employeeData?.error?.email}</div>
                  )}
                </div>
                <div class="form-group">
                  <input
                    type="email"
                    class="form-control item"
                    id="email"
                    placeholder="Email"
                    onChange={(e) =>
                      setEmployeeData({
                        ...employeeData,
                        email: e.target.value,
                      })
                    }
                  />
                </div>
                <div className="text-danger text-start">
                  {employeeData?.error && employeeData?.error?.first_name && (
                    <div>{employeeData?.error?.password}</div>
                  )}
                </div>
                <div class="form-group">
                  <input
                    type="password"
                    class="form-control item"
                    id="password"
                    placeholder="Password"
                    onChange={(e) =>
                      setEmployeeData({
                        ...employeeData,
                        password: e.target.value,
                      })
                    }
                  />
                </div>

                <div class="tacbox">
                  <input id="checkbox" type="checkbox" className="checkbox" />
                  <label for="checkbox">
                    I agree to these <a href="#" className="Terms">Terms and Conditions</a>.
                  </label>
                </div>
                <div class="form-group" onClick={handleSubmit}>
                  <button type="button" class="btn btn-block create-account">
                    Signup
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <script
        type="text/javascript"
        src="https://code.jquery.com/jquery-3.2.1.min.js"
      ></script>
      <script
        type="text/javascript"
        src="https://cdnjs.cloudflare.com/ajax/libs/jquery.mask/1.14.15/jquery.mask.min.js"
      ></script>
      <script src="assets/js/script.js"></script>
    </>
  );
}
export default Form;
