import React from "react";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

class Feedback extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          text: "Tell us how we’re doing. Select the appropriate feedback option (we read everything, but can’t always respond):"
        };
    }
    render(){
        return(
            <div>
            <Paper elevation={2}>
              <Typography>
                <h1>Feedback</h1>
                <p>
                  {this.state.text}
                </p>
              </Typography>
            </Paper>
            </div>
        );
    }
}

export default Feedback;