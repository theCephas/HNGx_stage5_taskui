import { BsChevronDown } from "react-icons/bs";
import {
  copy_icon,
  edit_icon,
  fb_icon,
  telegram_icon,
  video_img,
  whatsapp_icon,
} from "../lib/image";
import { AppHomeHeader } from "./AppHomeHeader";

const AppHome = () => {
  return (
    <>
      {/* APP_HOME_SEC */}
      <div className="app_home home_container">
        <div className="app_home_inner container_main">
          {/* APP_HOME_HEADER */}
          <AppHomeHeader />

          <div className="app_home_main">
            <div className="app_home_main_inner">
              <div className="app_home_main_nav">
                <ul>
                  <li>Home </li>
                  <span> / </span>
                  <li>Recent Videos</li>
                  <span> / </span>
                  <li className="active">
                    How To Create A Facebook Ad Listing
                  </li>
                </ul>
              </div>

              <div className="app_home_main_contents">
                <div className="app_home_main_contents_header">
                  <h5>How To Create A Facebook Ad Listing </h5>
                  <span>
                    <img src={edit_icon} alt="edit-icon" />
                  </span>
                </div>
                <div className="app_home_main_contents_bottom">
                  <img
                    className="video_image"
                    src={video_img}
                    alt="video-image"
                  />

                  <div className="app_home_main_contents_inputs">
                    <div className="app_home_main_contents_inputs_inner">
                      {/* INPUT FOR EMAIL OF RECEIVER */}
                      <div className="email_receiver">
                        <input
                          type="text"
                          placeholder="enter email of receiver"
                        />

                        <span className="btn_send">send</span>
                      </div>
                      {/* INPUT FOR VIDEO URL */}
                      <div className="video_url">
                        <input
                          type="text"
                          disabled
                          value={`https://www.helpmeout/Untitled_Video_20232509`}
                        />

                        <span className="btn_copy">
                          <img src={copy_icon} alt="copy_icon" />
                          <span>Copy URL</span>
                        </span>
                      </div>
                    </div>
                  </div>
                  {/* SHARE SECS */}
                  <ShareSec />

                  <div className="transcript_sec">
                    <div className="transcript_inner">
                      <h3>Transcript</h3>

                      <button disabled className="lang_btn">
                        English
                        <span>
                          <BsChevronDown />
                        </span>
                      </button>

                      <div className="transcript_texts">
                        <div className="transcript_texts_inner">
                          {/*  */}
                          <div className="transcript_texts_box">
                            <p className="time_count">0.01</p>

                            <p className="transcripts">
                              First step. Open Facebook on your desktop or
                              mobile device and locate &quot;Marketplace&quot;
                              in the left-hand menu or at the top of the First
                              step. Open Facebook on your desktop or mobile
                              device and locate &quot;Marketplace&quot; in the
                              left-hand menu or at the top of the..
                            </p>
                          </div>
                          {/*  */}
                          <div className="transcript_texts_box">
                            <p className="time_count">0.02</p>

                            <p className="transcripts">
                              First step. Open Facebook on your desktop or
                              mobile device and locate &quot;Marketplace&quot;
                              in the left-hand menu or at the top of the First
                              step. Open Facebook on your desktop or mobile
                              device and locate &quot;Marketplace&quot; in the
                              left-hand menu or at the top of the..
                            </p>
                          </div>
                          {/*  */}
                          <div className="transcript_texts_box">
                            <p className="time_count">0.03</p>

                            <p className="transcripts">
                              First step. Open Facebook on your desktop or
                              mobile device and locate &quot;Marketplace&quot;
                              in the left-hand menu or at the top of the First
                              step. Open Facebook on your desktop or mobile
                              device and locate &quot;Marketplace&quot; in the
                              left-hand menu or at the top of the..
                            </p>
                          </div>
                          {/*  */}
                          <div className="transcript_texts_box">
                            <p className="time_count">0.04</p>

                            <p className="transcripts">
                              First step. Open Facebook on your desktop or
                              mobile device and locate &quot;Marketplace&quot;
                              in the left-hand menu or at the top of the First
                              step. Open Facebook on your desktop or mobile
                              device and locate &quot;Marketplace&quot; in the
                              left-hand menu or at the top of the..
                            </p>
                          </div>
                          {/*  */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AppHome;

export const ShareSec = () => {
  return (
    <>
      <div className="share_video_sec">
        <div className="share_video_inner">
          <h5>Share your video </h5>

          <div className="action_btns">
            <button>
              <img src={fb_icon} alt="social_icon" />

              <span>Facebook</span>
            </button>
            <button>
              <img src={whatsapp_icon} alt="social_icon" />
              <span>WhatsApp</span>
            </button>
            <button>
              <img src={telegram_icon} alt="social_icon" />

              <span>Telegram</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
