"use strict";
const asideLi = document.querySelectorAll(".productsMenu__li");
const twits = document.querySelectorAll(".twit");
const signatureEl = document.querySelector(".icons");

function insertTriangle(liNodelist) {
  liNodelist.forEach((el) => {
    const triangleIcon = document.createElement("i");
    triangleIcon.classList.add(
      "fa-solid",
      "fa-caret-right",
      "productsMenu__li__icon"
    );
    el.prepend(triangleIcon);
  });
}

function insertTwitEmblem(liNodelist) {
  liNodelist.forEach((el) => {
    el.insertAdjacentHTML(
      "afterbegin",
      `<svg 
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    width="32px"
    height="25px"
    >
    <path
      fill-rule="evenodd"
      fill="rgb(216, 216, 216)"
      d="M0.334,18.198 C0.334,18.198 4.522,19.875 6.262,19.875 C6.262,19.875 9.579,20.764 11.768,17.905 C11.768,17.905 12.306,17.122 11.578,16.742 C11.578,16.742 4.438,14.522 4.944,13.288 C4.944,13.288 4.913,12.592 5.830,12.750 C5.830,12.750 6.863,11.848 6.357,11.532 C6.357,11.532 5.566,10.835 6.199,10.772 C6.199,10.772 7.813,10.876 8.414,11.34 C8.414,11.34 8.825,10.886 8.446,10.601 C8.66,10.316 7.433,9.675 7.560,9.549 C7.560,9.549 7.781,9.11 8.794,9.454 C8.794,9.454 9.110,9.391 8.825,9.74 C8.825,9.74 7.971,8.568 8.382,8.156 C8.382,8.156 9.666,7.320 12.609,10.895 C12.609,10.895 13.147,11.623 13.210,10.927 C13.210,10.927 15.343,1.755 18.793,1.154 C18.793,1.154 19.900,1.376 20.121,1.28 C20.121,1.28 21.80,0.648 21.397,0.964 C21.397,0.964 21.713,1.439 22.93,1.154 C22.93,1.154 23.454,0.616 23.42,1.502 C23.42,1.502 21.641,2.840 21.166,2.872 C20.691,2.903 20.786,3.347 21.197,3.410 C21.197,3.410 26.988,3.919 26.988,8.159 C26.988,8.159 27.321,9.167 28.397,8.122 C28.397,8.122 30.25,7.87 30.437,7.37 C30.437,7.37 30.880,6.752 30.816,7.417 C30.816,7.417 29.646,9.444 28.444,10.13 C28.444,10.13 27.716,10.930 28.760,10.741 C28.760,10.741 29.776,10.531 30.250,10.246 C30.250,10.246 31.485,9.645 30.915,10.721 C30.915,10.721 28.317,12.407 27.748,12.407 C27.748,12.407 27.368,12.501 27.368,12.850 C27.368,12.850 27.20,24.2 12.527,24.2 C12.527,24.2 5.270,24.590 0.524,19.21 C0.524,19.21 0.393,18.39 0.334,18.198 Z"
    />
    </svg>`
    );
  });
}

