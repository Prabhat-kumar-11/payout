import * as React from "react";

function AnalyticsIcon(props) {
  return (
    <svg width={20} height={20} fill="none" {...props}>
      <g opacity={0.8} fillRule="evenodd" clipRule="evenodd" fill="#fff">
        <path d="M2.664 10.937c0-.428.347-.775.775-.775h4.375a.775.775 0 010 1.55h-3.6v4.85a.775.775 0 01-1.55 0v-5.625z" />
        <path d="M1.414 16.562c0-.428.347-.775.775-.775h15.625a.775.775 0 010 1.55H2.19a.775.775 0 01-.775-.775z" />
        <path d="M7.04 7.187c0-.428.346-.775.774-.775h4.375a.775.775 0 010 1.55h-3.6v8.6a.775.775 0 01-1.55 0V7.187z" />
        <path d="M11.414 3.437c0-.428.347-.775.775-.775h4.375c.428 0 .775.347.775.775v13.125a.775.775 0 01-.775.775H12.19a.775.775 0 01-.775-.775V3.437zm1.55.775v11.575h2.825V4.212h-2.825z" />
      </g>
    </svg>
  );
}

export default AnalyticsIcon;
