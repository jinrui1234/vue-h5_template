import path from "path";
export default {
  plugins: {
    // tailwindcss: {},
    // 使用 cnjm-postcss-px-to-viewport 规避 postcss.plugin was deprecated 警告
    "cnjm-postcss-px-to-viewport": {
      viewportWidth: 750, // 根据设计稿设定
      unitPrecision: 2, // 转化精度，转换后保留位数
      viewportUnit: "vmin", // 转换后的单位
      fontViewportUnit: "vmin", // 字体单位
      minPixelValue: 1, // 默认值1，小于或等于1px则不进行转换
      landscape: false, // 是否处理横屏情况
      unitToConvert: "px", // 需要转换的单位
      customFun: ({ file }) => {
        // 这个自定义的方法是针对处理vant组件下的设计稿为375问题
        const designWidth = path
          .join(file)
          .includes(path.join("node_modules", "vant"))
          ? 375
          : 750;
        return designWidth;
      }
    },
    autoprefixer: {
      overrideBrowserslist: ["Android >= 4.0", "iOS >= 7"]
    }
  }
};
