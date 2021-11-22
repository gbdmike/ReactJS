import { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleShowProfile } from "../store/profile/actions";




export const ProfilePage = () => {
    const {showProfile, name} = useSelector((state) => state);
    const dispatch = useDispatch();
        
    const setShowProfile = useCallback(() => {
        dispatch(ShowProfile);
    }, [dispatch]);

    return (
        <div>
            <p>Profile</p>
            <input 
                type="checkbox"
                checked={showProfile}
                value={showProfile}
                onChange={setShowProfile}
            />
            <p>Show Profile</p>
            {showProfile && <div>{name}</div>}
        </div>
    )
}