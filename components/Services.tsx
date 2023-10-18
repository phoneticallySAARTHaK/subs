import { FC } from "react";

export type ServicesProps = {
  data: Array<{
    id: number;
    name: string;
    benefits: string;
    price: number;
  }>;
};

export const Services: FC<ServicesProps> = ({ data }) => {
  const names = data.map((p) => p.name);
  const prices = data.map((p) => p.price);
  const benefits = data.map((p) => p.benefits);

  return (
    <table className="border-separate">
      <thead>
        <tr>
          <th>Plan</th>
          {names.map((n) => (
            <th key={n}>{n}</th>
          ))}
        </tr>
      </thead>

      <tbody>
        <tr>
          <th scope="row">Price</th>
          {prices.map((p) => (
            <td key={p}>{p}</td>
          ))}
        </tr>

        <tr>
          <th scope="row">Benefits</th>
          {benefits.map((p) => (
            <td className="" key={p}>
              {p}
            </td>
          ))}
        </tr>
      </tbody>
    </table>
  );
};
