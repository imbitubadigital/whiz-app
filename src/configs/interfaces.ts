interface PropsExpo {
  name: string;
  slug: string;

  version: string;
  assetBundlePatterns: string[];
}

export interface IConfig {
  name: string;
  baseURL: string;
  keyAsyncStorage: string;

  expo: PropsExpo;
}
