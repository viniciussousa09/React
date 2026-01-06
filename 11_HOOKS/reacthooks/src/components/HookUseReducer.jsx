import { useReducer } from "react";

const HookUseReducer = () => {
    // 1 - Começando com o useReducer
    const [number, dispatch] = useReducer((state, action) => {
        return Math.random(state);
    });

    // 2 - avançando no useReducer
    const initialTasks = [
        {id: 1, text: "Fazer alguma coisa"}
    ]

    return (
        <div>
            <h2>useReducer</h2>
            <p>Número:{number}</p>
            <button onClick={dispatch}>Alterar número</button>
        </div>
    );
};

export default HookUseReducer;