import React, { useState } from 'react';

function Uploader( {setFile}) {

  const handleFileUpload = (event) => {
    const uploadedFile = event.target.files[0];
    const fileExtension = uploadedFile.name.split('.').pop();

    if (fileExtension === 'json') {

      const fileReader = new FileReader();
      fileReader.onload = event => {
        const resultData = JSON.parse(event.target.result);
        setFile({
          "header": uploadedFile,
          "data": resultData
        });
      };
      fileReader.readAsText(uploadedFile);
    } else {
      console.error('Invalid file type. Please upload a .json file.');
    }
  };

  return (
    <section class="py-5 text-center container">
    <div class="row py-lg-5">
      <div class="col-lg-6 col-md-8 mx-auto">
        <h1 class="fw-light">SBOM Viewer</h1>
        <p class="lead text-body-secondary">View your favoriate and most hated SBOMS using the upload feature below. This tool let's you see all the contents baked into the JSON in a friendly format.</p>
        <input class="form-control" type="file" id="formFile" accept=".json" onChange={handleFileUpload}></input>
      </div>
    </div>
  </section>
  );
}

export default Uploader;
