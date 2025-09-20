import { useState } from "react";

const ListRender = () => {
    const [list] = useState(["Vinicius", "Lais", "Giovanna", "Sophia", "Alice", "Daniel"]);

    return (<div>
        <ul>
            {list.map((item) => (
                <li>{item}</li>
            ))}
        </ul>
    </div>
    );
};

export default ListRender;
