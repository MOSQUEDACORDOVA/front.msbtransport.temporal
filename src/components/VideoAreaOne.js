import React, { useState } from "react";
import { FaPhoneAlt, FaPlay } from "react-icons/fa";
import ModalVideo from "react-modal-video";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const VideoAreaOne = () => {
  const [isOpen, setOpen] = useState(false);
  const { t } = useTranslation();

  return (
    <div className='video-area pd-top-120 pd-bottom-120' style={{ background: "#080C24" }}>
      <div className='video-thumb-wrap '>
        <img src='assets/img/video/packing-pallets-msb-transports-montreal.png' alt='Transpro' />
      </div>

      <div className='container'>
        <div className='row'>
          <div className='col-xl-6 col-lg-7'>
            <div className='cta-inner-wrap' style={{ background: "url(assets/img/video/bg.png)" }}>
              <div className='section-title style-white mb-0'>
                <h4 className='subtitle style-2'>{t('videoSubtitle')}</h4>
                <h2 className='title'>{t('videoTitle')}</h2>
              </div>
              <div className='single-cta-wrap'>
                <div className='icon'>
                  <FaPhoneAlt />
                </div>
                <div className='details'>
                  <h6>{t('videoQuestion')}</h6>
                  <h3>+14388768322</h3>
                </div>
              </div>
              <Link className='btn btn-white' to='/contact'>
                {t('videoContactButton')}
              </Link>
            </div>
          </div>
        </div>
      </div>
      <ModalVideo
        channel='youtube'
        autoplay
        isOpen={isOpen}
        videoId='XM6kTQPzzpQ'
        onClose={() => setOpen(false)}
      />
    </div>
  );
};

export default VideoAreaOne;
