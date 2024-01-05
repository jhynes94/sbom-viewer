import React from 'react';

function spdx({ data }) {
    return (
        <div>
            <p>SPDX ID: {data.SPDXID}</p>
            <p>spdxVersion: {data.spdxVersion}</p>
            <p>dataLicense: {data.dataLicense}</p>
            <p>name: {data.name}</p>
            <p>documentNamespace: {data.documentNamespace}</p>
            <p>comment: {data.comment}</p>
            <p>creationInfo:</p>
            <ul>
                <li>created: {data.creationInfo.created}</li>
                <li>creators:</li>
                <ul>
                    {data.creationInfo.creators.map((creator, index) => (
                        <li key={index}>{creator}</li>
                    ))}
                </ul>
                <li>comment: {data.creationInfo.comment}</li>
                <li>licenseListVersion: {data.creationInfo.licenseListVersion}</li>
            </ul>
        </div>
    );
}

export default spdx;
