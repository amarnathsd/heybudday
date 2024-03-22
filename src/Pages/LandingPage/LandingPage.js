// / LandingPage.js

import React from 'react';
import {useState} from "react";
import './LandingPage.css';
import { useNavigate } from 'react-router-dom';
import "./LandingPage.css"
import { signInWithPopup } from "firebase/auth";
import {auth,db,provider} from '../../firebase';
import { doc, setDoc, getDoc } from "firebase/firestore";
import { toast } from 'react-toastify';


const LandingPage = () => {
  const [loading,setLoading]=useState(false);


  const navigate = useNavigate();
  const handleLoginNavigation = () => {
    navigate('/login'); 
  };

  //Google Authentication-------
  function handleGoogleAuth(e){
    e.preventDefault();
    setLoading(true);
    try{
        signInWithPopup(auth, provider)
        .then((result) => {
            const user = result.user;
            navigate("/dashboard");
            createDoc(user);
            toast.success("Successful!")
            setLoading(false);
        }).catch((error) => {
            toast.error(error.message);
            setLoading(false);
        });
    }catch(e){
        toast.error(e.message)
        setLoading(false);
    }
}


async function createDoc(user){
    setLoading(true);
    if(!user)return;
    const userRef =doc(db,"users",user.uid);
    const userData=await getDoc(userRef);
    if (!userData.exists()){
        const {displayName,email,photoURL}=user;
        const createdAt=new Date();
        try{
            await setDoc(doc(db, "users", user.uid),{
                name:displayName?displayName:"",
                email,
                photoURL:photoURL?photoURL:"",
                createdAt,
            });
            setLoading(false);

        }catch(e){
            toast.error(e.message);
            setLoading(false);
        }
    }else{
        setLoading(false);
    }
}
 const handelsignup = () =>{
  navigate('/signup')
 }

  return (
    <div className="two-grid-page">
      <div className="left-section">
        <img src="https://s3-alpha-sig.figma.com/img/fc73/ba7a/f1e6944d750f97b53adecbabca7ffd40?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=XOhFBHcQxGnqkwZ0W3Op8w6D9zFfia481JzEOy~LggQVKTARXWUnvwlvszjrcImMZA5UlHywqAyukzRMiU4esZNXqaoNS3oLms1IYA6wu7bsmkwqYK19G-3S2sieFm~sB0mN1S8aiDpbrX2faWcwzFTbEQnKx~Jwnlmxmc27A5w0ct0fa9XXyPFuHx-71TwmtCAFhxqCeECStEGI7eE-adNsPANR7MYKJmMR081d0-9yNL0KUwvxzAnPF80oPe0RS8J0bJiqJ4pQORY3KqAipProAit5k-lV97Sj53Lpxk3h~WJF-HkN8XD93ghtgLlv1a9ruicBmzqwkMZiFlsJqQ__" alt="Twitter Logo" />
      </div>
      <div className="right-section">
        <img src="https://s3-alpha-sig.figma.com/img/50a0/05ad/f774baf026abf0bd326821757f2c1eff?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mm~nRHy0ENWlr-PEClkDuKz8fMvkMeopWFhfB~yr2boWos6Z2aNiNcZmOPzLx67~b2r5lWUZb-TTqGv5yq5tuytZkHfMWLOiCR41vdplU1rIL~0w~cdxUh8FkfNUsbZHoQ~PgyiJEEbGwN38GvyI9ixl-KZj5kns5c9lknavf4hJYTJ2-83tgQvkoLMPB042SGg69x6YKI1WQlNLHHuWWr-J3XxmKoqiZSfiEkOtvSTKsZ2mtt6jliy04DiN-bCSdSd-ktRFxHEvGSGAjSjZx1O9Km82MbKWvKtwG05rPWtMt5ryzQ75iAmMJxBnt1GW~2AzziIgc~8~ReUO5SFQWQ__" alt="Twitter Logo" className="twitter-logo-small" />
        <div className="content">
          <h2>Happening now</h2>
          <p>Join Twitter today</p>
        </div>
        
        <div className="buttons">
          <button onClick={handleGoogleAuth}>Sign in with Google</button>
        </div>
        {/* <div className="buttons">
          <button onClick={handleGoogleAuth}>Sign in with Apple</button>
        </div> */}
        <div className="buttons">
          <button onClick={handelsignup}>Sign in with phone or email</button>
        </div>
        <div className="buttons">
        <button  onClick={handleLoginNavigation}>Login</button>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;