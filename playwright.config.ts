import type {PlaywrightTestConfig} from '@playwright/test';
import { gupconfig } from './GUP.config';
import { on } from 'events';

//import { defineConfig, devices } from '@playwright/test';

const config:PlaywrightTestConfig ={
   testDir : "./tests",
   use:{
     baseURL :gupconfig.environment.baseURL,
     //baseURL: "http://192.168.1.17:8080/",
      headless : false,
      screenshot: "on",
      video:"on",

   }
};
export default config
