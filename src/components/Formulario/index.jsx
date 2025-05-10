import { useState, useEffect } from "react";
import './formulario.css'

const Formulario = () => {
    const [notaA, setNotaA] = useState(0);
    const [notaB, setNotaB] = useState(0);
    const [notaC, setNotaC] = useState(0);
    const [mediaAprovacao, setMediaAprovacao] = useState(0);
    const [nome, setNome] = useState('');

    useEffect(() => {
        console.log("O estado nome mudou");
    }, [nome])

    useEffect(() => {
        console.log("O estado nota A mudou");
    }, [notaA, notaB, notaC])

    useEffect(() => {
        console.log("O componente iniciou");

        return () => {
            console.log('o componente finalizou');
        }
    }, [])

    useEffect(() => {
        console.log("O componente iniciou");
    }, [])

    const alteraNome = (event) => {
        setNome(event.target.value)
    }

    const renderizaResultado = () => {
        const soma = notaA + notaB + notaC;
        const media = soma / 3;

        if (media >= (mediaAprovacao)) {
            return (
                <p>Olá {nome}, você foi aprovado!</p>
            )
        } else {
            return (
                <p>Que pena {nome}, você foi reprovado!</p>
            )
        }


    }

    return (
        <form>
            <ul>
                {['Pedro', 'Thaís', 'Alice', 'Mutuca'].map(item => <li key={item}>{item}</li>)}
            </ul>

            <input type="text" placeholder="Nome" onChange={alteraNome} />
            <input type="number" placeholder="Média para aprovação" onChange={event => setMediaAprovacao(parseInt(event.target.value))} />
            <input type="number" placeholder="Nota A" onChange={event => setNotaA(parseInt(event.target.value))} />
            <input type="number" placeholder="Nota B" onChange={event => setNotaB(parseInt(event.target.value))} />
            <input type="number" placeholder="Nota C" onChange={event => setNotaC(parseInt(event.target.value))} />
            {renderizaResultado()}
            
        </form>
    )
}

export default Formulario;