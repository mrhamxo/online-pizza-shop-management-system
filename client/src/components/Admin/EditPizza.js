import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getPizzaByIdAction } from "../../actions/pizzaAction";
import { useParams } from 'react-router-dom';

const EditPizza = ({match}) => {
  const dispatch = useDispatch();
  const id  = useParams();
  // console.log(id);

  useEffect(() => {
    dispatch(getPizzaByIdAction(id.pizzaId));
    console.log(id);
  }, [dispatch, id]);

  return (
    <div>
      <h1>Edit Pizza screen</h1>
    </div>
  );
};

export default EditPizza;
