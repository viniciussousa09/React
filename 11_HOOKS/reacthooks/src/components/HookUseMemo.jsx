import { useEffect, useState, useMemo } from 'react';

const HookUseMemo = () => {
    const [number, setNumber] = useState(0);

    // const premiumMumbers = ["0", "100", "200", "300", "400", "500"];

    const premiumMumbers = useMemo(() => {

        return ["0", "100", "200", "300", "400", "500"];
    }, []);

    useEffect(() => {
        console.log("Premium mumbers foi alterado");
    }, [premiumMumbers]);

    return (
        <div>
            <h2>useMemo</h2>
            <input type="text" onChange={(e) => setNumber(e.target.value)} />
            {premiumMumbers.includes(number) ? <p>Acertou o número</p> : ""}
        </div>
    );
};

export default HookUseMemo;
