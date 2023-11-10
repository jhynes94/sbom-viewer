import React from 'react';

const SPDXPackage = ({ data }) => {
  return (
    <div>
      <h2>{data.name}</h2>
      <p>SPDX ID: {data.SPDXID}</p>
      <p>Version: {data.versionInfo}</p>
      <p>Download Location: {data.downloadLocation}</p>
      <p>Checksum: {data.checksums[0].checksumValue}</p>
      <p>Homepage: {data.homepage}</p>
      <p>License: {data.licenseDeclared}</p>
      <p>External Reference: {data.externalRefs[0].referenceLocator}</p>
      <p>Supplier: {data.supplier}</p>
      <p>Originator: {data.originator}</p>
      <p>Primary Package Purpose: {data.primaryPackagePurpose}</p>
      <p>Files Analyzed: {data.filesAnalyzed ? 'Yes' : 'No'}</p>
    </div>
  );
};

export default SPDXPackage;
