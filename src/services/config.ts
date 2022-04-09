
const production = {
  api: "",
  apiMerchants: "",
};

const dev = {
  api: "https://tb-testphp1.enbrands.com",
  apiMerchants:'https://b.tb-test-k8s.enbrands.com',
};
const test = {
  api: "",
  apiMerchants:'',
};
//module.exports = (env => {
  let config={
    api: "https://tb-testphp1.enbrands.com",
  apiMerchants:'https://b.tb-test-k8s.enbrands.com',
  };
  switch (process.env.VUE_APP_ENV) {
    case "development": {
      config = dev;
      break;
    }
    case "test": {
      config = test;
      break;
    }
    case "debug": {
      config = production;
      break;
    }
    case "production": {
      config = production;
      break;
    }
    default: {
      config = dev;
      break;
    }
  }
  //return config;
//})(process.env.VUE_APP_ENV);
export default config
