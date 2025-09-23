import { useState } from "react";

const ListRender = () => {
    const [list] = useState(["Vinicius", "Lais", "Giovanna", "Sophia", "Alice", "Daniel"]);

    const [users, setUsers] = useState([
        { id: 1, name: "Vinicius", age: 39 },
        { id: 2, name: "Lais", age: 38 },
        { id: 3, name: "Giovanna", age: 16 },
        { id: 4, name: "Sophia", age: 15 },
        { id: 5, name: "Alice", age: 10 },
        { id: 6, name: "Daniel", age: 6 },
    ]);

    const deleteRandom = () => {
        const randomNumber = Math.floor(Math.random() * 7);

        setUsers((prevUsers) =>
            prevUsers.filter((user) => randomNumber !== user.id)
        );
    };

    return (
        <div>
            {/* 4 - render sem Key */}
            <ul>
                {list.map((item, i) => (
                    <li key={i}>{item}</li>
                ))}
            </ul>
            {/* 5 - render com key */}
            <ul>
                {users.map((user) => (
                    <li key={user.id}>{user.name} - {user.age} anos</li>
                ))}
            </ul>
            {/* 6 - Previous state */}
            <button onClick={deleteRandom}>Delete random user</button>
        </div>
    );
};

export default ListRender;
