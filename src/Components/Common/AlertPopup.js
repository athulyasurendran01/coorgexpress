import Alert from 'react-bootstrap/Alert';

function AlertPopup({ message, type }) {
  return (
    <>
      <Alert key={type} variant={type}>
        {message}
      </Alert>
    </>
  );
}

export default AlertPopup;