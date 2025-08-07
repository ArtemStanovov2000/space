import { baseCursor } from "../../data/curcors/baseCursor";

export const draw = (
  ctx: CanvasRenderingContext2D,
  width: number,
  height: number,
  currentX: number,
  currentY: number,
  dpr: number
) => {
  ctx.clearRect(0, 0, width, height);
  
  // Настройки стиля для линий
  ctx.strokeStyle = baseCursor.strokeStyle;
  ctx.lineWidth = baseCursor.lineWidth;
  ctx.lineCap = baseCursor.lineCap; // Для гладких концов линий

  // Отрисовка каждого отрезка курсора
  baseCursor.contour.forEach((line) => {
    ctx.beginPath();
    ctx.moveTo(
      currentX + line.xStart * dpr,
      currentY + line.yStart * dpr
    );
    ctx.lineTo(
      currentX + line.xEnd * dpr,
      currentY + line.yEnd * dpr
    );
    ctx.stroke();
  });
};