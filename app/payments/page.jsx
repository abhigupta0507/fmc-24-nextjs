"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function paymentPage() {
  const [payments, setPayments] = useState([]);
  const [data, setData] = useState([]);
  useEffect(() => {
    (async () => {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/payments`,
        {
          method: "GET",
        }
      ).then((res) => res.json());
      setData(res.reverse());
    //   console.log(res);
    })();
  }, []);
  return (
    <>
      <table className="text-white p-4">
        <tbody>
          <tr>
            <th>Timestamp</th>
            <th>email</th>
            <th>amount paid</th>
            <th>screenshot</th>
          </tr>
          {data.map((payment, i) => (
            <tr key={i}>
              <td className="pl-12 pr-12">{payment.timestamp}</td>
              <td className="pl-12 pr-12">{payment.email}</td>
              <td className="pl-12 pr-12">{payment.amount_paid}</td>
              <td className="pl-12 pr-12">
                <Link href={payment.image_url}>Link</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