function insertManIcon(parent) {
  const icon = `<svg 
  xmlns="http://www.w3.org/2000/svg"
  xmlns:xlink="http://www.w3.org/1999/xlink"
  width="30px" height="32px">
 <defs>
 <filter filterUnits="userSpaceOnUse" id="Filter_0" x="0px" y="0px" width="30px" height="32px"  >
     <feOffset in="SourceAlpha" dx="0" dy="1" />
     <feGaussianBlur result="blurOut" stdDeviation="0" />
     <feFlood flood-color="rgb(255, 255, 255)" result="floodOut" />
     <feComposite operator="atop" in="floodOut" in2="blurOut" />
     <feComponentTransfer><feFuncA type="linear" slope="0.75"/></feComponentTransfer>
     <feMerge>
     <feMergeNode/>
     <feMergeNode in="SourceGraphic"/>
   </feMerge>
 </filter>
 <filter id="Filter_1">
     <feOffset in="SourceAlpha" dx="0" dy="1" />
     <feGaussianBlur result="blurOut" stdDeviation="1.414" />
     <feFlood flood-color="rgb(32, 24, 32)" result="floodOut" />
     <feComposite operator="out" in="floodOut" in2="blurOut" result="compOut" />
     <feComposite operator="in" in="compOut" in2="SourceAlpha" />
     <feComponentTransfer><feFuncA type="linear" slope="1"/></feComponentTransfer>
     <feBlend mode="multiply" in2="SourceGraphic" />
 </filter>
 <linearGradient id="PSgrad_0" x1="0%" x2="0%" y1="100%" y2="0%">
   <stop offset="0%" stop-color="rgb(65,45,65)" stop-opacity="1" />
   <stop offset="100%" stop-color="rgb(110,75,110)" stop-opacity="1" />
 </linearGradient>
 
 </defs>
 <g filter="url(#Filter_0)">
 <g filter="url(#Filter_1)">
 <path fill-rule="evenodd"  fill="rgb(51, 52, 53)"
  d="M21.397,19.622 C25.423,20.215 26.250,21.520 27.9,22.246 C27.768,22.972 27.858,26.249 27.858,26.249 L16.332,26.249 L17.392,23.617 L15.897,17.263 C15.374,17.787 15.299,18.235 15.299,18.235 L14.327,18.235 C13.588,18.235 13.611,17.682 13.642,17.486 L13.655,17.412 C13.655,17.412 13.648,17.444 13.642,17.486 L12.533,23.617 L13.520,26.249 L1.929,26.249 C1.929,26.249 1.947,22.972 2.706,22.246 C3.465,21.520 4.236,20.215 8.262,19.622 C12.288,19.28 11.734,16.908 11.866,16.974 C11.842,16.171 11.764,15.43 11.764,15.43 C11.764,15.43 10.193,14.156 9.575,12.397 C8.279,11.876 8.450,11.541 8.324,10.869 C8.324,10.869 7.931,8.141 8.806,8.198 C8.806,8.198 9.293,8.198 9.154,7.572 C9.108,6.528 9.125,4.722 9.195,4.26 C9.264,3.331 9.780,1.452 11.241,1.174 C12.702,0.896 12.116,1.35 12.603,0.965 C13.90,0.896 12.951,0.618 13.855,0.618 L15.734,0.316 C16.638,0.316 17.218,1.578 17.705,1.647 C18.192,1.717 18.308,1.435 19.305,1.621 C20.766,1.899 20.563,3.887 20.632,4.583 C20.702,5.278 20.748,7.84 20.609,7.711 C20.470,8.337 20.905,8.267 20.905,8.267 C21.948,8.267 21.620,10.939 21.620,10.939 C21.460,11.646 21.90,11.731 20.118,12.344 C19.501,14.104 18.204,15.182 18.204,15.182 C18.204,15.182 18.63,16.525 18.56,16.841 C18.84,16.966 17.370,19.28 21.397,19.622 ZM15.225,28.999 L14.552,28.999 L13.520,26.249 L16.332,26.249 L15.225,28.999 Z"/>
 </g></g>
 <path fill="url(#PSgrad_0)"
  d="M21.397,19.622 C25.423,20.215 26.250,21.520 27.9,22.246 C27.768,22.972 27.858,26.249 27.858,26.249 L16.332,26.249 L17.392,23.617 L15.897,17.263 C15.374,17.787 15.299,18.235 15.299,18.235 L14.327,18.235 C13.588,18.235 13.611,17.682 13.642,17.486 L13.655,17.412 C13.655,17.412 13.648,17.444 13.642,17.486 L12.533,23.617 L13.520,26.249 L1.929,26.249 C1.929,26.249 1.947,22.972 2.706,22.246 C3.465,21.520 4.236,20.215 8.262,19.622 C12.288,19.28 11.734,16.908 11.866,16.974 C11.842,16.171 11.764,15.43 11.764,15.43 C11.764,15.43 10.193,14.156 9.575,12.397 C8.279,11.876 8.450,11.541 8.324,10.869 C8.324,10.869 7.931,8.141 8.806,8.198 C8.806,8.198 9.293,8.198 9.154,7.572 C9.108,6.528 9.125,4.722 9.195,4.26 C9.264,3.331 9.780,1.452 11.241,1.174 C12.702,0.896 12.116,1.35 12.603,0.965 C13.90,0.896 12.951,0.618 13.855,0.618 L15.734,0.316 C16.638,0.316 17.218,1.578 17.705,1.647 C18.192,1.717 18.308,1.435 19.305,1.621 C20.766,1.899 20.563,3.887 20.632,4.583 C20.702,5.278 20.748,7.84 20.609,7.711 C20.470,8.337 20.905,8.267 20.905,8.267 C21.948,8.267 21.620,10.939 21.620,10.939 C21.460,11.646 21.90,11.731 20.118,12.344 C19.501,14.104 18.204,15.182 18.204,15.182 C18.204,15.182 18.63,16.525 18.56,16.841 C18.84,16.966 17.370,19.28 21.397,19.622 ZM15.225,28.999 L14.552,28.999 L13.520,26.249 L16.332,26.249 L15.225,28.999 Z"/>
 </svg>
 `;

  parent.insertAdjacentHTML("afterbegin", icon);
}

insertTriangle(asideLi);
insertTwitEmblem(twits);
insertManIcon(signatureEl);
