// 3 - alterando valor do contexto
import { useContext } from "react";
import { CounterContext } from "../context/CounterContext";

// 4 - refatorando com hook
import { useCounterContext } from "../hooks/useCounterContext";

// 5 - Contexto mais complexo
import { useTitleColorContext } from "../hooks/useTitleColorContext";

const Contact = () => {
    const { counter } = useCounterContext();

    const { color } = useTitleColorContext();

    return (
        <div>
            <h1 style={{ color: color }}>Pagina de contato</h1>
            <p>Valor de counter; {counter}</p>
        </div>
    );
};

export default Contact;
