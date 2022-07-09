import React, { useContext } from 'react';
import { Button, Image, Nav, OverlayTrigger, Popover } from 'react-bootstrap';
import toast from 'react-hot-toast';
import { UserContext } from '../../App';
    

const ProfilePopper = () => {
    const { loggedInUser: { name, email }, setLoggedInUser } = useContext(UserContext);

    return (
          <OverlayTrigger trigger="click" rootClose key="bottom" placement="bottom"
            overlay={
                <Popover id="popover-positioned-bottom">
                    <div className="d-flex justify-content-center">
                       
                    </div>
                    <Popover.Content>
                        <strong className="text-center d-block">{name}</strong>
                        <strong className="text-center d-block">{email}</strong>
                       
                    </Popover.Content>
                </Popover>
            }
        >
            <Nav.Link className="p-0 ">
            </Nav.Link>
        </OverlayTrigger>
    );
};

export default ProfilePopper;