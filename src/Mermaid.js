import React from "react";
import mermaid from "mermaid";

mermaid.initialize({
  startOnLoad: true,
  theme: "default",
  themeVariables: {
    mainBkg: "#00DD0D", // Main
    noteBkgColor: "#00FF00", // Main
    fontSize: "20", // Main
    fontFamily: "Arial",  // Main
    primaryTextColor: "#FFF", // Affect State
    primaryColor: "#AA000A", // Affects State
    primaryBorderColor: "#00FF00", // Affect State
    secondaryColor: "#F0F", //  Affect State
    secondaryBorderColor: "#00FF00", // Affect State
    tertiaryColor: "#FF0", // Affect State
    tertiaryBorderColor: "#00FF00", // Affect State
    actorTextColor: "#000000",   // Sequence
    actorBkg: "#FF0000",   // Sequence
    actorBorder: "#00FF00",   // Sequence
    actorLineColor: "#0000FF",   // Sequence
    signalColor: "#FF0000",   // Sequence
    signalTextColor: "#00FF00",   // Sequence
    labelBoxBkgColor: "#FF0000",   // Sequence
    labelBoxBorderColor: "#00FF00",   // Sequence
    labelTextColor: "#0000FF",   // Sequence
    loopTextColor: "#FF0000",   // Sequence
    activationBorderColor: "#00F011",   // Sequence
    activationBkgColor: "#00F011",   // Sequence
    sequenceNumberColor: "#00F011",   // Sequence
    classText: "#FF0000", // Class
    labelColor: "#F0FF0F", // State
    altBackground: "#FF00FF" // State
  },
  fontFamily: "Inter",
  sequence: {
    showSequenceNumbers: true
  }
});

export default class Mermaid extends React.Component {
  componentDidMount() {
    mermaid.contentLoaded();
  }
  render() {
    return <div className="mermaid">{this.props.chart}</div>;
  }
}
