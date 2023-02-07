import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Logo = ({ darkMode }) => {
  const color = !darkMode ? "#4E7440" : "#00cc00";
  const colorDescr = !darkMode ? "#1c1c1c" : "#f1f1f1";
  return (
    <Link
      to="/"
      variant="small"
      className={
        "mr-4 w-24 cursor-pointer py-1.5 transition-transform hover:scale-[1.05] md:w-28 lg:w-40"
      }
    >
      <svg
        className="mb-1"
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        xlink="http://www.w3.org/1999/xlink"
        width="100%"
        height="100%"
        viewBox="2.0199999809265137 -42.349998474121094 311.1300048828125 43.15999984741211"
      >
        <g fill={color}>
          <path d="M13.65 -5.99C13.27 -7.4 13.07 -9.28 13.07 -11.63L13.07 -36.45C13.07 -38.22 14.54 -39.11 17.47 -39.11C20.6 -39.11 23.02 -38.1 24.73 -36.1C26.45 -34.09 27.31 -31.53 27.31 -28.4C27.31 -25.24 26.5 -22.74 24.88 -20.88C23.26 -19.03 21 -18.11 18.11 -18.11C17.34 -18.11 16.71 -18.17 16.23 -18.31C15.75 -18.44 15.43 -18.51 15.27 -18.51C14.96 -18.51 14.73 -18.38 14.58 -18.11C14.42 -17.84 14.35 -17.51 14.35 -17.12C14.35 -16.47 14.84 -15.97 15.82 -15.62C16.81 -15.27 18.01 -15.1 19.44 -15.1C22.52 -15.1 25.11 -15.71 27.19 -16.92C29.27 -18.14 30.82 -19.76 31.82 -21.78C32.82 -23.81 33.32 -26.07 33.32 -28.58C33.32 -32.63 31.93 -35.94 29.16 -38.5C26.38 -41.06 22.14 -42.35 16.43 -42.35C13.92 -42.35 11.31 -42.09 8.59 -41.57C5.87 -41.05 3.68 -40.46 2.02 -39.8L2.72 -37.66L6.07 -37.66C6.54 -37.66 6.87 -37.56 7.06 -37.34C7.25 -37.13 7.35 -36.77 7.35 -36.27L7.35 -7.69C7.35 -5.96 7.1 -4.72 6.6 -3.99C6.09 -3.26 5.11 -2.7 3.64 -2.31L2.31 -1.97L3.01 0L15.68 0L16.43 -0.93L15.68 -1.97C14.71 -3.24 14.04 -4.58 13.65 -5.99Z M38.64 -31.73C37.22 -28.47 36.5 -24.8 36.5 -20.71C36.5 -16.62 37.22 -12.96 38.64 -9.72C40.07 -6.48 42.22 -3.91 45.1 -2.02C47.97 -0.13 51.49 0.81 55.65 0.81C59.82 0.81 63.34 -0.13 66.21 -2.02C69.08 -3.91 71.24 -6.48 72.69 -9.72C74.14 -12.96 74.86 -16.62 74.86 -20.71C74.86 -24.8 74.14 -28.47 72.69 -31.73C71.24 -34.99 69.08 -37.57 66.21 -39.48C63.34 -41.39 59.82 -42.35 55.65 -42.35C51.49 -42.35 47.97 -41.39 45.1 -39.48C42.22 -37.57 40.07 -34.99 38.64 -31.73ZM67.37 -28.95C68.16 -26.12 68.55 -23.31 68.55 -20.54C68.55 -17.18 68.03 -14.14 66.99 -11.43C65.95 -8.71 64.44 -6.56 62.45 -4.98C60.46 -3.39 58.12 -2.6 55.42 -2.6C52.72 -2.6 50.42 -3.37 48.51 -4.92C46.6 -6.46 45.16 -8.56 44.2 -11.22C43.23 -13.88 42.75 -16.89 42.75 -20.25C42.75 -23.72 43.27 -26.88 44.31 -29.74C45.36 -32.59 46.87 -34.86 48.86 -36.53C50.84 -38.21 53.2 -39.05 55.94 -39.05C58.99 -39.05 61.46 -38.08 63.35 -36.13C65.24 -34.18 66.58 -31.79 67.37 -28.95Z M124.76 -5.24C124.16 -6.84 123.76 -8.83 123.57 -11.22L122.41 -27.07C122.22 -29.97 122.12 -31.7 122.12 -32.28C122.12 -33.86 122.29 -35.2 122.62 -36.3C122.94 -37.4 123.47 -38.49 124.21 -39.57L124.9 -40.61L124.03 -41.54L115.7 -41.54L103.44 -12.44L91.52 -41.54L80.99 -41.54L80.36 -39.57L81.69 -39.22C82.96 -38.91 83.84 -38.47 84.32 -37.89C84.8 -37.31 85.04 -36.37 85.04 -35.06C85.04 -34.36 85 -33.57 84.93 -32.69C84.85 -31.8 84.79 -31.1 84.75 -30.6L83.19 -7.69C83.07 -5.96 82.74 -4.74 82.18 -4.05C81.62 -3.36 80.59 -2.78 79.08 -2.31L77.75 -1.97L78.39 0L89.26 0L90.13 -0.93L89.44 -1.97C88.71 -3.05 88.17 -4.14 87.85 -5.24C87.52 -6.33 87.36 -7.67 87.36 -9.26C87.36 -10.34 87.47 -12.23 87.7 -14.93L88.98 -32.74L101.07 -4.17L104.19 -4.17L116.28 -32.74L117.96 -8.62L118.07 -6.48C118.07 -5.28 117.83 -4.39 117.35 -3.79C116.87 -3.19 116.01 -2.7 114.78 -2.31L113.45 -1.97L114.14 0L126.81 0L127.56 -0.93C126.29 -2.2 125.35 -3.63 124.76 -5.24Z M155.91 -1.97L156.6 0L169.62 0L170.37 -0.93C168.98 -2.01 167.92 -3.01 167.19 -3.93C166.46 -4.86 165.78 -6.21 165.17 -7.98L153.54 -41.54L142.37 -41.54L141.68 -39.57L143.01 -39.22C143.93 -38.99 144.6 -38.68 145 -38.3C145.41 -37.91 145.61 -37.37 145.61 -36.68C145.61 -36.06 145.4 -35.12 144.98 -33.84L135.89 -7.69C135.28 -5.92 134.62 -4.69 133.93 -3.99C133.23 -3.3 132.11 -2.74 130.57 -2.31L129.24 -1.97L129.93 0L140.58 0L141.68 -0.93L141.16 -1.97C140.62 -3.01 140.35 -4.18 140.35 -5.5C140.35 -6.88 140.79 -8.91 141.68 -11.57L143.07 -15.79L156.43 -15.79L159.21 -7.69C159.63 -6.42 159.84 -5.48 159.84 -4.86C159.84 -4.17 159.64 -3.63 159.24 -3.24C158.83 -2.85 158.17 -2.55 157.24 -2.31ZM144.28 -19.38L149.66 -35.58L155.21 -19.38Z M173.32 -1.97L174.02 0L231.52 0L232.16 -1.85L230.94 -2.2C229.55 -2.58 228.63 -3.1 228.17 -3.76C227.7 -4.42 227.47 -5.59 227.47 -7.29L227.47 -29.91C227.47 -32.18 227.66 -34.03 228.05 -35.43C228.44 -36.84 229.09 -38.22 230.02 -39.57L230.77 -40.61L230.02 -41.54L217.29 -41.54L216.65 -39.57L218.04 -39.22C219.51 -38.8 220.48 -38.24 220.96 -37.55C221.44 -36.85 221.69 -35.62 221.69 -33.84L221.69 -7.69C221.69 -6.42 221.59 -5.49 221.4 -4.89C221.2 -4.29 220.86 -3.88 220.36 -3.64C219.85 -3.41 219.08 -3.3 218.04 -3.3L208.55 -3.3C207.36 -3.3 206.57 -3.56 206.18 -4.08C205.8 -4.6 205.6 -5.67 205.6 -7.29L205.6 -29.91C205.6 -32.18 205.81 -34.05 206.21 -35.49C206.62 -36.94 207.32 -38.3 208.32 -39.57L209.02 -40.61L208.32 -41.54L195.83 -41.54L195.07 -39.57L196.46 -39.22C197.97 -38.8 198.96 -38.24 199.44 -37.55C199.92 -36.85 200.17 -35.62 200.17 -33.84L200.17 -7.69C200.17 -6.46 200.05 -5.53 199.82 -4.92C199.59 -4.3 199.2 -3.88 198.66 -3.64C198.12 -3.41 197.31 -3.3 196.23 -3.3L187.79 -3.3C186.74 -3.3 185.97 -3.41 185.47 -3.64C184.97 -3.88 184.62 -4.29 184.43 -4.89C184.24 -5.49 184.14 -6.42 184.14 -7.69L184.14 -29.91C184.14 -32.15 184.34 -33.98 184.75 -35.4C185.15 -36.83 185.82 -38.22 186.74 -39.57L187.5 -40.61L186.74 -41.54L174.02 -41.54L173.32 -39.57L174.71 -39.22C176.14 -38.8 177.1 -38.24 177.6 -37.55C178.1 -36.85 178.36 -35.62 178.36 -33.84L178.36 -7.69C178.36 -6.46 178.25 -5.51 178.04 -4.83C177.83 -4.16 177.47 -3.64 176.97 -3.3C176.47 -2.95 175.71 -2.62 174.71 -2.31Z M247.14 -3.82C246.68 -4.47 246.45 -5.63 246.45 -7.29L246.45 -29.91C246.45 -32.22 246.64 -34.09 247.02 -35.52C247.41 -36.95 248.09 -38.3 249.05 -39.57L249.8 -40.61L249.05 -41.54L236.32 -41.54L235.63 -39.57L237.02 -39.22C238.48 -38.8 239.47 -38.24 239.97 -37.55C240.47 -36.85 240.72 -35.62 240.72 -33.84L240.72 -7.69C240.72 -6.46 240.61 -5.51 240.4 -4.83C240.19 -4.16 239.83 -3.64 239.33 -3.3C238.83 -2.95 238.06 -2.62 237.02 -2.31L235.63 -1.97L236.32 0L250.55 0L251.13 -1.85L249.92 -2.2C248.53 -2.62 247.6 -3.16 247.14 -3.82ZM272.36 -1.5L271.44 -3.18C270.74 -2.64 269.99 -2.37 269.18 -2.37C268.68 -2.37 268.26 -2.52 267.91 -2.81C267.56 -3.1 267.23 -3.53 266.93 -4.11L261.49 -14.87C260.52 -16.76 259.41 -18.2 258.16 -19.21C256.91 -20.21 255.36 -20.87 253.5 -21.17L265.19 -36.1C265.92 -37.02 266.65 -37.73 267.36 -38.21C268.07 -38.69 268.85 -39.03 269.7 -39.22L271.09 -39.57L270.4 -41.54L260.45 -41.54L259.4 -40.61L260.04 -39.69C260.58 -38.95 260.85 -38.1 260.85 -37.14C260.85 -36.02 260.48 -35 259.75 -34.07L250.32 -22.04L248.99 -22.04C248.18 -22.04 247.78 -21.58 247.78 -20.65C247.78 -20.54 247.81 -20.41 247.86 -20.28C247.92 -20.14 247.99 -20.06 248.07 -20.02C249.45 -19.55 250.61 -18.97 251.54 -18.25C252.46 -17.54 253.23 -16.58 253.85 -15.39L259.12 -4.86C260.04 -2.97 261.11 -1.55 262.33 -0.61C263.54 0.34 265.04 0.81 266.81 0.81C269.01 0.81 270.86 0.04 272.36 -1.5Z M298.69 -1.97L299.38 0L312.4 0L313.15 -0.93C311.76 -2.01 310.7 -3.01 309.97 -3.93C309.23 -4.86 308.56 -6.21 307.94 -7.98L296.31 -41.54L285.15 -41.54L284.45 -39.57L285.79 -39.22C286.71 -38.99 287.38 -38.68 287.78 -38.3C288.19 -37.91 288.39 -37.37 288.39 -36.68C288.39 -36.06 288.18 -35.12 287.75 -33.84L278.67 -7.69C278.05 -5.92 277.4 -4.69 276.7 -3.99C276.01 -3.3 274.89 -2.74 273.35 -2.31L272.02 -1.97L272.71 0L283.36 0L284.45 -0.93L283.93 -1.97C283.39 -3.01 283.12 -4.18 283.12 -5.5C283.12 -6.88 283.57 -8.91 284.45 -11.57L285.84 -15.79L299.21 -15.79L301.98 -7.69C302.41 -6.42 302.62 -5.48 302.62 -4.86C302.62 -4.17 302.42 -3.63 302.01 -3.24C301.61 -2.85 300.94 -2.55 300.02 -2.31ZM287.06 -19.38L292.44 -35.58L297.99 -19.38Z"></path>
        </g>
      </svg>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        xlink="http://www.w3.org/1999/xlink"
        width="100%"
        height="100%"
        viewBox="0.25 -14.149999618530273 311.1199951171875 17.869998931884766"
      >
        <g fill={colorDescr}>
          <path d="M1.47 -1.1C1.3 -0.98 1.05 -0.87 0.71 -0.77L0.25 -0.66L0.48 0L9.93 0C10.5 0 10.95 0.12 11.28 0.35C11.62 0.58 11.89 0.91 12.09 1.34C12.3 1.77 12.53 2.41 12.79 3.26L12.9 3.72L13.58 3.49L13.58 -0.81C13 -0.81 12.51 -0.91 12.1 -1.12C11.7 -1.32 11.49 -1.63 11.49 -2.02L11.49 -9.97C11.49 -10.74 11.55 -11.36 11.68 -11.84C11.8 -12.32 12.02 -12.77 12.34 -13.19L12.59 -13.54L12.34 -13.85L8.1 -13.85L7.87 -13.19L8.33 -13.07C8.82 -12.93 9.15 -12.75 9.31 -12.52C9.48 -12.28 9.56 -11.87 9.56 -11.28L9.56 -2.56C9.56 -2.14 9.53 -1.83 9.47 -1.63C9.4 -1.43 9.29 -1.29 9.11 -1.21C8.94 -1.14 8.68 -1.1 8.33 -1.1L5.07 -1.1C4.72 -1.1 4.46 -1.14 4.29 -1.21C4.12 -1.29 4 -1.43 3.93 -1.63C3.87 -1.83 3.84 -2.14 3.84 -2.56L3.84 -9.97C3.84 -10.74 3.9 -11.36 4.03 -11.84C4.16 -12.32 4.39 -12.77 4.72 -13.19L4.98 -13.54L4.72 -13.85L0.48 -13.85L0.25 -13.19L0.71 -13.07C1.19 -12.93 1.51 -12.75 1.68 -12.52C1.84 -12.28 1.93 -11.87 1.93 -11.28L1.93 -2.56C1.93 -2.15 1.89 -1.84 1.82 -1.61C1.75 -1.39 1.63 -1.21 1.47 -1.1Z M30.27 -2.7C30.27 -0.9 28.81 0 25.88 0L20.63 0L20.44 -0.62L20.82 -0.73C21.29 -0.84 21.59 -1 21.74 -1.21C21.89 -1.43 21.96 -1.83 21.96 -2.39L21.96 -7.96C21.96 -8.12 21.93 -8.22 21.87 -8.28C21.82 -8.34 21.72 -8.37 21.59 -8.37L20.55 -8.37L20.34 -9.04C20.87 -9.25 21.57 -9.43 22.45 -9.58C23.33 -9.74 24.18 -9.82 25.01 -9.82C26.56 -9.82 27.72 -9.59 28.48 -9.13C29.24 -8.67 29.62 -8.03 29.62 -7.19C29.62 -6.72 29.5 -6.29 29.26 -5.9C29.02 -5.52 28.69 -5.21 28.27 -4.98C28.91 -4.8 29.4 -4.51 29.75 -4.12C30.1 -3.72 30.27 -3.25 30.27 -2.7ZM27.66 -3.95C27.25 -4.24 26.69 -4.4 25.97 -4.44L25.84 -4.44C25.44 -4.44 25.1 -4.49 24.82 -4.6C24.55 -4.71 24.41 -4.85 24.41 -5.03C24.41 -5.26 24.48 -5.38 24.62 -5.38C24.67 -5.38 24.78 -5.36 24.93 -5.31C25.08 -5.27 25.28 -5.25 25.53 -5.25C26.22 -5.25 26.76 -5.4 27.15 -5.71C27.53 -6.02 27.73 -6.45 27.73 -7.02C27.73 -7.58 27.51 -8.03 27.09 -8.34C26.67 -8.66 26.03 -8.81 25.18 -8.81C24.59 -8.81 24.2 -8.74 24 -8.58C23.81 -8.43 23.72 -8.23 23.72 -8L23.72 -3.24C23.72 -2.29 23.93 -1.67 24.36 -1.39C24.79 -1.11 25.31 -0.96 25.91 -0.96C26.54 -0.96 27.09 -1.12 27.56 -1.42C28.03 -1.72 28.27 -2.17 28.27 -2.78C28.27 -3.28 28.06 -3.67 27.66 -3.95Z M44.85 -0.17C45.5 -0.47 46.07 -0.89 46.54 -1.45C46.6 -1.5 46.62 -1.56 46.62 -1.62C46.62 -1.75 46.56 -1.87 46.45 -2C46.33 -2.12 46.22 -2.18 46.12 -2.18C46.06 -2.18 46 -2.15 45.95 -2.1C45.2 -1.37 44.26 -1 43.13 -1C42.21 -1 41.5 -1.33 41.01 -1.98C40.52 -2.63 40.28 -3.52 40.28 -4.67C40.28 -6.02 40.51 -7.05 40.97 -7.78C41.43 -8.51 42.08 -8.87 42.9 -8.87C43.48 -8.87 43.93 -8.69 44.25 -8.32C44.57 -7.95 44.73 -7.52 44.73 -7.02C44.73 -6.43 44.52 -5.91 44.09 -5.48C43.65 -5.04 43.05 -4.82 42.28 -4.82C41.94 -4.82 41.65 -4.86 41.43 -4.95C41.22 -5.03 41.09 -5.07 41.05 -5.07C40.97 -5.07 40.9 -5.03 40.85 -4.94C40.79 -4.85 40.76 -4.75 40.76 -4.65C40.76 -4.35 41.01 -4.13 41.51 -3.97C42.01 -3.82 42.47 -3.74 42.88 -3.74C43.65 -3.74 44.31 -3.9 44.87 -4.21C45.42 -4.53 45.84 -4.94 46.13 -5.44C46.42 -5.94 46.56 -6.46 46.56 -7C46.56 -7.5 46.44 -7.97 46.2 -8.4C45.95 -8.83 45.58 -9.18 45.09 -9.44C44.59 -9.7 43.99 -9.83 43.29 -9.83C42.28 -9.83 41.41 -9.62 40.65 -9.19C39.9 -8.76 39.32 -8.15 38.91 -7.38C38.5 -6.6 38.29 -5.7 38.29 -4.67C38.29 -3.69 38.47 -2.83 38.84 -2.08C39.21 -1.34 39.72 -0.76 40.39 -0.35C41.06 0.06 41.84 0.27 42.73 0.27C43.48 0.27 44.19 0.12 44.85 -0.17Z M61.57 -7.89C61.71 -7.67 61.84 -7.33 61.97 -6.88L62.06 -6.48L62.66 -6.67L62.66 -9.83L62.35 -10.09L62.06 -9.83C61.9 -9.71 61.65 -9.62 61.33 -9.56C61.01 -9.51 60.58 -9.49 60.04 -9.49L56.63 -9.49C56.09 -9.49 55.66 -9.51 55.33 -9.56C55.01 -9.62 54.76 -9.71 54.58 -9.83L54.29 -10.09L53.98 -9.83L53.98 -6.67L54.58 -6.48L54.7 -6.88C54.81 -7.33 54.94 -7.67 55.08 -7.89C55.22 -8.11 55.41 -8.26 55.64 -8.34C55.87 -8.42 56.21 -8.47 56.65 -8.47L56.84 -8.47C57.08 -8.47 57.25 -8.38 57.33 -8.21C57.41 -8.03 57.46 -7.67 57.46 -7.13L57.46 -3.57C57.46 -2.83 57.4 -2.25 57.28 -1.82C57.17 -1.39 56.96 -0.98 56.66 -0.6L56.43 -0.29L56.66 0L60.52 0L60.75 -0.6L60.31 -0.73C59.86 -0.86 59.56 -1.03 59.41 -1.23C59.26 -1.44 59.19 -1.81 59.19 -2.35L59.19 -7.13C59.19 -7.67 59.23 -8.03 59.32 -8.21C59.4 -8.38 59.56 -8.47 59.81 -8.47L60.04 -8.47C60.46 -8.47 60.79 -8.42 61.02 -8.34C61.25 -8.26 61.44 -8.11 61.57 -7.89Z M73.49 -1.81C73.26 -2.2 73.15 -2.78 73.15 -3.57L73.15 -6.02C73.15 -6.72 73.21 -7.3 73.33 -7.74C73.45 -8.19 73.66 -8.61 73.96 -9.01L74.19 -9.31L73.96 -9.58L70.1 -9.58L69.89 -9.01L70.29 -8.87C70.73 -8.74 71.03 -8.57 71.18 -8.35C71.34 -8.13 71.41 -7.76 71.41 -7.23L71.41 -2.35C71.41 -1.83 71.34 -1.46 71.18 -1.24C71.03 -1.03 70.73 -0.86 70.29 -0.73L69.89 -0.6L70.1 0L75.04 0C76.5 0 77.58 -0.25 78.27 -0.76C78.96 -1.27 79.3 -1.97 79.3 -2.85C79.3 -3.37 79.15 -3.84 78.85 -4.26C78.55 -4.69 78.1 -5.03 77.53 -5.28C76.95 -5.54 76.26 -5.67 75.46 -5.67C74.97 -5.67 74.54 -5.61 74.17 -5.51C73.8 -5.4 73.61 -5.23 73.61 -4.99C73.61 -4.89 73.63 -4.8 73.67 -4.72C73.71 -4.65 73.77 -4.61 73.84 -4.61C73.89 -4.61 74.03 -4.64 74.25 -4.71C74.47 -4.77 74.76 -4.8 75.14 -4.8C75.77 -4.8 76.29 -4.62 76.7 -4.25C77.11 -3.89 77.31 -3.44 77.31 -2.91C77.31 -2.33 77.13 -1.86 76.76 -1.49C76.4 -1.13 75.93 -0.94 75.37 -0.94C74.94 -0.94 74.58 -0.99 74.28 -1.09C73.97 -1.19 73.71 -1.43 73.49 -1.81ZM79.86 -0.6L80.03 0L84.39 0L84.56 -0.58L84.2 -0.69C83.9 -0.78 83.68 -0.88 83.54 -0.97C83.4 -1.07 83.3 -1.21 83.23 -1.4C83.17 -1.58 83.14 -1.86 83.14 -2.22L83.14 -6.02C83.14 -6.74 83.2 -7.32 83.32 -7.76C83.44 -8.21 83.65 -8.62 83.95 -9.01L84.16 -9.31L83.95 -9.58L80.03 -9.58L79.86 -9.01L80.26 -8.87C80.71 -8.74 81.01 -8.57 81.16 -8.36C81.31 -8.15 81.38 -7.77 81.38 -7.23L81.38 -2.35C81.38 -1.81 81.31 -1.44 81.16 -1.23C81.01 -1.03 80.71 -0.86 80.26 -0.73Z M113.56 -2.7C113.56 -0.9 112.1 0 109.16 0L103.92 0L103.73 -0.62L104.11 -0.73C104.57 -0.84 104.88 -1 105.03 -1.21C105.18 -1.43 105.25 -1.83 105.25 -2.39L105.25 -7.96C105.25 -8.12 105.22 -8.22 105.16 -8.28C105.1 -8.34 105.01 -8.37 104.88 -8.37L103.84 -8.37L103.63 -9.04C104.16 -9.25 104.86 -9.43 105.74 -9.58C106.62 -9.74 107.47 -9.82 108.3 -9.82C109.85 -9.82 111.01 -9.59 111.77 -9.13C112.53 -8.67 112.91 -8.03 112.91 -7.19C112.91 -6.72 112.79 -6.29 112.55 -5.9C112.31 -5.52 111.98 -5.21 111.56 -4.98C112.2 -4.8 112.69 -4.51 113.04 -4.12C113.39 -3.72 113.56 -3.25 113.56 -2.7ZM110.95 -3.95C110.54 -4.24 109.98 -4.4 109.26 -4.44L109.13 -4.44C108.73 -4.44 108.39 -4.49 108.11 -4.6C107.84 -4.71 107.7 -4.85 107.7 -5.03C107.7 -5.26 107.77 -5.38 107.91 -5.38C107.96 -5.38 108.06 -5.36 108.22 -5.31C108.37 -5.27 108.57 -5.25 108.82 -5.25C109.51 -5.25 110.05 -5.4 110.44 -5.71C110.82 -6.02 111.02 -6.45 111.02 -7.02C111.02 -7.58 110.8 -8.03 110.38 -8.34C109.95 -8.66 109.32 -8.81 108.47 -8.81C107.88 -8.81 107.49 -8.74 107.29 -8.58C107.1 -8.43 107 -8.23 107 -8L107 -3.24C107 -2.29 107.22 -1.67 107.65 -1.39C108.08 -1.11 108.6 -0.96 109.2 -0.96C109.83 -0.96 110.38 -1.12 110.85 -1.42C111.32 -1.72 111.56 -2.17 111.56 -2.78C111.56 -3.28 111.35 -3.67 110.95 -3.95Z M133.2 -0.6L133.38 0L137.72 0L137.89 -0.58L137.52 -0.69C137.22 -0.8 136.99 -0.89 136.85 -0.98C136.71 -1.07 136.6 -1.21 136.54 -1.4C136.48 -1.58 136.44 -1.86 136.44 -2.22L136.44 -6.02C136.44 -6.72 136.5 -7.3 136.63 -7.73C136.75 -8.17 136.95 -8.59 137.23 -9.01L137.47 -9.31L137.23 -9.58L133.38 -9.58L133.2 -9.01L133.57 -8.87C134.03 -8.74 134.34 -8.57 134.49 -8.36C134.63 -8.15 134.71 -7.77 134.71 -7.23L134.71 -2.35C134.71 -1.81 134.63 -1.44 134.49 -1.23C134.34 -1.03 134.03 -0.86 133.57 -0.73ZM142.13 -0.86C142.04 -0.94 141.94 -1.07 141.82 -1.25L140.32 -3.68C140.05 -4.15 139.59 -4.54 138.93 -4.86L141.34 -7.91C141.56 -8.19 141.78 -8.4 142.01 -8.55C142.23 -8.7 142.49 -8.81 142.77 -8.87L143.14 -8.99L142.92 -9.58L139.78 -9.58L139.47 -9.29L139.63 -8.99C139.72 -8.77 139.76 -8.54 139.76 -8.31C139.76 -7.9 139.63 -7.53 139.37 -7.21L137.64 -5.11L137.29 -5.11C137.07 -5.11 136.96 -4.98 136.96 -4.72C136.96 -4.6 136.99 -4.52 137.04 -4.49C137.09 -4.47 137.19 -4.42 137.33 -4.36C137.47 -4.29 137.62 -4.21 137.76 -4.12C137.91 -4.02 138.04 -3.88 138.14 -3.7L139.47 -1.48C139.83 -0.88 140.18 -0.44 140.53 -0.15C140.88 0.13 141.32 0.27 141.84 0.27C142.46 0.27 143.01 0.03 143.48 -0.44L143.17 -0.98C142.96 -0.82 142.72 -0.73 142.46 -0.73C142.33 -0.73 142.22 -0.77 142.13 -0.86Z M156.21 -0.19C156.76 -0.5 157.3 -1.03 157.83 -1.77C157.83 -1.05 157.94 -0.53 158.17 -0.21C158.4 0.11 158.78 0.27 159.31 0.27C159.63 0.27 159.99 0.16 160.37 -0.06C160.76 -0.28 161.12 -0.57 161.45 -0.94L161.09 -1.45C160.76 -1.21 160.44 -1.1 160.12 -1.1C159.74 -1.1 159.54 -1.3 159.54 -1.7L159.54 -8C159.54 -8.16 159.56 -8.29 159.6 -8.4C159.64 -8.51 159.7 -8.63 159.79 -8.75L160.02 -9.1L159.81 -9.35C159.43 -9.38 158.85 -9.46 158.08 -9.58C157.16 -9.75 156.46 -9.83 155.96 -9.83C154.94 -9.83 154.06 -9.62 153.3 -9.18C152.55 -8.74 151.97 -8.12 151.57 -7.3C151.16 -6.48 150.96 -5.52 150.96 -4.42C150.96 -3.41 151.12 -2.56 151.43 -1.85C151.75 -1.14 152.17 -0.61 152.7 -0.26C153.22 0.09 153.8 0.27 154.41 0.27C155.06 0.27 155.65 0.12 156.21 -0.19ZM153.61 -2.08C153.19 -2.66 152.99 -3.56 152.99 -4.78C152.99 -6.04 153.24 -7.02 153.76 -7.72C154.27 -8.42 155 -8.77 155.94 -8.77C156.6 -8.77 157.23 -8.57 157.83 -8.18L157.83 -2.97C157.48 -2.38 157.08 -1.94 156.63 -1.65C156.18 -1.36 155.7 -1.21 155.18 -1.21C154.55 -1.21 154.03 -1.5 153.61 -2.08Z M174.14 -5.11L173.77 -5.11L172.32 -7.21C172.17 -7.42 172.07 -7.59 172.03 -7.72C172 -7.86 171.98 -8.02 171.98 -8.2C171.98 -8.34 172.01 -8.49 172.07 -8.66C172.14 -8.83 172.18 -8.93 172.19 -8.99L172.34 -9.29L172.02 -9.58L168.89 -9.58L168.7 -8.99L169.1 -8.87C169.39 -8.81 169.64 -8.7 169.86 -8.56C170.07 -8.42 170.28 -8.2 170.47 -7.91L172.54 -4.84C171.98 -4.57 171.57 -4.18 171.3 -3.68L170.01 -1.25C169.89 -1.07 169.79 -0.94 169.69 -0.86C169.6 -0.77 169.48 -0.73 169.34 -0.73C169.09 -0.73 168.86 -0.82 168.64 -0.98L168.35 -0.44C168.87 0.03 169.41 0.27 169.97 0.27C170.5 0.27 170.92 0.11 171.24 -0.22C171.57 -0.55 171.93 -1.15 172.34 -2.02L173.08 -3.45C173.19 -3.68 173.33 -3.86 173.49 -3.99C173.65 -4.12 173.83 -4.24 174.04 -4.34C174.21 -4.43 174.32 -4.5 174.39 -4.56C174.45 -4.62 174.48 -4.7 174.48 -4.8C174.48 -5.01 174.37 -5.11 174.14 -5.11ZM173.42 -0.6L173.65 0L177.59 0L177.78 -0.58L177.43 -0.69C177.13 -0.78 176.93 -0.93 176.84 -1.12C176.75 -1.31 176.7 -1.68 176.7 -2.22L176.7 -6.02C176.7 -6.74 176.76 -7.31 176.88 -7.75C176.99 -8.19 177.2 -8.61 177.49 -9.01L177.72 -9.31L177.49 -9.58L173.65 -9.58L173.42 -9.01L173.81 -8.87C174.27 -8.74 174.58 -8.57 174.73 -8.36C174.89 -8.15 174.97 -7.77 174.97 -7.23L174.97 -2.35C174.97 -1.81 174.89 -1.44 174.73 -1.23C174.58 -1.03 174.27 -0.86 173.81 -0.73ZM181.99 -0.85C181.9 -0.93 181.79 -1.06 181.66 -1.25L180.37 -3.68C180.1 -4.18 179.7 -4.57 179.17 -4.84L181.19 -7.91C181.52 -8.41 181.98 -8.73 182.58 -8.87L183.01 -8.99L182.78 -9.58L179.63 -9.58L179.32 -9.29L179.5 -8.99C179.51 -8.93 179.55 -8.83 179.61 -8.66C179.68 -8.49 179.71 -8.34 179.71 -8.2C179.71 -8.03 179.68 -7.87 179.63 -7.73C179.58 -7.59 179.48 -7.42 179.34 -7.21L177.9 -5.11L177.53 -5.11C177.3 -5.11 177.18 -5.01 177.18 -4.8C177.18 -4.7 177.22 -4.62 177.28 -4.56C177.34 -4.5 177.46 -4.43 177.63 -4.34C177.83 -4.24 178.02 -4.12 178.18 -3.99C178.34 -3.86 178.48 -3.68 178.59 -3.45L179.32 -2.02C179.62 -1.42 179.87 -0.96 180.09 -0.65C180.3 -0.33 180.53 -0.1 180.77 0.05C181.01 0.2 181.32 0.27 181.7 0.27C182.31 0.27 182.86 0.03 183.34 -0.44L183.03 -0.98C182.81 -0.82 182.58 -0.73 182.33 -0.73C182.19 -0.73 182.08 -0.77 181.99 -0.85Z M200.01 -1.03C199.69 -1.22 199.53 -1.5 199.53 -1.87L199.53 -6.02C199.53 -6.75 199.58 -7.33 199.69 -7.77C199.8 -8.21 200.01 -8.62 200.3 -9.01L200.53 -9.29L200.3 -9.58L191.97 -9.58L191.78 -9.01L192.18 -8.87C192.67 -8.79 193.01 -8.7 193.19 -8.58C193.37 -8.47 193.46 -8.25 193.46 -7.93C193.46 -7.8 193.44 -7.62 193.4 -7.4L193.28 -6.4C193.14 -5.01 192.99 -3.97 192.84 -3.27C192.68 -2.57 192.41 -2 192.01 -1.55C191.61 -1.11 191.02 -0.84 190.24 -0.75L190.24 3.22L190.83 3.45L190.95 3.05C191.17 2.28 191.37 1.68 191.57 1.26C191.76 0.85 192.01 0.53 192.33 0.32C192.64 0.11 193.06 0 193.59 0L197.93 0C198.46 0 198.88 0.11 199.2 0.33C199.52 0.55 199.79 0.87 199.99 1.29C200.2 1.72 200.39 2.3 200.57 3.05L200.67 3.47L201.25 3.24L201.25 -0.75C200.74 -0.75 200.33 -0.85 200.01 -1.03ZM197.55 -1.26C197.41 -1.09 197.1 -1 196.64 -1L192.68 -1C193.1 -1.22 193.43 -1.61 193.69 -2.16C193.94 -2.71 194.15 -3.42 194.3 -4.28C194.46 -5.14 194.62 -6.32 194.79 -7.81C194.81 -8.09 194.91 -8.28 195.09 -8.38C195.27 -8.48 195.54 -8.52 195.9 -8.52L196.64 -8.52C197.1 -8.52 197.41 -8.44 197.55 -8.26C197.7 -8.09 197.78 -7.73 197.78 -7.19L197.78 -2.35C197.78 -1.8 197.7 -1.44 197.55 -1.26Z M212.51 -1.81C212.29 -2.2 212.18 -2.78 212.18 -3.57L212.18 -6.02C212.18 -6.72 212.24 -7.3 212.36 -7.74C212.48 -8.19 212.69 -8.61 212.99 -9.01L213.22 -9.31L212.99 -9.58L209.13 -9.58L208.92 -9.01L209.32 -8.87C209.76 -8.74 210.06 -8.57 210.21 -8.35C210.36 -8.13 210.44 -7.76 210.44 -7.23L210.44 -2.35C210.44 -1.83 210.36 -1.46 210.21 -1.24C210.06 -1.03 209.76 -0.86 209.32 -0.73L208.92 -0.6L209.13 0L214.07 0C215.53 0 216.61 -0.25 217.3 -0.76C217.98 -1.27 218.33 -1.97 218.33 -2.85C218.33 -3.37 218.18 -3.84 217.88 -4.26C217.57 -4.69 217.13 -5.03 216.55 -5.28C215.98 -5.54 215.29 -5.67 214.49 -5.67C214 -5.67 213.57 -5.61 213.2 -5.51C212.83 -5.4 212.64 -5.23 212.64 -4.99C212.64 -4.89 212.66 -4.8 212.7 -4.72C212.74 -4.65 212.79 -4.61 212.87 -4.61C212.92 -4.61 213.06 -4.64 213.28 -4.71C213.49 -4.77 213.79 -4.8 214.16 -4.8C214.79 -4.8 215.31 -4.62 215.73 -4.25C216.14 -3.89 216.34 -3.44 216.34 -2.91C216.34 -2.33 216.16 -1.86 215.79 -1.49C215.43 -1.13 214.96 -0.94 214.39 -0.94C213.97 -0.94 213.61 -0.99 213.3 -1.09C213 -1.19 212.74 -1.43 212.51 -1.81ZM218.89 -0.6L219.06 0L223.42 0L223.59 -0.58L223.23 -0.69C222.93 -0.78 222.71 -0.88 222.57 -0.97C222.43 -1.07 222.33 -1.21 222.26 -1.4C222.2 -1.58 222.17 -1.86 222.17 -2.22L222.17 -6.02C222.17 -6.74 222.23 -7.32 222.35 -7.76C222.47 -8.21 222.68 -8.62 222.98 -9.01L223.19 -9.31L222.98 -9.58L219.06 -9.58L218.89 -9.01L219.29 -8.87C219.74 -8.74 220.04 -8.57 220.19 -8.36C220.34 -8.15 220.41 -7.77 220.41 -7.23L220.41 -2.35C220.41 -1.81 220.34 -1.44 220.19 -1.23C220.04 -1.03 219.74 -0.86 219.29 -0.73Z M235.01 -1.85L239.67 -6.23L239.67 -2.35C239.67 -1.81 239.6 -1.44 239.45 -1.23C239.3 -1.03 239 -0.86 238.53 -0.73L238.15 -0.6L238.34 0L242.68 0L242.87 -0.58L242.49 -0.69C242.18 -0.8 241.95 -0.89 241.81 -0.98C241.67 -1.07 241.57 -1.21 241.5 -1.4C241.44 -1.58 241.41 -1.86 241.41 -2.22L241.41 -6.02C241.41 -6.74 241.47 -7.31 241.59 -7.74C241.71 -8.17 241.92 -8.59 242.22 -9.01L242.43 -9.31L242.22 -9.58L238.34 -9.58L238.15 -9.01L238.53 -8.87C238.86 -8.78 239.09 -8.66 239.24 -8.5C239.39 -8.35 239.49 -8.08 239.56 -7.69L234.91 -3.3L234.91 -6.02C234.91 -6.74 234.97 -7.31 235.09 -7.74C235.21 -8.17 235.42 -8.59 235.72 -9.01L235.95 -9.31L235.72 -9.58L231.84 -9.58L231.65 -9.01L232.04 -8.87C232.49 -8.74 232.78 -8.57 232.93 -8.36C233.08 -8.15 233.15 -7.77 233.15 -7.23L233.15 -2.35C233.15 -1.81 233.08 -1.44 232.93 -1.23C232.78 -1.03 232.49 -0.86 232.04 -0.73L231.65 -0.6L231.84 0L236.2 0L236.37 -0.58L236.01 -0.69C235.7 -0.77 235.47 -0.88 235.32 -1.03C235.18 -1.18 235.07 -1.45 235.01 -1.85ZM234.64 -13.78C234.37 -13.53 234.23 -13.2 234.23 -12.79C234.23 -12.22 234.5 -11.78 235.03 -11.46C235.57 -11.15 236.3 -10.99 237.22 -10.99C238.15 -10.99 238.88 -11.15 239.42 -11.46C239.96 -11.78 240.23 -12.22 240.23 -12.79C240.23 -13.2 240.1 -13.53 239.84 -13.78C239.57 -14.03 239.26 -14.15 238.9 -14.15C238.66 -14.15 238.53 -14.06 238.53 -13.88C238.53 -13.85 238.58 -13.74 238.67 -13.56C238.76 -13.38 238.8 -13.13 238.8 -12.82C238.8 -12.52 238.68 -12.27 238.42 -12.08C238.16 -11.89 237.76 -11.8 237.22 -11.8C236.64 -11.8 236.24 -11.9 236.02 -12.09C235.79 -12.28 235.68 -12.54 235.68 -12.86C235.68 -13.16 235.73 -13.39 235.82 -13.57C235.92 -13.74 235.97 -13.85 235.97 -13.88C235.97 -13.96 235.94 -14.03 235.87 -14.08C235.81 -14.13 235.73 -14.15 235.62 -14.15C235.24 -14.15 234.91 -14.03 234.64 -13.78Z M271.75 -1.03C271.43 -1.22 271.27 -1.5 271.27 -1.87L271.27 -6.02C271.27 -6.75 271.33 -7.33 271.44 -7.77C271.54 -8.21 271.75 -8.62 272.04 -9.01L272.27 -9.29L272.04 -9.58L263.71 -9.58L263.52 -9.01L263.92 -8.87C264.41 -8.79 264.75 -8.7 264.93 -8.58C265.11 -8.47 265.2 -8.25 265.2 -7.93C265.2 -7.8 265.18 -7.62 265.14 -7.4L265.02 -6.4C264.88 -5.01 264.73 -3.97 264.58 -3.27C264.43 -2.57 264.15 -2 263.75 -1.55C263.35 -1.11 262.76 -0.84 261.98 -0.75L261.98 3.22L262.57 3.45L262.69 3.05C262.91 2.28 263.11 1.68 263.31 1.26C263.5 0.85 263.75 0.53 264.07 0.32C264.38 0.11 264.8 0 265.33 0L269.67 0C270.2 0 270.62 0.11 270.94 0.33C271.26 0.55 271.53 0.87 271.73 1.29C271.94 1.72 272.13 2.3 272.31 3.05L272.41 3.47L272.99 3.24L272.99 -0.75C272.49 -0.75 272.07 -0.85 271.75 -1.03ZM269.29 -1.26C269.15 -1.09 268.84 -1 268.38 -1L264.43 -1C264.84 -1.22 265.17 -1.61 265.43 -2.16C265.69 -2.71 265.89 -3.42 266.05 -4.28C266.2 -5.14 266.36 -6.32 266.53 -7.81C266.55 -8.09 266.66 -8.28 266.84 -8.38C267.02 -8.48 267.29 -8.52 267.65 -8.52L268.38 -8.52C268.84 -8.52 269.15 -8.44 269.29 -8.26C269.44 -8.09 269.52 -7.73 269.52 -7.19L269.52 -2.35C269.52 -1.8 269.44 -1.44 269.29 -1.26Z M281.23 -7.46C280.85 -6.7 280.66 -5.81 280.66 -4.78C280.66 -3.77 280.85 -2.88 281.23 -2.11C281.61 -1.35 282.15 -0.76 282.87 -0.35C283.58 0.06 284.41 0.27 285.36 0.27C286.32 0.27 287.14 0.06 287.85 -0.35C288.56 -0.76 289.11 -1.35 289.49 -2.11C289.88 -2.88 290.07 -3.77 290.07 -4.78C290.07 -5.81 289.88 -6.7 289.49 -7.46C289.11 -8.22 288.56 -8.81 287.85 -9.22C287.14 -9.63 286.32 -9.83 285.36 -9.83C284.41 -9.83 283.58 -9.63 282.87 -9.22C282.15 -8.81 281.61 -8.22 281.23 -7.46ZM287.79 -6.58C287.96 -5.95 288.04 -5.33 288.04 -4.72C288.04 -3.94 287.93 -3.25 287.7 -2.65C287.47 -2.05 287.14 -1.59 286.72 -1.26C286.31 -0.94 285.83 -0.77 285.31 -0.77C284.5 -0.77 283.85 -1.13 283.38 -1.85C282.9 -2.57 282.66 -3.54 282.66 -4.76C282.66 -5.56 282.78 -6.27 283.01 -6.88C283.24 -7.5 283.57 -7.98 283.99 -8.32C284.4 -8.66 284.88 -8.83 285.42 -8.83C286.05 -8.83 286.56 -8.61 286.96 -8.18C287.35 -7.74 287.63 -7.21 287.79 -6.58Z M310.33 -2.5C310.23 -3.03 310.17 -3.35 310.14 -3.45L309.48 -6.73C309.45 -6.91 309.43 -7.08 309.43 -7.23C309.43 -7.77 309.65 -8.36 310.1 -9.01L310.35 -9.31L310.06 -9.58L307.56 -9.58L304.74 -3.7L301.98 -9.58L298.72 -9.58L298.57 -9.01L298.94 -8.87C299.3 -8.78 299.57 -8.66 299.75 -8.49C299.93 -8.33 300.02 -8.11 300.02 -7.83C300.02 -7.73 300.01 -7.64 300 -7.58L299.23 -2.35C299.15 -1.85 299.03 -1.48 298.88 -1.25C298.72 -1.02 298.43 -0.85 297.99 -0.73L297.55 -0.6L297.78 0L301.1 0L301.35 -0.27L301.12 -0.6C300.69 -1.24 300.48 -1.84 300.48 -2.41C300.48 -2.51 300.49 -2.65 300.52 -2.83L301.25 -7.46L304.16 -1.27L304.76 -1.27L307.65 -7.46L308.42 -2.66C308.48 -2.35 308.5 -2.15 308.5 -2.04C308.5 -1.7 308.41 -1.41 308.24 -1.2C308.07 -0.98 307.79 -0.82 307.42 -0.73L307.06 -0.6L307.25 0L311.14 0L311.37 -0.27C311.12 -0.53 310.91 -0.83 310.74 -1.18C310.57 -1.52 310.44 -1.96 310.33 -2.5Z"></path>
        </g>
      </svg>
    </Link>
  );
};

Logo.propTypes = {
  darkMode: PropTypes.bool,
};

export default Logo;
