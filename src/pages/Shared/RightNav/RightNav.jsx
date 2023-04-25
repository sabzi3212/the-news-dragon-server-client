import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import { FaBeer, FaFacebook, FaGithub, FaGoogle, FaInstagram, FaTwitter } from 'react-icons/fa';
import QZone from '../QZone/QZone';
import bg from '../../../assets/bg.png'


const RightNav = () => {
    return (
        <div>
            <h2>Login with</h2>
            <Button className='d-block mb-2' variant="outline-primary"><FaGoogle /> Login with google</Button>
            <Button variant="outline-secondary"><FaGithub /> Login with github</Button>
            <div>
                <h2>Find Us On</h2>
                <ListGroup>
                    <ListGroup.Item className='shadow-sm'><FaFacebook />FaceBook </ListGroup.Item>
                    <ListGroup.Item className='shadow-sm'><FaTwitter />Twitter </ListGroup.Item>
                    <ListGroup.Item className='shadow-sm'><FaInstagram /> Instagram</ListGroup.Item>

                </ListGroup>
            </div>
            <div className='mt-3'>
                <QZone></QZone>
            </div>
            <div>
                <img src={bg} alt="" />

            </div>

        </div>
    );
};

export default RightNav;