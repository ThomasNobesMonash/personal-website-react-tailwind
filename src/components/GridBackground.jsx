import { useEffect, useState } from "react";

const GRID_SIZE = 40;
const LARGE_GRID_SIZE = GRID_SIZE * 5;

export const GridBackground = () => {
    const [scale, setScale] = useState(1.2);
    const [dimensions, setDimensions] = useState({ width: window.innerWidth, height: window.innerHeight });

    useEffect(() => {
        const updateScale = () => {
            const angle = 30 * (Math.PI / 180);
            const { innerWidth: w, innerHeight: h } = window;
            const newWidth = Math.abs(w * Math.cos(angle)) + Math.abs(h * Math.sin(angle));
            const newHeight = Math.abs(w * Math.sin(angle)) + Math.abs(h * Math.cos(angle));
            const scaleX = newWidth / w;
            const scaleY = newHeight / h;
            setScale(Math.max(scaleX, scaleY));
            setDimensions({ width: w, height: h });
        };
        updateScale();
        window.addEventListener("resize", updateScale);
        return () => window.removeEventListener("resize", updateScale);
    }, []);


    return (
        <div
            style={{
                position: "fixed",
                inset: 0,
                zIndex: -1,
                pointerEvents: "none",
                overflow: "hidden",
                WebkitMaskImage:
                    "linear-gradient(to right, transparent 0%, black 20%, black 80%, transparent 100%)",
                maskImage:
                    "linear-gradient(to right, transparent 0%, black 20%, black 80%, transparent 100%)",
            }}
        >
            <svg
                width={dimensions.width + GRID_SIZE}
                height={dimensions.height + GRID_SIZE}
                style={{
                    display: "block",
                    transform: `rotate(30deg) scale(${scale})`,
                    filter: "drop-shadow(0 0 8px #3af) drop-shadow(0 0 16px #3af)",
                }}
            >
                <defs>
                    <pattern
                        id="grid"
                        width={GRID_SIZE}
                        height={GRID_SIZE}
                        patternUnits="userSpaceOnUse"
                    >
                        <path
                            d="M 40 0 L 0 0 0 40"
                            fill="none"
                            stroke="#3af"
                            strokeWidth="1"
                            opacity="0.3"
                        />
                    </pattern>
                    <pattern
                        id="large-grid"
                        width={LARGE_GRID_SIZE}
                        height={LARGE_GRID_SIZE}
                        patternUnits="userSpaceOnUse"
                    >
                        <path
                            d={`M ${LARGE_GRID_SIZE} 0 L 0 0 0 ${LARGE_GRID_SIZE}`}
                            fill="none"
                            stroke="#3af"
                            strokeWidth="2.5"
                            opacity="0.35"
                        />
                    </pattern>
                </defs>
                {/* Small grid */}
                <rect
                    x={-GRID_SIZE}
                    y={-GRID_SIZE}
                    width={dimensions.width + GRID_SIZE * 2}
                    height={dimensions.height + GRID_SIZE * 2}
                    fill="url(#grid)"
                />
                {/* Large overlay grid */}
                <rect
                    x={-LARGE_GRID_SIZE}
                    y={-LARGE_GRID_SIZE}
                    width={dimensions.width + LARGE_GRID_SIZE * 2}
                    height={dimensions.height + LARGE_GRID_SIZE * 2}
                    fill="url(#large-grid)"
                    style={{
                        opacity: 0.8,
                    }}
                />
            </svg>
        </div>
    );
};
