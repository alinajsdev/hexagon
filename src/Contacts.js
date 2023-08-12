import React from "react";

const Contacts = ({ media }) => {
  return (
    <>
      <svg
        width={media ? "150" : "280"}
        height={media ? "110" : "255"}
        viewBox="0 0 143 112"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M38.0433 3.6465H37.9563L4.6619 55.992H0L35.6253 0H35.6949L38.0433 3.6465Z"
          fill="#124D6F"
        />
        <path
          d="M142.521 55.9919H137.876L104.599 3.67794L106.878 -0.00012207H106.895L142.521 55.9919Z"
          fill="#17324A"
        />
        <path
          d="M106.876 -0.00012207L104.597 3.67794L104.562 3.64638H38.0432L35.6948 -0.00012207H106.876Z"
          fill="#136FA3"
        />
        <path
          d="M106.894 111.984V112H35.6606L37.9742 108.337H104.563L106.894 111.984Z"
          fill="#00213F"
        />
        <path
          d="M37.9737 108.338L35.6601 112H35.6253L6.92328 66.8842L0 55.9921H4.6619L11.5852 66.8842L37.9563 108.338H37.9737Z"
          fill="#001D38"
        />
        <path
          d="M142.519 55.9921L135.579 66.8842L106.894 111.984L104.563 108.338L130.934 66.8842L137.875 55.9921H142.519Z"
          fill="#001D38"
        />
        <path
          d="M37.6631 108.338L4.36865 55.9923L37.6631 3.64679H104.269L137.581 55.9923L104.269 108.338H37.6631Z"
          fill="url(#paint0_radial_130_847)"
        />
        <path
          d="M40.518 51.114C40.518 50.162 40.7373 49.308 41.176 48.552C41.624 47.796 42.226 47.208 42.982 46.788C43.7473 46.3587 44.5827 46.144 45.488 46.144C46.524 46.144 47.4433 46.4007 48.246 46.914C49.058 47.418 49.646 48.1367 50.01 49.07H48.092C47.84 48.5567 47.49 48.174 47.042 47.922C46.594 47.67 46.076 47.544 45.488 47.544C44.844 47.544 44.27 47.6887 43.766 47.978C43.262 48.2673 42.8653 48.6827 42.576 49.224C42.296 49.7653 42.156 50.3953 42.156 51.114C42.156 51.8327 42.296 52.4627 42.576 53.004C42.8653 53.5453 43.262 53.9653 43.766 54.264C44.27 54.5533 44.844 54.698 45.488 54.698C46.076 54.698 46.594 54.572 47.042 54.32C47.49 54.068 47.84 53.6853 48.092 53.172H50.01C49.646 54.1053 49.058 54.824 48.246 55.328C47.4433 55.832 46.524 56.084 45.488 56.084C44.5733 56.084 43.738 55.874 42.982 55.454C42.226 55.0247 41.624 54.432 41.176 53.676C40.7373 52.92 40.518 52.066 40.518 51.114ZM55.2241 56.126C54.4961 56.126 53.8381 55.9627 53.2501 55.636C52.6621 55.3 52.2001 54.8333 51.8641 54.236C51.5281 53.6293 51.3601 52.9293 51.3601 52.136C51.3601 51.352 51.5328 50.6567 51.8781 50.05C52.2235 49.4433 52.6948 48.9767 53.2921 48.65C53.8895 48.3233 54.5568 48.16 55.2941 48.16C56.0315 48.16 56.6988 48.3233 57.2961 48.65C57.8935 48.9767 58.3648 49.4433 58.7101 50.05C59.0555 50.6567 59.2281 51.352 59.2281 52.136C59.2281 52.92 59.0508 53.6153 58.6961 54.222C58.3415 54.8287 57.8561 55.3 57.2401 55.636C56.6335 55.9627 55.9615 56.126 55.2241 56.126ZM55.2241 54.74C55.6348 54.74 56.0175 54.642 56.3721 54.446C56.7361 54.25 57.0301 53.956 57.2541 53.564C57.4781 53.172 57.5901 52.696 57.5901 52.136C57.5901 51.576 57.4828 51.1047 57.2681 50.722C57.0535 50.33 56.7688 50.036 56.4141 49.84C56.0595 49.644 55.6768 49.546 55.2661 49.546C54.8555 49.546 54.4728 49.644 54.1181 49.84C53.7728 50.036 53.4975 50.33 53.2921 50.722C53.0868 51.1047 52.9841 51.576 52.9841 52.136C52.9841 52.9667 53.1941 53.6107 53.6141 54.068C54.0435 54.516 54.5801 54.74 55.2241 54.74ZM64.6979 48.16C65.3045 48.16 65.8459 48.286 66.3219 48.538C66.8072 48.79 67.1852 49.1633 67.4559 49.658C67.7265 50.1527 67.8619 50.75 67.8619 51.45V56H66.2799V51.688C66.2799 50.9973 66.1072 50.47 65.7619 50.106C65.4165 49.7327 64.9452 49.546 64.3479 49.546C63.7505 49.546 63.2745 49.7327 62.9199 50.106C62.5745 50.47 62.4019 50.9973 62.4019 51.688V56H60.8059V48.286H62.4019V49.168C62.6632 48.8507 62.9945 48.6033 63.3959 48.426C63.8065 48.2487 64.2405 48.16 64.6979 48.16ZM71.7597 49.588V53.858C71.7597 54.1473 71.825 54.3573 71.9557 54.488C72.0957 54.6093 72.329 54.67 72.6557 54.67H73.6357V56H72.3757C71.657 56 71.1063 55.832 70.7237 55.496C70.341 55.16 70.1497 54.614 70.1497 53.858V49.588H69.2397V48.286H70.1497V46.368H71.7597V48.286H73.6357V49.588H71.7597ZM74.5746 52.108C74.5746 51.3333 74.7333 50.6473 75.0506 50.05C75.3773 49.4527 75.816 48.9907 76.3666 48.664C76.9266 48.328 77.5426 48.16 78.2146 48.16C78.8213 48.16 79.3486 48.2813 79.7966 48.524C80.254 48.7573 80.618 49.0513 80.8886 49.406V48.286H82.4986V56H80.8886V54.852C80.618 55.216 80.2493 55.5193 79.7826 55.762C79.316 56.0047 78.784 56.126 78.1866 56.126C77.524 56.126 76.9173 55.958 76.3666 55.622C75.816 55.2767 75.3773 54.8007 75.0506 54.194C74.7333 53.578 74.5746 52.8827 74.5746 52.108ZM80.8886 52.136C80.8886 51.604 80.7766 51.142 80.5526 50.75C80.338 50.358 80.0533 50.0593 79.6986 49.854C79.344 49.6487 78.9613 49.546 78.5506 49.546C78.14 49.546 77.7573 49.6487 77.4026 49.854C77.048 50.05 76.7586 50.344 76.5346 50.736C76.32 51.1187 76.2126 51.576 76.2126 52.108C76.2126 52.64 76.32 53.1067 76.5346 53.508C76.7586 53.9093 77.048 54.2173 77.4026 54.432C77.7666 54.6373 78.1493 54.74 78.5506 54.74C78.9613 54.74 79.344 54.6373 79.6986 54.432C80.0533 54.2267 80.338 53.928 80.5526 53.536C80.7766 53.1347 80.8886 52.668 80.8886 52.136ZM84.0629 52.136C84.0629 51.3427 84.2216 50.6473 84.5389 50.05C84.8656 49.4433 85.3136 48.9767 85.8829 48.65C86.4523 48.3233 87.1056 48.16 87.8429 48.16C88.7763 48.16 89.5463 48.384 90.1529 48.832C90.7689 49.2707 91.1843 49.9007 91.3989 50.722H89.6769C89.5369 50.3393 89.3129 50.0407 89.0049 49.826C88.6969 49.6113 88.3096 49.504 87.8429 49.504C87.1896 49.504 86.6669 49.7373 86.2749 50.204C85.8923 50.6613 85.7009 51.3053 85.7009 52.136C85.7009 52.9667 85.8923 53.6153 86.2749 54.082C86.6669 54.5487 87.1896 54.782 87.8429 54.782C88.7669 54.782 89.3783 54.376 89.6769 53.564H91.3989C91.1749 54.348 90.7549 54.9733 90.1389 55.44C89.5229 55.8973 88.7576 56.126 87.8429 56.126C87.1056 56.126 86.4523 55.9627 85.8829 55.636C85.3136 55.3 84.8656 54.8333 84.5389 54.236C84.2216 53.6293 84.0629 52.9293 84.0629 52.136ZM94.8515 49.588V53.858C94.8515 54.1473 94.9168 54.3573 95.0475 54.488C95.1875 54.6093 95.4208 54.67 95.7475 54.67H96.7275V56H95.4675C94.7488 56 94.1981 55.832 93.8155 55.496C93.4328 55.16 93.2415 54.614 93.2415 53.858V49.588H92.3315V48.286H93.2415V46.368H94.8515V48.286H96.7275V49.588H94.8515ZM100.998 56.126C100.392 56.126 99.8458 56.0187 99.3604 55.804C98.8844 55.58 98.5064 55.2813 98.2264 54.908C97.9464 54.5253 97.7971 54.1007 97.7784 53.634H99.4304C99.4584 53.9607 99.6124 54.236 99.8924 54.46C100.182 54.6747 100.541 54.782 100.97 54.782C101.418 54.782 101.764 54.698 102.006 54.53C102.258 54.3527 102.384 54.1287 102.384 53.858C102.384 53.5687 102.244 53.354 101.964 53.214C101.694 53.074 101.26 52.92 100.662 52.752C100.084 52.5933 99.6124 52.4393 99.2484 52.29C98.8844 52.1407 98.5671 51.912 98.2964 51.604C98.0351 51.296 97.9044 50.89 97.9044 50.386C97.9044 49.9753 98.0258 49.602 98.2684 49.266C98.5111 48.9207 98.8564 48.65 99.3044 48.454C99.7618 48.258 100.284 48.16 100.872 48.16C101.75 48.16 102.454 48.384 102.986 48.832C103.528 49.2707 103.817 49.8727 103.854 50.638H102.258C102.23 50.2927 102.09 50.0173 101.838 49.812C101.586 49.6067 101.246 49.504 100.816 49.504C100.396 49.504 100.074 49.5833 99.8504 49.742C99.6264 49.9007 99.5144 50.1107 99.5144 50.372C99.5144 50.5773 99.5891 50.75 99.7384 50.89C99.8878 51.03 100.07 51.142 100.284 51.226C100.499 51.3007 100.816 51.3987 101.236 51.52C101.796 51.6693 102.254 51.8233 102.608 51.982C102.972 52.1313 103.285 52.3553 103.546 52.654C103.808 52.9527 103.943 53.3493 103.952 53.844C103.952 54.2827 103.831 54.6747 103.588 55.02C103.346 55.3653 103 55.636 102.552 55.832C102.114 56.028 101.596 56.126 100.998 56.126Z"
          fill="white"
        />
        <defs>
          <radialGradient
            id="paint0_radial_130_847"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(70.9749 55.9923) rotate(90) scale(52.3455 66.6062)"
          >
            <stop stop-color="#09447A" />
            <stop offset="1" stop-color="#092F53" />
          </radialGradient>
        </defs>
      </svg>
    </>
  );
};

export default Contacts;
