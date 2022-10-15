import { checkUserContext } from '../../../context/checkUserContext'
import React, { useEffect, useState, useContext } from "react";
import { v4 as uuidv4 } from 'uuid';
import Card from "./Card/Card"

const List = () => {
  const { stores, setStores } = useContext(checkUserContext);//Hook con el listado de las stores



  return (
    <div>
      <h1>List</h1>

      {stores.length > 0 ? stores
        .map((item, i) => <Card key={uuidv4()} index={i} value={item} />)
        : "Loading..."}
    </div>
  )
};

export default List;
