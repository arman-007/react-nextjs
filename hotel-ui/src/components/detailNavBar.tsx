import React from "react";

export default function DetailNavBar() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-xl-12">
          <div className="tab flex gap-1 bold text-3">
            <a className="active-tab no-link padding" href="#">
              Overview
            </a>
            <a className="no-link padding" href="#">
              Amenities
            </a>
            <a className="no-link padding" href="#">
              Policies
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
