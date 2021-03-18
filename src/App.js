import React, {Component} from 'react';
import marked from 'marked';
import defaultContent from './defaultContent';
import './App.css';

class App extends Component {  
  constructor(props) {
    super(props);    
    this.state = {
      value: defaultContent};
    this.handleChange = this.handleChange.bind(this);
    this.createMarkup = this.createMarkup.bind(this);
  }
  
componentDidMount() {}
  handleChange(e) {
    this.setState({
      value: e.target.value 
    });
  }   
  createMarkup(str) {
    marked.setOptions({breaks: true});
    return {
      __html: marked(str)
    };
  }
  render(){
    return (<div class = "wrap">
          <div class = "app_title"><h1>Markdown Previewer</h1></div>
          <Editor value= {this.state.value} onChange ={this.handleChange}/>
          <Preview  markup = {this.createMarkup(this.state.value)}/>
          <footer>by Annestezia</footer>
  </div>
    );
  }
}

const Editor = (props)=> {
    return (
      <textarea id="editor" classNames = "column" name="editor" cols="1" rows="15" onChange = {props.onChange}>{props.value}</textarea>
    );
};

const Preview = (props)=>{
  return <div id = "preview" className = "column" dangerouslySetInnerHTML={props.markup} />;
};

export default App;