import SplitText from "./prebuilt/SplitText";
import DecryptedText from "./prebuilt/DecryptedText";
import { useState } from "react";
import ProfilePicture from "../assets/profile-picture.jpg"; // Adjust the path as needed

function Header() {
  const [showDecryptedText, setShowDecryptedText] = useState(false);

  return (
    <div className="w-full h-screen flex justify-center bg-slate-950 text-white">
      <div className="mt-40">
        <div className="flex justify-center mb-5">
          <img className="w-50 h-50 rounded-full" src={ProfilePicture} />
        </div>
        <div>
          <SplitText
            text="Rupert De Ruyver"
            className="text-8xl font-semibold text-center"
            delay={35}
            onLetterAnimationComplete={() => {
              setShowDecryptedText(true);
            }}
          />
        </div>
        {showDecryptedText && (
          <div className="text-right text-3xl">
            <DecryptedText
              text="Student Indsutrieel Ingenieur Informatica"
              speed={10}
              maxIterations={50}
              sequential={true}
              animateOn="view"
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default Header;
