import React from 'react';
import resume from '../../Images/Resume.pdf'
import "./Resume.css"

const Resume = () => {
  return (
  <>
  <h1>Resume</h1>
<div className="resume" id="resume">
<button type="button" className="btn btn-info btn-lg secondary" data-toggle="modal" data-target="#myModal">Open Resume</button>
<div id="myModal" className="modal fade" role="dialog">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <button type="button" className="close" data-dismiss="modal">&times;</button>
        <h4 className="modal-title">Resume(Open in PC)</h4>
      </div>
      <div className="modal-body ">
        <embed src={resume} alt="resume" />
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
      </div>
    </div>

  </div>
</div>
    </div>
    </>
  )
}

export default Resume
