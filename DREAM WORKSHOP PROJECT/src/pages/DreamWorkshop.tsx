import { FunctionComponent, useCallback } from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import styles from "./DreamWorkshop.module.css";

const DreamWorkshop: FunctionComponent = () => {
  const navigate = useNavigate();

  const onDreamWorkshopText1Click = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
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
      <img className={styles.rectangleIcon} alt="" src="../rectangle@2x.png" />
      <div className={styles.rectangleDiv2} />
      <img className={styles.imageIcon} alt="" src="../image@2x.png" />
      <div className={styles.rectangleDiv3} />
      <div className={styles.whySurvey}>Why Survey ?</div>
      <div className={styles.aboutUsDiv}>About us</div>
      <img className={styles.ellipseIcon1} alt="" src="../ellipse3.svg" />
      <img className={styles.frameIcon} alt="" src="../frame.svg" />
      <img className={styles.ellipseIcon2} alt="" src="../ellipse3.svg" />
      <img
        className={styles.akarIconsfacebookFill}
        alt=""
        src="../akariconsfacebookfill.svg"
      />
      <img className={styles.ellipseIcon3} alt="" src="../ellipse3.svg" />
      <img className={styles.frameIcon1} alt="" src="../frame1.svg" />
      <img className={styles.ellipseIcon4} alt="" src="../ellipse1.svg" />
      <b className={styles.dreamWorkshopB1} onClick={onDreamWorkshopText1Click}>
        <span>{`Dream `}</span>
        <span className={styles.workshopSpan}>Workshop</span>
      </b>
      <div className={styles.basedOnYourNeeds}>
        <p className={styles.blankLineP}>&nbsp;</p>
        <p className={styles.basedOn}>Based on your needs</p>
      </div>
      <a
        className={styles.customiseAccordingToYou}
        href={`https://www.figma.com/file/E1pJIDR8vFgmDKfHIk8ngB/DreamWSC?node-id=0%3A1&t=FEfxQHGwJUFMTFh7-0`}
        target="_blank"
      >
        Customise according to you
      </a>
      <div className={styles.surveysCanHelpGaugeTheRep}>
        <p className={styles.blankLineP}>
          Surveys can help gauge the representativeness of individual views and
          experiences.
        </p>
        <p className={styles.blankLineP}>
          When done well, surveys provide hard numbers on people’s opinions and
          behaviors that can be used to make important decisions.
        </p>
        <p className={styles.blankLineP}>&nbsp;</p>
        <p className={styles.blankLineP}>
          It will help you what to choose according to your needs.
        </p>
        <p className={styles.blankLineP}>&nbsp;</p>
        <p className={styles.blankLineP}>&nbsp;</p>
        <p className={styles.basedOn}>&nbsp;</p>
      </div>
      <div className={styles.property1normalDiv}>
        <Button
          className={styles.rectangleButton}
          sx={{ width: 258 }}
          variant="contained"
          color="primary"
        />
        <a
          className={styles.eDITINGA}
          href="https://www.creativebloq.com/features/best-computer-for-video-editing"
          target="_blank"
        >
          EDITING
        </a>
      </div>
      <div className={styles.property1normalDiv1}>
        <Button
          className={styles.rectangleButton}
          sx={{ width: 258 }}
          variant="contained"
          color="primary"
        />
        <a
          className={styles.sTREAMING}
          href="https://unsplash.com/s/photos/pc-setup"
          target="_blank"
        >
          STREAMING
        </a>
      </div>
      <div className={styles.property1normalDiv2}>
        <Button
          className={styles.rectangleButton}
          sx={{ width: 258 }}
          variant="contained"
          color="primary"
        />
        <a
          className={styles.pODCAST}
          href="https://castos.com/podcast-equipment/"
          target="_blank"
        >
          PODCAST
        </a>
      </div>
      <img className={styles.image6Icon} alt="" src="../image-6@2x.png" />
      <img className={styles.image7Icon} alt="" src="../image-7@2x.png" />
      <img className={styles.image8Icon} alt="" src="../image-8@2x.png" />
    </div>
  );
};

export default DreamWorkshop;
