import { Sun } from "lucide-react";
import { Moon } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export const ThemeToggle = () => {
    const [isLightMode, setisLightMode] = useState(false);
    
    useEffect(() => {
        const storedTheme = localStorage.getItem("theme");
        if (storedTheme) {
            if (storedTheme === "light") {
                document.documentElement.classList.add("light");
                setisLightMode(true);
            } else {
                document.documentElement.classList.remove("light");
                setisLightMode(false);
            }
        } else {
            // Default to light mode if no preference is stored
            document.documentElement.classList.remove("light");
            setisLightMode(false);
        }
    }, [])
    
    const toggleTheme = () => {
        if (isLightMode) {
            document.documentElement.classList.remove("light");
            localStorage.setItem("theme", "light");
            setisLightMode(false);
        }
        else {
            document.documentElement.classList.add("light");
            localStorage.setItem("theme", "light");
            setisLightMode(true);
        }
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
}
    