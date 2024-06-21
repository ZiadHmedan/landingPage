import { NumBtn } from "../components";
import { logo } from "../utils";
export default function ContactUs() {
  return (
    <footer className="bg-dark relative ">
      <div className="container  xl:py-[62px] pt-[51px] pb-[50px] xl:grid xl:grid-cols-3 flex flex-col-reverse ">
        <div className="grid  h-full xl:min-h-[127px]  ">
          <div className="max-xl:order-2 max-xl:mx-auto max-xl:mt-[54px]">
            <svg xmlns="http://www.w3.org/2000/svg" width="146" height="24">
              <g >
                <path
                  fill="#fff"
                  d="M40.014 16.809V8.553c0-1.577.366-2.82 1.098-3.73.733-.91 1.65-1.365 2.75-1.365 2.158 0 3.237 1.577 3.237 4.731v8.62h3.782v-9.58c0-2.415-.5-4.22-1.503-5.417C48.376.615 46.945.017 45.084.017c-1.222 0-2.34.234-3.352.703a6.833 6.833 0 00-2.56 2.043h-.066C38.126.932 36.486.017 34.184.017c-.969 0-1.902.217-2.799.653a6.976 6.976 0 00-2.353 1.878h-.05V.265H25.2v16.527h3.782V8.553c0-1.577.372-2.82 1.115-3.73.743-.91 1.693-1.365 2.849-1.365 2.19 0 3.286 1.577 3.286 4.731v8.62h3.782zm21.101.248c2.246 0 3.997-.827 5.252-2.482h.05v2.217h3.616V.265h-3.782V2.25h-.066C64.93.761 63.23.017 61.082.017a7.76 7.76 0 00-5.681 2.415c-.705.75-1.26 1.66-1.668 2.73a9.589 9.589 0 00-.611 3.44c0 1.258.203 2.416.61 3.475.408 1.059.964 1.952 1.669 2.68a7.348 7.348 0 002.535 1.696 8.325 8.325 0 003.18.604zm.595-3.441c-1.399 0-2.538-.466-3.419-1.398-.88-.932-1.321-2.132-1.321-3.599 0-1.555.454-2.804 1.362-3.747.909-.943 2.04-1.414 3.394-1.414 1.343 0 2.458.493 3.345 1.48.886.988 1.33 2.215 1.33 3.681 0 1.467-.455 2.667-1.363 3.599-.909.932-2.018 1.398-3.328 1.398zm27.112 3.193V7.064c0-2.393-.536-4.166-1.61-5.319C86.14.593 84.655.017 82.762.017a7.373 7.373 0 00-3.056.645 6.958 6.958 0 00-2.477 1.87h-.05V.264h-3.782v16.527h3.782V8.487c0-1.588.388-2.823 1.164-3.706.777-.882 1.814-1.323 3.113-1.323.595 0 1.104.077 1.528.231.424.155.796.406 1.115.753.32.348.556.819.71 1.415.154.595.231 1.323.231 2.183v8.769h3.782zm10.218.248c2.246 0 3.996-.827 5.252-2.482h.05v2.217h3.616V.265h-3.782V2.25h-.066C102.855.761 101.154.017 99.007.017a7.76 7.76 0 00-5.682 2.415c-.704.75-1.26 1.66-1.668 2.73a9.589 9.589 0 00-.61 3.44c0 1.258.203 2.416.61 3.475.408 1.059.964 1.952 1.668 2.68a7.348 7.348 0 002.536 1.696 8.325 8.325 0 003.179.604zm.594-3.441c-1.398 0-2.538-.466-3.418-1.398-.881-.932-1.322-2.132-1.322-3.599 0-1.555.455-2.804 1.363-3.747.908-.943 2.04-1.414 3.394-1.414 1.343 0 2.458.493 3.344 1.48.886.988 1.33 2.215 1.33 3.681 0 1.467-.455 2.667-1.363 3.599-.908.932-2.018 1.398-3.328 1.398zm19.07 10.125c1.2 0 2.274-.14 3.22-.422.947-.281 1.743-.673 2.387-1.175a6.385 6.385 0 001.602-1.844 8.14 8.14 0 00.916-2.383c.188-.86.281-1.803.281-2.829V.265h-3.782v1.737h-.066a7.059 7.059 0 00-2.353-1.49A7.62 7.62 0 00118.142 0c-1.508 0-2.862.358-4.062 1.075-1.2.717-2.134 1.713-2.8 2.987-.666 1.273-.999 2.705-.999 4.293 0 1.61.35 3.038 1.049 4.285.699 1.246 1.66 2.203 2.882 2.87 1.222.667 2.598 1.001 4.129 1.001 2.047 0 3.716-.673 5.004-2.018h.066v1.753c0 1.17-.43 2.14-1.288 2.912-.86.772-2.07 1.158-3.634 1.158-1.068 0-2.006-.132-2.816-.397-.809-.265-1.742-.678-2.799-1.24l-.892 3.341c.925.552 1.966.976 3.122 1.274 1.156.298 2.356.447 3.6.447zm.132-10.72c-1.365 0-2.491-.434-3.377-1.3-.887-.865-1.33-2.026-1.33-3.482 0-1.4.435-2.542 1.305-3.425.87-.882 2.004-1.323 3.402-1.323 1.332 0 2.442.435 3.328 1.307.886.871 1.33 2.002 1.33 3.391 0 1.401-.433 2.556-1.297 3.466-.864.91-1.985 1.365-3.361 1.365zm19.086 4.036c1.542 0 2.899-.281 4.071-.844 1.173-.562 2.133-1.323 2.882-2.283l-2.642-2.266c-1.035 1.301-2.406 1.952-4.113 1.952-1.21 0-2.237-.337-3.08-1.01-.842-.672-1.384-1.593-1.627-2.762h12.024c.066-.397.099-.9.099-1.506 0-1.599-.325-3.027-.975-4.285a7.198 7.198 0 00-2.807-2.961c-1.222-.717-2.632-1.075-4.228-1.075a8.191 8.191 0 00-3.188.62c-.99.414-1.844.99-2.56 1.729-.715.739-1.277 1.638-1.684 2.696-.407 1.06-.611 2.212-.611 3.458 0 1.688.369 3.185 1.106 4.492.738 1.307 1.746 2.308 3.023 3.003 1.277.695 2.714 1.042 4.31 1.042zm3.815-10.274h-8.257c.264-1.059.776-1.878 1.535-2.457.76-.579 1.663-.868 2.709-.868 1.057 0 1.93.298 2.618.893.688.596 1.153 1.406 1.395 2.432z"
                />
                <g fill="#F3603C">
                  <path d="M2.786 10.286c1.538 0 2.785 1.279 2.785 2.857C5.571 14.72 4.324 16 2.786 16 1.247 16 0 14.72 0 13.143c0-1.578 1.247-2.857 2.786-2.857zM2.786 0C4.324 0 5.57 1.28 5.57 2.857c0 1.578-1.247 2.857-2.785 2.857C1.247 5.714 0 4.435 0 2.857 0 1.28 1.247 0 2.786 0zm10.028 0C14.353 0 15.6 1.28 15.6 2.857c0 1.578-1.247 2.857-2.786 2.857-1.538 0-2.785-1.279-2.785-2.857C10.029 1.28 11.276 0 12.814 0z" />
                  <ellipse
                    cx="12.814"
                    cy="13.257"
                    opacity=".5"
                    rx="2.786"
                    ry="2.857"
                  />
                </g>
              </g>
            </svg>
          </div>

          <ul className=" flex gap-3  max-xl:gap-8  max-xl:order-1 xl:self-end max-xl:mx-auto">
            <li>
              <a href="">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="21"
                  height="20"
                  className="max-xl:hidden  hover:fill-BrightRed fill-[#fff] transition ease-in-out duration-300"
                >
                  <path
                  
                    d="M18.896 0H1.104C.494 0 0 .494 0 1.104v17.793C0 19.506.494 20 1.104 20h9.58v-7.745H8.076V9.237h2.606V7.01c0-2.583 1.578-3.99 3.883-3.99 1.104 0 2.052.082 2.329.119v2.7h-1.598c-1.254 0-1.496.597-1.496 1.47v1.928h2.989l-.39 3.018h-2.6V20h5.098c.608 0 1.102-.494 1.102-1.104V1.104C20 .494 19.506 0 18.896 0z"
                  />
                </svg>
                <svg
                  className="xl:hidden hover:fill-BrightRed fill-[#fff] transition ease-in-out duration-300"
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M30.2333 0H1.76667C0.790667 0 0 0.790667 0 1.76667V30.2347C0 31.2093 0.790667 32 1.76667 32H17.0933V19.608H12.9227V14.7787H17.0933V11.2173C17.0933 7.084 19.6173 4.83333 23.3053 4.83333C25.072 4.83333 26.5893 4.96533 27.032 5.024V9.344L24.4747 9.34533C22.4693 9.34533 22.0813 10.2987 22.0813 11.696V14.78H26.864L26.2413 19.6093H22.0813V32H30.236C31.2093 32 32 31.2093 32 30.2333V1.76667C32 0.790667 31.2093 0 30.2333 0Z"
                    
                  />
                </svg>
              </a>
            </li>
            <li className="">
              <a href="#">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="21"
                  height="20"
                  className="max-xl:hidden hover:fill-BrightRed fill-[#fff] transition ease-in-out duration-300 "
                >
                  <path d="M10.333 0c-5.522 0-10 4.478-10 10 0 5.523 4.478 10 10 10 5.523 0 10-4.477 10-10 0-5.522-4.477-10-10-10zm3.701 14.077c-1.752.12-5.653.12-7.402 0C4.735 13.947 4.514 13.018 4.5 10c.014-3.024.237-3.947 2.132-4.077 1.749-.12 5.651-.12 7.402 0 1.898.13 2.118 1.059 2.133 4.077-.015 3.024-.238 3.947-2.133 4.077zM8.667 8.048l4.097 1.949-4.097 1.955V8.048z" />
                </svg>
                <svg
                  className="xl:hidden  hover:fill-BrightRed fill-[#fff] transition ease-in-out duration-300"
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16 0C7.164 0 0 7.164 0 16C0 24.836 7.164 32 16 32C24.836 32 32 24.836 32 16C32 7.164 24.836 0 16 0ZM21.9213 22.5227C19.1187 22.7147 12.876 22.7147 10.0773 22.5227C7.04267 22.3147 6.68933 20.8293 6.66667 16C6.68933 11.1613 7.04667 9.68533 10.0773 9.47733C12.876 9.28533 19.12 9.28533 21.9213 9.47733C24.9573 9.68533 25.3093 11.1707 25.3333 16C25.3093 20.8387 24.9533 22.3147 21.9213 22.5227ZM19.8893 15.9947L13.3333 12.8773V19.1227L19.8893 15.9947Z"
                    
                  />
                </svg>
              </a>
            </li>
            <li>
              <a href="#">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="21"
                  height="18"
                  className="max-xl:hidden hover:fill-BrightRed transition ease-in-out duration-300 fill-[#fff]"
                >
                  <path d="M20.667 2.797a8.192 8.192 0 01-2.357.646 4.11 4.11 0 001.804-2.27 8.22 8.22 0 01-2.606.996A4.096 4.096 0 0014.513.873c-2.649 0-4.595 2.472-3.997 5.038a11.648 11.648 0 01-8.457-4.287 4.109 4.109 0 001.27 5.478A4.086 4.086 0 011.47 6.59c-.045 1.901 1.317 3.68 3.29 4.075a4.113 4.113 0 01-1.853.07 4.106 4.106 0 003.834 2.85 8.25 8.25 0 01-6.075 1.7 11.616 11.616 0 006.29 1.843c7.618 0 11.922-6.434 11.662-12.205a8.354 8.354 0 002.048-2.124z" />
                </svg>
                <svg
                  className="xl:hidden  hover:fill-BrightRed fill-[#fff] transition ease-in-out duration-300"
                  width="32"
                  height="27"
                  viewBox="0 0 32 27"
                  
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M32 3.32534C30.8227 3.85594 29.5573 4.21328 28.2293 4.37436C29.5853 3.55003 30.6267 2.24384 31.116 0.687236C29.848 1.45065 28.4427 2.00561 26.9467 2.30475C25.7507 1.00939 24.0427 0.199951 22.1547 0.199951C17.916 0.199951 14.8013 4.21464 15.7587 8.38227C10.304 8.10479 5.46667 5.4518 2.228 1.41952C0.508 4.41496 1.336 8.33354 4.25867 10.3179C3.184 10.2827 2.17067 9.98354 1.28667 9.48408C1.21467 12.5716 3.39467 15.4601 6.552 16.103C5.628 16.3575 4.616 16.4171 3.58667 16.2167C4.42133 18.8643 6.84533 20.7904 9.72 20.8446C6.96 23.0414 3.48267 24.0228 0 23.6059C2.90533 25.4968 6.35733 26.6 10.064 26.6C22.2533 26.6 29.14 16.149 28.724 6.77559C30.0067 5.83486 31.12 4.66131 32 3.32534Z"
                    
                  />
                </svg>
              </a>
            </li>
            <li>
              <a href="#">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  className="max-xl:hidden hover:fill-BrightRed transition ease-in-out duration-300 fill-[#fff] "
                >
                  <path d="M10 0C4.478 0 0 4.477 0 10c0 4.237 2.636 7.855 6.356 9.312-.088-.791-.167-2.005.035-2.868.182-.78 1.172-4.97 1.172-4.97s-.299-.6-.299-1.486c0-1.39.806-2.428 1.81-2.428.852 0 1.264.64 1.264 1.408 0 .858-.545 2.14-.828 3.33-.236.995.5 1.807 1.48 1.807 1.778 0 3.144-1.874 3.144-4.58 0-2.393-1.72-4.068-4.177-4.068-2.845 0-4.515 2.135-4.515 4.34 0 .859.331 1.781.745 2.281a.3.3 0 01.069.288l-.278 1.133c-.044.183-.145.223-.335.134-1.249-.581-2.03-2.407-2.03-3.874 0-3.154 2.292-6.052 6.608-6.052 3.469 0 6.165 2.473 6.165 5.776 0 3.447-2.173 6.22-5.19 6.22-1.013 0-1.965-.525-2.291-1.148l-.623 2.378c-.226.869-.835 1.958-1.244 2.621.937.29 1.931.446 2.962.446 5.522 0 10-4.477 10-10S15.522 0 10 0z" />
                </svg>
                <svg
                  className="xl:hidden  hover:fill-BrightRed fill-[#fff] transition ease-in-out duration-300"
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16 0C7.164 0 0 7.16267 0 16C0 22.7787 4.21733 28.568 10.1693 30.8987C10.0293 29.6333 9.90267 27.692 10.2253 26.3107C10.516 25.0613 12.1013 18.3573 12.1013 18.3573C12.1013 18.3573 11.6227 17.3987 11.6227 15.9813C11.6227 13.7573 12.912 12.096 14.5173 12.096C15.8813 12.096 16.5413 13.1213 16.5413 14.3493C16.5413 15.7213 15.668 17.7733 15.216 19.676C14.8387 21.268 16.0147 22.568 17.5853 22.568C20.4293 22.568 22.6147 19.5693 22.6147 15.2413C22.6147 11.4107 19.8627 8.732 15.932 8.732C11.38 8.732 8.708 12.1467 8.708 15.6747C8.708 17.0493 9.23733 18.5253 9.89867 19.3253C10.0293 19.484 10.048 19.624 10.0093 19.7853L9.56533 21.5987C9.49467 21.892 9.33333 21.9547 9.02933 21.8133C7.03067 20.8827 5.78133 17.9613 5.78133 15.6147C5.78133 10.568 9.448 5.932 16.3533 5.932C21.904 5.932 26.2173 9.888 26.2173 15.1733C26.2173 20.688 22.7413 25.1253 17.9147 25.1253C16.2933 25.1253 14.7693 24.284 14.248 23.288L13.2507 27.092C12.8893 28.4827 11.9147 30.2253 11.2613 31.2867C12.76 31.7493 14.3507 32 16 32C24.836 32 32 24.836 32 16C32 7.16267 24.836 0 16 0Z"
                    
                  />
                </svg>
              </a>
            </li>
            <li>
              <a href="#">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="21"
                  height="20"
                  className="max-xl:hidden hover:fill-BrightRed transition ease-in-out duration-300 fill-[#fff]"
                >
                  <path d="M10.333 1.802c2.67 0 2.987.01 4.042.059 2.71.123 3.976 1.409 4.1 4.099.048 1.054.057 1.37.057 4.04 0 2.672-.01 2.988-.058 4.042-.124 2.687-1.386 3.975-4.099 4.099-1.055.048-1.37.058-4.042.058-2.67 0-2.986-.01-4.04-.058-2.717-.124-3.976-1.416-4.1-4.1-.048-1.054-.058-1.37-.058-4.041 0-2.67.01-2.986.058-4.04.124-2.69 1.387-3.977 4.1-4.1 1.054-.048 1.37-.058 4.04-.058zm0-1.802C7.618 0 7.278.012 6.211.06 2.579.227.56 2.242.394 5.877.345 6.944.334 7.284.334 10s.011 3.057.06 4.123c.166 3.632 2.181 5.65 5.816 5.817 1.068.048 1.408.06 4.123.06 2.716 0 3.057-.012 4.124-.06 3.628-.167 5.651-2.182 5.816-5.817.049-1.066.06-1.407.06-4.123s-.011-3.056-.06-4.122C20.11 2.249 18.093.228 14.458.06 13.39.01 13.049 0 10.333 0zm0 4.865a5.135 5.135 0 100 10.27 5.135 5.135 0 000-10.27zm0 8.468a3.333 3.333 0 110-6.666 3.333 3.333 0 010 6.666zm5.339-9.87a1.2 1.2 0 10-.001 2.4 1.2 1.2 0 000-2.4z" />
                </svg>
                <svg
                  className="xl:hidden  hover:fill-BrightRed fill-[#fff] transition ease-in-out duration-300"
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16 0C11.6547 0 11.1107 0.0186667 9.404 0.096C3.59333 0.362667 0.364 3.58667 0.0973333 9.40267C0.0186667 11.1107 0 11.6547 0 16C0 20.3453 0.0186667 20.8907 0.096 22.5973C0.362667 28.408 3.58667 31.6373 9.40267 31.904C11.1107 31.9813 11.6547 32 16 32C20.3453 32 20.8907 31.9813 22.5973 31.904C28.4027 31.6373 31.64 28.4133 31.9027 22.5973C31.9813 20.8907 32 20.3453 32 16C32 11.6547 31.9813 11.1107 31.904 9.404C31.6427 3.59867 28.4147 0.364 22.5987 0.0973333C20.8907 0.0186667 20.3453 0 16 0ZM16 2.884C20.272 2.884 20.7787 2.9 22.4667 2.97733C26.8027 3.17467 28.828 5.232 29.0253 9.536C29.1027 11.2227 29.1173 11.7293 29.1173 16.0013C29.1173 20.2747 29.1013 20.78 29.0253 22.4667C28.8267 26.7667 26.8067 28.828 22.4667 29.0253C20.7787 29.1027 20.2747 29.1187 16 29.1187C11.728 29.1187 11.2213 29.1027 9.53467 29.0253C5.188 28.8267 3.17333 26.76 2.976 22.4653C2.89867 20.7787 2.88267 20.2733 2.88267 16C2.88267 11.728 2.9 11.2227 2.976 9.53467C3.17467 5.232 5.19467 3.17333 9.53467 2.976C11.2227 2.9 11.728 2.884 16 2.884ZM7.784 16C7.784 11.4627 11.4627 7.784 16 7.784C20.5373 7.784 24.216 11.4627 24.216 16C24.216 20.5387 20.5373 24.2173 16 24.2173C11.4627 24.2173 7.784 20.5373 7.784 16ZM16 21.3333C13.0547 21.3333 10.6667 18.9467 10.6667 16C10.6667 13.0547 13.0547 10.6667 16 10.6667C18.9453 10.6667 21.3333 13.0547 21.3333 16C21.3333 18.9467 18.9453 21.3333 16 21.3333ZM22.62 7.46C22.62 6.4 23.48 5.54 24.5413 5.54C25.6013 5.54 26.46 6.4 26.46 7.46C26.46 8.52 25.6013 9.38 24.5413 9.38C23.48 9.38 22.62 8.52 22.62 7.46Z"
                    
                  />
                </svg>
              </a>
            </li>
          </ul>
        </div>
        <nav className=" justify-self-center max-xl:my-[50px]  ">
          <ul className="text-white text-sm  tracking-[-.23px] font-[300] grid grid-cols-2 gap-x-[100px] max-xl:pl-7">
            <li className="hover:text-BrightRed transition ease-in-out duration-300 mb-3 order-1  ">
              <a href="#">Home</a>
            </li>
            <li className="hover:text-BrightRed transition ease-in-out duration-300 mb-3 order-3  ">
              <a href="#">Pricing</a>
            </li>
            <li className="hover:text-BrightRed transition ease-in-out duration-300 mb-3 order-5  ">
              <a href="#">Products</a>
            </li>
            <li className="hover:text-BrightRed transition ease-in-out duration-300 mb-3 order-7  ">
              <a href="#">About Us</a>
            </li>
            <li className="hover:text-BrightRed transition ease-in-out duration-300 mb-3 order-2  ">
              <a href="#">Careers</a>
            </li>
            <li className="hover:text-BrightRed transition ease-in-out duration-300 mb-3 order-4  ">
              <a href="#">Community</a>
            </li>
            <li className="hover:text-BrightRed transition ease-in-out duration-300 mb-3 order-6  ">
              <a href="#">Privacy Policy</a>
            </li>
          </ul>
        </nav>
        <div className="grid max-xl:mx-auto xl:justify-self-end ">
          <form action="" className="flex gap-2  ">
            <input
              type="text"
              className=" text-BrightRed pl-4 self-start rounded-full placeholder:text-xs  py-3 w-[239px] xl:w-[200px] "
              placeholder="Updates in your inbox…"
            />
            <NumBtn
              type="submit"
              style="text-xs font-bold h-[48px] w-[80px] xl:w-[64px] hover:bg-BrightRedLight transition ease-in-out duration-500"
            >
              Go
            </NumBtn>
          </form>
          <p className=" max-xl:hidden  xl:self-end xl:justify-self-end xl:mt-[px] text-xs   tracking-[-0.2px]  opacity-50 text-white ">
            Copyright 2020. All Rights Reserved
          </p>
        </div>
      </div>
      <p className=" xl:hidden pb-[30px] text-center text-xs  font-[100] tracking-[-0.2px]  opacity-50 text-white">
        Copyright 2020. All Rights Reserved
      </p>
    </footer>
  );
}
