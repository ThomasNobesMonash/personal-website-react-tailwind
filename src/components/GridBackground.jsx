import { useEffect, useState } from "react";

const ANIMATION_DURATION = 100000; // ms
const GRID_SIZE = 40;
const NUM_ANIM_LINES = 4;

function getAnimatedLines(width, height, t) {
    // t: 0 to 1
    const lines = [];
    for (let i = 0; i < NUM_ANIM_LINES; i++) {
        // Offset each line's animation
        const phase = ((t + i / NUM_ANIM_LINES) % 1);
        const x = phase * width;
        lines.push({
            x1: x,
            y1: 0,
            x2: x,
            y2: height,
            key: `v-${i}`,
        });
        const y = phase * height;
        lines.push({
            x1: 0,
            y1: y,
            x2: width,
            y2: y,
            key: `h-${i}`,
        });
    }
    return lines;
}

export const GridBackground = () => {
    const [scale, setScale] = useState(1.2);
    const [dimensions, setDimensions] = useState({ width: window.innerWidth, height: window.innerHeight });
    const [animTime, setAnimTime] = useState(0);

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

    useEffect(() => {
        let frame;
        const start = performance.now();
        const animate = (now) => {
            const elapsed = (now - start) % ANIMATION_DURATION;
            setAnimTime(elapsed / ANIMATION_DURATION);
            frame = requestAnimationFrame(animate);
        };
        frame = requestAnimationFrame(animate);
        return () => cancelAnimationFrame(frame);
    }, []);

    const { width, height } = dimensions;
    const animatedLines = getAnimatedLines(width, height, animTime);

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
                        width={GRID_SIZE}
                        height={GRID_SIZE}
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
                {/* Animated lines */}
                {animatedLines.map(line => (
                    <line
                        key={line.key}
                        x1={line.x1}
                        y1={line.y1}
                        x2={line.x2}
                        y2={line.y2}
                        stroke="#fff"
                        strokeWidth="2"
                        opacity="0.8"
                        style={{
                            filter: "drop-shadow(0 0 8px #fff)",
                            transition: "opacity 0.2s",
                        }}
                    />
                ))}
            </svg>
        </div>
    );
};