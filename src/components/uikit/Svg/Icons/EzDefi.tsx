import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 70 70" {...props}>
      <rect x="0.199951" y="0.355225" width="51.7165" height="73.4524" fill="url(#pattern0)"/>
      <defs>
      <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
      <use xlinkHref="#image0_224_200" transform="translate(-0.00301933) scale(0.00591787 0.00416667)"/>
      </pattern>
      <image id="image0_224_200" width="170" height="240" xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKoAAADwCAYAAACQY/8TAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFGmlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNi4wLWMwMDIgNzkuMTY0NDYwLCAyMDIwLzA1LzEyLTE2OjA0OjE3ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgMjEuMiAoTWFjaW50b3NoKSIgeG1wOkNyZWF0ZURhdGU9IjIwMjEtMTItMDFUMTI6Mzg6MzYrMDc6MDAiIHhtcDpNb2RpZnlEYXRlPSIyMDIxLTEyLTAxVDEyOjM4OjU4KzA3OjAwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDIxLTEyLTAxVDEyOjM4OjU4KzA3OjAwIiBkYzpmb3JtYXQ9ImltYWdlL3BuZyIgcGhvdG9zaG9wOkNvbG9yTW9kZT0iMyIgcGhvdG9zaG9wOklDQ1Byb2ZpbGU9InNSR0IgSUVDNjE5NjYtMi4xIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjcwMjA5OWFlLWZmZmUt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"/>
      </defs>
</Svg>
  );
};

export default Icon;