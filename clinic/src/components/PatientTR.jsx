import { Link } from "react-router-dom";
function patientTR({ name, age, phone, id }) {
  return (
    <tr>
      <td>{id}</td>
      <td>{name}</td>
      <td>{phone}</td>
      <td>{age}</td>
      <td>
        <Link to={`/${id}`}>
          <button>View</button>
        </Link>
      </td>
    </tr>
  );
}

export default patientTR;
