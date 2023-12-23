import * as React from "react";

function HelpIcon(props) {
  return (
    <svg width={14} height={14} fill="currentColor" {...props}>
      <g
        clipPath="url(#prefix__clip0_84871_6194)"
        fillRule="evenodd"
        clipRule="evenodd"
        fill="currentColor"
      >
        <path d="M7.78 10.18a.778.778 0 11-1.555 0 .778.778 0 011.556 0zM6.13 3.407a2.281 2.281 0 111.34 4.34v.1a.467.467 0 01-.934 0v-.518a.467.467 0 01.467-.467 1.348 1.348 0 10-1.348-1.348.467.467 0 11-.933 0A2.281 2.281 0 016.13 3.407z" />
        <path d="M7.003 1.633a5.367 5.367 0 100 10.733 5.367 5.367 0 000-10.733zm-6.3 5.366a6.3 6.3 0 1112.6 0 6.3 6.3 0 01-12.6 0z" />
      </g>
      <defs>
        <clipPath id="prefix__clip0_84871_6194">
          <path fill="#fff" d="M0 0h14v14H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}

export default HelpIcon;
