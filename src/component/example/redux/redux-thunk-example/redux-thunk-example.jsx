import React from "react";
import {withRouter} from "react-router-dom";
import UserList from "src/component/example/redux/redux-thunk-example/users/user-list";

function ReduxThunkExample(props) {
    return <div>
        redux-thunk-example:
        <UserList/>
    </div>
}

export default withRouter(ReduxThunkExample)