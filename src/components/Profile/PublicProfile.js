import React, { useEffect } from 'react';
import { setTitle } from "../../utils/componentHelpers";

const PublicProfile = ({ user, profile }) => {

    useEffect(() => {
        setTitle(`profile : ${profile.username}`);
    }, []);

    return (
        <div className="profile">
            public profile
        </div>
    );
};

export default PublicProfile;