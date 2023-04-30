import React from "react";
import { Button, ListGroup } from "react-bootstrap";
import { FaGithub, FaGoogle, FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import Qzone from "../Qzone/Qzone";
import bg from '../../../assets/bg.png'

const RightNav = () => {
  return (
    <div>
      <h4>Login With</h4>
      <Button className="my-2" variant="outline-primary">
        <FaGoogle /> Login with Google
      </Button>
      <Button variant="outline-secondary">
        <FaGithub></FaGithub> Login with Github
      </Button>

      <div>
        <h4 className="mt-4">Find us on</h4>
        <ListGroup>
          <ListGroup.Item><FaFacebook></FaFacebook> facebook</ListGroup.Item>
          <ListGroup.Item><FaTwitter></FaTwitter> twitter </ListGroup.Item>
          <ListGroup.Item><FaInstagram></FaInstagram> instagram </ListGroup.Item>
        </ListGroup>
      </div>

      <Qzone></Qzone>

      <div>
        <img src={bg} alt="" />
      </div>
    </div>
  );
};

export default RightNav;
