import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
    {
        id: 1,
        title: "Jump Point Search 3D",
        description: "The state-of-the-art for fast and optimal 3D pathfinding in voxel environments.",
        image: "/projects/jps3d.png",
        tags: ["Pathfinding", "3D", "Algorithm"],
        paperUrl: "https://ojs.aaai.org/index.php/SOCS/article/view/21762",
        gitUrl: "https://bitbucket.org/dharabor/pathfinding/src/dev3D/",
    },
    {
        id: 2,
        title: "Voxel Benchmarks for 3D Pathfinding",
        description: "A set of three voxel benchmarks from varied applications for 3D pathfinding algorithms.",
        image: "/projects/voxel_benchmark.png",
        tags: ["Pathfinding", "3D", "Benchmark"],
        paperUrl: "https://ojs.aaai.org/index.php/SOCS/article/view/27283",
        gitUrl: "https://bitbucket.org/shortestpathlab/benchmarks/src/master/",
    },
    {
        id: 3,
        title: "Lower Bound on YouTube",
        description: "An educational YouTube channel focused on pathfinding algorithms and related topics.",
        image: "/projects/lowerbound.png",
        tags: ["YouTube", "Education", "Pathfinding"],
        paperUrl: "https://www.youtube.com/@lowerboundYT",
    }
]


export const ProjectsSection = () => {
    return <section id="projects" className="py-24 px-4 relative">
        <div className="containter mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                Featured <span className="text-primary">Projects</span>
            </h2>
            
            <p className="text-center mb-12 text-muted-foreground mb-12 max-w-2xl mx-auto">
                Here are some of my favourite projects. These projects showcase my enthusiasm 
                and expertise in developing and teaching advanced algorithms.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, key) => (
                    <div
                        key={key}
                        className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
                    >
                        <div className="h-52 overflow-hidden">
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                        </div>
                        
                        <div className="p-6">
                            <div className="flex flex-wrap gap-2 mb-4">
                                {project.tags.map((tag, index) => (
                                    <span
                                        key={tag + index}
                                        className="px-2 py-1 text-xs font-medium border rounded-full bg-primary/10 text-secondary-foreground"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                                
                            <h3 className="text-xl font-semibold mb-2">
                                {project.title}    
                            </h3>
                            <p className="text-sm text-muted-foreground mb-4">
                                {project.description}
                            </p>
                            <div className="flex justify-between items-center">
                                <div className="flex space-x-3">
                                    <a
                                        href={project.paperUrl}
                                        target="_blank"
                                        className="text-foreground/80 hover:text-primary transition-colors duration-300"
                                    >
                                        <ExternalLink size={20}/>
                                    </a>
                                    <a
                                        href={project.gitUrl}
                                        target="_blank"
                                        className="text-foreground/80 hover:text-primary transition-colors duration-300"
                                    >
                                        <Github size={20}/>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            
            {/* <div className="text-center mt-12">
                <a
                    className="cosmic-button w-fit flex items-center mx-auto gap-2"
                    target="_blank"
                    href="https://github.com/thomasnobesmonash"
                >
                    Check My GitHub <ArrowRight size={16} />
                </a>
            </div> */}
        </div>
    </section>
};