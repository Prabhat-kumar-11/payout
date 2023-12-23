import * as React from "react";

function NavMenuIcon(props) {
  return (
    <svg width={40} height={40} fill="none" {...props}>
      <g clipPath="url(#prefix__clip0_84871_4441)">
        <circle cx={20} cy={20} r={20} fill="#E6E6E6" />
        <path
          d="M21.11 25.502a1.5 1.5 0 01-2.22 0l-5.275-5.813c-.874-.964-.19-2.508 1.111-2.508h10.548c1.302 0 1.985 1.544 1.11 2.508l-5.273 5.813z"
          fill="#4D4D4D"
        />
      </g>
      <defs>
        <clipPath id="prefix__clip0_84871_4441">
          <path fill="#fff" d="M0 0h40v40H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}

export default NavMenuIcon;
