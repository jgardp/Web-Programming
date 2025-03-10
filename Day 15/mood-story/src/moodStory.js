import {useState} from 'react';

export default function MoodStory(){

    const [mood, setMood] = useState("😑");
    const [description, setDescription] = useState("No Description");
    const [name, setName] = useState("No Song or Image")
    const [link, setLink] = useState("https://google.com");
    const [story, setStory] = useState("No Story");
    const [theme, setTheme] = useState("white");

    function happyMood() {
        setMood("😄")
        setDescription("The sound of the ambience from rain, campfires, and the ocean brings me great joy and relaxation.")
        setTheme("#f8e71c")
        setName("Ambience with Video Game Soundtrack")
        setLink("https://www.youtube.com/watch?v=mYEA5A0Bjyo")
        setStory("I remember the immense happiness I had as a kid when my brother bought a GameCube and let me play games on it. It was essentially where I found my love of games from even if we could only afford a few games at the time.")
    }

    function sadMood() {
        setMood("😔")
        setDescription("Somber music that reminds me of past regrets and current misfortunes.")
        setTheme("#4a90e2")
        setName("Space Song")
        setLink("https://www.youtube.com/watch?v=RBtlPT23PTM")
        setStory("Losing my first pet is one of my saddest memories. She was a creme colored miniature poodle name Muneca. She unfortunately passed away in a car accident. ")
    }

    function fearMood() {
        setMood("😨")
        setDescription("Spiders while less then in past still cause me an intial fear of getting bite.")
        setTheme("#ba68c8")
        setName("Spider Image")
        setLink("https://en.wikipedia.org/wiki/Spider#/media/File:Araneae3.jpg")
        setStory("During my teen years specifically before 2012 I felt alot of fear when I heard people saying the world would end in 2012.")
    }

    function angerMood() {
        setMood("😠")
        setDescription("While necessary my alarm clock forcing me awake brings me slight anger.")
        setTheme("#d0021b")
        setName("iPhone Radar Alarm Sound")
        setLink("https://www.youtube.com/watch?v=kcT-i9xzC-8")
        setStory("I rarely get angry nowadays but I did more when I was younger. When I was in elementary school a group of guys would not play with my friend and I got so mad at them I started a fight with one of them.")
    }

    function disgustMood() {
        setMood("🤮")
        setDescription("Mixing random foods that look unpleasant to even try.")
        setTheme("#7ed321")
        setName("Banana mixed with meat - Image")
        setLink("https://www.mashed.com/img/gallery/disgusting-foods-only-your-grandparents-ate/your-grandparents-ate-ham-and-banana-hollandaise-1599063005.jpg")
        setStory("Some of the bathrooms in the buses I have been on when I traveled with my family have been quite disgusting. I try to avoid them unless necessary.")
    }

    return(
        <div style={{textAlign:"center", padding:"20px", height: 600, fontFamily: "FreeMono, monospace", backgroundColor:theme}}>
            <h1>Isidro's Mood Story</h1>
            <p>Current Mood: {mood}</p>
            <p>Description: {description}</p>
            <p>Matching Song or Image: <a href={link} target="_blank" rel="noopener noreferrer" style={{color:"black", fontWeight:"bold"}}>{name}</a></p>
            <p>Story: {story}</p> 
            <button onClick={happyMood} style={{margin: "20px", padding: "10px", fontWeight:"bold", background: "#f8e71c", borderColor:"white", borderRadius: 5}}>Happiness</button>
            <button onClick={sadMood} style={{margin: "20px", padding: "10px", fontWeight:"bold", background: "#4a90e2", borderColor:"white", borderRadius: 5}}>Sadness</button>
            <button onClick={fearMood} style={{margin: "20px", padding: "10px", fontWeight:"bold", background: "#ba68c8", borderColor:"white", borderRadius: 5}}>Fear</button>
            <button onClick={angerMood} style={{margin: "20px", padding: "10px", fontWeight:"bold", background: "#d0021b", borderColor:"white", borderRadius: 5}}>Anger</button>
            <button onClick={disgustMood} style={{margin: "20px", padding: "10px", fontWeight:"bold", background: "#7ed321", borderColor:"white", borderRadius: 5}}>Disgust</button>
        </div>
    );
}