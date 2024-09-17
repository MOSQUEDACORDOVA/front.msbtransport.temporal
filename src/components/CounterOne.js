import React from "react";
import CountUp from "react-countup";
import TrackVisibility from "react-on-screen";
import { useTranslation } from "react-i18next";

const CounterOne = () => {
  const { t } = useTranslation();

  return (
    <>
      <div className='container'>
        <div className='fact-counter-area' style={{ background: "url(assets/img/fact/bg.png)" }}>
          <div className='row justify-content-center'>
            <div className='col-lg-3 col-md-6'>
              <div className='single-fact-wrap'>
                <h2>
                  <TrackVisibility once>
                    {({ isVisible }) =>
                      isVisible && (
                        <span className='counter'>
                          <CountUp delay={0} start={0} end={10000} />+
                        </span>
                      )
                    }
                  </TrackVisibility>
                </h2>
                <h5>{t('projectsDelivered')}</h5>
              </div>
            </div>
            <div className='col-lg-3 col-md-6'>
              <div className='single-fact-wrap'>
                <h2>
                  <TrackVisibility once>
                    {({ isVisible }) =>
                      isVisible && (
                        <span className='counter'>
                          <CountUp delay={0} start={0} end={50} />+
                        </span>
                      )
                    }
                  </TrackVisibility>
                </h2>
                <h5>{t('employees')}</h5>
              </div>
            </div>
            <div className='col-lg-3 col-md-6'>
              <div className='single-fact-wrap'>
                <h2>
                  <TrackVisibility once>
                    {({ isVisible }) =>
                      isVisible && (
                        <span className='counter'>
                          <CountUp delay={0} start={0} end={2} />H
                        </span>
                      )
                    }
                  </TrackVisibility>
                </h2>
                <h5>{t('pickupAndDelivery')}</h5>
              </div>
            </div>
            <div className='col-lg-3 col-md-6'>
              <div className='single-fact-wrap after-none'>
                <h2>
                  <TrackVisibility once>
                    {({ isVisible }) =>
                      isVisible && (
                        <span className='counter'>
                          <CountUp delay={0} start={0} end={80} />+
                        </span>
                      )
                    }
                  </TrackVisibility>
                </h2>
                <h5>{t('customizations')}</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CounterOne;
