import React, { Component} from 'react';

import Modal from 'react-responsive-modal';

export default class ModalBox extends React.Component {
    state = {
      open: false,
    };
   
    onOpenModal = () => {
      this.setState({ open: true });
    };
   
    onCloseModal = () => {
      this.setState({ open: false });
    };
   
    render() {
      const { open } = this.state;
      return (
        <div>
          <div onClick={this.onOpenModal} style={{color:'white'}} className="btn-download btn-lg btn btn-primary btn-wire">Join Us</div>
          <Modal open={open} onClose={this.onCloseModal} little>
            <h3>Test title</h3>
            <p>
                vc mcx jsc jkckjl kjj jkj j jsj j jdd v sws sslk d jd d s jd d dm ws s dsd  kjs skwkjws  s kls djk jvd jd jsd d ldks kls kddkl' kl' kld 'kl 'klsfdj vb fghygh h jdhg  j hh uihge uhq h bvjhbvuq fuhyruyt b jbv jbdv hufr8ybv bjkv vjig89eryghe jkv hjkhijjg gdh grhj asmn vbfd ghuruenv vjgbueor ht nvu huh8ru9ufjb vwufsdh gjxbg hp u9043hg qj  ugf  ogognj
            </p>
          </Modal>
        </div>
      );
    }
  }
