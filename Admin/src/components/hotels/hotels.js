import {React,useEffect,useState} from 'react'
import { useForm } from 'react-hook-form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare, faTrashCan } from '@fortawesome/free-solid-svg-icons'
import axios from "axios";



function HotelsTab(props) {

    
    const [isEditing, setIsEditing] = useState(false);
  const { register, handleSubmit } = useForm({
    defaultValues: {
      title: props.title,
      city: props.city,
      photos: props.photos,
      prixbas: props.prixbas,
      rating: props.rating,
      description: props.description,
      offers:props.offers,
    },
  });

  const onSubmit = (data) => {
    
    axios
      .put(`http://localhost:8800/api/UpdateHotel/${props.id}`, data)
      .then((res) => {
        console.log(res.data);
        setIsEditing(false);
        window.location.reload(); // Refresh the page
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleCancelClick = () => {
    setIsEditing(false);
  };

  if (isEditing) {
    return (
      <tr style={{ textAlign: "center" }}>
        <td>
          <input type="text" {...register("title")} />
        </td>
        <td>
          <input type="text" {...register("city")} />
        </td>
        <td>
          <input type="text" {...register("photos")} />
        </td>
        <td>
          <input type="text" {...register("prixbas")} />
        </td>
        <td>
          <input type="text" {...register("offers")} />
        </td>
        <td>
          <input type="text" {...register("rating")} />
        </td>
        <td>
          <input type="text" {...register("description")} />
        </td>
        <td>
          <button onClick={handleSubmit(onSubmit)}>Save</button>
          <button onClick={handleCancelClick}>Cancel</button>
        </td>
        <td>
          <button disabled>
            <FontAwesomeIcon icon={faTrashCan} />
          </button>
        </td>
      </tr>
    );
  }


    const handleDelete = () => {
        axios.delete(`http://localhost:8800/api/DeleteHotel/${props.id}`)
             .then(response => {
                 console.log(response.data);
                 window.location.reload(); // rafraîchir la page

             })
             .catch(error => {
                 console.log(error);
             })
    }

    return (
        <tr style={{ textAlign: 'center' }}>
            <td>{props.title}</td>
            <td>{props.city}</td>
            <td>{props.photos}</td>
            <td>{props.prixbas}</td>
            <td>{props.offers}</td>
            <td>{props.rating}</td>
            <td>{props.description}</td>
            <td><button onClick={handleEditClick}><FontAwesomeIcon icon={faPenToSquare}></FontAwesomeIcon></button></td>
            <td><button onClick={handleDelete}><FontAwesomeIcon icon={faTrashCan}></FontAwesomeIcon></button></td>

        </tr>
    )
}

export default HotelsTab