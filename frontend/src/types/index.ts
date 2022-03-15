export type JsonData = {
  firstendpoint: string;
  secondendpoint: string;
  sum: number;
};

export type FormProps = {
  label: string;
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  onSubmit: React.FormEventHandler<HTMLFormElement>;
};
