import { useEffect, useRef } from "react";
import { createUseStyles } from "react-jss";
import type { FC } from "react";
import { draw } from "./draw/draw";

const useStyles = createUseStyles({
    canvas: {
        display: "block",
        width: "100%",
        height: "100%",
        cursor: "none"
    },
});

const Canvas: FC = () => {
    const classes = useStyles();
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const positionRef = useRef({ x: 0, y: 0 });

    // Обработка движения мыши
    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let animationFrameId: number | null = null;
        let dpr = window.devicePixelRatio || 1;

        const handleMouseMove = (e: MouseEvent) => {
            const rect = canvas.getBoundingClientRect();
            positionRef.current = {
                x: (e.clientX - rect.left) * dpr,
                y: (e.clientY - rect.top) * dpr
            };

            console.log(positionRef.current)

            if (!animationFrameId) {
                animationFrameId = requestAnimationFrame(() => {
                    draw(ctx, canvas.width, canvas.height, positionRef.current.x, positionRef.current.y, dpr);
                    animationFrameId = null;
                });
            }
        };

        const handleResize = () => {
            const rect = canvas.getBoundingClientRect();
            dpr = window.devicePixelRatio || 1;

            canvas.width = rect.width * dpr;
            canvas.height = rect.height * dpr;

            ctx.setTransform(1, 0, 0, 1, 0, 0);
            ctx.scale(dpr, dpr);
            draw(ctx, canvas.width, canvas.height, positionRef.current.x, positionRef.current.y, dpr);
        };

        const resizeObserver = new ResizeObserver(handleResize);
        canvas.addEventListener("mousemove", handleMouseMove);
        resizeObserver.observe(canvas);

        // Первоначальная инициализация
        handleResize();

        return () => {
            canvas.removeEventListener("mousemove", handleMouseMove);
            resizeObserver.disconnect();
            if (animationFrameId) cancelAnimationFrame(animationFrameId);
        };
    }, []);


    return (
        <canvas ref={canvasRef} className={classes.canvas}></canvas>
    );
};

export default Canvas;