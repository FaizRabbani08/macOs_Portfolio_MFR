import { useEffect, useRef, useState } from "react";
import { useWindowStore } from "#store/windowStore";
import { animateWindowClose, animateWindowOpen } from "#utils/windowAnimation";

const Window = ({
  id,
  title,
  children,
  className = "",
}) => {
  const windowRef = useRef(null);
  const dragOffset = useRef({ x: 0, y: 0 });
  const resizeStart = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [isResizing, setIsResizing] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  const windowState = useWindowStore(
    (state) => state.windows[id]
  );

  const {
    closeWindow,
    minimizeWindow,
    maximizeWindow,
    focusWindow,
    moveWindow,
    resizeWindow,
  } = useWindowStore();

  useEffect(() => {
    if (windowRef.current) animateWindowOpen(windowRef.current);
  }, []);

  useEffect(() => {
    if (!isDragging && !isResizing) return undefined;

    const handleMouseMove = (event) => {
      const element = windowRef.current;
      if (!element) return;

      if (isDragging) {
        const rect = element.getBoundingClientRect();
        const maxX = Math.max(0, window.innerWidth - rect.width);
        const maxY = Math.max(0, window.innerHeight - rect.height);
        const x = Math.min(maxX, Math.max(0, event.clientX - dragOffset.current.x));
        const y = Math.min(maxY, Math.max(0, event.clientY - dragOffset.current.y));

        moveWindow(id, x, y);
      }

      if (isResizing && resizeStart.current) {
        const { width, height, x, y } = resizeStart.current;
        resizeWindow(
          id,
          Math.min(window.innerWidth - x, width + event.clientX - resizeStart.current.pointerX),
          Math.min(window.innerHeight - y, height + event.clientY - resizeStart.current.pointerY)
        );
      }
    };

    const stopDragging = () => setIsDragging(false);

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", stopDragging);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", stopDragging);
    };
  }, [id, isDragging, isResizing, moveWindow, resizeWindow]);

  if (
    !windowState ||
    !windowState.isOpen ||
    windowState.isMinimized
  ) {
    return null;
  }

  const {
    isMaximized,
    zIndex,
    x,
    y,
    width,
    height,
    minWidth,
    minHeight,
  } = windowState;

  const startDragging = (event) => {
    if (isMaximized || event.target.closest("button")) return;

    const rect = windowRef.current?.getBoundingClientRect();
    if (!rect) return;

    focusWindow(id);
    dragOffset.current = {
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
    };
    setIsDragging(true);
  };

  const toggleMaximize = (event) => {
    if (event.target.closest("button")) return;

    event.preventDefault();
    focusWindow(id);
    maximizeWindow(id);
  };

  const startResizing = (event) => {
    if (isMaximized) return;

    event.preventDefault();
    event.stopPropagation();
    focusWindow(id);
    resizeStart.current = {
      width,
      height,
      x,
      y,
      pointerX: event.clientX,
      pointerY: event.clientY,
    };
    setIsResizing(true);
  };

  const handleClose = () => {
    if (isClosing || !windowRef.current) return;

    setIsClosing(true);
    animateWindowClose(windowRef.current, () => closeWindow(id));
  };

  return (
    <section
      ref={windowRef}
      className={[
        "portfolio-window",
        isMaximized
          ? "window-maximized"
          : "",
        isDragging ? "is-dragging" : "",
        isResizing ? "is-resizing" : "",
        isClosing ? "is-closing" : "",
        className,
      ].join(" ")}
      style={{
        zIndex,
        ...(isMaximized ? {} : { left: x, top: y, width, height, minWidth, minHeight }),
      }}
      onMouseDown={() => focusWindow(id)}
    >
      <header
        className="window-header"
        onMouseDown={startDragging}
        onDoubleClick={toggleMaximize}
      >
        <div id="window-controls">
          <button
            type="button"
            className="close"
            aria-label={`Close ${title}`}
            onClick={(event) => {
              event.stopPropagation();
              handleClose();
            }}
          />

          <button
            type="button"
            className="minimize"
            aria-label={`Minimize ${title}`}
            onClick={(event) => {
              event.stopPropagation();
              minimizeWindow(id);
            }}
          />

          <button
            type="button"
            className="maximize"
            aria-label={`Maximize ${title}`}
            onClick={(event) => {
              event.stopPropagation();
              maximizeWindow(id);
            }}
          />
        </div>

        <h2>{title}</h2>

        <span className="window-meta">
          portfolio.app
        </span>
      </header>

      <div className="window-content">
        {children}
      </div>

      {!isMaximized && (
        <button
          type="button"
          className="window-resize-handle"
          aria-label={`Resize ${title}`}
          onMouseDown={startResizing}
        />
      )}
    </section>
  );
};

export default Window;