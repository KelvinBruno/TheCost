import React, { useContext } from 'react'
import { useState } from "react";
import { BsPersonCircle } from "react-icons/bs";
import { BsBoxArrowLeft } from "react-icons/bs"
import { Container, DropDownMenu } from "./style.module";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../Contexts/AuthContext";


const DropDown = () => {
  const { user } = useContext(AuthContext);

  const [open, setOpen] = useState(false);
  const navigate = useNavigate()

  const Logout = () => {
    localStorage.clear()
    navigate("/")
  }

  return (
    <>
      <Container>
        <div className="menu" onClick={() => {setOpen(!open)}}>
          <img 
          src= {user?.image ? user.image : "./img-base.jpg"}
          alt="Foto de Perfil" />
        </div>
      </Container>

      <DropDownMenu>
        <div className={`drop ${open? 'active' : 'inactive'}`}>
            <ul className="drop-item">
                <li>
                    <BsPersonCircle size={25} />
                    <h3 onClick={() => navigate("/perfil")}>Editar Perfil</h3>
                </li>
                <li>
                    <BsBoxArrowLeft size={25}/>
                    <h3 onClick={Logout}>Sair</h3>
                </li>
            </ul>
        </div>
      </DropDownMenu>
    </>
  );
};

export default DropDown;
