import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import LogoNome from "../../assets/logoNome.svg";
import { Load, Screen } from "./style.module";
import { Divpai } from "../../Pages/Login/styles";
import { MetaContext } from "../../contexts/MetasContext";

export function Loading() {
  const { user, loading } = useContext(AuthContext);
  const { carregaMeta } = useContext(MetaContext)

  setTimeout(() => (
    carregaMeta()
    ), 2000
  )

  if (loading) {
    return (
      <Divpai>
        <Screen>
          <section>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </section>
          <img src={LogoNome} alt="The Cost"/>
          <Load />
        </Screen>
      </Divpai>
    )
  } else {
    return user ? <Outlet /> : <Navigate to="/" replace />;
  }
}
