export interface CodeProps {
  sourceCodes: Array<SourceProps>;
}

export interface SourceProps {
  source: string;
  language: string;
}

export interface KeyProps {
  key: string;
}
