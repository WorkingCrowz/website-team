import React, {useRef} from 'react';
import Email from 'emailjs-com';

export default function Doubts() {
    const form = useRef();
    function sendmail(e)
    {
        e.preventDefault();

    Email.sendForm('service_m50kwko', 'template_urnmtta', form.current, 'user_pdFafasVS3uPo8BGz2WAB')
      .then((result) => {
          alert("Mail received");
      }, (error) => {
        alert(error.text);
      });
      document.getElementById("doubtForm").reset();
    }
    return (
        <div className="modal fade" id="modalDoubtForm" tabindex="-1" role="dialog" aria-labelledby="myModalLabel"
            aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header text-center">
                        <h4 className="modal-title w-100 font-weight-bold text-dark">Contact Us</h4>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <form ref={form} onSubmit={sendmail} id="doubtForm">
                    <div className="modal-body mx-3">
                        <div className="md-form mb-5">
                            <i className="fas fa-user prefix grey-text"></i>
                            <input type="text" id="form34" className="form-control validate" name="name"/>
                            <label data-error="wrong" data-success="right" for="form34">Name</label>
                        </div>

                        <div className="md-form mb-5">
                            <i className="fas fa-envelope prefix grey-text"></i>
                            <input type="email" id="form29" className="form-control validate"/>
                            <label data-error="wrong" data-success="right" for="form29" name="email">Email</label>
                        </div>

                        <div className="md-form mb-5">
                            <i className="fas fa-phone-alt prefix grey-text"></i>
                            <input type="text" id="form32" className="form-control validate"/>
                            <label data-error="wrong" data-success="right" for="form32" name="mobile">Mobile</label>
                        </div>

                        <div className="md-form">
                            <i className="fas fa-pencil prefix grey-text"></i>
                            <textarea type="text" id="form8" className="md-textarea form-control"
                                placeholder="Type Your Message Here" rows="1" name="message"></textarea>
                            <label data-error="wrong" data-success="right" for="form8"></label>
                        </div>

                    </div>
                    <div className="modal-footer d-flex justify-content-center">
                        <button className="btn textsemibold btn-ylw" >Submit
                            <i className="fas fa-paper-plane-o ml-1"></i></button>
                    </div>
                    </form>
                </div>
            </div>
        </div>
    )
}