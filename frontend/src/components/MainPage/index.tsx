import React, { FC, useState, useEffect } from "react";
import { Form as SubForm } from "../Form";
import axios from "axios";
import { JsonData } from "../../types";
import { StyledFirstResult, StyledHolder } from "../styles/FormStyles";

export const Form: FC = () => {
  const [sumData, setSumData] = useState("");
  const [sumValue, setSumValue] = useState("");

  const [data, setData] = useState<JsonData | undefined>(undefined);

  const [, setLoading] = useState(false);
  const [, setError] = useState(false);

  const [refetchData, setRefetchData] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch("http://localhost:5000/")
      .then((res) => res.json())
      .then((json) => {
        setData(json);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [refetchData]);

  const testRegexAndLength = (input: string, regex: RegExp) => {
    return regex.test(input) && input.length < 20;
  };

  const handleSubmit =
    (regex: RegExp, link: string, val: string, text: string) =>
    async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      try {
        if (testRegexAndLength(val, regex)) {
          const res = await axios.post(
            `http://localhost:5000/api/?action=${link}${val}`
          );
          console.log(res);
          console.log("data received");
          setRefetchData(!refetchData);
        } else {
          window.alert(text);
        }
      } catch (err) {
        console.error(err);
      }
    };

  const text1 =
    "Incorrect input syntax or the input is too long.\nInput needs to be a collection of numbers separated by commas.\nThe right syntax is as follows: 1,2,3,4";
  const text2 =
    "Input is too long or input syntax is incorrect.\nInput needs to be a number\nThe right syntax is as follows: 1234";

  return (
    <StyledHolder>
      <SubForm
        label="Sum and Check"
        value={sumValue}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setSumValue(e.currentTarget.value)
        }
        onSubmit={handleSubmit(
          /^[0-9]+(,[0-9]+)*$/,
          "sumandcheck&numbers=",
          sumValue,
          text1
        )}
      />

      {data && (
        <StyledFirstResult>
          <div>Sum of numbers: {data.sum}</div>
          <div>The sum is a prime number: {String(data.secondendpoint)}</div>
        </StyledFirstResult>
      )}
      <SubForm
        label="Check Prime"
        value={sumData}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setSumData(e.currentTarget.value)
        }
        onSubmit={handleSubmit(
          /^[0-9]*$/,
          "checkprime&number=",
          sumData,
          text2
        )}
      />

      {data && (
        <StyledFirstResult>
          <div>The number is a prime num: {String(data.firstendpoint)}</div>
        </StyledFirstResult>
      )}
    </StyledHolder>
  );
};
