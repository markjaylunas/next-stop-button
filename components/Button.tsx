import { useState } from 'react';

const Button: React.FC = () => {
    const [color, setColor] = useState('#00b3ff');
    const [doubleSize, setdoubleSize] = useState(1);

    const random = () => Math.floor(Math.random() * 255);
    const onClick = () => {
        setColor(`rgb(${random()},${random()},${random()})`);
        setdoubleSize((prevSize) => prevSize * 2);
    };
    const style = {
        backgroundColor: color,
        transform: `scale(${doubleSize})`,
    };
    return (
        <button
            className="text-white rounded-md border-2 border-white px-4 py-1 transition ease-in-out"
            onClick={onClick}
            style={style}
        >
            STOP
        </button>
    );
};

export default Button;
