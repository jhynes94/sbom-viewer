import Card from 'react-bootstrap/Card';

function CDX({ data }) {
  return (
    <div>
      {data.components.map((item, index) => (
        <Card key={index} style={{ width: '100%' }}>
          <Card.Body>
            <Card.Title>{item.name}</Card.Title>
            <Card.Subtitle>{item.type}</Card.Subtitle>
            <Card.Text>Version: {item.version}</Card.Text>
            <Card.Text>Public URL: {item.purl}</Card.Text>
            <Card.Text>Public URL: {item.purl}</Card.Text>

            <Card.Text>
              Licenses:
              <ul>
              {item.licenses.map((license, index) => (
                <li key={index}>{license.license.id}</li>
              ))}
              </ul>
            </Card.Text>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}

export default CDX;
