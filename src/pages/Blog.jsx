import { ThemeToggle } from "../components/ThemeToggle"
import { StarBackground } from "@/components/StarBackground"
import { NavbarBlog } from "@/components/blog/NavbarBlog"
import { Footer } from "@/components/Footer"
import { BlogHeroSection } from "../components/blog/BlogHeroSection"

export const Blog = () => {
    return <div className="min-h-screen bg-bacground text-foreground overflow-x-hidden">
        {/* Theme Toggle */}
        <ThemeToggle />
        
        {/* Background Effects */}
        <StarBackground />
        
        {/* Navbar */}
        <NavbarBlog />
        
        {/* Main Content */}
        <main>
            <BlogHeroSection />
            
        </main>
        
        
        {/* Footer */}
        <Footer/>
    </div>
}