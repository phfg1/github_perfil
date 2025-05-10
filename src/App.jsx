import { useState } from "react";

import Perfil from "./components/Perfil/Index";
import Formulario from "./components/formulario/index";
import ReposList from "./components/ReposList";



function App() {
  const [formularioEstaVisivel, setFormularioEstaVisivel] = useState(true);
  const [nomeUsuario, setNomeUsuario] = useState('');

  return(
    <>
          <input type="text" placeholder="Digite umusuário GitHub" onBlur={(e) => setNomeUsuario(e.target.value)} />
        

          {nomeUsuario.length > 4 && (
            <>
                <Perfil  nomeUsuario={nomeUsuario} />
                <ReposList nomeUsuario={nomeUsuario}/>
            </>
          )}
          
          {/* {formularioEstaVisivel && (
            <Formulario />
          )}

          <button type="button" onClick={() => setFormularioEstaVisivel(!formularioEstaVisivel)}>toggle form</button> */}

    </>

  )
}



export default App
