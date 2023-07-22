import React, { Component } from "react";
import "./App.css";
import Mog5 from "./images/Mog5.jpeg"; // Chemin vers votre image

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      person: {
        fullName: "Mohamed Gassama",
        bio: "Je suis un apprenti développeur web chez Gomycode",
        imgSrc: Mog5, // Utilisation de l'image importée
        profession: "Profession: Software Engineer Junior",
      },
      show: true,
    };
  }

  toggleShow = () => {
    this.setState((prevState) => ({
      show: !prevState.show,
    }));
  };

  render() {
    const { fullName, bio, imgSrc, profession } = this.state.person;
    const { show } = this.state;

    return (
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="profile">
              <button
                className="btn btn-primary mb-3"
                onClick={this.toggleShow}
              >
                {show ? "Cacher le profil" : "Afficher le profil"}
              </button>
              {show && (
                <div>
                  <h1 className="text-center">{fullName}</h1>
                  <p>{bio}</p>
                  <img
                    className="rounded-circle mx-auto d-block mb-3"
                    src={imgSrc}
                    alt={fullName}
                  />
                  <p className="text-center">{profession}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
