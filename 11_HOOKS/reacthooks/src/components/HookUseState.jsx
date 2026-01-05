import { useState } from "react";

const HookUseState = () => {
    // 1 - useState
    let userName = "João";
    const [name, setName] = useState("Vinicius");

    const changeNames = () => {
        userName = "João da Silva";

        setName("Vinicius Sousa");
    };

    // 2 - useState e input
    const [age, setAge] = useState(39);

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(age);
    };

    return (
        <div>
            {/* 1 - useState */}
            <h2>useSate</h2>
            <p>variável: {userName}</p>
            <p>useState: {name}</p>
            <button onClick={changeNames}>Mudar nomes</button>
            {/* 2 - useState e input */}
            <form onSubmit={handleSubmit}>
                <input type="text" value={age} onChange={(e) => setAge(e.target.value)} />
                <input type="submit" value="Enviar" />
            </form>
            <p>Você tem {age} anos.</p>
            <hr />
        </div>
    );
};

export default HookUseState;
