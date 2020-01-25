import React from 'react';
import Workspace from '../workspace/Workspace'

// HARDCODED (to be read from backend eventually)
const availLibs = [
  "Runes",
  "Curves",
  "Sounds",
  "Waves"
]
const defaultLibs = availLibs[0]
const availProgLangs = [
  "Source 1",
  "Source 2",
  "Source 3",
  "Source 4",
]
const defaultProgLang = availProgLangs[0];
const preloadedProg = "// Type your program in here\n\n";
const userGuideContent = {
  title: 'Welcome to the Playground',
  body: "The language Source is the official language of the textbook Structure and Interpretation of Computer Programs, JavaScript Adaptation. You have never heard of Source? No worries! It was invented just for the purpose of the book. Source is a sublanguage of ECMAScript 2016 (7th edition) and defined in the documents titled 'Source §x', where x refers to the respective textbook chapter. For example, Source §3 is suitable for textbook chapter 3 and the preceeding chapters. The playground comes with an editor and a REPL, on the left and right of the screen, respectively. You may customise the layout of the playground by clicking and dragging on the right border of the editor, or the top border of the REPL."
}
const availToolkits = [
  "Terminal",
  "Environment Visualizer",
  "Substituter"
]


class Playground extends React.Component {

  render() {
    return (
      <Workspace
        availLibs={availLibs}
        defaultLibs={defaultLibs}
        availProgLangs={availProgLangs}
        defaultProgLang={defaultProgLang}
        availToolkits={availToolkits}
        preloadedProg={preloadedProg}
        userGuideContent={userGuideContent}
      />
    )
  }
}

export default Playground;
