import React from "react";

function Form(){
    return (
    
        <div class="box">  

                <div class="field is-horizontal">
                <div class="field-label is-normal">
                    <label class="label">Event Name</label>
                </div>
                <div class="field-body">
                    <div class="field">
                    <div class="control">
                        <input class="input" type="text" placeholder="e.g. Partnership opportunity"/>
                    </div>
                    </div>
                </div>
                </div>

                <div class="field is-horizontal">
                <div class="field-label is-normal">
                    <label class="label">Event Description</label>
                </div>
                <div class="field-body">
                    <div class="field">
                    <div class="control">
                        <textarea class="textarea" placeholder="Explain how we can help you"></textarea>
                    </div>
                    </div>
                </div>
                </div>


                <div class="field is-horizontal">
                <div class="field-label">
                     <label class="label">Date of Event</label>
                </div>
                
                <div class="field-body">
                    <div class="field">
                    <div class="control">
                        <button class="button is-primary">
                        Add Donation Event
                        </button>
                    </div>
                    </div>
                </div>
                </div>

                <div class="field is-horizontal">
                <div class="field-label">
                        <label class="label"># of Spots Avaiable</label>
                </div>
                
                <div class="field-body">
                    <div class="field">
                    <div class="control">
                        <button class="button is-primary">
                        Add Donation Event
                        </button>
                    </div>
                    </div>
                </div>
                </div>

                <div class="field is-horizontal">
                <div class="field-label">
                    {/* <!-- Left empty for spacing --> */}
                </div>
                
                <div class="field-body">
                    <div class="field">
                    <div class="control">
                    <div class="control">
                        <div class="select">
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

                <div class="field is-horizontal">
                <div class="field-label">
                    {/* <!-- Left empty for spacing --> */}
                </div>
                
                <div class="field-body">
                    <div class="field">
                    <div class="control">
                        <button class="button is-primary">
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