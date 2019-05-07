import React from 'react'

const Auth = () => {
    return (
    <div className="columns is-centered is-desktop">
        {/*<div className="column is-half has-background-white">*/}
            {/*<div className="field">*/}
                {/*<label className="label">Username</label>*/}
                {/*<div className="control has-icons-left has-icons-right">*/}
                    {/*<input className="input " type="email" placeholder="Email"/>*/}
                {/*<span className="icon is-small is-left">*/}
                  {/*<i className="fas fa-user"/>*/}
                {/*</span>*/}

                {/*</div>*/}
            {/*</div>*/}
            {/*<div className="field">*/}
                {/*<label className="label">Password</label>*/}
                {/*<div className="control has-icons-left has-icons-right">*/}
                    {/*<input className="input " type="password" placeholder="Password"/>*/}
                {/*<span className="icon is-small is-left">*/}
                  {/*<i className="fas fa-lock"/>*/}
                {/*</span>*/}

                {/*</div>*/}
            {/*</div>*/}


        {/*</div>*/}
        <div className="column is-half ">
        <div className="section">
            <div className="field">
                <label className="label">Username</label>
                <div className="control has-icons-left has-icons-right">
                    <input className="input " type="email" placeholder="Email"/>
                    <span className="icon is-small is-left">
                  <i className="fas fa-user"/>
                </span>

                </div>
            </div>
            <div className="field">
                <label className="label">Password</label>
                <div className="control has-icons-left has-icons-right">
                    <input className="input " type="password" placeholder="Password"/>
                    <span className="icon is-small is-left">
                  <i className="fas fa-lock"/>
                </span>

                </div>
            </div>
            <button className="button is-primary is-centered has-text-centered">Login</button>

        </div>
        </div>



    </div>




    )
}

export default Auth;