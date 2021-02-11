import React from 'react';

export class Todo extends React.Component {

    constructor(props) {
        super(props);
    }   

    render() {
        
        return (  
          //Add your code here to represent a TODO
          <div>
              <p>Text:{this.props.text} Priority:{this.props.priority} Date:{this.props.dueDate}</p>
          </div>
        );
    }

}
