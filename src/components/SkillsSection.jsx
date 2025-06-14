import { useState } from 'react';
import { cn } from '@/lib/utils';

const skills = [
    // Programming Languages
    { name: "Python", level: 100, txtlevel: "Expert", category: 'Programming' },
    { name: 'C++', level: 80, txtlevel: "Advanced", category: 'Programming' },
    
    // Programming Tools
    { name: 'Git', level: 100, txtlevel: "Expert", category: 'Programming' },
    { name: 'Unix Shell', level: 80, txtlevel: "Advanced", category: 'Programming' },
    { name: 'VS Code', level: 100, txtlevel: "Expert", category: 'Programming' },
    
    // Technical Skills
    { name: 'Algorithm Design', level: 100, txtlevel: "Expert", category: 'Technical' },
    { name: 'Data Structures', level: 100, txtlevel: "Expert", category: 'Technical' },
    { name: 'Data Science & AI', level: 100, txtlevel: "Expert", category: 'Technical' },
    
    // Mathematics
    { name: 'Multi-Variable Calculus', level: 80, txtlevel: "Advanced", category: 'Mathematics' },
    { name: 'Linear Algebra', level: 80, txtlevel: "Advanced", category: 'Mathematics' },
    { name: 'Differential Equations', level: 80, txtlevel: "Advanced", category: 'Mathematics' },
    { name: 'Major in Physics (Monash Uni)', level: 80, txtlevel: "Advanced", category: 'Mathematics' },
    
    // Visualisation
    { name: 'Matplotlib', level: 80, txtlevel: "Advanced", category: 'Visualisation' },
    { name: 'Blender', level: 80, txtlevel: "Advanced", category: 'Visualisation' },
    { name: 'Manim', level: 80, txtlevel: "Advanced", category: 'Visualisation' },
]

const categories = ["all", "Programming", "Technical", "Mathematics", "Visualisation"];


export const SkillsSection = () => {
    const [activateCategory, setActiveCategory] = useState("all");
    
    const filteredSkills = skills.filter((skill) => activateCategory === "all" || skill.category === activateCategory);
    
    return (
        <section id="skills" className="py-24 px-4 relative bg-secondary/30">
            <div className="containter mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    My <span className="text-primary"> Skills</span>
                </h2>
                
                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {categories.map((category, key) => (
                        <button
                            key={key}
                            onClick={() => setActiveCategory(category)}
                            className={cn(
                                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                                activateCategory === category 
                                    ? "bg-primary text-primary-foreground" 
                                    : "bg-secondary/70 text-foreground hover:bd-secondary"
                            )}
                        >
                            {category}
                        </button>
                    ))}
                </div>
                
                <div className="grid grid-cols1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredSkills.map((skill, key) => (
                        <div
                            key={key}
                            className="bg-card p-6 rounded-lg shadow-xs card-hover"
                        >
                            <div className="text-left mb-4">
                                <h3 className="font-semibold text-lg"> {skill.name}</h3>
                            </div>
                            <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                                <div
                                    className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]"
                                    style={{width: skill.level + "%" }}
                                />
                            </div>
                            
                            <div className="text-right mt-1">
                                <span className="text-sm text-muted-foreground">
                                    {skill.txtlevel}
                                    {/* How Experienced I am */}
                                </span>
                            </div>
                        </div>
                    ))}
                    
                </div>
            </div>
        </section>
    );
}