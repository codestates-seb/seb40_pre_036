import React from 'react';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const MySwal = withReactContent(Swal);

function Alert(icon, content) {
  // 이렇게 들어와야 할까여?
  MySwal.fire({ icon, text: content, padding: '20px' });

  return <button type="button">클릭!</button>; // onClick={handleButtonClick}
}

export default Alert;
