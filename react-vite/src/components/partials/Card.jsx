import React from "react";
import { Link } from "react-router-dom";
import { deleteUserById } from "../../service/api";

const Card = (props) => {

    const handleSubmit = async (e) =>{
        const id = e.target.name;
        await deleteUserById(id);
    }

    return (
        <div className="card cardsize mb-3">
            <img src={props.pic} className="card-img-top"/>
            <div className="card-body">
                <h5 className="card-title">{props.fname} {props.lname}</h5>
                <p className="card-text">{props.email}</p>
                <div className="row px-2">
                    <Link className="btn btn-primary my-1" to={`/users/${props.userId}`}>
                        View
                    </Link>
                    <Link className="btn btn-success my-1" to={`/users/edit/${props.userId}`}>
                        Edit
                    </Link>
                    <button className="btn btn-danger my-1" name={props.userId} onClick={(e)=> handleSubmit(e)}>
                        Delete
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Card;