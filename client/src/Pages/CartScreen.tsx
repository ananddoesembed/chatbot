import React, { useEffect } from "react";
import { useLocation, useParams } from "react-router";
import { useDispatch } from "react-redux";
import { addItem } from "../store/cart/actions";
const CartScreen = () => {
  const location = useLocation();
  const params = useParams<{ id: string }>();
  const qty = location.search ? parseInt(location.search.split("=")[1]) : 1;
  const dispatch = useDispatch();
  useEffect(() => {
    if (params.id) {
      dispatch(addItem(params.id, qty));
    }
  }, [dispatch, params.id, qty]);
  console.log(params, location);
  return <div>asddsaf</div>;
};

export default CartScreen;
