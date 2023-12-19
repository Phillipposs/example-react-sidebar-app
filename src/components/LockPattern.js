import React from "react";
import PatternLock from "react-pattern-lock";
function LockPattern(props) {
  return (
    <div>
      <PatternLock
        width={300}
        pointSize={15}
        size={3}
        path={this.state.path}
        onChange={(pattern) => {
          this.setState({ path: pattern });
        }}
        onFinish={() => {
          // check if the pattern is correct
        }}
      />
    </div>
  );
}

export default LockPattern;
