"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const App = () => {
    (0, react_1.useLayoutEffect)(() => {
        const updateRemSize = () => {
            const fontSizeInPercent = (document.body.clientWidth * 100) / 1440;
            if (fontSizeInPercent < 100) {
                document.documentElement.style.fontSize = `${fontSizeInPercent}%`;
            }
        };
        updateRemSize();
        window.addEventListener("resize", updateRemSize);
        return () => window.removeEventListener("resize", updateRemSize);
    }, []);
    return (react_1.default.createElement("div", { className: "flex h-screen relative " },
        react_1.default.createElement("img", { src: "pexels-lukas-317356.jpg", className: "w-screen h-screen -z-10" }),
        react_1.default.createElement("button", { className: "z-10 px-3 py-4 h-fit absolute top-[35%] left-[30%]" }, "Todos"),
        react_1.default.createElement("button", { className: "z-10 px-3 py-4 h-fit absolute bottom-[20%] left-[55%]" }, "Notes")));
};
exports.default = App;
