import Alert from 'react-bootstrap/Alert';

function Alerttt() {
  return (
    <>
      {[
        'success',
      ].map((variant) => (
        <Alert key={variant} variant={variant}>
          Buy React Books
        </Alert>
      ))}
    </>
  );
}

export default Alerttt;