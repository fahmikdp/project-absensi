import SelectUnstyled, {
  selectUnstyledClasses,
} from "@mui/base/SelectUnstyled";
import OptionUnstyled, {
  optionUnstyledClasses,
} from "@mui/base/OptionUnstyled";
import PopperUnstyled from "@mui/base/PopperUnstyled";
import { styled } from "@mui/system";
import ArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

export const StyledButton = styled("button")`
  font-size: 0.775rem;
  box-sizing: border-box;
  height: calc(1em + 20px);
  min-width: 100px;
  background: #f78104;
  border: 1px #ccc;
  border-radius: 0.75em;
  margin: 1em;
  padding: 10px;
  text-align: left;
  line-height: 1.2;
  color: #fff;
  top: 0;
  right: 0;
  font-family: Roboto;

  &.${selectUnstyledClasses.focusVisible} {
    outline: 4px solid rgba(100, 100, 100, 0.3);
  }

  &.${selectUnstyledClasses.expanded} {
    border-radius: 0.75em 0.75em 0 0;

    &::after {
      content: "▴";
      //   content: {(<ArrowDownIcon />)};
    }
  }

  &::after {
    content: "▾";
    //   content: {};
    float: right;
  }
`;

export const StyledListbox = styled("ul")`
  font-family: IBM Plex Sans, sans-serif;
  font-size: 0.775rem;
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  background-color: #fff;
  min-width: 100px;
  color: #000;
`;

export const StyledOption = styled(OptionUnstyled)`
  list-style: none;
  padding: 4px 10px;
  margin: 0;
  border-bottom: 1px solid #ddd;
  cursor: default;

  &:last-of-type {
    border-bottom: none;
  }

  &.${optionUnstyledClasses.disabled} {
    color: #888;
  }

  &.${optionUnstyledClasses.selected} {
    background-color: rgba(25, 118, 210, 0.08);
  }

  &.${optionUnstyledClasses.highlighted} {
    background-color: #f78104;
    color: #fff;
  }

  &.${optionUnstyledClasses.highlighted}.${optionUnstyledClasses.selected} {
    background-color: #f78104;
    color: #fff;
  }

  &:hover:not(.${optionUnstyledClasses.disabled}) {
    background-color: #39e;
  }
`;

export const StyledPopper = styled(PopperUnstyled)`
  z-index: 1;
`;
