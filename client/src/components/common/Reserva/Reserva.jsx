import React,{useState} from "react";
import { useEffect,useContext } from "react";
import DtPicker from 'react-calendar-datetime-picker'
import 'react-calendar-datetime-picker/dist/index.css';
import { checkUserContext } from "../../../context/checkUserContext";
import axios from 'axios';

const Reserva = () => {
  const [date, setDate] = useState(null);
  const [showBtn,setShowBtn] = useState(false);
  const { userCheck } = useContext(checkUserContext);
  const [printDate,setPrintDate] = useState(null);
  useEffect(()=>{
    if(date){
      setShowBtn(true);
      
    }
  })

  const sendBooking = async()=>{
    try{
       const res = await axios.post(`http://localhost:5000/api/saveBooking/${userCheck.email}`,date);
       console.log(res.data);
    }
    catch(error){
      console.log(error);
    }
  }

  return(
    <>
      <h2>Reserva</h2>
      <DtPicker  onChange={setDate} />
      {showBtn!=true?null:<button onClick={sendBooking}>Reservar</button>}
      {/* {printDate?<p>Has reservado para el día {printDate}</p>:null} */}
    </>
  )
};

export default Reserva;
