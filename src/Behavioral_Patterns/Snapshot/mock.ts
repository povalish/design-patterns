type State = [
  string,
  (value: string) => void,
];

export const useState = (defaultValue: string): State => [
  defaultValue,
  (newValue: string) => undefined,
];


export const useEffect = (
  callback: () => void,
  dependencies: any[],
) => undefined;
