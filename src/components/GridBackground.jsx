import { useEffect, useState } from "react";

export const GridBackground = () => {
    // Calculate scale to cover the screen after rotation
    const [scale, setScale] = useState(1.2);

    useEffect(() => {
        const updateScale = () => {
            const angle = 30 * (Math.PI / 180); // 30deg in radians
            const { innerWidth: w, innerHeight: h } = window;
            // Calculate bounding box after rotation
            const newWidth = Math.abs(w * Math.cos(angle)) + Math.abs(h * Math.sin(angle));
            const newHeight = Math.abs(w * Math.sin(angle)) + Math.abs(h * Math.cos(angle));
            // Scale so that rotated svg covers the viewport
            const scaleX = newWidth / w;
            const scaleY = newHeight / h;
            setScale(Math.max(scaleX, scaleY));
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
                width="100%"
                height="100%"
                style={{
                    display: "block",
                    transform: `rotate(30deg) scale(${scale})`,
                    filter: "drop-shadow(0 0 8px #3af) drop-shadow(0 0 16px #3af)",
                }}
            >
                <defs>
                    <pattern
                        id="grid"
                        width="40"
                        height="40"
                        patternUnits="userSpaceOnUse"
                    >
                        <path
                            d="M 40 0 L 0 0 0 40"
                            fill="none"
                            stroke="#3af"
                            strokeWidth="1"
                            opacity="0.4"
                        />
                    </pattern>
                </defs>
                <rect
                    width="100%"
                    height="100%"
                    fill="url(#grid)"
                />
            </svg>
        </div>
    );
};