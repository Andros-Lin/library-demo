declare module "element-ui/lib/locale*" {
  function use(l?: any): void;
  function t(path: any, options?: any): string;
  function i18n(fn?: (key?: any, value?: any) => any): void;
}
