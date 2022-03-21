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

      if (testRegexAndLength(val, regex)) {
        await axios
          .post(`http://localhost:5000/api/?action=${link}${val}`)
          .then((res) => {
            console.log(res);
            console.log("data received");
            setRefetchData(!refetchData);
          })
          .catch((err) => {
            console.log(err);
          });
      } else {
        window.alert(text);
      }
    };

  const text1 =
    "The input is too long or wrong input syntax.\nInput need to be a collection of numbers separated by commas.\nThe right syntax is as follows: 1,2,3,4";
  const text2 =
    "Input is too long or input syntax is incorrect.\nInput needs to be a number\nThe syntax is as follows: 1234";

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
          <div>The sum is prime number: {String(data.secondendpoint)}</div>
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
          <div>The number is prime: {String(data.firstendpoint)}</div>
        </StyledFirstResult>
      )}
    </StyledHolder>
  );
};
