import React, { useState, useEffect, useRef } from "react";
import axios from "axios";

function DropFile() {
  const refFileInput = useRef(null);
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);
  const [isDraggingOver, setIsDraggingOver] = useState(false);

  const handleFiles = (files) => {
    // ([...files]).forEach(uploadFile)
    [...files].forEach((file) => {
      // Not supported in Safari for iOS.
      const name = file.name ? file.name : "NOT SUPPORTED";
      // Not supported in Firefox for Android or Opera for Android.
      const type = file.type ? file.type : "NOT SUPPORTED";
      // Unknown cross-browser support.
      const size = file.size ? file.size : "NOT SUPPORTED";
      console.log({ file, name, type, size });

      const reader = new FileReader();
      reader.addEventListener("load", (event) => {
        console.log(event.target.result);
      });
      reader.readAsText(file);
      //reader.readAsDataURL(file);

      setFile(file);
    });
  };

  useEffect(() => {
    const dropArea = document.getElementById("drop-area");

    const preventDefault = (event) => {
      event.stopPropagation();
      event.preventDefault();
    };

    const dragenterListener = (event) => {
      setError(null);

      preventDefault(event);
      setIsDraggingOver(true);
      //console.log("dragenterListener");
    };

    const dragleaveListener = (event) => {
      preventDefault(event);
      setIsDraggingOver(false);
      //console.log("dragleaveListener");
    };

    const dragoverListener = (event) => {
      preventDefault(event);
      event.dataTransfer.dropEffect = "copy";
      setIsDraggingOver(true);
      // console.log("dragoverListener");
    };

    const dropListener = (event) => {
      preventDefault(event);
      const fileList = event.dataTransfer.files;
      setIsDraggingOver(false);
      //console.log(fileList);

      if (fileList.length > 1) {
        setError("Only one file can be uploaded at one time");
      } else {
        handleFiles(fileList);
      }
    };

    dropArea.addEventListener("dragenter", dragenterListener);
    dropArea.addEventListener("dragleave", dragleaveListener);
    dropArea.addEventListener("dragover", dragoverListener);
    dropArea.addEventListener("drop", dropListener);

    return () => {
      dropArea.removeEventListener("dragenter", dragenterListener);
      dropArea.removeEventListener("dragleave", dragleaveListener);
      dropArea.removeEventListener("dragover", dragoverListener);
      dropArea.removeEventListener("drop", dropListener);
    };
  }, []);

  const UPLOAD_ENDPOINT =
    "http://localhost/react-php-file-upload/backend/upload.php";

  const handleSubmit = async (e) => {
    e.preventDefault();
    //if await is removed, console log will be called before the uploadFile() is executed completely.
    //since the await is added, this will pause here then console log will be called
    let res = await uploadFile(file);
    console.log(res.data);
  };

  const uploadFile = async (file) => {
    const formData = new FormData();
    formData.append("avatar", file);

    return await axios.post(UPLOAD_ENDPOINT, formData, {
      headers: {
        "content-type": "multipart/form-data"
      }
    });
  };

  const handleOnChange = (e) => {
    console.log(e.target.files[0]);
    setFile(e.target.files[0]);
    setError(null);
  };

  //const invokeFileSelector = () => {};

  return (
    <form onSubmit={handleSubmit}>
      <h1>React File Upload</h1>
      <div
        id="drop-area"
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#f2f2f8",
          border: "dashed 1px gray",
          borderColor: isDraggingOver ? "purple" : "gray",
          borderRadius: "4px",
          padding: "20px",
          marginBottom: "20px"
        }}
      >
        <div>Drag and drop files here</div>
        <div>OR</div>
        <div>
          <input
            ref={refFileInput}
            name="file"
            type="file"
            className="file-input"
            onChange={handleOnChange}
          />
          <label
            for="file"
            onClick={() => {
              setError(null);
              refFileInput.current.click();
            }}
          >
            select a file
          </label>
          {/* <button
          onClick={(e) => {
            refFileInput.current.click();
            e.preventDefault();
          }}
        >
          Select a file
        </button> */}
        </div>
        <div>{file ? file.name : "No file selected"}</div>
        <div>{error ? error : ""}&nbsp;</div>
      </div>
      <button type="submit">Upload File</button>
    </form>
  );
}

export default DropFile;

//Modify the UPLOAD_ENDPOINT with the API URL.
//The uploaded file can be retreived via $_FILES['avatar'] on the server-side(PHP).
