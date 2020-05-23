import React, {Fragment} from "react";

class ProfileStatus extends React.Component {
    state = {
        status: '',
        editMod: false,
    };
    actEditMod = (e) =>{
        this.setState({editMod: true})

    };
    deactEditMod = (e) =>  {
        this.setState({editMod: false})
    }
    handleChange = (e) => {
        let value = e.target.value;
        this.setState({status: value})
    }

    render(){
        return(
            <Fragment>
                { !this.state.editMod &&
                    <div>
                        <span onClick={this.actEditMod.bind(this)}>{this.props.status}</span>
                    </div>}

               { this.state.editMod &&
                    <div>
                        <input autoFocus={true} onBlur={this.deactEditMod.bind(this)} type="text" onChange={this.handleChange.bind(this)}  value={this.props.status = "put your status"}/>
                    </div>}
            </Fragment>
        )
    }





}

export default  ProfileStatus;