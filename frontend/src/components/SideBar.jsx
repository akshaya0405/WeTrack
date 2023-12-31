import { Link } from "react-router-dom";
import { useLogout } from "../hooks/useLogout";

export default function Sidebar() {
  const { logout } = useLogout();
  return (
    // <div className="flex font-sans">
    <div className="h-screen p-3 bg-[#547AFF] shadow w-60 rounded-r-2xl">
      <div className="flex flex-col">
        <div>
          <div className="flex items-center logoShadow ">
            <svg
              className="w-10 h-10 ml-0 mt-0 pt-0 pb-0  svg-icon"
              viewBox="0 0 24 24"
              stroke="white"
              fill="white"
              strokeWidth={1}
            >
              <path d="M6.173,8.153l-2.711,2.193l2.357,1.417l0.001-0.001l0.474,0.287l1.077,0.647l1.731-1.315l0.873-0.668l0.003,0.003l0.003-0.003l0.015,0.011l0.008-0.011l2.073,1.543l0.595,0.438l3.868-2.351l-2.755-2.24l-3.802,2.409L6.173,8.153zM12.623,14.128l-0.009,0.01l-2.613-1.946l-2.507,1.92L7.47,14.147l-1.382-0.835v0.729l3.911,2.501l3.878-2.501v-0.68l-1.253,0.768L12.623,14.128z M13.786,8.104L13.786,8.104L13.786,8.104l-0.002-0.001L13.786,8.104z M3.458,6.046l2.722,2.103l3.802-2.406L7.371,3.458L3.458,6.046z M12.74,3.457L9.982,5.742l3.804,2.361l2.756-2.18L12.74,3.457z"></path>
            </svg>
            <h2 className="text-xxl font-bold text-white text-lg mr-0">
              WeTrack
            </h2>
          </div>
        </div>
        <div className="flex-1">
          <ul className="pt-2 pb-4 space-y-1 text-sm nav">
            <li className="rounded-sm text-white font-semibold group hoverBox">
              <Link to="/dashboard">
                <a
                  href="/dashboard"
                  className="flex items-center p-2 space-x-3 rounded-md"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                    />
                  </svg>
                  <span>Dashboard</span>
                </a>
              </Link>
            </li>
            <li className="rounded-sm text-white font-semibold group hoverBox">
              <Link to="/leaverecord">
                <a
                  href="/leaverecord"
                  className="flex items-center p-2 space-x-3 rounded-md"
                >
                  <svg
                    className="svg-icon w-6 h-6"
                    viewBox="0 0 20 20"
                    fill="none"
                    stroke="currentColor "
                    strokeWidth={1}
                  >
                    <path d="M16.557,4.467h-1.64v-0.82c0-0.225-0.183-0.41-0.409-0.41c-0.226,0-0.41,0.185-0.41,0.41v0.82H5.901v-0.82c0-0.225-0.185-0.41-0.41-0.41c-0.226,0-0.41,0.185-0.41,0.41v0.82H3.442c-0.904,0-1.64,0.735-1.64,1.639v9.017c0,0.904,0.736,1.64,1.64,1.64h13.114c0.904,0,1.64-0.735,1.64-1.64V6.106C18.196,5.203,17.461,4.467,16.557,4.467 M17.377,15.123c0,0.453-0.366,0.819-0.82,0.819H3.442c-0.453,0-0.82-0.366-0.82-0.819V8.976h14.754V15.123z M17.377,8.156H2.623V6.106c0-0.453,0.367-0.82,0.82-0.82h1.639v1.23c0,0.225,0.184,0.41,0.41,0.41c0.225,0,0.41-0.185,0.41-0.41v-1.23h8.196v1.23c0,0.225,0.185,0.41,0.41,0.41c0.227,0,0.409-0.185,0.409-0.41v-1.23h1.64c0.454,0,0.82,0.367,0.82,0.82V8.156z"></path>
                  </svg>
                  <span>Leave Record</span>
                </a>
              </Link>
            </li>
            <li className="rounded-sm font-semibold text-white group hoverBox">
              {/* <Link to="/timeline">
                <a
                  href="/timelin"
                  className="flex items-center p-2 space-x-3 rounded-md"
                >
                  <svg
                    viewBox="0 0 20 20"
                    fill="none"
                    className="w-6 h-6 svg-icon"
                    stroke="currentColor"
                    strokeWidth={0.8}
                  >
                    <path d="M8.627,7.885C8.499,8.388,7.873,8.101,8.13,8.177L4.12,7.143c-0.218-0.057-0.351-0.28-0.293-0.498c0.057-0.218,0.279-0.351,0.497-0.294l4.011,1.037C8.552,7.444,8.685,7.667,8.627,7.885 M8.334,10.123L4.323,9.086C4.105,9.031,3.883,9.162,3.826,9.38C3.769,9.598,3.901,9.82,4.12,9.877l4.01,1.037c-0.262-0.062,0.373,0.192,0.497-0.294C8.685,10.401,8.552,10.18,8.334,10.123 M7.131,12.507L4.323,11.78c-0.218-0.057-0.44,0.076-0.497,0.295c-0.057,0.218,0.075,0.439,0.293,0.495l2.809,0.726c-0.265-0.062,0.37,0.193,0.495-0.293C7.48,12.784,7.35,12.562,7.131,12.507M18.159,3.677v10.701c0,0.186-0.126,0.348-0.306,0.393l-7.755,1.948c-0.07,0.016-0.134,0.016-0.204,0l-7.748-1.948c-0.179-0.045-0.306-0.207-0.306-0.393V3.677c0-0.267,0.249-0.461,0.509-0.396l7.646,1.921l7.654-1.921C17.91,3.216,18.159,3.41,18.159,3.677 M9.589,5.939L2.656,4.203v9.857l6.933,1.737V5.939z M17.344,4.203l-6.939,1.736v9.859l6.939-1.737V4.203z M16.168,6.645c-0.058-0.218-0.279-0.351-0.498-0.294l-4.011,1.037c-0.218,0.057-0.351,0.28-0.293,0.498c0.128,0.503,0.755,0.216,0.498,0.292l4.009-1.034C16.092,7.085,16.225,6.863,16.168,6.645 M16.168,9.38c-0.058-0.218-0.279-0.349-0.498-0.294l-4.011,1.036c-0.218,0.057-0.351,0.279-0.293,0.498c0.124,0.486,0.759,0.232,0.498,0.294l4.009-1.037C16.092,9.82,16.225,9.598,16.168,9.38 M14.963,12.385c-0.055-0.219-0.276-0.35-0.495-0.294l-2.809,0.726c-0.218,0.056-0.351,0.279-0.293,0.496c0.127,0.506,0.755,0.218,0.498,0.293l2.807-0.723C14.89,12.825,15.021,12.603,14.963,12.385"></path>
                  </svg>
                  <span>Timeline</span>
                </a>
              </Link> */}
            </li>
            <li className="rounded-sm text-white font-semibold group hoverBox">
              <Link to="/portion">
                <a
                  href="/portion"
                  className="flex items-center p-2 space-x-3 rounded-md"
                >
                  <svg
                    className="w-6 h-6 svg-icon"
                    fill="none"
                    viewBox="0 0 20 20"
                    stroke="currentColor"
                    strokeWidth={0.8}
                  >
                    <path d="M2.25,12.584c-0.713,0-1.292,0.578-1.292,1.291s0.579,1.291,1.292,1.291c0.713,0,1.292-0.578,1.292-1.291S2.963,12.584,2.25,12.584z M2.25,14.307c-0.238,0-0.43-0.193-0.43-0.432s0.192-0.432,0.43-0.432c0.238,0,0.431,0.193,0.431,0.432S2.488,14.307,2.25,14.307z M5.694,6.555H18.61c0.237,0,0.431-0.191,0.431-0.43s-0.193-0.431-0.431-0.431H5.694c-0.238,0-0.43,0.192-0.43,0.431S5.457,6.555,5.694,6.555z M2.25,8.708c-0.713,0-1.292,0.578-1.292,1.291c0,0.715,0.579,1.292,1.292,1.292c0.713,0,1.292-0.577,1.292-1.292C3.542,9.287,2.963,8.708,2.25,8.708z M2.25,10.43c-0.238,0-0.43-0.192-0.43-0.431c0-0.237,0.192-0.43,0.43-0.43c0.238,0,0.431,0.192,0.431,0.43C2.681,10.238,2.488,10.43,2.25,10.43z M18.61,9.57H5.694c-0.238,0-0.43,0.192-0.43,0.43c0,0.238,0.192,0.431,0.43,0.431H18.61c0.237,0,0.431-0.192,0.431-0.431C19.041,9.762,18.848,9.57,18.61,9.57z M18.61,13.443H5.694c-0.238,0-0.43,0.193-0.43,0.432s0.192,0.432,0.43,0.432H18.61c0.237,0,0.431-0.193,0.431-0.432S18.848,13.443,18.61,13.443z M2.25,4.833c-0.713,0-1.292,0.578-1.292,1.292c0,0.713,0.579,1.291,1.292,1.291c0.713,0,1.292-0.578,1.292-1.291C3.542,5.412,2.963,4.833,2.25,4.833z M2.25,6.555c-0.238,0-0.43-0.191-0.43-0.43s0.192-0.431,0.43-0.431c0.238,0,0.431,0.192,0.431,0.431S2.488,6.555,2.25,6.555z"></path>
                  </svg>
                  <span>Portion</span>
                </a>
              </Link>
            </li>
            <li className="rounded-sm text-white font-semibold group hoverBox">
              <Link to="/profile">
                <a
                  href="/profile"
                  className="flex items-center p-2 space-x-3 rounded-md"
                >
                  <svg
                    viewBox="0 0 20 20"
                    className="w-6 h-6 svg-icon"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1}
                  >
                    <path d="M12.075,10.812c1.358-0.853,2.242-2.507,2.242-4.037c0-2.181-1.795-4.618-4.198-4.618S5.921,4.594,5.921,6.775c0,1.53,0.884,3.185,2.242,4.037c-3.222,0.865-5.6,3.807-5.6,7.298c0,0.23,0.189,0.42,0.42,0.42h14.273c0.23,0,0.42-0.189,0.42-0.42C17.676,14.619,15.297,11.677,12.075,10.812 M6.761,6.775c0-2.162,1.773-3.778,3.358-3.778s3.359,1.616,3.359,3.778c0,2.162-1.774,3.778-3.359,3.778S6.761,8.937,6.761,6.775 M3.415,17.69c0.218-3.51,3.142-6.297,6.704-6.297c3.562,0,6.486,2.787,6.705,6.297H3.415z"></path>
                  </svg>
                  <span>Profile</span>
                </a>
              </Link>
            </li>
            <div
              className="flex flex-col h-64 justify-end pb-8 cursor-pointer"
              onClick={() => logout()}
            >
              <li className="rounded-sm font-semibold text-white hoverBox ">
                <div className="flex items-center p-2 space-x-3 rounded-md">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={3}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
                    />
                  </svg>
                  <span className="font-bold">Logout</span>
                </div>
              </li>
            </div>
          </ul>
        </div>
      </div>
    </div>
    // </div>
  );
}
