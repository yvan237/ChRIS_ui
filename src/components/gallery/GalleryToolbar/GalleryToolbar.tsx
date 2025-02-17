import * as React from "react";
import {
  PlayIcon,
  PauseIcon,
  StepForwardIcon,
  StepBackwardIcon,
  ExpandIcon,
  CompressIcon,
  AngleDoubleLeftIcon,
  AngleDoubleRightIcon,
} from "@patternfly/react-icons";
import { Grid, GridItem, Button } from "@patternfly/react-core";

import { galleryActions } from "../../../api/models/gallery.model";
import "./GalleryToolbar.scss";

type IGalleryToolbarState = {
  isFullscreen: boolean;
};

type AllProps = {
  total: number;
  hideDownload?: boolean;
  onToolbarClick: (action: string) => void; // Description: switch play/pause functionality
  isPlaying?: boolean;
} & IGalleryToolbarState;

const GalleryToolbar: React.FunctionComponent<AllProps> = (props: AllProps) => {
  return (
    <Grid className="gallery-toolbar">
      <GridItem sm={12} md={7}>
        <div>
          <Button
            variant="link"
            onClick={() => props.onToolbarClick(galleryActions.first)}
          >
            <AngleDoubleLeftIcon />
          </Button>
          <Button
            variant="link"
            onClick={() => props.onToolbarClick(galleryActions.previous)}
          >
            <StepBackwardIcon />
          </Button>
          <Button
            variant="link"
            onClick={() =>
              props.onToolbarClick(
                props.isPlaying ? galleryActions.pause : galleryActions.play
              )
            }
          >
            {props.isPlaying ? <PauseIcon size="md" /> : <PlayIcon size="md" />}
          </Button>
          <Button
            variant="link"
            onClick={() => props.onToolbarClick(galleryActions.next)}
          >
            <StepForwardIcon />
          </Button>
          <Button
            variant="link"
            onClick={() => props.onToolbarClick(galleryActions.last)}
          >
            <AngleDoubleRightIcon />
          </Button>
        </div>
      </GridItem>
      <GridItem sm={12} md={5}>
        <Button
          variant="link"
          onClick={() => props.onToolbarClick(galleryActions.fullscreen)}
        >
          {props.isFullscreen ? <CompressIcon size="md" /> : <ExpandIcon />}
        </Button>
      </GridItem>
    </Grid>
  );
};
export default React.memo(GalleryToolbar);
