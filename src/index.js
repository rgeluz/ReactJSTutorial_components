import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail'
import ApprovalCard from './ApprovalCard'

const App = () => {
  return (
    <div className="ui container comments">
      
      <ApprovalCard/>

      {/* comment # 1 */}
      <CommentDetail 
        image={faker.image.avatar()} 
        author="Sam" 
        timeAgo="Today at 4:54PM" 
        comment="hi there" 
      />

      {/* comment # 2 */}
      <CommentDetail 
        image={faker.image.avatar()}  
        author="Alex" 
        timeAgo="Today at 2:00AM" 
        comment="hey whats up"
      />

      {/* comment # 3 */}
      <CommentDetail 
        image={faker.image.avatar()}  
        author="Jane" 
        timeAgo="Yesterday at 5:00PM" 
        comment="hi everyone"
      />

      {/* comment # 4 */}
      <CommentDetail 
        image={faker.image.avatar()}  
        author="John" 
        timeAgo="Yesterday at 4:45PM" 
        comment="hey whats up everyone"
      />
      
    </div>
  );
}

ReactDOM.render(<App />, document.querySelector('#root'))