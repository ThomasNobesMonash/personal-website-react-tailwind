import { ArrowDown } from "lucide-react";

export const BlogHeroSection = () => {
    return (
        <section
            id="hero"
            className="relative flex flex-col items-center justify-start min-h-screen pt-32 px-4"
        >
            <div className="container max-w-4xl mx-auto text-center z-10">
                <div className="space-y-6">
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                        <span className="opacity-0 animate-fade-in"> Hi, I'm</span>
                        <span className="text-primary opacity-0 animate-fade-in-delay-1">
                            {" "}
                            Thomas
                        </span>
                        <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2">
                            {" "}
                            Nobes
                        </span>
                    </h1>
                    
                    <p>
                        I am interested in <span className="text-primary-emphasis">Pathfinding Algorithms</span> and create <span className="text-primary-emphasis">educational YouTube videos</span> on adjacent topics.
                        I completed my PhD in Computer Science on 3D Voxel-Based Pathfinding Algorithms at Monash University in 2025.
                        I teach a Masters subject on Planning and Automated Reasoning. I am the first author of JPS-3D.
                    </p>
                    
                    <div className="pt-4 opacity-0 animate-fade-in-delay-4">
                        <a href="#projects" className="cosmic-button">
                            View My Work
                        </a>
                    </div>
                </div>
            </div>
            
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
                <span className="text-sm text-muted-foreground mb-2">Scroll</span>
                <ArrowDown className="h-5 w-5 text-primary" />
            </div>
        </section>
    );
};