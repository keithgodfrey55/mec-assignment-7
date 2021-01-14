import React from "react";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";

class Nacc extends React.Component {
  render() {
    return (
      <div>
        <Paper elevation={2}>
          <Typography>
            <h1>{this.props.title.header}</h1>
            <h3>{this.props.title.tag}</h3>
            <ul>
              <li>Inteliband Media Helpline (408) 974-2042</li>
              <li>Inteliband Software Upgrade Center (800) 840-8436</li>
              <li>
                Reseller Referral (Reseller, Trainers, Consultants) (800)
                564-9412
              </li>
            </ul>
            <h3>{this.props.title.tag2}</h3>
            <ul>
              <li>
                Inteliband Store (Consumer and Education Individuals) (800)
                857-3438
              </li>
            </ul>
            <h3>{this.props.title.tag3}</h3>
            <ul>
              <li>
                Inteliband Store (Consumer and Education Individuals)
                (001-800-857-3438)
              </li>
              <li>Inteliband Store (Small Business) 001-800-857-3438</li>
            </ul>
          </Typography>
        </Paper>
      </div>
    );
  }
}
export default Nacc;
