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
    <div>
      <input type="file" accept=".json" onChange={handleFileUpload} />]
    </div>
  );
}

//{file && <SBOM sbom={data} />}

export default Home;
