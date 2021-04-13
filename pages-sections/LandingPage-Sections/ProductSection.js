import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import Chat from "@material-ui/icons/Chat";
import VerifiedUser from "@material-ui/icons/VerifiedUser";
import Fingerprint from "@material-ui/icons/Fingerprint";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import InfoArea from "components/InfoArea/InfoArea.js";

import styles from "assets/jss/nextjs-material-kit/pages/landingPageSections/productStyle.js";

const useStyles = makeStyles(styles);

export default function ProductSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.title}>Let{"'"}s talk product</h2>
          <h3 className="font-bold text-black">
            These tokens are unique forever in the future. The minting policy is
            time based. After a certain period of time there is no way to mint
            or burn anymore. So you as owner of a token can be ensured it is
            forever staying at quantity 1 and no one can influence that. This is
            what makes a token an NFT.
          </h3>
        </GridItem>
      </GridContainer>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Metadata"
              description="The metadata for each token are on-chain. The metadata itself links to an image on IPFS and Arweave in order to keep the data immutable and retrievable forever. The metadata are in the minting transaction of the token. Check out this example. Scroll down to the metadata and click on them to see them."
              icon={Chat}
              iconColor="info"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Allowed Wallets"
              description="Yoroi is currently the only wallet that supports multi assets.
              Daedalus or Daedalus Flight.
              Never sent ADA from an exchange!"
              icon={VerifiedUser}
              iconColor="success"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Fingerprint"
              description="*Please be aware that you are purchasing an 'NFT' of the original painting and not the original painting itself.   
              Only 10 original paintins could be sent along with the token and this involves delivery coordination so If you are unsure of what you are purchasing please revisit our nft section"
              icon={Fingerprint}
              iconColor="danger"
              vertical
            />
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
