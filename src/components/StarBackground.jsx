import { useEffect, useState } from "react";

// id, size, x, y, opactity, animationDuration
// id, size, x, y, delay, animationDuration

export const StarBackground = () => {
    const [stars, setStars] = useState([]);
    const [meteors, setMeteors] = useState([]);
    
    useEffect(() => {
        generateStars();
        generateMeteors();
        
        const handleResize = () => {
            generateStars();
        }
        
        window.addEventListener("resize", handleResize);
        
        return () => window.removeEventListener("resize", handleResize);
    }, []);
    
    const generateStars = () => {
        // Adjust the number of stars based on screen size
        const numberOfStars = Math.floor(
            window.innerWidth * window.innerHeight / 10000
        );
        
        const newStars = []
        
        for (let i = 0; i < numberOfStars; i++) {
            const size = Math.random() * 3 + 1; // Size between 1 and 4
            const x = Math.random() * 100;
            const y = Math.random() * 100;
            const opacity = Math.random() * 0.5 + 0.5; // Opacity between 0.5 and 1
            const animationDuration = Math.random() * 4 + 2; // Duration between 2 and 6 seconds

            newStars.push({
                id: i,
                size,
                x,
                y,
                opacity,
                animationDuration
            });
        }
        setStars(newStars);
    };
    
    const generateMeteors = () => {
        // Adjust the number of stars based on screen size
        const numberOfMeteors = 4;
        const newMeteors = [];
        
        for (let i = 0; i < numberOfMeteors; i++) {
            const size = Math.random() * 2 + 1; // Size between 1 and 4
            const x = Math.random() * 100;
            const y = Math.random() * 20;
            const opacity = Math.random() * 15; // Opacity between 0.5 and 1
            const animationDuration = Math.random() * 3 + 3; // Duration between 2 and 6 seconds

            newMeteors.push({
                id: i,
                size,
                x,
                y,
                opacity,
                animationDuration
            });
        }
        setMeteors(newMeteors);
    };

    return (
        <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
            {stars.map((star) => (
                <div
                    key={star.id}
                    className="star animate-pulse-subtle"
                    style={{
                        width: star.size + "px",
                        height: star.size + "px",
                        left: star.x + "%",
                        top: star.y + "%",
                        opacity: star.opacity,
                        animationDuration: star.animationDuration + "s",
                    }}
                />
            ))}
            
            {meteors.map((meteor) => (
                <div
                    key={meteor.id}
                    className="meteor animate-meteor"
                    style={{
                        width: meteor.size * 50 + "px",
                        height: meteor.size * 1.5 + "px",
                        left: meteor.x + "%",
                        top: meteor.y + "%",
                        animationDelay: meteor.delay,
                        animationDuration: meteor.animationDuration + "s",
                    }}
                />
            ))}
        </div>
    );
};