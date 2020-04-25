import React,{Component} from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import * as firebase from 'firebase'; 
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import FlatButton from 'material-ui/FlatButton';
import Paper from 'material-ui/Paper';
import TimePicker from 'material-ui/TimePicker';
import DatePicker from 'material-ui/DatePicker';
import Logout from "../logout"
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import{
BrowserRouter as Router,
Route,
Link
}from 'react-router-dom';
export default class UserFeedback extends Component{
constructor(props){
    super(props);
    this.state={
       my_booking:[],
       Response:null,
       user:'',
       key:''
    }
}
componentDidMount(){
  firebase.auth().onAuthStateChanged(() => {
    if(firebase.auth().currentUser){
     var userId = firebase.auth().currentUser.uid;
       firebase.database().ref('Feedback/').on('value',snap => {
      var userobj=snap.val();
      var key = Object.keys(userobj);
      var feedback=[];
     let  query=''
      this.setState({
          key:key
      })
    for(var i=0;i<key.length;i++){
        var k=key[i];
            feedback.push({
                query:userobj[k].FeedBack
            })
       }
   this.setState({
       my_booking:feedback
   })
       })

      }
    })

}
Delete(index){
 
firebase.database().ref('Feedback/'+this.state.key[index]).remove();

 }


render(){
    return(
            <div>           
              <MuiThemeProvider>
                  <div>
                    <h3>User Feedback</h3>
                      { this.state.my_booking.map((item, index) => (
                       <div>
                    <Paper style={style} zDepth={4} rounded={false} id="abc" >
                   
                     <p> FeedBack : {item.query}</p> 

                     <RaisedButton label="Delete" primary={true}  onClick={this.Delete.bind(this,index)}/>
                   
                    </Paper>
                       </div>
                     ))}
                            
                </div>
            </MuiThemeProvider>
         </div>
  
  )}
}
const style = {
  width:1000,
  margin:5,
  display: 'inline-block',
   
};

