import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 54 54"  {...props}>
      <path d="M51.3226 16.4506C45.6183 2.92413 30.0219 -3.42997 16.4713 2.27428C2.92076 7.97852 -3.40926 23.5749 2.29498 37.1255C7.99922 50.6761 23.5956 57.0061 37.1462 51.3019C50.6727 45.5976 57.0268 30.0012 51.3226 16.4506C51.3226 16.4506 51.3226 16.4747 51.3226 16.4506ZM26.7486 48.9432C14.5218 48.9432 4.60556 39.0269 4.60556 26.8001C4.60556 14.5733 14.5218 4.65706 26.7486 4.65706C38.9754 4.65706 48.8917 14.5733 48.8917 26.8001C48.8917 39.0269 38.9754 48.9432 26.7486 48.9432Z" fill="url(#paint0_linear_224_204)"/>
      <path d="M31.6589 44.7551L44.7041 31.6859L31.6349 18.6167L26.8452 23.4063L35.0767 31.6859L26.8212 39.9414L31.6589 44.7551Z" fill="url(#paint1_linear_224_204)"/>
      <path d="M21.9112 8.89282L8.86609 21.962L21.9112 35.0313L26.7249 30.2416L18.4694 21.962L26.7249 13.6825L21.9112 8.89282Z" fill="url(#paint2_linear_224_204)"/>
      <defs xmlns="http://www.w3.org/2000/svg">
      <linearGradient id="paint0_linear_224_204" x1="8.91968" y1="47.1406" x2="44.3297" y2="6.86077" gradientUnits="userSpaceOnUse">
      <stop stop-color="#328B31"/>
      <stop offset="1" stop-color="#96CF24"/>
      </linearGradient>
      <linearGradient id="paint1_linear_224_204" x1="14.3549" y1="51.9115" x2="49.7585" y2="11.6317" gradientUnits="userSpaceOnUse">
      <stop stop-color="#328B31"/>
      <stop offset="1" stop-color="#96CF24"/>
      </linearGradient>
      <linearGradient id="paint2_linear_224_204" x1="3.4906" y1="42.3619" x2="38.9007" y2="2.08203" gradientUnits="userSpaceOnUse">
      <stop stop-color="#328B31"/>
      <stop offset="1" stop-color="#96CF24"/>
      </linearGradient>
      </defs>
    </Svg>
  );
};

export default Icon;