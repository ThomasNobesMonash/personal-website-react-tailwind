import { BookOpenText, Code, Youtube, Briefcase } from "lucide-react";

export const AboutSection = () => {
    return (
        <section id="about" className="py-24 px-4 relative">
            {" "}
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    About <span className="text-primary"> Me</span>
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <h3 className="text-2xl font-semibold"> Passionate Pathfinding Educator <br />& Researcher</h3>
                        
                        <p className="text-muted-foreground">
                            With 5 years of experience teaching and researching pathfinding algorithms, 
                            I am dedicated to making complex concepts accessible and engaging.
                        </p>
                        
                        <p className="text-muted-foreground">
                            I developed JPS-3D, the current state-of-the-art 3D pathfinding algorithm.
                            I passionately teach a Masters subject on Planning and Reasoning at Monash University.
                            I create educational content for aesthetic algorithm visualisations.
                        </p>
                        
                        <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                            <a href="#contact" className="cosmic-button">
                                {" "}
                                Get In Touch
                            </a>
                            
                            
                            <a href="#cv" className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300:">
                                {" "}
                                Download CV
                            </a>
                        </div>
                    </div>
                    
                    <div className="grid grid-cols-1 gap-6">
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <BookOpenText className="h-6 w-6  text-primary"/>
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg"> Research Publications</h4>
                                    <p className="text-muted-foreground">
                                        Designing state-of-the-art voxel benchmarks and 3D pathfinding algorithms.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Youtube className="h-6 w-6  text-primary"/>
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg"> Lower Bound on YouTube</h4>
                                    <p className="text-muted-foreground">
                                        Creating educational YouTube videos to help visualise and explain pathfinding algorithms.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Briefcase className="h-6 w-6  text-primary"/>
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg"> PhD Student & Educator</h4>
                                    <p className="text-muted-foreground">
                                        Expert knowledge of pathfinding algorithms and professional experience in teaching.
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Code className="h-6 w-6  text-primary"/>
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg"> Algorithms & Visualisations</h4>
                                    <p className="text-muted-foreground">
                                        Sharing open-source code for pathfinding algorithms and visualisations.
                                    </p>
                                </div>
                            </div>
                        </div> */}
                        
                    </div>
                </div>
            </div>
        </section>
    );
};