import { useEffect, useRef } from "react";
import { createUseStyles } from "react-jss";
import type { FC } from "react";

const useStyles = createUseStyles({
    window: {
        flex: 1,
        backgroundColor: "darkgrey",
        display: "flex",
    },
    canvas: {
        flex: 1,
        display: "block",
    },
});

const Window: FC = () => {
    const classes = useStyles();
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const positionRef = useRef({ x: 0, y: 0 });

    // Обработка движения мыши
    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        
        const ctx = canvas.getContext("2d");
        if (!ctx) return;
        
        // Функция для перерисовки холста
        const draw = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.fillStyle = "red";
            ctx.beginPath();
            ctx.arc(
                positionRef.current.x,
                positionRef.current.y,
                10,
                0,
                Math.PI * 2
            );
            ctx.fill();
        };

        // Обработчик движения мыши
        const handleMouseMove = (e: MouseEvent) => {
            const rect = canvas.getBoundingClientRect();
            positionRef.current = {
                x: e.clientX - rect.left,
                y: e.clientY - rect.top
            };
            draw(); // Синхронная отрисовка при каждом движении
        };

        // Обработчик ресайза
        const resizeObserver = new ResizeObserver(() => {
            const rect = canvas.getBoundingClientRect();
            canvas.width = rect.width;
            canvas.height = rect.height;
            draw();
        });

        // Настройка событий
        canvas.addEventListener("mousemove", handleMouseMove);
        resizeObserver.observe(canvas);

        // Первоначальная отрисовка
        resizeObserver.observe(canvas);

        return () => {
            canvas.removeEventListener("mousemove", handleMouseMove);
            resizeObserver.disconnect();
        };
    }, []);
    return (
        <div className={classes.window}>
            <canvas ref={canvasRef} className={classes.canvas}></canvas>
        </div>
    );
};

export default Window;