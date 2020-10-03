import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail'

const App = () => {
  return (
    <div className="ui container comments">
      {/* comment # 1 */}
      <CommentDetail author="Sam"/>

      {/* comment # 2 */}
      <CommentDetail author="Alex"/>

      {/* comment # 3 */}
      <CommentDetail author="Jane"/>

      {/* comment # 4 */}
      <CommentDetail author="John"/>
      
    </div>
  );
}

ReactDOM.render(<App />, document.querySelector('#root'))