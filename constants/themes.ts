// const {width, height} = Dimensions.get("window");


// import { Roboto_100Thin,
//     Roboto_100Thin_Italic,
//     Roboto_300Light,
//     Roboto_300Light_Italic,
//     Roboto_400Regular,
//     Roboto_400Regular_Italic,
//     Roboto_500Medium,
//     Roboto_500Medium_Italic,
//     Roboto_700Bold,
//     Roboto_700Bold_Italic,
//     Roboto_900Black,
//     Roboto_900Black_Italic } from '@expo-google-fonts/roboto';
// import {useFonts} from "expo-font";
//
// const [fontsLoaded, error] = useFonts({
//     Roboto_100Thin,
//     Roboto_100Thin_Italic,
//     Roboto_300Light,
//     Roboto_300Light_Italic,
//     Roboto_400Regular,
//     Roboto_400Regular_Italic,
//     Roboto_500Medium,
//     Roboto_500Medium_Italic,
//     Roboto_700Bold,
//     Roboto_700Bold_Italic,
//     Roboto_900Black,
//     Roboto_900Black_Italic
// });


export const COLORS = Object.freeze({
    white: "#fff",
    white1: "#FAFAFA",
    black: "#000000",

    green: "#458116",
    red1: "#B51E1E",
    red2: "#8D3636",

    pink: "#FFCB9B",
    gray: "#A5A5A5",
    lightGray: "#919191",
    lightGray1: "#D9D9D9"
});


export const SIZES = Object.freeze({
    // global sizes
    base: 8,
    font: 14,
    radius: 12,
    padding: 24,

    // font sizes
    h1: 30,
    h2: 22,
    h3: 16,
    h4: 14,
    body1: 30,
    body2: 22,
    body3: 16,
    body4: 14,
    body5: 12,

    // app dimensions
    // width ,
    // height
});


export const FONTS = Object.freeze({
    h1: {fontSize: SIZES.h1, lineHeight: 36},
    h2: {fontSize: SIZES.h2, lineHeight: 30},
    h3: {fontSize: SIZES.h3, lineHeight: 22},
    h4: {fontSize: SIZES.h4, lineHeight: 22},
    body1: {fontSize: SIZES.body1, lineHeight: 36},
    body2: {fontSize: SIZES.body2, lineHeight: 30},
    body3: {fontSize: SIZES.body3, lineHeight: 22},
    body4: {fontSize: SIZES.body4, lineHeight: 22},
    body5: {fontSize: SIZES.body5, lineHeight: 22},
});

// export interface FONTS {
//     readonly h1: {fontFamily: Roboto_900Black, fontSize: SIZES.h1, lineHeight: 36},
//     readonly h2: {fontFamily: Roboto_700Bold, fontSize: SIZES.h2, lineHeight: 30},
//     readonly h3: {fontFamily: Roboto_700Bold, fontSize: SIZES.h3, lineHeight: 22},
//     readonly h4: {fontFamily: Roboto_700Bold, fontSize: SIZES.h4, lineHeight: 22},
//     readonly body1: {fontFamily: Roboto_400Regular, fontSize: SIZES.body1, lineHeight: 36},
//     readonly body2: {fontFamily: Roboto_400Regular, fontSize: SIZES.body2, lineHeight: 30},
//     readonly body3: {fontFamily: Roboto_400Regular, fontSize: SIZES.body3, lineHeight: 22},
//     readonly body4: {fontFamily: Roboto_400Regular, fontSize: SIZES.body4, lineHeight: 22},
//     readonly body5: {fontFamily: Roboto_400Regular, fontSize: SIZES.body5, lineHeight: 22},
// };



const appTheme = {COLORS, SIZES, FONTS};

export default appTheme;
