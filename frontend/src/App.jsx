import Navbar from './components/navbar/navbar'
import Profile from './components/profile/profile'
import Chat from './components/chat/chat'
import Projects from './components/projects/projects'
import Experiences from './components/experiences/experiences'
import About from './components/about/about'
import './App.css'

function App() {
    return (
        <>
            <Navbar/>
            <Profile/>
            <Chat/>
            <About/>
            <div id="exp">
                <h2>Experiences</h2>
                <Experiences 
                    title="Research Assistant" 
                    info="DiSC Lab, Boston, MA" 
                    dates="June 2024 - Current" 
                    bullets={["Point 4", "Point 5", "Point 6"]}
                />
                <Experiences 
                    title="InfoSec Intern" 
                    info="IOMICS, Cambridge, MA" 
                    dates="May 2024 - March 2025" 
                    bullets={["Point 1", "Point 2", "Point 3"]}
                />
            </div>
            <div id="projects">
                <h2>Projects</h2>
                <Projects 
                    name="BoDS: A Benchmark on Data Sortedness" 
                    description="BoDS is a benchmark to compare the performance of database systems in terms of index construction and navigation costs when operaitng on data ingested with variable sortedness. The benchmark contains a synthetic data generator that quantifies sortedness using the (K,L)-sortedness metric to create differently sorted data collections." 
                    github="https://github.com/"/>
                <Projects 
                    name="DrouseY" 
                    description="Operating a motor vehicle while sleepy, also known as drowsy driving, is a prevalent problem among drivers in the United States. This drowsiness can be caused by lack of sleep, untreated sleep disorders, or even medication and alcohol. Additionally, drowsy driving is a major contributor to a large number of vehicle accidents. Since it is imperative to mitigate risk of accidents while driving, this project aims to create a device to detect signs of drowsiness in a driver and alert them." 
                    github="https://github.com/svuppala2006/DrouseY"/>
                    <Projects 
                    name="Style Sync" 
                    description="This repository contains the codebase for Style Sync, an application designed to help users coordinate outfits from their existing wardrobe.  Style Sync addresses the common problem of choosing what to wear by allowing users to input their clothing items and then suggesting outfits based on factors like formality, season, color, and pattern.  The goal is to streamline the process of selecting an outfit, helping users save time and feel confident in their attire for any occasion." 
                    github="https://github.com/svuppala2006/MyTestApp"/>
                    <Projects 
                    name="March Madness Bracket Predictor" 
                    description="March Madness, the NCAA Division I Men's Basketball Tournament, is known for its excitement and unpredictability.  Predicting the outcome of games in this tournament is a major challenge, even prompting a billion-dollar prize offer for a perfect bracket.  This project involved developing an algorithm to analyze team statistics and predict the results of March Madness matchups. The goal was to create a model that could accurately forecast game outcomes and provide insights into the probability of each team winning.  This project showcases the application of data analysis and predictive modeling to a complex and high-profile sporting event."
                    github="https://github.com/svuppala2006/March-Madness"/>
            </div>
        </>
    )
}

export default App