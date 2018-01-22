// Import React

import preloader from "spectacle/lib/utils/preloader";
import CodeSlide from "spectacle-code-slide";
import Terminal from "spectacle-terminal";
import Typist from "react-typist";
import React from "react";
import {
  CodePane,
  Deck,
  Heading,
  Link,
  ListItem,
  List,
  Slide,
  Layout,
  Fill,
  Image,
  BlockQuote,
  Quote,
  Cite
} from "spectacle";

import colors from "./theme/colors";
import createTheme from "./theme";
import fonts from "./theme/fonts";
import Maskym from "./components/Maskym";

// Import Spectacle Core tags

// Import image preloader util

// Import theme

// Require CSS
require("normalize.css");
require("./theme/index.css");

const images = {
  me: require("../assets/avatar.jpg"),
  ironmanThanks: require("../assets/ironman-thanks.gif"),
  compose: require("../assets/compose.gif"),
  mainCover: require("../assets/main-cover.jpg"),
  dataart: require("../assets/dataart.png"),
  development: require("../assets/development.jpg"),
  lowConnection: require("../assets/low-connectivity.jpg"),
  lowConnection2: require("../assets/low-connectivity-2.jpg"),
  websiteOpeningProcess: require("../assets/website_opening_process.png"),
  noWords: require("../assets/no-words.gif"),
  interactive: require("../assets/interactive.png"),
  split: require("../assets/split.gif"),
  codeSplittings: require("../assets/code-splitting.png"),
  giantVsRoute: require("../assets/giant-vs-route.png"),
  routesVsComponents: require("../assets/routes-vs-components.png"),
  happy: require("../assets/happy.gif"),
  commonChunks: require("../assets/common-chunks.png"),
  comomnChunksAsync: require("../assets/commonschunk-async-children.png"),
  analyze: require("../assets/analyze.jpg"),
  sourceMap: require("../assets/source-map-analizer.png"),
  realPhone: require("../assets/real-phone.jpg"),
  waterfalls: require("../assets/waterfalls.jpg")
};

preloader(images);

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

class Presentation extends React.Component {
  render() {
    return (
      <Deck
        transition={[]}
        theme={theme}
        transitionDuration={300}
        progress="bar"
      >
        <Slide
          transition={["fade"]}
          notes={`
            <ul>
              <li>Introduce yourself</li>
              <li>Development process could be tricky</li>
            </ul>
`}
          bgImage={images.mainCover.replace("/", "")}
          bgDarken={0.7}
        >
          <Heading size={1} textSize="2em" textColor="white">
            Dokku as Paas
          </Heading>
          <Heading
            size={6}
            style={{ marginTop: 50, marginBottom: 30 }}
            textColor="white"
          >
            Some cool meetup, DataArt, Kyiv
          </Heading>
          <div style={{ marginBottom: 20 }}>
            <Maskym photo={images.me.replace("/", "")} />
          </div>
          <Link
            textColor="white"
            href="http://example.com/link/to/presentation"
            target="__blank"
          >
            http://example.com/link/to/presentation
          </Link>
        </Slide>

        <Slide
          bgColor="white"
          notes={`
          <ul>
            <li>Technology Consultancy & Solution Desing</li>
            <li>Wroclaw & Lublin</li>
          </ul>
        `}
        >
          <Link
            alt="DataArt"
            href="http://dataart.com/"
            style={{ display: "block" }}
            target="__blank"
          >
            <Image width="70%" src={images.dataart.replace("/", "")} />
          </Link>
        </Slide>

        <Slide
          transition={["fade"]}
          bgColor="blue"
          notes={`
            Hands up who knows about Heroku?
            Who have ever used it in apps?
          `}
        >
          <Heading size={1} textColor="white">
            heroku overview
          </Heading>
          <Heading
            size={1}
            textColor="white"
            style={{ marginTop: "0.5em", fontSize: "2em" }}
          >
            🤔
          </Heading>
        </Slide>

        <Slide
          transition={["fade"]}
          bgColor="white"
          textColor="blue"
          notes={`
            <ul>
              <li>1</li>
              <li>2</li>
            </ul>
          `}
        >
          <BlockQuote>
            <Quote>
              Nobody said that managing own server-side applications and servers is easy.
            </Quote>
            <Cite>
              <Link
                href="https://webpack.js.org/"
                target="__blank"
                textColor="lightBlue"
              >
                Gregory Skovoroda
              </Link>
            </Cite>
          </BlockQuote>
        </Slide>


        <Slide
          transition={["fade"]}
          bgImage={images.ironmanThanks.replace("/", "")}
          bgDarken={0.55}
        >
          <Heading size={1} textColor="white" style={{ fontSize: "2.5em" }}>
            Thank you!
          </Heading>
          <List
            style={{ listStyle: "none", textAlign: "center" }}
            textColor="white"
          >
            <ListItem>
              <Link
                href="http://github.com/popenkomaksim"
                target="__blank"
                textColor="white"
              >
                Maksym Popenko
              </Link>
            </ListItem>
            <ListItem>
              <Link
                href="https://twitter.com/popenkomaksim"
                target="__blank"
                textColor="white"
              >
                @popenkomaksim
              </Link>
            </ListItem>
            <ListItem style={{ marginTop: 40 }}>
              <Link
                href="http://dataart.com"
                target="__blank"
                textColor="white"
              >
                <Image
                  width="40%"
                  src={images.dataart.replace("/", "")}
                  style={{ backgroundColor: "white" }}
                />
              </Link>
            </ListItem>
          </List>
        </Slide>
      </Deck>
    );
  }
}

export default Presentation;
