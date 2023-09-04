import Swal from "sweetalert2";

const alerte = (type, message) => {
  Swal.fire({
    icon: type,
    width: 500,
    text: message,
    confirmButtonColor: "#4CAF50",
  });
};

export default alerte;
