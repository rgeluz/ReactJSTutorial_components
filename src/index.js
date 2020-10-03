import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail'

const App = () => {
  return (
    <div className="ui container comments">
      {/* comment # 1 */}
      <CommentDetail />

      {/* comment # 2 */}
      <CommentDetail />

      {/* comment # 3 */}
      <CommentDetail />

      {/* comment # 4 */}
      <CommentDetail />
      
    </div>
  );
}

ReactDOM.render(<App />, document.querySelector('#root'))