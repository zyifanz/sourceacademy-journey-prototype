import React from 'react';
import { Menu, Dropdown } from 'semantic-ui-react';


class Toolbar extends React.Component {

  render() {
    const {
      runProgram,
      updateActiveLibs,
      updateActiveProgLang,
      activeLibs,
      activeProgLang,
      availLibs,
      availProgLangs
    } = this.props;

    return (
      <Menu color='grey' inverted style={{ borderRadius:"0px" }}>
        <Menu.Item
          name='Run'
          icon='play'
          onClick={runProgram}
        />
        <Dropdown item text={activeLibs}>
          <Dropdown.Menu>
            {availLibs.map(lib => {
              return (
                <Dropdown.Item onClick={() => updateActiveLibs(lib)} key={lib}>
                  {lib}
                </Dropdown.Item>
              );
            })}
          </Dropdown.Menu>
        </Dropdown>
        <Dropdown item text={activeProgLang}>
          <Dropdown.Menu>
            {availProgLangs.map(lang => {
              return (
                <Dropdown.Item onClick={() => updateActiveProgLang(lang)} key={lang}>
                  {lang}
                </Dropdown.Item>
              );
            })}
          </Dropdown.Menu>
        </Dropdown>
        <Menu.Item
          name='Share'
          icon='share'
        />
      </Menu>
    )
  }
}

export default Toolbar;
