import * as React from "react";

function SortIcon(props) {
  return (
    <svg width={16} height={16} fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1.625 9.934a.533.533 0 01.754 0l2.264 2.264 2.264-2.264a.533.533 0 11.754.755l-2.64 2.64a.533.533 0 01-.755 0l-2.641-2.64a.533.533 0 010-.755z"
        fill="#4D4D4D"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.643 2.516c.294 0 .533.238.533.533v9.903a.533.533 0 11-1.066 0V3.05c0-.295.238-.533.533-.533zM14.38 6.067a.533.533 0 01-.755 0L11.36 3.803 9.097 6.067a.533.533 0 11-.754-.754l2.641-2.641a.533.533 0 01.754 0l2.641 2.64a.533.533 0 010 .755z"
        fill="#4D4D4D"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.361 13.486a.533.533 0 01-.533-.534V3.05a.533.533 0 011.067 0v9.903a.533.533 0 01-.534.534z"
        fill="#4D4D4D"
      />
    </svg>
  );
}

export default SortIcon;
