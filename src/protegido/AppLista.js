import React, {useEffect, useState} from 'react'
import AppForm from './AppForm'
import { collection, deleteDoc, doc, onSnapshot, query } from 'firebase/firestore';
import { db } from '../conexion/firebase';


const AppLista = (props) => {

  const [docBD, setDocBD] = useState([]);
  const fnRead = () => {
    const xColeccionConQuery = query(collection(db, 'persona'));
    const unsubcribe = onSnapshot(xColeccionConQuery, (xDatosBD) => {
      const xDoc = [];
      xDatosBD.forEach((doc) => {
        xDoc.push({id:doc.id, ...doc.data()});
      });
      setDocBD(xDoc);
    });
  }
  //fnRead();
  useEffect(() => {fnRead();}, [props.idActual]);
  //console.log(docBD);


  const [idActual, setIdActual] = useState("");
  const fnDelete = async (xId) => {
    if(window.confirm("Realmente deseas eliminar el registro?")){
      await deleteDoc(doc(db, "persona", xId));
    }
    alert("Se elimino con éxito..");
  }

  return (
    <div style={{background:"greenyellow", padding:"10px"}}>
      <h1>AppList.js</h1>
        <AppForm {...{idActual, setIdActual}}/>
      <h3>Lista de Clientes</h3>
      {
        docBD.map((row, index) =>
        <p key={row.id}>
          No. {index + 1}. {row.nombre}
          .....
          <span onClick={() => fnDelete(row.id)}>X</span>
          ......
          <span onClick={() => setIdActual(row.id)}>A</span>
        </p>)
      }
      
    </div>
  )
}

export default AppLista
