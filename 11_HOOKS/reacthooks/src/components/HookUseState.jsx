import { useState } from "react";

const HookUseState = () => {
    // 1 - useState
    let userName = "João";
    const [name, setName] = useState("Vinicius");

    const changeNames = () => {
        userName = "João da Silva";

        setName("Vinicius Sousa");
    };

    return (
        <div>
            {/* 1 - useState */}
            <h2>useSate</h2>
            <p>variável: {userName}</p>
            <p>useState: {name}</p>
            <button onClick={changeNames}>Mudar nomes</button>
        </div>
    );
};

export default HookUseState;
