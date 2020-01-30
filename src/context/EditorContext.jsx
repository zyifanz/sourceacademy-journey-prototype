import React from 'react';

const EditorContext = React.createContext({
  editorTheme: "",
  editorFontSize: 0,
  availThemes: [],
  availFontSizes: [],
  changeEditorTheme: () => {},
  changeEditorFontSize: () => {}
});

export default EditorContext;
