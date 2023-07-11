import SocialIcon from "./components/SocialIcon";

function App() {
    const socialItems = ["facebook", "instagram", "twitter"];
    let accountName = "JohnWick"
    return (
        <div className="App">
          { socialItems.map((item, index) => (
                <SocialIcon socialMedia={item} accountName={accountName}/>))
          }
        </div>
    );
}

export default App;

