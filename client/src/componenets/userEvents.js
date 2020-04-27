import React from "react";

function userEvents() {
    return (
        
        <nav class="panel">
        <p class="panel-heading">
          Repositories
        </p>
        <div class="panel-block">
          <p class="control has-icons-left">
            <input class="input" type="text" placeholder="Search"/>
            <span class="icon is-left">
              <i class="fas fa-search" aria-hidden="true"></i>
            </span>
          </p>
        </div>
        <p class="panel-tabs">
          <div class="is-active">All</div>
          <div>Public</div>
          <div>Private</div>
        </p>
        <div class="panel-block is-active">
          <span class="panel-icon">
            <i class="fas fa-book" aria-hidden="true"></i>
          </span>
          bulma
        </div>
        <div class="panel-block">
          <span class="panel-icon">
            <i class="fas fa-book" aria-hidden="true"></i>
          </span>
          marksheet
        </div>
        <div class="panel-block">
          <span class="panel-icon">
            <i class="fas fa-book" aria-hidden="true"></i>
          </span>
          minireset.css
        </div>
        <div class="panel-block">
          <span class="panel-icon">
            <i class="fas fa-book" aria-hidden="true"></i>
          </span>
          jgthms.github.io
        </div>
        <div class="panel-block">
          <span class="panel-icon">
            <i class="fas fa-code-branch" aria-hidden="true"></i>
          </span>
          daniellowtw/infboard
        </div>
        <div class="panel-block">
          <span class="panel-icon">
            <i class="fas fa-code-branch" aria-hidden="true"></i>
          </span>
          mojs
        </div>
        <label class="panel-block">
          <input type="checkbox"/>
          remember me
        </label>
        <div class="panel-block">
          <button class="button is-link is-outlined is-fullwidth">
            Reset all filters
          </button>
        </div>
      </nav>


    );
}

export default userEvents;