import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./MAINFRAME1.module.css";

const MAINFRAME1: FunctionComponent = () => {
  const navigate = useNavigate();

  const onGetAFreeClick = useCallback(() => {
    navigate("/dream-workshop");
  }, [navigate]);

  return (
    <div className={styles.mAINFRAME1}>
      <div className={styles.dreamWorkshopDiv}>
        <div className={styles.rectangleDiv} />
        <div className={styles.rectangleDiv1} />
        <div className={styles.copyright2021AllRightsRese}>
          copyright 2021 all rights reserved
        </div>
        <div className={styles.fAQDiv}>FAQ</div>
        <div className={styles.blogsDiv}>Blogs</div>
        <div className={styles.contactUsDiv}>Contact us</div>
        <div className={styles.termsConditions}>{`Terms & conditions`}</div>
        <div className={styles.privacyPolicyDiv}>Privacy policy</div>
        <img className={styles.ellipseIcon} alt="" src="../ellipse.svg" />
        <b className={styles.dreamWorkshopB}>Dream Workshop</b>
        <div className={styles.informationDiv}>Information</div>
        <div className={styles.usefullLinksDiv}>Usefull links</div>
        <div className={styles.rectangleDiv2} />
        <div className={styles.rectangleDiv3} />
        <img className={styles.imageIcon} alt="" src="../image@2x.png" />
        <div className={styles.rectangleDiv4} />
        <div className={styles.buildYourOwnSetup}>Build your Own Setup</div>
        <img className={styles.ellipseIcon1} alt="" src="../ellipse1.svg" />
        <b className={styles.dreamWorkshopB1}>
          <span>{`Dream `}</span>
          <span className={styles.workshopSpan}>Workshop</span>
        </b>
        <div className={styles.takeASurveySoThatWeCanK}>
          Take a survey so that we can know you better
        </div>
        <div className={styles.yourDreamYourNeeds}>
          <p className={styles.yourDreamP}>Your Dream...</p>
          <p className={styles.yourDreamP}>&nbsp;</p>
          <p
            className={styles.yourDreamP}
          >{`                          Your needs...  & `}</p>
          <p className={styles.yourDreamP}>&nbsp;</p>
          <p className={styles.yourVisionP}> Your Vision!!</p>
        </div>
        <img className={styles.bluePCIcon} alt="" src="../blue-pc@2x.png" />
        <img className={styles.image1Icon} alt="" src="../image-1@2x.png" />
        <img className={styles.image2Icon} alt="" src="../image-2@2x.png" />
        <img className={styles.image3Icon} alt="" src="../image-3@2x.png" />
        <div className={styles.property1normalDiv}>
          <div className={styles.rectangleDiv5} />
          <b className={styles.getAFreeTrial} onClick={onGetAFreeClick}>
            Premade setups based on sruveys
          </b>
        </div>
        <div className={styles.topOfTheLineSetups}>
          Top of the line setups..
        </div>
        <div className={styles.property1normalDiv1}>
          <div className={styles.rectangleDiv5} />
          <a
            className={styles.getAFreeTrial1}
            href="https://www.microsoft.com/en-us/windows/help-me-choose"
            target="_blank"
          >
            Choose setup based on your needs
          </a>
        </div>
      </div>
    </div>
  );
};

export default MAINFRAME1;
