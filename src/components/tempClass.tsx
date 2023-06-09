import React from "react";
import { PresentProps, PresentState } from "../types";

class TempClass extends React.Component<PresentProps, PresentState> {

    handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} : {name: string , value: string} = e.target;
    }

    render() {
      return (
        <React.Fragment>
            <input name="name" value={this.props.name} onChange={(e) => this.handleOnChange(e)}/>
        </React.Fragment>
      );
    }
  }

export default TempClass