// routes/data.tsx
import { PrismaClient } from "@prisma/client";
import { LoaderFunction, json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

const prisma = new PrismaClient();

export const loader: LoaderFunction = async () => {
  const data = await prisma.jsonObject.findMany();
  return json(data);
};

export default function DataTable() {
  const data = useLoaderData();

  return (
    <div>
      <h1>Stored JSON Data</h1>
      <div className="flex w-full">
        <table className="w-full ">
          <thead>
            <tr>
              <th>Experience</th>
              <th>Favorite Language</th>
              <th>Will Work Onsite</th>
              <th>Will Work with Ruby</th>
              <th>Interview Date</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item: any) => {
              const parsedData = JSON.parse(item.data);
              return (
                <tr key={item.id}>
                  <td className="text-center">
                    {parsedData.years_of_experience}
                  </td>
                  <td className="text-center">
                    {parsedData.favorite_programming_language}
                  </td>
                  <td className="text-center">
                    {parsedData.will_work_onsite ? "Yes" : "No"}
                  </td>
                  <td className="text-center">
                    {parsedData.will_work_with_ruby ? "Yes" : "No"}
                  </td>
                  <td className="text-center">{parsedData.interview_date}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
