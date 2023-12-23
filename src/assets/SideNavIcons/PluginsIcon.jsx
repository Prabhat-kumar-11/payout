import * as React from "react";

function PluginsIcon(props) {
  return (
    <svg width={20} height={20} fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18.807 7.417A.752.752 0 0018.141 7h-7.05l.775-6.183A.723.723 0 0011.149 0a.742.742 0 00-.567.258l-8.75 10.5a.731.731 0 00.558 1.2h7.05l-.775 6.175a.756.756 0 00.434.767c.3.125.65.042.858-.208l8.75-10.5a.746.746 0 00.1-.775zm-8.383 8.433l.567-4.533a.756.756 0 00-.175-.575.764.764 0 00-.55-.242H3.948l6.158-7.392-.567 4.525a.73.73 0 00.184.575.71.71 0 00.541.25h6.317l-6.158 7.392z"
        fill="#fff"
        opacity={0.8}
      />
    </svg>
  );
}

export default PluginsIcon;
