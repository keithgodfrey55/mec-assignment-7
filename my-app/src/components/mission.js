import React from "react";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";


class Mission extends React.Component{
   
      render(){
        
          return(
          <div>
              <Paper elevation={2}>
              <Typography>
                <h1>Mission Statement</h1>
                <p>
                {this.props.description}
                </p>
              </Typography>
            </Paper>
          </div>
          );
      }
  }
  Mission.propTypes={
    description: "Deliver the fastest possible assistance to people in need."
  }
  export default Mission;