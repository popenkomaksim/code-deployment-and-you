import React from "react";
import { Deck, Slide } from "spectacle";
import colors from "./theme/colors";
import createTheme from "./theme";
import fonts from "./theme/fonts";

import('./images');

// import createTheme from "spectacle/lib/themes/default";
// require("spectacle/lib/themes/default/index.css");

require("normalize.css");
require("./theme/index.css");

const theme = createTheme(
  {
    primary: colors.blue,
    secondary: colors.dark,
    tertiary: colors.lightBlue,
    quartenary: colors.lightGray,
    white: colors.white,
    blue: colors.blue,
    green: colors.green,
    lightGray: colors.lightGray,
    bar: colors.green,
    text: colors.dark,
    dark: colors.dark,
    lightBlue: colors.lightBlue,
    red: colors.red,
    violet: colors.violet,
    yellow: colors.yellow
  },
  {
    primary: fonts.Lato,
    secondary: fonts.Lato,
    tertiary: fonts.Monospace
  }
);


const slidesImports = [
  import("./slides/Intro/"),
  // import("./components/DataArtSlide"),

  import("./slides/Intro/ButWhy"),
  import("./slides/Intro/WhatIsDeployRoutine"),
  import("./slides/Intro/WhatIsDeploy"),
  import("./slides/Intro/MyDeploymentPath"),
  import("./slides/Intro/TheStoryOfDeploy"),
  import("./slides/Intro/ManualDeploymentMeme"),

  import("./slides/Quotes/ManagingServers"),
  import("./slides/12factor"),
  import("./slides/12factor/KeyList"),

  import("./slides/Heroku"),
  import("./slides/Heroku/VisualiseBefore"),
  import("./slides/Heroku/VisualiseAfter"),
  import("./slides/Heroku/TerminalExample"),
  import("./slides/Heroku/GreatJob"),
  import("./slides/Heroku/Intro"),
  import("./slides/Heroku/Buildpacks"),
  import("./slides/Heroku/HowItHelps"),

  import("./slides/Quotes/AsEasyAs"),

  import("./slides/Dokku/Pre"),
  import("./slides/Dokku"),
  import("./slides/Dokku/Intro"),
  import("./slides/Dokku/TerminalExample"),
  import("./slides/Dokku/GreatJob"),
  import("./slides/Dokku/Plugins"),
  import("./slides/Dokku/Screencast"),

  import("./slides/Quotes/EasyLearn"),
  import("./slides/OtherProjects"),

  import("./slides/ImmutableInfrastructure"),

  import("./slides/Conclusion/no"),
  import("./slides/Conclusion/yes"),

  import("./components/ThankYouSlide"),

  import("./slides/Heroku/Pricing"),
  import("./slides/Heroku/Addons"),
  import("./slides/Intro/Joke"),
];

export default class Presentation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      slides: Array(slidesImports.length).fill(<Slide key="loading"/>)
    };
  }

  componentDidMount() {
    const importedSlides = [];
    Promise.all(slidesImports).then((slidesImportsResolved) => {
      slidesImportsResolved.forEach((slide) => {
        importedSlides.push(slide.default);
      });
      this.setState({ slides: importedSlides });
    });
  }

  render() {
    const { slides } = this.state;
    return (
      <Deck
        progress="bar"
        theme={theme}
        transition={["fade"]}
        transitionDuration={244}
      >
        {
          slides.map((slide, index) => {
            return React.cloneElement(slide, { key: index });
          })
        }
      </Deck>
    );
  }
}
