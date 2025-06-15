import { Sun } from "lucide-react";
import { Moon } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export const ThemeToggle = () => {
    const [isLightMode, setIsLightMode] = useState(() => {
        // Check localStorage on initial render
        if (typeof window !== "undefined") {
            const storedTheme = localStorage.getItem("theme");
            return storedTheme === "light";
        }
        return false;
    });

    useEffect(() => {
        // Apply theme class on mount and when isLightMode changes
        if (isLightMode) {
            document.documentElement.classList.add("light");
            localStorage.setItem("theme", "light");
        } else {
            document.documentElement.classList.remove("light");
            localStorage.setItem("theme", "dark");
        }
    }, [isLightMode]);

    const toggleTheme = () => {
        setIsLightMode((prev) => !prev);
    };

    return (
        <button
            onClick={toggleTheme}
            className={cn(
                "fixed max-sm:hidden top-5 right-5 z-50 p-2 rounded-full transition-colors duration-300",
                "focus:outline:hidden"
            )}
        >
            {isLightMode ? (
                <Moon className="h-6 w-6 text-blue-900"/>
            ) : (
                <Sun className="h-6 w-6 text-yellow-300" />
            )}
        </button>
    );
};
    