import { FaEdit } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";
import EditTutorial from "./EditTutorial.jsx";
import { useState } from "react";
const TutorialList = ({ tutorials, deleteTutorial, editTutorial }) => {
  const [editedItem, setEditedItem] = useState("");
  return (
    <div className="container mt-4">
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">#id</th>
            <th scope="col">Title</th>
            <th scope="col">description</th>
            <th scope="col" className="text-center">
              Edit
            </th>
          </tr>
        </thead>
        <tbody>
          {tutorials?.map((item) => {
            const { id, title, description } = item;
            return (
              <tr key={id}>
                <th>{id}</th>
                <td>{title}</td>
                <td>{description}</td>
                <td className="text-center text-nowrap">
                  <FaEdit
                    size={20}
                    type="button"
                    className="me-2 text-warning cursor-pointer"
                    onClick={() => setEditedItem(item)}
                    // onClick={() => editTutorial(id, "asf", "asf")}
                    data-bs-toggle="modal"
                    data-bs-target="#edit-modal"
                  />
                  <AiFillDelete
                    size={22}
                    type="button"
                    className="text-danger cursor-pointer"
                    onClick={() => deleteTutorial(id)}
                  />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <EditTutorial editedItem={editedItem} editTutorial={editTutorial} />
    </div>
  );
};
export default TutorialList;
