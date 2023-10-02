import { BsChevronDown } from "react-icons/bs";
import { copy_icon, edit_icon, video_ready_img } from "../lib/image";
import { ShareSec } from "./AppHome";
import Footer from "./Footer";
import Header from "./Header";
import { Link } from "react-router-dom";

export const VideoReady = () => {
  return (
    <>
      {/* HEADER */}
      <Header />
      <div className="home_container">
        <div className="video_ready_main container_main">
          <div className="video_ready_inner">
            {/* VIDEO_READY_HERO */}
            <div className="video_ready_hero">
              <div className="video_ready_hero_inner">
                <div className="video_ready_hero_left">
                  <div className="video_ready_hero_left_inner">
                    <h2>Your video is ready!</h2>

                    <div className="name">
                      <p>Name</p>

                      <div className="name_input">
                        <input type="text" value={"Untitled_Video_20232509"} />
                        <span>
                          <img src={edit_icon} alt="edit-icon" />
                        </span>
                      </div>
                    </div>

                    <div className="email_receiver">
                      <input
                        type="email"
                        placeholder="enter email of receiver"
                      />

                      <button className="btn_send">send</button>
                    </div>

                    <div>
                      <h4>Video Url</h4>
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

                    {/* SHARE SEC */}
                    <ShareSec />
                  </div>
                </div>

                <div className="video_ready_hero_right">
                  <div className="video_ready_hero_right_inner">
                    <img src={video_ready_img} alt="video-ready" />

                    <div className="video_ready_transcript_sec">
                      <div className="video_ready_transcript_inner">
                        <h3>Transcript</h3>

                        <button disabled className="lang_btn">
                          English
                          <span>
                            <BsChevronDown />
                          </span>
                        </button>

                        <div className="video_ready_transcript_texts">
                          <div className="video_ready_transcript_texts_inner">
                            {/*  */}
                            <div className="video_ready_transcript_texts_box">
                              <p className="time_count small">0.01</p>

                              <p className="transcript_details">
                                First step. Open Facebook on your desktop or
                                mobile device and locate &quot;Marketplace&quot;
                                in the left-hand menu or at the top of the First
                                step. Open Facebook on your desktop or mobile
                                device and locate &quot;Marketplace&quot; in the
                                left-hand menu or at the top of the..
                              </p>
                            </div>
                            {/*  */}
                            <div className="video_ready_transcript_texts_box">
                              <p className="time_count small">0.02</p>

                              <p className="transcript_details">
                                First step. Open Facebook on your desktop or
                                mobile device and locate &quot;Marketplace&quot;
                                in the left-hand menu or at the top of the First
                                step. Open Facebook on your desktop or mobile
                                device and locate &quot;Marketplace&quot; in the
                                left-hand menu or at the top of the..
                              </p>
                            </div>
                            {/*  */}
                            <div className="video_ready_transcript_texts_box">
                              <p className="time_count small">0.03</p>

                              <p className="transcript_details">
                                First step. Open Facebook on your desktop or
                                mobile device and locate &quot;Marketplace&quot;
                                in the left-hand menu or at the top of the First
                                step. Open Facebook on your desktop or mobile
                                device and locate &quot;Marketplace&quot; in the
                                left-hand menu or at the top of the..
                              </p>
                            </div>
                            {/*  */}
                            <div className="video_ready_transcript_texts_box">
                              <p className="time_count small">0.04</p>

                              <p className="transcript_details">
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
      </div>

      {/* SAVE_VIDEO_SEC */}
      <div className="save_video_sec">
        <div className="save_video_inner container_main">
          <p>
            To ensure the availability and privacy of your video, we recommend
            saving it to your account.
          </p>

          <Link to={"/webhome"}>
            <button className="btn_save">save video</button>
          </Link>

          <p>
            <span className="text-[#7E7E7E] ">Don&apos;t have an account?</span>{" "}
            <Link to={"/"}>
              <span className="underline cursor-pointer">Create Account</span>
            </Link>
          </p>
        </div>
      </div>

      {/* FOOTER */}
      <Footer />
    </>
  );
};
