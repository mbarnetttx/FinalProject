import React from "react";

function Form(){
    return (
    
        <div className="box">  

                <div className="field is-horizontal">
                <div className="field-label is-normal">
                    <label className="label">Event Name</label>
                </div>
                <div className="field-body">
                    <div className="field">
                    <div className="control">
                        <input class="input" type="text" placeholder="e.g. Sack Lunches"/>
                    </div>
                    </div>
                </div>
                </div>

                <div className="field is-horizontal">
                <div className="field-label is-normal">
                    <label className="label">Event Description</label>
                </div>
                <div className="field-body">
                    <div className="field">
                    <div className="control">
                        <textarea className="textarea" id="name" placeholder="Write as much information to help those in need better."></textarea>
                    </div>
                    </div>
                </div>
                </div>


                <div className="field is-horizontal">
                <div className="field-label">
                     <label className="label">Date of Event</label>
                </div>
                
                <div className="field-body">
                    <div className="field">
                    <div className="control">
                             <input className="input" type="text" id="date" placeholder="MM/DD/YYYY"/>  
                    </div>
                    </div>
                </div>
                </div>

                <div className="field is-horizontal">
                <div className="field-label">
                        <label className="label"># of Spots Avaiable</label>
                </div>
                
                <div className="field-body">
                    <div className="field">
                    <div className="control">
                         <input className="input" type="text" id="number" placeholder="Amount of items (e.g. 15)"/>
                    </div>
                    </div>
                </div>
                </div>

                <div className="field is-horizontal">
                <div className="field-label">
                    {/* <!-- Left empty for spacing --> */}
                </div>
                
                <div className="field-body">
                    <div className="field">
                    <div className="control">
                    <div className="control">
                        <div className="select" id="pickDrop">
                            <select>
                            <option>Pick-Up</option>
                            <option>Drop-Off</option>
                            </select>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>

                <div className="field is-horizontal">
                <div className="field-label">
                    {/* <!-- Left empty for spacing --> */}
                </div>
                
                <div className="field-body">
                    <div className="field">
                    <div className="control">
                        <button className="button is-success" id="addButton">
                        Add Donation Event
                        </button>
                    </div>
                    </div>
                </div>
                </div>

        </div>
   
    );
}

export default Form;