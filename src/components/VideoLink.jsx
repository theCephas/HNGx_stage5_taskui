import { Link } from "react-router-dom";
import { close_icon, kite_icon } from "../lib/image";

export const VideoLink = () => {
  return (
    <>
      <div className="videolink_sec relative">
        <div className="videolink_inner center_element">
          <div className="videolink_top">
            <div className="videolink_top_inner">
              <Link to={"/"}>
                <img src={close_icon} alt="x-icon" className="x_icon" />
              </Link>

              <img src={kite_icon} alt="kite_icon" className="kite_icon" />

              <p>
                Your video link has been sent to{" "}
                <span className="font-medium">johnmark@gmail.com</span>
              </p>
            </div>
          </div>

          <div className="videolink_bottom">
            <div className="videolink_bottom_inner">
              <p>
                Would you need to view this video later? Save to your account
                now!
              </p>
              <Link to={"/webhome"}>
                <button className="btn_save">Save Video</button>
              </Link>

              <p>
                <span className="text-[#7E7E7E] ">
                  Don&apos;t have an account?
                </span>{" "}
                <Link to={"/"}>
                  <span className="underline cursor-pointer">
                    Create Account
                  </span>
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
