import { useEffect, useState } from "react";

export const GridBackground = () => {
    return (
        <div
            style={{
                position: "fixed",
                inset: 0,
                zIndex: -1,
                pointerEvents: "none",
                overflow: "hidden",
            }}
        >
            <svg
                width="200%"
                height="200%"
                style={{
                    display: "block",
                    transform: "rotate(30deg) scale(1.2)",
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