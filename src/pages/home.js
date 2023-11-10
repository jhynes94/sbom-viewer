import React, { useState } from 'react';
import ViewerSBOM from '../components/ViewerSBOM';

function Home() {
  const [file, setFile] = useState(null);

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
      <h1>SBOM Viewer</h1>
      <p>Based on https://app.soos.io/research/packages/CFamily/-/libtiff/</p>
      <input type="file" accept=".json" onChange={handleFileUpload} />
      {file && (
        <div>
          <h2>File Details:</h2>
          <p>Name: {file.name}</p>
          <p>Type: {file.type}</p>
          <p>Size: {file.size} bytes</p>
          <ViewerSBOM file={file} />
        </div>
      )}

    </div>
  );
}

//{file && <SBOM sbom={data} />}

export default Home;
