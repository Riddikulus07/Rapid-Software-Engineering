/* eslint-disable no-unused-vars */
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Spinner } from "react-bootstrap";
import {default as EntityDetailsClient} from "../Model/ModelDetailsClient" 
function Create() {
  var [entity, setEntity] = useState(new EntityDetailsClient());
  const showSuccess = () =>
    toast.success(`Successfully created.`);
  const showFailure = () =>
    toast.error("Couldn't execute the create operation");
  const handleEntityChange = (event) => {
    const { name, value } = event.target;
    setEntity((prev) => (
      {
        ...prev,
        [name] : value
      }
    ));
  };

  const handleNewEntity = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "http://localhost:8100/data-provider/v1/%s",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(entity),
        }
      );
      console.log(response);
      if (response.status == 200) {
        console.log("Object posted successfully");
        showSuccess();
      } else {
        console.log("Object posting failed");
        showFailure();
      }
    } catch (error) {
      console.error("Error occurred while posting object:", error);
      showFailure();
    }
  };

  return (
    <div className="d-flex justify-content-center  ">
      <div className="card cardview text-center">
        <div className="card-body">
          <h3> Add a new %s </h3>
          <button
            className="btn btn-primary btn-dark"
            type="submit"
            onClick={handleNewEntity}
          >
            {" "}
             Submit {" "}
          </button>
        </div>
      </div>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  );
}
export default Create;
